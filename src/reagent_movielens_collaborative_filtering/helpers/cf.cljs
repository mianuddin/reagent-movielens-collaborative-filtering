(ns reagent-movielens-collaborative-filtering.helpers.cf)

; centers ratings by their mean
(defn center-ratings [df]
  (.chain df
          (fn [row]
              (.set row "rating" (- (.get row "rating") (.stat.mean df "rating"))))))

; centers a user's ratings by their mean
(defn center-ratings-user [df user-id]
  (center-ratings (.filter df #js {:userId user-id})))

; creates a set of user ids from a given dataframe
(defn get-df-user-ids [df]
  (-> df
      (.unique "userId")
      (.transpose)
      (.toArray)
      (get 0)
      (set)))

; calculates the numerator of cosine similarity when used in the reduction of a dataframe
(defn numerator-reduction [prev next]
  (+ prev (* (.get next "tRating") (.get next "gRating"))))

; calculates half of the denominator of cosine similarity when used in the reduction of a dataframe
(defn denominator-reduction [col prev next]
  (+ prev (Math/pow (.get next col) 2)))

; calculates the cosine similarity when used in the reduction of a dataframe
(defn cosine-similarity [df]
  (/ (.reduce df numerator-reduction 0)
     (* (Math/sqrt (.reduce df (partial denominator-reduction "tRating") 0))
        (Math/sqrt (.reduce df (partial denominator-reduction "gRating") 0)))))

; calculate how similar the given movie is to the target
(defn calculate-similarity [movies ratings target-id given-id]
  (def target-ratings (.filter ratings #js {:movieId target-id}))
  (def given-ratings (.filter ratings #js {:movieId given-id}))
  (def shared-user-ids (clojure.set/intersection (get-df-user-ids target-ratings) (get-df-user-ids given-ratings)))
  (def shared-target-ratings (-> target-ratings
                                 (.filter (fn [row] (contains? shared-user-ids (.get row "userId"))))
                                 (.renameAll #js ["userId", "tMovieId", "tRating"])))
  (def shared-given-ratings (-> given-ratings
                                (.filter (fn [row] (contains? shared-user-ids (.get row "userId"))))
                                (.renameAll #js ["userId", "gMovieId", "gRating"])))
  (-> (.join shared-target-ratings shared-given-ratings "userId")
      cosine-similarity))

; add a column of similarities to the target movie in the given ratings df
(defn add-similarity-col [movies ratings target-id user-ratings]
  (.chain user-ratings
          (fn [row] (.set row "similarity" (calculate-similarity movies ratings target-id (.get row "movieId"))))))
      
; predict rating of a movie using item-based collaborative filtering
(defn predict-rating [movies ratings target-id user-ratings & [neighborhood-size]]
  (-> (add-similarity-col movies ratings target-id user-ratings)
      (.sortBy "similarity" true)
      (.slice 0 (or neighborhood-size 10))
      (.stat.mean "rating")))

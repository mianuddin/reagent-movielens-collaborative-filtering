(ns reagent-movielens-collaborative-filtering.helpers.cf
  (:require [clojure.set]))

; centers ratings by their mean
(defn center-ratings [df]
  (.chain df #(.set % "rating" (- (.get % "rating") (.stat.mean df "rating")))))

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
(defn calculate-similarity [ratings target-id given-id]
  (let [target-ratings (.filter ratings #js {:movieId target-id})
        given-ratings (.filter ratings #js {:movieId given-id})
        shared-user-ids (clojure.set/intersection (get-df-user-ids target-ratings) (get-df-user-ids given-ratings))]
    (-> (.join (-> target-ratings
                    (.filter #(contains? shared-user-ids (.get % "userId")))
                    (.renameAll #js ["userId", "tMovieId", "tRating"]))
                (-> given-ratings
                    (.filter #(contains? shared-user-ids (.get % "userId")))
                    (.renameAll #js ["userId", "gMovieId", "gRating"]))
                "userId")
        cosine-similarity)))

; add a column of similarities to the target movie in the given ratings df
(defn add-similarity-col [ratings target-id user-ratings]
  (.chain user-ratings #(.set % "similarity" (calculate-similarity ratings target-id (.get % "movieId")))))
      
; predict rating of a movie using item-based collaborative filtering
(defn predict-rating [ratings target-id user-ratings & [neighborhood-size]]
  (-> (add-similarity-col ratings target-id user-ratings)
      (.sortBy "similarity" true)
      (.slice 0 (or neighborhood-size 10))
      (.stat.mean "rating")))

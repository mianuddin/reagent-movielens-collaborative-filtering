(ns reagent-movielens-collaborative-filtering.components.movies
  (:require
    [reagent.core :as r]
    [dataframe-js :as DataFrame]))

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
  (/ (.reduce df numerator-reduction 0) (* (Math/sqrt (.reduce df (partial denominator-reduction "tRating") 0))
                                         (Math/sqrt (.reduce df (partial denominator-reduction "gRating") 0)))))

; calculate how similar the given movie is to the target
(defn calculate-similarity [target-id given-id movies ratings]
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

(defn component []
  (let [movies (r/atom nil)
        ratings (r/atom nil)]
    (-> "ml-latest-small/movies.csv"
      DataFrame.fromCSV
      (.then (fn [res] (reset! movies (.castAll res #js [js/Number, js/String, js/String])))))
    (-> "ml-latest-small/ratings.csv"
      DataFrame.fromCSV
      (.then (fn [res] (reset! ratings (.castAll res #js [js/Number, js/Number, js/Number])))))
    (fn []
      (if (and @movies @ratings)
        (let [movies-collection (-> @movies
                                    (.slice 0 16)
                                    .toCollection)]
          [:div (for [movie movies-collection]
                  [:div {:key (.-movieId movie)}
                        [:pre {:style {:display "inline" :margin-right "1em"}} (.-movieId movie)]
                        [:p {:style {:display "inline"}} (.-title movie)]])
                [:pre (.show @movies 10 true)]
                [:pre (.show @ratings 10 true)]
                [:p "The cosine similarity between movies 6 and 1 is " (calculate-similarity 6 1 @movies @ratings)]])
        [:p "Loading..."]))))

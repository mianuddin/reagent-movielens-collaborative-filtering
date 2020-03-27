(ns reagent-movielens-collaborative-filtering.components.explainer
  (:require
    [reagent.core :as r]
    [dataframe-js :as DataFrame]))

; centers a user's ratings by their mean
(defn center-ratings [df user-id]
  (.chain df
          (fn [row]
              (.set row "rating" (- (.get row "rating") (.stat.mean (.filter df #js {:userId user-id}) "rating"))))))

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
      [:div [:h2 "How it works"]
            (if (and @movies @ratings)
              [:<> [:p "Let's try to recommend a movie!"]
                   [:p "First, let's see if our movies loaded in correctly."]
                   [:div {:style {:max-height "40vh"
                                   :overflow-y "scroll"}}
                         (for [movie (.toCollection @movies)]
                           ^{:key (.-movieId movie)}
                           [:div [:pre {:style {:display "inline" :margin-right "1em"}} (.-movieId movie)]
                                 [:p {:style {:display "inline"}} (.-title movie)]])]
                   [:p "Now, let's take a look at the dataframes. Here are the first ten entries of the movies:"]
                   [:pre (.show @movies 10 true)]
                   [:p "Here are the first ten entries of the ratings:"]
                   [:pre (.show @ratings 10 true)]
                   (let [new-ratings (new js/DataFrame
                                          #js [#js [0, 1, 3.0], #js [0, 3, 4.0], #js [0, 5, 2.5], #js [0, 7, 1.0]]
                                          #js ["userId", "movieId", "rating"])]
                     [:<> [:p "Let's come up with some ratings for a hypothetical user 0:"]
                          [:pre (.show new-ratings 10 true)]
                          [:p "Here are the same ratings centered by mean:"]
                          [:pre (.show (center-ratings new-ratings 0) 10 true)]
                          [:p "Now, let's try to predict user 0's rating of movie 6."]
                          [:p "We'll need to calculate cosine similarities between movies. "
                              "For example, " (calculate-similarity @movies @ratings 6 1)
                              " is the cosine similarity between movies 6 and 1. "
                              "Let's add a column of similarities between each movie and movie 6."]
                          [:pre (.show (add-similarity-col @movies @ratings 6 (center-ratings new-ratings 0)) 10 true)]
                          [:p "Since the number of ratings we have to work with is small, let's use a neighborhood "
                              "of two items. When we take the mean of user 0's ratings of the two movies most similar "
                              "to movie 6, movies 1 and 7, we get a predicted rating of "
                              (predict-rating @movies @ratings 6 (center-ratings new-ratings 0) 2) "."]])]
              [:p "Loading data..."])])))

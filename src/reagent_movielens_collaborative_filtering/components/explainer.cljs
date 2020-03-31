(ns reagent-movielens-collaborative-filtering.components.explainer
  (:require
    [reagent.core :as r]
    [dataframe-js :as DataFrame]
    [reagent-movielens-collaborative-filtering.helpers.cf :refer [center-ratings get-df-user-ids cosine-similarity
                                                                  calculate-similarity add-similarity-col
                                                                  predict-rating]]))

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

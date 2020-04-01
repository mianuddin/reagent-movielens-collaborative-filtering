(ns reagent-movielens-collaborative-filtering.components.explainer
  (:require
    [reagent.core :as r]
    [dataframe-js :as DataFrame]
    [reagent-movielens-collaborative-filtering.helpers.cf :refer
      [center-ratings-user get-df-user-ids cosine-similarity calculate-similarity add-similarity-col predict-rating]]))

(defn component [movies ratings]
  [:section [:h2 "How it works"]
            [:p "Let's try to recommend a movie!"]
            [:p "First, let's see if our movies loaded in correctly."]
            (if movies
              [:div {:style {:max-height "40vh"
                    :overflow-y "scroll"}}
                    (for [movie (.toCollection movies)]
                      ^{:key (aget movie "movieId")}
                      [:div [:pre {:style {:display "inline"
                                   :margin-right "1em"}}
                                  (aget movie "movieId")]
                            [:p {:style {:display "inline"}}
                                (aget movie "title")]])]
              [:p "[Loading " [:i "movies.csv"] "...]"])
            [:p "Now, let's take a look at the dataframes. Here are the first ten entries of the movies:"]
            [:pre (if movies
                    (.show movies 10 true)
                    [:<> "[Loading " [:i "movies.csv"] "...]"])]
            [:p "Here are the first ten entries of the ratings:"]
            [:pre (if ratings
                    (.show ratings 10 true)
                    [:<> "[Loading " [:i "ratings.csv"] "...]"])]
            (let [new-ratings (new js/DataFrame
                                  #js [#js [0, 1, 3.0], #js [0, 3, 4.0], #js [0, 5, 2.5], #js [0, 7, 1.0]]
                                  #js ["userId", "movieId", "rating"])]
              [:<> [:p "Let's come up with some ratings for a hypothetical user 0:"]
                    [:pre (.show new-ratings 10 true)]
                    [:p "Here are the same ratings centered by mean:"]
                    [:pre (.show (center-ratings-user new-ratings 0) 10 true)]
                    [:p "Now, let's try to predict user 0's rating of movie 6."]
                    [:p "We'll need to calculate cosine similarities between movies. "
                        (cond
                          (nil? movies) [:<> "[Loading " [:i "movies.csv"] "...] "]
                          (nil? ratings) [:<> "[Loading " [:i "ratings.csv"] "...] "]
                          :else [:<> "For example, "
                                    (calculate-similarity movies ratings 6 1)
                                    " is the cosine similarity between movies 6 and 1. "])
                        "Let's add a column of similarities between each movie and movie 6."]
                    (cond
                      (nil? movies) [:p "[Loading " [:i "movies.csv"] "...]"]
                      (nil? ratings) [:p "[Loading " [:i "ratings.csv"] "...]"]
                      :else [:pre (.show (add-similarity-col movies ratings 6 (center-ratings-user new-ratings 0))
                                          10
                                          true)])
                    [:p "Since the number of ratings we have to work with is small, let's use a neighborhood "
                        "of two items. When we take the mean of user 0's ratings of the two movies most similar "
                        "to movie 6, movies 1 and 7, we get a predicted rating of "
                        (cond
                          (nil? movies) [:i "[Loading movies.csv...]"]
                          (nil? ratings) [:i "[Loading ratings.csv...]"]
                          :else [:<> (predict-rating movies ratings 6 (center-ratings-user new-ratings 0) 2)])
                        "."]])])

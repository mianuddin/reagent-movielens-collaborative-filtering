(ns reagent-movielens-collaborative-filtering.core
  (:require
   [reagent.core :as r]
   [reagent.dom :as d]
   [reagent-movielens-collaborative-filtering.helpers.cf :refer [center-ratings predict-rating]]
   [reagent-movielens-collaborative-filtering.components.explainer :as explainer]
   [reagent-movielens-collaborative-filtering.components.survey :as survey]
   [reagent-movielens-collaborative-filtering.components.search :as search]
   [dataframe-js :as DataFrame]))

;; -------------------------
;; Views

(defn page []
  (let [movies (r/atom nil)
        ratings (r/atom nil)
        user-ratings (r/atom {})
        selected-movie-id (r/atom nil)]
    (-> (DataFrame/fromCSV "ml-latest-small/movies.csv")
        (.then #(reset! movies (.castAll % #js [js/Number, js/String, js/String]))))
    (-> (DataFrame/fromCSV "ml-latest-small/ratings.csv")
        (.then #(reset! ratings (.castAll % #js [js/Number, js/Number, js/Number]))))
    (fn []
        [:<>
         [:h1 "Movie Recommender"]
         [:p "Predict your rating of a movie using item-based collaborative filtering!"]
         [survey/component @movies user-ratings]
         [:h2 "Predict Ratings"]
         (if (> (count (keys @user-ratings)) 10)
           [:<>
            [search/component
             @movies
             #(reset! selected-movie-id (-> % .-target (.getAttribute "data-movie-id") (js/parseInt 10)))]
            (when @selected-movie-id
              (let [df (-> (new (aget DataFrame/prototype "constructor")
                                (clj->js (seq @user-ratings))
                                #js ["movieId", "rating"])
                           (.dropMissingValues)
                           (.castAll #js [js/Number js/Number]))
                    mean (.stat.mean df "rating")
                    centered-pred (predict-rating @ratings
                                                  @selected-movie-id
                                                  (center-ratings df)
                                                  (Math/round (Math/log2 (.count df))))]
                [:<>
                 [:p
                  "Predicted rating for "
                  (-> @movies (.find #js {:movieId @selected-movie-id}) (.get "title"))
                  ": "
                  (+ centered-pred mean)]
                 [:p "Centered prediction: " centered-pred]
                 [:p "Mean before center: " mean]]))]
           [:p "Please rate at least 10 movies to see predictions."])
         [explainer/component @movies @ratings]])))

;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render [page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))

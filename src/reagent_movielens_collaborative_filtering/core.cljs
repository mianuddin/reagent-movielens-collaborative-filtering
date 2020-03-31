(ns reagent-movielens-collaborative-filtering.core
  (:require
    [reagent.core :as r]
    [reagent.dom :as d]
    [reagent-movielens-collaborative-filtering.components.explainer :as explainer]
    [reagent-movielens-collaborative-filtering.components.rating :as rating]
    [reagent-movielens-collaborative-filtering.components.movie-prompt :as movie-prompt]))

;; -------------------------
;; Views

(defn page []
  (let [movies (r/atom nil)
        ratings (r/atom nil)
        rating-val (r/atom nil)]
    (-> "ml-latest-small/movies.csv"
        DataFrame.fromCSV
        (.then (fn [res] (reset! movies (.castAll res #js [js/Number, js/String, js/String])))))
    (-> "ml-latest-small/ratings.csv"
        DataFrame.fromCSV
        (.then (fn [res] (reset! ratings (.castAll res #js [js/Number, js/Number, js/Number])))))
    (fn []
        [:<> [:h1 "Movie Recommender"]
             [movie-prompt/component @movies 1]
             [explainer/component @movies @ratings]])))

;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render [page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))

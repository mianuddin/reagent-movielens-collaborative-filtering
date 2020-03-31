(ns reagent-movielens-collaborative-filtering.core
  (:require
    [reagent.core :as r]
    [reagent.dom :as d]
    [reagent-movielens-collaborative-filtering.components.explainer :as explainer]
    [reagent-movielens-collaborative-filtering.components.rating :as rating]))

;; -------------------------
;; Views

(defn page []
  (let [rating-val (r/atom nil)]
    (fn []
        [:<> [:h1 "Movie Recommender"]
             [:p "User rated the movie: " @rating-val]
             [rating/component rating-val]
             [explainer/component]])))

;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render [page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))

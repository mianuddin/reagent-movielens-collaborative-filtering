(ns reagent-movielens-collaborative-filtering.core
    (:require
      [reagent.core :as r]
      [reagent.dom :as d]
      [reagent-movielens-collaborative-filtering.components.explainer :as explainer]))

;; -------------------------
;; Views

(defn page []
  [:<> [:h1 "Movie Recommender"]
       [explainer/component]])

;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render [page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))

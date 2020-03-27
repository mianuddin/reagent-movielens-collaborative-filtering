(ns reagent-movielens-collaborative-filtering.core
    (:require
      [reagent.core :as r]
      [reagent.dom :as d]
      [reagent-movielens-collaborative-filtering.components.movies :as movies]))

;; -------------------------
;; Views

(defn home-page []
  [:<> [:h1 "Movie Rec. System"]
        [movies/component]])

;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))

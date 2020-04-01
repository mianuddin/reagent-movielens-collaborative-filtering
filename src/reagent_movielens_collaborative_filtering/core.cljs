(ns reagent-movielens-collaborative-filtering.core
  (:require
    [reagent.core :as r]
    [reagent.dom :as d]
    [reagent-movielens-collaborative-filtering.helpers.cf :refer [center-ratings predict-rating]]
    [reagent-movielens-collaborative-filtering.components.explainer :as explainer]
    [reagent-movielens-collaborative-filtering.components.survey :as survey]))

;; -------------------------
;; Views

(defn page []
  (let [movies (r/atom nil)
        ratings (r/atom nil)
        user-ratings (r/atom {})
        flag (r/atom false)]
    (-> "ml-latest-small/movies.csv"
        js/DataFrame.fromCSV
        (.then (fn [res] (reset! movies (.castAll res #js [js/Number, js/String, js/String])))))
    (-> "ml-latest-small/ratings.csv"
        js/DataFrame.fromCSV
        (.then (fn [res] (reset! ratings (.castAll res #js [js/Number, js/Number, js/Number])))))
    (fn []
        [:<> [:h1 "Movie Recommender"]
             [survey/component @movies user-ratings]
             [:button {:type "button"
                       :on-click #(swap! flag not)}
                      "toggle aliens prediction"]
             (when (and @flag (> (count (seq @user-ratings)) 0))
              (let [df (-> (new js/DataFrame
                                (clj->js (seq @user-ratings))
                                #js ["movieId", "rating"])
                                (.dropMissingValues)
                                (.castAll #js [js/Number js/Number]))]
                [:<>
                  [:pre (-> df
                            center-ratings
                            (.show 10 true))]
                  [:p "Prediction for Aliens: "
                      (predict-rating @ratings
                                      1200
                                      (center-ratings df))]
                  [:p "Mean before center: " (.stat.mean df "rating")]]))
             [explainer/component @movies @ratings]])))

;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render [page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))

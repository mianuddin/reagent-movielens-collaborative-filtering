(ns reagent-movielens-collaborative-filtering.components.movies
  (:require
    [reagent.core :as r]
    [dataframe-js :as DataFrame]))

(defn component []
  (let [data (r/atom nil)]
    (fn []
      (-> "ml-latest-small/movies.csv"
        DataFrame.fromCSV
        (.then (fn [res] (reset! data res))))
      (if @data
        (let [dims (.dim @data)]
          [:pre "movies.csv [" (get dims 0) ", " (get dims 1) "]"])
        [:p "Loading..."]))))

(ns reagent-movielens-collaborative-filtering.prod
  (:require
    [reagent-movielens-collaborative-filtering.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)

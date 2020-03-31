(ns reagent-movielens-collaborative-filtering.components.rating
  (:require
    [reagent.core :as r]))

(defn component [val]
  [:div [:input {:min 0.5
                  :max 5
                  :on-change #(reset! val (-> % .-target .-value))
                  :placeholder "e.g. 2.5"
                  :step 0.5
                  :style {:display "inline"
                          :width "5em"}
                  :type "number"
                  :value @val}]
        [:p {:style {:display "inline"}}
            "/ 5"]])
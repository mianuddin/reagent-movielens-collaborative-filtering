(ns reagent-movielens-collaborative-filtering.components.movie-prompt
  (:require
    [reagent.core :as r]
    [reagent-movielens-collaborative-filtering.components.rating :as rating]))

(defn component [movies id rating-val on-next]
  [:div (if movies
          (let [movie (first (filter #(= id (.-movieId %)) (.toCollection movies)))]
            [:p {:style {:margin "0"}}(.-title movie)])
          [:p "[Loading " [:i "movies.csv"] "...]"])
        [rating/component rating-val]
        [:button {:type "button"
                  :on-click on-next}
                  "next"]])

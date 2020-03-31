(ns reagent-movielens-collaborative-filtering.components.movie-prompt
  (:require
    [reagent.core :as r]
    [reagent-movielens-collaborative-filtering.components.rating :as rating]))

(defn component [movies id rating-val on-next]
  [:div (if movies
          [:p {:style {:margin "0"}} (.get (.find movies #js {:movieId id}) "title")]
          [:p "[Loading " [:i "movies.csv"] "...]"])
        [rating/component rating-val]
        [:button {:type "button"
                  :on-click on-next}
                  "next"]])

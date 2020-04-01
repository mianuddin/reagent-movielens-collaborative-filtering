(ns reagent-movielens-collaborative-filtering.components.movie-prompt
  (:require
   [reagent-movielens-collaborative-filtering.components.rating :as rating]))

(defn component [movies id rating-val on-next]
  [:div
   [:strong {:style {:margin "0"}}
    (.get (.find movies #js {:movieId id}) "title")]
   [rating/component rating-val]
   [:button {:type "button"
             :on-click on-next}
    "next movie"]])

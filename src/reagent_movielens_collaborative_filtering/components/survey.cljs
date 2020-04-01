(ns reagent-movielens-collaborative-filtering.components.survey
  (:require
    [reagent.core :as r]
    [reagent-movielens-collaborative-filtering.components.movie-prompt :as movie-prompt]))

(defn component [movies user-ratings]
  (let [shuffled-ids (r/atom nil)
        current-index (r/atom nil)
        current-rating (r/atom nil)]
    (fn [movies user-ratings]
        [:section
          (if movies
            (do (when-not @shuffled-ids
                          (reset! shuffled-ids
                                  (-> movies
                                    (.select "movieId")
                                    (.transpose)
                                    (.toArray)
                                    (get 0)
                                    (shuffle))))
                (when-not @current-index
                          (reset! current-index 0))
                [:<> [movie-prompt/component movies
                                             (get @shuffled-ids @current-index)
                                             current-rating
                                             #(do (when @current-rating
                                                    (reset! user-ratings
                                                            (assoc @user-ratings
                                                                  (get @shuffled-ids @current-index)
                                                                  @current-rating)))
                                                  (reset! current-rating nil)
                                                  (swap! current-index inc))]
                     [:div {:style {:max-height "40vh"
                                    :overflow-y "scroll"}}
                           (doall
                             (for [movie-id (reverse (take @current-index @shuffled-ids))]
                               ^{:key movie-id}
                               [:p {:style {:margin 0}}
                                   (-> movies
                                       (.filter #(= movie-id (.get % "movieId")))
                                       (.toCollection)
                                       (get 0)
                                       (.-title))
                                   " - "
                                   (@user-ratings movie-id "not rated")]))]])
            [:p "[Loading " [:i "movies.csv"] "...]"])])))

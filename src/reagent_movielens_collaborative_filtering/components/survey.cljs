(ns reagent-movielens-collaborative-filtering.components.survey
  (:require
   [reagent.core :as r]
   [reagent-movielens-collaborative-filtering.components.movie-prompt :as movie-prompt]
   [react-loading-skeleton :as Skeleton]))

(defn component []
  (let [shuffled-ids (r/atom nil)
        current-index (r/atom nil)
        current-rating (r/atom "")
        hide-flag (r/atom true)]
    (fn [movies user-ratings]
      (when (and (not @shuffled-ids) movies)
        (reset! shuffled-ids
                (-> movies
                    (.select "movieId")
                    (.transpose)
                    (.toArray)
                    (get 0)
                    (shuffle))))
      (when-not @current-index
        (reset! current-index 0))
      [:section
       [:h2 "Rate Movies"]
       [:p "To predict how you would rate a movie, we'll first need to get an idea of your taste."]
       (if (and @shuffled-ids @current-index)
         (if (= (count @shuffled-ids) (+ 1 @current-index))
           [:p "No more movies!"]
           [movie-prompt/component
            movies
            (get @shuffled-ids @current-index)
            current-rating
            #(do (when (> (count @current-rating) 0)
                   (swap! user-ratings assoc (get @shuffled-ids @current-index) @current-rating))
                 (reset! current-rating "")
                 (swap! current-index inc))])
         [:<>
          [:> (aget Skeleton/prototype "constructor") {:width "10em"}]
          [:> (aget Skeleton/prototype "constructor") {:width "5em"}]])
       [:h3 "Your Ratings"]
       [:button {:type "button"
         :on-click #(swap! hide-flag not)}
        (if @hide-flag "Show" "Hide") " movies without ratings"]
       [:div {:style {:max-height "40vh"
                      :overflow-y "scroll"}}
        (doall
         (for [movie-id (reverse (take @current-index @shuffled-ids))]
           (let [rating (@user-ratings movie-id "not rated")]
             (when-not (and @hide-flag (= rating "not rated"))[:p
              {:key movie-id :style {:margin 0}}
              (-> movies
                  (.filter #(= movie-id (.get % "movieId")))
                  (.toCollection)
                  (get 0)
                  (.-title))
              " - "
              rating]))))]])))

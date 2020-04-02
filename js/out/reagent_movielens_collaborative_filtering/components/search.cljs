(ns reagent-movielens-collaborative-filtering.components.search
  (:require
   [reagent.core :as r]
   [clojure.string :refer [includes? lower-case split]]
   [clj-fuzzy.metrics :refer [jaro-winkler]]))

(defn clean-title-col [row]
  (let [title (.get row "title")]
    (.set row "clean-title" (-> title lower-case (subs 0 (- (count title) 7))))))

(defn create-fuzzy-col [term row]
  (.set row "fuzzy" (jaro-winkler (.get row "clean-title") term)))

(defn component []
  (let [term (r/atom "")]
    (fn [movies handle-click]
      [:div
       [:input {:on-change #(reset! term (-> % .-target .-value))
                :placeholder "Search for a movie..."
                :value @term}]
       (when (and movies (> (count @term) 0))
         [:div.search-results {:style {:max-height "20vh"
                                       :overflow-y "scroll"}}
          (for [movie (-> movies
                          (.chain
                           clean-title-col
                           #(every? (partial includes? (lower-case (.get % "clean-title")))
                                    (split (lower-case @term) " "))
                           (partial create-fuzzy-col (lower-case @term)))
                          (.sortBy "fuzzy" true)
                          (.head 10)
                          (.toCollection))]
            ^{:key (aget movie "movieId")}
            [:p {:data-movie-id (aget movie "movieId")
                 :on-click #(do (handle-click %) (reset! term ""))}
             (aget movie "title")])])])))

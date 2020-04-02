(ns ^:figwheel-no-load reagent-movielens-collaborative-filtering.dev
  (:require
    [reagent-movielens-collaborative-filtering.core :as core]
    [devtools.core :as devtools]))

(extend-protocol IPrintWithWriter
  js/Symbol
  (-pr-writer [sym writer _]
    (-write writer (str "\"" (.toString sym) "\""))))

(enable-console-print!)

(devtools/install!)

(core/init!)

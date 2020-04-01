(defproject reagent-movielens-collaborative-filtering "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.10.1"]
                 [org.clojure/clojurescript "1.10.597"]
                 [reagent "0.10.0" :exclusions [cljsjs/react cljsjs/react-dom]]]

  :plugins [[lein-cljsbuild "1.1.7"]
            [lein-figwheel "0.5.19"]]

  :clean-targets ^{:protect false}

  [:target-path
   [:cljsbuild :builds :app :compiler :output-dir]
   [:cljsbuild :builds :app :compiler :output-to]]

  :resource-paths ["public"]

  :figwheel {:http-server-root "."
             :nrepl-port 7002
             :nrepl-middleware [cider.piggieback/wrap-cljs-repl]
             :css-dirs ["public/css"]}

  :cljsbuild {:builds {:app
                       {:source-paths ["src" "env/dev/cljs"]
                        :compiler
                        {:main "reagent-movielens-collaborative-filtering.dev"
                         :output-to "public/js/app.js"
                         :output-dir "public/js/out"
                         :asset-path   "js/out"
                         :source-map true
                         :optimizations :none
                         :externs ["dataframe_js_externs.js"]
                         :pretty-print true
                         :npm-deps false
                         :foreign-libs [{:file "public/js/npm_packages_bundle.js"
                                         :provides ["react" "react-dom" "react-loading-skeleton" "dataframe-js"]
                                         :global-exports {react React
                                                          react-dom ReactDOM
                                                          react-loading-skeleton Skeleton
                                                          dataframe-js DataFrame}}]}
                        :figwheel
                        {:on-jsload "reagent-movielens-collaborative-filtering.core/mount-root"
                         :open-urls ["http://localhost:3449/index.html"]}}
                       :release
                       {:source-paths ["src" "env/prod/cljs"]
                        :compiler
                        {:output-to "public/js/app.js"
                         :output-dir "target/release"
                         :optimizations :advanced
                         :externs ["dataframe_js_externs.js"]
                         :infer-externs true
                         :npm-deps false
                         :foreign-libs [{:file "public/js/npm_packages_bundle.js"
                                         :provides ["react" "react-dom" "react-loading-skeleton" "dataframe-js"]
                                         :global-exports {react React
                                                          react-dom ReactDOM
                                                          react-loading-skeleton Skeleton
                                                          dataframe-js DataFrame}}]}}}}

  :aliases {"package" ["do" "clean" ["cljsbuild" "once" "release"]]}

  :profiles {:dev {:source-paths ["src" "env/dev/clj"]
                   :dependencies [[binaryage/devtools "1.0.0"]
                                  [figwheel-sidecar "0.5.19"]
                                  [nrepl "0.6.0"]
                                  [cider/piggieback "0.4.2"]]}})

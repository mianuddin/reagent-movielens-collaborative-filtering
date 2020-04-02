// Compiled by ClojureScript 1.10.597 {}
goog.provide('reagent_movielens_collaborative_filtering.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('reagent_movielens_collaborative_filtering.helpers.cf');
goog.require('reagent_movielens_collaborative_filtering.components.explainer');
goog.require('reagent_movielens_collaborative_filtering.components.survey');
goog.require('reagent_movielens_collaborative_filtering.components.search');
goog.require('dataframe_js');
reagent_movielens_collaborative_filtering.core.global$module$dataframe_js = goog.global["DataFrame"];
reagent_movielens_collaborative_filtering.core.page = (function reagent_movielens_collaborative_filtering$core$page(){
var movies = reagent.core.atom.call(null,null);
var ratings = reagent.core.atom.call(null,null);
var user_ratings = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var selected_movie_id = reagent.core.atom.call(null,null);
reagent_movielens_collaborative_filtering.core.global$module$dataframe_js.fromCSV("ml-latest-small/movies.csv").then((function (p1__45705_SHARP_){
return cljs.core.reset_BANG_.call(null,movies,p1__45705_SHARP_.castAll([Number,String,String]));
}));

reagent_movielens_collaborative_filtering.core.global$module$dataframe_js.fromCSV("ml-latest-small/ratings.csv").then((function (p1__45706_SHARP_){
return cljs.core.reset_BANG_.call(null,ratings,p1__45706_SHARP_.castAll([Number,Number,Number]));
}));

return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Movie Recommender"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Predict your rating of a movie using item-based collaborative filtering!"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_movielens_collaborative_filtering.components.survey.component,cljs.core.deref.call(null,movies),user_ratings], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Predict Ratings"], null),(((cljs.core.count.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,user_ratings))) > (10)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Search for a movie to see your predicted rating."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_movielens_collaborative_filtering.components.search.component,cljs.core.deref.call(null,movies),(function (p1__45707_SHARP_){
return cljs.core.reset_BANG_.call(null,selected_movie_id,parseInt(p1__45707_SHARP_.target.getAttribute("data-movie-id"),(10)));
})], null),(cljs.core.truth_((function (){var and__4174__auto__ = cljs.core.deref.call(null,movies);
if(cljs.core.truth_(and__4174__auto__)){
var and__4174__auto____$1 = cljs.core.deref.call(null,ratings);
if(cljs.core.truth_(and__4174__auto____$1)){
return cljs.core.deref.call(null,selected_movie_id);
} else {
return and__4174__auto____$1;
}
} else {
return and__4174__auto__;
}
})())?(function (){var df = (new (reagent_movielens_collaborative_filtering.core.global$module$dataframe_js.prototype["constructor"])(cljs.core.clj__GT_js.call(null,cljs.core.seq.call(null,cljs.core.deref.call(null,user_ratings))),["movieId","rating"])).dropMissingValues().castAll([Number,Number]);
var mean = df.stat.mean("rating");
var centered_pred = reagent_movielens_collaborative_filtering.helpers.cf.predict_rating.call(null,cljs.core.deref.call(null,ratings),cljs.core.deref.call(null,selected_movie_id),reagent_movielens_collaborative_filtering.helpers.cf.center_ratings.call(null,df),Math.round(Math.log2(df.count())));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(0)], null)], null),"Your predicted rating for ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.deref.call(null,movies).find(({"movieId": cljs.core.deref.call(null,selected_movie_id)})).get("title")], null),": ",(centered_pred + mean)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null),"Centered prediction: ",centered_pred], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null),"Mean before center: ",mean], null)], null);
})():null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Please rate at least 10 movies to see predictions."], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_movielens_collaborative_filtering.components.explainer.component,cljs.core.deref.call(null,movies),cljs.core.deref.call(null,ratings)], null)], null);
});
});
reagent_movielens_collaborative_filtering.core.mount_root = (function reagent_movielens_collaborative_filtering$core$mount_root(){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_movielens_collaborative_filtering.core.page], null),document.getElementById("app"));
});
reagent_movielens_collaborative_filtering.core.init_BANG_ = (function reagent_movielens_collaborative_filtering$core$init_BANG_(){
return reagent_movielens_collaborative_filtering.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map?rel=1585791759829

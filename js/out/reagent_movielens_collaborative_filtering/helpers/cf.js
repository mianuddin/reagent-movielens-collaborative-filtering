// Compiled by ClojureScript 1.10.597 {}
goog.provide('reagent_movielens_collaborative_filtering.helpers.cf');
goog.require('cljs.core');
goog.require('clojure.set');
reagent_movielens_collaborative_filtering.helpers.cf.center_ratings = (function reagent_movielens_collaborative_filtering$helpers$cf$center_ratings(df){
return df.chain((function (p1__36069_SHARP_){
return p1__36069_SHARP_.set("rating",(p1__36069_SHARP_.get("rating") - df.stat.mean("rating")));
}));
});
reagent_movielens_collaborative_filtering.helpers.cf.center_ratings_user = (function reagent_movielens_collaborative_filtering$helpers$cf$center_ratings_user(df,user_id){
return reagent_movielens_collaborative_filtering.helpers.cf.center_ratings.call(null,df.filter(({"userId": user_id})));
});
reagent_movielens_collaborative_filtering.helpers.cf.get_df_user_ids = (function reagent_movielens_collaborative_filtering$helpers$cf$get_df_user_ids(df){
return cljs.core.set.call(null,cljs.core.get.call(null,df.unique("userId").transpose().toArray(),(0)));
});
reagent_movielens_collaborative_filtering.helpers.cf.numerator_reduction = (function reagent_movielens_collaborative_filtering$helpers$cf$numerator_reduction(prev,next){
return (prev + (next.get("tRating") * next.get("gRating")));
});
reagent_movielens_collaborative_filtering.helpers.cf.denominator_reduction = (function reagent_movielens_collaborative_filtering$helpers$cf$denominator_reduction(col,prev,next){
return (prev + Math.pow(next.get(col),(2)));
});
reagent_movielens_collaborative_filtering.helpers.cf.cosine_similarity = (function reagent_movielens_collaborative_filtering$helpers$cf$cosine_similarity(df){
return (df.reduce(reagent_movielens_collaborative_filtering.helpers.cf.numerator_reduction,(0)) / (Math.sqrt(df.reduce(cljs.core.partial.call(null,reagent_movielens_collaborative_filtering.helpers.cf.denominator_reduction,"tRating"),(0))) * Math.sqrt(df.reduce(cljs.core.partial.call(null,reagent_movielens_collaborative_filtering.helpers.cf.denominator_reduction,"gRating"),(0)))));
});
reagent_movielens_collaborative_filtering.helpers.cf.calculate_similarity = (function reagent_movielens_collaborative_filtering$helpers$cf$calculate_similarity(ratings,target_id,given_id){
var target_ratings = ratings.filter(({"movieId": target_id}));
var given_ratings = ratings.filter(({"movieId": given_id}));
var shared_user_ids = clojure.set.intersection.call(null,reagent_movielens_collaborative_filtering.helpers.cf.get_df_user_ids.call(null,target_ratings),reagent_movielens_collaborative_filtering.helpers.cf.get_df_user_ids.call(null,given_ratings));
return reagent_movielens_collaborative_filtering.helpers.cf.cosine_similarity.call(null,target_ratings.filter((function (p1__36070_SHARP_){
return cljs.core.contains_QMARK_.call(null,shared_user_ids,p1__36070_SHARP_.get("userId"));
})).renameAll(["userId","tMovieId","tRating"]).join(given_ratings.filter((function (p1__36071_SHARP_){
return cljs.core.contains_QMARK_.call(null,shared_user_ids,p1__36071_SHARP_.get("userId"));
})).renameAll(["userId","gMovieId","gRating"]),"userId"));
});
reagent_movielens_collaborative_filtering.helpers.cf.add_similarity_col = (function reagent_movielens_collaborative_filtering$helpers$cf$add_similarity_col(ratings,target_id,user_ratings){
return user_ratings.chain((function (p1__36072_SHARP_){
return p1__36072_SHARP_.set("similarity",reagent_movielens_collaborative_filtering.helpers.cf.calculate_similarity.call(null,ratings,target_id,p1__36072_SHARP_.get("movieId")));
}));
});
reagent_movielens_collaborative_filtering.helpers.cf.predict_rating = (function reagent_movielens_collaborative_filtering$helpers$cf$predict_rating(var_args){
var args__4795__auto__ = [];
var len__4789__auto___36081 = arguments.length;
var i__4790__auto___36082 = (0);
while(true){
if((i__4790__auto___36082 < len__4789__auto___36081)){
args__4795__auto__.push((arguments[i__4790__auto___36082]));

var G__36083 = (i__4790__auto___36082 + (1));
i__4790__auto___36082 = G__36083;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return reagent_movielens_collaborative_filtering.helpers.cf.predict_rating.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(reagent_movielens_collaborative_filtering.helpers.cf.predict_rating.cljs$core$IFn$_invoke$arity$variadic = (function (ratings,target_id,user_ratings,p__36077){
var vec__36078 = p__36077;
var neighborhood_size = cljs.core.nth.call(null,vec__36078,(0),null);
return reagent_movielens_collaborative_filtering.helpers.cf.add_similarity_col.call(null,ratings,target_id,user_ratings).sortBy("similarity",true).head((function (){var or__4185__auto__ = neighborhood_size;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (10);
}
})()).stat.mean("rating");
}));

(reagent_movielens_collaborative_filtering.helpers.cf.predict_rating.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(reagent_movielens_collaborative_filtering.helpers.cf.predict_rating.cljs$lang$applyTo = (function (seq36073){
var G__36074 = cljs.core.first.call(null,seq36073);
var seq36073__$1 = cljs.core.next.call(null,seq36073);
var G__36075 = cljs.core.first.call(null,seq36073__$1);
var seq36073__$2 = cljs.core.next.call(null,seq36073__$1);
var G__36076 = cljs.core.first.call(null,seq36073__$2);
var seq36073__$3 = cljs.core.next.call(null,seq36073__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36074,G__36075,G__36076,seq36073__$3);
}));


//# sourceMappingURL=cf.js.map?rel=1585780117461

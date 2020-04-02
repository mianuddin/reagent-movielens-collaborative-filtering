// Compiled by ClojureScript 1.10.597 {}
goog.provide('reagent_movielens_collaborative_filtering.components.search');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojure.string');
goog.require('clj_fuzzy.metrics');
reagent_movielens_collaborative_filtering.components.search.clean_title_col = (function reagent_movielens_collaborative_filtering$components$search$clean_title_col(row){
var title = row.get("title");
return row.set("clean-title",cljs.core.subs.call(null,clojure.string.lower_case.call(null,title),(0),(cljs.core.count.call(null,title) - (7))));
});
reagent_movielens_collaborative_filtering.components.search.create_fuzzy_col = (function reagent_movielens_collaborative_filtering$components$search$create_fuzzy_col(term,row){
return row.set("fuzzy",clj_fuzzy.metrics.jaro_winkler.call(null,row.get("clean-title"),term));
});
reagent_movielens_collaborative_filtering.components.search.component = (function reagent_movielens_collaborative_filtering$components$search$component(){
var term = reagent.core.atom.call(null,"");
return (function (movies,handle_click){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__45438_SHARP_){
return cljs.core.reset_BANG_.call(null,term,p1__45438_SHARP_.target.value);
}),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Search for a movie...",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,term)], null)], null),(cljs.core.truth_((function (){var and__4174__auto__ = movies;
if(cljs.core.truth_(and__4174__auto__)){
return (cljs.core.count.call(null,cljs.core.deref.call(null,term)) > (0));
} else {
return and__4174__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.search-results","div.search-results",1319364942),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max-height","max-height",-612563804),"20vh",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"scroll"], null)], null),(function (){var iter__4582__auto__ = (function reagent_movielens_collaborative_filtering$components$search$component_$_iter__45441(s__45442){
return (new cljs.core.LazySeq(null,(function (){
var s__45442__$1 = s__45442;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__45442__$1);
if(temp__5735__auto__){
var s__45442__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45442__$2)){
var c__4580__auto__ = cljs.core.chunk_first.call(null,s__45442__$2);
var size__4581__auto__ = cljs.core.count.call(null,c__4580__auto__);
var b__45444 = cljs.core.chunk_buffer.call(null,size__4581__auto__);
if((function (){var i__45443 = (0);
while(true){
if((i__45443 < size__4581__auto__)){
var movie = cljs.core._nth.call(null,c__4580__auto__,i__45443);
cljs.core.chunk_append.call(null,b__45444,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-movie-id","data-movie-id",1135845360),(movie["movieId"]),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__45443,movie,c__4580__auto__,size__4581__auto__,b__45444,s__45442__$2,temp__5735__auto__,term){
return (function (p1__45440_SHARP_){
handle_click.call(null,p1__45440_SHARP_);

return cljs.core.reset_BANG_.call(null,term,"");
});})(i__45443,movie,c__4580__auto__,size__4581__auto__,b__45444,s__45442__$2,temp__5735__auto__,term))
], null),(movie["title"])], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(movie["movieId"])], null)));

var G__45445 = (i__45443 + (1));
i__45443 = G__45445;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45444),reagent_movielens_collaborative_filtering$components$search$component_$_iter__45441.call(null,cljs.core.chunk_rest.call(null,s__45442__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45444),null);
}
} else {
var movie = cljs.core.first.call(null,s__45442__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-movie-id","data-movie-id",1135845360),(movie["movieId"]),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (movie,s__45442__$2,temp__5735__auto__,term){
return (function (p1__45440_SHARP_){
handle_click.call(null,p1__45440_SHARP_);

return cljs.core.reset_BANG_.call(null,term,"");
});})(movie,s__45442__$2,temp__5735__auto__,term))
], null),(movie["title"])], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(movie["movieId"])], null)),reagent_movielens_collaborative_filtering$components$search$component_$_iter__45441.call(null,cljs.core.rest.call(null,s__45442__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__.call(null,movies.chain(reagent_movielens_collaborative_filtering.components.search.clean_title_col,(function (p1__45439_SHARP_){
return cljs.core.every_QMARK_.call(null,cljs.core.partial.call(null,clojure.string.includes_QMARK_,clojure.string.lower_case.call(null,p1__45439_SHARP_.get("clean-title"))),clojure.string.split.call(null,clojure.string.lower_case.call(null,cljs.core.deref.call(null,term))," "));
}),cljs.core.partial.call(null,reagent_movielens_collaborative_filtering.components.search.create_fuzzy_col,clojure.string.lower_case.call(null,cljs.core.deref.call(null,term)))).sortBy("fuzzy",true).head((10)).toCollection());
})()], null):null)], null);
});
});

//# sourceMappingURL=search.js.map?rel=1585791130379

// Compiled by ClojureScript 1.10.597 {}
goog.provide('reagent_movielens_collaborative_filtering.components.survey');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent_movielens_collaborative_filtering.components.movie_prompt');
goog.require('react_loading_skeleton');
reagent_movielens_collaborative_filtering.components.survey.global$module$react_loading_skeleton = goog.global["Skeleton"];
reagent_movielens_collaborative_filtering.components.survey.component = (function reagent_movielens_collaborative_filtering$components$survey$component(){
var shuffled_ids = reagent.core.atom.call(null,null);
var current_index = reagent.core.atom.call(null,null);
var current_rating = reagent.core.atom.call(null,"");
var hide_flag = reagent.core.atom.call(null,true);
return (function (movies,user_ratings){
if(cljs.core.truth_(((cljs.core.not.call(null,cljs.core.deref.call(null,shuffled_ids)))?movies:false))){
cljs.core.reset_BANG_.call(null,shuffled_ids,cljs.core.shuffle.call(null,cljs.core.get.call(null,movies.select("movieId").transpose().toArray(),(0))));
} else {
}

if(cljs.core.truth_(cljs.core.deref.call(null,current_index))){
} else {
cljs.core.reset_BANG_.call(null,current_index,(0));
}

return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Rate Movies"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"To predict how you would rate a movie, we'll first need to get an idea of your taste."], null),(cljs.core.truth_((function (){var and__4174__auto__ = cljs.core.deref.call(null,shuffled_ids);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.deref.call(null,current_index);
} else {
return and__4174__auto__;
}
})())?((cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,shuffled_ids)),((1) + cljs.core.deref.call(null,current_index))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"No more movies!"], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_movielens_collaborative_filtering.components.movie_prompt.component,movies,cljs.core.get.call(null,cljs.core.deref.call(null,shuffled_ids),cljs.core.deref.call(null,current_index)),current_rating,(function (){
if((cljs.core.count.call(null,cljs.core.deref.call(null,current_rating)) > (0))){
cljs.core.swap_BANG_.call(null,user_ratings,cljs.core.assoc,cljs.core.get.call(null,cljs.core.deref.call(null,shuffled_ids),cljs.core.deref.call(null,current_index)),cljs.core.deref.call(null,current_rating));
} else {
}

cljs.core.reset_BANG_.call(null,current_rating,"");

return cljs.core.swap_BANG_.call(null,current_index,cljs.core.inc);
})], null)):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(reagent_movielens_collaborative_filtering.components.survey.global$module$react_loading_skeleton.prototype["constructor"]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"10em"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(reagent_movielens_collaborative_filtering.components.survey.global$module$react_loading_skeleton.prototype["constructor"]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"5em"], null)], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Your Ratings"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,hide_flag,cljs.core.not);
})], null),(cljs.core.truth_(cljs.core.deref.call(null,hide_flag))?"Show":"Hide")," movies without ratings"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max-height","max-height",-612563804),"40vh",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"scroll"], null)], null),cljs.core.doall.call(null,(function (){var iter__4582__auto__ = (function reagent_movielens_collaborative_filtering$components$survey$component_$_iter__45049(s__45050){
return (new cljs.core.LazySeq(null,(function (){
var s__45050__$1 = s__45050;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__45050__$1);
if(temp__5735__auto__){
var s__45050__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45050__$2)){
var c__4580__auto__ = cljs.core.chunk_first.call(null,s__45050__$2);
var size__4581__auto__ = cljs.core.count.call(null,c__4580__auto__);
var b__45052 = cljs.core.chunk_buffer.call(null,size__4581__auto__);
if((function (){var i__45051 = (0);
while(true){
if((i__45051 < size__4581__auto__)){
var movie_id = cljs.core._nth.call(null,c__4580__auto__,i__45051);
cljs.core.chunk_append.call(null,b__45052,(function (){var rating = cljs.core.deref.call(null,user_ratings).call(null,movie_id,"not rated");
if(cljs.core.truth_((function (){var and__4174__auto__ = cljs.core.deref.call(null,hide_flag);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.call(null,rating,"not rated");
} else {
return and__4174__auto__;
}
})())){
return null;
} else {
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),movie_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null),cljs.core.get.call(null,movies.filter(((function (i__45051,rating,movie_id,c__4580__auto__,size__4581__auto__,b__45052,s__45050__$2,temp__5735__auto__,shuffled_ids,current_index,current_rating,hide_flag){
return (function (p1__45048_SHARP_){
return cljs.core._EQ_.call(null,movie_id,p1__45048_SHARP_.get("movieId"));
});})(i__45051,rating,movie_id,c__4580__auto__,size__4581__auto__,b__45052,s__45050__$2,temp__5735__auto__,shuffled_ids,current_index,current_rating,hide_flag))
).toCollection(),(0)).title," - ",rating], null);
}
})());

var G__45053 = (i__45051 + (1));
i__45051 = G__45053;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45052),reagent_movielens_collaborative_filtering$components$survey$component_$_iter__45049.call(null,cljs.core.chunk_rest.call(null,s__45050__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45052),null);
}
} else {
var movie_id = cljs.core.first.call(null,s__45050__$2);
return cljs.core.cons.call(null,(function (){var rating = cljs.core.deref.call(null,user_ratings).call(null,movie_id,"not rated");
if(cljs.core.truth_((function (){var and__4174__auto__ = cljs.core.deref.call(null,hide_flag);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.call(null,rating,"not rated");
} else {
return and__4174__auto__;
}
})())){
return null;
} else {
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),movie_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null),cljs.core.get.call(null,movies.filter(((function (rating,movie_id,s__45050__$2,temp__5735__auto__,shuffled_ids,current_index,current_rating,hide_flag){
return (function (p1__45048_SHARP_){
return cljs.core._EQ_.call(null,movie_id,p1__45048_SHARP_.get("movieId"));
});})(rating,movie_id,s__45050__$2,temp__5735__auto__,shuffled_ids,current_index,current_rating,hide_flag))
).toCollection(),(0)).title," - ",rating], null);
}
})(),reagent_movielens_collaborative_filtering$components$survey$component_$_iter__45049.call(null,cljs.core.rest.call(null,s__45050__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__.call(null,cljs.core.reverse.call(null,cljs.core.take.call(null,cljs.core.deref.call(null,current_index),cljs.core.deref.call(null,shuffled_ids))));
})())], null)], null);
});
});

//# sourceMappingURL=survey.js.map?rel=1585790526156

// Compiled by ClojureScript 1.10.597 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__33623__delegate = function (x__33607__auto__){
if(cljs.core.truth_(reagent_movielens_collaborative_filtering.core.mount_root)){
return cljs.core.apply.call(null,reagent_movielens_collaborative_filtering.core.mount_root,x__33607__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '","reagent-movielens-collaborative-filtering.core/mount-root","' is missing"].join(''));
}
};
var G__33623 = function (var_args){
var x__33607__auto__ = null;
if (arguments.length > 0) {
var G__33624__i = 0, G__33624__a = new Array(arguments.length -  0);
while (G__33624__i < G__33624__a.length) {G__33624__a[G__33624__i] = arguments[G__33624__i + 0]; ++G__33624__i;}
  x__33607__auto__ = new cljs.core.IndexedSeq(G__33624__a,0,null);
} 
return G__33623__delegate.call(this,x__33607__auto__);};
G__33623.cljs$lang$maxFixedArity = 0;
G__33623.cljs$lang$applyTo = (function (arglist__33625){
var x__33607__auto__ = cljs.core.seq(arglist__33625);
return G__33623__delegate(x__33607__auto__);
});
G__33623.cljs$core$IFn$_invoke$arity$variadic = G__33623__delegate;
return G__33623;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"app",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null);
figwheel.client.start.call(null,config);

if(cljs.core.truth_(new cljs.core.Keyword(null,"devcards","devcards",365747130).cljs$core$IFn$_invoke$arity$1(config))){
return devcards.core.start_devcard_ui_BANG__STAR_();
} else {
return null;
}
});
goog.exportSymbol('figwheel.connect.start', figwheel.connect.start);

//# sourceMappingURL=connect.js.map?rel=1585778621043

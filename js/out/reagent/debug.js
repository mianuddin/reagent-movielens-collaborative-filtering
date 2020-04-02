// Compiled by ClojureScript 1.10.597 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__45670__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__45670 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45671__i = 0, G__45671__a = new Array(arguments.length -  0);
while (G__45671__i < G__45671__a.length) {G__45671__a[G__45671__i] = arguments[G__45671__i + 0]; ++G__45671__i;}
  args = new cljs.core.IndexedSeq(G__45671__a,0,null);
} 
return G__45670__delegate.call(this,args);};
G__45670.cljs$lang$maxFixedArity = 0;
G__45670.cljs$lang$applyTo = (function (arglist__45672){
var args = cljs.core.seq(arglist__45672);
return G__45670__delegate(args);
});
G__45670.cljs$core$IFn$_invoke$arity$variadic = G__45670__delegate;
return G__45670;
})()
);

(o.error = (function() { 
var G__45673__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__45673 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45674__i = 0, G__45674__a = new Array(arguments.length -  0);
while (G__45674__i < G__45674__a.length) {G__45674__a[G__45674__i] = arguments[G__45674__i + 0]; ++G__45674__i;}
  args = new cljs.core.IndexedSeq(G__45674__a,0,null);
} 
return G__45673__delegate.call(this,args);};
G__45673.cljs$lang$maxFixedArity = 0;
G__45673.cljs$lang$applyTo = (function (arglist__45675){
var args = cljs.core.seq(arglist__45675);
return G__45673__delegate(args);
});
G__45673.cljs$core$IFn$_invoke$arity$variadic = G__45673__delegate;
return G__45673;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1585778476646

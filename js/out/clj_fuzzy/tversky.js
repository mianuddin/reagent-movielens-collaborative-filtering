// Compiled by ClojureScript 1.10.597 {}
goog.provide('clj_fuzzy.tversky');
goog.require('cljs.core');
goog.require('clojure.set');
clj_fuzzy.tversky.I = (function clj_fuzzy$tversky$I(X,Y){
return cljs.core.count.call(null,clojure.set.intersection.call(null,X,Y));
});
clj_fuzzy.tversky.R = (function clj_fuzzy$tversky$R(X,Y){
return cljs.core.count.call(null,clojure.set.difference.call(null,X,Y));
});
/**
 * Compute the original assymmetric Tversky index for the given [sequences] and
 * the given [alpha] and [beta].
 */
clj_fuzzy.tversky.assymmetric_index = (function clj_fuzzy$tversky$assymmetric_index(seq1,seq2,alpha,beta){
var X = cljs.core.set.call(null,seq1);
var Y = cljs.core.set.call(null,seq2);
var XIY = clj_fuzzy.tversky.I.call(null,X,Y);
return (XIY / ((XIY + (alpha * clj_fuzzy.tversky.R.call(null,X,Y))) + (beta * clj_fuzzy.tversky.R.call(null,Y,X))));
});
/**
 * Compute the symmetric variant of the Tversky undex for the given [sequences] and
 * the given [alpha] and [beta].
 */
clj_fuzzy.tversky.symmetric_index = (function clj_fuzzy$tversky$symmetric_index(seq1,seq2,alpha,beta){
var X = cljs.core.set.call(null,seq1);
var Y = cljs.core.set.call(null,seq2);
var XIY = clj_fuzzy.tversky.I.call(null,X,Y);
var X_Y = clj_fuzzy.tversky.R.call(null,X,Y);
var Y_X = clj_fuzzy.tversky.R.call(null,Y,X);
var a = (function (){var x__4276__auto__ = X_Y;
var y__4277__auto__ = Y_X;
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
})();
var b = (function (){var x__4273__auto__ = X_Y;
var y__4274__auto__ = Y_X;
return ((x__4273__auto__ > y__4274__auto__) ? x__4273__auto__ : y__4274__auto__);
})();
return (XIY / (XIY + (beta * ((alpha * a) + Math.pow(((1) - alpha),b)))));
});
/**
 * Compute the tversky index for the given [sequences] with given [:alpha] and [:beta]
 * and in a [:symmetric] fashion or not.
 */
clj_fuzzy.tversky.index = (function clj_fuzzy$tversky$index(var_args){
var args__4795__auto__ = [];
var len__4789__auto___26689 = arguments.length;
var i__4790__auto___26690 = (0);
while(true){
if((i__4790__auto___26690 < len__4789__auto___26689)){
args__4795__auto__.push((arguments[i__4790__auto___26690]));

var G__26691 = (i__4790__auto___26690 + (1));
i__4790__auto___26690 = G__26691;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return clj_fuzzy.tversky.index.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(clj_fuzzy.tversky.index.cljs$core$IFn$_invoke$arity$variadic = (function (seq1,seq2,p__26686){
var map__26687 = p__26686;
var map__26687__$1 = (((((!((map__26687 == null))))?(((((map__26687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26687.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26687):map__26687);
var alpha = cljs.core.get.call(null,map__26687__$1,new cljs.core.Keyword(null,"alpha","alpha",-1574982441),(1));
var beta = cljs.core.get.call(null,map__26687__$1,new cljs.core.Keyword(null,"beta","beta",455605892),(1));
var symmetric = cljs.core.get.call(null,map__26687__$1,new cljs.core.Keyword(null,"symmetric","symmetric",-960442568),false);
return (cljs.core.truth_(symmetric)?clj_fuzzy.tversky.symmetric_index:clj_fuzzy.tversky.assymmetric_index).call(null,seq1,seq2,alpha,beta);
}));

(clj_fuzzy.tversky.index.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(clj_fuzzy.tversky.index.cljs$lang$applyTo = (function (seq26683){
var G__26684 = cljs.core.first.call(null,seq26683);
var seq26683__$1 = cljs.core.next.call(null,seq26683);
var G__26685 = cljs.core.first.call(null,seq26683__$1);
var seq26683__$2 = cljs.core.next.call(null,seq26683__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26684,G__26685,seq26683__$2);
}));


//# sourceMappingURL=tversky.js.map?rel=1585778603049

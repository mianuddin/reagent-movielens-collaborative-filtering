// Compiled by ClojureScript 1.10.597 {}
goog.provide('clj_fuzzy.levenshtein');
goog.require('cljs.core');
clj_fuzzy.levenshtein.next_row = (function clj_fuzzy$levenshtein$next_row(previous,current,other_seq){
return cljs.core.reduce.call(null,(function (row,p__26675){
var vec__26676 = p__26675;
var diagonal = cljs.core.nth.call(null,vec__26676,(0),null);
var above = cljs.core.nth.call(null,vec__26676,(1),null);
var other = cljs.core.nth.call(null,vec__26676,(2),null);
var update_val = ((cljs.core._EQ_.call(null,other,current))?diagonal:((function (){var x__4276__auto__ = (function (){var x__4276__auto__ = diagonal;
var y__4277__auto__ = above;
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
})();
var y__4277__auto__ = cljs.core.peek.call(null,row);
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
})() + (1)));
return cljs.core.conj.call(null,row,update_val);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.first.call(null,previous) + (1))], null),cljs.core.map.call(null,cljs.core.vector,previous,cljs.core.next.call(null,previous),other_seq));
});
/**
 * Compute the levenshtein distance between two [sequences].
 */
clj_fuzzy.levenshtein.distance = (function clj_fuzzy$levenshtein$distance(sequence1,sequence2){
if(((cljs.core.empty_QMARK_.call(null,sequence1)) && (cljs.core.empty_QMARK_.call(null,sequence2)))){
return (0);
} else {
if(cljs.core.empty_QMARK_.call(null,sequence1)){
return cljs.core.count.call(null,sequence2);
} else {
if(cljs.core.empty_QMARK_.call(null,sequence2)){
return cljs.core.count.call(null,sequence1);
} else {
return cljs.core.peek.call(null,cljs.core.reduce.call(null,(function (previous,current){
return clj_fuzzy.levenshtein.next_row.call(null,previous,current,sequence2);
}),cljs.core.map.call(null,(function (p1__26680_SHARP_,p2__26679_SHARP_){
return cljs.core.identity.call(null,p2__26679_SHARP_);
}),cljs.core.cons.call(null,null,sequence2),cljs.core.range.call(null)),sequence1));

}
}
}
});

//# sourceMappingURL=levenshtein.js.map?rel=1585778602719

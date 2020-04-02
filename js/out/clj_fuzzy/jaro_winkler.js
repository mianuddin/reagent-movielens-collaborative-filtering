// Compiled by ClojureScript 1.10.597 {}
goog.provide('clj_fuzzy.jaro_winkler');
goog.require('cljs.core');
clj_fuzzy.jaro_winkler.longest_sequence = (function clj_fuzzy$jaro_winkler$longest_sequence(seq1,seq2){
if((cljs.core.count.call(null,seq1) >= cljs.core.count.call(null,seq2))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [seq1,seq2], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [seq2,seq1], null);
}
});
clj_fuzzy.jaro_winkler.match_window = (function clj_fuzzy$jaro_winkler$match_window(min_len){
var x__4273__auto__ = (((min_len / (2)) | (0)) - (1));
var y__4274__auto__ = (0);
return ((x__4273__auto__ > y__4274__auto__) ? x__4273__auto__ : y__4274__auto__);
});
clj_fuzzy.jaro_winkler.submatch = (function clj_fuzzy$jaro_winkler$submatch(i,ch,shortest,window_start,window_end,seq1_matches,seq2_matches){
var j = window_start;
var nseq1_matches = seq1_matches;
var nseq2_matches = seq2_matches;
while(true){
if(cljs.core.truth_((function (){var and__4174__auto__ = cljs.core.complement.call(null,cljs.core.nil_QMARK_).call(null,j);
if(cljs.core.truth_(and__4174__auto__)){
return (j <= window_end);
} else {
return and__4174__auto__;
}
})())){
if(((cljs.core.not.call(null,cljs.core.get.call(null,seq2_matches,j))) && (cljs.core._EQ_.call(null,ch,cljs.core.get.call(null,shortest,j))))){
var G__26709 = null;
var G__26710 = cljs.core.assoc.call(null,nseq1_matches,i,ch);
var G__26711 = cljs.core.assoc.call(null,nseq2_matches,j,cljs.core.get.call(null,shortest,j));
j = G__26709;
nseq1_matches = G__26710;
nseq2_matches = G__26711;
continue;
} else {
var G__26712 = (j + (1));
var G__26713 = nseq1_matches;
var G__26714 = nseq2_matches;
j = G__26712;
nseq1_matches = G__26713;
nseq2_matches = G__26714;
continue;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nseq1_matches,nseq2_matches], null);
}
break;
}
});
clj_fuzzy.jaro_winkler.matches = (function clj_fuzzy$jaro_winkler$matches(seq1,seq2){
var vec__26715 = clj_fuzzy.jaro_winkler.longest_sequence.call(null,seq1,seq2);
var longest = cljs.core.nth.call(null,vec__26715,(0),null);
var shortest = cljs.core.nth.call(null,vec__26715,(1),null);
var max_len = cljs.core.count.call(null,longest);
var min_len = cljs.core.count.call(null,shortest);
var mwindow = clj_fuzzy.jaro_winkler.match_window.call(null,max_len);
var i = (0);
var seq1_matches = cljs.core.vec.call(null,cljs.core.repeat.call(null,max_len,null));
var seq2_matches = cljs.core.vec.call(null,cljs.core.repeat.call(null,max_len,null));
while(true){
if((i < max_len)){
var window_start = (function (){var x__4273__auto__ = (i - mwindow);
var y__4274__auto__ = (0);
return ((x__4273__auto__ > y__4274__auto__) ? x__4273__auto__ : y__4274__auto__);
})();
var window_end = (function (){var x__4276__auto__ = ((i + mwindow) + (1));
var y__4277__auto__ = min_len;
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
})();
var vec__26721 = clj_fuzzy.jaro_winkler.submatch.call(null,i,cljs.core.get.call(null,longest,i),shortest,window_start,window_end,seq1_matches,seq2_matches);
var nseq1_matches = cljs.core.nth.call(null,vec__26721,(0),null);
var nseq2_matches = cljs.core.nth.call(null,vec__26721,(1),null);
var G__26724 = (i + (1));
var G__26725 = nseq1_matches;
var G__26726 = nseq2_matches;
i = G__26724;
seq1_matches = G__26725;
seq2_matches = G__26726;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.remove.call(null,cljs.core.nil_QMARK_,seq1_matches),cljs.core.remove.call(null,cljs.core.nil_QMARK_,seq2_matches)], null);
}
break;
}
});
clj_fuzzy.jaro_winkler.transpositions = (function clj_fuzzy$jaro_winkler$transpositions(longest_matches,shortest_matches){
var pad = (cljs.core.count.call(null,longest_matches) - cljs.core.count.call(null,shortest_matches));
var comparison = cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,longest_matches,cljs.core.concat.call(null,shortest_matches,cljs.core.repeat.call(null,pad,null))));
return (cljs.core.count.call(null,cljs.core.filter.call(null,(function (p1__26727_SHARP_){
return cljs.core.not_EQ_.call(null,cljs.core.first.call(null,p1__26727_SHARP_),cljs.core.second.call(null,p1__26727_SHARP_));
}),comparison)) / (2));
});
clj_fuzzy.jaro_winkler.winkler_prefix = (function clj_fuzzy$jaro_winkler$winkler_prefix(seq1,seq2){
var i = (0);
var prefix = (0);
while(true){
if((i < (4))){
if(cljs.core._EQ_.call(null,cljs.core.get.call(null,seq1,i),cljs.core.get.call(null,seq2,i))){
var G__26728 = (i + (1));
var G__26729 = (prefix + (1));
i = G__26728;
prefix = G__26729;
continue;
} else {
var G__26730 = (5);
var G__26731 = prefix;
i = G__26730;
prefix = G__26731;
continue;
}
} else {
return prefix;
}
break;
}
});
/**
 * Compute the Jaro distance between two sequences.
 */
clj_fuzzy.jaro_winkler.jaro = (function clj_fuzzy$jaro_winkler$jaro(seq1,seq2){
var vec__26732 = clj_fuzzy.jaro_winkler.matches.call(null,seq1,seq2);
var longest_matches = cljs.core.nth.call(null,vec__26732,(0),null);
var shortest_matches = cljs.core.nth.call(null,vec__26732,(1),null);
var m = cljs.core.count.call(null,longest_matches);
var t = clj_fuzzy.jaro_winkler.transpositions.call(null,longest_matches,shortest_matches);
if((m === (0))){
return (0);
} else {
return ((((m / cljs.core.count.call(null,seq1)) + (m / cljs.core.count.call(null,seq2))) + ((m - t) / m)) / 3.0);
}
});
/**
 * Compute the Jaro-Winkler distance between two sequences.
 */
clj_fuzzy.jaro_winkler.jaro_winkler = (function clj_fuzzy$jaro_winkler$jaro_winkler(seq1,seq2){
var j = clj_fuzzy.jaro_winkler.jaro.call(null,seq1,seq2);
var l = clj_fuzzy.jaro_winkler.winkler_prefix.call(null,seq1,seq2);
var p = 0.1;
return (j + ((l * p) * ((1) - j)));
});

//# sourceMappingURL=jaro_winkler.js.map?rel=1585778603817

// Compiled by ClojureScript 1.10.597 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__32778){
var map__32779 = p__32778;
var map__32779__$1 = (((((!((map__32779 == null))))?(((((map__32779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32779):map__32779);
var m = map__32779__$1;
var n = cljs.core.get.call(null,map__32779__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__32779__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32781_32813 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32782_32814 = null;
var count__32783_32815 = (0);
var i__32784_32816 = (0);
while(true){
if((i__32784_32816 < count__32783_32815)){
var f_32817 = cljs.core._nth.call(null,chunk__32782_32814,i__32784_32816);
cljs.core.println.call(null,"  ",f_32817);


var G__32818 = seq__32781_32813;
var G__32819 = chunk__32782_32814;
var G__32820 = count__32783_32815;
var G__32821 = (i__32784_32816 + (1));
seq__32781_32813 = G__32818;
chunk__32782_32814 = G__32819;
count__32783_32815 = G__32820;
i__32784_32816 = G__32821;
continue;
} else {
var temp__5735__auto___32822 = cljs.core.seq.call(null,seq__32781_32813);
if(temp__5735__auto___32822){
var seq__32781_32823__$1 = temp__5735__auto___32822;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32781_32823__$1)){
var c__4609__auto___32824 = cljs.core.chunk_first.call(null,seq__32781_32823__$1);
var G__32825 = cljs.core.chunk_rest.call(null,seq__32781_32823__$1);
var G__32826 = c__4609__auto___32824;
var G__32827 = cljs.core.count.call(null,c__4609__auto___32824);
var G__32828 = (0);
seq__32781_32813 = G__32825;
chunk__32782_32814 = G__32826;
count__32783_32815 = G__32827;
i__32784_32816 = G__32828;
continue;
} else {
var f_32829 = cljs.core.first.call(null,seq__32781_32823__$1);
cljs.core.println.call(null,"  ",f_32829);


var G__32830 = cljs.core.next.call(null,seq__32781_32823__$1);
var G__32831 = null;
var G__32832 = (0);
var G__32833 = (0);
seq__32781_32813 = G__32830;
chunk__32782_32814 = G__32831;
count__32783_32815 = G__32832;
i__32784_32816 = G__32833;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_32834 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_32834);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_32834)))?cljs.core.second.call(null,arglists_32834):arglists_32834));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32785_32835 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32786_32836 = null;
var count__32787_32837 = (0);
var i__32788_32838 = (0);
while(true){
if((i__32788_32838 < count__32787_32837)){
var vec__32799_32839 = cljs.core._nth.call(null,chunk__32786_32836,i__32788_32838);
var name_32840 = cljs.core.nth.call(null,vec__32799_32839,(0),null);
var map__32802_32841 = cljs.core.nth.call(null,vec__32799_32839,(1),null);
var map__32802_32842__$1 = (((((!((map__32802_32841 == null))))?(((((map__32802_32841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32802_32841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32802_32841):map__32802_32841);
var doc_32843 = cljs.core.get.call(null,map__32802_32842__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32844 = cljs.core.get.call(null,map__32802_32842__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32840);

cljs.core.println.call(null," ",arglists_32844);

if(cljs.core.truth_(doc_32843)){
cljs.core.println.call(null," ",doc_32843);
} else {
}


var G__32845 = seq__32785_32835;
var G__32846 = chunk__32786_32836;
var G__32847 = count__32787_32837;
var G__32848 = (i__32788_32838 + (1));
seq__32785_32835 = G__32845;
chunk__32786_32836 = G__32846;
count__32787_32837 = G__32847;
i__32788_32838 = G__32848;
continue;
} else {
var temp__5735__auto___32849 = cljs.core.seq.call(null,seq__32785_32835);
if(temp__5735__auto___32849){
var seq__32785_32850__$1 = temp__5735__auto___32849;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32785_32850__$1)){
var c__4609__auto___32851 = cljs.core.chunk_first.call(null,seq__32785_32850__$1);
var G__32852 = cljs.core.chunk_rest.call(null,seq__32785_32850__$1);
var G__32853 = c__4609__auto___32851;
var G__32854 = cljs.core.count.call(null,c__4609__auto___32851);
var G__32855 = (0);
seq__32785_32835 = G__32852;
chunk__32786_32836 = G__32853;
count__32787_32837 = G__32854;
i__32788_32838 = G__32855;
continue;
} else {
var vec__32804_32856 = cljs.core.first.call(null,seq__32785_32850__$1);
var name_32857 = cljs.core.nth.call(null,vec__32804_32856,(0),null);
var map__32807_32858 = cljs.core.nth.call(null,vec__32804_32856,(1),null);
var map__32807_32859__$1 = (((((!((map__32807_32858 == null))))?(((((map__32807_32858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32807_32858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32807_32858):map__32807_32858);
var doc_32860 = cljs.core.get.call(null,map__32807_32859__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32861 = cljs.core.get.call(null,map__32807_32859__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32857);

cljs.core.println.call(null," ",arglists_32861);

if(cljs.core.truth_(doc_32860)){
cljs.core.println.call(null," ",doc_32860);
} else {
}


var G__32862 = cljs.core.next.call(null,seq__32785_32850__$1);
var G__32863 = null;
var G__32864 = (0);
var G__32865 = (0);
seq__32785_32835 = G__32862;
chunk__32786_32836 = G__32863;
count__32787_32837 = G__32864;
i__32788_32838 = G__32865;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__32809 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__32810 = null;
var count__32811 = (0);
var i__32812 = (0);
while(true){
if((i__32812 < count__32811)){
var role = cljs.core._nth.call(null,chunk__32810,i__32812);
var temp__5735__auto___32866__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___32866__$1)){
var spec_32867 = temp__5735__auto___32866__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_32867));
} else {
}


var G__32868 = seq__32809;
var G__32869 = chunk__32810;
var G__32870 = count__32811;
var G__32871 = (i__32812 + (1));
seq__32809 = G__32868;
chunk__32810 = G__32869;
count__32811 = G__32870;
i__32812 = G__32871;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__32809);
if(temp__5735__auto____$1){
var seq__32809__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32809__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__32809__$1);
var G__32872 = cljs.core.chunk_rest.call(null,seq__32809__$1);
var G__32873 = c__4609__auto__;
var G__32874 = cljs.core.count.call(null,c__4609__auto__);
var G__32875 = (0);
seq__32809 = G__32872;
chunk__32810 = G__32873;
count__32811 = G__32874;
i__32812 = G__32875;
continue;
} else {
var role = cljs.core.first.call(null,seq__32809__$1);
var temp__5735__auto___32876__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___32876__$2)){
var spec_32877 = temp__5735__auto___32876__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_32877));
} else {
}


var G__32878 = cljs.core.next.call(null,seq__32809__$1);
var G__32879 = null;
var G__32880 = (0);
var G__32881 = (0);
seq__32809 = G__32878;
chunk__32810 = G__32879;
count__32811 = G__32880;
i__32812 = G__32881;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__32882 = cljs.core.conj.call(null,via,t);
var G__32883 = cljs.core.ex_cause.call(null,t);
via = G__32882;
t = G__32883;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__32886 = datafied_throwable;
var map__32886__$1 = (((((!((map__32886 == null))))?(((((map__32886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32886):map__32886);
var via = cljs.core.get.call(null,map__32886__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__32886__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__32886__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__32887 = cljs.core.last.call(null,via);
var map__32887__$1 = (((((!((map__32887 == null))))?(((((map__32887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32887):map__32887);
var type = cljs.core.get.call(null,map__32887__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__32887__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__32887__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__32888 = data;
var map__32888__$1 = (((((!((map__32888 == null))))?(((((map__32888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32888):map__32888);
var problems = cljs.core.get.call(null,map__32888__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__32888__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__32888__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__32889 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__32889__$1 = (((((!((map__32889 == null))))?(((((map__32889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32889):map__32889);
var top_data = map__32889__$1;
var source = cljs.core.get.call(null,map__32889__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__32894 = phase;
var G__32894__$1 = (((G__32894 instanceof cljs.core.Keyword))?G__32894.fqn:null);
switch (G__32894__$1) {
case "read-source":
var map__32895 = data;
var map__32895__$1 = (((((!((map__32895 == null))))?(((((map__32895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32895):map__32895);
var line = cljs.core.get.call(null,map__32895__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__32895__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__32897 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__32897__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__32897,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__32897);
var G__32897__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__32897__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__32897__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__32897__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__32897__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__32898 = top_data;
var G__32898__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__32898,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__32898);
var G__32898__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__32898__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__32898__$1);
var G__32898__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__32898__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__32898__$2);
var G__32898__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__32898__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__32898__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__32898__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__32898__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__32899 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__32899,(0),null);
var method = cljs.core.nth.call(null,vec__32899,(1),null);
var file = cljs.core.nth.call(null,vec__32899,(2),null);
var line = cljs.core.nth.call(null,vec__32899,(3),null);
var G__32902 = top_data;
var G__32902__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__32902,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__32902);
var G__32902__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__32902__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__32902__$1);
var G__32902__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.call(null,G__32902__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__32902__$2);
var G__32902__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__32902__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__32902__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__32902__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__32902__$4;
}

break;
case "execution":
var vec__32903 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__32903,(0),null);
var method = cljs.core.nth.call(null,vec__32903,(1),null);
var file = cljs.core.nth.call(null,vec__32903,(2),null);
var line = cljs.core.nth.call(null,vec__32903,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__32885_SHARP_){
var or__4185__auto__ = (p1__32885_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__32885_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__32906 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__32906__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__32906,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__32906);
var G__32906__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__32906__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__32906__$1);
var G__32906__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.call(null,G__32906__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__32906__$2);
var G__32906__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__32906__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__32906__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__32906__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__32906__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32894__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__32910){
var map__32911 = p__32910;
var map__32911__$1 = (((((!((map__32911 == null))))?(((((map__32911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32911.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32911):map__32911);
var triage_data = map__32911__$1;
var phase = cljs.core.get.call(null,map__32911__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__32911__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__32911__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__32911__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__32911__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__32911__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__32911__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__32911__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__32913 = phase;
var G__32913__$1 = (((G__32913 instanceof cljs.core.Keyword))?G__32913.fqn:null);
switch (G__32913__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__32914_32923 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__32915_32924 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__32916_32925 = true;
var _STAR_print_fn_STAR__temp_val__32917_32926 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32916_32925);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32917_32926);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__32908_SHARP_){
return cljs.core.dissoc.call(null,p1__32908_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32915_32924);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32914_32923);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__32918_32927 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__32919_32928 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__32920_32929 = true;
var _STAR_print_fn_STAR__temp_val__32921_32930 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32920_32929);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32921_32930);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__32909_SHARP_){
return cljs.core.dissoc.call(null,p1__32909_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32919_32928);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32918_32927);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32913__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1585778619504

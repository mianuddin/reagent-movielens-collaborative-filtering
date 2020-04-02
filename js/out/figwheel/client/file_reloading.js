// Compiled by ClojureScript 1.10.597 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4185__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4185__auto__){
return or__4185__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4185__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return ((goog.string.startsWith("clojure.",name)) || (goog.string.startsWith("goog.",name)));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__32102_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__32102_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,(function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
}));
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,(function (v,k,_){
return goog.object.forEach(v,(function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__32103 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__32104 = null;
var count__32105 = (0);
var i__32106 = (0);
while(true){
if((i__32106 < count__32105)){
var n = cljs.core._nth.call(null,chunk__32104,i__32106);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__32107 = seq__32103;
var G__32108 = chunk__32104;
var G__32109 = count__32105;
var G__32110 = (i__32106 + (1));
seq__32103 = G__32107;
chunk__32104 = G__32108;
count__32105 = G__32109;
i__32106 = G__32110;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__32103);
if(temp__5735__auto__){
var seq__32103__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32103__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__32103__$1);
var G__32111 = cljs.core.chunk_rest.call(null,seq__32103__$1);
var G__32112 = c__4609__auto__;
var G__32113 = cljs.core.count.call(null,c__4609__auto__);
var G__32114 = (0);
seq__32103 = G__32111;
chunk__32104 = G__32112;
count__32105 = G__32113;
i__32106 = G__32114;
continue;
} else {
var n = cljs.core.first.call(null,seq__32103__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__32115 = cljs.core.next.call(null,seq__32103__$1);
var G__32116 = null;
var G__32117 = (0);
var G__32118 = (0);
seq__32103 = G__32115;
chunk__32104 = G__32116;
count__32105 = G__32117;
i__32106 = G__32118;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__32119){
var vec__32120 = p__32119;
var _ = cljs.core.nth.call(null,vec__32120,(0),null);
var v = cljs.core.nth.call(null,vec__32120,(1),null);
var and__4174__auto__ = v;
if(cljs.core.truth_(and__4174__auto__)){
return v.call(null,dep);
} else {
return and__4174__auto__;
}
}),cljs.core.filter.call(null,(function (p__32123){
var vec__32124 = p__32123;
var k = cljs.core.nth.call(null,vec__32124,(0),null);
var v = cljs.core.nth.call(null,vec__32124,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});
var topo_sort_STAR_ = (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__32136_32144 = cljs.core.seq.call(null,deps);
var chunk__32137_32145 = null;
var count__32138_32146 = (0);
var i__32139_32147 = (0);
while(true){
if((i__32139_32147 < count__32138_32146)){
var dep_32148 = cljs.core._nth.call(null,chunk__32137_32145,i__32139_32147);
if(cljs.core.truth_((function (){var and__4174__auto__ = dep_32148;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_32148));
} else {
return and__4174__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_32148,(depth + (1)),state);
} else {
}


var G__32149 = seq__32136_32144;
var G__32150 = chunk__32137_32145;
var G__32151 = count__32138_32146;
var G__32152 = (i__32139_32147 + (1));
seq__32136_32144 = G__32149;
chunk__32137_32145 = G__32150;
count__32138_32146 = G__32151;
i__32139_32147 = G__32152;
continue;
} else {
var temp__5735__auto___32153 = cljs.core.seq.call(null,seq__32136_32144);
if(temp__5735__auto___32153){
var seq__32136_32154__$1 = temp__5735__auto___32153;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32136_32154__$1)){
var c__4609__auto___32155 = cljs.core.chunk_first.call(null,seq__32136_32154__$1);
var G__32156 = cljs.core.chunk_rest.call(null,seq__32136_32154__$1);
var G__32157 = c__4609__auto___32155;
var G__32158 = cljs.core.count.call(null,c__4609__auto___32155);
var G__32159 = (0);
seq__32136_32144 = G__32156;
chunk__32137_32145 = G__32157;
count__32138_32146 = G__32158;
i__32139_32147 = G__32159;
continue;
} else {
var dep_32160 = cljs.core.first.call(null,seq__32136_32154__$1);
if(cljs.core.truth_((function (){var and__4174__auto__ = dep_32160;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_32160));
} else {
return and__4174__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_32160,(depth + (1)),state);
} else {
}


var G__32161 = cljs.core.next.call(null,seq__32136_32154__$1);
var G__32162 = null;
var G__32163 = (0);
var G__32164 = (0);
seq__32136_32144 = G__32161;
chunk__32137_32145 = G__32162;
count__32138_32146 = G__32163;
i__32139_32147 = G__32164;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__32140){
var vec__32141 = p__32140;
var seq__32142 = cljs.core.seq.call(null,vec__32141);
var first__32143 = cljs.core.first.call(null,seq__32142);
var seq__32142__$1 = cljs.core.next.call(null,seq__32142);
var x = first__32143;
var xs = seq__32142__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__32127_SHARP_){
return clojure.set.difference.call(null,p1__32127_SHARP_,x);
}),xs)));
}
});
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__32165 = cljs.core.seq.call(null,provides);
var chunk__32166 = null;
var count__32167 = (0);
var i__32168 = (0);
while(true){
if((i__32168 < count__32167)){
var prov = cljs.core._nth.call(null,chunk__32166,i__32168);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__32177_32185 = cljs.core.seq.call(null,requires);
var chunk__32178_32186 = null;
var count__32179_32187 = (0);
var i__32180_32188 = (0);
while(true){
if((i__32180_32188 < count__32179_32187)){
var req_32189 = cljs.core._nth.call(null,chunk__32178_32186,i__32180_32188);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32189,prov);


var G__32190 = seq__32177_32185;
var G__32191 = chunk__32178_32186;
var G__32192 = count__32179_32187;
var G__32193 = (i__32180_32188 + (1));
seq__32177_32185 = G__32190;
chunk__32178_32186 = G__32191;
count__32179_32187 = G__32192;
i__32180_32188 = G__32193;
continue;
} else {
var temp__5735__auto___32194 = cljs.core.seq.call(null,seq__32177_32185);
if(temp__5735__auto___32194){
var seq__32177_32195__$1 = temp__5735__auto___32194;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32177_32195__$1)){
var c__4609__auto___32196 = cljs.core.chunk_first.call(null,seq__32177_32195__$1);
var G__32197 = cljs.core.chunk_rest.call(null,seq__32177_32195__$1);
var G__32198 = c__4609__auto___32196;
var G__32199 = cljs.core.count.call(null,c__4609__auto___32196);
var G__32200 = (0);
seq__32177_32185 = G__32197;
chunk__32178_32186 = G__32198;
count__32179_32187 = G__32199;
i__32180_32188 = G__32200;
continue;
} else {
var req_32201 = cljs.core.first.call(null,seq__32177_32195__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32201,prov);


var G__32202 = cljs.core.next.call(null,seq__32177_32195__$1);
var G__32203 = null;
var G__32204 = (0);
var G__32205 = (0);
seq__32177_32185 = G__32202;
chunk__32178_32186 = G__32203;
count__32179_32187 = G__32204;
i__32180_32188 = G__32205;
continue;
}
} else {
}
}
break;
}


var G__32206 = seq__32165;
var G__32207 = chunk__32166;
var G__32208 = count__32167;
var G__32209 = (i__32168 + (1));
seq__32165 = G__32206;
chunk__32166 = G__32207;
count__32167 = G__32208;
i__32168 = G__32209;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__32165);
if(temp__5735__auto__){
var seq__32165__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32165__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__32165__$1);
var G__32210 = cljs.core.chunk_rest.call(null,seq__32165__$1);
var G__32211 = c__4609__auto__;
var G__32212 = cljs.core.count.call(null,c__4609__auto__);
var G__32213 = (0);
seq__32165 = G__32210;
chunk__32166 = G__32211;
count__32167 = G__32212;
i__32168 = G__32213;
continue;
} else {
var prov = cljs.core.first.call(null,seq__32165__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__32181_32214 = cljs.core.seq.call(null,requires);
var chunk__32182_32215 = null;
var count__32183_32216 = (0);
var i__32184_32217 = (0);
while(true){
if((i__32184_32217 < count__32183_32216)){
var req_32218 = cljs.core._nth.call(null,chunk__32182_32215,i__32184_32217);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32218,prov);


var G__32219 = seq__32181_32214;
var G__32220 = chunk__32182_32215;
var G__32221 = count__32183_32216;
var G__32222 = (i__32184_32217 + (1));
seq__32181_32214 = G__32219;
chunk__32182_32215 = G__32220;
count__32183_32216 = G__32221;
i__32184_32217 = G__32222;
continue;
} else {
var temp__5735__auto___32223__$1 = cljs.core.seq.call(null,seq__32181_32214);
if(temp__5735__auto___32223__$1){
var seq__32181_32224__$1 = temp__5735__auto___32223__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32181_32224__$1)){
var c__4609__auto___32225 = cljs.core.chunk_first.call(null,seq__32181_32224__$1);
var G__32226 = cljs.core.chunk_rest.call(null,seq__32181_32224__$1);
var G__32227 = c__4609__auto___32225;
var G__32228 = cljs.core.count.call(null,c__4609__auto___32225);
var G__32229 = (0);
seq__32181_32214 = G__32226;
chunk__32182_32215 = G__32227;
count__32183_32216 = G__32228;
i__32184_32217 = G__32229;
continue;
} else {
var req_32230 = cljs.core.first.call(null,seq__32181_32224__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32230,prov);


var G__32231 = cljs.core.next.call(null,seq__32181_32224__$1);
var G__32232 = null;
var G__32233 = (0);
var G__32234 = (0);
seq__32181_32214 = G__32231;
chunk__32182_32215 = G__32232;
count__32183_32216 = G__32233;
i__32184_32217 = G__32234;
continue;
}
} else {
}
}
break;
}


var G__32235 = cljs.core.next.call(null,seq__32165__$1);
var G__32236 = null;
var G__32237 = (0);
var G__32238 = (0);
seq__32165 = G__32235;
chunk__32166 = G__32236;
count__32167 = G__32237;
i__32168 = G__32238;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
(goog.require = figwheel.client.file_reloading.figwheel_require);

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__32239_32243 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__32240_32244 = null;
var count__32241_32245 = (0);
var i__32242_32246 = (0);
while(true){
if((i__32242_32246 < count__32241_32245)){
var ns_32247 = cljs.core._nth.call(null,chunk__32240_32244,i__32242_32246);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32247);


var G__32248 = seq__32239_32243;
var G__32249 = chunk__32240_32244;
var G__32250 = count__32241_32245;
var G__32251 = (i__32242_32246 + (1));
seq__32239_32243 = G__32248;
chunk__32240_32244 = G__32249;
count__32241_32245 = G__32250;
i__32242_32246 = G__32251;
continue;
} else {
var temp__5735__auto___32252 = cljs.core.seq.call(null,seq__32239_32243);
if(temp__5735__auto___32252){
var seq__32239_32253__$1 = temp__5735__auto___32252;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32239_32253__$1)){
var c__4609__auto___32254 = cljs.core.chunk_first.call(null,seq__32239_32253__$1);
var G__32255 = cljs.core.chunk_rest.call(null,seq__32239_32253__$1);
var G__32256 = c__4609__auto___32254;
var G__32257 = cljs.core.count.call(null,c__4609__auto___32254);
var G__32258 = (0);
seq__32239_32243 = G__32255;
chunk__32240_32244 = G__32256;
count__32241_32245 = G__32257;
i__32242_32246 = G__32258;
continue;
} else {
var ns_32259 = cljs.core.first.call(null,seq__32239_32253__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32259);


var G__32260 = cljs.core.next.call(null,seq__32239_32253__$1);
var G__32261 = null;
var G__32262 = (0);
var G__32263 = (0);
seq__32239_32243 = G__32260;
chunk__32240_32244 = G__32261;
count__32241_32245 = G__32262;
i__32242_32246 = G__32263;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
(goog.require_figwheel_backup_ = (function (){var or__4185__auto__ = goog.require__;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.require;
}
})());

(goog.isProvided_ = (function (name){
return false;
}));

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

(goog.addDependency_figwheel_backup_ = goog.addDependency);

(goog.addDependency = (function() { 
var G__32264__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__32264 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32265__i = 0, G__32265__a = new Array(arguments.length -  0);
while (G__32265__i < G__32265__a.length) {G__32265__a[G__32265__i] = arguments[G__32265__i + 0]; ++G__32265__i;}
  args = new cljs.core.IndexedSeq(G__32265__a,0,null);
} 
return G__32264__delegate.call(this,args);};
G__32264.cljs$lang$maxFixedArity = 0;
G__32264.cljs$lang$applyTo = (function (arglist__32266){
var args = cljs.core.seq(arglist__32266);
return G__32264__delegate(args);
});
G__32264.cljs$core$IFn$_invoke$arity$variadic = G__32264__delegate;
return G__32264;
})()
);

goog.constructNamespace_("cljs.user");

(goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload);

return (goog.require = figwheel.client.file_reloading.figwheel_require);
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__32267_SHARP_,p2__32268_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32267_SHARP_)),p2__32268_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__32269_SHARP_,p2__32270_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32269_SHARP_),p2__32270_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__32271 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__32271.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__32271.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__32271;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e32272){if((e32272 instanceof Error)){
var e = e32272;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e32272;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,(function (v,k,o){
return goog.string.endsWith(k,util_pattern);
}));
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e32273){if((e32273 instanceof Error)){
var e = e32273;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e32273;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__32274 = cljs.core._EQ_;
var expr__32275 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__32274.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__32275))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__32274.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__32275))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__32274.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__32275))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__32277,callback){
var map__32278 = p__32277;
var map__32278__$1 = (((((!((map__32278 == null))))?(((((map__32278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32278):map__32278);
var file_msg = map__32278__$1;
var request_url = cljs.core.get.call(null,map__32278__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4185__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,(function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
}));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),(function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__29987__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29988__auto__ = (function (){var switch__29892__auto__ = (function (state_32316){
var state_val_32317 = (state_32316[(1)]);
if((state_val_32317 === (7))){
var inst_32312 = (state_32316[(2)]);
var state_32316__$1 = state_32316;
var statearr_32318_32344 = state_32316__$1;
(statearr_32318_32344[(2)] = inst_32312);

(statearr_32318_32344[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32317 === (1))){
var state_32316__$1 = state_32316;
var statearr_32319_32345 = state_32316__$1;
(statearr_32319_32345[(2)] = null);

(statearr_32319_32345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32317 === (4))){
var inst_32282 = (state_32316[(7)]);
var inst_32282__$1 = (state_32316[(2)]);
var state_32316__$1 = (function (){var statearr_32320 = state_32316;
(statearr_32320[(7)] = inst_32282__$1);

return statearr_32320;
})();
if(cljs.core.truth_(inst_32282__$1)){
var statearr_32321_32346 = state_32316__$1;
(statearr_32321_32346[(1)] = (5));

} else {
var statearr_32322_32347 = state_32316__$1;
(statearr_32322_32347[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32317 === (15))){
var inst_32295 = (state_32316[(8)]);
var inst_32297 = (state_32316[(9)]);
var inst_32299 = inst_32297.call(null,inst_32295);
var state_32316__$1 = state_32316;
var statearr_32323_32348 = state_32316__$1;
(statearr_32323_32348[(2)] = inst_32299);

(statearr_32323_32348[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32317 === (13))){
var inst_32306 = (state_32316[(2)]);
var state_32316__$1 = state_32316;
var statearr_32324_32349 = state_32316__$1;
(statearr_32324_32349[(2)] = inst_32306);

(statearr_32324_32349[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32317 === (6))){
var state_32316__$1 = state_32316;
var statearr_32325_32350 = state_32316__$1;
(statearr_32325_32350[(2)] = null);

(statearr_32325_32350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32317 === (17))){
var inst_32303 = (state_32316[(2)]);
var state_32316__$1 = state_32316;
var statearr_32326_32351 = state_32316__$1;
(statearr_32326_32351[(2)] = inst_32303);

(statearr_32326_32351[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32317 === (3))){
var inst_32314 = (state_32316[(2)]);
var state_32316__$1 = state_32316;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32316__$1,inst_32314);
} else {
if((state_val_32317 === (12))){
var state_32316__$1 = state_32316;
var statearr_32327_32352 = state_32316__$1;
(statearr_32327_32352[(2)] = null);

(statearr_32327_32352[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32317 === (2))){
var state_32316__$1 = state_32316;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32316__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_32317 === (11))){
var inst_32287 = (state_32316[(10)]);
var inst_32293 = figwheel.client.file_reloading.blocking_load.call(null,inst_32287);
var state_32316__$1 = state_32316;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32316__$1,(14),inst_32293);
} else {
if((state_val_32317 === (9))){
var inst_32287 = (state_32316[(10)]);
var state_32316__$1 = state_32316;
if(cljs.core.truth_(inst_32287)){
var statearr_32328_32353 = state_32316__$1;
(statearr_32328_32353[(1)] = (11));

} else {
var statearr_32329_32354 = state_32316__$1;
(statearr_32329_32354[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32317 === (5))){
var inst_32282 = (state_32316[(7)]);
var inst_32288 = (state_32316[(11)]);
var inst_32287 = cljs.core.nth.call(null,inst_32282,(0),null);
var inst_32288__$1 = cljs.core.nth.call(null,inst_32282,(1),null);
var state_32316__$1 = (function (){var statearr_32330 = state_32316;
(statearr_32330[(10)] = inst_32287);

(statearr_32330[(11)] = inst_32288__$1);

return statearr_32330;
})();
if(cljs.core.truth_(inst_32288__$1)){
var statearr_32331_32355 = state_32316__$1;
(statearr_32331_32355[(1)] = (8));

} else {
var statearr_32332_32356 = state_32316__$1;
(statearr_32332_32356[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32317 === (14))){
var inst_32297 = (state_32316[(9)]);
var inst_32287 = (state_32316[(10)]);
var inst_32295 = (state_32316[(2)]);
var inst_32296 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_32297__$1 = cljs.core.get.call(null,inst_32296,inst_32287);
var state_32316__$1 = (function (){var statearr_32333 = state_32316;
(statearr_32333[(8)] = inst_32295);

(statearr_32333[(9)] = inst_32297__$1);

return statearr_32333;
})();
if(cljs.core.truth_(inst_32297__$1)){
var statearr_32334_32357 = state_32316__$1;
(statearr_32334_32357[(1)] = (15));

} else {
var statearr_32335_32358 = state_32316__$1;
(statearr_32335_32358[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32317 === (16))){
var inst_32295 = (state_32316[(8)]);
var inst_32301 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_32295);
var state_32316__$1 = state_32316;
var statearr_32336_32359 = state_32316__$1;
(statearr_32336_32359[(2)] = inst_32301);

(statearr_32336_32359[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32317 === (10))){
var inst_32308 = (state_32316[(2)]);
var state_32316__$1 = (function (){var statearr_32337 = state_32316;
(statearr_32337[(12)] = inst_32308);

return statearr_32337;
})();
var statearr_32338_32360 = state_32316__$1;
(statearr_32338_32360[(2)] = null);

(statearr_32338_32360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32317 === (8))){
var inst_32288 = (state_32316[(11)]);
var inst_32290 = eval(inst_32288);
var state_32316__$1 = state_32316;
var statearr_32339_32361 = state_32316__$1;
(statearr_32339_32361[(2)] = inst_32290);

(statearr_32339_32361[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$file_reloading$state_machine__29893__auto__ = null;
var figwheel$client$file_reloading$state_machine__29893__auto____0 = (function (){
var statearr_32340 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32340[(0)] = figwheel$client$file_reloading$state_machine__29893__auto__);

(statearr_32340[(1)] = (1));

return statearr_32340;
});
var figwheel$client$file_reloading$state_machine__29893__auto____1 = (function (state_32316){
while(true){
var ret_value__29894__auto__ = (function (){try{while(true){
var result__29895__auto__ = switch__29892__auto__.call(null,state_32316);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29895__auto__;
}
break;
}
}catch (e32341){if((e32341 instanceof Object)){
var ex__29896__auto__ = e32341;
var statearr_32342_32362 = state_32316;
(statearr_32342_32362[(5)] = ex__29896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32316);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32363 = state_32316;
state_32316 = G__32363;
continue;
} else {
return ret_value__29894__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__29893__auto__ = function(state_32316){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__29893__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__29893__auto____1.call(this,state_32316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__29893__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__29893__auto____0;
figwheel$client$file_reloading$state_machine__29893__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__29893__auto____1;
return figwheel$client$file_reloading$state_machine__29893__auto__;
})()
})();
var state__29989__auto__ = (function (){var statearr_32343 = f__29988__auto__.call(null);
(statearr_32343[(6)] = c__29987__auto__);

return statearr_32343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29989__auto__);
}));

return c__29987__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__32365 = arguments.length;
switch (G__32365) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2);

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__32367,callback){
var map__32368 = p__32367;
var map__32368__$1 = (((((!((map__32368 == null))))?(((((map__32368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32368):map__32368);
var file_msg = map__32368__$1;
var namespace = cljs.core.get.call(null,map__32368__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__32370){
var map__32371 = p__32370;
var map__32371__$1 = (((((!((map__32371 == null))))?(((((map__32371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32371):map__32371);
var file_msg = map__32371__$1;
var namespace = cljs.core.get.call(null,map__32371__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__32373){
var map__32374 = p__32373;
var map__32374__$1 = (((((!((map__32374 == null))))?(((((map__32374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32374):map__32374);
var file_msg = map__32374__$1;
var namespace = cljs.core.get.call(null,map__32374__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if(cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg))){
var or__4185__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
var or__4185__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4185__auto____$2)){
return or__4185__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return false;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__32376,callback){
var map__32377 = p__32376;
var map__32377__$1 = (((((!((map__32377 == null))))?(((((map__32377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32377):map__32377);
var file_msg = map__32377__$1;
var request_url = cljs.core.get.call(null,map__32377__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__32377__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,(function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__29987__auto___32427 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29988__auto__ = (function (){var switch__29892__auto__ = (function (state_32412){
var state_val_32413 = (state_32412[(1)]);
if((state_val_32413 === (1))){
var inst_32386 = cljs.core.seq.call(null,files);
var inst_32387 = cljs.core.first.call(null,inst_32386);
var inst_32388 = cljs.core.next.call(null,inst_32386);
var inst_32389 = files;
var state_32412__$1 = (function (){var statearr_32414 = state_32412;
(statearr_32414[(7)] = inst_32388);

(statearr_32414[(8)] = inst_32387);

(statearr_32414[(9)] = inst_32389);

return statearr_32414;
})();
var statearr_32415_32428 = state_32412__$1;
(statearr_32415_32428[(2)] = null);

(statearr_32415_32428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32413 === (2))){
var inst_32395 = (state_32412[(10)]);
var inst_32389 = (state_32412[(9)]);
var inst_32394 = cljs.core.seq.call(null,inst_32389);
var inst_32395__$1 = cljs.core.first.call(null,inst_32394);
var inst_32396 = cljs.core.next.call(null,inst_32394);
var inst_32397 = (inst_32395__$1 == null);
var inst_32398 = cljs.core.not.call(null,inst_32397);
var state_32412__$1 = (function (){var statearr_32416 = state_32412;
(statearr_32416[(11)] = inst_32396);

(statearr_32416[(10)] = inst_32395__$1);

return statearr_32416;
})();
if(inst_32398){
var statearr_32417_32429 = state_32412__$1;
(statearr_32417_32429[(1)] = (4));

} else {
var statearr_32418_32430 = state_32412__$1;
(statearr_32418_32430[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32413 === (3))){
var inst_32410 = (state_32412[(2)]);
var state_32412__$1 = state_32412;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32412__$1,inst_32410);
} else {
if((state_val_32413 === (4))){
var inst_32395 = (state_32412[(10)]);
var inst_32400 = figwheel.client.file_reloading.reload_js_file.call(null,inst_32395);
var state_32412__$1 = state_32412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32412__$1,(7),inst_32400);
} else {
if((state_val_32413 === (5))){
var inst_32406 = cljs.core.async.close_BANG_.call(null,out);
var state_32412__$1 = state_32412;
var statearr_32419_32431 = state_32412__$1;
(statearr_32419_32431[(2)] = inst_32406);

(statearr_32419_32431[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32413 === (6))){
var inst_32408 = (state_32412[(2)]);
var state_32412__$1 = state_32412;
var statearr_32420_32432 = state_32412__$1;
(statearr_32420_32432[(2)] = inst_32408);

(statearr_32420_32432[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32413 === (7))){
var inst_32396 = (state_32412[(11)]);
var inst_32402 = (state_32412[(2)]);
var inst_32403 = cljs.core.async.put_BANG_.call(null,out,inst_32402);
var inst_32389 = inst_32396;
var state_32412__$1 = (function (){var statearr_32421 = state_32412;
(statearr_32421[(9)] = inst_32389);

(statearr_32421[(12)] = inst_32403);

return statearr_32421;
})();
var statearr_32422_32433 = state_32412__$1;
(statearr_32422_32433[(2)] = null);

(statearr_32422_32433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29893__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29893__auto____0 = (function (){
var statearr_32423 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32423[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29893__auto__);

(statearr_32423[(1)] = (1));

return statearr_32423;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29893__auto____1 = (function (state_32412){
while(true){
var ret_value__29894__auto__ = (function (){try{while(true){
var result__29895__auto__ = switch__29892__auto__.call(null,state_32412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29895__auto__;
}
break;
}
}catch (e32424){if((e32424 instanceof Object)){
var ex__29896__auto__ = e32424;
var statearr_32425_32434 = state_32412;
(statearr_32425_32434[(5)] = ex__29896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32435 = state_32412;
state_32412 = G__32435;
continue;
} else {
return ret_value__29894__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29893__auto__ = function(state_32412){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29893__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29893__auto____1.call(this,state_32412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29893__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29893__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29893__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29893__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29893__auto__;
})()
})();
var state__29989__auto__ = (function (){var statearr_32426 = f__29988__auto__.call(null);
(statearr_32426[(6)] = c__29987__auto___32427);

return statearr_32426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29989__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__32436,opts){
var map__32437 = p__32436;
var map__32437__$1 = (((((!((map__32437 == null))))?(((((map__32437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32437):map__32437);
var eval_body = cljs.core.get.call(null,map__32437__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__32437__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4174__auto__ = eval_body;
if(cljs.core.truth_(and__4174__auto__)){
return typeof eval_body === 'string';
} else {
return and__4174__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e32439){var e = e32439;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__32440_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32440_SHARP_),n);
}),files));
if(cljs.core.truth_(temp__5733__auto__)){
var file_msg = temp__5733__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
}),deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__32441){
var vec__32442 = p__32441;
var k = cljs.core.nth.call(null,vec__32442,(0),null);
var v = cljs.core.nth.call(null,vec__32442,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__32445){
var vec__32446 = p__32445;
var k = cljs.core.nth.call(null,vec__32446,(0),null);
var v = cljs.core.nth.call(null,vec__32446,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__32452,p__32453){
var map__32454 = p__32452;
var map__32454__$1 = (((((!((map__32454 == null))))?(((((map__32454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32454):map__32454);
var opts = map__32454__$1;
var before_jsload = cljs.core.get.call(null,map__32454__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__32454__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__32454__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__32455 = p__32453;
var map__32455__$1 = (((((!((map__32455 == null))))?(((((map__32455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32455.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32455):map__32455);
var msg = map__32455__$1;
var files = cljs.core.get.call(null,map__32455__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__32455__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__32455__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__29987__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29988__auto__ = (function (){var switch__29892__auto__ = (function (state_32609){
var state_val_32610 = (state_32609[(1)]);
if((state_val_32610 === (7))){
var inst_32471 = (state_32609[(7)]);
var inst_32472 = (state_32609[(8)]);
var inst_32470 = (state_32609[(9)]);
var inst_32469 = (state_32609[(10)]);
var inst_32477 = cljs.core._nth.call(null,inst_32470,inst_32472);
var inst_32478 = figwheel.client.file_reloading.eval_body.call(null,inst_32477,opts);
var inst_32479 = (inst_32472 + (1));
var tmp32611 = inst_32471;
var tmp32612 = inst_32470;
var tmp32613 = inst_32469;
var inst_32469__$1 = tmp32613;
var inst_32470__$1 = tmp32612;
var inst_32471__$1 = tmp32611;
var inst_32472__$1 = inst_32479;
var state_32609__$1 = (function (){var statearr_32614 = state_32609;
(statearr_32614[(11)] = inst_32478);

(statearr_32614[(7)] = inst_32471__$1);

(statearr_32614[(8)] = inst_32472__$1);

(statearr_32614[(9)] = inst_32470__$1);

(statearr_32614[(10)] = inst_32469__$1);

return statearr_32614;
})();
var statearr_32615_32698 = state_32609__$1;
(statearr_32615_32698[(2)] = null);

(statearr_32615_32698[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32610 === (20))){
var inst_32512 = (state_32609[(12)]);
var inst_32520 = figwheel.client.file_reloading.sort_files.call(null,inst_32512);
var state_32609__$1 = state_32609;
var statearr_32616_32699 = state_32609__$1;
(statearr_32616_32699[(2)] = inst_32520);

(statearr_32616_32699[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32610 === (27))){
var state_32609__$1 = state_32609;
var statearr_32617_32700 = state_32609__$1;
(statearr_32617_32700[(2)] = null);

(statearr_32617_32700[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32610 === (1))){
var inst_32461 = (state_32609[(13)]);
var inst_32458 = before_jsload.call(null,files);
var inst_32459 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_32460 = (function (){return (function (p1__32449_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32449_SHARP_);
});
})();
var inst_32461__$1 = cljs.core.filter.call(null,inst_32460,files);
var inst_32462 = cljs.core.not_empty.call(null,inst_32461__$1);
var state_32609__$1 = (function (){var statearr_32618 = state_32609;
(statearr_32618[(14)] = inst_32458);

(statearr_32618[(15)] = inst_32459);

(statearr_32618[(13)] = inst_32461__$1);

return statearr_32618;
})();
if(cljs.core.truth_(inst_32462)){
var statearr_32619_32701 = state_32609__$1;
(statearr_32619_32701[(1)] = (2));

} else {
var statearr_32620_32702 = state_32609__$1;
(statearr_32620_32702[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32610 === (24))){
var state_32609__$1 = state_32609;
var statearr_32621_32703 = state_32609__$1;
(statearr_32621_32703[(2)] = null);

(statearr_32621_32703[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32610 === (39))){
var inst_32562 = (state_32609[(16)]);
var state_32609__$1 = state_32609;
var statearr_32622_32704 = state_32609__$1;
(statearr_32622_32704[(2)] = inst_32562);

(statearr_32622_32704[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32610 === (46))){
var inst_32604 = (state_32609[(2)]);
var state_32609__$1 = state_32609;
var statearr_32623_32705 = state_32609__$1;
(statearr_32623_32705[(2)] = inst_32604);

(statearr_32623_32705[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32610 === (4))){
var inst_32506 = (state_32609[(2)]);
var inst_32507 = cljs.core.List.EMPTY;
var inst_32508 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_32507);
var inst_32509 = (function (){return (function (p1__32450_SHARP_){
var and__4174__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32450_SHARP_);
if(cljs.core.truth_(and__4174__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32450_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__32450_SHARP_))));
} else {
return and__4174__auto__;
}
});
})();
var inst_32510 = cljs.core.filter.call(null,inst_32509,files);
var inst_32511 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_32512 = cljs.core.concat.call(null,inst_32510,inst_32511);
var state_32609__$1 = (function (){var statearr_32624 = state_32609;
(statearr_32624[(17)] = inst_32506);

(statearr_32624[(18)] = inst_32508);

(statearr_32624[(12)] = inst_32512);

return statearr_32624;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_32625_32706 = state_32609__$1;
(statearr_32625_32706[(1)] = (16));

} else {
var statearr_32626_32707 = state_32609__$1;
(statearr_32626_32707[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32610 === (15))){
var inst_32496 = (state_32609[(2)]);
var state_32609__$1 = state_32609;
var statearr_32627_32708 = state_32609__$1;
(statearr_32627_32708[(2)] = inst_32496);

(statearr_32627_32708[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32610 === (21))){
var inst_32522 = (state_32609[(19)]);
var inst_32522__$1 = (state_32609[(2)]);
var inst_32523 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_32522__$1);
var state_32609__$1 = (function (){var statearr_32628 = state_32609;
(statearr_32628[(19)] = inst_32522__$1);

return statearr_32628;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32609__$1,(22),inst_32523);
} else {
if((state_val_32610 === (31))){
var inst_32607 = (state_32609[(2)]);
var state_32609__$1 = state_32609;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32609__$1,inst_32607);
} else {
if((state_val_32610 === (32))){
var inst_32562 = (state_32609[(16)]);
var inst_32567 = inst_32562.cljs$lang$protocol_mask$partition0$;
var inst_32568 = (inst_32567 & (64));
var inst_32569 = inst_32562.cljs$core$ISeq$;
var inst_32570 = (cljs.core.PROTOCOL_SENTINEL === inst_32569);
var inst_32571 = ((inst_32568) || (inst_32570));
var state_32609__$1 = state_32609;
if(cljs.core.truth_(inst_32571)){
var statearr_32629_32709 = state_32609__$1;
(statearr_32629_32709[(1)] = (35));

} else {
var statearr_32630_32710 = state_32609__$1;
(statearr_32630_32710[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32610 === (40))){
var inst_32584 = (state_32609[(20)]);
var inst_32583 = (state_32609[(2)]);
var inst_32584__$1 = cljs.core.get.call(null,inst_32583,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_32585 = cljs.core.get.call(null,inst_32583,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_32586 = cljs.core.not_empty.call(null,inst_32584__$1);
var state_32609__$1 = (function (){var statearr_32631 = state_32609;
(statearr_32631[(20)] = inst_32584__$1);

(statearr_32631[(21)] = inst_32585);

return statearr_32631;
})();
if(cljs.core.truth_(inst_32586)){
var statearr_32632_32711 = state_32609__$1;
(statearr_32632_32711[(1)] = (41));

} else {
var statearr_32633_32712 = state_32609__$1;
(statearr_32633_32712[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32610 === (33))){
var state_32609__$1 = state_32609;
var statearr_32634_32713 = state_32609__$1;
(statearr_32634_32713[(2)] = false);

(statearr_32634_32713[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32610 === (13))){
var inst_32482 = (state_32609[(22)]);
var inst_32486 = cljs.core.chunk_first.call(null,inst_32482);
var inst_32487 = cljs.core.chunk_rest.call(null,inst_32482);
var inst_32488 = cljs.core.count.call(null,inst_32486);
var inst_32469 = inst_32487;
var inst_32470 = inst_32486;
var inst_32471 = inst_32488;
var inst_32472 = (0);
var state_32609__$1 = (function (){var statearr_32635 = state_32609;
(statearr_32635[(7)] = inst_32471);

(statearr_32635[(8)] = inst_32472);

(statearr_32635[(9)] = inst_32470);

(statearr_32635[(10)] = inst_32469);

return statearr_32635;
})();
var statearr_32636_32714 = state_32609__$1;
(statearr_32636_32714[(2)] = null);

(statearr_32636_32714[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32610 === (22))){
var inst_32526 = (state_32609[(23)]);
var inst_32522 = (state_32609[(19)]);
var inst_32530 = (state_32609[(24)]);
var inst_32525 = (state_32609[(25)]);
var inst_32525__$1 = (state_32609[(2)]);
var inst_32526__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32525__$1);
var inst_32527 = (function (){var all_files = inst_32522;
var res_SINGLEQUOTE_ = inst_32525__$1;
var res = inst_32526__$1;
return (function (p1__32451_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__32451_SHARP_));
});
})();
var inst_32528 = cljs.core.filter.call(null,inst_32527,inst_32525__$1);
var inst_32529 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_32530__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32529);
var inst_32531 = cljs.core.not_empty.call(null,inst_32530__$1);
var state_32609__$1 = (function (){var statearr_32637 = state_32609;
(statearr_32637[(23)] = inst_32526__$1);

(statearr_32637[(26)] = inst_32528);

(statearr_32637[(24)] = inst_32530__$1);

(statearr_32637[(25)] = inst_32525__$1);

return statearr_32637;
})();
if(cljs.core.truth_(inst_32531)){
var statearr_32638_32715 = state_32609__$1;
(statearr_32638_32715[(1)] = (23));

} else {
var statearr_32639_32716 = state_32609__$1;
(statearr_32639_32716[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32610 === (36))){
var state_32609__$1 = state_32609;
var statearr_32640_32717 = state_32609__$1;
(statearr_32640_32717[(2)] = false);

(statearr_32640_32717[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32610 === (41))){
var inst_32584 = (state_32609[(20)]);
var inst_32588 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_32589 = cljs.core.map.call(null,inst_32588,inst_32584);
var inst_32590 = cljs.core.pr_str.call(null,inst_32589);
var inst_32591 = ["figwheel-no-load meta-data: ",inst_32590].join('');
var inst_32592 = figwheel.client.utils.log.call(null,inst_32591);
var state_32609__$1 = state_32609;
var statearr_32641_32718 = state_32609__$1;
(statearr_32641_32718[(2)] = inst_32592);

(statearr_32641_32718[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32610 === (43))){
var inst_32585 = (state_32609[(21)]);
var inst_32595 = (state_32609[(2)]);
var inst_32596 = cljs.core.not_empty.call(null,inst_32585);
var state_32609__$1 = (function (){var statearr_32642 = state_32609;
(statearr_32642[(27)] = inst_32595);

return statearr_32642;
})();
if(cljs.core.truth_(inst_32596)){
var statearr_32643_32719 = state_32609__$1;
(statearr_32643_32719[(1)] = (44));

} else {
var statearr_32644_32720 = state_32609__$1;
(statearr_32644_32720[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32610 === (29))){
var inst_32526 = (state_32609[(23)]);
var inst_32562 = (state_32609[(16)]);
var inst_32528 = (state_32609[(26)]);
var inst_32522 = (state_32609[(19)]);
var inst_32530 = (state_32609[(24)]);
var inst_32525 = (state_32609[(25)]);
var inst_32558 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_32561 = (function (){var all_files = inst_32522;
var res_SINGLEQUOTE_ = inst_32525;
var res = inst_32526;
var files_not_loaded = inst_32528;
var dependencies_that_loaded = inst_32530;
return (function (p__32560){
var map__32645 = p__32560;
var map__32645__$1 = (((((!((map__32645 == null))))?(((((map__32645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32645):map__32645);
var namespace = cljs.core.get.call(null,map__32645__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
})();
var inst_32562__$1 = cljs.core.group_by.call(null,inst_32561,inst_32528);
var inst_32564 = (inst_32562__$1 == null);
var inst_32565 = cljs.core.not.call(null,inst_32564);
var state_32609__$1 = (function (){var statearr_32647 = state_32609;
(statearr_32647[(16)] = inst_32562__$1);

(statearr_32647[(28)] = inst_32558);

return statearr_32647;
})();
if(inst_32565){
var statearr_32648_32721 = state_32609__$1;
(statearr_32648_32721[(1)] = (32));

} else {
var statearr_32649_32722 = state_32609__$1;
(statearr_32649_32722[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32610 === (44))){
var inst_32585 = (state_32609[(21)]);
var inst_32598 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32585);
var inst_32599 = cljs.core.pr_str.call(null,inst_32598);
var inst_32600 = ["not required: ",inst_32599].join('');
var inst_32601 = figwheel.client.utils.log.call(null,inst_32600);
var state_32609__$1 = state_32609;
var statearr_32650_32723 = state_32609__$1;
(statearr_32650_32723[(2)] = inst_32601);

(statearr_32650_32723[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32610 === (6))){
var inst_32503 = (state_32609[(2)]);
var state_32609__$1 = state_32609;
var statearr_32651_32724 = state_32609__$1;
(statearr_32651_32724[(2)] = inst_32503);

(statearr_32651_32724[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32610 === (28))){
var inst_32528 = (state_32609[(26)]);
var inst_32555 = (state_32609[(2)]);
var inst_32556 = cljs.core.not_empty.call(null,inst_32528);
var state_32609__$1 = (function (){var statearr_32652 = state_32609;
(statearr_32652[(29)] = inst_32555);

return statearr_32652;
})();
if(cljs.core.truth_(inst_32556)){
var statearr_32653_32725 = state_32609__$1;
(statearr_32653_32725[(1)] = (29));

} else {
var statearr_32654_32726 = state_32609__$1;
(statearr_32654_32726[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32610 === (25))){
var inst_32526 = (state_32609[(23)]);
var inst_32542 = (state_32609[(2)]);
var inst_32543 = cljs.core.not_empty.call(null,inst_32526);
var state_32609__$1 = (function (){var statearr_32655 = state_32609;
(statearr_32655[(30)] = inst_32542);

return statearr_32655;
})();
if(cljs.core.truth_(inst_32543)){
var statearr_32656_32727 = state_32609__$1;
(statearr_32656_32727[(1)] = (26));

} else {
var statearr_32657_32728 = state_32609__$1;
(statearr_32657_32728[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32610 === (34))){
var inst_32578 = (state_32609[(2)]);
var state_32609__$1 = state_32609;
if(cljs.core.truth_(inst_32578)){
var statearr_32658_32729 = state_32609__$1;
(statearr_32658_32729[(1)] = (38));

} else {
var statearr_32659_32730 = state_32609__$1;
(statearr_32659_32730[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32610 === (17))){
var state_32609__$1 = state_32609;
var statearr_32660_32731 = state_32609__$1;
(statearr_32660_32731[(2)] = recompile_dependents);

(statearr_32660_32731[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32610 === (3))){
var state_32609__$1 = state_32609;
var statearr_32661_32732 = state_32609__$1;
(statearr_32661_32732[(2)] = null);

(statearr_32661_32732[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32610 === (12))){
var inst_32499 = (state_32609[(2)]);
var state_32609__$1 = state_32609;
var statearr_32662_32733 = state_32609__$1;
(statearr_32662_32733[(2)] = inst_32499);

(statearr_32662_32733[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32610 === (2))){
var inst_32461 = (state_32609[(13)]);
var inst_32468 = cljs.core.seq.call(null,inst_32461);
var inst_32469 = inst_32468;
var inst_32470 = null;
var inst_32471 = (0);
var inst_32472 = (0);
var state_32609__$1 = (function (){var statearr_32663 = state_32609;
(statearr_32663[(7)] = inst_32471);

(statearr_32663[(8)] = inst_32472);

(statearr_32663[(9)] = inst_32470);

(statearr_32663[(10)] = inst_32469);

return statearr_32663;
})();
var statearr_32664_32734 = state_32609__$1;
(statearr_32664_32734[(2)] = null);

(statearr_32664_32734[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32610 === (23))){
var inst_32526 = (state_32609[(23)]);
var inst_32528 = (state_32609[(26)]);
var inst_32522 = (state_32609[(19)]);
var inst_32530 = (state_32609[(24)]);
var inst_32525 = (state_32609[(25)]);
var inst_32533 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_32535 = (function (){var all_files = inst_32522;
var res_SINGLEQUOTE_ = inst_32525;
var res = inst_32526;
var files_not_loaded = inst_32528;
var dependencies_that_loaded = inst_32530;
return (function (p__32534){
var map__32665 = p__32534;
var map__32665__$1 = (((((!((map__32665 == null))))?(((((map__32665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32665):map__32665);
var request_url = cljs.core.get.call(null,map__32665__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_32536 = cljs.core.reverse.call(null,inst_32530);
var inst_32537 = cljs.core.map.call(null,inst_32535,inst_32536);
var inst_32538 = cljs.core.pr_str.call(null,inst_32537);
var inst_32539 = figwheel.client.utils.log.call(null,inst_32538);
var state_32609__$1 = (function (){var statearr_32667 = state_32609;
(statearr_32667[(31)] = inst_32533);

return statearr_32667;
})();
var statearr_32668_32735 = state_32609__$1;
(statearr_32668_32735[(2)] = inst_32539);

(statearr_32668_32735[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32610 === (35))){
var state_32609__$1 = state_32609;
var statearr_32669_32736 = state_32609__$1;
(statearr_32669_32736[(2)] = true);

(statearr_32669_32736[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32610 === (19))){
var inst_32512 = (state_32609[(12)]);
var inst_32518 = figwheel.client.file_reloading.expand_files.call(null,inst_32512);
var state_32609__$1 = state_32609;
var statearr_32670_32737 = state_32609__$1;
(statearr_32670_32737[(2)] = inst_32518);

(statearr_32670_32737[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32610 === (11))){
var state_32609__$1 = state_32609;
var statearr_32671_32738 = state_32609__$1;
(statearr_32671_32738[(2)] = null);

(statearr_32671_32738[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32610 === (9))){
var inst_32501 = (state_32609[(2)]);
var state_32609__$1 = state_32609;
var statearr_32672_32739 = state_32609__$1;
(statearr_32672_32739[(2)] = inst_32501);

(statearr_32672_32739[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32610 === (5))){
var inst_32471 = (state_32609[(7)]);
var inst_32472 = (state_32609[(8)]);
var inst_32474 = (inst_32472 < inst_32471);
var inst_32475 = inst_32474;
var state_32609__$1 = state_32609;
if(cljs.core.truth_(inst_32475)){
var statearr_32673_32740 = state_32609__$1;
(statearr_32673_32740[(1)] = (7));

} else {
var statearr_32674_32741 = state_32609__$1;
(statearr_32674_32741[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32610 === (14))){
var inst_32482 = (state_32609[(22)]);
var inst_32491 = cljs.core.first.call(null,inst_32482);
var inst_32492 = figwheel.client.file_reloading.eval_body.call(null,inst_32491,opts);
var inst_32493 = cljs.core.next.call(null,inst_32482);
var inst_32469 = inst_32493;
var inst_32470 = null;
var inst_32471 = (0);
var inst_32472 = (0);
var state_32609__$1 = (function (){var statearr_32675 = state_32609;
(statearr_32675[(32)] = inst_32492);

(statearr_32675[(7)] = inst_32471);

(statearr_32675[(8)] = inst_32472);

(statearr_32675[(9)] = inst_32470);

(statearr_32675[(10)] = inst_32469);

return statearr_32675;
})();
var statearr_32676_32742 = state_32609__$1;
(statearr_32676_32742[(2)] = null);

(statearr_32676_32742[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32610 === (45))){
var state_32609__$1 = state_32609;
var statearr_32677_32743 = state_32609__$1;
(statearr_32677_32743[(2)] = null);

(statearr_32677_32743[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32610 === (26))){
var inst_32526 = (state_32609[(23)]);
var inst_32528 = (state_32609[(26)]);
var inst_32522 = (state_32609[(19)]);
var inst_32530 = (state_32609[(24)]);
var inst_32525 = (state_32609[(25)]);
var inst_32545 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_32547 = (function (){var all_files = inst_32522;
var res_SINGLEQUOTE_ = inst_32525;
var res = inst_32526;
var files_not_loaded = inst_32528;
var dependencies_that_loaded = inst_32530;
return (function (p__32546){
var map__32678 = p__32546;
var map__32678__$1 = (((((!((map__32678 == null))))?(((((map__32678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32678):map__32678);
var namespace = cljs.core.get.call(null,map__32678__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__32678__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_32548 = cljs.core.map.call(null,inst_32547,inst_32526);
var inst_32549 = cljs.core.pr_str.call(null,inst_32548);
var inst_32550 = figwheel.client.utils.log.call(null,inst_32549);
var inst_32551 = (function (){var all_files = inst_32522;
var res_SINGLEQUOTE_ = inst_32525;
var res = inst_32526;
var files_not_loaded = inst_32528;
var dependencies_that_loaded = inst_32530;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_32552 = setTimeout(inst_32551,(10));
var state_32609__$1 = (function (){var statearr_32680 = state_32609;
(statearr_32680[(33)] = inst_32545);

(statearr_32680[(34)] = inst_32550);

return statearr_32680;
})();
var statearr_32681_32744 = state_32609__$1;
(statearr_32681_32744[(2)] = inst_32552);

(statearr_32681_32744[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32610 === (16))){
var state_32609__$1 = state_32609;
var statearr_32682_32745 = state_32609__$1;
(statearr_32682_32745[(2)] = reload_dependents);

(statearr_32682_32745[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32610 === (38))){
var inst_32562 = (state_32609[(16)]);
var inst_32580 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32562);
var state_32609__$1 = state_32609;
var statearr_32683_32746 = state_32609__$1;
(statearr_32683_32746[(2)] = inst_32580);

(statearr_32683_32746[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32610 === (30))){
var state_32609__$1 = state_32609;
var statearr_32684_32747 = state_32609__$1;
(statearr_32684_32747[(2)] = null);

(statearr_32684_32747[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32610 === (10))){
var inst_32482 = (state_32609[(22)]);
var inst_32484 = cljs.core.chunked_seq_QMARK_.call(null,inst_32482);
var state_32609__$1 = state_32609;
if(inst_32484){
var statearr_32685_32748 = state_32609__$1;
(statearr_32685_32748[(1)] = (13));

} else {
var statearr_32686_32749 = state_32609__$1;
(statearr_32686_32749[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32610 === (18))){
var inst_32516 = (state_32609[(2)]);
var state_32609__$1 = state_32609;
if(cljs.core.truth_(inst_32516)){
var statearr_32687_32750 = state_32609__$1;
(statearr_32687_32750[(1)] = (19));

} else {
var statearr_32688_32751 = state_32609__$1;
(statearr_32688_32751[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32610 === (42))){
var state_32609__$1 = state_32609;
var statearr_32689_32752 = state_32609__$1;
(statearr_32689_32752[(2)] = null);

(statearr_32689_32752[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32610 === (37))){
var inst_32575 = (state_32609[(2)]);
var state_32609__$1 = state_32609;
var statearr_32690_32753 = state_32609__$1;
(statearr_32690_32753[(2)] = inst_32575);

(statearr_32690_32753[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32610 === (8))){
var inst_32482 = (state_32609[(22)]);
var inst_32469 = (state_32609[(10)]);
var inst_32482__$1 = cljs.core.seq.call(null,inst_32469);
var state_32609__$1 = (function (){var statearr_32691 = state_32609;
(statearr_32691[(22)] = inst_32482__$1);

return statearr_32691;
})();
if(inst_32482__$1){
var statearr_32692_32754 = state_32609__$1;
(statearr_32692_32754[(1)] = (10));

} else {
var statearr_32693_32755 = state_32609__$1;
(statearr_32693_32755[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29893__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29893__auto____0 = (function (){
var statearr_32694 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32694[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29893__auto__);

(statearr_32694[(1)] = (1));

return statearr_32694;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29893__auto____1 = (function (state_32609){
while(true){
var ret_value__29894__auto__ = (function (){try{while(true){
var result__29895__auto__ = switch__29892__auto__.call(null,state_32609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29895__auto__;
}
break;
}
}catch (e32695){if((e32695 instanceof Object)){
var ex__29896__auto__ = e32695;
var statearr_32696_32756 = state_32609;
(statearr_32696_32756[(5)] = ex__29896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32695;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32757 = state_32609;
state_32609 = G__32757;
continue;
} else {
return ret_value__29894__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29893__auto__ = function(state_32609){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29893__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29893__auto____1.call(this,state_32609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29893__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29893__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29893__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29893__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29893__auto__;
})()
})();
var state__29989__auto__ = (function (){var statearr_32697 = f__29988__auto__.call(null);
(statearr_32697[(6)] = c__29987__auto__);

return statearr_32697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29989__auto__);
}));

return c__29987__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__32760,link){
var map__32761 = p__32760;
var map__32761__$1 = (((((!((map__32761 == null))))?(((((map__32761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32761):map__32761);
var file = cljs.core.get.call(null,map__32761__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__32758_SHARP_,p2__32759_SHARP_){
if(cljs.core._EQ_.call(null,p1__32758_SHARP_,p2__32759_SHARP_)){
return p1__32758_SHARP_;
} else {
return false;
}
}),cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = ((match).length);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),((figwheel.client.file_reloading.truncate_url.call(null,link_href)).length)], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__32764){
var map__32765 = p__32764;
var map__32765__$1 = (((((!((map__32765 == null))))?(((((map__32765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32765):map__32765);
var match_length = cljs.core.get.call(null,map__32765__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__32765__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__32763_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__32763_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5735__auto__)){
var res = temp__5735__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
(clone.rel = "stylesheet");

(clone.media = link.media);

(clone.disabled = link.disabled);

(clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
(link.rel = "stylesheet");

(link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__32767_SHARP_,p2__32768_SHARP_){
return cljs.core.assoc.call(null,p1__32767_SHARP_,cljs.core.get.call(null,p2__32768_SHARP_,key),p2__32768_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout((function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
}),(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5733__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5733__auto__)){
var link = temp__5733__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),(function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
}));
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_32769 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_32769);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_32769);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__32770,p__32771){
var map__32772 = p__32770;
var map__32772__$1 = (((((!((map__32772 == null))))?(((((map__32772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32772):map__32772);
var on_cssload = cljs.core.get.call(null,map__32772__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__32773 = p__32771;
var map__32773__$1 = (((((!((map__32773 == null))))?(((((map__32773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32773.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32773):map__32773);
var files_msg = map__32773__$1;
var files = cljs.core.get.call(null,map__32773__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5735__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5735__auto__)){
var f_datas = temp__5735__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1585778618871

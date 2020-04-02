// Compiled by ClojureScript 1.10.597 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('react_dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__45886 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__45887 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__45887);

try{return reagent.dom.global$module$react_dom.render(comp.call(null),container,(function (){
var _STAR_always_update_STAR__orig_val__45888 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__45889 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__45889);

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if((!((callback == null)))){
return callback.call(null);
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__45888);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__45886);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__45891 = arguments.length;
switch (G__45891) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.global$module$react_dom.findDOMNode(this$);
});
(reagent.impl.template.find_dom_node = reagent.dom.dom_node);
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__45893_45897 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__45894_45898 = null;
var count__45895_45899 = (0);
var i__45896_45900 = (0);
while(true){
if((i__45896_45900 < count__45895_45899)){
var v_45901 = cljs.core._nth.call(null,chunk__45894_45898,i__45896_45900);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_45901);


var G__45902 = seq__45893_45897;
var G__45903 = chunk__45894_45898;
var G__45904 = count__45895_45899;
var G__45905 = (i__45896_45900 + (1));
seq__45893_45897 = G__45902;
chunk__45894_45898 = G__45903;
count__45895_45899 = G__45904;
i__45896_45900 = G__45905;
continue;
} else {
var temp__5735__auto___45906 = cljs.core.seq.call(null,seq__45893_45897);
if(temp__5735__auto___45906){
var seq__45893_45907__$1 = temp__5735__auto___45906;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45893_45907__$1)){
var c__4609__auto___45908 = cljs.core.chunk_first.call(null,seq__45893_45907__$1);
var G__45909 = cljs.core.chunk_rest.call(null,seq__45893_45907__$1);
var G__45910 = c__4609__auto___45908;
var G__45911 = cljs.core.count.call(null,c__4609__auto___45908);
var G__45912 = (0);
seq__45893_45897 = G__45909;
chunk__45894_45898 = G__45910;
count__45895_45899 = G__45911;
i__45896_45900 = G__45912;
continue;
} else {
var v_45913 = cljs.core.first.call(null,seq__45893_45907__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_45913);


var G__45914 = cljs.core.next.call(null,seq__45893_45907__$1);
var G__45915 = null;
var G__45916 = (0);
var G__45917 = (0);
seq__45893_45897 = G__45914;
chunk__45894_45898 = G__45915;
count__45895_45899 = G__45916;
i__45896_45900 = G__45917;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render.call(null);
});

//# sourceMappingURL=dom.js.map?rel=1585778478023

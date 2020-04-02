// Compiled by ClojureScript 1.10.597 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('cljs.core.async');
goog.require('goog.string');
goog.require('goog.dom.dataset');
goog.require('goog.object');
goog.require('goog.dom');
goog.require('cljs.pprint');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__4795__auto__ = [];
var len__4789__auto___32950 = arguments.length;
var i__4790__auto___32951 = (0);
while(true){
if((i__4790__auto___32951 < len__4789__auto___32950)){
args__4795__auto__.push((arguments[i__4790__auto___32951]));

var G__32952 = (i__4790__auto___32951 + (1));
i__4790__auto___32951 = G__32952;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__32942_32953 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__32943_32954 = null;
var count__32944_32955 = (0);
var i__32945_32956 = (0);
while(true){
if((i__32945_32956 < count__32944_32955)){
var k_32957 = cljs.core._nth.call(null,chunk__32943_32954,i__32945_32956);
e.setAttribute(cljs.core.name.call(null,k_32957),cljs.core.get.call(null,attrs,k_32957));


var G__32958 = seq__32942_32953;
var G__32959 = chunk__32943_32954;
var G__32960 = count__32944_32955;
var G__32961 = (i__32945_32956 + (1));
seq__32942_32953 = G__32958;
chunk__32943_32954 = G__32959;
count__32944_32955 = G__32960;
i__32945_32956 = G__32961;
continue;
} else {
var temp__5735__auto___32962 = cljs.core.seq.call(null,seq__32942_32953);
if(temp__5735__auto___32962){
var seq__32942_32963__$1 = temp__5735__auto___32962;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32942_32963__$1)){
var c__4609__auto___32964 = cljs.core.chunk_first.call(null,seq__32942_32963__$1);
var G__32965 = cljs.core.chunk_rest.call(null,seq__32942_32963__$1);
var G__32966 = c__4609__auto___32964;
var G__32967 = cljs.core.count.call(null,c__4609__auto___32964);
var G__32968 = (0);
seq__32942_32953 = G__32965;
chunk__32943_32954 = G__32966;
count__32944_32955 = G__32967;
i__32945_32956 = G__32968;
continue;
} else {
var k_32969 = cljs.core.first.call(null,seq__32942_32963__$1);
e.setAttribute(cljs.core.name.call(null,k_32969),cljs.core.get.call(null,attrs,k_32969));


var G__32970 = cljs.core.next.call(null,seq__32942_32963__$1);
var G__32971 = null;
var G__32972 = (0);
var G__32973 = (0);
seq__32942_32953 = G__32970;
chunk__32943_32954 = G__32971;
count__32944_32955 = G__32972;
i__32945_32956 = G__32973;
continue;
}
} else {
}
}
break;
}

var seq__32946_32974 = cljs.core.seq.call(null,children);
var chunk__32947_32975 = null;
var count__32948_32976 = (0);
var i__32949_32977 = (0);
while(true){
if((i__32949_32977 < count__32948_32976)){
var ch_32978 = cljs.core._nth.call(null,chunk__32947_32975,i__32949_32977);
e.appendChild(ch_32978);


var G__32979 = seq__32946_32974;
var G__32980 = chunk__32947_32975;
var G__32981 = count__32948_32976;
var G__32982 = (i__32949_32977 + (1));
seq__32946_32974 = G__32979;
chunk__32947_32975 = G__32980;
count__32948_32976 = G__32981;
i__32949_32977 = G__32982;
continue;
} else {
var temp__5735__auto___32983 = cljs.core.seq.call(null,seq__32946_32974);
if(temp__5735__auto___32983){
var seq__32946_32984__$1 = temp__5735__auto___32983;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32946_32984__$1)){
var c__4609__auto___32985 = cljs.core.chunk_first.call(null,seq__32946_32984__$1);
var G__32986 = cljs.core.chunk_rest.call(null,seq__32946_32984__$1);
var G__32987 = c__4609__auto___32985;
var G__32988 = cljs.core.count.call(null,c__4609__auto___32985);
var G__32989 = (0);
seq__32946_32974 = G__32986;
chunk__32947_32975 = G__32987;
count__32948_32976 = G__32988;
i__32949_32977 = G__32989;
continue;
} else {
var ch_32990 = cljs.core.first.call(null,seq__32946_32984__$1);
e.appendChild(ch_32990);


var G__32991 = cljs.core.next.call(null,seq__32946_32984__$1);
var G__32992 = null;
var G__32993 = (0);
var G__32994 = (0);
seq__32946_32974 = G__32991;
chunk__32947_32975 = G__32992;
count__32948_32976 = G__32993;
i__32949_32977 = G__32994;
continue;
}
} else {
}
}
break;
}

return e;
}));

(figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq32939){
var G__32940 = cljs.core.first.call(null,seq32939);
var seq32939__$1 = cljs.core.next.call(null,seq32939);
var G__32941 = cljs.core.first.call(null,seq32939__$1);
var seq32939__$2 = cljs.core.next.call(null,seq32939__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32940,G__32941,seq32939__$2);
}));

if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.heads_up !== 'undefined') && (typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined')){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__4672__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4673__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4674__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4675__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4676__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),(function (dataset){
return dataset.figwheelEvent;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine,new cljs.core.Keyword(null,"file-column","file-column",1543934780),dataset.fileColumn], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector(["#",cont_id].join('')))){
var el_32995 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),["-webkit-transition: all 0.2s ease-in-out;","-moz-transition: all 0.2s ease-in-out;","-o-transition: all 0.2s ease-in-out;","transition: all 0.2s ease-in-out;","font-size: 13px;","border-top: 1px solid #f5f5f5;","box-shadow: 0px 0px 1px #aaaaaa;","line-height: 18px;","color: #333;","font-family: monospace;","padding: 0px 10px 0px 70px;","position: fixed;","bottom: 0px;","left: 0px;","height: 0px;","opacity: 0.0;","box-sizing: border-box;","z-index: 10000;","text-align: left;"].join('')], null));
(el_32995.onclick = figwheel.client.heads_up.heads_up_onclick_handler);

(el_32995.innerHTML = figwheel.client.heads_up.cljs_logo_svg);

el_32995.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_32995);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__32996,st_map){
var map__32997 = p__32996;
var map__32997__$1 = (((((!((map__32997 == null))))?(((((map__32997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32997):map__32997);
var container_el = cljs.core.get.call(null,map__32997__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,(function (p__32999){
var vec__33000 = p__32999;
var k = cljs.core.nth.call(null,vec__33000,(0),null);
var v = cljs.core.nth.call(null,vec__33000,(1),null);
return goog.object.set(container_el.style,cljs.core.name.call(null,k),v);
}),st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__33003,dom_str){
var map__33004 = p__33003;
var map__33004__$1 = (((((!((map__33004 == null))))?(((((map__33004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33004.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33004):map__33004);
var c = map__33004__$1;
var content_area_el = cljs.core.get.call(null,map__33004__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return (content_area_el.innerHTML = dom_str);
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__33006){
var map__33007 = p__33006;
var map__33007__$1 = (((((!((map__33007 == null))))?(((((map__33007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33007.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33007):map__33007);
var content_area_el = cljs.core.get.call(null,map__33007__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return ["<a style=\"","float: right;","font-size: 18px;","text-decoration: none;","text-align: right;","width: 30px;","height: 30px;","color: rgba(84,84,84, 0.5);","\" href=\"#\"  data-figwheel-event=\"close-heads-up\">","x","</a>"].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__29987__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29988__auto__ = (function (){var switch__29892__auto__ = (function (state_33024){
var state_val_33025 = (state_33024[(1)]);
if((state_val_33025 === (1))){
var inst_33009 = (state_33024[(7)]);
var inst_33009__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_33010 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_33011 = ["10px","10px","100%","68px","1.0"];
var inst_33012 = cljs.core.PersistentHashMap.fromArrays(inst_33010,inst_33011);
var inst_33013 = cljs.core.merge.call(null,inst_33012,style);
var inst_33014 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_33009__$1,inst_33013);
var inst_33015 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_33009__$1,msg);
var inst_33016 = cljs.core.async.timeout.call(null,(300));
var state_33024__$1 = (function (){var statearr_33026 = state_33024;
(statearr_33026[(8)] = inst_33015);

(statearr_33026[(7)] = inst_33009__$1);

(statearr_33026[(9)] = inst_33014);

return statearr_33026;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33024__$1,(2),inst_33016);
} else {
if((state_val_33025 === (2))){
var inst_33009 = (state_33024[(7)]);
var inst_33018 = (state_33024[(2)]);
var inst_33019 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_33020 = ["auto"];
var inst_33021 = cljs.core.PersistentHashMap.fromArrays(inst_33019,inst_33020);
var inst_33022 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_33009,inst_33021);
var state_33024__$1 = (function (){var statearr_33027 = state_33024;
(statearr_33027[(10)] = inst_33018);

return statearr_33027;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33024__$1,inst_33022);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__29893__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__29893__auto____0 = (function (){
var statearr_33028 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33028[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__29893__auto__);

(statearr_33028[(1)] = (1));

return statearr_33028;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__29893__auto____1 = (function (state_33024){
while(true){
var ret_value__29894__auto__ = (function (){try{while(true){
var result__29895__auto__ = switch__29892__auto__.call(null,state_33024);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29895__auto__;
}
break;
}
}catch (e33029){if((e33029 instanceof Object)){
var ex__29896__auto__ = e33029;
var statearr_33030_33032 = state_33024;
(statearr_33030_33032[(5)] = ex__29896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33029;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33033 = state_33024;
state_33024 = G__33033;
continue;
} else {
return ret_value__29894__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__29893__auto__ = function(state_33024){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__29893__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__29893__auto____1.call(this,state_33024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__29893__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__29893__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__29893__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__29893__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__29893__auto__;
})()
})();
var state__29989__auto__ = (function (){var statearr_33031 = f__29988__auto__.call(null);
(statearr_33031[(6)] = c__29987__auto__);

return statearr_33031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29989__auto__);
}));

return c__29987__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var G__33035 = arguments.length;
switch (G__33035) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1 = (function (s){
return figwheel.client.heads_up.heading.call(null,s,"");
}));

(figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2 = (function (s,sub_head){
return ["<div style=\"","font-size: 26px;","line-height: 26px;","margin-bottom: 2px;","padding-top: 1px;","\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," <span style=\"","display: inline-block;","font-size: 13px;","\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_head),"</span></div>"].join('');
}));

(figwheel.client.heads_up.heading.cljs$lang$maxFixedArity = 2);

figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,column_number,msg){
return ["<div style=\"cursor: pointer;\" data-figwheel-event=\"file-selected\" data-file-name=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),"\" data-file-line=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),"\" data-file-column=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_number),"\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"</div>"].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg,p__33037){
var map__33038 = p__33037;
var map__33038__$1 = (((((!((map__33038 == null))))?(((((map__33038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33038):map__33038);
var file = cljs.core.get.call(null,map__33038__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__33038__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__33038__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg__$1 = goog.string.htmlEscape(msg);
if(cljs.core.truth_((function (){var or__4185__auto__ = file;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})())){
return figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg__$1);
} else {
return ["<div>",msg__$1,"</div>"].join('');
}
});
figwheel.client.heads_up.escape = (function figwheel$client$heads_up$escape(x){
return goog.string.htmlEscape(x);
});
figwheel.client.heads_up.pad_line_number = (function figwheel$client$heads_up$pad_line_number(n,line_number){
var len = cljs.core.count.call(null,cljs.core.fnil.call(null,cljs.core.str,"").call(null,line_number));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((len < n))?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - len)," ")):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number)].join('');
});
figwheel.client.heads_up.inline_error_line = (function figwheel$client$heads_up$inline_error_line(style,line_number,line){
return ["<span style='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style),"'>","<span style='color: #757575;'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),"  </span>",figwheel.client.heads_up.escape.call(null,line),"</span>"].join('');
});
figwheel.client.heads_up.format_inline_error_line = (function figwheel$client$heads_up$format_inline_error_line(p__33040){
var vec__33041 = p__33040;
var typ = cljs.core.nth.call(null,vec__33041,(0),null);
var line_number = cljs.core.nth.call(null,vec__33041,(1),null);
var line = cljs.core.nth.call(null,vec__33041,(2),null);
var pred__33044 = cljs.core._EQ_;
var expr__33045 = typ;
if(cljs.core.truth_(pred__33044.call(null,new cljs.core.Keyword(null,"code-line","code-line",-2138627853),expr__33045))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #999;",line_number,line);
} else {
if(cljs.core.truth_(pred__33044.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),expr__33045))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #ccc; font-weight: bold;",line_number,line);
} else {
if(cljs.core.truth_(pred__33044.call(null,new cljs.core.Keyword(null,"error-message","error-message",1756021561),expr__33045))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #D07D7D;",line_number,line);
} else {
return figwheel.client.heads_up.inline_error_line.call(null,"color: #666;",line_number,line);
}
}
}
});
figwheel.client.heads_up.pad_line_numbers = (function figwheel$client$heads_up$pad_line_numbers(inline_error){
var max_line_number_length = ((cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,inline_error)))).length);
return cljs.core.map.call(null,(function (p1__33047_SHARP_){
return cljs.core.update_in.call(null,p1__33047_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.partial.call(null,figwheel.client.heads_up.pad_line_number,max_line_number_length));
}),inline_error);
});
figwheel.client.heads_up.format_inline_error = (function figwheel$client$heads_up$format_inline_error(inline_error){
var lines = cljs.core.map.call(null,figwheel.client.heads_up.format_inline_error_line,figwheel.client.heads_up.pad_line_numbers.call(null,inline_error));
return ["<pre style='whitespace:pre; overflow-x: scroll; display:block; font-family:monospace; font-size:0.8em; border-radius: 3px;"," line-height: 1.1em; padding: 10px; background-color: rgb(24,26,38); margin-right: 5px'>",clojure.string.join.call(null,"\n",lines),"</pre>"].join('');
});
figwheel.client.heads_up.flatten_exception = (function figwheel$client$heads_up$flatten_exception(p1__33048_SHARP_){
return cljs.core.take_while.call(null,cljs.core.some_QMARK_,cljs.core.iterate.call(null,new cljs.core.Keyword(null,"cause","cause",231901252),p1__33048_SHARP_));
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__33051){
var map__33052 = p__33051;
var map__33052__$1 = (((((!((map__33052 == null))))?(((((map__33052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33052):map__33052);
var exception = map__33052__$1;
var message = cljs.core.get.call(null,map__33052__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var failed_loading_clj_file = cljs.core.get.call(null,map__33052__$1,new cljs.core.Keyword(null,"failed-loading-clj-file","failed-loading-clj-file",-1682536481));
var reader_exception = cljs.core.get.call(null,map__33052__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var file = cljs.core.get.call(null,map__33052__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var column = cljs.core.get.call(null,map__33052__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var failed_compiling = cljs.core.get.call(null,map__33052__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var error_inline = cljs.core.get.call(null,map__33052__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var line = cljs.core.get.call(null,map__33052__$1,new cljs.core.Keyword(null,"line","line",212345235));
var class$ = cljs.core.get.call(null,map__33052__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var analysis_exception = cljs.core.get.call(null,map__33052__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var display_ex_data = cljs.core.get.call(null,map__33052__$1,new cljs.core.Keyword(null,"display-ex-data","display-ex-data",-1611558730));
var last_message = (cljs.core.truth_((function (){var and__4174__auto__ = file;
if(cljs.core.truth_(and__4174__auto__)){
return line;
} else {
return and__4174__auto__;
}
})())?["Please see line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," of file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?["Please see ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(failed_loading_clj_file)?"Couldn't load Clojure file":(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
)))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,(function (p1__33049_SHARP_){
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__33049_SHARP_),"</div>"].join('');
}),(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[(cljs.core.truth_(class$)?[figwheel.client.heads_up.escape.call(null,class$),": "].join(''):""),"<span style=\"font-weight:bold;\">",figwheel.client.heads_up.escape.call(null,message),"</span>"].join(''),(cljs.core.truth_(display_ex_data)?["<pre style=\"white-space: pre-wrap\">",figwheel.client.utils.pprint_to_string.call(null,display_ex_data),"</pre>"].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null):cljs.core.map.call(null,(function (p1__33050_SHARP_){
return [figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__33050_SHARP_)),": ",figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__33050_SHARP_))].join('');
}),figwheel.client.heads_up.flatten_exception.call(null,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception))))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<div style=\"color: #AD4F4F; padding-top: 3px;\">",figwheel.client.heads_up.escape.call(null,last_message),"</div>"].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.auto_notify_source_file_line = (function figwheel$client$heads_up$auto_notify_source_file_line(p__33054){
var map__33055 = p__33054;
var map__33055__$1 = (((((!((map__33055 == null))))?(((((map__33055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33055):map__33055);
var file = cljs.core.get.call(null,map__33055__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__33055__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__33055__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),new cljs.core.Keyword(null,"file-line","file-line",-1228823138),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),new cljs.core.Keyword(null,"file-column","file-column",1543934780),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)], null));
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__33058 = figwheel.client.heads_up.exception__GT_display_data.call(null,exception_data);
var map__33058__$1 = (((((!((map__33058 == null))))?(((((map__33058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33058.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33058):map__33058);
var head = cljs.core.get.call(null,map__33058__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__33058__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__33058__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__33058__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__33058__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__33058__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__33058__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[figwheel.client.heads_up.close_link.call(null),figwheel.client.heads_up.heading.call(null,head,sub_head),figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg)].join(''));
});
figwheel.client.heads_up.warning_data__GT_display_data = (function figwheel$client$heads_up$warning_data__GT_display_data(p__33061){
var map__33062 = p__33061;
var map__33062__$1 = (((((!((map__33062 == null))))?(((((map__33062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33062):map__33062);
var warning_data = map__33062__$1;
var file = cljs.core.get.call(null,map__33062__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__33062__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__33062__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__33062__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__33062__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__4174__auto__ = file;
if(cljs.core.truth_(and__4174__auto__)){
return line;
} else {
return and__4174__auto__;
}
})())?["Please see line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," of file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?["Please see ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),"Compile Warning",new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,(function (p1__33060_SHARP_){
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__33060_SHARP_),"</div>"].join('');
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(message)?["<span style=\"font-weight:bold;\">",figwheel.client.heads_up.escape.call(null,message),"</span>"].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null)),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<div style=\"color: #AD4F4F; padding-top: 3px; margin-bottom: 10px;\">",figwheel.client.heads_up.escape.call(null,last_message),"</div>"].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[figwheel.client.heads_up.close_link.call(null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,header)),"<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"</div>"].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(warning_data){
var map__33064 = figwheel.client.heads_up.warning_data__GT_display_data.call(null,warning_data);
var map__33064__$1 = (((((!((map__33064 == null))))?(((((map__33064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33064.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33064):map__33064);
var head = cljs.core.get.call(null,map__33064__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__33064__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__33064__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__33064__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__33064__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__33064__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__33064__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[figwheel.client.heads_up.close_link.call(null),figwheel.client.heads_up.heading.call(null,head,sub_head),figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg)].join(''));
});
figwheel.client.heads_up.format_warning_message = (function figwheel$client$heads_up$format_warning_message(p__33066){
var map__33067 = p__33066;
var map__33067__$1 = (((((!((map__33067 == null))))?(((((map__33067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33067.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33067):map__33067);
var warning_data = map__33067__$1;
var message = cljs.core.get.call(null,map__33067__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__33067__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__33067__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__33067__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__33069 = message;
var G__33069__$1 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33069)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__33069);
var G__33069__$2 = (cljs.core.truth_((function (){var and__4174__auto__ = line;
if(cljs.core.truth_(and__4174__auto__)){
return column;
} else {
return and__4174__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33069__$1),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):G__33069__$1);
if(cljs.core.truth_(file)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33069__$2)," in file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('');
} else {
return G__33069__$2;
}
});
figwheel.client.heads_up.append_warning_message = (function figwheel$client$heads_up$append_warning_message(p__33070){
var map__33071 = p__33070;
var map__33071__$1 = (((((!((map__33071 == null))))?(((((map__33071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33071):map__33071);
var warning_data = map__33071__$1;
var message = cljs.core.get.call(null,map__33071__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__33071__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__33071__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__33071__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_(message)){
var map__33073 = figwheel.client.heads_up.ensure_container.call(null);
var map__33073__$1 = (((((!((map__33073 == null))))?(((((map__33073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33073):map__33073);
var content_area_el = cljs.core.get.call(null,map__33073__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = goog.dom.createElement("div");
var child_count = goog.dom.getChildren(content_area_el).length;
if((child_count < (6))){
(el.innerHTML = figwheel.client.heads_up.format_line.call(null,figwheel.client.heads_up.format_warning_message.call(null,warning_data),warning_data));

return goog.dom.append(content_area_el,el);
} else {
var temp__5735__auto__ = goog.dom.getLastElementChild(content_area_el);
if(cljs.core.truth_(temp__5735__auto__)){
var last_child = temp__5735__auto__;
var temp__5733__auto__ = goog.dom.dataset.get(last_child,"figwheel_count");
if(cljs.core.truth_(temp__5733__auto__)){
var message_count = temp__5733__auto__;
var message_count__$1 = (parseInt(message_count) + (1));
goog.dom.dataset.set(last_child,"figwheel_count",message_count__$1);

return (last_child.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message_count__$1)," more warnings have not been displayed ..."].join(''));
} else {
return goog.dom.append(content_area_el,goog.dom.createDom("div",({"data-figwheel_count": (1), "style": "margin-top: 3px; font-weight: bold"}),"1 more warning that has not been displayed ..."));
}
} else {
return null;
}
}
} else {
return null;
}
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__29987__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29988__auto__ = (function (){var switch__29892__auto__ = (function (state_33092){
var state_val_33093 = (state_33092[(1)]);
if((state_val_33093 === (1))){
var inst_33075 = (state_33092[(7)]);
var inst_33075__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_33076 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_33077 = ["0.0"];
var inst_33078 = cljs.core.PersistentHashMap.fromArrays(inst_33076,inst_33077);
var inst_33079 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_33075__$1,inst_33078);
var inst_33080 = cljs.core.async.timeout.call(null,(300));
var state_33092__$1 = (function (){var statearr_33094 = state_33092;
(statearr_33094[(7)] = inst_33075__$1);

(statearr_33094[(8)] = inst_33079);

return statearr_33094;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33092__$1,(2),inst_33080);
} else {
if((state_val_33093 === (2))){
var inst_33075 = (state_33092[(7)]);
var inst_33082 = (state_33092[(2)]);
var inst_33083 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_33084 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_33085 = cljs.core.PersistentHashMap.fromArrays(inst_33083,inst_33084);
var inst_33086 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_33075,inst_33085);
var inst_33087 = cljs.core.async.timeout.call(null,(200));
var state_33092__$1 = (function (){var statearr_33095 = state_33092;
(statearr_33095[(9)] = inst_33086);

(statearr_33095[(10)] = inst_33082);

return statearr_33095;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33092__$1,(3),inst_33087);
} else {
if((state_val_33093 === (3))){
var inst_33075 = (state_33092[(7)]);
var inst_33089 = (state_33092[(2)]);
var inst_33090 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_33075,"");
var state_33092__$1 = (function (){var statearr_33096 = state_33092;
(statearr_33096[(11)] = inst_33089);

return statearr_33096;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33092__$1,inst_33090);
} else {
return null;
}
}
}
});
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__29893__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__29893__auto____0 = (function (){
var statearr_33097 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33097[(0)] = figwheel$client$heads_up$clear_$_state_machine__29893__auto__);

(statearr_33097[(1)] = (1));

return statearr_33097;
});
var figwheel$client$heads_up$clear_$_state_machine__29893__auto____1 = (function (state_33092){
while(true){
var ret_value__29894__auto__ = (function (){try{while(true){
var result__29895__auto__ = switch__29892__auto__.call(null,state_33092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29895__auto__;
}
break;
}
}catch (e33098){if((e33098 instanceof Object)){
var ex__29896__auto__ = e33098;
var statearr_33099_33101 = state_33092;
(statearr_33099_33101[(5)] = ex__29896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33098;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33102 = state_33092;
state_33092 = G__33102;
continue;
} else {
return ret_value__29894__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__29893__auto__ = function(state_33092){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__29893__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__29893__auto____1.call(this,state_33092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__29893__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__29893__auto____0;
figwheel$client$heads_up$clear_$_state_machine__29893__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__29893__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__29893__auto__;
})()
})();
var state__29989__auto__ = (function (){var statearr_33100 = f__29988__auto__.call(null);
(statearr_33100[(6)] = c__29987__auto__);

return statearr_33100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29989__auto__);
}));

return c__29987__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__29987__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29988__auto__ = (function (){var switch__29892__auto__ = (function (state_33113){
var state_val_33114 = (state_33113[(1)]);
if((state_val_33114 === (1))){
var inst_33103 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_33113__$1 = state_33113;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33113__$1,(2),inst_33103);
} else {
if((state_val_33114 === (2))){
var inst_33105 = (state_33113[(2)]);
var inst_33106 = cljs.core.async.timeout.call(null,(400));
var state_33113__$1 = (function (){var statearr_33115 = state_33113;
(statearr_33115[(7)] = inst_33105);

return statearr_33115;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33113__$1,(3),inst_33106);
} else {
if((state_val_33114 === (3))){
var inst_33108 = (state_33113[(2)]);
var inst_33109 = figwheel.client.heads_up.clear.call(null);
var state_33113__$1 = (function (){var statearr_33116 = state_33113;
(statearr_33116[(8)] = inst_33108);

return statearr_33116;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33113__$1,(4),inst_33109);
} else {
if((state_val_33114 === (4))){
var inst_33111 = (state_33113[(2)]);
var state_33113__$1 = state_33113;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33113__$1,inst_33111);
} else {
return null;
}
}
}
}
});
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__29893__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__29893__auto____0 = (function (){
var statearr_33117 = [null,null,null,null,null,null,null,null,null];
(statearr_33117[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__29893__auto__);

(statearr_33117[(1)] = (1));

return statearr_33117;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__29893__auto____1 = (function (state_33113){
while(true){
var ret_value__29894__auto__ = (function (){try{while(true){
var result__29895__auto__ = switch__29892__auto__.call(null,state_33113);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29895__auto__;
}
break;
}
}catch (e33118){if((e33118 instanceof Object)){
var ex__29896__auto__ = e33118;
var statearr_33119_33121 = state_33113;
(statearr_33119_33121[(5)] = ex__29896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33113);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33118;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33122 = state_33113;
state_33113 = G__33122;
continue;
} else {
return ret_value__29894__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__29893__auto__ = function(state_33113){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__29893__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__29893__auto____1.call(this,state_33113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__29893__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__29893__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__29893__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__29893__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__29893__auto__;
})()
})();
var state__29989__auto__ = (function (){var statearr_33120 = f__29988__auto__.call(null);
(statearr_33120[(6)] = c__29987__auto__);

return statearr_33120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29989__auto__);
}));

return c__29987__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
figwheel.client.heads_up.close_bad_compile_screen = (function figwheel$client$heads_up$close_bad_compile_screen(){
var temp__5735__auto__ = document.getElementById("figwheelFailScreen");
if(cljs.core.truth_(temp__5735__auto__)){
var el = temp__5735__auto__;
return goog.dom.removeNode(el);
} else {
return null;
}
});
figwheel.client.heads_up.bad_compile_screen = (function figwheel$client$heads_up$bad_compile_screen(){
var body = (goog.dom.getElementsByTagNameAndClass("body")[(0)]);
figwheel.client.heads_up.close_bad_compile_screen.call(null);

return goog.dom.append(body,goog.dom.createDom("div",({"id": "figwheelFailScreen", "style": ["background-color: rgba(24, 26, 38, 0.95);","position: absolute;","z-index: 9000;","width: 100vw;","height: 100vh;","top: 0px; left: 0px;","font-family: monospace"].join('')}),goog.dom.createDom("div",({"class": "message", "style": ["color: #FFF5DB;","width: 100vw;","margin: auto;","margin-top: 10px;","text-align: center; ","padding: 2px 0px;","font-size: 13px;","position: relative"].join('')}),goog.dom.createDom("a",({"onclick": (function (e){
e.preventDefault();

return figwheel.client.heads_up.close_bad_compile_screen.call(null);
}), "href": "javascript:", "style": "position: absolute; right: 10px; top: 10px; color: #666"}),"X"),goog.dom.createDom("h2",({"style": "color: #FFF5DB"}),"Figwheel Says: Your code didn't compile."),goog.dom.createDom("div",({"style": "font-size: 12px"}),goog.dom.createDom("p",({"style": "color: #D07D7D;"}),"Keep trying. This page will auto-refresh when your code compiles successfully.")))));
});

//# sourceMappingURL=heads_up.js.map?rel=1585778620232

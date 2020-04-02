// Compiled by ClojureScript 1.10.597 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30047 = arguments.length;
switch (G__30047) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30048 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30048 = (function (f,blockable,meta30049){
this.f = f;
this.blockable = blockable;
this.meta30049 = meta30049;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30048.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30050,meta30049__$1){
var self__ = this;
var _30050__$1 = this;
return (new cljs.core.async.t_cljs$core$async30048(self__.f,self__.blockable,meta30049__$1));
}));

(cljs.core.async.t_cljs$core$async30048.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30050){
var self__ = this;
var _30050__$1 = this;
return self__.meta30049;
}));

(cljs.core.async.t_cljs$core$async30048.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30048.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30048.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30048.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30048.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30049","meta30049",-863276742,null)], null);
}));

(cljs.core.async.t_cljs$core$async30048.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30048.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30048");

(cljs.core.async.t_cljs$core$async30048.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async30048");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30048.
 */
cljs.core.async.__GT_t_cljs$core$async30048 = (function cljs$core$async$__GT_t_cljs$core$async30048(f__$1,blockable__$1,meta30049){
return (new cljs.core.async.t_cljs$core$async30048(f__$1,blockable__$1,meta30049));
});

}

return (new cljs.core.async.t_cljs$core$async30048(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__30054 = arguments.length;
switch (G__30054) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__30057 = arguments.length;
switch (G__30057) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__30060 = arguments.length;
switch (G__30060) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_30062 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_30062);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_30062);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__30064 = arguments.length;
switch (G__30064) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___30066 = n;
var x_30067 = (0);
while(true){
if((x_30067 < n__4666__auto___30066)){
(a[x_30067] = (0));

var G__30068 = (x_30067 + (1));
x_30067 = G__30068;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__30069 = (i + (1));
i = G__30069;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30070 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30070 = (function (flag,meta30071){
this.flag = flag;
this.meta30071 = meta30071;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30070.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30072,meta30071__$1){
var self__ = this;
var _30072__$1 = this;
return (new cljs.core.async.t_cljs$core$async30070(self__.flag,meta30071__$1));
}));

(cljs.core.async.t_cljs$core$async30070.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30072){
var self__ = this;
var _30072__$1 = this;
return self__.meta30071;
}));

(cljs.core.async.t_cljs$core$async30070.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30070.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async30070.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30070.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30070.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30071","meta30071",-474353142,null)], null);
}));

(cljs.core.async.t_cljs$core$async30070.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30070.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30070");

(cljs.core.async.t_cljs$core$async30070.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async30070");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30070.
 */
cljs.core.async.__GT_t_cljs$core$async30070 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30070(flag__$1,meta30071){
return (new cljs.core.async.t_cljs$core$async30070(flag__$1,meta30071));
});

}

return (new cljs.core.async.t_cljs$core$async30070(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30073 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30073 = (function (flag,cb,meta30074){
this.flag = flag;
this.cb = cb;
this.meta30074 = meta30074;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30073.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30075,meta30074__$1){
var self__ = this;
var _30075__$1 = this;
return (new cljs.core.async.t_cljs$core$async30073(self__.flag,self__.cb,meta30074__$1));
}));

(cljs.core.async.t_cljs$core$async30073.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30075){
var self__ = this;
var _30075__$1 = this;
return self__.meta30074;
}));

(cljs.core.async.t_cljs$core$async30073.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30073.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async30073.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30073.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30073.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30074","meta30074",-697457690,null)], null);
}));

(cljs.core.async.t_cljs$core$async30073.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30073.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30073");

(cljs.core.async.t_cljs$core$async30073.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async30073");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30073.
 */
cljs.core.async.__GT_t_cljs$core$async30073 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30073(flag__$1,cb__$1,meta30074){
return (new cljs.core.async.t_cljs$core$async30073(flag__$1,cb__$1,meta30074));
});

}

return (new cljs.core.async.t_cljs$core$async30073(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30076_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30076_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30077_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30077_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__30078 = (i + (1));
i = G__30078;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___30084 = arguments.length;
var i__4790__auto___30085 = (0);
while(true){
if((i__4790__auto___30085 < len__4789__auto___30084)){
args__4795__auto__.push((arguments[i__4790__auto___30085]));

var G__30086 = (i__4790__auto___30085 + (1));
i__4790__auto___30085 = G__30086;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30081){
var map__30082 = p__30081;
var map__30082__$1 = (((((!((map__30082 == null))))?(((((map__30082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30082):map__30082);
var opts = map__30082__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30079){
var G__30080 = cljs.core.first.call(null,seq30079);
var seq30079__$1 = cljs.core.next.call(null,seq30079);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30080,seq30079__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__30088 = arguments.length;
switch (G__30088) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29987__auto___30134 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29988__auto__ = (function (){var switch__29892__auto__ = (function (state_30112){
var state_val_30113 = (state_30112[(1)]);
if((state_val_30113 === (7))){
var inst_30108 = (state_30112[(2)]);
var state_30112__$1 = state_30112;
var statearr_30114_30135 = state_30112__$1;
(statearr_30114_30135[(2)] = inst_30108);

(statearr_30114_30135[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30113 === (1))){
var state_30112__$1 = state_30112;
var statearr_30115_30136 = state_30112__$1;
(statearr_30115_30136[(2)] = null);

(statearr_30115_30136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30113 === (4))){
var inst_30091 = (state_30112[(7)]);
var inst_30091__$1 = (state_30112[(2)]);
var inst_30092 = (inst_30091__$1 == null);
var state_30112__$1 = (function (){var statearr_30116 = state_30112;
(statearr_30116[(7)] = inst_30091__$1);

return statearr_30116;
})();
if(cljs.core.truth_(inst_30092)){
var statearr_30117_30137 = state_30112__$1;
(statearr_30117_30137[(1)] = (5));

} else {
var statearr_30118_30138 = state_30112__$1;
(statearr_30118_30138[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30113 === (13))){
var state_30112__$1 = state_30112;
var statearr_30119_30139 = state_30112__$1;
(statearr_30119_30139[(2)] = null);

(statearr_30119_30139[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30113 === (6))){
var inst_30091 = (state_30112[(7)]);
var state_30112__$1 = state_30112;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30112__$1,(11),to,inst_30091);
} else {
if((state_val_30113 === (3))){
var inst_30110 = (state_30112[(2)]);
var state_30112__$1 = state_30112;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30112__$1,inst_30110);
} else {
if((state_val_30113 === (12))){
var state_30112__$1 = state_30112;
var statearr_30120_30140 = state_30112__$1;
(statearr_30120_30140[(2)] = null);

(statearr_30120_30140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30113 === (2))){
var state_30112__$1 = state_30112;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30112__$1,(4),from);
} else {
if((state_val_30113 === (11))){
var inst_30101 = (state_30112[(2)]);
var state_30112__$1 = state_30112;
if(cljs.core.truth_(inst_30101)){
var statearr_30121_30141 = state_30112__$1;
(statearr_30121_30141[(1)] = (12));

} else {
var statearr_30122_30142 = state_30112__$1;
(statearr_30122_30142[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30113 === (9))){
var state_30112__$1 = state_30112;
var statearr_30123_30143 = state_30112__$1;
(statearr_30123_30143[(2)] = null);

(statearr_30123_30143[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30113 === (5))){
var state_30112__$1 = state_30112;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30124_30144 = state_30112__$1;
(statearr_30124_30144[(1)] = (8));

} else {
var statearr_30125_30145 = state_30112__$1;
(statearr_30125_30145[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30113 === (14))){
var inst_30106 = (state_30112[(2)]);
var state_30112__$1 = state_30112;
var statearr_30126_30146 = state_30112__$1;
(statearr_30126_30146[(2)] = inst_30106);

(statearr_30126_30146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30113 === (10))){
var inst_30098 = (state_30112[(2)]);
var state_30112__$1 = state_30112;
var statearr_30127_30147 = state_30112__$1;
(statearr_30127_30147[(2)] = inst_30098);

(statearr_30127_30147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30113 === (8))){
var inst_30095 = cljs.core.async.close_BANG_.call(null,to);
var state_30112__$1 = state_30112;
var statearr_30128_30148 = state_30112__$1;
(statearr_30128_30148[(2)] = inst_30095);

(statearr_30128_30148[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__29893__auto__ = null;
var cljs$core$async$state_machine__29893__auto____0 = (function (){
var statearr_30129 = [null,null,null,null,null,null,null,null];
(statearr_30129[(0)] = cljs$core$async$state_machine__29893__auto__);

(statearr_30129[(1)] = (1));

return statearr_30129;
});
var cljs$core$async$state_machine__29893__auto____1 = (function (state_30112){
while(true){
var ret_value__29894__auto__ = (function (){try{while(true){
var result__29895__auto__ = switch__29892__auto__.call(null,state_30112);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29895__auto__;
}
break;
}
}catch (e30130){if((e30130 instanceof Object)){
var ex__29896__auto__ = e30130;
var statearr_30131_30149 = state_30112;
(statearr_30131_30149[(5)] = ex__29896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30112);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30150 = state_30112;
state_30112 = G__30150;
continue;
} else {
return ret_value__29894__auto__;
}
break;
}
});
cljs$core$async$state_machine__29893__auto__ = function(state_30112){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29893__auto____1.call(this,state_30112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29893__auto____0;
cljs$core$async$state_machine__29893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29893__auto____1;
return cljs$core$async$state_machine__29893__auto__;
})()
})();
var state__29989__auto__ = (function (){var statearr_30132 = f__29988__auto__.call(null);
(statearr_30132[(6)] = c__29987__auto___30134);

return statearr_30132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29989__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__30151){
var vec__30152 = p__30151;
var v = cljs.core.nth.call(null,vec__30152,(0),null);
var p = cljs.core.nth.call(null,vec__30152,(1),null);
var job = vec__30152;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29987__auto___30323 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29988__auto__ = (function (){var switch__29892__auto__ = (function (state_30159){
var state_val_30160 = (state_30159[(1)]);
if((state_val_30160 === (1))){
var state_30159__$1 = state_30159;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30159__$1,(2),res,v);
} else {
if((state_val_30160 === (2))){
var inst_30156 = (state_30159[(2)]);
var inst_30157 = cljs.core.async.close_BANG_.call(null,res);
var state_30159__$1 = (function (){var statearr_30161 = state_30159;
(statearr_30161[(7)] = inst_30156);

return statearr_30161;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30159__$1,inst_30157);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29893__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29893__auto____0 = (function (){
var statearr_30162 = [null,null,null,null,null,null,null,null];
(statearr_30162[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29893__auto__);

(statearr_30162[(1)] = (1));

return statearr_30162;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29893__auto____1 = (function (state_30159){
while(true){
var ret_value__29894__auto__ = (function (){try{while(true){
var result__29895__auto__ = switch__29892__auto__.call(null,state_30159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29895__auto__;
}
break;
}
}catch (e30163){if((e30163 instanceof Object)){
var ex__29896__auto__ = e30163;
var statearr_30164_30324 = state_30159;
(statearr_30164_30324[(5)] = ex__29896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30325 = state_30159;
state_30159 = G__30325;
continue;
} else {
return ret_value__29894__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29893__auto__ = function(state_30159){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29893__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29893__auto____1.call(this,state_30159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29893__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29893__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29893__auto__;
})()
})();
var state__29989__auto__ = (function (){var statearr_30165 = f__29988__auto__.call(null);
(statearr_30165[(6)] = c__29987__auto___30323);

return statearr_30165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29989__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__30166){
var vec__30167 = p__30166;
var v = cljs.core.nth.call(null,vec__30167,(0),null);
var p = cljs.core.nth.call(null,vec__30167,(1),null);
var job = vec__30167;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4666__auto___30326 = n;
var __30327 = (0);
while(true){
if((__30327 < n__4666__auto___30326)){
var G__30170_30328 = type;
var G__30170_30329__$1 = (((G__30170_30328 instanceof cljs.core.Keyword))?G__30170_30328.fqn:null);
switch (G__30170_30329__$1) {
case "compute":
var c__29987__auto___30331 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30327,c__29987__auto___30331,G__30170_30328,G__30170_30329__$1,n__4666__auto___30326,jobs,results,process,async){
return (function (){
var f__29988__auto__ = (function (){var switch__29892__auto__ = ((function (__30327,c__29987__auto___30331,G__30170_30328,G__30170_30329__$1,n__4666__auto___30326,jobs,results,process,async){
return (function (state_30183){
var state_val_30184 = (state_30183[(1)]);
if((state_val_30184 === (1))){
var state_30183__$1 = state_30183;
var statearr_30185_30332 = state_30183__$1;
(statearr_30185_30332[(2)] = null);

(statearr_30185_30332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30184 === (2))){
var state_30183__$1 = state_30183;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30183__$1,(4),jobs);
} else {
if((state_val_30184 === (3))){
var inst_30181 = (state_30183[(2)]);
var state_30183__$1 = state_30183;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30183__$1,inst_30181);
} else {
if((state_val_30184 === (4))){
var inst_30173 = (state_30183[(2)]);
var inst_30174 = process.call(null,inst_30173);
var state_30183__$1 = state_30183;
if(cljs.core.truth_(inst_30174)){
var statearr_30186_30333 = state_30183__$1;
(statearr_30186_30333[(1)] = (5));

} else {
var statearr_30187_30334 = state_30183__$1;
(statearr_30187_30334[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30184 === (5))){
var state_30183__$1 = state_30183;
var statearr_30188_30335 = state_30183__$1;
(statearr_30188_30335[(2)] = null);

(statearr_30188_30335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30184 === (6))){
var state_30183__$1 = state_30183;
var statearr_30189_30336 = state_30183__$1;
(statearr_30189_30336[(2)] = null);

(statearr_30189_30336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30184 === (7))){
var inst_30179 = (state_30183[(2)]);
var state_30183__$1 = state_30183;
var statearr_30190_30337 = state_30183__$1;
(statearr_30190_30337[(2)] = inst_30179);

(statearr_30190_30337[(1)] = (3));


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
});})(__30327,c__29987__auto___30331,G__30170_30328,G__30170_30329__$1,n__4666__auto___30326,jobs,results,process,async))
;
return ((function (__30327,switch__29892__auto__,c__29987__auto___30331,G__30170_30328,G__30170_30329__$1,n__4666__auto___30326,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29893__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29893__auto____0 = (function (){
var statearr_30191 = [null,null,null,null,null,null,null];
(statearr_30191[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29893__auto__);

(statearr_30191[(1)] = (1));

return statearr_30191;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29893__auto____1 = (function (state_30183){
while(true){
var ret_value__29894__auto__ = (function (){try{while(true){
var result__29895__auto__ = switch__29892__auto__.call(null,state_30183);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29895__auto__;
}
break;
}
}catch (e30192){if((e30192 instanceof Object)){
var ex__29896__auto__ = e30192;
var statearr_30193_30338 = state_30183;
(statearr_30193_30338[(5)] = ex__29896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30183);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30192;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30339 = state_30183;
state_30183 = G__30339;
continue;
} else {
return ret_value__29894__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29893__auto__ = function(state_30183){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29893__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29893__auto____1.call(this,state_30183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29893__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29893__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29893__auto__;
})()
;})(__30327,switch__29892__auto__,c__29987__auto___30331,G__30170_30328,G__30170_30329__$1,n__4666__auto___30326,jobs,results,process,async))
})();
var state__29989__auto__ = (function (){var statearr_30194 = f__29988__auto__.call(null);
(statearr_30194[(6)] = c__29987__auto___30331);

return statearr_30194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29989__auto__);
});})(__30327,c__29987__auto___30331,G__30170_30328,G__30170_30329__$1,n__4666__auto___30326,jobs,results,process,async))
);


break;
case "async":
var c__29987__auto___30340 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30327,c__29987__auto___30340,G__30170_30328,G__30170_30329__$1,n__4666__auto___30326,jobs,results,process,async){
return (function (){
var f__29988__auto__ = (function (){var switch__29892__auto__ = ((function (__30327,c__29987__auto___30340,G__30170_30328,G__30170_30329__$1,n__4666__auto___30326,jobs,results,process,async){
return (function (state_30207){
var state_val_30208 = (state_30207[(1)]);
if((state_val_30208 === (1))){
var state_30207__$1 = state_30207;
var statearr_30209_30341 = state_30207__$1;
(statearr_30209_30341[(2)] = null);

(statearr_30209_30341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30208 === (2))){
var state_30207__$1 = state_30207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30207__$1,(4),jobs);
} else {
if((state_val_30208 === (3))){
var inst_30205 = (state_30207[(2)]);
var state_30207__$1 = state_30207;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30207__$1,inst_30205);
} else {
if((state_val_30208 === (4))){
var inst_30197 = (state_30207[(2)]);
var inst_30198 = async.call(null,inst_30197);
var state_30207__$1 = state_30207;
if(cljs.core.truth_(inst_30198)){
var statearr_30210_30342 = state_30207__$1;
(statearr_30210_30342[(1)] = (5));

} else {
var statearr_30211_30343 = state_30207__$1;
(statearr_30211_30343[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30208 === (5))){
var state_30207__$1 = state_30207;
var statearr_30212_30344 = state_30207__$1;
(statearr_30212_30344[(2)] = null);

(statearr_30212_30344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30208 === (6))){
var state_30207__$1 = state_30207;
var statearr_30213_30345 = state_30207__$1;
(statearr_30213_30345[(2)] = null);

(statearr_30213_30345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30208 === (7))){
var inst_30203 = (state_30207[(2)]);
var state_30207__$1 = state_30207;
var statearr_30214_30346 = state_30207__$1;
(statearr_30214_30346[(2)] = inst_30203);

(statearr_30214_30346[(1)] = (3));


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
});})(__30327,c__29987__auto___30340,G__30170_30328,G__30170_30329__$1,n__4666__auto___30326,jobs,results,process,async))
;
return ((function (__30327,switch__29892__auto__,c__29987__auto___30340,G__30170_30328,G__30170_30329__$1,n__4666__auto___30326,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29893__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29893__auto____0 = (function (){
var statearr_30215 = [null,null,null,null,null,null,null];
(statearr_30215[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29893__auto__);

(statearr_30215[(1)] = (1));

return statearr_30215;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29893__auto____1 = (function (state_30207){
while(true){
var ret_value__29894__auto__ = (function (){try{while(true){
var result__29895__auto__ = switch__29892__auto__.call(null,state_30207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29895__auto__;
}
break;
}
}catch (e30216){if((e30216 instanceof Object)){
var ex__29896__auto__ = e30216;
var statearr_30217_30347 = state_30207;
(statearr_30217_30347[(5)] = ex__29896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30216;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30348 = state_30207;
state_30207 = G__30348;
continue;
} else {
return ret_value__29894__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29893__auto__ = function(state_30207){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29893__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29893__auto____1.call(this,state_30207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29893__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29893__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29893__auto__;
})()
;})(__30327,switch__29892__auto__,c__29987__auto___30340,G__30170_30328,G__30170_30329__$1,n__4666__auto___30326,jobs,results,process,async))
})();
var state__29989__auto__ = (function (){var statearr_30218 = f__29988__auto__.call(null);
(statearr_30218[(6)] = c__29987__auto___30340);

return statearr_30218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29989__auto__);
});})(__30327,c__29987__auto___30340,G__30170_30328,G__30170_30329__$1,n__4666__auto___30326,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30170_30329__$1)].join('')));

}

var G__30349 = (__30327 + (1));
__30327 = G__30349;
continue;
} else {
}
break;
}

var c__29987__auto___30350 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29988__auto__ = (function (){var switch__29892__auto__ = (function (state_30240){
var state_val_30241 = (state_30240[(1)]);
if((state_val_30241 === (7))){
var inst_30236 = (state_30240[(2)]);
var state_30240__$1 = state_30240;
var statearr_30242_30351 = state_30240__$1;
(statearr_30242_30351[(2)] = inst_30236);

(statearr_30242_30351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30241 === (1))){
var state_30240__$1 = state_30240;
var statearr_30243_30352 = state_30240__$1;
(statearr_30243_30352[(2)] = null);

(statearr_30243_30352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30241 === (4))){
var inst_30221 = (state_30240[(7)]);
var inst_30221__$1 = (state_30240[(2)]);
var inst_30222 = (inst_30221__$1 == null);
var state_30240__$1 = (function (){var statearr_30244 = state_30240;
(statearr_30244[(7)] = inst_30221__$1);

return statearr_30244;
})();
if(cljs.core.truth_(inst_30222)){
var statearr_30245_30353 = state_30240__$1;
(statearr_30245_30353[(1)] = (5));

} else {
var statearr_30246_30354 = state_30240__$1;
(statearr_30246_30354[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30241 === (6))){
var inst_30221 = (state_30240[(7)]);
var inst_30226 = (state_30240[(8)]);
var inst_30226__$1 = cljs.core.async.chan.call(null,(1));
var inst_30227 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30228 = [inst_30221,inst_30226__$1];
var inst_30229 = (new cljs.core.PersistentVector(null,2,(5),inst_30227,inst_30228,null));
var state_30240__$1 = (function (){var statearr_30247 = state_30240;
(statearr_30247[(8)] = inst_30226__$1);

return statearr_30247;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30240__$1,(8),jobs,inst_30229);
} else {
if((state_val_30241 === (3))){
var inst_30238 = (state_30240[(2)]);
var state_30240__$1 = state_30240;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30240__$1,inst_30238);
} else {
if((state_val_30241 === (2))){
var state_30240__$1 = state_30240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30240__$1,(4),from);
} else {
if((state_val_30241 === (9))){
var inst_30233 = (state_30240[(2)]);
var state_30240__$1 = (function (){var statearr_30248 = state_30240;
(statearr_30248[(9)] = inst_30233);

return statearr_30248;
})();
var statearr_30249_30355 = state_30240__$1;
(statearr_30249_30355[(2)] = null);

(statearr_30249_30355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30241 === (5))){
var inst_30224 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30240__$1 = state_30240;
var statearr_30250_30356 = state_30240__$1;
(statearr_30250_30356[(2)] = inst_30224);

(statearr_30250_30356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30241 === (8))){
var inst_30226 = (state_30240[(8)]);
var inst_30231 = (state_30240[(2)]);
var state_30240__$1 = (function (){var statearr_30251 = state_30240;
(statearr_30251[(10)] = inst_30231);

return statearr_30251;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30240__$1,(9),results,inst_30226);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29893__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29893__auto____0 = (function (){
var statearr_30252 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30252[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29893__auto__);

(statearr_30252[(1)] = (1));

return statearr_30252;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29893__auto____1 = (function (state_30240){
while(true){
var ret_value__29894__auto__ = (function (){try{while(true){
var result__29895__auto__ = switch__29892__auto__.call(null,state_30240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29895__auto__;
}
break;
}
}catch (e30253){if((e30253 instanceof Object)){
var ex__29896__auto__ = e30253;
var statearr_30254_30357 = state_30240;
(statearr_30254_30357[(5)] = ex__29896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30253;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30358 = state_30240;
state_30240 = G__30358;
continue;
} else {
return ret_value__29894__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29893__auto__ = function(state_30240){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29893__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29893__auto____1.call(this,state_30240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29893__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29893__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29893__auto__;
})()
})();
var state__29989__auto__ = (function (){var statearr_30255 = f__29988__auto__.call(null);
(statearr_30255[(6)] = c__29987__auto___30350);

return statearr_30255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29989__auto__);
}));


var c__29987__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29988__auto__ = (function (){var switch__29892__auto__ = (function (state_30293){
var state_val_30294 = (state_30293[(1)]);
if((state_val_30294 === (7))){
var inst_30289 = (state_30293[(2)]);
var state_30293__$1 = state_30293;
var statearr_30295_30359 = state_30293__$1;
(statearr_30295_30359[(2)] = inst_30289);

(statearr_30295_30359[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30294 === (20))){
var state_30293__$1 = state_30293;
var statearr_30296_30360 = state_30293__$1;
(statearr_30296_30360[(2)] = null);

(statearr_30296_30360[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30294 === (1))){
var state_30293__$1 = state_30293;
var statearr_30297_30361 = state_30293__$1;
(statearr_30297_30361[(2)] = null);

(statearr_30297_30361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30294 === (4))){
var inst_30258 = (state_30293[(7)]);
var inst_30258__$1 = (state_30293[(2)]);
var inst_30259 = (inst_30258__$1 == null);
var state_30293__$1 = (function (){var statearr_30298 = state_30293;
(statearr_30298[(7)] = inst_30258__$1);

return statearr_30298;
})();
if(cljs.core.truth_(inst_30259)){
var statearr_30299_30362 = state_30293__$1;
(statearr_30299_30362[(1)] = (5));

} else {
var statearr_30300_30363 = state_30293__$1;
(statearr_30300_30363[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30294 === (15))){
var inst_30271 = (state_30293[(8)]);
var state_30293__$1 = state_30293;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30293__$1,(18),to,inst_30271);
} else {
if((state_val_30294 === (21))){
var inst_30284 = (state_30293[(2)]);
var state_30293__$1 = state_30293;
var statearr_30301_30364 = state_30293__$1;
(statearr_30301_30364[(2)] = inst_30284);

(statearr_30301_30364[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30294 === (13))){
var inst_30286 = (state_30293[(2)]);
var state_30293__$1 = (function (){var statearr_30302 = state_30293;
(statearr_30302[(9)] = inst_30286);

return statearr_30302;
})();
var statearr_30303_30365 = state_30293__$1;
(statearr_30303_30365[(2)] = null);

(statearr_30303_30365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30294 === (6))){
var inst_30258 = (state_30293[(7)]);
var state_30293__$1 = state_30293;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30293__$1,(11),inst_30258);
} else {
if((state_val_30294 === (17))){
var inst_30279 = (state_30293[(2)]);
var state_30293__$1 = state_30293;
if(cljs.core.truth_(inst_30279)){
var statearr_30304_30366 = state_30293__$1;
(statearr_30304_30366[(1)] = (19));

} else {
var statearr_30305_30367 = state_30293__$1;
(statearr_30305_30367[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30294 === (3))){
var inst_30291 = (state_30293[(2)]);
var state_30293__$1 = state_30293;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30293__$1,inst_30291);
} else {
if((state_val_30294 === (12))){
var inst_30268 = (state_30293[(10)]);
var state_30293__$1 = state_30293;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30293__$1,(14),inst_30268);
} else {
if((state_val_30294 === (2))){
var state_30293__$1 = state_30293;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30293__$1,(4),results);
} else {
if((state_val_30294 === (19))){
var state_30293__$1 = state_30293;
var statearr_30306_30368 = state_30293__$1;
(statearr_30306_30368[(2)] = null);

(statearr_30306_30368[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30294 === (11))){
var inst_30268 = (state_30293[(2)]);
var state_30293__$1 = (function (){var statearr_30307 = state_30293;
(statearr_30307[(10)] = inst_30268);

return statearr_30307;
})();
var statearr_30308_30369 = state_30293__$1;
(statearr_30308_30369[(2)] = null);

(statearr_30308_30369[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30294 === (9))){
var state_30293__$1 = state_30293;
var statearr_30309_30370 = state_30293__$1;
(statearr_30309_30370[(2)] = null);

(statearr_30309_30370[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30294 === (5))){
var state_30293__$1 = state_30293;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30310_30371 = state_30293__$1;
(statearr_30310_30371[(1)] = (8));

} else {
var statearr_30311_30372 = state_30293__$1;
(statearr_30311_30372[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30294 === (14))){
var inst_30271 = (state_30293[(8)]);
var inst_30271__$1 = (state_30293[(2)]);
var inst_30272 = (inst_30271__$1 == null);
var inst_30273 = cljs.core.not.call(null,inst_30272);
var state_30293__$1 = (function (){var statearr_30312 = state_30293;
(statearr_30312[(8)] = inst_30271__$1);

return statearr_30312;
})();
if(inst_30273){
var statearr_30313_30373 = state_30293__$1;
(statearr_30313_30373[(1)] = (15));

} else {
var statearr_30314_30374 = state_30293__$1;
(statearr_30314_30374[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30294 === (16))){
var state_30293__$1 = state_30293;
var statearr_30315_30375 = state_30293__$1;
(statearr_30315_30375[(2)] = false);

(statearr_30315_30375[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30294 === (10))){
var inst_30265 = (state_30293[(2)]);
var state_30293__$1 = state_30293;
var statearr_30316_30376 = state_30293__$1;
(statearr_30316_30376[(2)] = inst_30265);

(statearr_30316_30376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30294 === (18))){
var inst_30276 = (state_30293[(2)]);
var state_30293__$1 = state_30293;
var statearr_30317_30377 = state_30293__$1;
(statearr_30317_30377[(2)] = inst_30276);

(statearr_30317_30377[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30294 === (8))){
var inst_30262 = cljs.core.async.close_BANG_.call(null,to);
var state_30293__$1 = state_30293;
var statearr_30318_30378 = state_30293__$1;
(statearr_30318_30378[(2)] = inst_30262);

(statearr_30318_30378[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29893__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29893__auto____0 = (function (){
var statearr_30319 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30319[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29893__auto__);

(statearr_30319[(1)] = (1));

return statearr_30319;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29893__auto____1 = (function (state_30293){
while(true){
var ret_value__29894__auto__ = (function (){try{while(true){
var result__29895__auto__ = switch__29892__auto__.call(null,state_30293);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29895__auto__;
}
break;
}
}catch (e30320){if((e30320 instanceof Object)){
var ex__29896__auto__ = e30320;
var statearr_30321_30379 = state_30293;
(statearr_30321_30379[(5)] = ex__29896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30320;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30380 = state_30293;
state_30293 = G__30380;
continue;
} else {
return ret_value__29894__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29893__auto__ = function(state_30293){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29893__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29893__auto____1.call(this,state_30293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29893__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29893__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29893__auto__;
})()
})();
var state__29989__auto__ = (function (){var statearr_30322 = f__29988__auto__.call(null);
(statearr_30322[(6)] = c__29987__auto__);

return statearr_30322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29989__auto__);
}));

return c__29987__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__30382 = arguments.length;
switch (G__30382) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__30385 = arguments.length;
switch (G__30385) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__30388 = arguments.length;
switch (G__30388) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__29987__auto___30437 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29988__auto__ = (function (){var switch__29892__auto__ = (function (state_30414){
var state_val_30415 = (state_30414[(1)]);
if((state_val_30415 === (7))){
var inst_30410 = (state_30414[(2)]);
var state_30414__$1 = state_30414;
var statearr_30416_30438 = state_30414__$1;
(statearr_30416_30438[(2)] = inst_30410);

(statearr_30416_30438[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30415 === (1))){
var state_30414__$1 = state_30414;
var statearr_30417_30439 = state_30414__$1;
(statearr_30417_30439[(2)] = null);

(statearr_30417_30439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30415 === (4))){
var inst_30391 = (state_30414[(7)]);
var inst_30391__$1 = (state_30414[(2)]);
var inst_30392 = (inst_30391__$1 == null);
var state_30414__$1 = (function (){var statearr_30418 = state_30414;
(statearr_30418[(7)] = inst_30391__$1);

return statearr_30418;
})();
if(cljs.core.truth_(inst_30392)){
var statearr_30419_30440 = state_30414__$1;
(statearr_30419_30440[(1)] = (5));

} else {
var statearr_30420_30441 = state_30414__$1;
(statearr_30420_30441[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30415 === (13))){
var state_30414__$1 = state_30414;
var statearr_30421_30442 = state_30414__$1;
(statearr_30421_30442[(2)] = null);

(statearr_30421_30442[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30415 === (6))){
var inst_30391 = (state_30414[(7)]);
var inst_30397 = p.call(null,inst_30391);
var state_30414__$1 = state_30414;
if(cljs.core.truth_(inst_30397)){
var statearr_30422_30443 = state_30414__$1;
(statearr_30422_30443[(1)] = (9));

} else {
var statearr_30423_30444 = state_30414__$1;
(statearr_30423_30444[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30415 === (3))){
var inst_30412 = (state_30414[(2)]);
var state_30414__$1 = state_30414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30414__$1,inst_30412);
} else {
if((state_val_30415 === (12))){
var state_30414__$1 = state_30414;
var statearr_30424_30445 = state_30414__$1;
(statearr_30424_30445[(2)] = null);

(statearr_30424_30445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30415 === (2))){
var state_30414__$1 = state_30414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30414__$1,(4),ch);
} else {
if((state_val_30415 === (11))){
var inst_30391 = (state_30414[(7)]);
var inst_30401 = (state_30414[(2)]);
var state_30414__$1 = state_30414;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30414__$1,(8),inst_30401,inst_30391);
} else {
if((state_val_30415 === (9))){
var state_30414__$1 = state_30414;
var statearr_30425_30446 = state_30414__$1;
(statearr_30425_30446[(2)] = tc);

(statearr_30425_30446[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30415 === (5))){
var inst_30394 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30395 = cljs.core.async.close_BANG_.call(null,fc);
var state_30414__$1 = (function (){var statearr_30426 = state_30414;
(statearr_30426[(8)] = inst_30394);

return statearr_30426;
})();
var statearr_30427_30447 = state_30414__$1;
(statearr_30427_30447[(2)] = inst_30395);

(statearr_30427_30447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30415 === (14))){
var inst_30408 = (state_30414[(2)]);
var state_30414__$1 = state_30414;
var statearr_30428_30448 = state_30414__$1;
(statearr_30428_30448[(2)] = inst_30408);

(statearr_30428_30448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30415 === (10))){
var state_30414__$1 = state_30414;
var statearr_30429_30449 = state_30414__$1;
(statearr_30429_30449[(2)] = fc);

(statearr_30429_30449[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30415 === (8))){
var inst_30403 = (state_30414[(2)]);
var state_30414__$1 = state_30414;
if(cljs.core.truth_(inst_30403)){
var statearr_30430_30450 = state_30414__$1;
(statearr_30430_30450[(1)] = (12));

} else {
var statearr_30431_30451 = state_30414__$1;
(statearr_30431_30451[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__29893__auto__ = null;
var cljs$core$async$state_machine__29893__auto____0 = (function (){
var statearr_30432 = [null,null,null,null,null,null,null,null,null];
(statearr_30432[(0)] = cljs$core$async$state_machine__29893__auto__);

(statearr_30432[(1)] = (1));

return statearr_30432;
});
var cljs$core$async$state_machine__29893__auto____1 = (function (state_30414){
while(true){
var ret_value__29894__auto__ = (function (){try{while(true){
var result__29895__auto__ = switch__29892__auto__.call(null,state_30414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29895__auto__;
}
break;
}
}catch (e30433){if((e30433 instanceof Object)){
var ex__29896__auto__ = e30433;
var statearr_30434_30452 = state_30414;
(statearr_30434_30452[(5)] = ex__29896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30433;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30453 = state_30414;
state_30414 = G__30453;
continue;
} else {
return ret_value__29894__auto__;
}
break;
}
});
cljs$core$async$state_machine__29893__auto__ = function(state_30414){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29893__auto____1.call(this,state_30414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29893__auto____0;
cljs$core$async$state_machine__29893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29893__auto____1;
return cljs$core$async$state_machine__29893__auto__;
})()
})();
var state__29989__auto__ = (function (){var statearr_30435 = f__29988__auto__.call(null);
(statearr_30435[(6)] = c__29987__auto___30437);

return statearr_30435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29989__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29987__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29988__auto__ = (function (){var switch__29892__auto__ = (function (state_30474){
var state_val_30475 = (state_30474[(1)]);
if((state_val_30475 === (7))){
var inst_30470 = (state_30474[(2)]);
var state_30474__$1 = state_30474;
var statearr_30476_30494 = state_30474__$1;
(statearr_30476_30494[(2)] = inst_30470);

(statearr_30476_30494[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (1))){
var inst_30454 = init;
var state_30474__$1 = (function (){var statearr_30477 = state_30474;
(statearr_30477[(7)] = inst_30454);

return statearr_30477;
})();
var statearr_30478_30495 = state_30474__$1;
(statearr_30478_30495[(2)] = null);

(statearr_30478_30495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (4))){
var inst_30457 = (state_30474[(8)]);
var inst_30457__$1 = (state_30474[(2)]);
var inst_30458 = (inst_30457__$1 == null);
var state_30474__$1 = (function (){var statearr_30479 = state_30474;
(statearr_30479[(8)] = inst_30457__$1);

return statearr_30479;
})();
if(cljs.core.truth_(inst_30458)){
var statearr_30480_30496 = state_30474__$1;
(statearr_30480_30496[(1)] = (5));

} else {
var statearr_30481_30497 = state_30474__$1;
(statearr_30481_30497[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (6))){
var inst_30461 = (state_30474[(9)]);
var inst_30454 = (state_30474[(7)]);
var inst_30457 = (state_30474[(8)]);
var inst_30461__$1 = f.call(null,inst_30454,inst_30457);
var inst_30462 = cljs.core.reduced_QMARK_.call(null,inst_30461__$1);
var state_30474__$1 = (function (){var statearr_30482 = state_30474;
(statearr_30482[(9)] = inst_30461__$1);

return statearr_30482;
})();
if(inst_30462){
var statearr_30483_30498 = state_30474__$1;
(statearr_30483_30498[(1)] = (8));

} else {
var statearr_30484_30499 = state_30474__$1;
(statearr_30484_30499[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (3))){
var inst_30472 = (state_30474[(2)]);
var state_30474__$1 = state_30474;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30474__$1,inst_30472);
} else {
if((state_val_30475 === (2))){
var state_30474__$1 = state_30474;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30474__$1,(4),ch);
} else {
if((state_val_30475 === (9))){
var inst_30461 = (state_30474[(9)]);
var inst_30454 = inst_30461;
var state_30474__$1 = (function (){var statearr_30485 = state_30474;
(statearr_30485[(7)] = inst_30454);

return statearr_30485;
})();
var statearr_30486_30500 = state_30474__$1;
(statearr_30486_30500[(2)] = null);

(statearr_30486_30500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (5))){
var inst_30454 = (state_30474[(7)]);
var state_30474__$1 = state_30474;
var statearr_30487_30501 = state_30474__$1;
(statearr_30487_30501[(2)] = inst_30454);

(statearr_30487_30501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (10))){
var inst_30468 = (state_30474[(2)]);
var state_30474__$1 = state_30474;
var statearr_30488_30502 = state_30474__$1;
(statearr_30488_30502[(2)] = inst_30468);

(statearr_30488_30502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (8))){
var inst_30461 = (state_30474[(9)]);
var inst_30464 = cljs.core.deref.call(null,inst_30461);
var state_30474__$1 = state_30474;
var statearr_30489_30503 = state_30474__$1;
(statearr_30489_30503[(2)] = inst_30464);

(statearr_30489_30503[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__29893__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29893__auto____0 = (function (){
var statearr_30490 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30490[(0)] = cljs$core$async$reduce_$_state_machine__29893__auto__);

(statearr_30490[(1)] = (1));

return statearr_30490;
});
var cljs$core$async$reduce_$_state_machine__29893__auto____1 = (function (state_30474){
while(true){
var ret_value__29894__auto__ = (function (){try{while(true){
var result__29895__auto__ = switch__29892__auto__.call(null,state_30474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29895__auto__;
}
break;
}
}catch (e30491){if((e30491 instanceof Object)){
var ex__29896__auto__ = e30491;
var statearr_30492_30504 = state_30474;
(statearr_30492_30504[(5)] = ex__29896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30505 = state_30474;
state_30474 = G__30505;
continue;
} else {
return ret_value__29894__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29893__auto__ = function(state_30474){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29893__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29893__auto____1.call(this,state_30474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29893__auto____0;
cljs$core$async$reduce_$_state_machine__29893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29893__auto____1;
return cljs$core$async$reduce_$_state_machine__29893__auto__;
})()
})();
var state__29989__auto__ = (function (){var statearr_30493 = f__29988__auto__.call(null);
(statearr_30493[(6)] = c__29987__auto__);

return statearr_30493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29989__auto__);
}));

return c__29987__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__29987__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29988__auto__ = (function (){var switch__29892__auto__ = (function (state_30511){
var state_val_30512 = (state_30511[(1)]);
if((state_val_30512 === (1))){
var inst_30506 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_30511__$1 = state_30511;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30511__$1,(2),inst_30506);
} else {
if((state_val_30512 === (2))){
var inst_30508 = (state_30511[(2)]);
var inst_30509 = f__$1.call(null,inst_30508);
var state_30511__$1 = state_30511;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30511__$1,inst_30509);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29893__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29893__auto____0 = (function (){
var statearr_30513 = [null,null,null,null,null,null,null];
(statearr_30513[(0)] = cljs$core$async$transduce_$_state_machine__29893__auto__);

(statearr_30513[(1)] = (1));

return statearr_30513;
});
var cljs$core$async$transduce_$_state_machine__29893__auto____1 = (function (state_30511){
while(true){
var ret_value__29894__auto__ = (function (){try{while(true){
var result__29895__auto__ = switch__29892__auto__.call(null,state_30511);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29895__auto__;
}
break;
}
}catch (e30514){if((e30514 instanceof Object)){
var ex__29896__auto__ = e30514;
var statearr_30515_30517 = state_30511;
(statearr_30515_30517[(5)] = ex__29896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30511);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30514;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30518 = state_30511;
state_30511 = G__30518;
continue;
} else {
return ret_value__29894__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29893__auto__ = function(state_30511){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29893__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29893__auto____1.call(this,state_30511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29893__auto____0;
cljs$core$async$transduce_$_state_machine__29893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29893__auto____1;
return cljs$core$async$transduce_$_state_machine__29893__auto__;
})()
})();
var state__29989__auto__ = (function (){var statearr_30516 = f__29988__auto__.call(null);
(statearr_30516[(6)] = c__29987__auto__);

return statearr_30516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29989__auto__);
}));

return c__29987__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__30520 = arguments.length;
switch (G__30520) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29987__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29988__auto__ = (function (){var switch__29892__auto__ = (function (state_30545){
var state_val_30546 = (state_30545[(1)]);
if((state_val_30546 === (7))){
var inst_30527 = (state_30545[(2)]);
var state_30545__$1 = state_30545;
var statearr_30547_30568 = state_30545__$1;
(statearr_30547_30568[(2)] = inst_30527);

(statearr_30547_30568[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30546 === (1))){
var inst_30521 = cljs.core.seq.call(null,coll);
var inst_30522 = inst_30521;
var state_30545__$1 = (function (){var statearr_30548 = state_30545;
(statearr_30548[(7)] = inst_30522);

return statearr_30548;
})();
var statearr_30549_30569 = state_30545__$1;
(statearr_30549_30569[(2)] = null);

(statearr_30549_30569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30546 === (4))){
var inst_30522 = (state_30545[(7)]);
var inst_30525 = cljs.core.first.call(null,inst_30522);
var state_30545__$1 = state_30545;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30545__$1,(7),ch,inst_30525);
} else {
if((state_val_30546 === (13))){
var inst_30539 = (state_30545[(2)]);
var state_30545__$1 = state_30545;
var statearr_30550_30570 = state_30545__$1;
(statearr_30550_30570[(2)] = inst_30539);

(statearr_30550_30570[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30546 === (6))){
var inst_30530 = (state_30545[(2)]);
var state_30545__$1 = state_30545;
if(cljs.core.truth_(inst_30530)){
var statearr_30551_30571 = state_30545__$1;
(statearr_30551_30571[(1)] = (8));

} else {
var statearr_30552_30572 = state_30545__$1;
(statearr_30552_30572[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30546 === (3))){
var inst_30543 = (state_30545[(2)]);
var state_30545__$1 = state_30545;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30545__$1,inst_30543);
} else {
if((state_val_30546 === (12))){
var state_30545__$1 = state_30545;
var statearr_30553_30573 = state_30545__$1;
(statearr_30553_30573[(2)] = null);

(statearr_30553_30573[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30546 === (2))){
var inst_30522 = (state_30545[(7)]);
var state_30545__$1 = state_30545;
if(cljs.core.truth_(inst_30522)){
var statearr_30554_30574 = state_30545__$1;
(statearr_30554_30574[(1)] = (4));

} else {
var statearr_30555_30575 = state_30545__$1;
(statearr_30555_30575[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30546 === (11))){
var inst_30536 = cljs.core.async.close_BANG_.call(null,ch);
var state_30545__$1 = state_30545;
var statearr_30556_30576 = state_30545__$1;
(statearr_30556_30576[(2)] = inst_30536);

(statearr_30556_30576[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30546 === (9))){
var state_30545__$1 = state_30545;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30557_30577 = state_30545__$1;
(statearr_30557_30577[(1)] = (11));

} else {
var statearr_30558_30578 = state_30545__$1;
(statearr_30558_30578[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30546 === (5))){
var inst_30522 = (state_30545[(7)]);
var state_30545__$1 = state_30545;
var statearr_30559_30579 = state_30545__$1;
(statearr_30559_30579[(2)] = inst_30522);

(statearr_30559_30579[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30546 === (10))){
var inst_30541 = (state_30545[(2)]);
var state_30545__$1 = state_30545;
var statearr_30560_30580 = state_30545__$1;
(statearr_30560_30580[(2)] = inst_30541);

(statearr_30560_30580[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30546 === (8))){
var inst_30522 = (state_30545[(7)]);
var inst_30532 = cljs.core.next.call(null,inst_30522);
var inst_30522__$1 = inst_30532;
var state_30545__$1 = (function (){var statearr_30561 = state_30545;
(statearr_30561[(7)] = inst_30522__$1);

return statearr_30561;
})();
var statearr_30562_30581 = state_30545__$1;
(statearr_30562_30581[(2)] = null);

(statearr_30562_30581[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__29893__auto__ = null;
var cljs$core$async$state_machine__29893__auto____0 = (function (){
var statearr_30563 = [null,null,null,null,null,null,null,null];
(statearr_30563[(0)] = cljs$core$async$state_machine__29893__auto__);

(statearr_30563[(1)] = (1));

return statearr_30563;
});
var cljs$core$async$state_machine__29893__auto____1 = (function (state_30545){
while(true){
var ret_value__29894__auto__ = (function (){try{while(true){
var result__29895__auto__ = switch__29892__auto__.call(null,state_30545);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29895__auto__;
}
break;
}
}catch (e30564){if((e30564 instanceof Object)){
var ex__29896__auto__ = e30564;
var statearr_30565_30582 = state_30545;
(statearr_30565_30582[(5)] = ex__29896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30545);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30564;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30583 = state_30545;
state_30545 = G__30583;
continue;
} else {
return ret_value__29894__auto__;
}
break;
}
});
cljs$core$async$state_machine__29893__auto__ = function(state_30545){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29893__auto____1.call(this,state_30545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29893__auto____0;
cljs$core$async$state_machine__29893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29893__auto____1;
return cljs$core$async$state_machine__29893__auto__;
})()
})();
var state__29989__auto__ = (function (){var statearr_30566 = f__29988__auto__.call(null);
(statearr_30566[(6)] = c__29987__auto__);

return statearr_30566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29989__auto__);
}));

return c__29987__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,_);
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,ch);
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m);
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30584 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30584 = (function (ch,cs,meta30585){
this.ch = ch;
this.cs = cs;
this.meta30585 = meta30585;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30584.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30586,meta30585__$1){
var self__ = this;
var _30586__$1 = this;
return (new cljs.core.async.t_cljs$core$async30584(self__.ch,self__.cs,meta30585__$1));
}));

(cljs.core.async.t_cljs$core$async30584.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30586){
var self__ = this;
var _30586__$1 = this;
return self__.meta30585;
}));

(cljs.core.async.t_cljs$core$async30584.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30584.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30584.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30584.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async30584.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async30584.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async30584.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30585","meta30585",-1754864241,null)], null);
}));

(cljs.core.async.t_cljs$core$async30584.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30584.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30584");

(cljs.core.async.t_cljs$core$async30584.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async30584");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30584.
 */
cljs.core.async.__GT_t_cljs$core$async30584 = (function cljs$core$async$mult_$___GT_t_cljs$core$async30584(ch__$1,cs__$1,meta30585){
return (new cljs.core.async.t_cljs$core$async30584(ch__$1,cs__$1,meta30585));
});

}

return (new cljs.core.async.t_cljs$core$async30584(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__29987__auto___30806 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29988__auto__ = (function (){var switch__29892__auto__ = (function (state_30721){
var state_val_30722 = (state_30721[(1)]);
if((state_val_30722 === (7))){
var inst_30717 = (state_30721[(2)]);
var state_30721__$1 = state_30721;
var statearr_30723_30807 = state_30721__$1;
(statearr_30723_30807[(2)] = inst_30717);

(statearr_30723_30807[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30722 === (20))){
var inst_30620 = (state_30721[(7)]);
var inst_30632 = cljs.core.first.call(null,inst_30620);
var inst_30633 = cljs.core.nth.call(null,inst_30632,(0),null);
var inst_30634 = cljs.core.nth.call(null,inst_30632,(1),null);
var state_30721__$1 = (function (){var statearr_30724 = state_30721;
(statearr_30724[(8)] = inst_30633);

return statearr_30724;
})();
if(cljs.core.truth_(inst_30634)){
var statearr_30725_30808 = state_30721__$1;
(statearr_30725_30808[(1)] = (22));

} else {
var statearr_30726_30809 = state_30721__$1;
(statearr_30726_30809[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30722 === (27))){
var inst_30662 = (state_30721[(9)]);
var inst_30664 = (state_30721[(10)]);
var inst_30669 = (state_30721[(11)]);
var inst_30589 = (state_30721[(12)]);
var inst_30669__$1 = cljs.core._nth.call(null,inst_30662,inst_30664);
var inst_30670 = cljs.core.async.put_BANG_.call(null,inst_30669__$1,inst_30589,done);
var state_30721__$1 = (function (){var statearr_30727 = state_30721;
(statearr_30727[(11)] = inst_30669__$1);

return statearr_30727;
})();
if(cljs.core.truth_(inst_30670)){
var statearr_30728_30810 = state_30721__$1;
(statearr_30728_30810[(1)] = (30));

} else {
var statearr_30729_30811 = state_30721__$1;
(statearr_30729_30811[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30722 === (1))){
var state_30721__$1 = state_30721;
var statearr_30730_30812 = state_30721__$1;
(statearr_30730_30812[(2)] = null);

(statearr_30730_30812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30722 === (24))){
var inst_30620 = (state_30721[(7)]);
var inst_30639 = (state_30721[(2)]);
var inst_30640 = cljs.core.next.call(null,inst_30620);
var inst_30598 = inst_30640;
var inst_30599 = null;
var inst_30600 = (0);
var inst_30601 = (0);
var state_30721__$1 = (function (){var statearr_30731 = state_30721;
(statearr_30731[(13)] = inst_30598);

(statearr_30731[(14)] = inst_30639);

(statearr_30731[(15)] = inst_30601);

(statearr_30731[(16)] = inst_30599);

(statearr_30731[(17)] = inst_30600);

return statearr_30731;
})();
var statearr_30732_30813 = state_30721__$1;
(statearr_30732_30813[(2)] = null);

(statearr_30732_30813[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30722 === (39))){
var state_30721__$1 = state_30721;
var statearr_30736_30814 = state_30721__$1;
(statearr_30736_30814[(2)] = null);

(statearr_30736_30814[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30722 === (4))){
var inst_30589 = (state_30721[(12)]);
var inst_30589__$1 = (state_30721[(2)]);
var inst_30590 = (inst_30589__$1 == null);
var state_30721__$1 = (function (){var statearr_30737 = state_30721;
(statearr_30737[(12)] = inst_30589__$1);

return statearr_30737;
})();
if(cljs.core.truth_(inst_30590)){
var statearr_30738_30815 = state_30721__$1;
(statearr_30738_30815[(1)] = (5));

} else {
var statearr_30739_30816 = state_30721__$1;
(statearr_30739_30816[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30722 === (15))){
var inst_30598 = (state_30721[(13)]);
var inst_30601 = (state_30721[(15)]);
var inst_30599 = (state_30721[(16)]);
var inst_30600 = (state_30721[(17)]);
var inst_30616 = (state_30721[(2)]);
var inst_30617 = (inst_30601 + (1));
var tmp30733 = inst_30598;
var tmp30734 = inst_30599;
var tmp30735 = inst_30600;
var inst_30598__$1 = tmp30733;
var inst_30599__$1 = tmp30734;
var inst_30600__$1 = tmp30735;
var inst_30601__$1 = inst_30617;
var state_30721__$1 = (function (){var statearr_30740 = state_30721;
(statearr_30740[(13)] = inst_30598__$1);

(statearr_30740[(15)] = inst_30601__$1);

(statearr_30740[(16)] = inst_30599__$1);

(statearr_30740[(17)] = inst_30600__$1);

(statearr_30740[(18)] = inst_30616);

return statearr_30740;
})();
var statearr_30741_30817 = state_30721__$1;
(statearr_30741_30817[(2)] = null);

(statearr_30741_30817[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30722 === (21))){
var inst_30643 = (state_30721[(2)]);
var state_30721__$1 = state_30721;
var statearr_30745_30818 = state_30721__$1;
(statearr_30745_30818[(2)] = inst_30643);

(statearr_30745_30818[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30722 === (31))){
var inst_30669 = (state_30721[(11)]);
var inst_30673 = done.call(null,null);
var inst_30674 = cljs.core.async.untap_STAR_.call(null,m,inst_30669);
var state_30721__$1 = (function (){var statearr_30746 = state_30721;
(statearr_30746[(19)] = inst_30673);

return statearr_30746;
})();
var statearr_30747_30819 = state_30721__$1;
(statearr_30747_30819[(2)] = inst_30674);

(statearr_30747_30819[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30722 === (32))){
var inst_30663 = (state_30721[(20)]);
var inst_30661 = (state_30721[(21)]);
var inst_30662 = (state_30721[(9)]);
var inst_30664 = (state_30721[(10)]);
var inst_30676 = (state_30721[(2)]);
var inst_30677 = (inst_30664 + (1));
var tmp30742 = inst_30663;
var tmp30743 = inst_30661;
var tmp30744 = inst_30662;
var inst_30661__$1 = tmp30743;
var inst_30662__$1 = tmp30744;
var inst_30663__$1 = tmp30742;
var inst_30664__$1 = inst_30677;
var state_30721__$1 = (function (){var statearr_30748 = state_30721;
(statearr_30748[(20)] = inst_30663__$1);

(statearr_30748[(21)] = inst_30661__$1);

(statearr_30748[(9)] = inst_30662__$1);

(statearr_30748[(10)] = inst_30664__$1);

(statearr_30748[(22)] = inst_30676);

return statearr_30748;
})();
var statearr_30749_30820 = state_30721__$1;
(statearr_30749_30820[(2)] = null);

(statearr_30749_30820[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30722 === (40))){
var inst_30689 = (state_30721[(23)]);
var inst_30693 = done.call(null,null);
var inst_30694 = cljs.core.async.untap_STAR_.call(null,m,inst_30689);
var state_30721__$1 = (function (){var statearr_30750 = state_30721;
(statearr_30750[(24)] = inst_30693);

return statearr_30750;
})();
var statearr_30751_30821 = state_30721__$1;
(statearr_30751_30821[(2)] = inst_30694);

(statearr_30751_30821[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30722 === (33))){
var inst_30680 = (state_30721[(25)]);
var inst_30682 = cljs.core.chunked_seq_QMARK_.call(null,inst_30680);
var state_30721__$1 = state_30721;
if(inst_30682){
var statearr_30752_30822 = state_30721__$1;
(statearr_30752_30822[(1)] = (36));

} else {
var statearr_30753_30823 = state_30721__$1;
(statearr_30753_30823[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30722 === (13))){
var inst_30610 = (state_30721[(26)]);
var inst_30613 = cljs.core.async.close_BANG_.call(null,inst_30610);
var state_30721__$1 = state_30721;
var statearr_30754_30824 = state_30721__$1;
(statearr_30754_30824[(2)] = inst_30613);

(statearr_30754_30824[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30722 === (22))){
var inst_30633 = (state_30721[(8)]);
var inst_30636 = cljs.core.async.close_BANG_.call(null,inst_30633);
var state_30721__$1 = state_30721;
var statearr_30755_30825 = state_30721__$1;
(statearr_30755_30825[(2)] = inst_30636);

(statearr_30755_30825[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30722 === (36))){
var inst_30680 = (state_30721[(25)]);
var inst_30684 = cljs.core.chunk_first.call(null,inst_30680);
var inst_30685 = cljs.core.chunk_rest.call(null,inst_30680);
var inst_30686 = cljs.core.count.call(null,inst_30684);
var inst_30661 = inst_30685;
var inst_30662 = inst_30684;
var inst_30663 = inst_30686;
var inst_30664 = (0);
var state_30721__$1 = (function (){var statearr_30756 = state_30721;
(statearr_30756[(20)] = inst_30663);

(statearr_30756[(21)] = inst_30661);

(statearr_30756[(9)] = inst_30662);

(statearr_30756[(10)] = inst_30664);

return statearr_30756;
})();
var statearr_30757_30826 = state_30721__$1;
(statearr_30757_30826[(2)] = null);

(statearr_30757_30826[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30722 === (41))){
var inst_30680 = (state_30721[(25)]);
var inst_30696 = (state_30721[(2)]);
var inst_30697 = cljs.core.next.call(null,inst_30680);
var inst_30661 = inst_30697;
var inst_30662 = null;
var inst_30663 = (0);
var inst_30664 = (0);
var state_30721__$1 = (function (){var statearr_30758 = state_30721;
(statearr_30758[(20)] = inst_30663);

(statearr_30758[(21)] = inst_30661);

(statearr_30758[(9)] = inst_30662);

(statearr_30758[(10)] = inst_30664);

(statearr_30758[(27)] = inst_30696);

return statearr_30758;
})();
var statearr_30759_30827 = state_30721__$1;
(statearr_30759_30827[(2)] = null);

(statearr_30759_30827[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30722 === (43))){
var state_30721__$1 = state_30721;
var statearr_30760_30828 = state_30721__$1;
(statearr_30760_30828[(2)] = null);

(statearr_30760_30828[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30722 === (29))){
var inst_30705 = (state_30721[(2)]);
var state_30721__$1 = state_30721;
var statearr_30761_30829 = state_30721__$1;
(statearr_30761_30829[(2)] = inst_30705);

(statearr_30761_30829[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30722 === (44))){
var inst_30714 = (state_30721[(2)]);
var state_30721__$1 = (function (){var statearr_30762 = state_30721;
(statearr_30762[(28)] = inst_30714);

return statearr_30762;
})();
var statearr_30763_30830 = state_30721__$1;
(statearr_30763_30830[(2)] = null);

(statearr_30763_30830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30722 === (6))){
var inst_30653 = (state_30721[(29)]);
var inst_30652 = cljs.core.deref.call(null,cs);
var inst_30653__$1 = cljs.core.keys.call(null,inst_30652);
var inst_30654 = cljs.core.count.call(null,inst_30653__$1);
var inst_30655 = cljs.core.reset_BANG_.call(null,dctr,inst_30654);
var inst_30660 = cljs.core.seq.call(null,inst_30653__$1);
var inst_30661 = inst_30660;
var inst_30662 = null;
var inst_30663 = (0);
var inst_30664 = (0);
var state_30721__$1 = (function (){var statearr_30764 = state_30721;
(statearr_30764[(29)] = inst_30653__$1);

(statearr_30764[(20)] = inst_30663);

(statearr_30764[(21)] = inst_30661);

(statearr_30764[(9)] = inst_30662);

(statearr_30764[(10)] = inst_30664);

(statearr_30764[(30)] = inst_30655);

return statearr_30764;
})();
var statearr_30765_30831 = state_30721__$1;
(statearr_30765_30831[(2)] = null);

(statearr_30765_30831[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30722 === (28))){
var inst_30661 = (state_30721[(21)]);
var inst_30680 = (state_30721[(25)]);
var inst_30680__$1 = cljs.core.seq.call(null,inst_30661);
var state_30721__$1 = (function (){var statearr_30766 = state_30721;
(statearr_30766[(25)] = inst_30680__$1);

return statearr_30766;
})();
if(inst_30680__$1){
var statearr_30767_30832 = state_30721__$1;
(statearr_30767_30832[(1)] = (33));

} else {
var statearr_30768_30833 = state_30721__$1;
(statearr_30768_30833[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30722 === (25))){
var inst_30663 = (state_30721[(20)]);
var inst_30664 = (state_30721[(10)]);
var inst_30666 = (inst_30664 < inst_30663);
var inst_30667 = inst_30666;
var state_30721__$1 = state_30721;
if(cljs.core.truth_(inst_30667)){
var statearr_30769_30834 = state_30721__$1;
(statearr_30769_30834[(1)] = (27));

} else {
var statearr_30770_30835 = state_30721__$1;
(statearr_30770_30835[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30722 === (34))){
var state_30721__$1 = state_30721;
var statearr_30771_30836 = state_30721__$1;
(statearr_30771_30836[(2)] = null);

(statearr_30771_30836[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30722 === (17))){
var state_30721__$1 = state_30721;
var statearr_30772_30837 = state_30721__$1;
(statearr_30772_30837[(2)] = null);

(statearr_30772_30837[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30722 === (3))){
var inst_30719 = (state_30721[(2)]);
var state_30721__$1 = state_30721;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30721__$1,inst_30719);
} else {
if((state_val_30722 === (12))){
var inst_30648 = (state_30721[(2)]);
var state_30721__$1 = state_30721;
var statearr_30773_30838 = state_30721__$1;
(statearr_30773_30838[(2)] = inst_30648);

(statearr_30773_30838[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30722 === (2))){
var state_30721__$1 = state_30721;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30721__$1,(4),ch);
} else {
if((state_val_30722 === (23))){
var state_30721__$1 = state_30721;
var statearr_30774_30839 = state_30721__$1;
(statearr_30774_30839[(2)] = null);

(statearr_30774_30839[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30722 === (35))){
var inst_30703 = (state_30721[(2)]);
var state_30721__$1 = state_30721;
var statearr_30775_30840 = state_30721__$1;
(statearr_30775_30840[(2)] = inst_30703);

(statearr_30775_30840[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30722 === (19))){
var inst_30620 = (state_30721[(7)]);
var inst_30624 = cljs.core.chunk_first.call(null,inst_30620);
var inst_30625 = cljs.core.chunk_rest.call(null,inst_30620);
var inst_30626 = cljs.core.count.call(null,inst_30624);
var inst_30598 = inst_30625;
var inst_30599 = inst_30624;
var inst_30600 = inst_30626;
var inst_30601 = (0);
var state_30721__$1 = (function (){var statearr_30776 = state_30721;
(statearr_30776[(13)] = inst_30598);

(statearr_30776[(15)] = inst_30601);

(statearr_30776[(16)] = inst_30599);

(statearr_30776[(17)] = inst_30600);

return statearr_30776;
})();
var statearr_30777_30841 = state_30721__$1;
(statearr_30777_30841[(2)] = null);

(statearr_30777_30841[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30722 === (11))){
var inst_30598 = (state_30721[(13)]);
var inst_30620 = (state_30721[(7)]);
var inst_30620__$1 = cljs.core.seq.call(null,inst_30598);
var state_30721__$1 = (function (){var statearr_30778 = state_30721;
(statearr_30778[(7)] = inst_30620__$1);

return statearr_30778;
})();
if(inst_30620__$1){
var statearr_30779_30842 = state_30721__$1;
(statearr_30779_30842[(1)] = (16));

} else {
var statearr_30780_30843 = state_30721__$1;
(statearr_30780_30843[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30722 === (9))){
var inst_30650 = (state_30721[(2)]);
var state_30721__$1 = state_30721;
var statearr_30781_30844 = state_30721__$1;
(statearr_30781_30844[(2)] = inst_30650);

(statearr_30781_30844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30722 === (5))){
var inst_30596 = cljs.core.deref.call(null,cs);
var inst_30597 = cljs.core.seq.call(null,inst_30596);
var inst_30598 = inst_30597;
var inst_30599 = null;
var inst_30600 = (0);
var inst_30601 = (0);
var state_30721__$1 = (function (){var statearr_30782 = state_30721;
(statearr_30782[(13)] = inst_30598);

(statearr_30782[(15)] = inst_30601);

(statearr_30782[(16)] = inst_30599);

(statearr_30782[(17)] = inst_30600);

return statearr_30782;
})();
var statearr_30783_30845 = state_30721__$1;
(statearr_30783_30845[(2)] = null);

(statearr_30783_30845[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30722 === (14))){
var state_30721__$1 = state_30721;
var statearr_30784_30846 = state_30721__$1;
(statearr_30784_30846[(2)] = null);

(statearr_30784_30846[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30722 === (45))){
var inst_30711 = (state_30721[(2)]);
var state_30721__$1 = state_30721;
var statearr_30785_30847 = state_30721__$1;
(statearr_30785_30847[(2)] = inst_30711);

(statearr_30785_30847[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30722 === (26))){
var inst_30653 = (state_30721[(29)]);
var inst_30707 = (state_30721[(2)]);
var inst_30708 = cljs.core.seq.call(null,inst_30653);
var state_30721__$1 = (function (){var statearr_30786 = state_30721;
(statearr_30786[(31)] = inst_30707);

return statearr_30786;
})();
if(inst_30708){
var statearr_30787_30848 = state_30721__$1;
(statearr_30787_30848[(1)] = (42));

} else {
var statearr_30788_30849 = state_30721__$1;
(statearr_30788_30849[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30722 === (16))){
var inst_30620 = (state_30721[(7)]);
var inst_30622 = cljs.core.chunked_seq_QMARK_.call(null,inst_30620);
var state_30721__$1 = state_30721;
if(inst_30622){
var statearr_30789_30850 = state_30721__$1;
(statearr_30789_30850[(1)] = (19));

} else {
var statearr_30790_30851 = state_30721__$1;
(statearr_30790_30851[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30722 === (38))){
var inst_30700 = (state_30721[(2)]);
var state_30721__$1 = state_30721;
var statearr_30791_30852 = state_30721__$1;
(statearr_30791_30852[(2)] = inst_30700);

(statearr_30791_30852[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30722 === (30))){
var state_30721__$1 = state_30721;
var statearr_30792_30853 = state_30721__$1;
(statearr_30792_30853[(2)] = null);

(statearr_30792_30853[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30722 === (10))){
var inst_30601 = (state_30721[(15)]);
var inst_30599 = (state_30721[(16)]);
var inst_30609 = cljs.core._nth.call(null,inst_30599,inst_30601);
var inst_30610 = cljs.core.nth.call(null,inst_30609,(0),null);
var inst_30611 = cljs.core.nth.call(null,inst_30609,(1),null);
var state_30721__$1 = (function (){var statearr_30793 = state_30721;
(statearr_30793[(26)] = inst_30610);

return statearr_30793;
})();
if(cljs.core.truth_(inst_30611)){
var statearr_30794_30854 = state_30721__$1;
(statearr_30794_30854[(1)] = (13));

} else {
var statearr_30795_30855 = state_30721__$1;
(statearr_30795_30855[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30722 === (18))){
var inst_30646 = (state_30721[(2)]);
var state_30721__$1 = state_30721;
var statearr_30796_30856 = state_30721__$1;
(statearr_30796_30856[(2)] = inst_30646);

(statearr_30796_30856[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30722 === (42))){
var state_30721__$1 = state_30721;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30721__$1,(45),dchan);
} else {
if((state_val_30722 === (37))){
var inst_30689 = (state_30721[(23)]);
var inst_30680 = (state_30721[(25)]);
var inst_30589 = (state_30721[(12)]);
var inst_30689__$1 = cljs.core.first.call(null,inst_30680);
var inst_30690 = cljs.core.async.put_BANG_.call(null,inst_30689__$1,inst_30589,done);
var state_30721__$1 = (function (){var statearr_30797 = state_30721;
(statearr_30797[(23)] = inst_30689__$1);

return statearr_30797;
})();
if(cljs.core.truth_(inst_30690)){
var statearr_30798_30857 = state_30721__$1;
(statearr_30798_30857[(1)] = (39));

} else {
var statearr_30799_30858 = state_30721__$1;
(statearr_30799_30858[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30722 === (8))){
var inst_30601 = (state_30721[(15)]);
var inst_30600 = (state_30721[(17)]);
var inst_30603 = (inst_30601 < inst_30600);
var inst_30604 = inst_30603;
var state_30721__$1 = state_30721;
if(cljs.core.truth_(inst_30604)){
var statearr_30800_30859 = state_30721__$1;
(statearr_30800_30859[(1)] = (10));

} else {
var statearr_30801_30860 = state_30721__$1;
(statearr_30801_30860[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__29893__auto__ = null;
var cljs$core$async$mult_$_state_machine__29893__auto____0 = (function (){
var statearr_30802 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30802[(0)] = cljs$core$async$mult_$_state_machine__29893__auto__);

(statearr_30802[(1)] = (1));

return statearr_30802;
});
var cljs$core$async$mult_$_state_machine__29893__auto____1 = (function (state_30721){
while(true){
var ret_value__29894__auto__ = (function (){try{while(true){
var result__29895__auto__ = switch__29892__auto__.call(null,state_30721);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29895__auto__;
}
break;
}
}catch (e30803){if((e30803 instanceof Object)){
var ex__29896__auto__ = e30803;
var statearr_30804_30861 = state_30721;
(statearr_30804_30861[(5)] = ex__29896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30721);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30803;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30862 = state_30721;
state_30721 = G__30862;
continue;
} else {
return ret_value__29894__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29893__auto__ = function(state_30721){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29893__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29893__auto____1.call(this,state_30721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29893__auto____0;
cljs$core$async$mult_$_state_machine__29893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29893__auto____1;
return cljs$core$async$mult_$_state_machine__29893__auto__;
})()
})();
var state__29989__auto__ = (function (){var statearr_30805 = f__29988__auto__.call(null);
(statearr_30805[(6)] = c__29987__auto___30806);

return statearr_30805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29989__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__30864 = arguments.length;
switch (G__30864) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,ch);
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,ch);
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m);
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,state_map);
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,mode);
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___30876 = arguments.length;
var i__4790__auto___30877 = (0);
while(true){
if((i__4790__auto___30877 < len__4789__auto___30876)){
args__4795__auto__.push((arguments[i__4790__auto___30877]));

var G__30878 = (i__4790__auto___30877 + (1));
i__4790__auto___30877 = G__30878;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30870){
var map__30871 = p__30870;
var map__30871__$1 = (((((!((map__30871 == null))))?(((((map__30871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30871):map__30871);
var opts = map__30871__$1;
var statearr_30873_30879 = state;
(statearr_30873_30879[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_30874_30880 = state;
(statearr_30874_30880[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_30875_30881 = state;
(statearr_30875_30881[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30866){
var G__30867 = cljs.core.first.call(null,seq30866);
var seq30866__$1 = cljs.core.next.call(null,seq30866);
var G__30868 = cljs.core.first.call(null,seq30866__$1);
var seq30866__$2 = cljs.core.next.call(null,seq30866__$1);
var G__30869 = cljs.core.first.call(null,seq30866__$2);
var seq30866__$3 = cljs.core.next.call(null,seq30866__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30867,G__30868,G__30869,seq30866__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30882 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30882 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30883){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30883 = meta30883;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30882.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30884,meta30883__$1){
var self__ = this;
var _30884__$1 = this;
return (new cljs.core.async.t_cljs$core$async30882(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30883__$1));
}));

(cljs.core.async.t_cljs$core$async30882.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30884){
var self__ = this;
var _30884__$1 = this;
return self__.meta30883;
}));

(cljs.core.async.t_cljs$core$async30882.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30882.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async30882.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30882.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async30882.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async30882.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async30882.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async30882.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async30882.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30883","meta30883",-208343412,null)], null);
}));

(cljs.core.async.t_cljs$core$async30882.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30882.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30882");

(cljs.core.async.t_cljs$core$async30882.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async30882");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30882.
 */
cljs.core.async.__GT_t_cljs$core$async30882 = (function cljs$core$async$mix_$___GT_t_cljs$core$async30882(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30883){
return (new cljs.core.async.t_cljs$core$async30882(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30883));
});

}

return (new cljs.core.async.t_cljs$core$async30882(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29987__auto___31046 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29988__auto__ = (function (){var switch__29892__auto__ = (function (state_30986){
var state_val_30987 = (state_30986[(1)]);
if((state_val_30987 === (7))){
var inst_30901 = (state_30986[(2)]);
var state_30986__$1 = state_30986;
var statearr_30988_31047 = state_30986__$1;
(statearr_30988_31047[(2)] = inst_30901);

(statearr_30988_31047[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (20))){
var inst_30913 = (state_30986[(7)]);
var state_30986__$1 = state_30986;
var statearr_30989_31048 = state_30986__$1;
(statearr_30989_31048[(2)] = inst_30913);

(statearr_30989_31048[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (27))){
var state_30986__$1 = state_30986;
var statearr_30990_31049 = state_30986__$1;
(statearr_30990_31049[(2)] = null);

(statearr_30990_31049[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (1))){
var inst_30888 = (state_30986[(8)]);
var inst_30888__$1 = calc_state.call(null);
var inst_30890 = (inst_30888__$1 == null);
var inst_30891 = cljs.core.not.call(null,inst_30890);
var state_30986__$1 = (function (){var statearr_30991 = state_30986;
(statearr_30991[(8)] = inst_30888__$1);

return statearr_30991;
})();
if(inst_30891){
var statearr_30992_31050 = state_30986__$1;
(statearr_30992_31050[(1)] = (2));

} else {
var statearr_30993_31051 = state_30986__$1;
(statearr_30993_31051[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (24))){
var inst_30937 = (state_30986[(9)]);
var inst_30946 = (state_30986[(10)]);
var inst_30960 = (state_30986[(11)]);
var inst_30960__$1 = inst_30937.call(null,inst_30946);
var state_30986__$1 = (function (){var statearr_30994 = state_30986;
(statearr_30994[(11)] = inst_30960__$1);

return statearr_30994;
})();
if(cljs.core.truth_(inst_30960__$1)){
var statearr_30995_31052 = state_30986__$1;
(statearr_30995_31052[(1)] = (29));

} else {
var statearr_30996_31053 = state_30986__$1;
(statearr_30996_31053[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (4))){
var inst_30904 = (state_30986[(2)]);
var state_30986__$1 = state_30986;
if(cljs.core.truth_(inst_30904)){
var statearr_30997_31054 = state_30986__$1;
(statearr_30997_31054[(1)] = (8));

} else {
var statearr_30998_31055 = state_30986__$1;
(statearr_30998_31055[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (15))){
var inst_30931 = (state_30986[(2)]);
var state_30986__$1 = state_30986;
if(cljs.core.truth_(inst_30931)){
var statearr_30999_31056 = state_30986__$1;
(statearr_30999_31056[(1)] = (19));

} else {
var statearr_31000_31057 = state_30986__$1;
(statearr_31000_31057[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (21))){
var inst_30936 = (state_30986[(12)]);
var inst_30936__$1 = (state_30986[(2)]);
var inst_30937 = cljs.core.get.call(null,inst_30936__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30938 = cljs.core.get.call(null,inst_30936__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30939 = cljs.core.get.call(null,inst_30936__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30986__$1 = (function (){var statearr_31001 = state_30986;
(statearr_31001[(13)] = inst_30938);

(statearr_31001[(12)] = inst_30936__$1);

(statearr_31001[(9)] = inst_30937);

return statearr_31001;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30986__$1,(22),inst_30939);
} else {
if((state_val_30987 === (31))){
var inst_30968 = (state_30986[(2)]);
var state_30986__$1 = state_30986;
if(cljs.core.truth_(inst_30968)){
var statearr_31002_31058 = state_30986__$1;
(statearr_31002_31058[(1)] = (32));

} else {
var statearr_31003_31059 = state_30986__$1;
(statearr_31003_31059[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (32))){
var inst_30945 = (state_30986[(14)]);
var state_30986__$1 = state_30986;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30986__$1,(35),out,inst_30945);
} else {
if((state_val_30987 === (33))){
var inst_30936 = (state_30986[(12)]);
var inst_30913 = inst_30936;
var state_30986__$1 = (function (){var statearr_31004 = state_30986;
(statearr_31004[(7)] = inst_30913);

return statearr_31004;
})();
var statearr_31005_31060 = state_30986__$1;
(statearr_31005_31060[(2)] = null);

(statearr_31005_31060[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (13))){
var inst_30913 = (state_30986[(7)]);
var inst_30920 = inst_30913.cljs$lang$protocol_mask$partition0$;
var inst_30921 = (inst_30920 & (64));
var inst_30922 = inst_30913.cljs$core$ISeq$;
var inst_30923 = (cljs.core.PROTOCOL_SENTINEL === inst_30922);
var inst_30924 = ((inst_30921) || (inst_30923));
var state_30986__$1 = state_30986;
if(cljs.core.truth_(inst_30924)){
var statearr_31006_31061 = state_30986__$1;
(statearr_31006_31061[(1)] = (16));

} else {
var statearr_31007_31062 = state_30986__$1;
(statearr_31007_31062[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (22))){
var inst_30945 = (state_30986[(14)]);
var inst_30946 = (state_30986[(10)]);
var inst_30944 = (state_30986[(2)]);
var inst_30945__$1 = cljs.core.nth.call(null,inst_30944,(0),null);
var inst_30946__$1 = cljs.core.nth.call(null,inst_30944,(1),null);
var inst_30947 = (inst_30945__$1 == null);
var inst_30948 = cljs.core._EQ_.call(null,inst_30946__$1,change);
var inst_30949 = ((inst_30947) || (inst_30948));
var state_30986__$1 = (function (){var statearr_31008 = state_30986;
(statearr_31008[(14)] = inst_30945__$1);

(statearr_31008[(10)] = inst_30946__$1);

return statearr_31008;
})();
if(cljs.core.truth_(inst_30949)){
var statearr_31009_31063 = state_30986__$1;
(statearr_31009_31063[(1)] = (23));

} else {
var statearr_31010_31064 = state_30986__$1;
(statearr_31010_31064[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (36))){
var inst_30936 = (state_30986[(12)]);
var inst_30913 = inst_30936;
var state_30986__$1 = (function (){var statearr_31011 = state_30986;
(statearr_31011[(7)] = inst_30913);

return statearr_31011;
})();
var statearr_31012_31065 = state_30986__$1;
(statearr_31012_31065[(2)] = null);

(statearr_31012_31065[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (29))){
var inst_30960 = (state_30986[(11)]);
var state_30986__$1 = state_30986;
var statearr_31013_31066 = state_30986__$1;
(statearr_31013_31066[(2)] = inst_30960);

(statearr_31013_31066[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (6))){
var state_30986__$1 = state_30986;
var statearr_31014_31067 = state_30986__$1;
(statearr_31014_31067[(2)] = false);

(statearr_31014_31067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (28))){
var inst_30956 = (state_30986[(2)]);
var inst_30957 = calc_state.call(null);
var inst_30913 = inst_30957;
var state_30986__$1 = (function (){var statearr_31015 = state_30986;
(statearr_31015[(15)] = inst_30956);

(statearr_31015[(7)] = inst_30913);

return statearr_31015;
})();
var statearr_31016_31068 = state_30986__$1;
(statearr_31016_31068[(2)] = null);

(statearr_31016_31068[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (25))){
var inst_30982 = (state_30986[(2)]);
var state_30986__$1 = state_30986;
var statearr_31017_31069 = state_30986__$1;
(statearr_31017_31069[(2)] = inst_30982);

(statearr_31017_31069[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (34))){
var inst_30980 = (state_30986[(2)]);
var state_30986__$1 = state_30986;
var statearr_31018_31070 = state_30986__$1;
(statearr_31018_31070[(2)] = inst_30980);

(statearr_31018_31070[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (17))){
var state_30986__$1 = state_30986;
var statearr_31019_31071 = state_30986__$1;
(statearr_31019_31071[(2)] = false);

(statearr_31019_31071[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (3))){
var state_30986__$1 = state_30986;
var statearr_31020_31072 = state_30986__$1;
(statearr_31020_31072[(2)] = false);

(statearr_31020_31072[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (12))){
var inst_30984 = (state_30986[(2)]);
var state_30986__$1 = state_30986;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30986__$1,inst_30984);
} else {
if((state_val_30987 === (2))){
var inst_30888 = (state_30986[(8)]);
var inst_30893 = inst_30888.cljs$lang$protocol_mask$partition0$;
var inst_30894 = (inst_30893 & (64));
var inst_30895 = inst_30888.cljs$core$ISeq$;
var inst_30896 = (cljs.core.PROTOCOL_SENTINEL === inst_30895);
var inst_30897 = ((inst_30894) || (inst_30896));
var state_30986__$1 = state_30986;
if(cljs.core.truth_(inst_30897)){
var statearr_31021_31073 = state_30986__$1;
(statearr_31021_31073[(1)] = (5));

} else {
var statearr_31022_31074 = state_30986__$1;
(statearr_31022_31074[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (23))){
var inst_30945 = (state_30986[(14)]);
var inst_30951 = (inst_30945 == null);
var state_30986__$1 = state_30986;
if(cljs.core.truth_(inst_30951)){
var statearr_31023_31075 = state_30986__$1;
(statearr_31023_31075[(1)] = (26));

} else {
var statearr_31024_31076 = state_30986__$1;
(statearr_31024_31076[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (35))){
var inst_30971 = (state_30986[(2)]);
var state_30986__$1 = state_30986;
if(cljs.core.truth_(inst_30971)){
var statearr_31025_31077 = state_30986__$1;
(statearr_31025_31077[(1)] = (36));

} else {
var statearr_31026_31078 = state_30986__$1;
(statearr_31026_31078[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (19))){
var inst_30913 = (state_30986[(7)]);
var inst_30933 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30913);
var state_30986__$1 = state_30986;
var statearr_31027_31079 = state_30986__$1;
(statearr_31027_31079[(2)] = inst_30933);

(statearr_31027_31079[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (11))){
var inst_30913 = (state_30986[(7)]);
var inst_30917 = (inst_30913 == null);
var inst_30918 = cljs.core.not.call(null,inst_30917);
var state_30986__$1 = state_30986;
if(inst_30918){
var statearr_31028_31080 = state_30986__$1;
(statearr_31028_31080[(1)] = (13));

} else {
var statearr_31029_31081 = state_30986__$1;
(statearr_31029_31081[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (9))){
var inst_30888 = (state_30986[(8)]);
var state_30986__$1 = state_30986;
var statearr_31030_31082 = state_30986__$1;
(statearr_31030_31082[(2)] = inst_30888);

(statearr_31030_31082[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (5))){
var state_30986__$1 = state_30986;
var statearr_31031_31083 = state_30986__$1;
(statearr_31031_31083[(2)] = true);

(statearr_31031_31083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (14))){
var state_30986__$1 = state_30986;
var statearr_31032_31084 = state_30986__$1;
(statearr_31032_31084[(2)] = false);

(statearr_31032_31084[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (26))){
var inst_30946 = (state_30986[(10)]);
var inst_30953 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30946);
var state_30986__$1 = state_30986;
var statearr_31033_31085 = state_30986__$1;
(statearr_31033_31085[(2)] = inst_30953);

(statearr_31033_31085[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (16))){
var state_30986__$1 = state_30986;
var statearr_31034_31086 = state_30986__$1;
(statearr_31034_31086[(2)] = true);

(statearr_31034_31086[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (38))){
var inst_30976 = (state_30986[(2)]);
var state_30986__$1 = state_30986;
var statearr_31035_31087 = state_30986__$1;
(statearr_31035_31087[(2)] = inst_30976);

(statearr_31035_31087[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (30))){
var inst_30938 = (state_30986[(13)]);
var inst_30937 = (state_30986[(9)]);
var inst_30946 = (state_30986[(10)]);
var inst_30963 = cljs.core.empty_QMARK_.call(null,inst_30937);
var inst_30964 = inst_30938.call(null,inst_30946);
var inst_30965 = cljs.core.not.call(null,inst_30964);
var inst_30966 = ((inst_30963) && (inst_30965));
var state_30986__$1 = state_30986;
var statearr_31036_31088 = state_30986__$1;
(statearr_31036_31088[(2)] = inst_30966);

(statearr_31036_31088[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (10))){
var inst_30888 = (state_30986[(8)]);
var inst_30909 = (state_30986[(2)]);
var inst_30910 = cljs.core.get.call(null,inst_30909,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30911 = cljs.core.get.call(null,inst_30909,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30912 = cljs.core.get.call(null,inst_30909,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30913 = inst_30888;
var state_30986__$1 = (function (){var statearr_31037 = state_30986;
(statearr_31037[(16)] = inst_30910);

(statearr_31037[(17)] = inst_30911);

(statearr_31037[(18)] = inst_30912);

(statearr_31037[(7)] = inst_30913);

return statearr_31037;
})();
var statearr_31038_31089 = state_30986__$1;
(statearr_31038_31089[(2)] = null);

(statearr_31038_31089[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (18))){
var inst_30928 = (state_30986[(2)]);
var state_30986__$1 = state_30986;
var statearr_31039_31090 = state_30986__$1;
(statearr_31039_31090[(2)] = inst_30928);

(statearr_31039_31090[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (37))){
var state_30986__$1 = state_30986;
var statearr_31040_31091 = state_30986__$1;
(statearr_31040_31091[(2)] = null);

(statearr_31040_31091[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (8))){
var inst_30888 = (state_30986[(8)]);
var inst_30906 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30888);
var state_30986__$1 = state_30986;
var statearr_31041_31092 = state_30986__$1;
(statearr_31041_31092[(2)] = inst_30906);

(statearr_31041_31092[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__29893__auto__ = null;
var cljs$core$async$mix_$_state_machine__29893__auto____0 = (function (){
var statearr_31042 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31042[(0)] = cljs$core$async$mix_$_state_machine__29893__auto__);

(statearr_31042[(1)] = (1));

return statearr_31042;
});
var cljs$core$async$mix_$_state_machine__29893__auto____1 = (function (state_30986){
while(true){
var ret_value__29894__auto__ = (function (){try{while(true){
var result__29895__auto__ = switch__29892__auto__.call(null,state_30986);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29895__auto__;
}
break;
}
}catch (e31043){if((e31043 instanceof Object)){
var ex__29896__auto__ = e31043;
var statearr_31044_31093 = state_30986;
(statearr_31044_31093[(5)] = ex__29896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31094 = state_30986;
state_30986 = G__31094;
continue;
} else {
return ret_value__29894__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29893__auto__ = function(state_30986){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29893__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29893__auto____1.call(this,state_30986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29893__auto____0;
cljs$core$async$mix_$_state_machine__29893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29893__auto____1;
return cljs$core$async$mix_$_state_machine__29893__auto__;
})()
})();
var state__29989__auto__ = (function (){var statearr_31045 = f__29988__auto__.call(null);
(statearr_31045[(6)] = c__29987__auto___31046);

return statearr_31045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29989__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,p,v,ch);
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31096 = arguments.length;
switch (G__31096) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,p);
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,p,v);
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__31100 = arguments.length;
switch (G__31100) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__31098_SHARP_){
if(cljs.core.truth_(p1__31098_SHARP_.call(null,topic))){
return p1__31098_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31098_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31101 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31101 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31102){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31102 = meta31102;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31101.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31103,meta31102__$1){
var self__ = this;
var _31103__$1 = this;
return (new cljs.core.async.t_cljs$core$async31101(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31102__$1));
}));

(cljs.core.async.t_cljs$core$async31101.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31103){
var self__ = this;
var _31103__$1 = this;
return self__.meta31102;
}));

(cljs.core.async.t_cljs$core$async31101.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31101.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31101.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31101.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31101.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async31101.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31101.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31101.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31102","meta31102",-706429532,null)], null);
}));

(cljs.core.async.t_cljs$core$async31101.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31101.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31101");

(cljs.core.async.t_cljs$core$async31101.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async31101");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31101.
 */
cljs.core.async.__GT_t_cljs$core$async31101 = (function cljs$core$async$__GT_t_cljs$core$async31101(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31102){
return (new cljs.core.async.t_cljs$core$async31101(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31102));
});

}

return (new cljs.core.async.t_cljs$core$async31101(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29987__auto___31221 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29988__auto__ = (function (){var switch__29892__auto__ = (function (state_31175){
var state_val_31176 = (state_31175[(1)]);
if((state_val_31176 === (7))){
var inst_31171 = (state_31175[(2)]);
var state_31175__$1 = state_31175;
var statearr_31177_31222 = state_31175__$1;
(statearr_31177_31222[(2)] = inst_31171);

(statearr_31177_31222[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31176 === (20))){
var state_31175__$1 = state_31175;
var statearr_31178_31223 = state_31175__$1;
(statearr_31178_31223[(2)] = null);

(statearr_31178_31223[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31176 === (1))){
var state_31175__$1 = state_31175;
var statearr_31179_31224 = state_31175__$1;
(statearr_31179_31224[(2)] = null);

(statearr_31179_31224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31176 === (24))){
var inst_31154 = (state_31175[(7)]);
var inst_31163 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31154);
var state_31175__$1 = state_31175;
var statearr_31180_31225 = state_31175__$1;
(statearr_31180_31225[(2)] = inst_31163);

(statearr_31180_31225[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31176 === (4))){
var inst_31106 = (state_31175[(8)]);
var inst_31106__$1 = (state_31175[(2)]);
var inst_31107 = (inst_31106__$1 == null);
var state_31175__$1 = (function (){var statearr_31181 = state_31175;
(statearr_31181[(8)] = inst_31106__$1);

return statearr_31181;
})();
if(cljs.core.truth_(inst_31107)){
var statearr_31182_31226 = state_31175__$1;
(statearr_31182_31226[(1)] = (5));

} else {
var statearr_31183_31227 = state_31175__$1;
(statearr_31183_31227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31176 === (15))){
var inst_31148 = (state_31175[(2)]);
var state_31175__$1 = state_31175;
var statearr_31184_31228 = state_31175__$1;
(statearr_31184_31228[(2)] = inst_31148);

(statearr_31184_31228[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31176 === (21))){
var inst_31168 = (state_31175[(2)]);
var state_31175__$1 = (function (){var statearr_31185 = state_31175;
(statearr_31185[(9)] = inst_31168);

return statearr_31185;
})();
var statearr_31186_31229 = state_31175__$1;
(statearr_31186_31229[(2)] = null);

(statearr_31186_31229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31176 === (13))){
var inst_31130 = (state_31175[(10)]);
var inst_31132 = cljs.core.chunked_seq_QMARK_.call(null,inst_31130);
var state_31175__$1 = state_31175;
if(inst_31132){
var statearr_31187_31230 = state_31175__$1;
(statearr_31187_31230[(1)] = (16));

} else {
var statearr_31188_31231 = state_31175__$1;
(statearr_31188_31231[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31176 === (22))){
var inst_31160 = (state_31175[(2)]);
var state_31175__$1 = state_31175;
if(cljs.core.truth_(inst_31160)){
var statearr_31189_31232 = state_31175__$1;
(statearr_31189_31232[(1)] = (23));

} else {
var statearr_31190_31233 = state_31175__$1;
(statearr_31190_31233[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31176 === (6))){
var inst_31106 = (state_31175[(8)]);
var inst_31156 = (state_31175[(11)]);
var inst_31154 = (state_31175[(7)]);
var inst_31154__$1 = topic_fn.call(null,inst_31106);
var inst_31155 = cljs.core.deref.call(null,mults);
var inst_31156__$1 = cljs.core.get.call(null,inst_31155,inst_31154__$1);
var state_31175__$1 = (function (){var statearr_31191 = state_31175;
(statearr_31191[(11)] = inst_31156__$1);

(statearr_31191[(7)] = inst_31154__$1);

return statearr_31191;
})();
if(cljs.core.truth_(inst_31156__$1)){
var statearr_31192_31234 = state_31175__$1;
(statearr_31192_31234[(1)] = (19));

} else {
var statearr_31193_31235 = state_31175__$1;
(statearr_31193_31235[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31176 === (25))){
var inst_31165 = (state_31175[(2)]);
var state_31175__$1 = state_31175;
var statearr_31194_31236 = state_31175__$1;
(statearr_31194_31236[(2)] = inst_31165);

(statearr_31194_31236[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31176 === (17))){
var inst_31130 = (state_31175[(10)]);
var inst_31139 = cljs.core.first.call(null,inst_31130);
var inst_31140 = cljs.core.async.muxch_STAR_.call(null,inst_31139);
var inst_31141 = cljs.core.async.close_BANG_.call(null,inst_31140);
var inst_31142 = cljs.core.next.call(null,inst_31130);
var inst_31116 = inst_31142;
var inst_31117 = null;
var inst_31118 = (0);
var inst_31119 = (0);
var state_31175__$1 = (function (){var statearr_31195 = state_31175;
(statearr_31195[(12)] = inst_31118);

(statearr_31195[(13)] = inst_31119);

(statearr_31195[(14)] = inst_31116);

(statearr_31195[(15)] = inst_31117);

(statearr_31195[(16)] = inst_31141);

return statearr_31195;
})();
var statearr_31196_31237 = state_31175__$1;
(statearr_31196_31237[(2)] = null);

(statearr_31196_31237[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31176 === (3))){
var inst_31173 = (state_31175[(2)]);
var state_31175__$1 = state_31175;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31175__$1,inst_31173);
} else {
if((state_val_31176 === (12))){
var inst_31150 = (state_31175[(2)]);
var state_31175__$1 = state_31175;
var statearr_31197_31238 = state_31175__$1;
(statearr_31197_31238[(2)] = inst_31150);

(statearr_31197_31238[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31176 === (2))){
var state_31175__$1 = state_31175;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31175__$1,(4),ch);
} else {
if((state_val_31176 === (23))){
var state_31175__$1 = state_31175;
var statearr_31198_31239 = state_31175__$1;
(statearr_31198_31239[(2)] = null);

(statearr_31198_31239[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31176 === (19))){
var inst_31106 = (state_31175[(8)]);
var inst_31156 = (state_31175[(11)]);
var inst_31158 = cljs.core.async.muxch_STAR_.call(null,inst_31156);
var state_31175__$1 = state_31175;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31175__$1,(22),inst_31158,inst_31106);
} else {
if((state_val_31176 === (11))){
var inst_31130 = (state_31175[(10)]);
var inst_31116 = (state_31175[(14)]);
var inst_31130__$1 = cljs.core.seq.call(null,inst_31116);
var state_31175__$1 = (function (){var statearr_31199 = state_31175;
(statearr_31199[(10)] = inst_31130__$1);

return statearr_31199;
})();
if(inst_31130__$1){
var statearr_31200_31240 = state_31175__$1;
(statearr_31200_31240[(1)] = (13));

} else {
var statearr_31201_31241 = state_31175__$1;
(statearr_31201_31241[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31176 === (9))){
var inst_31152 = (state_31175[(2)]);
var state_31175__$1 = state_31175;
var statearr_31202_31242 = state_31175__$1;
(statearr_31202_31242[(2)] = inst_31152);

(statearr_31202_31242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31176 === (5))){
var inst_31113 = cljs.core.deref.call(null,mults);
var inst_31114 = cljs.core.vals.call(null,inst_31113);
var inst_31115 = cljs.core.seq.call(null,inst_31114);
var inst_31116 = inst_31115;
var inst_31117 = null;
var inst_31118 = (0);
var inst_31119 = (0);
var state_31175__$1 = (function (){var statearr_31203 = state_31175;
(statearr_31203[(12)] = inst_31118);

(statearr_31203[(13)] = inst_31119);

(statearr_31203[(14)] = inst_31116);

(statearr_31203[(15)] = inst_31117);

return statearr_31203;
})();
var statearr_31204_31243 = state_31175__$1;
(statearr_31204_31243[(2)] = null);

(statearr_31204_31243[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31176 === (14))){
var state_31175__$1 = state_31175;
var statearr_31208_31244 = state_31175__$1;
(statearr_31208_31244[(2)] = null);

(statearr_31208_31244[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31176 === (16))){
var inst_31130 = (state_31175[(10)]);
var inst_31134 = cljs.core.chunk_first.call(null,inst_31130);
var inst_31135 = cljs.core.chunk_rest.call(null,inst_31130);
var inst_31136 = cljs.core.count.call(null,inst_31134);
var inst_31116 = inst_31135;
var inst_31117 = inst_31134;
var inst_31118 = inst_31136;
var inst_31119 = (0);
var state_31175__$1 = (function (){var statearr_31209 = state_31175;
(statearr_31209[(12)] = inst_31118);

(statearr_31209[(13)] = inst_31119);

(statearr_31209[(14)] = inst_31116);

(statearr_31209[(15)] = inst_31117);

return statearr_31209;
})();
var statearr_31210_31245 = state_31175__$1;
(statearr_31210_31245[(2)] = null);

(statearr_31210_31245[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31176 === (10))){
var inst_31118 = (state_31175[(12)]);
var inst_31119 = (state_31175[(13)]);
var inst_31116 = (state_31175[(14)]);
var inst_31117 = (state_31175[(15)]);
var inst_31124 = cljs.core._nth.call(null,inst_31117,inst_31119);
var inst_31125 = cljs.core.async.muxch_STAR_.call(null,inst_31124);
var inst_31126 = cljs.core.async.close_BANG_.call(null,inst_31125);
var inst_31127 = (inst_31119 + (1));
var tmp31205 = inst_31118;
var tmp31206 = inst_31116;
var tmp31207 = inst_31117;
var inst_31116__$1 = tmp31206;
var inst_31117__$1 = tmp31207;
var inst_31118__$1 = tmp31205;
var inst_31119__$1 = inst_31127;
var state_31175__$1 = (function (){var statearr_31211 = state_31175;
(statearr_31211[(12)] = inst_31118__$1);

(statearr_31211[(13)] = inst_31119__$1);

(statearr_31211[(14)] = inst_31116__$1);

(statearr_31211[(17)] = inst_31126);

(statearr_31211[(15)] = inst_31117__$1);

return statearr_31211;
})();
var statearr_31212_31246 = state_31175__$1;
(statearr_31212_31246[(2)] = null);

(statearr_31212_31246[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31176 === (18))){
var inst_31145 = (state_31175[(2)]);
var state_31175__$1 = state_31175;
var statearr_31213_31247 = state_31175__$1;
(statearr_31213_31247[(2)] = inst_31145);

(statearr_31213_31247[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31176 === (8))){
var inst_31118 = (state_31175[(12)]);
var inst_31119 = (state_31175[(13)]);
var inst_31121 = (inst_31119 < inst_31118);
var inst_31122 = inst_31121;
var state_31175__$1 = state_31175;
if(cljs.core.truth_(inst_31122)){
var statearr_31214_31248 = state_31175__$1;
(statearr_31214_31248[(1)] = (10));

} else {
var statearr_31215_31249 = state_31175__$1;
(statearr_31215_31249[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__29893__auto__ = null;
var cljs$core$async$state_machine__29893__auto____0 = (function (){
var statearr_31216 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31216[(0)] = cljs$core$async$state_machine__29893__auto__);

(statearr_31216[(1)] = (1));

return statearr_31216;
});
var cljs$core$async$state_machine__29893__auto____1 = (function (state_31175){
while(true){
var ret_value__29894__auto__ = (function (){try{while(true){
var result__29895__auto__ = switch__29892__auto__.call(null,state_31175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29895__auto__;
}
break;
}
}catch (e31217){if((e31217 instanceof Object)){
var ex__29896__auto__ = e31217;
var statearr_31218_31250 = state_31175;
(statearr_31218_31250[(5)] = ex__29896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31217;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31251 = state_31175;
state_31175 = G__31251;
continue;
} else {
return ret_value__29894__auto__;
}
break;
}
});
cljs$core$async$state_machine__29893__auto__ = function(state_31175){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29893__auto____1.call(this,state_31175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29893__auto____0;
cljs$core$async$state_machine__29893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29893__auto____1;
return cljs$core$async$state_machine__29893__auto__;
})()
})();
var state__29989__auto__ = (function (){var statearr_31219 = f__29988__auto__.call(null);
(statearr_31219[(6)] = c__29987__auto___31221);

return statearr_31219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29989__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31253 = arguments.length;
switch (G__31253) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31256 = arguments.length;
switch (G__31256) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__31259 = arguments.length;
switch (G__31259) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__29987__auto___31326 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29988__auto__ = (function (){var switch__29892__auto__ = (function (state_31298){
var state_val_31299 = (state_31298[(1)]);
if((state_val_31299 === (7))){
var state_31298__$1 = state_31298;
var statearr_31300_31327 = state_31298__$1;
(statearr_31300_31327[(2)] = null);

(statearr_31300_31327[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31299 === (1))){
var state_31298__$1 = state_31298;
var statearr_31301_31328 = state_31298__$1;
(statearr_31301_31328[(2)] = null);

(statearr_31301_31328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31299 === (4))){
var inst_31262 = (state_31298[(7)]);
var inst_31264 = (inst_31262 < cnt);
var state_31298__$1 = state_31298;
if(cljs.core.truth_(inst_31264)){
var statearr_31302_31329 = state_31298__$1;
(statearr_31302_31329[(1)] = (6));

} else {
var statearr_31303_31330 = state_31298__$1;
(statearr_31303_31330[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31299 === (15))){
var inst_31294 = (state_31298[(2)]);
var state_31298__$1 = state_31298;
var statearr_31304_31331 = state_31298__$1;
(statearr_31304_31331[(2)] = inst_31294);

(statearr_31304_31331[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31299 === (13))){
var inst_31287 = cljs.core.async.close_BANG_.call(null,out);
var state_31298__$1 = state_31298;
var statearr_31305_31332 = state_31298__$1;
(statearr_31305_31332[(2)] = inst_31287);

(statearr_31305_31332[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31299 === (6))){
var state_31298__$1 = state_31298;
var statearr_31306_31333 = state_31298__$1;
(statearr_31306_31333[(2)] = null);

(statearr_31306_31333[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31299 === (3))){
var inst_31296 = (state_31298[(2)]);
var state_31298__$1 = state_31298;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31298__$1,inst_31296);
} else {
if((state_val_31299 === (12))){
var inst_31284 = (state_31298[(8)]);
var inst_31284__$1 = (state_31298[(2)]);
var inst_31285 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31284__$1);
var state_31298__$1 = (function (){var statearr_31307 = state_31298;
(statearr_31307[(8)] = inst_31284__$1);

return statearr_31307;
})();
if(cljs.core.truth_(inst_31285)){
var statearr_31308_31334 = state_31298__$1;
(statearr_31308_31334[(1)] = (13));

} else {
var statearr_31309_31335 = state_31298__$1;
(statearr_31309_31335[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31299 === (2))){
var inst_31261 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31262 = (0);
var state_31298__$1 = (function (){var statearr_31310 = state_31298;
(statearr_31310[(7)] = inst_31262);

(statearr_31310[(9)] = inst_31261);

return statearr_31310;
})();
var statearr_31311_31336 = state_31298__$1;
(statearr_31311_31336[(2)] = null);

(statearr_31311_31336[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31299 === (11))){
var inst_31262 = (state_31298[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31298,(10),Object,null,(9));
var inst_31271 = chs__$1.call(null,inst_31262);
var inst_31272 = done.call(null,inst_31262);
var inst_31273 = cljs.core.async.take_BANG_.call(null,inst_31271,inst_31272);
var state_31298__$1 = state_31298;
var statearr_31312_31337 = state_31298__$1;
(statearr_31312_31337[(2)] = inst_31273);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31298__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31299 === (9))){
var inst_31262 = (state_31298[(7)]);
var inst_31275 = (state_31298[(2)]);
var inst_31276 = (inst_31262 + (1));
var inst_31262__$1 = inst_31276;
var state_31298__$1 = (function (){var statearr_31313 = state_31298;
(statearr_31313[(7)] = inst_31262__$1);

(statearr_31313[(10)] = inst_31275);

return statearr_31313;
})();
var statearr_31314_31338 = state_31298__$1;
(statearr_31314_31338[(2)] = null);

(statearr_31314_31338[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31299 === (5))){
var inst_31282 = (state_31298[(2)]);
var state_31298__$1 = (function (){var statearr_31315 = state_31298;
(statearr_31315[(11)] = inst_31282);

return statearr_31315;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31298__$1,(12),dchan);
} else {
if((state_val_31299 === (14))){
var inst_31284 = (state_31298[(8)]);
var inst_31289 = cljs.core.apply.call(null,f,inst_31284);
var state_31298__$1 = state_31298;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31298__$1,(16),out,inst_31289);
} else {
if((state_val_31299 === (16))){
var inst_31291 = (state_31298[(2)]);
var state_31298__$1 = (function (){var statearr_31316 = state_31298;
(statearr_31316[(12)] = inst_31291);

return statearr_31316;
})();
var statearr_31317_31339 = state_31298__$1;
(statearr_31317_31339[(2)] = null);

(statearr_31317_31339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31299 === (10))){
var inst_31266 = (state_31298[(2)]);
var inst_31267 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31298__$1 = (function (){var statearr_31318 = state_31298;
(statearr_31318[(13)] = inst_31266);

return statearr_31318;
})();
var statearr_31319_31340 = state_31298__$1;
(statearr_31319_31340[(2)] = inst_31267);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31298__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31299 === (8))){
var inst_31280 = (state_31298[(2)]);
var state_31298__$1 = state_31298;
var statearr_31320_31341 = state_31298__$1;
(statearr_31320_31341[(2)] = inst_31280);

(statearr_31320_31341[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__29893__auto__ = null;
var cljs$core$async$state_machine__29893__auto____0 = (function (){
var statearr_31321 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31321[(0)] = cljs$core$async$state_machine__29893__auto__);

(statearr_31321[(1)] = (1));

return statearr_31321;
});
var cljs$core$async$state_machine__29893__auto____1 = (function (state_31298){
while(true){
var ret_value__29894__auto__ = (function (){try{while(true){
var result__29895__auto__ = switch__29892__auto__.call(null,state_31298);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29895__auto__;
}
break;
}
}catch (e31322){if((e31322 instanceof Object)){
var ex__29896__auto__ = e31322;
var statearr_31323_31342 = state_31298;
(statearr_31323_31342[(5)] = ex__29896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31298);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31322;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31343 = state_31298;
state_31298 = G__31343;
continue;
} else {
return ret_value__29894__auto__;
}
break;
}
});
cljs$core$async$state_machine__29893__auto__ = function(state_31298){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29893__auto____1.call(this,state_31298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29893__auto____0;
cljs$core$async$state_machine__29893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29893__auto____1;
return cljs$core$async$state_machine__29893__auto__;
})()
})();
var state__29989__auto__ = (function (){var statearr_31324 = f__29988__auto__.call(null);
(statearr_31324[(6)] = c__29987__auto___31326);

return statearr_31324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29989__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__31346 = arguments.length;
switch (G__31346) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29987__auto___31400 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29988__auto__ = (function (){var switch__29892__auto__ = (function (state_31378){
var state_val_31379 = (state_31378[(1)]);
if((state_val_31379 === (7))){
var inst_31357 = (state_31378[(7)]);
var inst_31358 = (state_31378[(8)]);
var inst_31357__$1 = (state_31378[(2)]);
var inst_31358__$1 = cljs.core.nth.call(null,inst_31357__$1,(0),null);
var inst_31359 = cljs.core.nth.call(null,inst_31357__$1,(1),null);
var inst_31360 = (inst_31358__$1 == null);
var state_31378__$1 = (function (){var statearr_31380 = state_31378;
(statearr_31380[(9)] = inst_31359);

(statearr_31380[(7)] = inst_31357__$1);

(statearr_31380[(8)] = inst_31358__$1);

return statearr_31380;
})();
if(cljs.core.truth_(inst_31360)){
var statearr_31381_31401 = state_31378__$1;
(statearr_31381_31401[(1)] = (8));

} else {
var statearr_31382_31402 = state_31378__$1;
(statearr_31382_31402[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31379 === (1))){
var inst_31347 = cljs.core.vec.call(null,chs);
var inst_31348 = inst_31347;
var state_31378__$1 = (function (){var statearr_31383 = state_31378;
(statearr_31383[(10)] = inst_31348);

return statearr_31383;
})();
var statearr_31384_31403 = state_31378__$1;
(statearr_31384_31403[(2)] = null);

(statearr_31384_31403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31379 === (4))){
var inst_31348 = (state_31378[(10)]);
var state_31378__$1 = state_31378;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31378__$1,(7),inst_31348);
} else {
if((state_val_31379 === (6))){
var inst_31374 = (state_31378[(2)]);
var state_31378__$1 = state_31378;
var statearr_31385_31404 = state_31378__$1;
(statearr_31385_31404[(2)] = inst_31374);

(statearr_31385_31404[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31379 === (3))){
var inst_31376 = (state_31378[(2)]);
var state_31378__$1 = state_31378;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31378__$1,inst_31376);
} else {
if((state_val_31379 === (2))){
var inst_31348 = (state_31378[(10)]);
var inst_31350 = cljs.core.count.call(null,inst_31348);
var inst_31351 = (inst_31350 > (0));
var state_31378__$1 = state_31378;
if(cljs.core.truth_(inst_31351)){
var statearr_31387_31405 = state_31378__$1;
(statearr_31387_31405[(1)] = (4));

} else {
var statearr_31388_31406 = state_31378__$1;
(statearr_31388_31406[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31379 === (11))){
var inst_31348 = (state_31378[(10)]);
var inst_31367 = (state_31378[(2)]);
var tmp31386 = inst_31348;
var inst_31348__$1 = tmp31386;
var state_31378__$1 = (function (){var statearr_31389 = state_31378;
(statearr_31389[(10)] = inst_31348__$1);

(statearr_31389[(11)] = inst_31367);

return statearr_31389;
})();
var statearr_31390_31407 = state_31378__$1;
(statearr_31390_31407[(2)] = null);

(statearr_31390_31407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31379 === (9))){
var inst_31358 = (state_31378[(8)]);
var state_31378__$1 = state_31378;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31378__$1,(11),out,inst_31358);
} else {
if((state_val_31379 === (5))){
var inst_31372 = cljs.core.async.close_BANG_.call(null,out);
var state_31378__$1 = state_31378;
var statearr_31391_31408 = state_31378__$1;
(statearr_31391_31408[(2)] = inst_31372);

(statearr_31391_31408[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31379 === (10))){
var inst_31370 = (state_31378[(2)]);
var state_31378__$1 = state_31378;
var statearr_31392_31409 = state_31378__$1;
(statearr_31392_31409[(2)] = inst_31370);

(statearr_31392_31409[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31379 === (8))){
var inst_31348 = (state_31378[(10)]);
var inst_31359 = (state_31378[(9)]);
var inst_31357 = (state_31378[(7)]);
var inst_31358 = (state_31378[(8)]);
var inst_31362 = (function (){var cs = inst_31348;
var vec__31353 = inst_31357;
var v = inst_31358;
var c = inst_31359;
return (function (p1__31344_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31344_SHARP_);
});
})();
var inst_31363 = cljs.core.filterv.call(null,inst_31362,inst_31348);
var inst_31348__$1 = inst_31363;
var state_31378__$1 = (function (){var statearr_31393 = state_31378;
(statearr_31393[(10)] = inst_31348__$1);

return statearr_31393;
})();
var statearr_31394_31410 = state_31378__$1;
(statearr_31394_31410[(2)] = null);

(statearr_31394_31410[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__29893__auto__ = null;
var cljs$core$async$state_machine__29893__auto____0 = (function (){
var statearr_31395 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31395[(0)] = cljs$core$async$state_machine__29893__auto__);

(statearr_31395[(1)] = (1));

return statearr_31395;
});
var cljs$core$async$state_machine__29893__auto____1 = (function (state_31378){
while(true){
var ret_value__29894__auto__ = (function (){try{while(true){
var result__29895__auto__ = switch__29892__auto__.call(null,state_31378);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29895__auto__;
}
break;
}
}catch (e31396){if((e31396 instanceof Object)){
var ex__29896__auto__ = e31396;
var statearr_31397_31411 = state_31378;
(statearr_31397_31411[(5)] = ex__29896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31396;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31412 = state_31378;
state_31378 = G__31412;
continue;
} else {
return ret_value__29894__auto__;
}
break;
}
});
cljs$core$async$state_machine__29893__auto__ = function(state_31378){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29893__auto____1.call(this,state_31378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29893__auto____0;
cljs$core$async$state_machine__29893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29893__auto____1;
return cljs$core$async$state_machine__29893__auto__;
})()
})();
var state__29989__auto__ = (function (){var statearr_31398 = f__29988__auto__.call(null);
(statearr_31398[(6)] = c__29987__auto___31400);

return statearr_31398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29989__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__31414 = arguments.length;
switch (G__31414) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29987__auto___31459 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29988__auto__ = (function (){var switch__29892__auto__ = (function (state_31438){
var state_val_31439 = (state_31438[(1)]);
if((state_val_31439 === (7))){
var inst_31420 = (state_31438[(7)]);
var inst_31420__$1 = (state_31438[(2)]);
var inst_31421 = (inst_31420__$1 == null);
var inst_31422 = cljs.core.not.call(null,inst_31421);
var state_31438__$1 = (function (){var statearr_31440 = state_31438;
(statearr_31440[(7)] = inst_31420__$1);

return statearr_31440;
})();
if(inst_31422){
var statearr_31441_31460 = state_31438__$1;
(statearr_31441_31460[(1)] = (8));

} else {
var statearr_31442_31461 = state_31438__$1;
(statearr_31442_31461[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31439 === (1))){
var inst_31415 = (0);
var state_31438__$1 = (function (){var statearr_31443 = state_31438;
(statearr_31443[(8)] = inst_31415);

return statearr_31443;
})();
var statearr_31444_31462 = state_31438__$1;
(statearr_31444_31462[(2)] = null);

(statearr_31444_31462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31439 === (4))){
var state_31438__$1 = state_31438;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31438__$1,(7),ch);
} else {
if((state_val_31439 === (6))){
var inst_31433 = (state_31438[(2)]);
var state_31438__$1 = state_31438;
var statearr_31445_31463 = state_31438__$1;
(statearr_31445_31463[(2)] = inst_31433);

(statearr_31445_31463[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31439 === (3))){
var inst_31435 = (state_31438[(2)]);
var inst_31436 = cljs.core.async.close_BANG_.call(null,out);
var state_31438__$1 = (function (){var statearr_31446 = state_31438;
(statearr_31446[(9)] = inst_31435);

return statearr_31446;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31438__$1,inst_31436);
} else {
if((state_val_31439 === (2))){
var inst_31415 = (state_31438[(8)]);
var inst_31417 = (inst_31415 < n);
var state_31438__$1 = state_31438;
if(cljs.core.truth_(inst_31417)){
var statearr_31447_31464 = state_31438__$1;
(statearr_31447_31464[(1)] = (4));

} else {
var statearr_31448_31465 = state_31438__$1;
(statearr_31448_31465[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31439 === (11))){
var inst_31415 = (state_31438[(8)]);
var inst_31425 = (state_31438[(2)]);
var inst_31426 = (inst_31415 + (1));
var inst_31415__$1 = inst_31426;
var state_31438__$1 = (function (){var statearr_31449 = state_31438;
(statearr_31449[(10)] = inst_31425);

(statearr_31449[(8)] = inst_31415__$1);

return statearr_31449;
})();
var statearr_31450_31466 = state_31438__$1;
(statearr_31450_31466[(2)] = null);

(statearr_31450_31466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31439 === (9))){
var state_31438__$1 = state_31438;
var statearr_31451_31467 = state_31438__$1;
(statearr_31451_31467[(2)] = null);

(statearr_31451_31467[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31439 === (5))){
var state_31438__$1 = state_31438;
var statearr_31452_31468 = state_31438__$1;
(statearr_31452_31468[(2)] = null);

(statearr_31452_31468[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31439 === (10))){
var inst_31430 = (state_31438[(2)]);
var state_31438__$1 = state_31438;
var statearr_31453_31469 = state_31438__$1;
(statearr_31453_31469[(2)] = inst_31430);

(statearr_31453_31469[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31439 === (8))){
var inst_31420 = (state_31438[(7)]);
var state_31438__$1 = state_31438;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31438__$1,(11),out,inst_31420);
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
});
return (function() {
var cljs$core$async$state_machine__29893__auto__ = null;
var cljs$core$async$state_machine__29893__auto____0 = (function (){
var statearr_31454 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31454[(0)] = cljs$core$async$state_machine__29893__auto__);

(statearr_31454[(1)] = (1));

return statearr_31454;
});
var cljs$core$async$state_machine__29893__auto____1 = (function (state_31438){
while(true){
var ret_value__29894__auto__ = (function (){try{while(true){
var result__29895__auto__ = switch__29892__auto__.call(null,state_31438);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29895__auto__;
}
break;
}
}catch (e31455){if((e31455 instanceof Object)){
var ex__29896__auto__ = e31455;
var statearr_31456_31470 = state_31438;
(statearr_31456_31470[(5)] = ex__29896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31471 = state_31438;
state_31438 = G__31471;
continue;
} else {
return ret_value__29894__auto__;
}
break;
}
});
cljs$core$async$state_machine__29893__auto__ = function(state_31438){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29893__auto____1.call(this,state_31438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29893__auto____0;
cljs$core$async$state_machine__29893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29893__auto____1;
return cljs$core$async$state_machine__29893__auto__;
})()
})();
var state__29989__auto__ = (function (){var statearr_31457 = f__29988__auto__.call(null);
(statearr_31457[(6)] = c__29987__auto___31459);

return statearr_31457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29989__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31473 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31473 = (function (f,ch,meta31474){
this.f = f;
this.ch = ch;
this.meta31474 = meta31474;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31473.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31475,meta31474__$1){
var self__ = this;
var _31475__$1 = this;
return (new cljs.core.async.t_cljs$core$async31473(self__.f,self__.ch,meta31474__$1));
}));

(cljs.core.async.t_cljs$core$async31473.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31475){
var self__ = this;
var _31475__$1 = this;
return self__.meta31474;
}));

(cljs.core.async.t_cljs$core$async31473.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31473.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async31473.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async31473.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31473.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31476 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31476 = (function (f,ch,meta31474,_,fn1,meta31477){
this.f = f;
this.ch = ch;
this.meta31474 = meta31474;
this._ = _;
this.fn1 = fn1;
this.meta31477 = meta31477;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31476.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31478,meta31477__$1){
var self__ = this;
var _31478__$1 = this;
return (new cljs.core.async.t_cljs$core$async31476(self__.f,self__.ch,self__.meta31474,self__._,self__.fn1,meta31477__$1));
}));

(cljs.core.async.t_cljs$core$async31476.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31478){
var self__ = this;
var _31478__$1 = this;
return self__.meta31477;
}));

(cljs.core.async.t_cljs$core$async31476.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31476.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async31476.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31476.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__31472_SHARP_){
return f1.call(null,(((p1__31472_SHARP_ == null))?null:self__.f.call(null,p1__31472_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async31476.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31474","meta31474",574384180,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31473","cljs.core.async/t_cljs$core$async31473",-659529223,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31477","meta31477",-356308200,null)], null);
}));

(cljs.core.async.t_cljs$core$async31476.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31476.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31476");

(cljs.core.async.t_cljs$core$async31476.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async31476");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31476.
 */
cljs.core.async.__GT_t_cljs$core$async31476 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31476(f__$1,ch__$1,meta31474__$1,___$2,fn1__$1,meta31477){
return (new cljs.core.async.t_cljs$core$async31476(f__$1,ch__$1,meta31474__$1,___$2,fn1__$1,meta31477));
});

}

return (new cljs.core.async.t_cljs$core$async31476(self__.f,self__.ch,self__.meta31474,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async31473.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31473.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async31473.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31474","meta31474",574384180,null)], null);
}));

(cljs.core.async.t_cljs$core$async31473.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31473.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31473");

(cljs.core.async.t_cljs$core$async31473.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async31473");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31473.
 */
cljs.core.async.__GT_t_cljs$core$async31473 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31473(f__$1,ch__$1,meta31474){
return (new cljs.core.async.t_cljs$core$async31473(f__$1,ch__$1,meta31474));
});

}

return (new cljs.core.async.t_cljs$core$async31473(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31479 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31479 = (function (f,ch,meta31480){
this.f = f;
this.ch = ch;
this.meta31480 = meta31480;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31479.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31481,meta31480__$1){
var self__ = this;
var _31481__$1 = this;
return (new cljs.core.async.t_cljs$core$async31479(self__.f,self__.ch,meta31480__$1));
}));

(cljs.core.async.t_cljs$core$async31479.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31481){
var self__ = this;
var _31481__$1 = this;
return self__.meta31480;
}));

(cljs.core.async.t_cljs$core$async31479.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31479.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async31479.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31479.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31479.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31479.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async31479.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31480","meta31480",1175654790,null)], null);
}));

(cljs.core.async.t_cljs$core$async31479.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31479.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31479");

(cljs.core.async.t_cljs$core$async31479.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async31479");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31479.
 */
cljs.core.async.__GT_t_cljs$core$async31479 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31479(f__$1,ch__$1,meta31480){
return (new cljs.core.async.t_cljs$core$async31479(f__$1,ch__$1,meta31480));
});

}

return (new cljs.core.async.t_cljs$core$async31479(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31482 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31482 = (function (p,ch,meta31483){
this.p = p;
this.ch = ch;
this.meta31483 = meta31483;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31484,meta31483__$1){
var self__ = this;
var _31484__$1 = this;
return (new cljs.core.async.t_cljs$core$async31482(self__.p,self__.ch,meta31483__$1));
}));

(cljs.core.async.t_cljs$core$async31482.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31484){
var self__ = this;
var _31484__$1 = this;
return self__.meta31483;
}));

(cljs.core.async.t_cljs$core$async31482.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31482.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async31482.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async31482.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31482.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31482.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31482.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async31482.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31483","meta31483",1802915817,null)], null);
}));

(cljs.core.async.t_cljs$core$async31482.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31482.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31482");

(cljs.core.async.t_cljs$core$async31482.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async31482");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31482.
 */
cljs.core.async.__GT_t_cljs$core$async31482 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31482(p__$1,ch__$1,meta31483){
return (new cljs.core.async.t_cljs$core$async31482(p__$1,ch__$1,meta31483));
});

}

return (new cljs.core.async.t_cljs$core$async31482(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__31486 = arguments.length;
switch (G__31486) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29987__auto___31526 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29988__auto__ = (function (){var switch__29892__auto__ = (function (state_31507){
var state_val_31508 = (state_31507[(1)]);
if((state_val_31508 === (7))){
var inst_31503 = (state_31507[(2)]);
var state_31507__$1 = state_31507;
var statearr_31509_31527 = state_31507__$1;
(statearr_31509_31527[(2)] = inst_31503);

(statearr_31509_31527[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31508 === (1))){
var state_31507__$1 = state_31507;
var statearr_31510_31528 = state_31507__$1;
(statearr_31510_31528[(2)] = null);

(statearr_31510_31528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31508 === (4))){
var inst_31489 = (state_31507[(7)]);
var inst_31489__$1 = (state_31507[(2)]);
var inst_31490 = (inst_31489__$1 == null);
var state_31507__$1 = (function (){var statearr_31511 = state_31507;
(statearr_31511[(7)] = inst_31489__$1);

return statearr_31511;
})();
if(cljs.core.truth_(inst_31490)){
var statearr_31512_31529 = state_31507__$1;
(statearr_31512_31529[(1)] = (5));

} else {
var statearr_31513_31530 = state_31507__$1;
(statearr_31513_31530[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31508 === (6))){
var inst_31489 = (state_31507[(7)]);
var inst_31494 = p.call(null,inst_31489);
var state_31507__$1 = state_31507;
if(cljs.core.truth_(inst_31494)){
var statearr_31514_31531 = state_31507__$1;
(statearr_31514_31531[(1)] = (8));

} else {
var statearr_31515_31532 = state_31507__$1;
(statearr_31515_31532[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31508 === (3))){
var inst_31505 = (state_31507[(2)]);
var state_31507__$1 = state_31507;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31507__$1,inst_31505);
} else {
if((state_val_31508 === (2))){
var state_31507__$1 = state_31507;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31507__$1,(4),ch);
} else {
if((state_val_31508 === (11))){
var inst_31497 = (state_31507[(2)]);
var state_31507__$1 = state_31507;
var statearr_31516_31533 = state_31507__$1;
(statearr_31516_31533[(2)] = inst_31497);

(statearr_31516_31533[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31508 === (9))){
var state_31507__$1 = state_31507;
var statearr_31517_31534 = state_31507__$1;
(statearr_31517_31534[(2)] = null);

(statearr_31517_31534[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31508 === (5))){
var inst_31492 = cljs.core.async.close_BANG_.call(null,out);
var state_31507__$1 = state_31507;
var statearr_31518_31535 = state_31507__$1;
(statearr_31518_31535[(2)] = inst_31492);

(statearr_31518_31535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31508 === (10))){
var inst_31500 = (state_31507[(2)]);
var state_31507__$1 = (function (){var statearr_31519 = state_31507;
(statearr_31519[(8)] = inst_31500);

return statearr_31519;
})();
var statearr_31520_31536 = state_31507__$1;
(statearr_31520_31536[(2)] = null);

(statearr_31520_31536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31508 === (8))){
var inst_31489 = (state_31507[(7)]);
var state_31507__$1 = state_31507;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31507__$1,(11),out,inst_31489);
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
});
return (function() {
var cljs$core$async$state_machine__29893__auto__ = null;
var cljs$core$async$state_machine__29893__auto____0 = (function (){
var statearr_31521 = [null,null,null,null,null,null,null,null,null];
(statearr_31521[(0)] = cljs$core$async$state_machine__29893__auto__);

(statearr_31521[(1)] = (1));

return statearr_31521;
});
var cljs$core$async$state_machine__29893__auto____1 = (function (state_31507){
while(true){
var ret_value__29894__auto__ = (function (){try{while(true){
var result__29895__auto__ = switch__29892__auto__.call(null,state_31507);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29895__auto__;
}
break;
}
}catch (e31522){if((e31522 instanceof Object)){
var ex__29896__auto__ = e31522;
var statearr_31523_31537 = state_31507;
(statearr_31523_31537[(5)] = ex__29896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31538 = state_31507;
state_31507 = G__31538;
continue;
} else {
return ret_value__29894__auto__;
}
break;
}
});
cljs$core$async$state_machine__29893__auto__ = function(state_31507){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29893__auto____1.call(this,state_31507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29893__auto____0;
cljs$core$async$state_machine__29893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29893__auto____1;
return cljs$core$async$state_machine__29893__auto__;
})()
})();
var state__29989__auto__ = (function (){var statearr_31524 = f__29988__auto__.call(null);
(statearr_31524[(6)] = c__29987__auto___31526);

return statearr_31524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29989__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__31540 = arguments.length;
switch (G__31540) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29987__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29988__auto__ = (function (){var switch__29892__auto__ = (function (state_31603){
var state_val_31604 = (state_31603[(1)]);
if((state_val_31604 === (7))){
var inst_31599 = (state_31603[(2)]);
var state_31603__$1 = state_31603;
var statearr_31605_31643 = state_31603__$1;
(statearr_31605_31643[(2)] = inst_31599);

(statearr_31605_31643[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31604 === (20))){
var inst_31569 = (state_31603[(7)]);
var inst_31580 = (state_31603[(2)]);
var inst_31581 = cljs.core.next.call(null,inst_31569);
var inst_31555 = inst_31581;
var inst_31556 = null;
var inst_31557 = (0);
var inst_31558 = (0);
var state_31603__$1 = (function (){var statearr_31606 = state_31603;
(statearr_31606[(8)] = inst_31557);

(statearr_31606[(9)] = inst_31555);

(statearr_31606[(10)] = inst_31580);

(statearr_31606[(11)] = inst_31558);

(statearr_31606[(12)] = inst_31556);

return statearr_31606;
})();
var statearr_31607_31644 = state_31603__$1;
(statearr_31607_31644[(2)] = null);

(statearr_31607_31644[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31604 === (1))){
var state_31603__$1 = state_31603;
var statearr_31608_31645 = state_31603__$1;
(statearr_31608_31645[(2)] = null);

(statearr_31608_31645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31604 === (4))){
var inst_31544 = (state_31603[(13)]);
var inst_31544__$1 = (state_31603[(2)]);
var inst_31545 = (inst_31544__$1 == null);
var state_31603__$1 = (function (){var statearr_31609 = state_31603;
(statearr_31609[(13)] = inst_31544__$1);

return statearr_31609;
})();
if(cljs.core.truth_(inst_31545)){
var statearr_31610_31646 = state_31603__$1;
(statearr_31610_31646[(1)] = (5));

} else {
var statearr_31611_31647 = state_31603__$1;
(statearr_31611_31647[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31604 === (15))){
var state_31603__$1 = state_31603;
var statearr_31615_31648 = state_31603__$1;
(statearr_31615_31648[(2)] = null);

(statearr_31615_31648[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31604 === (21))){
var state_31603__$1 = state_31603;
var statearr_31616_31649 = state_31603__$1;
(statearr_31616_31649[(2)] = null);

(statearr_31616_31649[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31604 === (13))){
var inst_31557 = (state_31603[(8)]);
var inst_31555 = (state_31603[(9)]);
var inst_31558 = (state_31603[(11)]);
var inst_31556 = (state_31603[(12)]);
var inst_31565 = (state_31603[(2)]);
var inst_31566 = (inst_31558 + (1));
var tmp31612 = inst_31557;
var tmp31613 = inst_31555;
var tmp31614 = inst_31556;
var inst_31555__$1 = tmp31613;
var inst_31556__$1 = tmp31614;
var inst_31557__$1 = tmp31612;
var inst_31558__$1 = inst_31566;
var state_31603__$1 = (function (){var statearr_31617 = state_31603;
(statearr_31617[(8)] = inst_31557__$1);

(statearr_31617[(9)] = inst_31555__$1);

(statearr_31617[(14)] = inst_31565);

(statearr_31617[(11)] = inst_31558__$1);

(statearr_31617[(12)] = inst_31556__$1);

return statearr_31617;
})();
var statearr_31618_31650 = state_31603__$1;
(statearr_31618_31650[(2)] = null);

(statearr_31618_31650[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31604 === (22))){
var state_31603__$1 = state_31603;
var statearr_31619_31651 = state_31603__$1;
(statearr_31619_31651[(2)] = null);

(statearr_31619_31651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31604 === (6))){
var inst_31544 = (state_31603[(13)]);
var inst_31553 = f.call(null,inst_31544);
var inst_31554 = cljs.core.seq.call(null,inst_31553);
var inst_31555 = inst_31554;
var inst_31556 = null;
var inst_31557 = (0);
var inst_31558 = (0);
var state_31603__$1 = (function (){var statearr_31620 = state_31603;
(statearr_31620[(8)] = inst_31557);

(statearr_31620[(9)] = inst_31555);

(statearr_31620[(11)] = inst_31558);

(statearr_31620[(12)] = inst_31556);

return statearr_31620;
})();
var statearr_31621_31652 = state_31603__$1;
(statearr_31621_31652[(2)] = null);

(statearr_31621_31652[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31604 === (17))){
var inst_31569 = (state_31603[(7)]);
var inst_31573 = cljs.core.chunk_first.call(null,inst_31569);
var inst_31574 = cljs.core.chunk_rest.call(null,inst_31569);
var inst_31575 = cljs.core.count.call(null,inst_31573);
var inst_31555 = inst_31574;
var inst_31556 = inst_31573;
var inst_31557 = inst_31575;
var inst_31558 = (0);
var state_31603__$1 = (function (){var statearr_31622 = state_31603;
(statearr_31622[(8)] = inst_31557);

(statearr_31622[(9)] = inst_31555);

(statearr_31622[(11)] = inst_31558);

(statearr_31622[(12)] = inst_31556);

return statearr_31622;
})();
var statearr_31623_31653 = state_31603__$1;
(statearr_31623_31653[(2)] = null);

(statearr_31623_31653[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31604 === (3))){
var inst_31601 = (state_31603[(2)]);
var state_31603__$1 = state_31603;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31603__$1,inst_31601);
} else {
if((state_val_31604 === (12))){
var inst_31589 = (state_31603[(2)]);
var state_31603__$1 = state_31603;
var statearr_31624_31654 = state_31603__$1;
(statearr_31624_31654[(2)] = inst_31589);

(statearr_31624_31654[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31604 === (2))){
var state_31603__$1 = state_31603;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31603__$1,(4),in$);
} else {
if((state_val_31604 === (23))){
var inst_31597 = (state_31603[(2)]);
var state_31603__$1 = state_31603;
var statearr_31625_31655 = state_31603__$1;
(statearr_31625_31655[(2)] = inst_31597);

(statearr_31625_31655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31604 === (19))){
var inst_31584 = (state_31603[(2)]);
var state_31603__$1 = state_31603;
var statearr_31626_31656 = state_31603__$1;
(statearr_31626_31656[(2)] = inst_31584);

(statearr_31626_31656[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31604 === (11))){
var inst_31555 = (state_31603[(9)]);
var inst_31569 = (state_31603[(7)]);
var inst_31569__$1 = cljs.core.seq.call(null,inst_31555);
var state_31603__$1 = (function (){var statearr_31627 = state_31603;
(statearr_31627[(7)] = inst_31569__$1);

return statearr_31627;
})();
if(inst_31569__$1){
var statearr_31628_31657 = state_31603__$1;
(statearr_31628_31657[(1)] = (14));

} else {
var statearr_31629_31658 = state_31603__$1;
(statearr_31629_31658[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31604 === (9))){
var inst_31591 = (state_31603[(2)]);
var inst_31592 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_31603__$1 = (function (){var statearr_31630 = state_31603;
(statearr_31630[(15)] = inst_31591);

return statearr_31630;
})();
if(cljs.core.truth_(inst_31592)){
var statearr_31631_31659 = state_31603__$1;
(statearr_31631_31659[(1)] = (21));

} else {
var statearr_31632_31660 = state_31603__$1;
(statearr_31632_31660[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31604 === (5))){
var inst_31547 = cljs.core.async.close_BANG_.call(null,out);
var state_31603__$1 = state_31603;
var statearr_31633_31661 = state_31603__$1;
(statearr_31633_31661[(2)] = inst_31547);

(statearr_31633_31661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31604 === (14))){
var inst_31569 = (state_31603[(7)]);
var inst_31571 = cljs.core.chunked_seq_QMARK_.call(null,inst_31569);
var state_31603__$1 = state_31603;
if(inst_31571){
var statearr_31634_31662 = state_31603__$1;
(statearr_31634_31662[(1)] = (17));

} else {
var statearr_31635_31663 = state_31603__$1;
(statearr_31635_31663[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31604 === (16))){
var inst_31587 = (state_31603[(2)]);
var state_31603__$1 = state_31603;
var statearr_31636_31664 = state_31603__$1;
(statearr_31636_31664[(2)] = inst_31587);

(statearr_31636_31664[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31604 === (10))){
var inst_31558 = (state_31603[(11)]);
var inst_31556 = (state_31603[(12)]);
var inst_31563 = cljs.core._nth.call(null,inst_31556,inst_31558);
var state_31603__$1 = state_31603;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31603__$1,(13),out,inst_31563);
} else {
if((state_val_31604 === (18))){
var inst_31569 = (state_31603[(7)]);
var inst_31578 = cljs.core.first.call(null,inst_31569);
var state_31603__$1 = state_31603;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31603__$1,(20),out,inst_31578);
} else {
if((state_val_31604 === (8))){
var inst_31557 = (state_31603[(8)]);
var inst_31558 = (state_31603[(11)]);
var inst_31560 = (inst_31558 < inst_31557);
var inst_31561 = inst_31560;
var state_31603__$1 = state_31603;
if(cljs.core.truth_(inst_31561)){
var statearr_31637_31665 = state_31603__$1;
(statearr_31637_31665[(1)] = (10));

} else {
var statearr_31638_31666 = state_31603__$1;
(statearr_31638_31666[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29893__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29893__auto____0 = (function (){
var statearr_31639 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31639[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29893__auto__);

(statearr_31639[(1)] = (1));

return statearr_31639;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29893__auto____1 = (function (state_31603){
while(true){
var ret_value__29894__auto__ = (function (){try{while(true){
var result__29895__auto__ = switch__29892__auto__.call(null,state_31603);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29895__auto__;
}
break;
}
}catch (e31640){if((e31640 instanceof Object)){
var ex__29896__auto__ = e31640;
var statearr_31641_31667 = state_31603;
(statearr_31641_31667[(5)] = ex__29896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31603);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31640;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31668 = state_31603;
state_31603 = G__31668;
continue;
} else {
return ret_value__29894__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29893__auto__ = function(state_31603){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29893__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29893__auto____1.call(this,state_31603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29893__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29893__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29893__auto__;
})()
})();
var state__29989__auto__ = (function (){var statearr_31642 = f__29988__auto__.call(null);
(statearr_31642[(6)] = c__29987__auto__);

return statearr_31642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29989__auto__);
}));

return c__29987__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__31670 = arguments.length;
switch (G__31670) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__31673 = arguments.length;
switch (G__31673) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__31676 = arguments.length;
switch (G__31676) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29987__auto___31723 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29988__auto__ = (function (){var switch__29892__auto__ = (function (state_31700){
var state_val_31701 = (state_31700[(1)]);
if((state_val_31701 === (7))){
var inst_31695 = (state_31700[(2)]);
var state_31700__$1 = state_31700;
var statearr_31702_31724 = state_31700__$1;
(statearr_31702_31724[(2)] = inst_31695);

(statearr_31702_31724[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31701 === (1))){
var inst_31677 = null;
var state_31700__$1 = (function (){var statearr_31703 = state_31700;
(statearr_31703[(7)] = inst_31677);

return statearr_31703;
})();
var statearr_31704_31725 = state_31700__$1;
(statearr_31704_31725[(2)] = null);

(statearr_31704_31725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31701 === (4))){
var inst_31680 = (state_31700[(8)]);
var inst_31680__$1 = (state_31700[(2)]);
var inst_31681 = (inst_31680__$1 == null);
var inst_31682 = cljs.core.not.call(null,inst_31681);
var state_31700__$1 = (function (){var statearr_31705 = state_31700;
(statearr_31705[(8)] = inst_31680__$1);

return statearr_31705;
})();
if(inst_31682){
var statearr_31706_31726 = state_31700__$1;
(statearr_31706_31726[(1)] = (5));

} else {
var statearr_31707_31727 = state_31700__$1;
(statearr_31707_31727[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31701 === (6))){
var state_31700__$1 = state_31700;
var statearr_31708_31728 = state_31700__$1;
(statearr_31708_31728[(2)] = null);

(statearr_31708_31728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31701 === (3))){
var inst_31697 = (state_31700[(2)]);
var inst_31698 = cljs.core.async.close_BANG_.call(null,out);
var state_31700__$1 = (function (){var statearr_31709 = state_31700;
(statearr_31709[(9)] = inst_31697);

return statearr_31709;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31700__$1,inst_31698);
} else {
if((state_val_31701 === (2))){
var state_31700__$1 = state_31700;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31700__$1,(4),ch);
} else {
if((state_val_31701 === (11))){
var inst_31680 = (state_31700[(8)]);
var inst_31689 = (state_31700[(2)]);
var inst_31677 = inst_31680;
var state_31700__$1 = (function (){var statearr_31710 = state_31700;
(statearr_31710[(10)] = inst_31689);

(statearr_31710[(7)] = inst_31677);

return statearr_31710;
})();
var statearr_31711_31729 = state_31700__$1;
(statearr_31711_31729[(2)] = null);

(statearr_31711_31729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31701 === (9))){
var inst_31680 = (state_31700[(8)]);
var state_31700__$1 = state_31700;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31700__$1,(11),out,inst_31680);
} else {
if((state_val_31701 === (5))){
var inst_31677 = (state_31700[(7)]);
var inst_31680 = (state_31700[(8)]);
var inst_31684 = cljs.core._EQ_.call(null,inst_31680,inst_31677);
var state_31700__$1 = state_31700;
if(inst_31684){
var statearr_31713_31730 = state_31700__$1;
(statearr_31713_31730[(1)] = (8));

} else {
var statearr_31714_31731 = state_31700__$1;
(statearr_31714_31731[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31701 === (10))){
var inst_31692 = (state_31700[(2)]);
var state_31700__$1 = state_31700;
var statearr_31715_31732 = state_31700__$1;
(statearr_31715_31732[(2)] = inst_31692);

(statearr_31715_31732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31701 === (8))){
var inst_31677 = (state_31700[(7)]);
var tmp31712 = inst_31677;
var inst_31677__$1 = tmp31712;
var state_31700__$1 = (function (){var statearr_31716 = state_31700;
(statearr_31716[(7)] = inst_31677__$1);

return statearr_31716;
})();
var statearr_31717_31733 = state_31700__$1;
(statearr_31717_31733[(2)] = null);

(statearr_31717_31733[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__29893__auto__ = null;
var cljs$core$async$state_machine__29893__auto____0 = (function (){
var statearr_31718 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31718[(0)] = cljs$core$async$state_machine__29893__auto__);

(statearr_31718[(1)] = (1));

return statearr_31718;
});
var cljs$core$async$state_machine__29893__auto____1 = (function (state_31700){
while(true){
var ret_value__29894__auto__ = (function (){try{while(true){
var result__29895__auto__ = switch__29892__auto__.call(null,state_31700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29895__auto__;
}
break;
}
}catch (e31719){if((e31719 instanceof Object)){
var ex__29896__auto__ = e31719;
var statearr_31720_31734 = state_31700;
(statearr_31720_31734[(5)] = ex__29896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31719;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31735 = state_31700;
state_31700 = G__31735;
continue;
} else {
return ret_value__29894__auto__;
}
break;
}
});
cljs$core$async$state_machine__29893__auto__ = function(state_31700){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29893__auto____1.call(this,state_31700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29893__auto____0;
cljs$core$async$state_machine__29893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29893__auto____1;
return cljs$core$async$state_machine__29893__auto__;
})()
})();
var state__29989__auto__ = (function (){var statearr_31721 = f__29988__auto__.call(null);
(statearr_31721[(6)] = c__29987__auto___31723);

return statearr_31721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29989__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__31737 = arguments.length;
switch (G__31737) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29987__auto___31803 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29988__auto__ = (function (){var switch__29892__auto__ = (function (state_31775){
var state_val_31776 = (state_31775[(1)]);
if((state_val_31776 === (7))){
var inst_31771 = (state_31775[(2)]);
var state_31775__$1 = state_31775;
var statearr_31777_31804 = state_31775__$1;
(statearr_31777_31804[(2)] = inst_31771);

(statearr_31777_31804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31776 === (1))){
var inst_31738 = (new Array(n));
var inst_31739 = inst_31738;
var inst_31740 = (0);
var state_31775__$1 = (function (){var statearr_31778 = state_31775;
(statearr_31778[(7)] = inst_31739);

(statearr_31778[(8)] = inst_31740);

return statearr_31778;
})();
var statearr_31779_31805 = state_31775__$1;
(statearr_31779_31805[(2)] = null);

(statearr_31779_31805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31776 === (4))){
var inst_31743 = (state_31775[(9)]);
var inst_31743__$1 = (state_31775[(2)]);
var inst_31744 = (inst_31743__$1 == null);
var inst_31745 = cljs.core.not.call(null,inst_31744);
var state_31775__$1 = (function (){var statearr_31780 = state_31775;
(statearr_31780[(9)] = inst_31743__$1);

return statearr_31780;
})();
if(inst_31745){
var statearr_31781_31806 = state_31775__$1;
(statearr_31781_31806[(1)] = (5));

} else {
var statearr_31782_31807 = state_31775__$1;
(statearr_31782_31807[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31776 === (15))){
var inst_31765 = (state_31775[(2)]);
var state_31775__$1 = state_31775;
var statearr_31783_31808 = state_31775__$1;
(statearr_31783_31808[(2)] = inst_31765);

(statearr_31783_31808[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31776 === (13))){
var state_31775__$1 = state_31775;
var statearr_31784_31809 = state_31775__$1;
(statearr_31784_31809[(2)] = null);

(statearr_31784_31809[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31776 === (6))){
var inst_31740 = (state_31775[(8)]);
var inst_31761 = (inst_31740 > (0));
var state_31775__$1 = state_31775;
if(cljs.core.truth_(inst_31761)){
var statearr_31785_31810 = state_31775__$1;
(statearr_31785_31810[(1)] = (12));

} else {
var statearr_31786_31811 = state_31775__$1;
(statearr_31786_31811[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31776 === (3))){
var inst_31773 = (state_31775[(2)]);
var state_31775__$1 = state_31775;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31775__$1,inst_31773);
} else {
if((state_val_31776 === (12))){
var inst_31739 = (state_31775[(7)]);
var inst_31763 = cljs.core.vec.call(null,inst_31739);
var state_31775__$1 = state_31775;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31775__$1,(15),out,inst_31763);
} else {
if((state_val_31776 === (2))){
var state_31775__$1 = state_31775;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31775__$1,(4),ch);
} else {
if((state_val_31776 === (11))){
var inst_31755 = (state_31775[(2)]);
var inst_31756 = (new Array(n));
var inst_31739 = inst_31756;
var inst_31740 = (0);
var state_31775__$1 = (function (){var statearr_31787 = state_31775;
(statearr_31787[(10)] = inst_31755);

(statearr_31787[(7)] = inst_31739);

(statearr_31787[(8)] = inst_31740);

return statearr_31787;
})();
var statearr_31788_31812 = state_31775__$1;
(statearr_31788_31812[(2)] = null);

(statearr_31788_31812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31776 === (9))){
var inst_31739 = (state_31775[(7)]);
var inst_31753 = cljs.core.vec.call(null,inst_31739);
var state_31775__$1 = state_31775;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31775__$1,(11),out,inst_31753);
} else {
if((state_val_31776 === (5))){
var inst_31748 = (state_31775[(11)]);
var inst_31739 = (state_31775[(7)]);
var inst_31743 = (state_31775[(9)]);
var inst_31740 = (state_31775[(8)]);
var inst_31747 = (inst_31739[inst_31740] = inst_31743);
var inst_31748__$1 = (inst_31740 + (1));
var inst_31749 = (inst_31748__$1 < n);
var state_31775__$1 = (function (){var statearr_31789 = state_31775;
(statearr_31789[(11)] = inst_31748__$1);

(statearr_31789[(12)] = inst_31747);

return statearr_31789;
})();
if(cljs.core.truth_(inst_31749)){
var statearr_31790_31813 = state_31775__$1;
(statearr_31790_31813[(1)] = (8));

} else {
var statearr_31791_31814 = state_31775__$1;
(statearr_31791_31814[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31776 === (14))){
var inst_31768 = (state_31775[(2)]);
var inst_31769 = cljs.core.async.close_BANG_.call(null,out);
var state_31775__$1 = (function (){var statearr_31793 = state_31775;
(statearr_31793[(13)] = inst_31768);

return statearr_31793;
})();
var statearr_31794_31815 = state_31775__$1;
(statearr_31794_31815[(2)] = inst_31769);

(statearr_31794_31815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31776 === (10))){
var inst_31759 = (state_31775[(2)]);
var state_31775__$1 = state_31775;
var statearr_31795_31816 = state_31775__$1;
(statearr_31795_31816[(2)] = inst_31759);

(statearr_31795_31816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31776 === (8))){
var inst_31748 = (state_31775[(11)]);
var inst_31739 = (state_31775[(7)]);
var tmp31792 = inst_31739;
var inst_31739__$1 = tmp31792;
var inst_31740 = inst_31748;
var state_31775__$1 = (function (){var statearr_31796 = state_31775;
(statearr_31796[(7)] = inst_31739__$1);

(statearr_31796[(8)] = inst_31740);

return statearr_31796;
})();
var statearr_31797_31817 = state_31775__$1;
(statearr_31797_31817[(2)] = null);

(statearr_31797_31817[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__29893__auto__ = null;
var cljs$core$async$state_machine__29893__auto____0 = (function (){
var statearr_31798 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31798[(0)] = cljs$core$async$state_machine__29893__auto__);

(statearr_31798[(1)] = (1));

return statearr_31798;
});
var cljs$core$async$state_machine__29893__auto____1 = (function (state_31775){
while(true){
var ret_value__29894__auto__ = (function (){try{while(true){
var result__29895__auto__ = switch__29892__auto__.call(null,state_31775);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29895__auto__;
}
break;
}
}catch (e31799){if((e31799 instanceof Object)){
var ex__29896__auto__ = e31799;
var statearr_31800_31818 = state_31775;
(statearr_31800_31818[(5)] = ex__29896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31775);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31819 = state_31775;
state_31775 = G__31819;
continue;
} else {
return ret_value__29894__auto__;
}
break;
}
});
cljs$core$async$state_machine__29893__auto__ = function(state_31775){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29893__auto____1.call(this,state_31775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29893__auto____0;
cljs$core$async$state_machine__29893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29893__auto____1;
return cljs$core$async$state_machine__29893__auto__;
})()
})();
var state__29989__auto__ = (function (){var statearr_31801 = f__29988__auto__.call(null);
(statearr_31801[(6)] = c__29987__auto___31803);

return statearr_31801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29989__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__31821 = arguments.length;
switch (G__31821) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29987__auto___31891 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29988__auto__ = (function (){var switch__29892__auto__ = (function (state_31863){
var state_val_31864 = (state_31863[(1)]);
if((state_val_31864 === (7))){
var inst_31859 = (state_31863[(2)]);
var state_31863__$1 = state_31863;
var statearr_31865_31892 = state_31863__$1;
(statearr_31865_31892[(2)] = inst_31859);

(statearr_31865_31892[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31864 === (1))){
var inst_31822 = [];
var inst_31823 = inst_31822;
var inst_31824 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31863__$1 = (function (){var statearr_31866 = state_31863;
(statearr_31866[(7)] = inst_31823);

(statearr_31866[(8)] = inst_31824);

return statearr_31866;
})();
var statearr_31867_31893 = state_31863__$1;
(statearr_31867_31893[(2)] = null);

(statearr_31867_31893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31864 === (4))){
var inst_31827 = (state_31863[(9)]);
var inst_31827__$1 = (state_31863[(2)]);
var inst_31828 = (inst_31827__$1 == null);
var inst_31829 = cljs.core.not.call(null,inst_31828);
var state_31863__$1 = (function (){var statearr_31868 = state_31863;
(statearr_31868[(9)] = inst_31827__$1);

return statearr_31868;
})();
if(inst_31829){
var statearr_31869_31894 = state_31863__$1;
(statearr_31869_31894[(1)] = (5));

} else {
var statearr_31870_31895 = state_31863__$1;
(statearr_31870_31895[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31864 === (15))){
var inst_31853 = (state_31863[(2)]);
var state_31863__$1 = state_31863;
var statearr_31871_31896 = state_31863__$1;
(statearr_31871_31896[(2)] = inst_31853);

(statearr_31871_31896[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31864 === (13))){
var state_31863__$1 = state_31863;
var statearr_31872_31897 = state_31863__$1;
(statearr_31872_31897[(2)] = null);

(statearr_31872_31897[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31864 === (6))){
var inst_31823 = (state_31863[(7)]);
var inst_31848 = inst_31823.length;
var inst_31849 = (inst_31848 > (0));
var state_31863__$1 = state_31863;
if(cljs.core.truth_(inst_31849)){
var statearr_31873_31898 = state_31863__$1;
(statearr_31873_31898[(1)] = (12));

} else {
var statearr_31874_31899 = state_31863__$1;
(statearr_31874_31899[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31864 === (3))){
var inst_31861 = (state_31863[(2)]);
var state_31863__$1 = state_31863;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31863__$1,inst_31861);
} else {
if((state_val_31864 === (12))){
var inst_31823 = (state_31863[(7)]);
var inst_31851 = cljs.core.vec.call(null,inst_31823);
var state_31863__$1 = state_31863;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31863__$1,(15),out,inst_31851);
} else {
if((state_val_31864 === (2))){
var state_31863__$1 = state_31863;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31863__$1,(4),ch);
} else {
if((state_val_31864 === (11))){
var inst_31831 = (state_31863[(10)]);
var inst_31827 = (state_31863[(9)]);
var inst_31841 = (state_31863[(2)]);
var inst_31842 = [];
var inst_31843 = inst_31842.push(inst_31827);
var inst_31823 = inst_31842;
var inst_31824 = inst_31831;
var state_31863__$1 = (function (){var statearr_31875 = state_31863;
(statearr_31875[(7)] = inst_31823);

(statearr_31875[(8)] = inst_31824);

(statearr_31875[(11)] = inst_31843);

(statearr_31875[(12)] = inst_31841);

return statearr_31875;
})();
var statearr_31876_31900 = state_31863__$1;
(statearr_31876_31900[(2)] = null);

(statearr_31876_31900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31864 === (9))){
var inst_31823 = (state_31863[(7)]);
var inst_31839 = cljs.core.vec.call(null,inst_31823);
var state_31863__$1 = state_31863;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31863__$1,(11),out,inst_31839);
} else {
if((state_val_31864 === (5))){
var inst_31824 = (state_31863[(8)]);
var inst_31831 = (state_31863[(10)]);
var inst_31827 = (state_31863[(9)]);
var inst_31831__$1 = f.call(null,inst_31827);
var inst_31832 = cljs.core._EQ_.call(null,inst_31831__$1,inst_31824);
var inst_31833 = cljs.core.keyword_identical_QMARK_.call(null,inst_31824,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31834 = ((inst_31832) || (inst_31833));
var state_31863__$1 = (function (){var statearr_31877 = state_31863;
(statearr_31877[(10)] = inst_31831__$1);

return statearr_31877;
})();
if(cljs.core.truth_(inst_31834)){
var statearr_31878_31901 = state_31863__$1;
(statearr_31878_31901[(1)] = (8));

} else {
var statearr_31879_31902 = state_31863__$1;
(statearr_31879_31902[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31864 === (14))){
var inst_31856 = (state_31863[(2)]);
var inst_31857 = cljs.core.async.close_BANG_.call(null,out);
var state_31863__$1 = (function (){var statearr_31881 = state_31863;
(statearr_31881[(13)] = inst_31856);

return statearr_31881;
})();
var statearr_31882_31903 = state_31863__$1;
(statearr_31882_31903[(2)] = inst_31857);

(statearr_31882_31903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31864 === (10))){
var inst_31846 = (state_31863[(2)]);
var state_31863__$1 = state_31863;
var statearr_31883_31904 = state_31863__$1;
(statearr_31883_31904[(2)] = inst_31846);

(statearr_31883_31904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31864 === (8))){
var inst_31823 = (state_31863[(7)]);
var inst_31831 = (state_31863[(10)]);
var inst_31827 = (state_31863[(9)]);
var inst_31836 = inst_31823.push(inst_31827);
var tmp31880 = inst_31823;
var inst_31823__$1 = tmp31880;
var inst_31824 = inst_31831;
var state_31863__$1 = (function (){var statearr_31884 = state_31863;
(statearr_31884[(7)] = inst_31823__$1);

(statearr_31884[(8)] = inst_31824);

(statearr_31884[(14)] = inst_31836);

return statearr_31884;
})();
var statearr_31885_31905 = state_31863__$1;
(statearr_31885_31905[(2)] = null);

(statearr_31885_31905[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__29893__auto__ = null;
var cljs$core$async$state_machine__29893__auto____0 = (function (){
var statearr_31886 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31886[(0)] = cljs$core$async$state_machine__29893__auto__);

(statearr_31886[(1)] = (1));

return statearr_31886;
});
var cljs$core$async$state_machine__29893__auto____1 = (function (state_31863){
while(true){
var ret_value__29894__auto__ = (function (){try{while(true){
var result__29895__auto__ = switch__29892__auto__.call(null,state_31863);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29895__auto__;
}
break;
}
}catch (e31887){if((e31887 instanceof Object)){
var ex__29896__auto__ = e31887;
var statearr_31888_31906 = state_31863;
(statearr_31888_31906[(5)] = ex__29896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31907 = state_31863;
state_31863 = G__31907;
continue;
} else {
return ret_value__29894__auto__;
}
break;
}
});
cljs$core$async$state_machine__29893__auto__ = function(state_31863){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29893__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29893__auto____1.call(this,state_31863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29893__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29893__auto____0;
cljs$core$async$state_machine__29893__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29893__auto____1;
return cljs$core$async$state_machine__29893__auto__;
})()
})();
var state__29989__auto__ = (function (){var statearr_31889 = f__29988__auto__.call(null);
(statearr_31889[(6)] = c__29987__auto___31891);

return statearr_31889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29989__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1585778616463

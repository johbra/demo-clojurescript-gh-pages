// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__17130){
var map__17131 = p__17130;
var map__17131__$1 = cljs.core.__destructure_map.call(null,map__17131);
var m = map__17131__$1;
var n = cljs.core.get.call(null,map__17131__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__17131__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
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
var seq__17132_17160 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17133_17161 = null;
var count__17134_17162 = (0);
var i__17135_17163 = (0);
while(true){
if((i__17135_17163 < count__17134_17162)){
var f_17164 = cljs.core._nth.call(null,chunk__17133_17161,i__17135_17163);
cljs.core.println.call(null,"  ",f_17164);


var G__17165 = seq__17132_17160;
var G__17166 = chunk__17133_17161;
var G__17167 = count__17134_17162;
var G__17168 = (i__17135_17163 + (1));
seq__17132_17160 = G__17165;
chunk__17133_17161 = G__17166;
count__17134_17162 = G__17167;
i__17135_17163 = G__17168;
continue;
} else {
var temp__5804__auto___17169 = cljs.core.seq.call(null,seq__17132_17160);
if(temp__5804__auto___17169){
var seq__17132_17170__$1 = temp__5804__auto___17169;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17132_17170__$1)){
var c__5525__auto___17171 = cljs.core.chunk_first.call(null,seq__17132_17170__$1);
var G__17172 = cljs.core.chunk_rest.call(null,seq__17132_17170__$1);
var G__17173 = c__5525__auto___17171;
var G__17174 = cljs.core.count.call(null,c__5525__auto___17171);
var G__17175 = (0);
seq__17132_17160 = G__17172;
chunk__17133_17161 = G__17173;
count__17134_17162 = G__17174;
i__17135_17163 = G__17175;
continue;
} else {
var f_17176 = cljs.core.first.call(null,seq__17132_17170__$1);
cljs.core.println.call(null,"  ",f_17176);


var G__17177 = cljs.core.next.call(null,seq__17132_17170__$1);
var G__17178 = null;
var G__17179 = (0);
var G__17180 = (0);
seq__17132_17160 = G__17177;
chunk__17133_17161 = G__17178;
count__17134_17162 = G__17179;
i__17135_17163 = G__17180;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_17181 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_17181);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_17181)))?cljs.core.second.call(null,arglists_17181):arglists_17181));
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
var seq__17136_17182 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17137_17183 = null;
var count__17138_17184 = (0);
var i__17139_17185 = (0);
while(true){
if((i__17139_17185 < count__17138_17184)){
var vec__17148_17186 = cljs.core._nth.call(null,chunk__17137_17183,i__17139_17185);
var name_17187 = cljs.core.nth.call(null,vec__17148_17186,(0),null);
var map__17151_17188 = cljs.core.nth.call(null,vec__17148_17186,(1),null);
var map__17151_17189__$1 = cljs.core.__destructure_map.call(null,map__17151_17188);
var doc_17190 = cljs.core.get.call(null,map__17151_17189__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_17191 = cljs.core.get.call(null,map__17151_17189__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_17187);

cljs.core.println.call(null," ",arglists_17191);

if(cljs.core.truth_(doc_17190)){
cljs.core.println.call(null," ",doc_17190);
} else {
}


var G__17192 = seq__17136_17182;
var G__17193 = chunk__17137_17183;
var G__17194 = count__17138_17184;
var G__17195 = (i__17139_17185 + (1));
seq__17136_17182 = G__17192;
chunk__17137_17183 = G__17193;
count__17138_17184 = G__17194;
i__17139_17185 = G__17195;
continue;
} else {
var temp__5804__auto___17196 = cljs.core.seq.call(null,seq__17136_17182);
if(temp__5804__auto___17196){
var seq__17136_17197__$1 = temp__5804__auto___17196;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17136_17197__$1)){
var c__5525__auto___17198 = cljs.core.chunk_first.call(null,seq__17136_17197__$1);
var G__17199 = cljs.core.chunk_rest.call(null,seq__17136_17197__$1);
var G__17200 = c__5525__auto___17198;
var G__17201 = cljs.core.count.call(null,c__5525__auto___17198);
var G__17202 = (0);
seq__17136_17182 = G__17199;
chunk__17137_17183 = G__17200;
count__17138_17184 = G__17201;
i__17139_17185 = G__17202;
continue;
} else {
var vec__17152_17203 = cljs.core.first.call(null,seq__17136_17197__$1);
var name_17204 = cljs.core.nth.call(null,vec__17152_17203,(0),null);
var map__17155_17205 = cljs.core.nth.call(null,vec__17152_17203,(1),null);
var map__17155_17206__$1 = cljs.core.__destructure_map.call(null,map__17155_17205);
var doc_17207 = cljs.core.get.call(null,map__17155_17206__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_17208 = cljs.core.get.call(null,map__17155_17206__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_17204);

cljs.core.println.call(null," ",arglists_17208);

if(cljs.core.truth_(doc_17207)){
cljs.core.println.call(null," ",doc_17207);
} else {
}


var G__17209 = cljs.core.next.call(null,seq__17136_17197__$1);
var G__17210 = null;
var G__17211 = (0);
var G__17212 = (0);
seq__17136_17182 = G__17209;
chunk__17137_17183 = G__17210;
count__17138_17184 = G__17211;
i__17139_17185 = G__17212;
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
var temp__5804__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.call(null,"Spec");

var seq__17156 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__17157 = null;
var count__17158 = (0);
var i__17159 = (0);
while(true){
if((i__17159 < count__17158)){
var role = cljs.core._nth.call(null,chunk__17157,i__17159);
var temp__5804__auto___17213__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5804__auto___17213__$1)){
var spec_17214 = temp__5804__auto___17213__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_17214));
} else {
}


var G__17215 = seq__17156;
var G__17216 = chunk__17157;
var G__17217 = count__17158;
var G__17218 = (i__17159 + (1));
seq__17156 = G__17215;
chunk__17157 = G__17216;
count__17158 = G__17217;
i__17159 = G__17218;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq.call(null,seq__17156);
if(temp__5804__auto____$1){
var seq__17156__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17156__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__17156__$1);
var G__17219 = cljs.core.chunk_rest.call(null,seq__17156__$1);
var G__17220 = c__5525__auto__;
var G__17221 = cljs.core.count.call(null,c__5525__auto__);
var G__17222 = (0);
seq__17156 = G__17219;
chunk__17157 = G__17220;
count__17158 = G__17221;
i__17159 = G__17222;
continue;
} else {
var role = cljs.core.first.call(null,seq__17156__$1);
var temp__5804__auto___17223__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5804__auto___17223__$2)){
var spec_17224 = temp__5804__auto___17223__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_17224));
} else {
}


var G__17225 = cljs.core.next.call(null,seq__17156__$1);
var G__17226 = null;
var G__17227 = (0);
var G__17228 = (0);
seq__17156 = G__17225;
chunk__17157 = G__17226;
count__17158 = G__17227;
i__17159 = G__17228;
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
return cljs.core.Throwable__GT_map.call(null,o);
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
var map__17231 = datafied_throwable;
var map__17231__$1 = cljs.core.__destructure_map.call(null,map__17231);
var via = cljs.core.get.call(null,map__17231__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__17231__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__17231__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__17232 = cljs.core.last.call(null,via);
var map__17232__$1 = cljs.core.__destructure_map.call(null,map__17232);
var type = cljs.core.get.call(null,map__17232__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__17232__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__17232__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__17233 = data;
var map__17233__$1 = cljs.core.__destructure_map.call(null,map__17233);
var problems = cljs.core.get.call(null,map__17233__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__17233__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__17233__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__17234 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__17234__$1 = cljs.core.__destructure_map.call(null,map__17234);
var top_data = map__17234__$1;
var source = cljs.core.get.call(null,map__17234__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__17235 = phase;
var G__17235__$1 = (((G__17235 instanceof cljs.core.Keyword))?G__17235.fqn:null);
switch (G__17235__$1) {
case "read-source":
var map__17236 = data;
var map__17236__$1 = cljs.core.__destructure_map.call(null,map__17236);
var line = cljs.core.get.call(null,map__17236__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__17236__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__17237 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__17237__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__17237,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__17237);
var G__17237__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__17237__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__17237__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__17237__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__17237__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__17238 = top_data;
var G__17238__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__17238,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__17238);
var G__17238__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__17238__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__17238__$1);
var G__17238__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__17238__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__17238__$2);
var G__17238__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__17238__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__17238__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__17238__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__17238__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__17239 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__17239,(0),null);
var method = cljs.core.nth.call(null,vec__17239,(1),null);
var file = cljs.core.nth.call(null,vec__17239,(2),null);
var line = cljs.core.nth.call(null,vec__17239,(3),null);
var G__17242 = top_data;
var G__17242__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__17242,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__17242);
var G__17242__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__17242__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__17242__$1);
var G__17242__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.call(null,G__17242__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__17242__$2);
var G__17242__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__17242__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__17242__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__17242__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__17242__$4;
}

break;
case "execution":
var vec__17243 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__17243,(0),null);
var method = cljs.core.nth.call(null,vec__17243,(1),null);
var file = cljs.core.nth.call(null,vec__17243,(2),null);
var line = cljs.core.nth.call(null,vec__17243,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__17230_SHARP_){
var or__5002__auto__ = (p1__17230_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__17230_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__17246 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__17246__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__17246,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__17246);
var G__17246__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__17246__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__17246__$1);
var G__17246__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.call(null,G__17246__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__17246__$2);
var G__17246__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__17246__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__17246__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__17246__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__17246__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17235__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__17250){
var map__17251 = p__17250;
var map__17251__$1 = cljs.core.__destructure_map.call(null,map__17251);
var triage_data = map__17251__$1;
var phase = cljs.core.get.call(null,map__17251__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__17251__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__17251__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__17251__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__17251__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__17251__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__17251__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__17251__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__17252 = phase;
var G__17252__$1 = (((G__17252 instanceof cljs.core.Keyword))?G__17252.fqn:null);
switch (G__17252__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__17253_17262 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__17254_17263 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__17255_17264 = true;
var _STAR_print_fn_STAR__temp_val__17256_17265 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__17255_17264);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__17256_17265);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__17248_SHARP_){
return cljs.core.dissoc.call(null,p1__17248_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__17254_17263);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__17253_17262);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
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
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__17257_17266 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__17258_17267 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__17259_17268 = true;
var _STAR_print_fn_STAR__temp_val__17260_17269 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__17259_17268);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__17260_17269);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__17249_SHARP_){
return cljs.core.dissoc.call(null,p1__17249_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__17258_17267);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__17257_17266);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17252__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map

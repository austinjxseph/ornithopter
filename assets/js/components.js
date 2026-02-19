var Ex=Object.defineProperty;var rd=wt=>{throw TypeError(wt)};var bx=(wt,At,Ot)=>At in wt?Ex(wt,At,{enumerable:!0,configurable:!0,writable:!0,value:Ot}):wt[At]=Ot;var qn=(wt,At,Ot)=>bx(wt,typeof At!="symbol"?At+"":At,Ot),gc=(wt,At,Ot)=>At.has(wt)||rd("Cannot "+Ot);var ne=(wt,At,Ot)=>(gc(wt,At,"read from private field"),Ot?Ot.call(wt):At.get(wt)),at=(wt,At,Ot)=>At.has(wt)?rd("Cannot add the same private member more than once"):At instanceof WeakSet?At.add(wt):At.set(wt,Ot),tt=(wt,At,Ot,Ei)=>(gc(wt,At,"write to private field"),Ei?Ei.call(wt,Ot):At.set(wt,Ot),Ot),ln=(wt,At,Ot)=>(gc(wt,At,"access private method"),Ot);(function(){"use strict";var Ms,Es,Ur,bs,aa,oa,Nr,ys,pi,vc,xc,sd,Hn,pc,mi,Fr,_i,kn,bn,gi,ki,fr,Or,dr,Ts,Br,As,ws,Wi,to,qt,yx,Tx,Sc,ro,so,Mc,ri,vi,Ln,zr,la,ca,no,id;var At=Array.isArray,Ot=Array.prototype.indexOf,Ei=Array.prototype.includes,fa=Array.from,ad=Object.defineProperty,Gr=Object.getOwnPropertyDescriptor,od=Object.getOwnPropertyDescriptors,ld=Object.prototype,cd=Array.prototype,Ec=Object.getPrototypeOf,bc=Object.isExtensible;function ud(n){for(var e=0;e<n.length;e++)n[e]()}function yc(){var n,e,t=new Promise((i,r)=>{n=i,e=r});return{promise:t,resolve:n,reject:e}}const $t=2,da=4,ha=8,Tc=1<<24,bi=16,$n=32,hr=64,ao=128,Fn=512,kt=1024,dn=2048,yi=4096,An=8192,Ti=16384,oo=32768,Hr=65536,Ac=1<<17,wc=1<<18,kr=1<<19,fd=1<<20,Xi=1<<25,pr=32768,lo=1<<21,co=1<<22,Yi=1<<23,Ps=Symbol("$state"),dd=Symbol("legacy props"),hd=Symbol(""),Wr=new class extends Error{constructor(){super(...arguments);qn(this,"name","StaleReactionError");qn(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};function pd(n){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function md(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function _d(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function gd(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function vd(n){throw new Error("https://svelte.dev/e/effect_orphan")}function xd(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Sd(n){throw new Error("https://svelte.dev/e/props_invalid_value")}function Md(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Ed(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function bd(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function yd(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const Td=1,Ad=2,wd=16,Rd=1,Cd=4,Pd=8,Dd=16,Ld=1,Id=2,jt=Symbol(),Ud="http://www.w3.org/1999/xhtml";function Nd(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Rc(n){return n===this.v}function Fd(n,e){return n!=n?e==e:n!==e||n!==null&&typeof n=="object"||typeof n=="function"}function Cc(n){return!Fd(n,this.v)}let Ax=!1,wn=null;function Xr(n){wn=n}function hn(n,e=!1,t){wn={p:wn,i:!1,c:null,e:null,s:n,x:null,l:null}}function pn(n){var e=wn,t=e.e;if(t!==null){e.e=null;for(var i of t)Zc(i)}return e.i=!0,wn=e.p,{}}function Pc(){return!0}let Yr=[];function Od(){var n=Yr;Yr=[],ud(n)}function mr(n){if(Yr.length===0){var e=Yr;queueMicrotask(()=>{e===Yr&&Od()})}Yr.push(n)}function Dc(n){var e=gt;if(e===null)return st.f|=Yi,n;if((e.f&oo)===0){if((e.f&ao)===0)throw n;e.b.error(n)}else qr(n,e)}function qr(n,e){for(;e!==null;){if((e.f&ao)!==0)try{e.b.error(n);return}catch(t){n=t}e=e.parent}throw n}const Bd=-7169;function Bt(n,e){n.f=n.f&Bd|e}function uo(n){(n.f&Fn)!==0||n.deps===null?Bt(n,kt):Bt(n,yi)}function Lc(n){if(n!==null)for(const e of n)(e.f&$t)===0||(e.f&pr)===0||(e.f^=pr,Lc(e.deps))}function Ic(n,e,t){(n.f&dn)!==0?e.add(n):(n.f&yi)!==0&&t.add(n),Lc(n.deps),Bt(n,kt)}const pa=new Set;let vt=null,Zt=null,jn=[],fo=null,ho=!1;const hc=class hc{constructor(){at(this,pi);qn(this,"committed",!1);qn(this,"current",new Map);qn(this,"previous",new Map);at(this,Ms,new Set);at(this,Es,new Set);at(this,Ur,0);at(this,bs,0);at(this,aa,null);at(this,oa,new Set);at(this,Nr,new Set);qn(this,"skipped_effects",new Set);qn(this,"is_fork",!1);at(this,ys,!1)}is_deferred(){return this.is_fork||ne(this,bs)>0}process(e){var r;jn=[],this.apply();var t=[],i=[];for(const s of e)ln(this,pi,vc).call(this,s,t,i);if(this.is_deferred()){ln(this,pi,xc).call(this,i),ln(this,pi,xc).call(this,t);for(const s of this.skipped_effects)Oc(s)}else{for(const s of ne(this,Ms))s();ne(this,Ms).clear(),ne(this,Ur)===0&&ln(this,pi,sd).call(this),vt=null,Uc(i),Uc(t),(r=ne(this,aa))==null||r.resolve()}Zt=null}capture(e,t){t!==jt&&!this.previous.has(e)&&this.previous.set(e,t),(e.f&Yi)===0&&(this.current.set(e,e.v),Zt==null||Zt.set(e,e.v))}activate(){vt=this,this.apply()}deactivate(){vt===this&&(vt=null,Zt=null)}flush(){if(this.activate(),jn.length>0){if(zd(),vt!==null&&vt!==this)return}else ne(this,Ur)===0&&this.process([]);this.deactivate()}discard(){for(const e of ne(this,Es))e(this);ne(this,Es).clear()}increment(e){tt(this,Ur,ne(this,Ur)+1),e&&tt(this,bs,ne(this,bs)+1)}decrement(e){tt(this,Ur,ne(this,Ur)-1),e&&tt(this,bs,ne(this,bs)-1),!ne(this,ys)&&(tt(this,ys,!0),mr(()=>{tt(this,ys,!1),this.is_deferred()?jn.length>0&&this.flush():this.revive()}))}revive(){for(const e of ne(this,oa))ne(this,Nr).delete(e),Bt(e,dn),Ai(e);for(const e of ne(this,Nr))Bt(e,yi),Ai(e);this.flush()}oncommit(e){ne(this,Ms).add(e)}ondiscard(e){ne(this,Es).add(e)}settled(){return(ne(this,aa)??tt(this,aa,yc())).promise}static ensure(){if(vt===null){const e=vt=new hc;pa.add(vt),mr(()=>{vt===e&&e.flush()})}return vt}apply(){}};Ms=new WeakMap,Es=new WeakMap,Ur=new WeakMap,bs=new WeakMap,aa=new WeakMap,oa=new WeakMap,Nr=new WeakMap,ys=new WeakMap,pi=new WeakSet,vc=function(e,t,i){e.f^=kt;for(var r=e.first,s=null;r!==null;){var a=r.f,o=(a&($n|hr))!==0,c=o&&(a&kt)!==0,l=c||(a&An)!==0||this.skipped_effects.has(r);if(!l&&r.fn!==null){o?r.f^=kt:s!==null&&(a&(da|ha|Tc))!==0?s.b.defer_effect(r):(a&da)!==0?t.push(r):Is(r)&&((a&bi)!==0&&ne(this,Nr).add(r),Us(r));var f=r.first;if(f!==null){r=f;continue}}var u=r.parent;for(r=r.next;r===null&&u!==null;)u===s&&(s=null),r=u.next,u=u.parent}},xc=function(e){for(var t=0;t<e.length;t+=1)Ic(e[t],ne(this,oa),ne(this,Nr))},sd=function(){var r;if(pa.size>1){this.previous.clear();var e=Zt,t=!0;for(const s of pa){if(s===this){t=!1;continue}const a=[];for(const[c,l]of this.current){if(s.current.has(c))if(t&&l!==s.current.get(c))s.current.set(c,l);else continue;a.push(c)}if(a.length===0)continue;const o=[...s.current.keys()].filter(c=>!this.current.has(c));if(o.length>0){var i=jn;jn=[];const c=new Set,l=new Map;for(const f of a)Nc(f,o,c,l);if(jn.length>0){vt=s,s.apply();for(const f of jn)ln(r=s,pi,vc).call(r,f,[],[]);s.deactivate()}jn=i}}vt=null,Zt=e}this.committed=!0,pa.delete(this)};let qi=hc;function zd(){ho=!0;var n=null;try{for(var e=0;jn.length>0;){var t=qi.ensure();if(e++>1e3){var i,r;Vd()}t.process(jn),ji.clear()}}finally{ho=!1,fo=null}}function Vd(){try{xd()}catch(n){qr(n,fo)}}let Zn=null;function Uc(n){var e=n.length;if(e!==0){for(var t=0;t<e;){var i=n[t++];if((i.f&(Ti|An))===0&&Is(i)&&(Zn=new Set,Us(i),i.deps===null&&i.first===null&&i.nodes===null&&(i.teardown===null&&i.ac===null?tu(i):i.fn=null),(Zn==null?void 0:Zn.size)>0)){ji.clear();for(const r of Zn){if((r.f&(Ti|An))!==0)continue;const s=[r];let a=r.parent;for(;a!==null;)Zn.has(a)&&(Zn.delete(a),s.push(a)),a=a.parent;for(let o=s.length-1;o>=0;o--){const c=s[o];(c.f&(Ti|An))===0&&Us(c)}}Zn.clear()}}Zn=null}}function Nc(n,e,t,i){if(!t.has(n)&&(t.add(n),n.reactions!==null))for(const r of n.reactions){const s=r.f;(s&$t)!==0?Nc(r,e,t,i):(s&(co|bi))!==0&&(s&dn)===0&&Fc(r,e,i)&&(Bt(r,dn),Ai(r))}}function Fc(n,e,t){const i=t.get(n);if(i!==void 0)return i;if(n.deps!==null)for(const r of n.deps){if(Ei.call(e,r))return!0;if((r.f&$t)!==0&&Fc(r,e,t))return t.set(r,!0),!0}return t.set(n,!1),!1}function Ai(n){for(var e=fo=n;e.parent!==null;){e=e.parent;var t=e.f;if(ho&&e===gt&&(t&bi)!==0&&(t&wc)===0)return;if((t&(hr|$n))!==0){if((t&kt)===0)return;e.f^=kt}}jn.push(e)}function Oc(n){if(!((n.f&$n)!==0&&(n.f&kt)!==0)){Bt(n,kt);for(var e=n.first;e!==null;)Oc(e),e=e.next}}function Gd(n){let e=0,t=_r(0),i;return()=>{go()&&($(t),Kc(()=>(e===0&&(i=va(()=>n(()=>Ds(t)))),e+=1,()=>{mr(()=>{e-=1,e===0&&(i==null||i(),i=void 0,Ds(t))})})))}}var Hd=Hr|kr|ao;function kd(n,e,t){new Wd(n,e,t)}class Wd{constructor(e,t,i){at(this,qt);qn(this,"parent");qn(this,"is_pending",!1);at(this,Hn);at(this,pc,null);at(this,mi);at(this,Fr);at(this,_i);at(this,kn,null);at(this,bn,null);at(this,gi,null);at(this,ki,null);at(this,fr,null);at(this,Or,0);at(this,dr,0);at(this,Ts,!1);at(this,Br,!1);at(this,As,new Set);at(this,ws,new Set);at(this,Wi,null);at(this,to,Gd(()=>(tt(this,Wi,_r(ne(this,Or))),()=>{tt(this,Wi,null)})));tt(this,Hn,e),tt(this,mi,t),tt(this,Fr,i),this.parent=gt.b,this.is_pending=!!ne(this,mi).pending,tt(this,_i,vo(()=>{gt.b=this;{var r=ln(this,qt,Sc).call(this);try{tt(this,kn,On(()=>i(r)))}catch(s){this.error(s)}ne(this,dr)>0?ln(this,qt,so).call(this):this.is_pending=!1}return()=>{var s;(s=ne(this,fr))==null||s.remove()}},Hd))}defer_effect(e){Ic(e,ne(this,As),ne(this,ws))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!ne(this,mi).pending}update_pending_count(e){ln(this,qt,Mc).call(this,e),tt(this,Or,ne(this,Or)+e),!(!ne(this,Wi)||ne(this,Ts))&&(tt(this,Ts,!0),mr(()=>{tt(this,Ts,!1),ne(this,Wi)&&$r(ne(this,Wi),ne(this,Or))}))}get_effect_pending(){return ne(this,to).call(this),$(ne(this,Wi))}error(e){var t=ne(this,mi).onerror;let i=ne(this,mi).failed;if(ne(this,Br)||!t&&!i)throw e;ne(this,kn)&&(mn(ne(this,kn)),tt(this,kn,null)),ne(this,bn)&&(mn(ne(this,bn)),tt(this,bn,null)),ne(this,gi)&&(mn(ne(this,gi)),tt(this,gi,null));var r=!1,s=!1;const a=()=>{if(r){Nd();return}r=!0,s&&yd(),qi.ensure(),tt(this,Or,0),ne(this,gi)!==null&&vr(ne(this,gi),()=>{tt(this,gi,null)}),this.is_pending=this.has_pending_snippet(),tt(this,kn,ln(this,qt,ro).call(this,()=>(tt(this,Br,!1),On(()=>ne(this,Fr).call(this,ne(this,Hn)))))),ne(this,dr)>0?ln(this,qt,so).call(this):this.is_pending=!1};mr(()=>{try{s=!0,t==null||t(e,a),s=!1}catch(o){qr(o,ne(this,_i)&&ne(this,_i).parent)}i&&tt(this,gi,ln(this,qt,ro).call(this,()=>{qi.ensure(),tt(this,Br,!0);try{return On(()=>{i(ne(this,Hn),()=>e,()=>a)})}catch(o){return qr(o,ne(this,_i).parent),null}finally{tt(this,Br,!1)}}))})}}Hn=new WeakMap,pc=new WeakMap,mi=new WeakMap,Fr=new WeakMap,_i=new WeakMap,kn=new WeakMap,bn=new WeakMap,gi=new WeakMap,ki=new WeakMap,fr=new WeakMap,Or=new WeakMap,dr=new WeakMap,Ts=new WeakMap,Br=new WeakMap,As=new WeakMap,ws=new WeakMap,Wi=new WeakMap,to=new WeakMap,qt=new WeakSet,yx=function(){try{tt(this,kn,On(()=>ne(this,Fr).call(this,ne(this,Hn))))}catch(e){this.error(e)}},Tx=function(){const e=ne(this,mi).pending;e&&(tt(this,bn,On(()=>e(ne(this,Hn)))),mr(()=>{var t=ln(this,qt,Sc).call(this);tt(this,kn,ln(this,qt,ro).call(this,()=>(qi.ensure(),On(()=>ne(this,Fr).call(this,t))))),ne(this,dr)>0?ln(this,qt,so).call(this):(vr(ne(this,bn),()=>{tt(this,bn,null)}),this.is_pending=!1)}))},Sc=function(){var e=ne(this,Hn);return this.is_pending&&(tt(this,fr,Zi()),ne(this,Hn).before(ne(this,fr)),e=ne(this,fr)),e},ro=function(e){var t=gt,i=st,r=wn;Bn(ne(this,_i)),_n(ne(this,_i)),Xr(ne(this,_i).ctx);try{return e()}catch(s){return Dc(s),null}finally{Bn(t),_n(i),Xr(r)}},so=function(){const e=ne(this,mi).pending;ne(this,kn)!==null&&(tt(this,ki,document.createDocumentFragment()),ne(this,ki).append(ne(this,fr)),ru(ne(this,kn),ne(this,ki))),ne(this,bn)===null&&tt(this,bn,On(()=>e(ne(this,Hn))))},Mc=function(e){var t;if(!this.has_pending_snippet()){this.parent&&ln(t=this.parent,qt,Mc).call(t,e);return}if(tt(this,dr,ne(this,dr)+e),ne(this,dr)===0){this.is_pending=!1;for(const i of ne(this,As))Bt(i,dn),Ai(i);for(const i of ne(this,ws))Bt(i,yi),Ai(i);ne(this,As).clear(),ne(this,ws).clear(),ne(this,bn)&&vr(ne(this,bn),()=>{tt(this,bn,null)}),ne(this,ki)&&(ne(this,Hn).before(ne(this,ki)),tt(this,ki,null))}};function Xd(n,e,t,i){const r=ma;var s=n.filter(d=>!d.settled);if(t.length===0&&s.length===0){i(e.map(r));return}var a=vt,o=gt,c=Yd(),l=s.length===1?s[0].promise:s.length>1?Promise.all(s.map(d=>d.promise)):null;function f(d){c();try{i(d)}catch(p){(o.f&Ti)===0&&qr(p,o)}a==null||a.deactivate(),po()}if(t.length===0){l.then(()=>f(e.map(r)));return}function u(){c(),Promise.all(t.map(d=>qd(d))).then(d=>f([...e.map(r),...d])).catch(d=>qr(d,o))}l?l.then(u):u()}function Yd(){var n=gt,e=st,t=wn,i=vt;return function(s=!0){Bn(n),_n(e),Xr(t),s&&(i==null||i.activate())}}function po(){Bn(null),_n(null),Xr(null)}function ma(n){var e=$t|dn,t=st!==null&&(st.f&$t)!==0?st:null;return gt!==null&&(gt.f|=kr),{ctx:wn,deps:null,effects:null,equals:Rc,f:e,fn:n,reactions:null,rv:0,v:jt,wv:0,parent:t??gt,ac:null}}function qd(n,e,t){let i=gt;i===null&&md();var r=i.b,s=void 0,a=_r(jt),o=!st,c=new Map;return rh(()=>{var p;var l=yc();s=l.promise;try{Promise.resolve(n()).then(l.resolve,l.reject).then(()=>{f===vt&&f.committed&&f.deactivate(),po()})}catch(_){l.reject(_),po()}var f=vt;if(o){var u=r.is_rendered();r.update_pending_count(1),f.increment(u),(p=c.get(f))==null||p.reject(Wr),c.delete(f),c.set(f,l)}const d=(_,v=void 0)=>{if(f.activate(),v)v!==Wr&&(a.f|=Yi,$r(a,v));else{(a.f&Yi)!==0&&(a.f^=Yi),$r(a,_);for(const[m,h]of c){if(c.delete(m),m===f)break;h.reject(Wr)}}o&&(r.update_pending_count(-1),f.decrement(u))};l.promise.then(d,_=>d(null,_||"unknown"))}),th(()=>{for(const l of c.values())l.reject(Wr)}),new Promise(l=>{function f(u){function d(){u===s?l(a):f(s)}u.then(d,d)}f(s)})}function $i(n){const e=ma(n);return au(e),e}function Bc(n){const e=ma(n);return e.equals=Cc,e}function zc(n){var e=n.effects;if(e!==null){n.effects=null;for(var t=0;t<e.length;t+=1)mn(e[t])}}function $d(n){for(var e=n.parent;e!==null;){if((e.f&$t)===0)return(e.f&Ti)===0?e:null;e=e.parent}return null}function mo(n){var e,t=gt;Bn($d(n));try{n.f&=~pr,zc(n),e=fu(n)}finally{Bn(t)}return e}function Vc(n){var e=mo(n);if(!n.equals(e)&&(n.wv=cu(),(!(vt!=null&&vt.is_fork)||n.deps===null)&&(n.v=e,n.deps===null))){Bt(n,kt);return}Ji||(Zt!==null?(go()||vt!=null&&vt.is_fork)&&Zt.set(n,e):uo(n))}let _o=new Set;const ji=new Map;let Gc=!1;function _r(n,e){var t={f:0,v:n,reactions:null,equals:Rc,rv:0,wv:0};return t}function Kt(n,e){const t=_r(n);return au(t),t}function jd(n,e=!1,t=!0){const i=_r(n);return e||(i.equals=Cc),i}function Nt(n,e,t=!1){st!==null&&(!Kn||(st.f&Ac)!==0)&&Pc()&&(st.f&($t|bi|co|Ac))!==0&&(zn===null||!Ei.call(zn,n))&&bd();let i=t?jr(e):e;return $r(n,i)}function $r(n,e){if(!n.equals(e)){var t=n.v;Ji?ji.set(n,e):ji.set(n,t),n.v=e;var i=qi.ensure();if(i.capture(n,t),(n.f&$t)!==0){const r=n;(n.f&dn)!==0&&mo(r),uo(r)}n.wv=cu(),Hc(n,dn),gt!==null&&(gt.f&kt)!==0&&(gt.f&($n|hr))===0&&(Vn===null?ah([n]):Vn.push(n)),!i.is_fork&&_o.size>0&&!Gc&&Zd()}return e}function Zd(){Gc=!1;for(const n of _o)(n.f&kt)!==0&&Bt(n,yi),Is(n)&&Us(n);_o.clear()}function Ds(n){Nt(n,n.v+1)}function Hc(n,e){var t=n.reactions;if(t!==null)for(var i=t.length,r=0;r<i;r++){var s=t[r],a=s.f,o=(a&dn)===0;if(o&&Bt(s,e),(a&$t)!==0){var c=s;Zt==null||Zt.delete(c),(a&pr)===0&&(a&Fn&&(s.f|=pr),Hc(c,yi))}else o&&((a&bi)!==0&&Zn!==null&&Zn.add(s),Ai(s))}}function jr(n){if(typeof n!="object"||n===null||Ps in n)return n;const e=Ec(n);if(e!==ld&&e!==cd)return n;var t=new Map,i=At(n),r=Kt(0),s=Sr,a=o=>{if(Sr===s)return o();var c=st,l=Sr;_n(null),lu(s);var f=o();return _n(c),lu(l),f};return i&&t.set("length",Kt(n.length)),new Proxy(n,{defineProperty(o,c,l){(!("value"in l)||l.configurable===!1||l.enumerable===!1||l.writable===!1)&&Md();var f=t.get(c);return f===void 0?f=a(()=>{var u=Kt(l.value);return t.set(c,u),u}):Nt(f,l.value,!0),!0},deleteProperty(o,c){var l=t.get(c);if(l===void 0){if(c in o){const f=a(()=>Kt(jt));t.set(c,f),Ds(r)}}else Nt(l,jt),Ds(r);return!0},get(o,c,l){var p;if(c===Ps)return n;var f=t.get(c),u=c in o;if(f===void 0&&(!u||(p=Gr(o,c))!=null&&p.writable)&&(f=a(()=>{var _=jr(u?o[c]:jt),v=Kt(_);return v}),t.set(c,f)),f!==void 0){var d=$(f);return d===jt?void 0:d}return Reflect.get(o,c,l)},getOwnPropertyDescriptor(o,c){var l=Reflect.getOwnPropertyDescriptor(o,c);if(l&&"value"in l){var f=t.get(c);f&&(l.value=$(f))}else if(l===void 0){var u=t.get(c),d=u==null?void 0:u.v;if(u!==void 0&&d!==jt)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return l},has(o,c){var d;if(c===Ps)return!0;var l=t.get(c),f=l!==void 0&&l.v!==jt||Reflect.has(o,c);if(l!==void 0||gt!==null&&(!f||(d=Gr(o,c))!=null&&d.writable)){l===void 0&&(l=a(()=>{var p=f?jr(o[c]):jt,_=Kt(p);return _}),t.set(c,l));var u=$(l);if(u===jt)return!1}return f},set(o,c,l,f){var M;var u=t.get(c),d=c in o;if(i&&c==="length")for(var p=l;p<u.v;p+=1){var _=t.get(p+"");_!==void 0?Nt(_,jt):p in o&&(_=a(()=>Kt(jt)),t.set(p+"",_))}if(u===void 0)(!d||(M=Gr(o,c))!=null&&M.writable)&&(u=a(()=>Kt(void 0)),Nt(u,jr(l)),t.set(c,u));else{d=u.v!==jt;var v=a(()=>jr(l));Nt(u,v)}var m=Reflect.getOwnPropertyDescriptor(o,c);if(m!=null&&m.set&&m.set.call(f,l),!d){if(i&&typeof c=="string"){var h=t.get("length"),b=Number(c);Number.isInteger(b)&&b>=h.v&&Nt(h,b+1)}Ds(r)}return!0},ownKeys(o){$(r);var c=Reflect.ownKeys(o).filter(u=>{var d=t.get(u);return d===void 0||d.v!==jt});for(var[l,f]of t)f.v!==jt&&!(l in o)&&c.push(l);return c},setPrototypeOf(){Ed()}})}var kc,Wc,Xc,Yc;function Kd(){if(kc===void 0){kc=window,Wc=/Firefox/.test(navigator.userAgent);var n=Element.prototype,e=Node.prototype,t=Text.prototype;Xc=Gr(e,"firstChild").get,Yc=Gr(e,"nextSibling").get,bc(n)&&(n.__click=void 0,n.__className=void 0,n.__attributes=null,n.__style=void 0,n.__e=void 0),bc(t)&&(t.__t=void 0)}}function Zi(n=""){return document.createTextNode(n)}function Ki(n){return Xc.call(n)}function Ls(n){return Yc.call(n)}function pe(n,e){return Ki(n)}function gr(n,e=!1){{var t=Ki(n);return t instanceof Comment&&t.data===""?Ls(t):t}}function ot(n,e=1,t=!1){let i=n;for(;e--;)i=Ls(i);return i}function Jd(n){n.textContent=""}function qc(){return!1}function $c(n){var e=st,t=gt;_n(null),Bn(null);try{return n()}finally{_n(e),Bn(t)}}function Qd(n){gt===null&&(st===null&&vd(),gd()),Ji&&_d()}function eh(n,e){var t=e.last;t===null?e.last=e.first=n:(t.next=n,n.prev=t,e.last=n)}function wi(n,e,t){var i=gt;i!==null&&(i.f&An)!==0&&(n|=An);var r={ctx:wn,deps:null,nodes:null,f:n|dn|Fn,first:null,fn:e,last:null,next:null,parent:i,b:i&&i.b,prev:null,teardown:null,wv:0,ac:null};if(t)try{Us(r),r.f|=oo}catch(o){throw mn(r),o}else e!==null&&Ai(r);var s=r;if(t&&s.deps===null&&s.teardown===null&&s.nodes===null&&s.first===s.last&&(s.f&kr)===0&&(s=s.first,(n&bi)!==0&&(n&Hr)!==0&&s!==null&&(s.f|=Hr)),s!==null&&(s.parent=i,i!==null&&eh(s,i),st!==null&&(st.f&$t)!==0&&(n&hr)===0)){var a=st;(a.effects??(a.effects=[])).push(s)}return r}function go(){return st!==null&&!Kn}function th(n){const e=wi(ha,null,!1);return Bt(e,kt),e.teardown=n,e}function jc(n){Qd();var e=gt.f,t=!st&&(e&$n)!==0&&(e&oo)===0;if(t){var i=wn;(i.e??(i.e=[])).push(n)}else return Zc(n)}function Zc(n){return wi(da|fd,n,!1)}function nh(n){qi.ensure();const e=wi(hr|kr,n,!0);return(t={})=>new Promise(i=>{t.outro?vr(e,()=>{mn(e),i(void 0)}):(mn(e),i(void 0))})}function ih(n){return wi(da,n,!1)}function rh(n){return wi(co|kr,n,!0)}function Kc(n,e=0){return wi(ha|e,n,!0)}function We(n,e=[],t=[],i=[]){Xd(i,e,t,r=>{wi(ha,()=>n(...r.map($)),!0)})}function vo(n,e=0){var t=wi(bi|e,n,!0);return t}function On(n){return wi($n|kr,n,!0)}function Jc(n){var e=n.teardown;if(e!==null){const t=Ji,i=st;su(!0),_n(null);try{e.call(null)}finally{su(t),_n(i)}}}function Qc(n,e=!1){var t=n.first;for(n.first=n.last=null;t!==null;){const r=t.ac;r!==null&&$c(()=>{r.abort(Wr)});var i=t.next;(t.f&hr)!==0?t.parent=null:mn(t,e),t=i}}function sh(n){for(var e=n.first;e!==null;){var t=e.next;(e.f&$n)===0&&mn(e),e=t}}function mn(n,e=!0){var t=!1;(e||(n.f&wc)!==0)&&n.nodes!==null&&n.nodes.end!==null&&(eu(n.nodes.start,n.nodes.end),t=!0),Qc(n,e&&!t),ga(n,0),Bt(n,Ti);var i=n.nodes&&n.nodes.t;if(i!==null)for(const s of i)s.stop();Jc(n);var r=n.parent;r!==null&&r.first!==null&&tu(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes=n.ac=null}function eu(n,e){for(;n!==null;){var t=n===e?null:Ls(n);n.remove(),n=t}}function tu(n){var e=n.parent,t=n.prev,i=n.next;t!==null&&(t.next=i),i!==null&&(i.prev=t),e!==null&&(e.first===n&&(e.first=i),e.last===n&&(e.last=t))}function vr(n,e,t=!0){var i=[];nu(n,i,!0);var r=()=>{t&&mn(n),e&&e()},s=i.length;if(s>0){var a=()=>--s||r();for(var o of i)o.out(a)}else r()}function nu(n,e,t){if((n.f&An)===0){n.f^=An;var i=n.nodes&&n.nodes.t;if(i!==null)for(const o of i)(o.is_global||t)&&e.push(o);for(var r=n.first;r!==null;){var s=r.next,a=(r.f&Hr)!==0||(r.f&$n)!==0&&(n.f&bi)!==0;nu(r,e,a?t:!1),r=s}}}function xo(n){iu(n,!0)}function iu(n,e){if((n.f&An)!==0){n.f^=An,(n.f&kt)===0&&(Bt(n,dn),Ai(n));for(var t=n.first;t!==null;){var i=t.next,r=(t.f&Hr)!==0||(t.f&$n)!==0;iu(t,r?e:!1),t=i}var s=n.nodes&&n.nodes.t;if(s!==null)for(const a of s)(a.is_global||e)&&a.in()}}function ru(n,e){if(n.nodes)for(var t=n.nodes.start,i=n.nodes.end;t!==null;){var r=t===i?null:Ls(t);e.append(t),t=r}}let _a=!1,Ji=!1;function su(n){Ji=n}let st=null,Kn=!1;function _n(n){st=n}let gt=null;function Bn(n){gt=n}let zn=null;function au(n){st!==null&&(zn===null?zn=[n]:zn.push(n))}let gn=null,Rn=0,Vn=null;function ah(n){Vn=n}let ou=1,xr=0,Sr=xr;function lu(n){Sr=n}function cu(){return++ou}function Is(n){var e=n.f;if((e&dn)!==0)return!0;if(e&$t&&(n.f&=~pr),(e&yi)!==0){for(var t=n.deps,i=t.length,r=0;r<i;r++){var s=t[r];if(Is(s)&&Vc(s),s.wv>n.wv)return!0}(e&Fn)!==0&&Zt===null&&Bt(n,kt)}return!1}function uu(n,e,t=!0){var i=n.reactions;if(i!==null&&!(zn!==null&&Ei.call(zn,n)))for(var r=0;r<i.length;r++){var s=i[r];(s.f&$t)!==0?uu(s,e,!1):e===s&&(t?Bt(s,dn):(s.f&kt)!==0&&Bt(s,yi),Ai(s))}}function fu(n){var v;var e=gn,t=Rn,i=Vn,r=st,s=zn,a=wn,o=Kn,c=Sr,l=n.f;gn=null,Rn=0,Vn=null,st=(l&($n|hr))===0?n:null,zn=null,Xr(n.ctx),Kn=!1,Sr=++xr,n.ac!==null&&($c(()=>{n.ac.abort(Wr)}),n.ac=null);try{n.f|=lo;var f=n.fn,u=f(),d=n.deps,p=vt==null?void 0:vt.is_fork;if(gn!==null){var _;if(p||ga(n,Rn),d!==null&&Rn>0)for(d.length=Rn+gn.length,_=0;_<gn.length;_++)d[Rn+_]=gn[_];else n.deps=d=gn;if(go()&&(n.f&Fn)!==0)for(_=Rn;_<d.length;_++)((v=d[_]).reactions??(v.reactions=[])).push(n)}else!p&&d!==null&&Rn<d.length&&(ga(n,Rn),d.length=Rn);if(Pc()&&Vn!==null&&!Kn&&d!==null&&(n.f&($t|yi|dn))===0)for(_=0;_<Vn.length;_++)uu(Vn[_],n);if(r!==null&&r!==n){if(xr++,r.deps!==null)for(let m=0;m<t;m+=1)r.deps[m].rv=xr;if(e!==null)for(const m of e)m.rv=xr;Vn!==null&&(i===null?i=Vn:i.push(...Vn))}return(n.f&Yi)!==0&&(n.f^=Yi),u}catch(m){return Dc(m)}finally{n.f^=lo,gn=e,Rn=t,Vn=i,st=r,zn=s,Xr(a),Kn=o,Sr=c}}function oh(n,e){let t=e.reactions;if(t!==null){var i=Ot.call(t,n);if(i!==-1){var r=t.length-1;r===0?t=e.reactions=null:(t[i]=t[r],t.pop())}}if(t===null&&(e.f&$t)!==0&&(gn===null||!Ei.call(gn,e))){var s=e;(s.f&Fn)!==0&&(s.f^=Fn,s.f&=~pr),uo(s),zc(s),ga(s,0)}}function ga(n,e){var t=n.deps;if(t!==null)for(var i=e;i<t.length;i++)oh(n,t[i])}function Us(n){var e=n.f;if((e&Ti)===0){Bt(n,kt);var t=gt,i=_a;gt=n,_a=!0;try{(e&(bi|Tc))!==0?sh(n):Qc(n),Jc(n);var r=fu(n);n.teardown=typeof r=="function"?r:null,n.wv=ou;var s}finally{_a=i,gt=t}}}function $(n){var e=n.f,t=(e&$t)!==0;if(st!==null&&!Kn){var i=gt!==null&&(gt.f&Ti)!==0;if(!i&&(zn===null||!Ei.call(zn,n))){var r=st.deps;if((st.f&lo)!==0)n.rv<xr&&(n.rv=xr,gn===null&&r!==null&&r[Rn]===n?Rn++:gn===null?gn=[n]:gn.push(n));else{(st.deps??(st.deps=[])).push(n);var s=n.reactions;s===null?n.reactions=[st]:Ei.call(s,st)||s.push(st)}}}if(Ji&&ji.has(n))return ji.get(n);if(t){var a=n;if(Ji){var o=a.v;return((a.f&kt)===0&&a.reactions!==null||hu(a))&&(o=mo(a)),ji.set(a,o),o}var c=(a.f&Fn)===0&&!Kn&&st!==null&&(_a||(st.f&Fn)!==0),l=a.deps===null;Is(a)&&(c&&(a.f|=Fn),Vc(a)),c&&!l&&du(a)}if(Zt!=null&&Zt.has(n))return Zt.get(n);if((n.f&Yi)!==0)throw n.v;return n.v}function du(n){if(n.deps!==null){n.f|=Fn;for(const e of n.deps)(e.reactions??(e.reactions=[])).push(n),(e.f&$t)!==0&&(e.f&Fn)===0&&du(e)}}function hu(n){if(n.v===jt)return!0;if(n.deps===null)return!1;for(const e of n.deps)if(ji.has(e)||(e.f&$t)!==0&&hu(e))return!0;return!1}function va(n){var e=Kn;try{return Kn=!0,n()}finally{Kn=e}}const lh=["touchstart","touchmove"];function ch(n){return lh.includes(n)}const pu=new Set,So=new Set;function uh(n){for(var e=0;e<n.length;e++)pu.add(n[e]);for(var t of So)t(n)}let mu=null;function xa(n){var m;var e=this,t=e.ownerDocument,i=n.type,r=((m=n.composedPath)==null?void 0:m.call(n))||[],s=r[0]||n.target;mu=n;var a=0,o=mu===n&&n.__root;if(o){var c=r.indexOf(o);if(c!==-1&&(e===document||e===window)){n.__root=e;return}var l=r.indexOf(e);if(l===-1)return;c<=l&&(a=c)}if(s=r[a]||n.target,s!==e){ad(n,"currentTarget",{configurable:!0,get(){return s||t}});var f=st,u=gt;_n(null),Bn(null);try{for(var d,p=[];s!==null;){var _=s.assignedSlot||s.parentNode||s.host||null;try{var v=s["__"+i];v!=null&&(!s.disabled||n.target===s)&&v.call(s,n)}catch(h){d?p.push(h):d=h}if(n.cancelBubble||_===e||_===null)break;s=_}if(d){for(let h of p)queueMicrotask(()=>{throw h});throw d}}finally{n.__root=e,delete n.currentTarget,_n(f),Bn(u)}}}function _u(n){var e=document.createElement("template");return e.innerHTML=n.replaceAll("<!>","<!---->"),e.content}function Sa(n,e){var t=gt;t.nodes===null&&(t.nodes={start:n,end:e,a:null,t:null})}function Xe(n,e){var t=(e&Ld)!==0,i=(e&Id)!==0,r,s=!n.startsWith("<!>");return()=>{r===void 0&&(r=_u(s?n:"<!>"+n),t||(r=Ki(r)));var a=i||Wc?document.importNode(r,!0):r.cloneNode(!0);if(t){var o=Ki(a),c=a.lastChild;Sa(o,c)}else Sa(a,a);return a}}function Ma(){var n=document.createDocumentFragment(),e=document.createComment(""),t=Zi();return n.append(e,t),Sa(e,t),n}function Ve(n,e){n!==null&&n.before(e)}function tn(n,e){var t=e==null?"":typeof e=="object"?e+"":e;t!==(n.__t??(n.__t=n.nodeValue))&&(n.__t=t,n.nodeValue=t+"")}function fh(n,e){return dh(n,e)}const Zr=new Map;function dh(n,{target:e,anchor:t,props:i={},events:r,context:s,intro:a=!0}){Kd();var o=new Set,c=u=>{for(var d=0;d<u.length;d++){var p=u[d];if(!o.has(p)){o.add(p);var _=ch(p);e.addEventListener(p,xa,{passive:_});var v=Zr.get(p);v===void 0?(document.addEventListener(p,xa,{passive:_}),Zr.set(p,1)):Zr.set(p,v+1)}}};c(fa(pu)),So.add(c);var l=void 0,f=nh(()=>{var u=t??e.appendChild(Zi());return kd(u,{pending:()=>{}},d=>{if(s){hn({});var p=wn;p.c=s}r&&(i.$$events=r),l=n(d,i)||{},s&&pn()}),()=>{var _;for(var d of o){e.removeEventListener(d,xa);var p=Zr.get(d);--p===0?(document.removeEventListener(d,xa),Zr.delete(d)):Zr.set(d,p)}So.delete(c),u!==t&&((_=u.parentNode)==null||_.removeChild(u))}});return Mo.set(l,f),l}let Mo=new WeakMap;function hh(n,e){const t=Mo.get(n);return t?(Mo.delete(n),t(e)):Promise.resolve()}class ph{constructor(e,t=!0){qn(this,"anchor");at(this,ri,new Map);at(this,vi,new Map);at(this,Ln,new Map);at(this,zr,new Set);at(this,la,!0);at(this,ca,()=>{var e=vt;if(ne(this,ri).has(e)){var t=ne(this,ri).get(e),i=ne(this,vi).get(t);if(i)xo(i),ne(this,zr).delete(t);else{var r=ne(this,Ln).get(t);r&&(ne(this,vi).set(t,r.effect),ne(this,Ln).delete(t),r.fragment.lastChild.remove(),this.anchor.before(r.fragment),i=r.effect)}for(const[s,a]of ne(this,ri)){if(ne(this,ri).delete(s),s===e)break;const o=ne(this,Ln).get(a);o&&(mn(o.effect),ne(this,Ln).delete(a))}for(const[s,a]of ne(this,vi)){if(s===t||ne(this,zr).has(s))continue;const o=()=>{if(Array.from(ne(this,ri).values()).includes(s)){var l=document.createDocumentFragment();ru(a,l),l.append(Zi()),ne(this,Ln).set(s,{effect:a,fragment:l})}else mn(a);ne(this,zr).delete(s),ne(this,vi).delete(s)};ne(this,la)||!i?(ne(this,zr).add(s),vr(a,o,!1)):o()}}});at(this,no,e=>{ne(this,ri).delete(e);const t=Array.from(ne(this,ri).values());for(const[i,r]of ne(this,Ln))t.includes(i)||(mn(r.effect),ne(this,Ln).delete(i))});this.anchor=e,tt(this,la,t)}ensure(e,t){var i=vt,r=qc();if(t&&!ne(this,vi).has(e)&&!ne(this,Ln).has(e))if(r){var s=document.createDocumentFragment(),a=Zi();s.append(a),ne(this,Ln).set(e,{effect:On(()=>t(a)),fragment:s})}else ne(this,vi).set(e,On(()=>t(this.anchor)));if(ne(this,ri).set(i,e),r){for(const[o,c]of ne(this,vi))o===e?i.skipped_effects.delete(c):i.skipped_effects.add(c);for(const[o,c]of ne(this,Ln))o===e?i.skipped_effects.delete(c.effect):i.skipped_effects.add(c.effect);i.oncommit(ne(this,ca)),i.ondiscard(ne(this,no))}else ne(this,ca).call(this)}}ri=new WeakMap,vi=new WeakMap,Ln=new WeakMap,zr=new WeakMap,la=new WeakMap,ca=new WeakMap,no=new WeakMap;function Wt(n,e,t=!1){var i=new ph(n),r=t?Hr:0;function s(a,o){i.ensure(a,o)}vo(()=>{var a=!1;e((o,c=!0)=>{a=!0,s(c,o)}),a||s(!1,null)},r)}function Ri(n,e){return e}function mh(n,e,t){for(var i=[],r=e.length,s,a=e.length,o=0;o<r;o++){let u=e[o];vr(u,()=>{if(s){if(s.pending.delete(u),s.done.add(u),s.pending.size===0){var d=n.outrogroups;Eo(fa(s.done)),d.delete(s),d.size===0&&(n.outrogroups=null)}}else a-=1},!1)}if(a===0){var c=i.length===0&&t!==null;if(c){var l=t,f=l.parentNode;Jd(f),f.append(l),n.items.clear()}Eo(e,!c)}else s={pending:new Set(e),done:new Set},(n.outrogroups??(n.outrogroups=new Set)).add(s)}function Eo(n,e=!0){for(var t=0;t<n.length;t++)mn(n[t],e)}var gu;function Ci(n,e,t,i,r,s=null){var a=n,o=new Map;{var c=n;a=c.appendChild(Zi())}var l=null,f=Bc(()=>{var m=t();return At(m)?m:m==null?[]:fa(m)}),u,d=!0;function p(){v.fallback=l,_h(v,u,a,e,i),l!==null&&(u.length===0?(l.f&Xi)===0?xo(l):(l.f^=Xi,Fs(l,null,a)):vr(l,()=>{l=null}))}var _=vo(()=>{u=$(f);for(var m=u.length,h=new Set,b=vt,M=qc(),E=0;E<m;E+=1){var A=u[E],w=i(A,E),R=d?null:o.get(w);R?(R.v&&$r(R.v,A),R.i&&$r(R.i,E),M&&b.skipped_effects.delete(R.e)):(R=gh(o,d?a:gu??(gu=Zi()),A,w,E,r,e,t),d||(R.e.f|=Xi),o.set(w,R)),h.add(w)}if(m===0&&s&&!l&&(d?l=On(()=>s(a)):(l=On(()=>s(gu??(gu=Zi()))),l.f|=Xi)),!d)if(M){for(const[U,x]of o)h.has(U)||b.skipped_effects.add(x.e);b.oncommit(p),b.ondiscard(()=>{})}else p();$(f)}),v={effect:_,items:o,outrogroups:null,fallback:l};d=!1}function Ns(n){for(;n!==null&&(n.f&$n)===0;)n=n.next;return n}function _h(n,e,t,i,r){var U;var s=e.length,a=n.items,o=Ns(n.effect.first),c,l=null,f=[],u=[],d,p,_,v;for(v=0;v<s;v+=1){if(d=e[v],p=r(d,v),_=a.get(p).e,n.outrogroups!==null)for(const x of n.outrogroups)x.pending.delete(_),x.done.delete(_);if((_.f&Xi)!==0)if(_.f^=Xi,_===o)Fs(_,null,t);else{var m=l?l.next:o;_===n.effect.last&&(n.effect.last=_.prev),_.prev&&(_.prev.next=_.next),_.next&&(_.next.prev=_.prev),Qi(n,l,_),Qi(n,_,m),Fs(_,m,t),l=_,f=[],u=[],o=Ns(l.next);continue}if((_.f&An)!==0&&xo(_),_!==o){if(c!==void 0&&c.has(_)){if(f.length<u.length){var h=u[0],b;l=h.prev;var M=f[0],E=f[f.length-1];for(b=0;b<f.length;b+=1)Fs(f[b],h,t);for(b=0;b<u.length;b+=1)c.delete(u[b]);Qi(n,M.prev,E.next),Qi(n,l,M),Qi(n,E,h),o=h,l=E,v-=1,f=[],u=[]}else c.delete(_),Fs(_,o,t),Qi(n,_.prev,_.next),Qi(n,_,l===null?n.effect.first:l.next),Qi(n,l,_),l=_;continue}for(f=[],u=[];o!==null&&o!==_;)(c??(c=new Set)).add(o),u.push(o),o=Ns(o.next);if(o===null)continue}(_.f&Xi)===0&&f.push(_),l=_,o=Ns(_.next)}if(n.outrogroups!==null){for(const x of n.outrogroups)x.pending.size===0&&(Eo(fa(x.done)),(U=n.outrogroups)==null||U.delete(x));n.outrogroups.size===0&&(n.outrogroups=null)}if(o!==null||c!==void 0){var A=[];if(c!==void 0)for(_ of c)(_.f&An)===0&&A.push(_);for(;o!==null;)(o.f&An)===0&&o!==n.fallback&&A.push(o),o=Ns(o.next);var w=A.length;if(w>0){var R=s===0?t:null;mh(n,A,R)}}}function gh(n,e,t,i,r,s,a,o){var c=(a&Td)!==0?(a&wd)===0?jd(t,!1,!1):_r(t):null,l=(a&Ad)!==0?_r(r):null;return{v:c,i:l,e:On(()=>(s(e,c??t,l??r,o),()=>{n.delete(i)}))}}function Fs(n,e,t){if(n.nodes)for(var i=n.nodes.start,r=n.nodes.end,s=e&&(e.f&Xi)===0?e.nodes.start:t;i!==null;){var a=Ls(i);if(s.before(i),i===r)return;i=a}}function Qi(n,e,t){e===null?n.effect.first=t:e.next=t,t===null?n.effect.last=e:t.prev=e}function si(n,e,t=!1,i=!1,r=!1){var s=n,a="";We(()=>{var o=gt;if(a!==(a=e()??"")&&(o.nodes!==null&&(eu(o.nodes.start,o.nodes.end),o.nodes=null),a!=="")){var c=a+"";t?c=`<svg>${c}</svg>`:i&&(c=`<math>${c}</math>`);var l=_u(c);if((t||i)&&(l=Ki(l)),Sa(Ki(l),l.lastChild),t||i)for(;Ki(l);)s.before(Ki(l));else s.before(l)}})}const vu=[...` 	
\r\f \v\uFEFF`];function vh(n,e,t){var i=n==null?"":""+n;if(e&&(i=i?i+" "+e:e),t){for(var r in t)if(t[r])i=i?i+" "+r:r;else if(i.length)for(var s=r.length,a=0;(a=i.indexOf(r,a))>=0;){var o=a+s;(a===0||vu.includes(i[a-1]))&&(o===i.length||vu.includes(i[o]))?i=(a===0?"":i.substring(0,a))+i.substring(o+1):a=o}}return i===""?null:i}function xh(n,e){return n==null?null:String(n)}function Mr(n,e,t,i,r,s){var a=n.__className;if(a!==t||a===void 0){var o=vh(t,i,s);o==null?n.removeAttribute("class"):n.className=o,n.__className=t}else if(s&&r!==s)for(var c in s){var l=!!s[c];(r==null||l!==!!r[c])&&n.classList.toggle(c,l)}return s}function Os(n,e,t,i){var r=n.__style;if(r!==e){var s=xh(e);s==null?n.removeAttribute("style"):n.style.cssText=s,n.__style=e}return i}const Sh=Symbol("is custom element"),Mh=Symbol("is html");function Jt(n,e,t,i){var r=Eh(n);r[e]!==(r[e]=t)&&(e==="loading"&&(n[hd]=t),t==null?n.removeAttribute(e):typeof t!="string"&&xu(n).includes(e)?n[e]=t:n.setAttribute(e,t))}function zt(n,e,t){var i=st,r=gt;_n(null),Bn(null);try{e!=="style"&&(bo.has(n.getAttribute("is")||n.nodeName)||!customElements||customElements.get(n.getAttribute("is")||n.tagName.toLowerCase())?xu(n).includes(e):t&&typeof t=="object")?n[e]=t:Jt(n,e,t==null?t:String(t))}finally{_n(i),Bn(r)}}function Eh(n){return n.__attributes??(n.__attributes={[Sh]:n.nodeName.includes("-"),[Mh]:n.namespaceURI===Ud})}var bo=new Map;function xu(n){var e=n.getAttribute("is")||n.nodeName,t=bo.get(e);if(t)return t;bo.set(e,t=[]);for(var i,r=n,s=Element.prototype;s!==r;){i=od(r);for(var a in i)i[a].set&&t.push(a);r=Ec(r)}return t}function Su(n,e){return n===e||(n==null?void 0:n[Ps])===e}function er(n={},e,t,i){return ih(()=>{var r,s;return Kc(()=>{r=s,s=[],va(()=>{n!==t(...s)&&(e(n,...s),r&&Su(t(...r),n)&&e(null,...r))})}),()=>{mr(()=>{s&&Su(t(...s),n)&&e(null,...s)})}}),n}let Ea=!1;function bh(n){var e=Ea;try{return Ea=!1,[n(),Ea]}finally{Ea=e}}function je(n,e,t,i){var b;var r=(t&Pd)!==0,s=(t&Dd)!==0,a=i,o=!0,c=()=>(o&&(o=!1,a=s?va(i):i),a),l;if(r){var f=Ps in n||dd in n;l=((b=Gr(n,e))==null?void 0:b.set)??(f&&e in n?M=>n[e]=M:void 0)}var u,d=!1;r?[u,d]=bh(()=>n[e]):u=n[e],u===void 0&&i!==void 0&&(u=c(),l&&(Sd(),l(u)));var p;if(p=()=>{var M=n[e];return M===void 0?c():(o=!0,M)},(t&Cd)===0)return p;if(l){var _=n.$$legacy;return(function(M,E){return arguments.length>0?((!E||_||d)&&l(E?p():M),M):p()})}var v=!1,m=((t&Rd)!==0?ma:Bc)(()=>(v=!1,p()));r&&$(m);var h=gt;return(function(M,E){if(arguments.length>0){const A=E?$(m):r?jr(M):M;return Nt(m,A),v=!0,a!==void 0&&(a=A),M}return Ji&&v||(h.f&Ti)!==0?m.v:$(m)})}function tr(n){wn===null&&pd(),jc(()=>{const e=va(n);if(typeof e=="function")return e})}function Xt(n,e,t=[]){class i extends HTMLElement{constructor(){super(...arguments);qn(this,"_component",null)}connectedCallback(){if(this._component)return;this.innerHTML="";let a={};const o=this.getAttribute("id");if(o){const c=document.querySelector(`script[data-for="${o}"]`);if(c)try{a=JSON.parse(c.textContent||"{}"),c.remove()}catch(l){console.warn(`Failed to parse JSON props for #${o}:`,l)}}if(Object.keys(a).length===0)for(const c of t){const l=this.getAttribute(c);if(l!==null)try{a[c]=JSON.parse(l)}catch{a[c]=l}}this._component=fh(e,{target:this,props:a})}disconnectedCallback(){this._component&&(hh(this._component),this._component=null)}}customElements.define(n,i)}const yh="5";typeof window<"u"&&((id=window.__svelte??(window.__svelte={})).v??(id.v=new Set)).add(yh);var Th=Xe('<a class="c-header_link svelte-i67nal"><h3 class="svelte-i67nal"> </h3></a>'),Ah=Xe('<header data-nav-element="navbar" class="c-header_navbar svelte-i67nal"><div class="c-header_vignette svelte-i67nal"></div> <div class="c-header_inner svelte-i67nal"><button data-nav-element="overlay" aria-hidden="true" class="c-header_overlay svelte-i67nal"></button> <a aria-label="Go Back Home" class="c-header_logo svelte-i67nal">Austin Joseph</a> <ul role="list" class="c-header_drawer svelte-i67nal"><div class="c-header_edge svelte-i67nal"><div class="c-header_edge-shine svelte-i67nal"></div></div> <li class="c-header_links svelte-i67nal"></li></ul> <button data-nav-element="menu" class="c-header_menu svelte-i67nal"><div class="c-header_marker svelte-i67nal"></div> <div class="svelte-i67nal">Menu</div></button></div></header>');function wh(n,e){hn(e,!0);let t=je(e,"rootpath",3,"/"),i=je(e,"links",19,()=>[]),r=Kt("closed");function s(){Nt(r,$(r)==="open"?"closed":"open",!0),document.body.style.overflow=$(r)==="open"?"hidden":"",window.lenis&&($(r)==="open"?window.lenis.stop():window.lenis.start())}tr(()=>{function p(){Nt(r,"closed"),document.body.style.overflow=""}return window.addEventListener("navigation:exit",p),()=>window.removeEventListener("navigation:exit",p)});var a=Ah(),o=ot(pe(a),2),c=pe(o);c.__click=s;var l=ot(c,2),f=ot(l,2),u=ot(pe(f),2);Ci(u,21,i,Ri,(p,_)=>{var v=Th(),m=pe(v),h=pe(m);We(()=>{Jt(v,"href",$(_).href),tn(h,$(_).label)}),Ve(p,v)});var d=ot(f,2);d.__click=s,We(()=>{Jt(a,"data-nav-state",$(r)),Jt(l,"href",t())}),Ve(n,a),pn()}uh(["click"]);var Rh=Xe('<img width="24" height="24"/>'),Ch=Xe("<span> </span>"),Ph=Xe('<li><a class="c-footer_link svelte-1hhfvj" target="_blank" rel="noopener noreferrer"><!></a></li>'),Dh=Xe('<footer><div class="c-footer_vignette svelte-1hhfvj"></div> <div class="c-footer_component svelte-1hhfvj"><div class="c-footer_inner svelte-1hhfvj"><div class="c-footer_row copyright svelte-1hhfvj"><div class="u-text-secondary svelte-1hhfvj"><div class="text-sm svelte-1hhfvj">© <span> </span> Austin Joseph.</div></div></div> <div class="c-footer_location svelte-1hhfvj"><span class="c-footer_location-label svelte-1hhfvj">London, England</span> <span class="c-footer_location-time svelte-1hhfvj"> </span></div> <ul role="list" class="c-footer_row svelte-1hhfvj"></ul></div></div></footer>');function Lh(n,e){hn(e,!0);let t=je(e,"fixed",3,!1),i=je(e,"links",19,()=>[]);const r=new Date().getFullYear();let s=Kt("");function a(){Nt(s,new Date().toLocaleTimeString("en-GB",{timeZone:"Europe/London",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0}).toUpperCase(),!0)}jc(()=>{a();const E=setInterval(a,1e3);return()=>clearInterval(E)});var o=Dh();let c;var l=ot(pe(o),2),f=pe(l),u=pe(f),d=pe(u),p=pe(d),_=ot(pe(p)),v=pe(_),m=ot(u,2),h=ot(pe(m),2),b=pe(h),M=ot(m,2);Ci(M,21,i,Ri,(E,A)=>{var w=Ph(),R=pe(w),U=pe(R);{var x=P=>{var G=Rh();We(()=>{Jt(G,"src",$(A).icon),Jt(G,"alt",$(A).label)}),Ve(P,G)},y=P=>{var G=Ch(),I=pe(G);We(()=>tn(I,$(A).label)),Ve(P,G)};Wt(U,P=>{$(A).icon?P(x):P(y,!1)})}We(()=>{Jt(R,"href",$(A).href),Jt(R,"title",$(A).label)}),Ve(E,w)}),We(()=>{c=Mr(o,1,"c-footer svelte-1hhfvj",null,c,{abs:t()}),tn(v,r),tn(b,`[${$(s)??""}]`)}),Ve(n,o),pn()}var Ih=Xe('<h4 class="svelte-l43pdu"><!></h4>'),Uh=Xe('<div class="preloader svelte-l43pdu"><div class="preloader-canvas svelte-l43pdu"><c-drum></c-drum></div> <div class="preloader-footer svelte-l43pdu"><!> <div class="progress-row svelte-l43pdu"><div class="progress-bar svelte-l43pdu"><div class="progress-thumb svelte-l43pdu"></div></div> <p class="progress-pct svelte-l43pdu"> </p></div></div></div>',2);function Nh(n,e){hn(e,!0);let t=je(e,"title",3,""),i=je(e,"images",19,()=>[]),r=Kt(void 0),s=Kt(void 0),a=Kt(0);tr(()=>{const b=window.gsap;if(!b)return;document.body.style.cursor="wait";const M=5.16,E={value:0},A=()=>{Nt(a,E.value,!0)},w=b.timeline();return w.to(E,{value:12,duration:M*.15,ease:"power2.inOut",onUpdate:A}),w.to(E,{value:60,duration:M*.25,ease:"power2.inOut",onUpdate:A}),w.to(E,{value:84,duration:M*.3,ease:"power2.inOut",onUpdate:A}),w.to(E,{value:100,duration:M*.25,ease:"power2.inOut",onUpdate:A}),w.to($(s),{opacity:0,duration:.25,ease:"power2.out",delay:.15}),w.to($(r),{opacity:0,duration:.3,ease:"power2.out",onStart:()=>{document.body.style.cursor="",window.dispatchEvent(new CustomEvent("preloader-done"))},onComplete:()=>{var U;const R=(U=$(r))==null?void 0:U.closest("c-preloader");R&&R.remove()}}),()=>{w.kill()}});var o=Uh(),c=pe(o),l=pe(c);We(()=>zt(l,"images",JSON.stringify(i()))),Mr(l,1,"svelte-l43pdu");var f=ot(c,2),u=pe(f);{var d=b=>{var M=Ih(),E=pe(M);si(E,t),Ve(b,M)};Wt(u,b=>{t()&&b(d)})}var p=ot(u,2),_=pe(p),v=pe(_),m=ot(_,2),h=pe(m);er(f,b=>Nt(s,b),()=>$(s)),er(o,b=>Nt(r,b),()=>$(r)),We(b=>{Os(v,`width: ${$(a)??""}%`),tn(h,`${b??""}%`)},[()=>Math.round($(a))]),Ve(n,o),pn()}var Fh=Xe('<a class="slot-item svelte-bahvkp" data-slot-item=""> </a>'),Oh=Xe('<div class="slot svelte-bahvkp"><div class="slot-marker svelte-bahvkp"><div class="slot-marker-pip svelte-bahvkp"></div></div> <div class="slot-window svelte-bahvkp"><div class="slot-inner svelte-bahvkp" data-slot-inner=""></div></div></div>'),Bh=Xe('<main class="main svelte-bahvkp"><section class="section-hr svelte-bahvkp"><div class="container-xl svelte-bahvkp"><div class="inner svelte-bahvkp" data-canvas-map=""><div class="wrap svelte-bahvkp"><div class="text svelte-bahvkp"><!> <div class="heading svelte-bahvkp"><div class="eyebrow svelte-bahvkp"><div class="marker svelte-bahvkp"></div> <div class="eyebrow-text svelte-bahvkp"> </div></div> <h1 class="svelte-bahvkp"><!></h1> <c-button></c-button></div></div></div> <div class="track svelte-bahvkp"><c-strip></c-strip> <!></div></div></div></section></main>',2);function zh(n,e){hn(e,!0);let t=je(e,"eyebrow",3,"Available for freelance work"),i=je(e,"title",3,""),r=je(e,"buttonlabel",3,"Get in touch"),s=je(e,"buttonhref",3,"#"),a=je(e,"projects",19,()=>[]),o,c;const l="indexwheel-"+Math.random().toString(36).slice(2,8),f=32,u=f,d=.35,p=$i(()=>a().length),_=$i(()=>Array.from({length:3},()=>a()).flat());let v=-1,m=0;tr(()=>{if($(p)===0)return;c=o.closest(".section-hr");const re=c.querySelector("[data-slot-inner]"),ae=c.querySelectorAll("[data-slot-item]");if(!re||!ae.length)return;m=$(p);function de(Ue){return-Ue*f+u}gsap.set(re,{y:de(m)}),Re(m);function Re(Ue){ae.forEach((V,j)=>{const K=j-Ue;if(Math.abs(K)>3){gsap.set(V,{opacity:0});return}let _e=0;K===-1?_e=.2:K===0?_e=1:K===1?_e=.4:K===2?_e=.15:K===3&&(_e=.05),gsap.to(V,{opacity:_e,duration:d,ease:"power2.out",overwrite:!0})})}function me(){const Ue=(m%$(p)+$(p))%$(p),V=$(p)+Ue;m!==V&&(gsap.killTweensOf(re),gsap.set(re,{y:de(V)}),m=V)}function Fe(Ue){const V=Ue.detail,j=V==null?void 0:V.index;if(j==null||$(p)===0)return;if(v===-1){v=j,m=$(p)+j,gsap.set(re,{y:de(m)}),Re(m);return}let K=j-v;K>$(p)/2&&(K-=$(p)),K<-$(p)/2&&(K+=$(p)),v=j,(m+K<0||m+K>=$(p)*3)&&me(),m+=K,gsap.to(re,{y:de(m),duration:d,ease:"power2.out",overwrite:!0}),Re(m)}return o==null||o.addEventListener("strip:update",Fe),()=>{o==null||o.removeEventListener("strip:update",Fe),gsap.killTweensOf(re),gsap.killTweensOf(ae)}});var h=Bh(),b=pe(h),M=pe(b),E=pe(M),A=pe(E),w=pe(A),R=pe(w);{var U=re=>{var ae=Oh(),de=pe(ae);Os(de,"height: 32px; margin-top: 32px");var Re=ot(de,2),me=pe(Re);Ci(me,21,()=>$(_),Ri,(Fe,Ue)=>{var V=Fh();Os(V,"height: 32px");var j=pe(V);We(()=>{Jt(V,"href",$(Ue).url),tn(j,$(Ue).title)}),Ve(Fe,V)}),Ve(re,ae)};Wt(R,re=>{a().length&&re(U)})}var x=ot(R,2),y=pe(x),P=ot(pe(y),2),G=pe(P),I=ot(y,2),O=pe(I);si(O,i);var X=ot(I,2);We(()=>zt(X,"label",r())),We(()=>zt(X,"href",s())),zt(X,"active",!0);var F=ot(A,2),z=pe(F);We(()=>zt(z,"id",l));var te=ot(z,2);si(te,()=>`<script type="application/json" data-for="${l}">${JSON.stringify({projects:a()}).replace(/<\//g,"<\\/")}<\/script>`),er(F,re=>o=re,()=>o),We(()=>tn(G,t())),Ve(n,h),pn()}var Vh=Xe("<c-helix></c-helix> <!>",3),Gh=Xe("<b-header></b-header> <!>",3),Hh=Xe("<b-text></b-text> <!>",3),kh=Xe('<section class="section ab svelte-1ijkaem"><div class="container-xl py-lg"><div class="l-inner svelte-1ijkaem"><div class="col-img svelte-1ijkaem"><!></div> <div class="col-body svelte-1ijkaem"></div></div></div></section>');function Wh(n,e){hn(e,!0);let t=je(e,"images",19,()=>[]),i=je(e,"items",19,()=>[]);var r=kh(),s=pe(r),a=pe(s),o=pe(a),c=pe(o);{var l=u=>{const d=$i(()=>`ab-helix-${Math.random().toString(36).slice(2,8)}`);var p=Vh(),_=gr(p);We(()=>zt(_,"id",$(d)));var v=ot(_,2);si(v,()=>`<script type="application/json" data-for="${$(d)}">${JSON.stringify({images:t()})}<\/script>`),Ve(u,p)};Wt(c,u=>{t().length&&u(l)})}var f=ot(o,2);Ci(f,21,i,Ri,(u,d,p)=>{const _=$i(()=>`ab-${$(d).type}-${p}`);var v=Ma(),m=gr(v);{var h=M=>{var E=Gh(),A=gr(E);We(()=>zt(A,"id",$(_)));var w=ot(A,2);si(w,()=>`<script type="application/json" data-for="${$(_)}">${JSON.stringify({title:$(d).title,description:$(d).description,layout:$(d).layout})}<\/script>`),Ve(M,E)},b=M=>{var E=Ma(),A=gr(E);{var w=R=>{var U=Hh(),x=gr(U);We(()=>zt(x,"id",$(_)));var y=ot(x,2);si(y,()=>`<script type="application/json" data-for="${$(_)}">${JSON.stringify({columns:$(d).columns,items:$(d).items})}<\/script>`),Ve(R,U)};Wt(A,R=>{$(d).type==="b-text"&&R(w)},!0)}Ve(M,E)};Wt(m,M=>{$(d).type==="b-header"?M(h):M(b,!1)})}Ve(u,v)}),Ve(n,r),pn()}var Xh=Xe('<div class="s-404_message svelte-n2mvd"><p class="svelte-n2mvd"> </p></div>'),Yh=Xe('<div class="s-404_section svelte-n2mvd"><div class="s-404_container svelte-n2mvd"><div class="s-404_inner svelte-n2mvd"><div class="s-404_heading svelte-n2mvd"><div class="s-404_title svelte-n2mvd"><h1 class="svelte-n2mvd"> </h1></div> <!></div> <c-button></c-button></div></div></div>',2);function qh(n,e){let t=je(e,"title",3,"404"),i=je(e,"message",3,""),r=je(e,"buttonlabel",3,"Go back Home"),s=je(e,"buttonhref",3,"/");var a=Yh(),o=pe(a),c=pe(o),l=pe(c),f=pe(l),u=pe(f),d=pe(u),p=ot(f,2);{var _=m=>{var h=Xh(),b=pe(h),M=pe(b);We(()=>tn(M,i())),Ve(m,h)};Wt(p,m=>{i()&&m(_)})}var v=ot(l,2);We(()=>zt(v,"href",s())),We(()=>zt(v,"label",r())),zt(v,"active","true"),We(()=>tn(d,t())),Ve(n,a)}var $h=Xe('<div><div class="c-button_motion svelte-er4ugn"><div class="c-button_glow svelte-er4ugn"></div> <div class="c-button_mask svelte-er4ugn"><div class="c-button_cone svelte-er4ugn"></div></div></div> <div class="c-button_orb svelte-er4ugn"><div class="c-button_border svelte-er4ugn"></div></div> <a class="c-button_wrapper svelte-er4ugn"><div class="c-button_label svelte-er4ugn"> </div></a></div>');function jh(n,e){let t=je(e,"href",3,"#"),i=je(e,"label",3,"Button"),r=je(e,"active",3,!1);var s=$h(),a=ot(pe(s),4),o=pe(a),c=pe(o);We(()=>{Mr(s,1,`c-button ${r()?"c-button_active":""}`,"svelte-er4ugn"),Jt(a,"href",t()),tn(c,i())}),Ve(n,s)}var Zh=Xe('<img alt="" loading="eager" class="svelte-ag87v9"/>'),Kh=Xe('<img alt="" loading="eager" class="svelte-ag87v9"/>'),Jh=Xe('<a class="c-indexcard svelte-ag87v9"><div class="c-indexcard_overlay svelte-ag87v9"><!></div> <div class="c-indexcard_bg svelte-ag87v9"><!></div> <div class="c-indexcard_text svelte-ag87v9"><div class="c-indexcard_heading svelte-ag87v9"><h4> </h4></div></div></a>');function Qh(n,e){let t=je(e,"href",3,"#"),i=je(e,"title",3,""),r=je(e,"backgroundimage",3,""),s=je(e,"overlayimage",3,"");var a=Jh(),o=pe(a),c=pe(o);{var l=h=>{var b=Zh();We(()=>Jt(b,"src",s())),Ve(h,b)};Wt(c,h=>{s()&&h(l)})}var f=ot(o,2),u=pe(f);{var d=h=>{var b=Kh();We(()=>Jt(b,"src",r())),Ve(h,b)};Wt(u,h=>{r()&&h(d)})}var p=ot(f,2),_=pe(p),v=pe(_),m=pe(v);We(()=>{Jt(a,"href",t()),tn(m,i())}),Ve(n,a)}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yo="182",ep=0,Mu=1,tp=2,ba=1,np=2,Bs=3,nr=0,vn=1,xn=2,Pi=0,Kr=1,Eu=2,bu=3,yu=4,ip=5,Er=100,rp=101,sp=102,ap=103,op=104,lp=200,cp=201,up=202,fp=203,To=204,Ao=205,dp=206,hp=207,pp=208,mp=209,_p=210,gp=211,vp=212,xp=213,Sp=214,wo=0,Ro=1,Co=2,Jr=3,Po=4,Do=5,Lo=6,Io=7,Tu=0,Mp=1,Ep=2,cn=0,Au=1,wu=2,Ru=3,Cu=4,Pu=5,Du=6,Lu=7,Iu=300,br=301,Qr=302,Uo=303,No=304,ya=306,Fo=1e3,Di=1001,Oo=1002,Qt=1003,bp=1004,Ta=1005,yt=1006,Bo=1007,yr=1008,Cn=1009,Uu=1010,Nu=1011,zs=1012,zo=1013,ai=1014,oi=1015,Li=1016,Vo=1017,Go=1018,Vs=1020,Fu=35902,Ou=35899,Bu=1021,zu=1022,Jn=1023,Ii=1026,Tr=1027,Vu=1028,Ho=1029,es=1030,ko=1031,Wo=1033,Aa=33776,wa=33777,Ra=33778,Ca=33779,Xo=35840,Yo=35841,qo=35842,$o=35843,jo=36196,Zo=37492,Ko=37496,Jo=37488,Qo=37489,el=37490,tl=37491,nl=37808,il=37809,rl=37810,sl=37811,al=37812,ol=37813,ll=37814,cl=37815,ul=37816,fl=37817,dl=37818,hl=37819,pl=37820,ml=37821,_l=36492,gl=36494,vl=36495,xl=36283,Sl=36284,Ml=36285,El=36286,yp=3200,Gu=0,Tp=1,ir="",en="srgb",ts="srgb-linear",Pa="linear",xt="srgb",ns=7680,Hu=519,Ap=512,wp=513,Rp=514,bl=515,Cp=516,Pp=517,yl=518,Dp=519,ku=35044,Wu="300 es",li=2e3,Da=2001;function Xu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Gs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Lp(){const n=Gs("canvas");return n.style.display="block",n}const Yu={};function qu(...n){const e="THREE."+n.shift();console.log(e,...n)}function Ye(...n){const e="THREE."+n.shift();console.warn(e,...n)}function ct(...n){const e="THREE."+n.shift();console.error(e,...n)}function Hs(...n){const e=n.join(" ");e in Yu||(Yu[e]=!0,Ye(...n))}function Ip(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}class is{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Tl=Math.PI/180,Al=180/Math.PI;function ks(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function lt(n,e,t){return Math.max(e,Math.min(t,n))}function Up(n,e){return(n%e+e)%e}function wl(n,e,t){return(1-t)*n+t*e}function Ws(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Sn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xs{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],f=i[r+2],u=i[r+3],d=s[a+0],p=s[a+1],_=s[a+2],v=s[a+3];if(o<=0){e[t+0]=c,e[t+1]=l,e[t+2]=f,e[t+3]=u;return}if(o>=1){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=v;return}if(u!==v||c!==d||l!==p||f!==_){let m=c*d+l*p+f*_+u*v;m<0&&(d=-d,p=-p,_=-_,v=-v,m=-m);let h=1-o;if(m<.9995){const b=Math.acos(m),M=Math.sin(b);h=Math.sin(h*b)/M,o=Math.sin(o*b)/M,c=c*h+d*o,l=l*h+p*o,f=f*h+_*o,u=u*h+v*o}else{c=c*h+d*o,l=l*h+p*o,f=f*h+_*o,u=u*h+v*o;const b=1/Math.sqrt(c*c+l*l+f*f+u*u);c*=b,l*=b,f*=b,u*=b}}e[t]=c,e[t+1]=l,e[t+2]=f,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],f=i[r+3],u=s[a],d=s[a+1],p=s[a+2],_=s[a+3];return e[t]=o*_+f*u+c*p-l*d,e[t+1]=c*_+f*d+l*u-o*p,e[t+2]=l*_+f*p+o*d-c*u,e[t+3]=f*_-o*u-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),f=o(r/2),u=o(s/2),d=c(i/2),p=c(r/2),_=c(s/2);switch(a){case"XYZ":this._x=d*f*u+l*p*_,this._y=l*p*u-d*f*_,this._z=l*f*_+d*p*u,this._w=l*f*u-d*p*_;break;case"YXZ":this._x=d*f*u+l*p*_,this._y=l*p*u-d*f*_,this._z=l*f*_-d*p*u,this._w=l*f*u+d*p*_;break;case"ZXY":this._x=d*f*u-l*p*_,this._y=l*p*u+d*f*_,this._z=l*f*_+d*p*u,this._w=l*f*u-d*p*_;break;case"ZYX":this._x=d*f*u-l*p*_,this._y=l*p*u+d*f*_,this._z=l*f*_-d*p*u,this._w=l*f*u+d*p*_;break;case"YZX":this._x=d*f*u+l*p*_,this._y=l*p*u+d*f*_,this._z=l*f*_-d*p*u,this._w=l*f*u-d*p*_;break;case"XZY":this._x=d*f*u-l*p*_,this._y=l*p*u-d*f*_,this._z=l*f*_+d*p*u,this._w=l*f*u+d*p*_;break;default:Ye("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],f=t[6],u=t[10],d=i+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(f-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(i>o&&i>u){const p=2*Math.sqrt(1+i-o-u);this._w=(f-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>u){const p=2*Math.sqrt(1+o-i-u);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+f)/p}else{const p=2*Math.sqrt(1+u-i-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,f=t._w;return this._x=i*f+a*o+r*l-s*c,this._y=r*f+a*c+s*o-i*l,this._z=s*f+a*l+i*c-r*o,this._w=a*f-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),f=Math.sin(l);c=Math.sin(c*l)/f,t=Math.sin(t*l)/f,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($u.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($u.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),f=2*(o*t-s*r),u=2*(s*i-a*t);return this.x=t+c*l+a*u-o*f,this.y=i+c*f+o*l-s*u,this.z=r+c*u+s*f-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Rl.copy(this).projectOnVector(e),this.sub(Rl)}reflect(e){return this.sub(Rl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rl=new H,$u=new Xs;class Ze{constructor(e,t,i,r,s,a,o,c,l){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=t,f[4]=s,f[5]=c,f[6]=i,f[7]=a,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],f=i[4],u=i[7],d=i[2],p=i[5],_=i[8],v=r[0],m=r[3],h=r[6],b=r[1],M=r[4],E=r[7],A=r[2],w=r[5],R=r[8];return s[0]=a*v+o*b+c*A,s[3]=a*m+o*M+c*w,s[6]=a*h+o*E+c*R,s[1]=l*v+f*b+u*A,s[4]=l*m+f*M+u*w,s[7]=l*h+f*E+u*R,s[2]=d*v+p*b+_*A,s[5]=d*m+p*M+_*w,s[8]=d*h+p*E+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8];return t*a*f-t*o*l-i*s*f+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8],u=f*a-o*l,d=o*c-f*s,p=l*s-a*c,_=t*u+i*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=u*v,e[1]=(r*l-f*i)*v,e[2]=(o*i-r*a)*v,e[3]=d*v,e[4]=(f*t-r*c)*v,e[5]=(r*s-o*t)*v,e[6]=p*v,e[7]=(i*c-l*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Cl.makeScale(e,t)),this}rotate(e){return this.premultiply(Cl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Cl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Cl=new Ze,ju=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zu=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Np(){const n={enabled:!0,workingColorSpace:ts,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===xt&&(r.r=Ui(r.r),r.g=Ui(r.g),r.b=Ui(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xt&&(r.r=rs(r.r),r.g=rs(r.g),r.b=rs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ir?Pa:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Hs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Hs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ts]:{primaries:e,whitePoint:i,transfer:Pa,toXYZ:ju,fromXYZ:Zu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:en},outputColorSpaceConfig:{drawingBufferColorSpace:en}},[en]:{primaries:e,whitePoint:i,transfer:xt,toXYZ:ju,fromXYZ:Zu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:en}}}),n}const ut=Np();function Ui(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function rs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ss;class Fp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ss===void 0&&(ss=Gs("canvas")),ss.width=e.width,ss.height=e.height;const r=ss.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ss}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Gs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ui(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ui(t[i]/255)*255):t[i]=Ui(t[i]);return{data:t,width:e.width,height:e.height}}else return Ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Op=0;class Pl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=ks(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Dl(r[a].image)):s.push(Dl(r[a]))}else s=Dl(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Dl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Fp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ye("Texture: Unable to serialize Texture."),{})}let Bp=0;const Ll=new H;class rn extends is{constructor(e=rn.DEFAULT_IMAGE,t=rn.DEFAULT_MAPPING,i=Di,r=Di,s=yt,a=yr,o=Jn,c=Cn,l=rn.DEFAULT_ANISOTROPY,f=ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=ks(),this.name="",this.source=new Pl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ll).x}get height(){return this.source.getSize(Ll).y}get depth(){return this.source.getSize(Ll).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ye(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ye(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Iu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fo:e.x=e.x-Math.floor(e.x);break;case Di:e.x=e.x<0?0:1;break;case Oo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fo:e.y=e.y-Math.floor(e.y);break;case Di:e.y=e.y<0?0:1;break;case Oo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null,rn.DEFAULT_MAPPING=Iu,rn.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,t=0,i=0,r=1){Pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],f=c[4],u=c[8],d=c[1],p=c[5],_=c[9],v=c[2],m=c[6],h=c[10];if(Math.abs(f-d)<.01&&Math.abs(u-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(f+d)<.1&&Math.abs(u+v)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,E=(p+1)/2,A=(h+1)/2,w=(f+d)/4,R=(u+v)/4,U=(_+m)/4;return M>E&&M>A?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=w/i,s=R/i):E>A?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=w/r,s=U/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=R/s,r=U/s),this.set(i,r,s,t),this}let b=Math.sqrt((m-_)*(m-_)+(u-v)*(u-v)+(d-f)*(d-f));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(u-v)/b,this.z=(d-f)/b,this.w=Math.acos((l+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this.w=lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this.w=lt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zp extends is{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new rn(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:yt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Pl(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ci extends zp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ku extends rn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vp extends rn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ys{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Qn):Qn.fromBufferAttribute(s,a),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),La.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),La.copy(i.boundingBox)),La.applyMatrix4(e.matrixWorld),this.union(La)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qs),Ia.subVectors(this.max,qs),as.subVectors(e.a,qs),os.subVectors(e.b,qs),ls.subVectors(e.c,qs),rr.subVectors(os,as),sr.subVectors(ls,os),Ar.subVectors(as,ls);let t=[0,-rr.z,rr.y,0,-sr.z,sr.y,0,-Ar.z,Ar.y,rr.z,0,-rr.x,sr.z,0,-sr.x,Ar.z,0,-Ar.x,-rr.y,rr.x,0,-sr.y,sr.x,0,-Ar.y,Ar.x,0];return!Il(t,as,os,ls,Ia)||(t=[1,0,0,0,1,0,0,0,1],!Il(t,as,os,ls,Ia))?!1:(Ua.crossVectors(rr,sr),t=[Ua.x,Ua.y,Ua.z],Il(t,as,os,ls,Ia))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ni=[new H,new H,new H,new H,new H,new H,new H,new H],Qn=new H,La=new Ys,as=new H,os=new H,ls=new H,rr=new H,sr=new H,Ar=new H,qs=new H,Ia=new H,Ua=new H,wr=new H;function Il(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){wr.fromArray(n,s);const o=r.x*Math.abs(wr.x)+r.y*Math.abs(wr.y)+r.z*Math.abs(wr.z),c=e.dot(wr),l=t.dot(wr),f=i.dot(wr);if(Math.max(-Math.max(c,l,f),Math.min(c,l,f))>o)return!1}return!0}const Gp=new Ys,$s=new H,Ul=new H;class Nl{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Gp.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$s.subVectors(e,this.center);const t=$s.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector($s,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ul.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($s.copy(e.center).add(Ul)),this.expandByPoint($s.copy(e.center).sub(Ul))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Fi=new H,Fl=new H,Na=new H,ar=new H,Ol=new H,Fa=new H,Bl=new H;class Ju{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fi.copy(this.origin).addScaledVector(this.direction,t),Fi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Fl.copy(e).add(t).multiplyScalar(.5),Na.copy(t).sub(e).normalize(),ar.copy(this.origin).sub(Fl);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Na),o=ar.dot(this.direction),c=-ar.dot(Na),l=ar.lengthSq(),f=Math.abs(1-a*a);let u,d,p,_;if(f>0)if(u=a*c-o,d=a*o-c,_=s*f,u>=0)if(d>=-_)if(d<=_){const v=1/f;u*=v,d*=v,p=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d<=-_?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-c),s),p=-u*u+d*(d+2*c)+l):d<=_?(u=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+l):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-c),s),p=-u*u+d*(d+2*c)+l);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Fl).addScaledVector(Na,d),p}intersectSphere(e,t){Fi.subVectors(e.center,this.origin);const i=Fi.dot(this.direction),r=Fi.dot(Fi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,f=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),f>=0?(s=(e.min.y-d.y)*f,a=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,a=(e.min.y-d.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Fi)!==null}intersectTriangle(e,t,i,r,s){Ol.subVectors(t,e),Fa.subVectors(i,e),Bl.crossVectors(Ol,Fa);let a=this.direction.dot(Bl),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ar.subVectors(this.origin,e);const c=o*this.direction.dot(Fa.crossVectors(ar,Fa));if(c<0)return null;const l=o*this.direction.dot(Ol.cross(ar));if(l<0||c+l>a)return null;const f=-o*ar.dot(Bl);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rt{constructor(e,t,i,r,s,a,o,c,l,f,u,d,p,_,v,m){Rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,f,u,d,p,_,v,m)}set(e,t,i,r,s,a,o,c,l,f,u,d,p,_,v,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=c,h[2]=l,h[6]=f,h[10]=u,h[14]=d,h[3]=p,h[7]=_,h[11]=v,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/cs.setFromMatrixColumn(e,0).length(),s=1/cs.setFromMatrixColumn(e,1).length(),a=1/cs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),f=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=a*f,p=a*u,_=o*f,v=o*u;t[0]=c*f,t[4]=-c*u,t[8]=l,t[1]=p+_*l,t[5]=d-v*l,t[9]=-o*c,t[2]=v-d*l,t[6]=_+p*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*f,p=c*u,_=l*f,v=l*u;t[0]=d+v*o,t[4]=_*o-p,t[8]=a*l,t[1]=a*u,t[5]=a*f,t[9]=-o,t[2]=p*o-_,t[6]=v+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*f,p=c*u,_=l*f,v=l*u;t[0]=d-v*o,t[4]=-a*u,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*f,t[9]=v-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*f,p=a*u,_=o*f,v=o*u;t[0]=c*f,t[4]=_*l-p,t[8]=d*l+v,t[1]=c*u,t[5]=v*l+d,t[9]=p*l-_,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,p=a*l,_=o*c,v=o*l;t[0]=c*f,t[4]=v-d*u,t[8]=_*u+p,t[1]=u,t[5]=a*f,t[9]=-o*f,t[2]=-l*f,t[6]=p*u+_,t[10]=d-v*u}else if(e.order==="XZY"){const d=a*c,p=a*l,_=o*c,v=o*l;t[0]=c*f,t[4]=-u,t[8]=l*f,t[1]=d*u+v,t[5]=a*f,t[9]=p*u-_,t[2]=_*u-p,t[6]=o*f,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hp,e,kp)}lookAt(e,t,i){const r=this.elements;return Pn.subVectors(e,t),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),or.crossVectors(i,Pn),or.lengthSq()===0&&(Math.abs(i.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),or.crossVectors(i,Pn)),or.normalize(),Oa.crossVectors(Pn,or),r[0]=or.x,r[4]=Oa.x,r[8]=Pn.x,r[1]=or.y,r[5]=Oa.y,r[9]=Pn.y,r[2]=or.z,r[6]=Oa.z,r[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],f=i[1],u=i[5],d=i[9],p=i[13],_=i[2],v=i[6],m=i[10],h=i[14],b=i[3],M=i[7],E=i[11],A=i[15],w=r[0],R=r[4],U=r[8],x=r[12],y=r[1],P=r[5],G=r[9],I=r[13],O=r[2],X=r[6],F=r[10],z=r[14],te=r[3],re=r[7],ae=r[11],de=r[15];return s[0]=a*w+o*y+c*O+l*te,s[4]=a*R+o*P+c*X+l*re,s[8]=a*U+o*G+c*F+l*ae,s[12]=a*x+o*I+c*z+l*de,s[1]=f*w+u*y+d*O+p*te,s[5]=f*R+u*P+d*X+p*re,s[9]=f*U+u*G+d*F+p*ae,s[13]=f*x+u*I+d*z+p*de,s[2]=_*w+v*y+m*O+h*te,s[6]=_*R+v*P+m*X+h*re,s[10]=_*U+v*G+m*F+h*ae,s[14]=_*x+v*I+m*z+h*de,s[3]=b*w+M*y+E*O+A*te,s[7]=b*R+M*P+E*X+A*re,s[11]=b*U+M*G+E*F+A*ae,s[15]=b*x+M*I+E*z+A*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],f=e[2],u=e[6],d=e[10],p=e[14],_=e[3],v=e[7],m=e[11],h=e[15],b=c*p-l*d,M=o*p-l*u,E=o*d-c*u,A=a*p-l*f,w=a*d-c*f,R=a*u-o*f;return t*(v*b-m*M+h*E)-i*(_*b-m*A+h*w)+r*(_*M-v*A+h*R)-s*(_*E-v*w+m*R)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8],u=e[9],d=e[10],p=e[11],_=e[12],v=e[13],m=e[14],h=e[15],b=u*m*l-v*d*l+v*c*p-o*m*p-u*c*h+o*d*h,M=_*d*l-f*m*l-_*c*p+a*m*p+f*c*h-a*d*h,E=f*v*l-_*u*l+_*o*p-a*v*p-f*o*h+a*u*h,A=_*u*c-f*v*c-_*o*d+a*v*d+f*o*m-a*u*m,w=t*b+i*M+r*E+s*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=b*R,e[1]=(v*d*s-u*m*s-v*r*p+i*m*p+u*r*h-i*d*h)*R,e[2]=(o*m*s-v*c*s+v*r*l-i*m*l-o*r*h+i*c*h)*R,e[3]=(u*c*s-o*d*s-u*r*l+i*d*l+o*r*p-i*c*p)*R,e[4]=M*R,e[5]=(f*m*s-_*d*s+_*r*p-t*m*p-f*r*h+t*d*h)*R,e[6]=(_*c*s-a*m*s-_*r*l+t*m*l+a*r*h-t*c*h)*R,e[7]=(a*d*s-f*c*s+f*r*l-t*d*l-a*r*p+t*c*p)*R,e[8]=E*R,e[9]=(_*u*s-f*v*s-_*i*p+t*v*p+f*i*h-t*u*h)*R,e[10]=(a*v*s-_*o*s+_*i*l-t*v*l-a*i*h+t*o*h)*R,e[11]=(f*o*s-a*u*s-f*i*l+t*u*l+a*i*p-t*o*p)*R,e[12]=A*R,e[13]=(f*v*r-_*u*r+_*i*d-t*v*d-f*i*m+t*u*m)*R,e[14]=(_*o*r-a*v*r-_*i*c+t*v*c+a*i*m-t*o*m)*R,e[15]=(a*u*r-f*o*r+f*i*c-t*u*c-a*i*d+t*o*d)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,f=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,f*o+i,f*c-r*a,0,l*c-r*o,f*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,f=a+a,u=o+o,d=s*l,p=s*f,_=s*u,v=a*f,m=a*u,h=o*u,b=c*l,M=c*f,E=c*u,A=i.x,w=i.y,R=i.z;return r[0]=(1-(v+h))*A,r[1]=(p+E)*A,r[2]=(_-M)*A,r[3]=0,r[4]=(p-E)*w,r[5]=(1-(d+h))*w,r[6]=(m+b)*w,r[7]=0,r[8]=(_+M)*R,r[9]=(m-b)*R,r[10]=(1-(d+v))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return i.set(1,1,1),t.identity(),this;let s=cs.set(r[0],r[1],r[2]).length();const a=cs.set(r[4],r[5],r[6]).length(),o=cs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),ei.copy(this);const l=1/s,f=1/a,u=1/o;return ei.elements[0]*=l,ei.elements[1]*=l,ei.elements[2]*=l,ei.elements[4]*=f,ei.elements[5]*=f,ei.elements[6]*=f,ei.elements[8]*=u,ei.elements[9]*=u,ei.elements[10]*=u,t.setFromRotationMatrix(ei),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=li,c=!1){const l=this.elements,f=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),p=(i+r)/(i-r);let _,v;if(c)_=s/(a-s),v=a*s/(a-s);else if(o===li)_=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===Da)_=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=f,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=li,c=!1){const l=this.elements,f=2/(t-e),u=2/(i-r),d=-(t+e)/(t-e),p=-(i+r)/(i-r);let _,v;if(c)_=1/(a-s),v=a/(a-s);else if(o===li)_=-2/(a-s),v=-(a+s)/(a-s);else if(o===Da)_=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=f,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=_,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const cs=new H,ei=new Rt,Hp=new H(0,0,0),kp=new H(1,1,1),or=new H,Oa=new H,Pn=new H,Qu=new Rt,ef=new Xs;class ui{constructor(e=0,t=0,i=0,r=ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],f=r[9],u=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-lt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(lt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:Ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Qu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ef.setFromEuler(this),this.setFromQuaternion(ef,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ui.DEFAULT_ORDER="XYZ";class zl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Wp=0;const tf=new H,us=new Xs,Oi=new Rt,Ba=new H,js=new H,Xp=new H,Yp=new Xs,nf=new H(1,0,0),rf=new H(0,1,0),sf=new H(0,0,1),af={type:"added"},qp={type:"removed"},fs={type:"childadded",child:null},Vl={type:"childremoved",child:null};class sn extends is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wp++}),this.uuid=ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const e=new H,t=new ui,i=new Xs,r=new H(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Rt},normalMatrix:{value:new Ze}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.multiply(us),this}rotateOnWorldAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.premultiply(us),this}rotateX(e){return this.rotateOnAxis(nf,e)}rotateY(e){return this.rotateOnAxis(rf,e)}rotateZ(e){return this.rotateOnAxis(sf,e)}translateOnAxis(e,t){return tf.copy(e).applyQuaternion(this.quaternion),this.position.add(tf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nf,e)}translateY(e){return this.translateOnAxis(rf,e)}translateZ(e){return this.translateOnAxis(sf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ba.copy(e):Ba.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(js,Ba,this.up):Oi.lookAt(Ba,js,this.up),this.quaternion.setFromRotationMatrix(Oi),r&&(Oi.extractRotation(r.matrixWorld),us.setFromRotationMatrix(Oi),this.quaternion.premultiply(us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(af),fs.child=e,this.dispatchEvent(fs),fs.child=null):ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qp),Vl.child=e,this.dispatchEvent(Vl),Vl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(af),fs.child=e,this.dispatchEvent(fs),fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,e,Xp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,Yp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,f=c.length;l<f;l++){const u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),f=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),f.length>0&&(i.images=f),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const c=[];for(const l in o){const f=o[l];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}sn.DEFAULT_UP=new H(0,1,0),sn.DEFAULT_MATRIX_AUTO_UPDATE=!0,sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ti=new H,Bi=new H,Gl=new H,zi=new H,ds=new H,hs=new H,of=new H,Hl=new H,kl=new H,Wl=new H,Xl=new Pt,Yl=new Pt,ql=new Pt;class ni{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ti.subVectors(e,t),r.cross(ti);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ti.subVectors(r,t),Bi.subVectors(i,t),Gl.subVectors(e,t);const a=ti.dot(ti),o=ti.dot(Bi),c=ti.dot(Gl),l=Bi.dot(Bi),f=Bi.dot(Gl),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,p=(l*c-o*f)*d,_=(a*f-o*c)*d;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,zi)===null?!1:zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,zi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,zi.x),c.addScaledVector(a,zi.y),c.addScaledVector(o,zi.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return Xl.setScalar(0),Yl.setScalar(0),ql.setScalar(0),Xl.fromBufferAttribute(e,t),Yl.fromBufferAttribute(e,i),ql.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Xl,s.x),a.addScaledVector(Yl,s.y),a.addScaledVector(ql,s.z),a}static isFrontFacing(e,t,i,r){return ti.subVectors(i,t),Bi.subVectors(e,t),ti.cross(Bi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ti.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),ti.cross(Bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ni.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return ni.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;ds.subVectors(r,i),hs.subVectors(s,i),Hl.subVectors(e,i);const c=ds.dot(Hl),l=hs.dot(Hl);if(c<=0&&l<=0)return t.copy(i);kl.subVectors(e,r);const f=ds.dot(kl),u=hs.dot(kl);if(f>=0&&u<=f)return t.copy(r);const d=c*u-f*l;if(d<=0&&c>=0&&f<=0)return a=c/(c-f),t.copy(i).addScaledVector(ds,a);Wl.subVectors(e,s);const p=ds.dot(Wl),_=hs.dot(Wl);if(_>=0&&p<=_)return t.copy(s);const v=p*l-c*_;if(v<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(i).addScaledVector(hs,o);const m=f*_-p*u;if(m<=0&&u-f>=0&&p-_>=0)return of.subVectors(s,r),o=(u-f)/(u-f+(p-_)),t.copy(r).addScaledVector(of,o);const h=1/(m+v+d);return a=v*h,o=d*h,t.copy(i).addScaledVector(ds,a).addScaledVector(hs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const lf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},lr={h:0,s:0,l:0},za={h:0,s:0,l:0};function $l(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ht{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=en){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=ut.workingColorSpace){return this.r=e,this.g=t,this.b=i,ut.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=ut.workingColorSpace){if(e=Up(e,1),t=lt(t,0,1),i=lt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=$l(a,s,e+1/3),this.g=$l(a,s,e),this.b=$l(a,s,e-1/3)}return ut.colorSpaceToWorking(this,r),this}setStyle(e,t=en){function i(s){s!==void 0&&parseFloat(s)<1&&Ye("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ye("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=en){const i=lf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}copyLinearToSRGB(e){return this.r=rs(e.r),this.g=rs(e.g),this.b=rs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=en){return ut.workingToColorSpace(an.copy(this),e),Math.round(lt(an.r*255,0,255))*65536+Math.round(lt(an.g*255,0,255))*256+Math.round(lt(an.b*255,0,255))}getHexString(e=en){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace(an.copy(this),t);const i=an.r,r=an.g,s=an.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const f=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=f<=.5?u/(a+o):u/(2-a-o),a){case i:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-i)/u+2;break;case s:c=(i-r)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=f,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace(an.copy(this),t),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=en){ut.workingToColorSpace(an.copy(this),e);const t=an.r,i=an.g,r=an.b;return e!==en?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(lr),this.setHSL(lr.h+e,lr.s+t,lr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(lr),e.getHSL(za);const i=wl(lr.h,za.h,t),r=wl(lr.s,za.s,t),s=wl(lr.l,za.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const an=new ht;ht.NAMES=lf;let $p=0;class Zs extends is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=ks(),this.name="",this.type="Material",this.blending=Kr,this.side=nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=To,this.blendDst=Ao,this.blendEquation=Er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=Jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ns,this.stencilZFail=ns,this.stencilZPass=ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ye(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ye(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Kr&&(i.blending=this.blending),this.side!==nr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==To&&(i.blendSrc=this.blendSrc),this.blendDst!==Ao&&(i.blendDst=this.blendDst),this.blendEquation!==Er&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Jr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ns&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ns&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ns&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class cf extends Zs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=Tu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ft=new H,Va=new $e;let jp=0;class fi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ku,this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Va.fromBufferAttribute(this,t),Va.applyMatrix3(e),this.setXY(t,Va.x,Va.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ws(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Sn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ws(t,this.array)),t}setX(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ws(t,this.array)),t}setY(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ws(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ws(t,this.array)),t}setW(e,t){return this.normalized&&(t=Sn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),i=Sn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),i=Sn(i,this.array),r=Sn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Sn(t,this.array),i=Sn(i,this.array),r=Sn(r,this.array),s=Sn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ku&&(e.usage=this.usage),e}}class uf extends fi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ff extends fi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Vi extends fi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Zp=0;const Gn=new Rt,jl=new sn,ps=new H,Dn=new Ys,Ks=new Ys,Yt=new H;class Gi extends is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=ks(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xu(e)?ff:uf)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gn.makeRotationFromQuaternion(e),this.applyMatrix4(Gn),this}rotateX(e){return Gn.makeRotationX(e),this.applyMatrix4(Gn),this}rotateY(e){return Gn.makeRotationY(e),this.applyMatrix4(Gn),this}rotateZ(e){return Gn.makeRotationZ(e),this.applyMatrix4(Gn),this}translate(e,t,i){return Gn.makeTranslation(e,t,i),this.applyMatrix4(Gn),this}scale(e,t,i){return Gn.makeScale(e,t,i),this.applyMatrix4(Gn),this}lookAt(e){return jl.lookAt(e),jl.updateMatrix(),this.applyMatrix4(jl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Vi(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ys);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Dn.setFromBufferAttribute(s),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(Dn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ks.setFromBufferAttribute(o),this.morphTargetsRelative?(Yt.addVectors(Dn.min,Ks.min),Dn.expandByPoint(Yt),Yt.addVectors(Dn.max,Ks.max),Dn.expandByPoint(Yt)):(Dn.expandByPoint(Ks.min),Dn.expandByPoint(Ks.max))}Dn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Yt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Yt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,f=o.count;l<f;l++)Yt.fromBufferAttribute(o,l),c&&(ps.fromBufferAttribute(e,l),Yt.add(ps)),r=Math.max(r,i.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fi(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let U=0;U<i.count;U++)o[U]=new H,c[U]=new H;const l=new H,f=new H,u=new H,d=new $e,p=new $e,_=new $e,v=new H,m=new H;function h(U,x,y){l.fromBufferAttribute(i,U),f.fromBufferAttribute(i,x),u.fromBufferAttribute(i,y),d.fromBufferAttribute(s,U),p.fromBufferAttribute(s,x),_.fromBufferAttribute(s,y),f.sub(l),u.sub(l),p.sub(d),_.sub(d);const P=1/(p.x*_.y-_.x*p.y);isFinite(P)&&(v.copy(f).multiplyScalar(_.y).addScaledVector(u,-p.y).multiplyScalar(P),m.copy(u).multiplyScalar(p.x).addScaledVector(f,-_.x).multiplyScalar(P),o[U].add(v),o[x].add(v),o[y].add(v),c[U].add(m),c[x].add(m),c[y].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let U=0,x=b.length;U<x;++U){const y=b[U],P=y.start,G=y.count;for(let I=P,O=P+G;I<O;I+=3)h(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const M=new H,E=new H,A=new H,w=new H;function R(U){A.fromBufferAttribute(r,U),w.copy(A);const x=o[U];M.copy(x),M.sub(A.multiplyScalar(A.dot(x))).normalize(),E.crossVectors(w,x);const P=E.dot(c[U])<0?-1:1;a.setXYZW(U,M.x,M.y,M.z,P)}for(let U=0,x=b.length;U<x;++U){const y=b[U],P=y.start,G=y.count;for(let I=P,O=P+G;I<O;I+=3)R(e.getX(I+0)),R(e.getX(I+1)),R(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new fi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new H,s=new H,a=new H,o=new H,c=new H,l=new H,f=new H,u=new H;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),f.subVectors(a,s),u.subVectors(r,s),f.cross(u),o.fromBufferAttribute(i,_),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),o.add(f),c.add(f),l.add(f),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),f.subVectors(a,s),u.subVectors(r,s),f.cross(u),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(o,c){const l=o.array,f=o.itemSize,u=o.normalized,d=new l.constructor(c.length*f);let p=0,_=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?p=c[v]*o.data.stride+o.offset:p=c[v]*f;for(let h=0;h<f;h++)d[_++]=l[p++]}return new fi(d,f,u)}if(this.index===null)return Ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Gi,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let f=0,u=l.length;f<u;f++){const d=l[f],p=e(d,i);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],f=[];for(let u=0,d=l.length;u<d;u++){const p=l[u];f.push(p.toJSON(e.data))}f.length>0&&(r[c]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const f=r[l];this.setAttribute(l,f.clone(t))}const s=e.morphAttributes;for(const l in s){const f=[],u=s[l];for(let d=0,p=u.length;d<p;d++)f.push(u[d].clone(t));this.morphAttributes[l]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,f=a.length;l<f;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const df=new Rt,Rr=new Ju,Ga=new Nl,hf=new H,Ha=new H,ka=new H,Wa=new H,Zl=new H,Xa=new H,pf=new H,Ya=new H;class Mn extends sn{constructor(e=new Gi,t=new cf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Xa.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const f=o[c],u=s[c];f!==0&&(Zl.fromBufferAttribute(u,e),a?Xa.addScaledVector(Zl,f):Xa.addScaledVector(Zl.sub(t),f))}t.add(Xa)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ga.copy(i.boundingSphere),Ga.applyMatrix4(s),Rr.copy(e.ray).recast(e.near),!(Ga.containsPoint(Rr.origin)===!1&&(Rr.intersectSphere(Ga,hf)===null||Rr.origin.distanceToSquared(hf)>(e.far-e.near)**2))&&(df.copy(s).invert(),Rr.copy(e.ray).applyMatrix4(df),!(i.boundingBox!==null&&Rr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Rr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,f=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=d.length;_<v;_++){const m=d[_],h=a[m.materialIndex],b=Math.max(m.start,p.start),M=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let E=b,A=M;E<A;E+=3){const w=o.getX(E),R=o.getX(E+1),U=o.getX(E+2);r=qa(this,h,e,i,l,f,u,w,R,U),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=_,h=v;m<h;m+=3){const b=o.getX(m),M=o.getX(m+1),E=o.getX(m+2);r=qa(this,a,e,i,l,f,u,b,M,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,v=d.length;_<v;_++){const m=d[_],h=a[m.materialIndex],b=Math.max(m.start,p.start),M=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let E=b,A=M;E<A;E+=3){const w=E,R=E+1,U=E+2;r=qa(this,h,e,i,l,f,u,w,R,U),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let m=_,h=v;m<h;m+=3){const b=m,M=m+1,E=m+2;r=qa(this,a,e,i,l,f,u,b,M,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Kp(n,e,t,i,r,s,a,o){let c;if(e.side===vn?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===nr,o),c===null)return null;Ya.copy(o),Ya.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Ya);return l<t.near||l>t.far?null:{distance:l,point:Ya.clone(),object:n}}function qa(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,Ha),n.getVertexPosition(c,ka),n.getVertexPosition(l,Wa);const f=Kp(n,e,t,i,Ha,ka,Wa,pf);if(f){const u=new H;ni.getBarycoord(pf,Ha,ka,Wa,u),r&&(f.uv=ni.getInterpolatedAttribute(r,o,c,l,u,new $e)),s&&(f.uv1=ni.getInterpolatedAttribute(s,o,c,l,u,new $e)),a&&(f.normal=ni.getInterpolatedAttribute(a,o,c,l,u,new H),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new H,materialIndex:0};ni.getNormal(Ha,ka,Wa,d.normal),f.face=d,f.barycoord=u}return f}class Js extends Gi{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],f=[],u=[];let d=0,p=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,r,a,2),_("x","z","y",1,-1,e,i,-t,r,a,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Vi(l,3)),this.setAttribute("normal",new Vi(f,3)),this.setAttribute("uv",new Vi(u,2));function _(v,m,h,b,M,E,A,w,R,U,x){const y=E/R,P=A/U,G=E/2,I=A/2,O=w/2,X=R+1,F=U+1;let z=0,te=0;const re=new H;for(let ae=0;ae<F;ae++){const de=ae*P-I;for(let Re=0;Re<X;Re++){const me=Re*y-G;re[v]=me*b,re[m]=de*M,re[h]=O,l.push(re.x,re.y,re.z),re[v]=0,re[m]=0,re[h]=w>0?1:-1,f.push(re.x,re.y,re.z),u.push(Re/R),u.push(1-ae/U),z+=1}}for(let ae=0;ae<U;ae++)for(let de=0;de<R;de++){const Re=d+de+X*ae,me=d+de+X*(ae+1),Fe=d+(de+1)+X*(ae+1),Ue=d+(de+1)+X*ae;c.push(Re,me,Ue),c.push(me,Fe,Ue),te+=6}o.addGroup(p,te,x),p+=te,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Js(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ms(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function un(n){const e={};for(let t=0;t<n.length;t++){const i=ms(n[t]);for(const r in i)e[r]=i[r]}return e}function Jp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function mf(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}const Qp={clone:ms,merge:un};var em=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class En extends Zs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=em,this.fragmentShader=tm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ms(e.uniforms),this.uniformsGroups=Jp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class _f extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const cr=new H,gf=new $e,vf=new $e;class on extends _f{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Al*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Tl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Al*2*Math.atan(Math.tan(Tl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(cr.x,cr.y).multiplyScalar(-e/cr.z),cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(cr.x,cr.y).multiplyScalar(-e/cr.z)}getViewSize(e,t){return this.getViewBounds(e,gf,vf),t.subVectors(vf,gf)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Tl*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const _s=-90,gs=1;class nm extends sn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new on(_s,gs,e,t);r.layers=this.layers,this.add(r);const s=new on(_s,gs,e,t);s.layers=this.layers,this.add(s);const a=new on(_s,gs,e,t);a.layers=this.layers,this.add(a);const o=new on(_s,gs,e,t);o.layers=this.layers,this.add(o);const c=new on(_s,gs,e,t);c.layers=this.layers,this.add(c);const l=new on(_s,gs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===li)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Da)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,f]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,f),e.setRenderTarget(u,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class xf extends rn{constructor(e=[],t=br,i,r,s,a,o,c,l,f){super(e,t,i,r,s,a,o,c,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sf extends ci{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new xf(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Js(5,5,5),s=new En({name:"CubemapFromEquirect",uniforms:ms(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vn,blending:Pi});s.uniforms.tEquirect.value=t;const a=new Mn(r,s),o=t.minFilter;return t.minFilter===yr&&(t.minFilter=yt),new nm(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class ii extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const im={type:"move"};class Kl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ii,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ii,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ii,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),h=this._getHandJoint(l,v);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const f=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=f.position.distanceTo(u.position),p=.02,_=.005;l.inputState.pinching&&d>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(im)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ii;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class $a{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ht(e),this.density=t}clone(){return new $a(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Qs extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class rm extends rn{constructor(e=null,t=1,i=1,r,s,a,o,c,l=Qt,f=Qt,u,d){super(null,a,o,c,l,f,r,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jl=new H,sm=new H,am=new Ze;class Cr{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Jl.subVectors(i,t).cross(sm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Jl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||am.getNormalMatrix(e),r=this.coplanarPoint(Jl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pr=new Nl,om=new $e(.5,.5),ja=new H;class Ql{constructor(e=new Cr,t=new Cr,i=new Cr,r=new Cr,s=new Cr,a=new Cr){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=li,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],f=s[4],u=s[5],d=s[6],p=s[7],_=s[8],v=s[9],m=s[10],h=s[11],b=s[12],M=s[13],E=s[14],A=s[15];if(r[0].setComponents(l-a,p-f,h-_,A-b).normalize(),r[1].setComponents(l+a,p+f,h+_,A+b).normalize(),r[2].setComponents(l+o,p+u,h+v,A+M).normalize(),r[3].setComponents(l-o,p-u,h-v,A-M).normalize(),i)r[4].setComponents(c,d,m,E).normalize(),r[5].setComponents(l-c,p-d,h-m,A-E).normalize();else if(r[4].setComponents(l-c,p-d,h-m,A-E).normalize(),t===li)r[5].setComponents(l+c,p+d,h+m,A+E).normalize();else if(t===Da)r[5].setComponents(c,d,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pr)}intersectsSprite(e){Pr.center.set(0,0,0);const t=om.distanceTo(e.center);return Pr.radius=.7071067811865476+t,Pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ja.x=r.normal.x>0?e.max.x:e.min.x,ja.y=r.normal.y>0?e.max.y:e.min.y,ja.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ja)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ea extends rn{constructor(e,t,i=ai,r,s,a,o=Qt,c=Qt,l,f=Ii,u=1){if(f!==Ii&&f!==Tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,r,s,a,o,c,f,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Pl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class lm extends ea{constructor(e,t=ai,i=br,r,s,a=Qt,o=Qt,c,l=Ii){const f={width:e,height:e,depth:1},u=[f,f,f,f,f,f];super(e,e,t,i,r,s,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Mf extends rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Hi extends Gi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,f=c+1,u=e/o,d=t/c,p=[],_=[],v=[],m=[];for(let h=0;h<f;h++){const b=h*d-a;for(let M=0;M<l;M++){const E=M*u-s;_.push(E,-b,0),v.push(0,0,1),m.push(M/o),m.push(1-h/c)}}for(let h=0;h<c;h++)for(let b=0;b<o;b++){const M=b+l*h,E=b+l*(h+1),A=b+1+l*(h+1),w=b+1+l*h;p.push(M,E,w),p.push(E,A,w)}this.setIndex(p),this.setAttribute("position",new Vi(_,3)),this.setAttribute("normal",new Vi(v,3)),this.setAttribute("uv",new Vi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hi(e.width,e.height,e.widthSegments,e.heightSegments)}}class cm extends En{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class um extends Zs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gu,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fm extends Zs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dm extends Zs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ec={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class hm{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(f){o++,s===!1&&r.onStart!==void 0&&r.onStart(f,a,o),s=!0},this.itemEnd=function(f){a++,r.onProgress!==void 0&&r.onProgress(f,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return c?c(f):f},this.setURLModifier=function(f){return c=f,this},this.addHandler=function(f,u){return l.push(f,u),this},this.removeHandler=function(f){const u=l.indexOf(f);return u!==-1&&l.splice(u,2),this},this.getHandler=function(f){for(let u=0,d=l.length;u<d;u+=2){const p=l[u],_=l[u+1];if(p.global&&(p.lastIndex=0),p.test(f))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const pm=new hm;class tc{constructor(e){this.manager=e!==void 0?e:pm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}tc.DEFAULT_MATERIAL_NAME="__DEFAULT";const vs=new WeakMap;class mm extends tc{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ec.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let u=vs.get(a);u===void 0&&(u=[],vs.set(a,u)),u.push({onLoad:t,onError:r})}return a}const o=Gs("img");function c(){f(),t&&t(this);const u=vs.get(this)||[];for(let d=0;d<u.length;d++){const p=u[d];p.onLoad&&p.onLoad(this)}vs.delete(this),s.manager.itemEnd(e)}function l(u){f(),r&&r(u),ec.remove(`image:${e}`);const d=vs.get(this)||[];for(let p=0;p<d.length;p++){const _=d[p];_.onError&&_.onError(u)}vs.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ec.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class ta extends tc{constructor(e){super(e)}load(e,t,i,r){const s=new rn,a=new mm(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Ef extends sn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ht(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const nc=new Rt,bf=new H,yf=new H;class _m{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.mapType=Cn,this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ql,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;bf.setFromMatrixPosition(e.matrixWorld),t.position.copy(bf),yf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yf),t.updateMatrixWorld(),nc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(nc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ic extends _f{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=f*this.view.offsetY,c=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class gm extends _m{constructor(){super(new ic(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vm extends Ef{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.shadow=new gm}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class xm extends Ef{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Sm extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Tf=new Rt;class Af{constructor(e,t,i=0,r=1/0){this.ray=new Ju(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new zl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ct("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Tf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Tf),this}intersectObject(e,t=!0,i=[]){return rc(e,this,i,t),i.sort(wf),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)rc(e[r],this,i,t);return i.sort(wf),i}}function wf(n,e){return n.distance-e.distance}function rc(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)rc(s[a],e,t,!0)}}function Rf(n,e,t,i){const r=Mm(i);switch(t){case Bu:return n*e;case Vu:return n*e/r.components*r.byteLength;case Ho:return n*e/r.components*r.byteLength;case es:return n*e*2/r.components*r.byteLength;case ko:return n*e*2/r.components*r.byteLength;case zu:return n*e*3/r.components*r.byteLength;case Jn:return n*e*4/r.components*r.byteLength;case Wo:return n*e*4/r.components*r.byteLength;case Aa:case wa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ra:case Ca:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Yo:case $o:return Math.max(n,16)*Math.max(e,8)/4;case Xo:case qo:return Math.max(n,8)*Math.max(e,8)/2;case jo:case Zo:case Jo:case Qo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ko:case el:case tl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case nl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case il:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case rl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case sl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case al:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ol:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ll:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case cl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ul:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case fl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case dl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case hl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case pl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ml:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case _l:case gl:case vl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case xl:case Sl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ml:case El:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Mm(n){switch(n){case Cn:case Uu:return{byteLength:1,components:1};case zs:case Nu:case Li:return{byteLength:2,components:1};case Vo:case Go:return{byteLength:2,components:4};case ai:case zo:case oi:return{byteLength:4,components:1};case Fu:case Ou:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yo}})),typeof window<"u"&&(window.__THREE__?Ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Cf(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Em(n){const e=new WeakMap;function t(o,c){const l=o.array,f=o.usage,u=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,f),o.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,c,l){const f=c.array,u=c.updateRanges;if(n.bindBuffer(l,o),u.length===0)n.bufferSubData(l,0,f);else{u.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<u.length;p++){const _=u[d],v=u[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++d,u[d]=v)}u.length=d+1;for(let p=0,_=u.length;p<_;p++){const v=u[p];n.bufferSubData(l,v.start*f.BYTES_PER_ELEMENT,f,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var bm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ym=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Tm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Am=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Pm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Lm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Im=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Um=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Fm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Om=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Bm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,zm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,km=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Xm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ym=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$m=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Km=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qm="gl_FragColor = linearToOutputTexel( gl_FragColor );",e_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,t_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,n_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,i_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,r_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,s_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,a_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,o_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,l_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,c_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,u_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,f_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,d_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,h_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,p_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,m_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,__=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,g_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,v_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,x_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,S_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,M_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,E_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,b_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,y_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,T_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,A_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,w_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,R_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,C_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,P_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,D_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,L_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,I_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,U_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,N_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,F_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,O_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,B_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,z_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,V_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,G_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,H_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,W_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,X_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Y_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,q_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,j_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Z_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,K_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,J_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Q_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ng=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ig=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,sg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ag=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,og=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ug=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,dg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_g=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Mg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ke={alphahash_fragment:bm,alphahash_pars_fragment:ym,alphamap_fragment:Tm,alphamap_pars_fragment:Am,alphatest_fragment:wm,alphatest_pars_fragment:Rm,aomap_fragment:Cm,aomap_pars_fragment:Pm,batching_pars_vertex:Dm,batching_vertex:Lm,begin_vertex:Im,beginnormal_vertex:Um,bsdfs:Nm,iridescence_fragment:Fm,bumpmap_pars_fragment:Om,clipping_planes_fragment:Bm,clipping_planes_pars_fragment:zm,clipping_planes_pars_vertex:Vm,clipping_planes_vertex:Gm,color_fragment:Hm,color_pars_fragment:km,color_pars_vertex:Wm,color_vertex:Xm,common:Ym,cube_uv_reflection_fragment:qm,defaultnormal_vertex:$m,displacementmap_pars_vertex:jm,displacementmap_vertex:Zm,emissivemap_fragment:Km,emissivemap_pars_fragment:Jm,colorspace_fragment:Qm,colorspace_pars_fragment:e_,envmap_fragment:t_,envmap_common_pars_fragment:n_,envmap_pars_fragment:i_,envmap_pars_vertex:r_,envmap_physical_pars_fragment:m_,envmap_vertex:s_,fog_vertex:a_,fog_pars_vertex:o_,fog_fragment:l_,fog_pars_fragment:c_,gradientmap_pars_fragment:u_,lightmap_pars_fragment:f_,lights_lambert_fragment:d_,lights_lambert_pars_fragment:h_,lights_pars_begin:p_,lights_toon_fragment:__,lights_toon_pars_fragment:g_,lights_phong_fragment:v_,lights_phong_pars_fragment:x_,lights_physical_fragment:S_,lights_physical_pars_fragment:M_,lights_fragment_begin:E_,lights_fragment_maps:b_,lights_fragment_end:y_,logdepthbuf_fragment:T_,logdepthbuf_pars_fragment:A_,logdepthbuf_pars_vertex:w_,logdepthbuf_vertex:R_,map_fragment:C_,map_pars_fragment:P_,map_particle_fragment:D_,map_particle_pars_fragment:L_,metalnessmap_fragment:I_,metalnessmap_pars_fragment:U_,morphinstance_vertex:N_,morphcolor_vertex:F_,morphnormal_vertex:O_,morphtarget_pars_vertex:B_,morphtarget_vertex:z_,normal_fragment_begin:V_,normal_fragment_maps:G_,normal_pars_fragment:H_,normal_pars_vertex:k_,normal_vertex:W_,normalmap_pars_fragment:X_,clearcoat_normal_fragment_begin:Y_,clearcoat_normal_fragment_maps:q_,clearcoat_pars_fragment:$_,iridescence_pars_fragment:j_,opaque_fragment:Z_,packing:K_,premultiplied_alpha_fragment:J_,project_vertex:Q_,dithering_fragment:eg,dithering_pars_fragment:tg,roughnessmap_fragment:ng,roughnessmap_pars_fragment:ig,shadowmap_pars_fragment:rg,shadowmap_pars_vertex:sg,shadowmap_vertex:ag,shadowmask_pars_fragment:og,skinbase_vertex:lg,skinning_pars_vertex:cg,skinning_vertex:ug,skinnormal_vertex:fg,specularmap_fragment:dg,specularmap_pars_fragment:hg,tonemapping_fragment:pg,tonemapping_pars_fragment:mg,transmission_fragment:_g,transmission_pars_fragment:gg,uv_pars_fragment:vg,uv_pars_vertex:xg,uv_vertex:Sg,worldpos_vertex:Mg,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},ve={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},di={basic:{uniforms:un([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:un([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new ht(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:un([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:un([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:un([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new ht(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:un([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:un([ve.points,ve.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:un([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:un([ve.common,ve.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:un([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:un([ve.sprite,ve.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distance:{uniforms:un([ve.common,ve.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distance_vert,fragmentShader:Ke.distance_frag},shadow:{uniforms:un([ve.lights,ve.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};di.physical={uniforms:un([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const Za={r:0,b:0,g:0},Dr=new ui,Eg=new Rt;function bg(n,e,t,i,r,s,a){const o=new ht(0);let c=s===!0?0:1,l,f,u=null,d=0,p=null;function _(M){let E=M.isScene===!0?M.background:null;return E&&E.isTexture&&(E=(M.backgroundBlurriness>0?t:e).get(E)),E}function v(M){let E=!1;const A=_(M);A===null?h(o,c):A&&A.isColor&&(h(A,1),E=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(M,E){const A=_(E);A&&(A.isCubeTexture||A.mapping===ya)?(f===void 0&&(f=new Mn(new Js(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:ms(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(w,R,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),Dr.copy(E.backgroundRotation),Dr.x*=-1,Dr.y*=-1,Dr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Dr.y*=-1,Dr.z*=-1),f.material.uniforms.envMap.value=A,f.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Eg.makeRotationFromEuler(Dr)),f.material.toneMapped=ut.getTransfer(A.colorSpace)!==xt,(u!==A||d!==A.version||p!==n.toneMapping)&&(f.material.needsUpdate=!0,u=A,d=A.version,p=n.toneMapping),f.layers.enableAll(),M.unshift(f,f.geometry,f.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new Mn(new Hi(2,2),new En({name:"BackgroundMaterial",uniforms:ms(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:nr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=ut.getTransfer(A.colorSpace)!==xt,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||d!==A.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,u=A,d=A.version,p=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function h(M,E){M.getRGB(Za,mf(n)),i.buffers.color.setClear(Za.r,Za.g,Za.b,E,a)}function b(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,E=1){o.set(M),c=E,h(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,h(o,c)},render:v,addToRenderList:m,dispose:b}}function yg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(y,P,G,I,O){let X=!1;const F=u(I,G,P);s!==F&&(s=F,l(s.object)),X=p(y,I,G,O),X&&_(y,I,G,O),O!==null&&e.update(O,n.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,E(y,P,G,I),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function c(){return n.createVertexArray()}function l(y){return n.bindVertexArray(y)}function f(y){return n.deleteVertexArray(y)}function u(y,P,G){const I=G.wireframe===!0;let O=i[y.id];O===void 0&&(O={},i[y.id]=O);let X=O[P.id];X===void 0&&(X={},O[P.id]=X);let F=X[I];return F===void 0&&(F=d(c()),X[I]=F),F}function d(y){const P=[],G=[],I=[];for(let O=0;O<t;O++)P[O]=0,G[O]=0,I[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:G,attributeDivisors:I,object:y,attributes:{},index:null}}function p(y,P,G,I){const O=s.attributes,X=P.attributes;let F=0;const z=G.getAttributes();for(const te in z)if(z[te].location>=0){const ae=O[te];let de=X[te];if(de===void 0&&(te==="instanceMatrix"&&y.instanceMatrix&&(de=y.instanceMatrix),te==="instanceColor"&&y.instanceColor&&(de=y.instanceColor)),ae===void 0||ae.attribute!==de||de&&ae.data!==de.data)return!0;F++}return s.attributesNum!==F||s.index!==I}function _(y,P,G,I){const O={},X=P.attributes;let F=0;const z=G.getAttributes();for(const te in z)if(z[te].location>=0){let ae=X[te];ae===void 0&&(te==="instanceMatrix"&&y.instanceMatrix&&(ae=y.instanceMatrix),te==="instanceColor"&&y.instanceColor&&(ae=y.instanceColor));const de={};de.attribute=ae,ae&&ae.data&&(de.data=ae.data),O[te]=de,F++}s.attributes=O,s.attributesNum=F,s.index=I}function v(){const y=s.newAttributes;for(let P=0,G=y.length;P<G;P++)y[P]=0}function m(y){h(y,0)}function h(y,P){const G=s.newAttributes,I=s.enabledAttributes,O=s.attributeDivisors;G[y]=1,I[y]===0&&(n.enableVertexAttribArray(y),I[y]=1),O[y]!==P&&(n.vertexAttribDivisor(y,P),O[y]=P)}function b(){const y=s.newAttributes,P=s.enabledAttributes;for(let G=0,I=P.length;G<I;G++)P[G]!==y[G]&&(n.disableVertexAttribArray(G),P[G]=0)}function M(y,P,G,I,O,X,F){F===!0?n.vertexAttribIPointer(y,P,G,O,X):n.vertexAttribPointer(y,P,G,I,O,X)}function E(y,P,G,I){v();const O=I.attributes,X=G.getAttributes(),F=P.defaultAttributeValues;for(const z in X){const te=X[z];if(te.location>=0){let re=O[z];if(re===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(re=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(re=y.instanceColor)),re!==void 0){const ae=re.normalized,de=re.itemSize,Re=e.get(re);if(Re===void 0)continue;const me=Re.buffer,Fe=Re.type,Ue=Re.bytesPerElement,V=Fe===n.INT||Fe===n.UNSIGNED_INT||re.gpuType===zo;if(re.isInterleavedBufferAttribute){const j=re.data,K=j.stride,_e=re.offset;if(j.isInstancedInterleavedBuffer){for(let le=0;le<te.locationSize;le++)h(te.location+le,j.meshPerAttribute);y.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let le=0;le<te.locationSize;le++)m(te.location+le);n.bindBuffer(n.ARRAY_BUFFER,me);for(let le=0;le<te.locationSize;le++)M(te.location+le,de/te.locationSize,Fe,ae,K*Ue,(_e+de/te.locationSize*le)*Ue,V)}else{if(re.isInstancedBufferAttribute){for(let j=0;j<te.locationSize;j++)h(te.location+j,re.meshPerAttribute);y.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let j=0;j<te.locationSize;j++)m(te.location+j);n.bindBuffer(n.ARRAY_BUFFER,me);for(let j=0;j<te.locationSize;j++)M(te.location+j,de/te.locationSize,Fe,ae,de*Ue,de/te.locationSize*j*Ue,V)}}else if(F!==void 0){const ae=F[z];if(ae!==void 0)switch(ae.length){case 2:n.vertexAttrib2fv(te.location,ae);break;case 3:n.vertexAttrib3fv(te.location,ae);break;case 4:n.vertexAttrib4fv(te.location,ae);break;default:n.vertexAttrib1fv(te.location,ae)}}}}b()}function A(){U();for(const y in i){const P=i[y];for(const G in P){const I=P[G];for(const O in I)f(I[O].object),delete I[O];delete P[G]}delete i[y]}}function w(y){if(i[y.id]===void 0)return;const P=i[y.id];for(const G in P){const I=P[G];for(const O in I)f(I[O].object),delete I[O];delete P[G]}delete i[y.id]}function R(y){for(const P in i){const G=i[P];if(G[y.id]===void 0)continue;const I=G[y.id];for(const O in I)f(I[O].object),delete I[O];delete G[y.id]}}function U(){x(),a=!0,s!==r&&(s=r,l(s.object))}function x(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:U,resetDefaultState:x,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:b}}function Tg(n,e,t){let i;function r(l){i=l}function s(l,f){n.drawArrays(i,l,f),t.update(f,i,1)}function a(l,f,u){u!==0&&(n.drawArraysInstanced(i,l,f,u),t.update(f,i,u))}function o(l,f,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,f,0,u);let p=0;for(let _=0;_<u;_++)p+=f[_];t.update(p,i,1)}function c(l,f,u,d){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<l.length;_++)a(l[_],f[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,f,0,d,0,u);let _=0;for(let v=0;v<u;v++)_+=f[v]*d[v];t.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Ag(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==Jn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const U=R===Li&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Cn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==oi&&!U)}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const f=c(l);f!==l&&(Ye("WebGLRenderer:",l,"not supported, using",f,"instead."),l=f);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:E,maxSamples:A,samples:w}}function wg(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Cr,o=new Ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||i!==0||r;return r=d,i=u.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=f(u,d,0)},this.setState=function(u,d,p){const _=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,h=n.get(u);if(!r||_===null||_.length===0||s&&!m)s?f(null):l();else{const b=s?0:i,M=b*4;let E=h.clippingState||null;c.value=E,E=f(_,d,M,p);for(let A=0;A!==M;++A)E[A]=t[A];h.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(u,d,p,_){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=c.value,_!==!0||m===null){const h=p+v*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<h)&&(m=new Float32Array(h));for(let M=0,E=p;M!==v;++M,E+=4)a.copy(u[M]).applyMatrix4(b,o),a.normal.toArray(m,E),m[E+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Rg(n){let e=new WeakMap;function t(a,o){return o===Uo?a.mapping=br:o===No&&(a.mapping=Qr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Uo||o===No)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Sf(c.height);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const ur=4,Pf=[.125,.215,.35,.446,.526,.582],Lr=20,Cg=256,na=new ic,Df=new ht;let sc=null,ac=0,oc=0,lc=!1;const Pg=new H;class Lf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=Pg}=s;sc=this._renderer.getRenderTarget(),ac=this._renderer.getActiveCubeFace(),oc=this._renderer.getActiveMipmapLevel(),lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(sc,ac,oc),this._renderer.xr.enabled=lc,e.scissorTest=!1,xs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===br||e.mapping===Qr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sc=this._renderer.getRenderTarget(),ac=this._renderer.getActiveCubeFace(),oc=this._renderer.getActiveMipmapLevel(),lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:yt,minFilter:yt,generateMipmaps:!1,type:Li,format:Jn,colorSpace:ts,depthBuffer:!1},r=If(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=If(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Dg(s)),this._blurMaterial=Ig(s,e,t),this._ggxMaterial=Lg(s,e,t)}return r}_compileMaterial(e){const t=new Mn(new Gi,e);this._renderer.compile(t,na)}_sceneToCubeUV(e,t,i,r,s){const c=new on(90,1,t,i),l=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(Df),u.toneMapping=cn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Mn(new Js,new cf({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let h=!1;const b=e.background;b?b.isColor&&(m.color.copy(b),e.background=null,h=!0):(m.color.copy(Df),h=!0);for(let M=0;M<6;M++){const E=M%3;E===0?(c.up.set(0,l[M],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+f[M],s.y,s.z)):E===1?(c.up.set(0,0,l[M]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+f[M],s.z)):(c.up.set(0,l[M],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+f[M]));const A=this._cubeSize;xs(r,E*A,M>2?A:0,A,A),u.setRenderTarget(r),h&&u.render(v,c),u.render(e,c)}u.toneMapping=p,u.autoClear=d,e.background=b}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===br||e.mapping===Qr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uf());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;xs(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,na)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,l=i/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-f*f),d=0+l*1.25,p=u*d,{_lodMax:_}=this,v=this._sizeLods[i],m=3*v*(i>_-ur?i-_+ur:0),h=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=_-t,xs(s,m,h,3*v,2*v),r.setRenderTarget(s),r.render(o,na),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=_-i,xs(e,m,h,3*v,2*v),r.setRenderTarget(e),r.render(o,na)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ct("blur direction must be either latitudinal or longitudinal!");const f=3,u=this._lodMeshes[r];u.material=l;const d=l.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Lr-1),v=s/_,m=isFinite(s)?1+Math.floor(f*v):Lr;m>Lr&&Ye(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Lr}`);const h=[];let b=0;for(let R=0;R<Lr;++R){const U=R/v,x=Math.exp(-U*U/2);h.push(x),R===0?b+=x:R<m&&(b+=2*x)}for(let R=0;R<h.length;R++)h[R]=h[R]/b;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:M}=this;d.dTheta.value=_,d.mipInt.value=M-i;const E=this._sizeLods[r],A=3*E*(r>M-ur?r-M+ur:0),w=4*(this._cubeSize-E);xs(t,A,w,3*E,2*E),c.setRenderTarget(t),c.render(u,na)}}function Dg(n){const e=[],t=[],i=[];let r=n;const s=n-ur+1+Pf.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>n-ur?c=Pf[a-n+ur-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),f=-l,u=1+l,d=[f,f,u,f,u,u,f,f,u,u,f,u],p=6,_=6,v=3,m=2,h=1,b=new Float32Array(v*_*p),M=new Float32Array(m*_*p),E=new Float32Array(h*_*p);for(let w=0;w<p;w++){const R=w%3*2/3-1,U=w>2?0:-1,x=[R,U,0,R+2/3,U,0,R+2/3,U+1,0,R,U,0,R+2/3,U+1,0,R,U+1,0];b.set(x,v*_*w),M.set(d,m*_*w);const y=[w,w,w,w,w,w];E.set(y,h*_*w)}const A=new Gi;A.setAttribute("position",new fi(b,v)),A.setAttribute("uv",new fi(M,m)),A.setAttribute("faceIndex",new fi(E,h)),i.push(new Mn(A,null)),r>ur&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function If(n,e,t){const i=new ci(n,e,t);return i.texture.mapping=ya,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Lg(n,e,t){return new En({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Cg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ka(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Ig(n,e,t){const i=new Float32Array(Lr),r=new H(0,1,0);return new En({name:"SphericalGaussianBlur",defines:{n:Lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Uf(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Nf(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Ka(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ug(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===Uo||c===No,f=c===br||c===Qr;if(l||f){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Lf(n)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return l&&p&&p.height>0||f&&p&&r(p)?(t===null&&(t=new Lf(n)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function r(o){let c=0;const l=6;for(let f=0;f<l;f++)o[f]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Ng(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Hs("WebGLRenderer: "+i+" extension not supported."),r}}}function Fg(n,e,t,i){const r={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const p in d)e.update(d[p],n.ARRAY_BUFFER)}function l(u){const d=[],p=u.index,_=u.attributes.position;let v=0;if(p!==null){const b=p.array;v=p.version;for(let M=0,E=b.length;M<E;M+=3){const A=b[M+0],w=b[M+1],R=b[M+2];d.push(A,w,w,R,R,A)}}else if(_!==void 0){const b=_.array;v=_.version;for(let M=0,E=b.length/3-1;M<E;M+=3){const A=M+0,w=M+1,R=M+2;d.push(A,w,w,R,R,A)}}else return;const m=new(Xu(d)?ff:uf)(d,1);m.version=v;const h=s.get(u);h&&e.remove(h),s.set(u,m)}function f(u){const d=s.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:f}}function Og(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,p){n.drawElements(i,p,s,d*a),t.update(p,i,1)}function l(d,p,_){_!==0&&(n.drawElementsInstanced(i,p,s,d*a,_),t.update(p,i,_))}function f(d,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,_);let m=0;for(let h=0;h<_;h++)m+=p[h];t.update(m,i,1)}function u(d,p,_,v){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)l(d[h]/a,p[h],v[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,v,0,_);let h=0;for(let b=0;b<_;b++)h+=p[b]*v[b];t.update(h,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=f,this.renderMultiDrawInstances=u}function Bg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:ct("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function zg(n,e,t){const i=new WeakMap,r=new Pt;function s(a,o,c){const l=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=f!==void 0?f.length:0;let d=i.get(o);if(d===void 0||d.count!==u){let x=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",x)};d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let M=0;p===!0&&(M=1),_===!0&&(M=2),v===!0&&(M=3);let E=o.attributes.position.count*M,A=1;E>e.maxTextureSize&&(A=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const w=new Float32Array(E*A*4*u),R=new Ku(w,E,A,u);R.type=oi,R.needsUpdate=!0;const U=M*4;for(let y=0;y<u;y++){const P=m[y],G=h[y],I=b[y],O=E*A*4*y;for(let X=0;X<P.count;X++){const F=X*U;p===!0&&(r.fromBufferAttribute(P,X),w[O+F+0]=r.x,w[O+F+1]=r.y,w[O+F+2]=r.z,w[O+F+3]=0),_===!0&&(r.fromBufferAttribute(G,X),w[O+F+4]=r.x,w[O+F+5]=r.y,w[O+F+6]=r.z,w[O+F+7]=0),v===!0&&(r.fromBufferAttribute(I,X),w[O+F+8]=r.x,w[O+F+9]=r.y,w[O+F+10]=r.z,w[O+F+11]=I.itemSize===4?r.w:1)}}d={count:u,texture:R,size:new $e(E,A)},i.set(o,d),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let p=0;for(let v=0;v<l.length;v++)p+=l[v];const _=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function Vg(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,f=c.geometry,u=e.get(c,f);if(r.get(u)!==l&&(e.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return u}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const Gg={[Au]:"LINEAR_TONE_MAPPING",[wu]:"REINHARD_TONE_MAPPING",[Ru]:"CINEON_TONE_MAPPING",[Cu]:"ACES_FILMIC_TONE_MAPPING",[Du]:"AGX_TONE_MAPPING",[Lu]:"NEUTRAL_TONE_MAPPING",[Pu]:"CUSTOM_TONE_MAPPING"};function Hg(n,e,t,i,r){const s=new ci(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),a=new ci(e,t,{type:Li,depthBuffer:!1,stencilBuffer:!1}),o=new Gi;o.setAttribute("position",new Vi([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Vi([0,2,0,0,2,0],2));const c=new cm({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new Mn(o,c),f=new ic(-1,1,1,-1,0,1);let u=null,d=null,p=!1,_,v=null,m=[],h=!1;this.setSize=function(b,M){s.setSize(b,M),a.setSize(b,M);for(let E=0;E<m.length;E++){const A=m[E];A.setSize&&A.setSize(b,M)}},this.setEffects=function(b){m=b,h=m.length>0&&m[0].isRenderPass===!0;const M=s.width,E=s.height;for(let A=0;A<m.length;A++){const w=m[A];w.setSize&&w.setSize(M,E)}},this.begin=function(b,M){if(p||b.toneMapping===cn&&m.length===0)return!1;if(v=M,M!==null){const E=M.width,A=M.height;(s.width!==E||s.height!==A)&&this.setSize(E,A)}return h===!1&&b.setRenderTarget(s),_=b.toneMapping,b.toneMapping=cn,!0},this.hasRenderPass=function(){return h},this.end=function(b,M){b.toneMapping=_,p=!0;let E=s,A=a;for(let w=0;w<m.length;w++){const R=m[w];if(R.enabled!==!1&&(R.render(b,A,E,M),R.needsSwap!==!1)){const U=E;E=A,A=U}}if(u!==b.outputColorSpace||d!==b.toneMapping){u=b.outputColorSpace,d=b.toneMapping,c.defines={},ut.getTransfer(u)===xt&&(c.defines.SRGB_TRANSFER="");const w=Gg[d];w&&(c.defines[w]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=E.texture,b.setRenderTarget(v),b.render(l,f),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),c.dispose()}}const Ff=new rn,cc=new ea(1,1),Of=new Ku,Bf=new Vp,zf=new xf,Vf=[],Gf=[],Hf=new Float32Array(16),kf=new Float32Array(9),Wf=new Float32Array(4);function Ss(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Vf[r];if(s===void 0&&(s=new Float32Array(r),Vf[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Vt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Gt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ja(n,e){let t=Gf[e];t===void 0&&(t=new Int32Array(e),Gf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function kg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Wg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2fv(this.addr,e),Gt(t,e)}}function Xg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;n.uniform3fv(this.addr,e),Gt(t,e)}}function Yg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4fv(this.addr,e),Gt(t,e)}}function qg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,i))return;Wf.set(i),n.uniformMatrix2fv(this.addr,!1,Wf),Gt(t,i)}}function $g(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,i))return;kf.set(i),n.uniformMatrix3fv(this.addr,!1,kf),Gt(t,i)}}function jg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,i))return;Hf.set(i),n.uniformMatrix4fv(this.addr,!1,Hf),Gt(t,i)}}function Zg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Kg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2iv(this.addr,e),Gt(t,e)}}function Jg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;n.uniform3iv(this.addr,e),Gt(t,e)}}function Qg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4iv(this.addr,e),Gt(t,e)}}function ev(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function tv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2uiv(this.addr,e),Gt(t,e)}}function nv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;n.uniform3uiv(this.addr,e),Gt(t,e)}}function iv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4uiv(this.addr,e),Gt(t,e)}}function rv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(cc.compareFunction=t.isReversedDepthBuffer()?yl:bl,s=cc):s=Ff,t.setTexture2D(e||s,r)}function sv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Bf,r)}function av(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||zf,r)}function ov(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Of,r)}function lv(n){switch(n){case 5126:return kg;case 35664:return Wg;case 35665:return Xg;case 35666:return Yg;case 35674:return qg;case 35675:return $g;case 35676:return jg;case 5124:case 35670:return Zg;case 35667:case 35671:return Kg;case 35668:case 35672:return Jg;case 35669:case 35673:return Qg;case 5125:return ev;case 36294:return tv;case 36295:return nv;case 36296:return iv;case 35678:case 36198:case 36298:case 36306:case 35682:return rv;case 35679:case 36299:case 36307:return sv;case 35680:case 36300:case 36308:case 36293:return av;case 36289:case 36303:case 36311:case 36292:return ov}}function cv(n,e){n.uniform1fv(this.addr,e)}function uv(n,e){const t=Ss(e,this.size,2);n.uniform2fv(this.addr,t)}function fv(n,e){const t=Ss(e,this.size,3);n.uniform3fv(this.addr,t)}function dv(n,e){const t=Ss(e,this.size,4);n.uniform4fv(this.addr,t)}function hv(n,e){const t=Ss(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function pv(n,e){const t=Ss(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function mv(n,e){const t=Ss(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function _v(n,e){n.uniform1iv(this.addr,e)}function gv(n,e){n.uniform2iv(this.addr,e)}function vv(n,e){n.uniform3iv(this.addr,e)}function xv(n,e){n.uniform4iv(this.addr,e)}function Sv(n,e){n.uniform1uiv(this.addr,e)}function Mv(n,e){n.uniform2uiv(this.addr,e)}function Ev(n,e){n.uniform3uiv(this.addr,e)}function bv(n,e){n.uniform4uiv(this.addr,e)}function yv(n,e,t){const i=this.cache,r=e.length,s=Ja(t,r);Vt(i,s)||(n.uniform1iv(this.addr,s),Gt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=cc:a=Ff;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Tv(n,e,t){const i=this.cache,r=e.length,s=Ja(t,r);Vt(i,s)||(n.uniform1iv(this.addr,s),Gt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Bf,s[a])}function Av(n,e,t){const i=this.cache,r=e.length,s=Ja(t,r);Vt(i,s)||(n.uniform1iv(this.addr,s),Gt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||zf,s[a])}function wv(n,e,t){const i=this.cache,r=e.length,s=Ja(t,r);Vt(i,s)||(n.uniform1iv(this.addr,s),Gt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Of,s[a])}function Rv(n){switch(n){case 5126:return cv;case 35664:return uv;case 35665:return fv;case 35666:return dv;case 35674:return hv;case 35675:return pv;case 35676:return mv;case 5124:case 35670:return _v;case 35667:case 35671:return gv;case 35668:case 35672:return vv;case 35669:case 35673:return xv;case 5125:return Sv;case 36294:return Mv;case 36295:return Ev;case 36296:return bv;case 35678:case 36198:case 36298:case 36306:case 35682:return yv;case 35679:case 36299:case 36307:return Tv;case 35680:case 36300:case 36308:case 36293:return Av;case 36289:case 36303:case 36311:case 36292:return wv}}class Cv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=lv(t.type)}}class Pv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Rv(t.type)}}class Dv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const uc=/(\w+)(\])?(\[|\.)?/g;function Xf(n,e){n.seq.push(e),n.map[e.id]=e}function Lv(n,e,t){const i=n.name,r=i.length;for(uc.lastIndex=0;;){const s=uc.exec(i),a=uc.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Xf(t,l===void 0?new Cv(o,n,e):new Pv(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new Dv(o),Xf(t,u)),t=u}}}class Qa{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Lv(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Yf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Iv=37297;let Uv=0;function Nv(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const qf=new Ze;function Fv(n){ut._getMatrix(qf,ut.workingColorSpace,n);const e=`mat3( ${qf.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(n)){case Pa:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return Ye("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function $f(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Nv(n.getShaderSource(e),o)}else return s}function Ov(n,e){const t=Fv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Bv={[Au]:"Linear",[wu]:"Reinhard",[Ru]:"Cineon",[Cu]:"ACESFilmic",[Du]:"AgX",[Lu]:"Neutral",[Pu]:"Custom"};function zv(n,e){const t=Bv[e];return t===void 0?(Ye("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const eo=new H;function Vv(){ut.getLuminanceCoefficients(eo);const n=eo.x.toFixed(4),e=eo.y.toFixed(4),t=eo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ia).join(`
`)}function Hv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function kv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ia(n){return n!==""}function jf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Wv=/^[ \t]*#include +<([\w\d./]+)>/gm;function fc(n){return n.replace(Wv,Yv)}const Xv=new Map;function Yv(n,e){let t=Ke[e];if(t===void 0){const i=Xv.get(e);if(i!==void 0)t=Ke[i],Ye('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return fc(t)}const qv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kf(n){return n.replace(qv,$v)}function $v(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Jf(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const jv={[ba]:"SHADOWMAP_TYPE_PCF",[Bs]:"SHADOWMAP_TYPE_VSM"};function Zv(n){return jv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Kv={[br]:"ENVMAP_TYPE_CUBE",[Qr]:"ENVMAP_TYPE_CUBE",[ya]:"ENVMAP_TYPE_CUBE_UV"};function Jv(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Kv[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const Qv={[Qr]:"ENVMAP_MODE_REFRACTION"};function e0(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Qv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const t0={[Tu]:"ENVMAP_BLENDING_MULTIPLY",[Mp]:"ENVMAP_BLENDING_MIX",[Ep]:"ENVMAP_BLENDING_ADD"};function n0(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":t0[n.combine]||"ENVMAP_BLENDING_NONE"}function i0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function r0(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Zv(t),l=Jv(t),f=e0(t),u=n0(t),d=i0(t),p=Gv(t),_=Hv(s),v=r.createProgram();let m,h,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ia).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ia).join(`
`),h.length>0&&(h+=`
`)):(m=[Jf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ia).join(`
`),h=[Jf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+f:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==cn?"#define TONE_MAPPING":"",t.toneMapping!==cn?Ke.tonemapping_pars_fragment:"",t.toneMapping!==cn?zv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,Ov("linearToOutputTexel",t.outputColorSpace),Vv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ia).join(`
`)),a=fc(a),a=jf(a,t),a=Zf(a,t),o=fc(o),o=jf(o,t),o=Zf(o,t),a=Kf(a),o=Kf(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===Wu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const M=b+m+a,E=b+h+o,A=Yf(r,r.VERTEX_SHADER,M),w=Yf(r,r.FRAGMENT_SHADER,E);r.attachShader(v,A),r.attachShader(v,w),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function R(P){if(n.debug.checkShaderErrors){const G=r.getProgramInfoLog(v)||"",I=r.getShaderInfoLog(A)||"",O=r.getShaderInfoLog(w)||"",X=G.trim(),F=I.trim(),z=O.trim();let te=!0,re=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(te=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,A,w);else{const ae=$f(r,A,"vertex"),de=$f(r,w,"fragment");ct("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+X+`
`+ae+`
`+de)}else X!==""?Ye("WebGLProgram: Program Info Log:",X):(F===""||z==="")&&(re=!1);re&&(P.diagnostics={runnable:te,programLog:X,vertexShader:{log:F,prefix:m},fragmentShader:{log:z,prefix:h}})}r.deleteShader(A),r.deleteShader(w),U=new Qa(r,v),x=kv(r,v)}let U;this.getUniforms=function(){return U===void 0&&R(this),U};let x;this.getAttributes=function(){return x===void 0&&R(this),x};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(v,Iv)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Uv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=w,this}let s0=0;class a0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new o0(e),t.set(e,i)),i}}class o0{constructor(e){this.id=s0++,this.code=e,this.usedTimes=0}}function l0(n,e,t,i,r,s,a){const o=new zl,c=new a0,l=new Set,f=[],u=new Map,d=r.logarithmicDepthBuffer;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,y,P,G,I){const O=G.fog,X=I.geometry,F=x.isMeshStandardMaterial?G.environment:null,z=(x.isMeshStandardMaterial?t:e).get(x.envMap||F),te=z&&z.mapping===ya?z.image.height:null,re=_[x.type];x.precision!==null&&(p=r.getMaxPrecision(x.precision),p!==x.precision&&Ye("WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const ae=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,de=ae!==void 0?ae.length:0;let Re=0;X.morphAttributes.position!==void 0&&(Re=1),X.morphAttributes.normal!==void 0&&(Re=2),X.morphAttributes.color!==void 0&&(Re=3);let me,Fe,Ue,V;if(re){const et=di[re];me=et.vertexShader,Fe=et.fragmentShader}else me=x.vertexShader,Fe=x.fragmentShader,c.update(x),Ue=c.getVertexShaderID(x),V=c.getFragmentShaderID(x);const j=n.getRenderTarget(),K=n.state.buffers.depth.getReversed(),_e=I.isInstancedMesh===!0,le=I.isBatchedMesh===!0,Ce=!!x.map,Pe=!!x.matcap,Ee=!!z,ze=!!x.aoMap,Je=!!x.lightMap,Ge=!!x.bumpMap,pt=!!x.normalMap,C=!!x.displacementMap,ft=!!x.emissiveMap,nt=!!x.metalnessMap,dt=!!x.roughnessMap,ye=x.anisotropy>0,T=x.clearcoat>0,g=x.dispersion>0,L=x.iridescence>0,q=x.sheen>0,ie=x.transmission>0,W=ye&&!!x.anisotropyMap,be=T&&!!x.clearcoatMap,he=T&&!!x.clearcoatNormalMap,Te=T&&!!x.clearcoatRoughnessMap,Ne=L&&!!x.iridescenceMap,oe=L&&!!x.iridescenceThicknessMap,fe=q&&!!x.sheenColorMap,xe=q&&!!x.sheenRoughnessMap,Me=!!x.specularMap,ue=!!x.specularColorMap,ke=!!x.specularIntensityMap,D=ie&&!!x.transmissionMap,ee=ie&&!!x.thicknessMap,J=!!x.gradientMap,ce=!!x.alphaMap,Q=x.alphaTest>0,Z=!!x.alphaHash,se=!!x.extensions;let Ie=cn;x.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ie=n.toneMapping);const Qe={shaderID:re,shaderType:x.type,shaderName:x.name,vertexShader:me,fragmentShader:Fe,defines:x.defines,customVertexShaderID:Ue,customFragmentShaderID:V,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,batching:le,batchingColor:le&&I._colorsTexture!==null,instancing:_e,instancingColor:_e&&I.instanceColor!==null,instancingMorph:_e&&I.morphTexture!==null,outputColorSpace:j===null?n.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ts,alphaToCoverage:!!x.alphaToCoverage,map:Ce,matcap:Pe,envMap:Ee,envMapMode:Ee&&z.mapping,envMapCubeUVHeight:te,aoMap:ze,lightMap:Je,bumpMap:Ge,normalMap:pt,displacementMap:C,emissiveMap:ft,normalMapObjectSpace:pt&&x.normalMapType===Tp,normalMapTangentSpace:pt&&x.normalMapType===Gu,metalnessMap:nt,roughnessMap:dt,anisotropy:ye,anisotropyMap:W,clearcoat:T,clearcoatMap:be,clearcoatNormalMap:he,clearcoatRoughnessMap:Te,dispersion:g,iridescence:L,iridescenceMap:Ne,iridescenceThicknessMap:oe,sheen:q,sheenColorMap:fe,sheenRoughnessMap:xe,specularMap:Me,specularColorMap:ue,specularIntensityMap:ke,transmission:ie,transmissionMap:D,thicknessMap:ee,gradientMap:J,opaque:x.transparent===!1&&x.blending===Kr&&x.alphaToCoverage===!1,alphaMap:ce,alphaTest:Q,alphaHash:Z,combine:x.combine,mapUv:Ce&&v(x.map.channel),aoMapUv:ze&&v(x.aoMap.channel),lightMapUv:Je&&v(x.lightMap.channel),bumpMapUv:Ge&&v(x.bumpMap.channel),normalMapUv:pt&&v(x.normalMap.channel),displacementMapUv:C&&v(x.displacementMap.channel),emissiveMapUv:ft&&v(x.emissiveMap.channel),metalnessMapUv:nt&&v(x.metalnessMap.channel),roughnessMapUv:dt&&v(x.roughnessMap.channel),anisotropyMapUv:W&&v(x.anisotropyMap.channel),clearcoatMapUv:be&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:he&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:xe&&v(x.sheenRoughnessMap.channel),specularMapUv:Me&&v(x.specularMap.channel),specularColorMapUv:ue&&v(x.specularColorMap.channel),specularIntensityMapUv:ke&&v(x.specularIntensityMap.channel),transmissionMapUv:D&&v(x.transmissionMap.channel),thicknessMapUv:ee&&v(x.thicknessMap.channel),alphaMapUv:ce&&v(x.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(pt||ye),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!X.attributes.uv&&(Ce||ce),fog:!!O,useFog:x.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:K,skinning:I.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Re,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ie,decodeVideoTexture:Ce&&x.map.isVideoTexture===!0&&ut.getTransfer(x.map.colorSpace)===xt,decodeVideoTextureEmissive:ft&&x.emissiveMap.isVideoTexture===!0&&ut.getTransfer(x.emissiveMap.colorSpace)===xt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===xn,flipSided:x.side===vn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:se&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&x.extensions.multiDraw===!0||le)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Qe.vertexUv1s=l.has(1),Qe.vertexUv2s=l.has(2),Qe.vertexUv3s=l.has(3),l.clear(),Qe}function h(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)y.push(P),y.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(b(y,x),M(y,x),y.push(n.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function b(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function M(x,y){o.disableAll(),y.instancing&&o.enable(0),y.instancingColor&&o.enable(1),y.instancingMorph&&o.enable(2),y.matcap&&o.enable(3),y.envMap&&o.enable(4),y.normalMapObjectSpace&&o.enable(5),y.normalMapTangentSpace&&o.enable(6),y.clearcoat&&o.enable(7),y.iridescence&&o.enable(8),y.alphaTest&&o.enable(9),y.vertexColors&&o.enable(10),y.vertexAlphas&&o.enable(11),y.vertexUv1s&&o.enable(12),y.vertexUv2s&&o.enable(13),y.vertexUv3s&&o.enable(14),y.vertexTangents&&o.enable(15),y.anisotropy&&o.enable(16),y.alphaHash&&o.enable(17),y.batching&&o.enable(18),y.dispersion&&o.enable(19),y.batchingColor&&o.enable(20),y.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),x.push(o.mask)}function E(x){const y=_[x.type];let P;if(y){const G=di[y];P=Qp.clone(G.uniforms)}else P=x.uniforms;return P}function A(x,y){let P=u.get(y);return P!==void 0?++P.usedTimes:(P=new r0(n,y,x,s),f.push(P),u.set(y,P)),P}function w(x){if(--x.usedTimes===0){const y=f.indexOf(x);f[y]=f[f.length-1],f.pop(),u.delete(x.cacheKey),x.destroy()}}function R(x){c.remove(x)}function U(){c.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:E,acquireProgram:A,releaseProgram:w,releaseShaderCache:R,programs:f,dispose:U}}function c0(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function u0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Qf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ed(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(u,d,p,_,v,m){let h=n[e];return h===void 0?(h={id:u.id,object:u,geometry:d,material:p,groupOrder:_,renderOrder:u.renderOrder,z:v,group:m},n[e]=h):(h.id=u.id,h.object=u,h.geometry=d,h.material=p,h.groupOrder=_,h.renderOrder=u.renderOrder,h.z=v,h.group=m),e++,h}function o(u,d,p,_,v,m){const h=a(u,d,p,_,v,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function c(u,d,p,_,v,m){const h=a(u,d,p,_,v,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function l(u,d){t.length>1&&t.sort(u||u0),i.length>1&&i.sort(d||Qf),r.length>1&&r.sort(d||Qf)}function f(){for(let u=e,d=n.length;u<d;u++){const p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:f,sort:l}}function f0(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new ed,n.set(i,[a])):r>=s.length?(a=new ed,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function d0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new ht};break;case"SpotLight":t={position:new H,direction:new H,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new ht,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":t={color:new ht,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function h0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let p0=0;function m0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function _0(n){const e=new d0,t=h0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new H);const r=new H,s=new Rt,a=new Rt;function o(l){let f=0,u=0,d=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let p=0,_=0,v=0,m=0,h=0,b=0,M=0,E=0,A=0,w=0,R=0;l.sort(m0);for(let x=0,y=l.length;x<y;x++){const P=l[x],G=P.color,I=P.intensity,O=P.distance;let X=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===es?X=P.shadow.map.texture:X=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)f+=G.r*I,u+=G.g*I,d+=G.b*I;else if(P.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(P.sh.coefficients[F],I);R++}else if(P.isDirectionalLight){const F=e.get(P);if(F.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const z=P.shadow,te=t.get(P);te.shadowIntensity=z.intensity,te.shadowBias=z.bias,te.shadowNormalBias=z.normalBias,te.shadowRadius=z.radius,te.shadowMapSize=z.mapSize,i.directionalShadow[p]=te,i.directionalShadowMap[p]=X,i.directionalShadowMatrix[p]=P.shadow.matrix,b++}i.directional[p]=F,p++}else if(P.isSpotLight){const F=e.get(P);F.position.setFromMatrixPosition(P.matrixWorld),F.color.copy(G).multiplyScalar(I),F.distance=O,F.coneCos=Math.cos(P.angle),F.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),F.decay=P.decay,i.spot[v]=F;const z=P.shadow;if(P.map&&(i.spotLightMap[A]=P.map,A++,z.updateMatrices(P),P.castShadow&&w++),i.spotLightMatrix[v]=z.matrix,P.castShadow){const te=t.get(P);te.shadowIntensity=z.intensity,te.shadowBias=z.bias,te.shadowNormalBias=z.normalBias,te.shadowRadius=z.radius,te.shadowMapSize=z.mapSize,i.spotShadow[v]=te,i.spotShadowMap[v]=X,E++}v++}else if(P.isRectAreaLight){const F=e.get(P);F.color.copy(G).multiplyScalar(I),F.halfWidth.set(P.width*.5,0,0),F.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=F,m++}else if(P.isPointLight){const F=e.get(P);if(F.color.copy(P.color).multiplyScalar(P.intensity),F.distance=P.distance,F.decay=P.decay,P.castShadow){const z=P.shadow,te=t.get(P);te.shadowIntensity=z.intensity,te.shadowBias=z.bias,te.shadowNormalBias=z.normalBias,te.shadowRadius=z.radius,te.shadowMapSize=z.mapSize,te.shadowCameraNear=z.camera.near,te.shadowCameraFar=z.camera.far,i.pointShadow[_]=te,i.pointShadowMap[_]=X,i.pointShadowMatrix[_]=P.shadow.matrix,M++}i.point[_]=F,_++}else if(P.isHemisphereLight){const F=e.get(P);F.skyColor.copy(P.color).multiplyScalar(I),F.groundColor.copy(P.groundColor).multiplyScalar(I),i.hemi[h]=F,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=u,i.ambient[2]=d;const U=i.hash;(U.directionalLength!==p||U.pointLength!==_||U.spotLength!==v||U.rectAreaLength!==m||U.hemiLength!==h||U.numDirectionalShadows!==b||U.numPointShadows!==M||U.numSpotShadows!==E||U.numSpotMaps!==A||U.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=E+A-w,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=R,U.directionalLength=p,U.pointLength=_,U.spotLength=v,U.rectAreaLength=m,U.hemiLength=h,U.numDirectionalShadows=b,U.numPointShadows=M,U.numSpotShadows=E,U.numSpotMaps=A,U.numLightProbes=R,i.version=p0++)}function c(l,f){let u=0,d=0,p=0,_=0,v=0;const m=f.matrixWorldInverse;for(let h=0,b=l.length;h<b;h++){const M=l[h];if(M.isDirectionalLight){const E=i.directional[u];E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),u++}else if(M.isSpotLight){const E=i.spot[p];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),p++}else if(M.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),a.identity(),s.copy(M.matrixWorld),s.premultiply(m),a.extractRotation(s),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const E=i.hemi[v];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(m),v++}}}return{setup:o,setupView:c,state:i}}function td(n){const e=new _0(n),t=[],i=[];function r(f){l.camera=f,t.length=0,i.length=0}function s(f){t.push(f)}function a(f){i.push(f)}function o(){e.setup(t)}function c(f){e.setupView(t,f)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function g0(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new td(n),e.set(r,[o])):s>=a.length?(o=new td(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const v0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,x0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,S0=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],M0=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],nd=new Rt,ra=new H,dc=new H;function E0(n,e,t){let i=new Ql;const r=new $e,s=new $e,a=new Pt,o=new fm,c=new dm,l={},f=t.maxTextureSize,u={[nr]:vn,[vn]:nr,[xn]:xn},d=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:v0,fragmentShader:x0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new Gi;_.setAttribute("position",new fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Mn(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ba;let h=this.type;this.render=function(w,R,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;w.type===np&&(Ye("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),w.type=ba);const x=n.getRenderTarget(),y=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),G=n.state;G.setBlending(Pi),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const I=h!==this.type;I&&R.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(X=>X.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,X=w.length;O<X;O++){const F=w[O],z=F.shadow;if(z===void 0){Ye("WebGLShadowMap:",F,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const te=z.getFrameExtents();if(r.multiply(te),s.copy(z.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/te.x),r.x=s.x*te.x,z.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/te.y),r.y=s.y*te.y,z.mapSize.y=s.y)),z.map===null||I===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Bs){if(F.isPointLight){Ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new ci(r.x,r.y,{format:es,type:Li,minFilter:yt,magFilter:yt,generateMipmaps:!1}),z.map.texture.name=F.name+".shadowMap",z.map.depthTexture=new ea(r.x,r.y,oi),z.map.depthTexture.name=F.name+".shadowMapDepth",z.map.depthTexture.format=Ii,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Qt,z.map.depthTexture.magFilter=Qt}else{F.isPointLight?(z.map=new Sf(r.x),z.map.depthTexture=new lm(r.x,ai)):(z.map=new ci(r.x,r.y),z.map.depthTexture=new ea(r.x,r.y,ai)),z.map.depthTexture.name=F.name+".shadowMap",z.map.depthTexture.format=Ii;const ae=n.state.buffers.depth.getReversed();this.type===ba?(z.map.depthTexture.compareFunction=ae?yl:bl,z.map.depthTexture.minFilter=yt,z.map.depthTexture.magFilter=yt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Qt,z.map.depthTexture.magFilter=Qt)}z.camera.updateProjectionMatrix()}const re=z.map.isWebGLCubeRenderTarget?6:1;for(let ae=0;ae<re;ae++){if(z.map.isWebGLCubeRenderTarget)n.setRenderTarget(z.map,ae),n.clear();else{ae===0&&(n.setRenderTarget(z.map),n.clear());const de=z.getViewport(ae);a.set(s.x*de.x,s.y*de.y,s.x*de.z,s.y*de.w),G.viewport(a)}if(F.isPointLight){const de=z.camera,Re=z.matrix,me=F.distance||de.far;me!==de.far&&(de.far=me,de.updateProjectionMatrix()),ra.setFromMatrixPosition(F.matrixWorld),de.position.copy(ra),dc.copy(de.position),dc.add(S0[ae]),de.up.copy(M0[ae]),de.lookAt(dc),de.updateMatrixWorld(),Re.makeTranslation(-ra.x,-ra.y,-ra.z),nd.multiplyMatrices(de.projectionMatrix,de.matrixWorldInverse),z._frustum.setFromProjectionMatrix(nd,de.coordinateSystem,de.reversedDepth)}else z.updateMatrices(F);i=z.getFrustum(),E(R,U,z.camera,F,this.type)}z.isPointLightShadow!==!0&&this.type===Bs&&b(z,U),z.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(x,y,P)};function b(w,R){const U=e.update(v);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ci(r.x,r.y,{format:es,type:Li})),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(R,null,U,d,v,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(R,null,U,p,v,null)}function M(w,R,U,x){let y=null;const P=U.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)y=P;else if(y=U.isPointLight===!0?c:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const G=y.uuid,I=R.uuid;let O=l[G];O===void 0&&(O={},l[G]=O);let X=O[I];X===void 0&&(X=y.clone(),O[I]=X,R.addEventListener("dispose",A)),y=X}if(y.visible=R.visible,y.wireframe=R.wireframe,x===Bs?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:u[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,U.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const G=n.properties.get(y);G.light=U}return y}function E(w,R,U,x,y){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===Bs)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,w.matrixWorld);const I=e.update(w),O=w.material;if(Array.isArray(O)){const X=I.groups;for(let F=0,z=X.length;F<z;F++){const te=X[F],re=O[te.materialIndex];if(re&&re.visible){const ae=M(w,re,x,y);w.onBeforeShadow(n,w,R,U,I,ae,te),n.renderBufferDirect(U,null,I,ae,w,te),w.onAfterShadow(n,w,R,U,I,ae,te)}}}else if(O.visible){const X=M(w,O,x,y);w.onBeforeShadow(n,w,R,U,I,X,null),n.renderBufferDirect(U,null,I,X,w,null),w.onAfterShadow(n,w,R,U,I,X,null)}}const G=w.children;for(let I=0,O=G.length;I<O;I++)E(G[I],R,U,x,y)}function A(w){w.target.removeEventListener("dispose",A);for(const U in l){const x=l[U],y=w.target.uuid;y in x&&(x[y].dispose(),delete x[y])}}}const b0={[wo]:Ro,[Co]:Lo,[Po]:Io,[Jr]:Do,[Ro]:wo,[Lo]:Co,[Io]:Po,[Do]:Jr};function y0(n,e){function t(){let D=!1;const ee=new Pt;let J=null;const ce=new Pt(0,0,0,0);return{setMask:function(Q){J!==Q&&!D&&(n.colorMask(Q,Q,Q,Q),J=Q)},setLocked:function(Q){D=Q},setClear:function(Q,Z,se,Ie,Qe){Qe===!0&&(Q*=Ie,Z*=Ie,se*=Ie),ee.set(Q,Z,se,Ie),ce.equals(ee)===!1&&(n.clearColor(Q,Z,se,Ie),ce.copy(ee))},reset:function(){D=!1,J=null,ce.set(-1,0,0,0)}}}function i(){let D=!1,ee=!1,J=null,ce=null,Q=null;return{setReversed:function(Z){if(ee!==Z){const se=e.get("EXT_clip_control");Z?se.clipControlEXT(se.LOWER_LEFT_EXT,se.ZERO_TO_ONE_EXT):se.clipControlEXT(se.LOWER_LEFT_EXT,se.NEGATIVE_ONE_TO_ONE_EXT),ee=Z;const Ie=Q;Q=null,this.setClear(Ie)}},getReversed:function(){return ee},setTest:function(Z){Z?j(n.DEPTH_TEST):K(n.DEPTH_TEST)},setMask:function(Z){J!==Z&&!D&&(n.depthMask(Z),J=Z)},setFunc:function(Z){if(ee&&(Z=b0[Z]),ce!==Z){switch(Z){case wo:n.depthFunc(n.NEVER);break;case Ro:n.depthFunc(n.ALWAYS);break;case Co:n.depthFunc(n.LESS);break;case Jr:n.depthFunc(n.LEQUAL);break;case Po:n.depthFunc(n.EQUAL);break;case Do:n.depthFunc(n.GEQUAL);break;case Lo:n.depthFunc(n.GREATER);break;case Io:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ce=Z}},setLocked:function(Z){D=Z},setClear:function(Z){Q!==Z&&(ee&&(Z=1-Z),n.clearDepth(Z),Q=Z)},reset:function(){D=!1,J=null,ce=null,Q=null,ee=!1}}}function r(){let D=!1,ee=null,J=null,ce=null,Q=null,Z=null,se=null,Ie=null,Qe=null;return{setTest:function(et){D||(et?j(n.STENCIL_TEST):K(n.STENCIL_TEST))},setMask:function(et){ee!==et&&!D&&(n.stencilMask(et),ee=et)},setFunc:function(et,Ht,Ct){(J!==et||ce!==Ht||Q!==Ct)&&(n.stencilFunc(et,Ht,Ct),J=et,ce=Ht,Q=Ct)},setOp:function(et,Ht,Ct){(Z!==et||se!==Ht||Ie!==Ct)&&(n.stencilOp(et,Ht,Ct),Z=et,se=Ht,Ie=Ct)},setLocked:function(et){D=et},setClear:function(et){Qe!==et&&(n.clearStencil(et),Qe=et)},reset:function(){D=!1,ee=null,J=null,ce=null,Q=null,Z=null,se=null,Ie=null,Qe=null}}}const s=new t,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let f={},u={},d=new WeakMap,p=[],_=null,v=!1,m=null,h=null,b=null,M=null,E=null,A=null,w=null,R=new ht(0,0,0),U=0,x=!1,y=null,P=null,G=null,I=null,O=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,z=0;const te=n.getParameter(n.VERSION);te.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(te)[1]),F=z>=1):te.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),F=z>=2);let re=null,ae={};const de=n.getParameter(n.SCISSOR_BOX),Re=n.getParameter(n.VIEWPORT),me=new Pt().fromArray(de),Fe=new Pt().fromArray(Re);function Ue(D,ee,J,ce){const Q=new Uint8Array(4),Z=n.createTexture();n.bindTexture(D,Z),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let se=0;se<J;se++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(ee,0,n.RGBA,1,1,ce,0,n.RGBA,n.UNSIGNED_BYTE,Q):n.texImage2D(ee+se,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Q);return Z}const V={};V[n.TEXTURE_2D]=Ue(n.TEXTURE_2D,n.TEXTURE_2D,1),V[n.TEXTURE_CUBE_MAP]=Ue(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[n.TEXTURE_2D_ARRAY]=Ue(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),V[n.TEXTURE_3D]=Ue(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(n.DEPTH_TEST),a.setFunc(Jr),Ge(!1),pt(Mu),j(n.CULL_FACE),ze(Pi);function j(D){f[D]!==!0&&(n.enable(D),f[D]=!0)}function K(D){f[D]!==!1&&(n.disable(D),f[D]=!1)}function _e(D,ee){return u[D]!==ee?(n.bindFramebuffer(D,ee),u[D]=ee,D===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ee),D===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ee),!0):!1}function le(D,ee){let J=p,ce=!1;if(D){J=d.get(ee),J===void 0&&(J=[],d.set(ee,J));const Q=D.textures;if(J.length!==Q.length||J[0]!==n.COLOR_ATTACHMENT0){for(let Z=0,se=Q.length;Z<se;Z++)J[Z]=n.COLOR_ATTACHMENT0+Z;J.length=Q.length,ce=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,ce=!0);ce&&n.drawBuffers(J)}function Ce(D){return _!==D?(n.useProgram(D),_=D,!0):!1}const Pe={[Er]:n.FUNC_ADD,[rp]:n.FUNC_SUBTRACT,[sp]:n.FUNC_REVERSE_SUBTRACT};Pe[ap]=n.MIN,Pe[op]=n.MAX;const Ee={[lp]:n.ZERO,[cp]:n.ONE,[up]:n.SRC_COLOR,[To]:n.SRC_ALPHA,[_p]:n.SRC_ALPHA_SATURATE,[pp]:n.DST_COLOR,[dp]:n.DST_ALPHA,[fp]:n.ONE_MINUS_SRC_COLOR,[Ao]:n.ONE_MINUS_SRC_ALPHA,[mp]:n.ONE_MINUS_DST_COLOR,[hp]:n.ONE_MINUS_DST_ALPHA,[gp]:n.CONSTANT_COLOR,[vp]:n.ONE_MINUS_CONSTANT_COLOR,[xp]:n.CONSTANT_ALPHA,[Sp]:n.ONE_MINUS_CONSTANT_ALPHA};function ze(D,ee,J,ce,Q,Z,se,Ie,Qe,et){if(D===Pi){v===!0&&(K(n.BLEND),v=!1);return}if(v===!1&&(j(n.BLEND),v=!0),D!==ip){if(D!==m||et!==x){if((h!==Er||E!==Er)&&(n.blendEquation(n.FUNC_ADD),h=Er,E=Er),et)switch(D){case Kr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Eu:n.blendFunc(n.ONE,n.ONE);break;case bu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ct("WebGLState: Invalid blending: ",D);break}else switch(D){case Kr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Eu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case bu:ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yu:ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ct("WebGLState: Invalid blending: ",D);break}b=null,M=null,A=null,w=null,R.set(0,0,0),U=0,m=D,x=et}return}Q=Q||ee,Z=Z||J,se=se||ce,(ee!==h||Q!==E)&&(n.blendEquationSeparate(Pe[ee],Pe[Q]),h=ee,E=Q),(J!==b||ce!==M||Z!==A||se!==w)&&(n.blendFuncSeparate(Ee[J],Ee[ce],Ee[Z],Ee[se]),b=J,M=ce,A=Z,w=se),(Ie.equals(R)===!1||Qe!==U)&&(n.blendColor(Ie.r,Ie.g,Ie.b,Qe),R.copy(Ie),U=Qe),m=D,x=!1}function Je(D,ee){D.side===xn?K(n.CULL_FACE):j(n.CULL_FACE);let J=D.side===vn;ee&&(J=!J),Ge(J),D.blending===Kr&&D.transparent===!1?ze(Pi):ze(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const ce=D.stencilWrite;o.setTest(ce),ce&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ft(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?j(n.SAMPLE_ALPHA_TO_COVERAGE):K(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(D){y!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),y=D)}function pt(D){D!==ep?(j(n.CULL_FACE),D!==P&&(D===Mu?n.cullFace(n.BACK):D===tp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):K(n.CULL_FACE),P=D}function C(D){D!==G&&(F&&n.lineWidth(D),G=D)}function ft(D,ee,J){D?(j(n.POLYGON_OFFSET_FILL),(I!==ee||O!==J)&&(n.polygonOffset(ee,J),I=ee,O=J)):K(n.POLYGON_OFFSET_FILL)}function nt(D){D?j(n.SCISSOR_TEST):K(n.SCISSOR_TEST)}function dt(D){D===void 0&&(D=n.TEXTURE0+X-1),re!==D&&(n.activeTexture(D),re=D)}function ye(D,ee,J){J===void 0&&(re===null?J=n.TEXTURE0+X-1:J=re);let ce=ae[J];ce===void 0&&(ce={type:void 0,texture:void 0},ae[J]=ce),(ce.type!==D||ce.texture!==ee)&&(re!==J&&(n.activeTexture(J),re=J),n.bindTexture(D,ee||V[D]),ce.type=D,ce.texture=ee)}function T(){const D=ae[re];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function g(){try{n.compressedTexImage2D(...arguments)}catch(D){ct("WebGLState:",D)}}function L(){try{n.compressedTexImage3D(...arguments)}catch(D){ct("WebGLState:",D)}}function q(){try{n.texSubImage2D(...arguments)}catch(D){ct("WebGLState:",D)}}function ie(){try{n.texSubImage3D(...arguments)}catch(D){ct("WebGLState:",D)}}function W(){try{n.compressedTexSubImage2D(...arguments)}catch(D){ct("WebGLState:",D)}}function be(){try{n.compressedTexSubImage3D(...arguments)}catch(D){ct("WebGLState:",D)}}function he(){try{n.texStorage2D(...arguments)}catch(D){ct("WebGLState:",D)}}function Te(){try{n.texStorage3D(...arguments)}catch(D){ct("WebGLState:",D)}}function Ne(){try{n.texImage2D(...arguments)}catch(D){ct("WebGLState:",D)}}function oe(){try{n.texImage3D(...arguments)}catch(D){ct("WebGLState:",D)}}function fe(D){me.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),me.copy(D))}function xe(D){Fe.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),Fe.copy(D))}function Me(D,ee){let J=l.get(ee);J===void 0&&(J=new WeakMap,l.set(ee,J));let ce=J.get(D);ce===void 0&&(ce=n.getUniformBlockIndex(ee,D.name),J.set(D,ce))}function ue(D,ee){const ce=l.get(ee).get(D);c.get(ee)!==ce&&(n.uniformBlockBinding(ee,ce,D.__bindingPointIndex),c.set(ee,ce))}function ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},re=null,ae={},u={},d=new WeakMap,p=[],_=null,v=!1,m=null,h=null,b=null,M=null,E=null,A=null,w=null,R=new ht(0,0,0),U=0,x=!1,y=null,P=null,G=null,I=null,O=null,me.set(0,0,n.canvas.width,n.canvas.height),Fe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:j,disable:K,bindFramebuffer:_e,drawBuffers:le,useProgram:Ce,setBlending:ze,setMaterial:Je,setFlipSided:Ge,setCullFace:pt,setLineWidth:C,setPolygonOffset:ft,setScissorTest:nt,activeTexture:dt,bindTexture:ye,unbindTexture:T,compressedTexImage2D:g,compressedTexImage3D:L,texImage2D:Ne,texImage3D:oe,updateUBOMapping:Me,uniformBlockBinding:ue,texStorage2D:he,texStorage3D:Te,texSubImage2D:q,texSubImage3D:ie,compressedTexSubImage2D:W,compressedTexSubImage3D:be,scissor:fe,viewport:xe,reset:ke}}function T0(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new $e,f=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,g){return p?new OffscreenCanvas(T,g):Gs("canvas")}function v(T,g,L){let q=1;const ie=ye(T);if((ie.width>L||ie.height>L)&&(q=L/Math.max(ie.width,ie.height)),q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const W=Math.floor(q*ie.width),be=Math.floor(q*ie.height);u===void 0&&(u=_(W,be));const he=g?_(W,be):u;return he.width=W,he.height=be,he.getContext("2d").drawImage(T,0,0,W,be),Ye("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+W+"x"+be+")."),he}else return"data"in T&&Ye("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),T;return T}function m(T){return T.generateMipmaps}function h(T){n.generateMipmap(T)}function b(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(T,g,L,q,ie=!1){if(T!==null){if(n[T]!==void 0)return n[T];Ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let W=g;if(g===n.RED&&(L===n.FLOAT&&(W=n.R32F),L===n.HALF_FLOAT&&(W=n.R16F),L===n.UNSIGNED_BYTE&&(W=n.R8)),g===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(W=n.R8UI),L===n.UNSIGNED_SHORT&&(W=n.R16UI),L===n.UNSIGNED_INT&&(W=n.R32UI),L===n.BYTE&&(W=n.R8I),L===n.SHORT&&(W=n.R16I),L===n.INT&&(W=n.R32I)),g===n.RG&&(L===n.FLOAT&&(W=n.RG32F),L===n.HALF_FLOAT&&(W=n.RG16F),L===n.UNSIGNED_BYTE&&(W=n.RG8)),g===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(W=n.RG8UI),L===n.UNSIGNED_SHORT&&(W=n.RG16UI),L===n.UNSIGNED_INT&&(W=n.RG32UI),L===n.BYTE&&(W=n.RG8I),L===n.SHORT&&(W=n.RG16I),L===n.INT&&(W=n.RG32I)),g===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(W=n.RGB8UI),L===n.UNSIGNED_SHORT&&(W=n.RGB16UI),L===n.UNSIGNED_INT&&(W=n.RGB32UI),L===n.BYTE&&(W=n.RGB8I),L===n.SHORT&&(W=n.RGB16I),L===n.INT&&(W=n.RGB32I)),g===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),L===n.UNSIGNED_INT&&(W=n.RGBA32UI),L===n.BYTE&&(W=n.RGBA8I),L===n.SHORT&&(W=n.RGBA16I),L===n.INT&&(W=n.RGBA32I)),g===n.RGB&&(L===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),L===n.UNSIGNED_INT_10F_11F_11F_REV&&(W=n.R11F_G11F_B10F)),g===n.RGBA){const be=ie?Pa:ut.getTransfer(q);L===n.FLOAT&&(W=n.RGBA32F),L===n.HALF_FLOAT&&(W=n.RGBA16F),L===n.UNSIGNED_BYTE&&(W=be===xt?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function E(T,g){let L;return T?g===null||g===ai||g===Vs?L=n.DEPTH24_STENCIL8:g===oi?L=n.DEPTH32F_STENCIL8:g===zs&&(L=n.DEPTH24_STENCIL8,Ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===ai||g===Vs?L=n.DEPTH_COMPONENT24:g===oi?L=n.DEPTH_COMPONENT32F:g===zs&&(L=n.DEPTH_COMPONENT16),L}function A(T,g){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Qt&&T.minFilter!==yt?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function w(T){const g=T.target;g.removeEventListener("dispose",w),U(g),g.isVideoTexture&&f.delete(g)}function R(T){const g=T.target;g.removeEventListener("dispose",R),y(g)}function U(T){const g=i.get(T);if(g.__webglInit===void 0)return;const L=T.source,q=d.get(L);if(q){const ie=q[g.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&x(T),Object.keys(q).length===0&&d.delete(L)}i.remove(T)}function x(T){const g=i.get(T);n.deleteTexture(g.__webglTexture);const L=T.source,q=d.get(L);delete q[g.__cacheKey],a.memory.textures--}function y(T){const g=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(g.__webglFramebuffer[q]))for(let ie=0;ie<g.__webglFramebuffer[q].length;ie++)n.deleteFramebuffer(g.__webglFramebuffer[q][ie]);else n.deleteFramebuffer(g.__webglFramebuffer[q]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[q])}else{if(Array.isArray(g.__webglFramebuffer))for(let q=0;q<g.__webglFramebuffer.length;q++)n.deleteFramebuffer(g.__webglFramebuffer[q]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let q=0;q<g.__webglColorRenderbuffer.length;q++)g.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[q]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const L=T.textures;for(let q=0,ie=L.length;q<ie;q++){const W=i.get(L[q]);W.__webglTexture&&(n.deleteTexture(W.__webglTexture),a.memory.textures--),i.remove(L[q])}i.remove(T)}let P=0;function G(){P=0}function I(){const T=P;return T>=r.maxTextures&&Ye("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),P+=1,T}function O(T){const g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function X(T,g){const L=i.get(T);if(T.isVideoTexture&&nt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&L.__version!==T.version){const q=T.image;if(q===null)Ye("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Ye("WebGLRenderer: Texture marked for update but image is incomplete");else{V(L,T,g);return}}else T.isExternalTexture&&(L.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+g)}function F(T,g){const L=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&L.__version!==T.version){V(L,T,g);return}else T.isExternalTexture&&(L.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+g)}function z(T,g){const L=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&L.__version!==T.version){V(L,T,g);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+g)}function te(T,g){const L=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&L.__version!==T.version){j(L,T,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+g)}const re={[Fo]:n.REPEAT,[Di]:n.CLAMP_TO_EDGE,[Oo]:n.MIRRORED_REPEAT},ae={[Qt]:n.NEAREST,[bp]:n.NEAREST_MIPMAP_NEAREST,[Ta]:n.NEAREST_MIPMAP_LINEAR,[yt]:n.LINEAR,[Bo]:n.LINEAR_MIPMAP_NEAREST,[yr]:n.LINEAR_MIPMAP_LINEAR},de={[Ap]:n.NEVER,[Dp]:n.ALWAYS,[wp]:n.LESS,[bl]:n.LEQUAL,[Rp]:n.EQUAL,[yl]:n.GEQUAL,[Cp]:n.GREATER,[Pp]:n.NOTEQUAL};function Re(T,g){if(g.type===oi&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===yt||g.magFilter===Bo||g.magFilter===Ta||g.magFilter===yr||g.minFilter===yt||g.minFilter===Bo||g.minFilter===Ta||g.minFilter===yr)&&Ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,re[g.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,re[g.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,re[g.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,ae[g.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,ae[g.minFilter]),g.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,de[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Qt||g.minFilter!==Ta&&g.minFilter!==yr||g.type===oi&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function me(T,g){let L=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",w));const q=g.source;let ie=d.get(q);ie===void 0&&(ie={},d.set(q,ie));const W=O(g);if(W!==T.__cacheKey){ie[W]===void 0&&(ie[W]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,L=!0),ie[W].usedTimes++;const be=ie[T.__cacheKey];be!==void 0&&(ie[T.__cacheKey].usedTimes--,be.usedTimes===0&&x(g)),T.__cacheKey=W,T.__webglTexture=ie[W].texture}return L}function Fe(T,g,L){return Math.floor(Math.floor(T/L)/g)}function Ue(T,g,L,q){const W=T.updateRanges;if(W.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,L,q,g.data);else{W.sort((oe,fe)=>oe.start-fe.start);let be=0;for(let oe=1;oe<W.length;oe++){const fe=W[be],xe=W[oe],Me=fe.start+fe.count,ue=Fe(xe.start,g.width,4),ke=Fe(fe.start,g.width,4);xe.start<=Me+1&&ue===ke&&Fe(xe.start+xe.count-1,g.width,4)===ue?fe.count=Math.max(fe.count,xe.start+xe.count-fe.start):(++be,W[be]=xe)}W.length=be+1;const he=n.getParameter(n.UNPACK_ROW_LENGTH),Te=n.getParameter(n.UNPACK_SKIP_PIXELS),Ne=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let oe=0,fe=W.length;oe<fe;oe++){const xe=W[oe],Me=Math.floor(xe.start/4),ue=Math.ceil(xe.count/4),ke=Me%g.width,D=Math.floor(Me/g.width),ee=ue,J=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ke),n.pixelStorei(n.UNPACK_SKIP_ROWS,D),t.texSubImage2D(n.TEXTURE_2D,0,ke,D,ee,J,L,q,g.data)}T.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,he),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Te),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ne)}}function V(T,g,L){let q=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(q=n.TEXTURE_3D);const ie=me(T,g),W=g.source;t.bindTexture(q,T.__webglTexture,n.TEXTURE0+L);const be=i.get(W);if(W.version!==be.__version||ie===!0){t.activeTexture(n.TEXTURE0+L);const he=ut.getPrimaries(ut.workingColorSpace),Te=g.colorSpace===ir?null:ut.getPrimaries(g.colorSpace),Ne=g.colorSpace===ir||he===Te?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let oe=v(g.image,!1,r.maxTextureSize);oe=dt(g,oe);const fe=s.convert(g.format,g.colorSpace),xe=s.convert(g.type);let Me=M(g.internalFormat,fe,xe,g.colorSpace,g.isVideoTexture);Re(q,g);let ue;const ke=g.mipmaps,D=g.isVideoTexture!==!0,ee=be.__version===void 0||ie===!0,J=W.dataReady,ce=A(g,oe);if(g.isDepthTexture)Me=E(g.format===Tr,g.type),ee&&(D?t.texStorage2D(n.TEXTURE_2D,1,Me,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,Me,oe.width,oe.height,0,fe,xe,null));else if(g.isDataTexture)if(ke.length>0){D&&ee&&t.texStorage2D(n.TEXTURE_2D,ce,Me,ke[0].width,ke[0].height);for(let Q=0,Z=ke.length;Q<Z;Q++)ue=ke[Q],D?J&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,ue.width,ue.height,fe,xe,ue.data):t.texImage2D(n.TEXTURE_2D,Q,Me,ue.width,ue.height,0,fe,xe,ue.data);g.generateMipmaps=!1}else D?(ee&&t.texStorage2D(n.TEXTURE_2D,ce,Me,oe.width,oe.height),J&&Ue(g,oe,fe,xe)):t.texImage2D(n.TEXTURE_2D,0,Me,oe.width,oe.height,0,fe,xe,oe.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){D&&ee&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ce,Me,ke[0].width,ke[0].height,oe.depth);for(let Q=0,Z=ke.length;Q<Z;Q++)if(ue=ke[Q],g.format!==Jn)if(fe!==null)if(D){if(J)if(g.layerUpdates.size>0){const se=Rf(ue.width,ue.height,g.format,g.type);for(const Ie of g.layerUpdates){const Qe=ue.data.subarray(Ie*se/ue.data.BYTES_PER_ELEMENT,(Ie+1)*se/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,Ie,ue.width,ue.height,1,fe,Qe)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,ue.width,ue.height,oe.depth,fe,ue.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,Me,ue.width,ue.height,oe.depth,0,ue.data,0,0);else Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?J&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,ue.width,ue.height,oe.depth,fe,xe,ue.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Q,Me,ue.width,ue.height,oe.depth,0,fe,xe,ue.data)}else{D&&ee&&t.texStorage2D(n.TEXTURE_2D,ce,Me,ke[0].width,ke[0].height);for(let Q=0,Z=ke.length;Q<Z;Q++)ue=ke[Q],g.format!==Jn?fe!==null?D?J&&t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,ue.width,ue.height,fe,ue.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,Me,ue.width,ue.height,0,ue.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?J&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,ue.width,ue.height,fe,xe,ue.data):t.texImage2D(n.TEXTURE_2D,Q,Me,ue.width,ue.height,0,fe,xe,ue.data)}else if(g.isDataArrayTexture)if(D){if(ee&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ce,Me,oe.width,oe.height,oe.depth),J)if(g.layerUpdates.size>0){const Q=Rf(oe.width,oe.height,g.format,g.type);for(const Z of g.layerUpdates){const se=oe.data.subarray(Z*Q/oe.data.BYTES_PER_ELEMENT,(Z+1)*Q/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Z,oe.width,oe.height,1,fe,xe,se)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,fe,xe,oe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Me,oe.width,oe.height,oe.depth,0,fe,xe,oe.data);else if(g.isData3DTexture)D?(ee&&t.texStorage3D(n.TEXTURE_3D,ce,Me,oe.width,oe.height,oe.depth),J&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,fe,xe,oe.data)):t.texImage3D(n.TEXTURE_3D,0,Me,oe.width,oe.height,oe.depth,0,fe,xe,oe.data);else if(g.isFramebufferTexture){if(ee)if(D)t.texStorage2D(n.TEXTURE_2D,ce,Me,oe.width,oe.height);else{let Q=oe.width,Z=oe.height;for(let se=0;se<ce;se++)t.texImage2D(n.TEXTURE_2D,se,Me,Q,Z,0,fe,xe,null),Q>>=1,Z>>=1}}else if(ke.length>0){if(D&&ee){const Q=ye(ke[0]);t.texStorage2D(n.TEXTURE_2D,ce,Me,Q.width,Q.height)}for(let Q=0,Z=ke.length;Q<Z;Q++)ue=ke[Q],D?J&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,fe,xe,ue):t.texImage2D(n.TEXTURE_2D,Q,Me,fe,xe,ue);g.generateMipmaps=!1}else if(D){if(ee){const Q=ye(oe);t.texStorage2D(n.TEXTURE_2D,ce,Me,Q.width,Q.height)}J&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe,xe,oe)}else t.texImage2D(n.TEXTURE_2D,0,Me,fe,xe,oe);m(g)&&h(q),be.__version=W.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function j(T,g,L){if(g.image.length!==6)return;const q=me(T,g),ie=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+L);const W=i.get(ie);if(ie.version!==W.__version||q===!0){t.activeTexture(n.TEXTURE0+L);const be=ut.getPrimaries(ut.workingColorSpace),he=g.colorSpace===ir?null:ut.getPrimaries(g.colorSpace),Te=g.colorSpace===ir||be===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Ne=g.isCompressedTexture||g.image[0].isCompressedTexture,oe=g.image[0]&&g.image[0].isDataTexture,fe=[];for(let Z=0;Z<6;Z++)!Ne&&!oe?fe[Z]=v(g.image[Z],!0,r.maxCubemapSize):fe[Z]=oe?g.image[Z].image:g.image[Z],fe[Z]=dt(g,fe[Z]);const xe=fe[0],Me=s.convert(g.format,g.colorSpace),ue=s.convert(g.type),ke=M(g.internalFormat,Me,ue,g.colorSpace),D=g.isVideoTexture!==!0,ee=W.__version===void 0||q===!0,J=ie.dataReady;let ce=A(g,xe);Re(n.TEXTURE_CUBE_MAP,g);let Q;if(Ne){D&&ee&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ce,ke,xe.width,xe.height);for(let Z=0;Z<6;Z++){Q=fe[Z].mipmaps;for(let se=0;se<Q.length;se++){const Ie=Q[se];g.format!==Jn?Me!==null?D?J&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se,0,0,Ie.width,Ie.height,Me,Ie.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se,ke,Ie.width,Ie.height,0,Ie.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se,0,0,Ie.width,Ie.height,Me,ue,Ie.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se,ke,Ie.width,Ie.height,0,Me,ue,Ie.data)}}}else{if(Q=g.mipmaps,D&&ee){Q.length>0&&ce++;const Z=ye(fe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ce,ke,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(oe){D?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,fe[Z].width,fe[Z].height,Me,ue,fe[Z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,ke,fe[Z].width,fe[Z].height,0,Me,ue,fe[Z].data);for(let se=0;se<Q.length;se++){const Qe=Q[se].image[Z].image;D?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se+1,0,0,Qe.width,Qe.height,Me,ue,Qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se+1,ke,Qe.width,Qe.height,0,Me,ue,Qe.data)}}else{D?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Me,ue,fe[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,ke,Me,ue,fe[Z]);for(let se=0;se<Q.length;se++){const Ie=Q[se];D?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se+1,0,0,Me,ue,Ie.image[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se+1,ke,Me,ue,Ie.image[Z])}}}m(g)&&h(n.TEXTURE_CUBE_MAP),W.__version=ie.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function K(T,g,L,q,ie,W){const be=s.convert(L.format,L.colorSpace),he=s.convert(L.type),Te=M(L.internalFormat,be,he,L.colorSpace),Ne=i.get(g),oe=i.get(L);if(oe.__renderTarget=g,!Ne.__hasExternalTextures){const fe=Math.max(1,g.width>>W),xe=Math.max(1,g.height>>W);ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,W,Te,fe,xe,g.depth,0,be,he,null):t.texImage2D(ie,W,Te,fe,xe,0,be,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),ft(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,ie,oe.__webglTexture,0,C(g)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,ie,oe.__webglTexture,W),t.bindFramebuffer(n.FRAMEBUFFER,null)}function _e(T,g,L){if(n.bindRenderbuffer(n.RENDERBUFFER,T),g.depthBuffer){const q=g.depthTexture,ie=q&&q.isDepthTexture?q.type:null,W=E(g.stencilBuffer,ie),be=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ft(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,C(g),W,g.width,g.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,C(g),W,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,W,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,be,n.RENDERBUFFER,T)}else{const q=g.textures;for(let ie=0;ie<q.length;ie++){const W=q[ie],be=s.convert(W.format,W.colorSpace),he=s.convert(W.type),Te=M(W.internalFormat,be,he,W.colorSpace);ft(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,C(g),Te,g.width,g.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,C(g),Te,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,Te,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function le(T,g,L){const q=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ie=i.get(g.depthTexture);if(ie.__renderTarget=g,(!ie.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),q){if(ie.__webglInit===void 0&&(ie.__webglInit=!0,g.depthTexture.addEventListener("dispose",w)),ie.__webglTexture===void 0){ie.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ie.__webglTexture),Re(n.TEXTURE_CUBE_MAP,g.depthTexture);const Ne=s.convert(g.depthTexture.format),oe=s.convert(g.depthTexture.type);let fe;g.depthTexture.format===Ii?fe=n.DEPTH_COMPONENT24:g.depthTexture.format===Tr&&(fe=n.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,fe,g.width,g.height,0,Ne,oe,null)}}else X(g.depthTexture,0);const W=ie.__webglTexture,be=C(g),he=q?n.TEXTURE_CUBE_MAP_POSITIVE_X+L:n.TEXTURE_2D,Te=g.depthTexture.format===Tr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(g.depthTexture.format===Ii)ft(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Te,he,W,0,be):n.framebufferTexture2D(n.FRAMEBUFFER,Te,he,W,0);else if(g.depthTexture.format===Tr)ft(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Te,he,W,0,be):n.framebufferTexture2D(n.FRAMEBUFFER,Te,he,W,0);else throw new Error("Unknown depthTexture format")}function Ce(T){const g=i.get(T),L=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){const q=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),q){const ie=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,q.removeEventListener("dispose",ie)};q.addEventListener("dispose",ie),g.__depthDisposeCallback=ie}g.__boundDepthTexture=q}if(T.depthTexture&&!g.__autoAllocateDepthBuffer)if(L)for(let q=0;q<6;q++)le(g.__webglFramebuffer[q],T,q);else{const q=T.texture.mipmaps;q&&q.length>0?le(g.__webglFramebuffer[0],T,0):le(g.__webglFramebuffer,T,0)}else if(L){g.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[q]),g.__webglDepthbuffer[q]===void 0)g.__webglDepthbuffer[q]=n.createRenderbuffer(),_e(g.__webglDepthbuffer[q],T,!1);else{const ie=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=g.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,W)}}else{const q=T.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),_e(g.__webglDepthbuffer,T,!1);else{const ie=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,W)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pe(T,g,L){const q=i.get(T);g!==void 0&&K(q.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&Ce(T)}function Ee(T){const g=T.texture,L=i.get(T),q=i.get(g);T.addEventListener("dispose",R);const ie=T.textures,W=T.isWebGLCubeRenderTarget===!0,be=ie.length>1;if(be||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=g.version,a.memory.textures++),W){L.__webglFramebuffer=[];for(let he=0;he<6;he++)if(g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer[he]=[];for(let Te=0;Te<g.mipmaps.length;Te++)L.__webglFramebuffer[he][Te]=n.createFramebuffer()}else L.__webglFramebuffer[he]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer=[];for(let he=0;he<g.mipmaps.length;he++)L.__webglFramebuffer[he]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(be)for(let he=0,Te=ie.length;he<Te;he++){const Ne=i.get(ie[he]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&ft(T)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let he=0;he<ie.length;he++){const Te=ie[he];L.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[he]);const Ne=s.convert(Te.format,Te.colorSpace),oe=s.convert(Te.type),fe=M(Te.internalFormat,Ne,oe,Te.colorSpace,T.isXRRenderTarget===!0),xe=C(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,fe,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,L.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),_e(L.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(W){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),Re(n.TEXTURE_CUBE_MAP,g);for(let he=0;he<6;he++)if(g.mipmaps&&g.mipmaps.length>0)for(let Te=0;Te<g.mipmaps.length;Te++)K(L.__webglFramebuffer[he][Te],T,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Te);else K(L.__webglFramebuffer[he],T,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(g)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let he=0,Te=ie.length;he<Te;he++){const Ne=ie[he],oe=i.get(Ne);let fe=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(fe=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,oe.__webglTexture),Re(fe,Ne),K(L.__webglFramebuffer,T,Ne,n.COLOR_ATTACHMENT0+he,fe,0),m(Ne)&&h(fe)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(he=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,q.__webglTexture),Re(he,g),g.mipmaps&&g.mipmaps.length>0)for(let Te=0;Te<g.mipmaps.length;Te++)K(L.__webglFramebuffer[Te],T,g,n.COLOR_ATTACHMENT0,he,Te);else K(L.__webglFramebuffer,T,g,n.COLOR_ATTACHMENT0,he,0);m(g)&&h(he),t.unbindTexture()}T.depthBuffer&&Ce(T)}function ze(T){const g=T.textures;for(let L=0,q=g.length;L<q;L++){const ie=g[L];if(m(ie)){const W=b(T),be=i.get(ie).__webglTexture;t.bindTexture(W,be),h(W),t.unbindTexture()}}}const Je=[],Ge=[];function pt(T){if(T.samples>0){if(ft(T)===!1){const g=T.textures,L=T.width,q=T.height;let ie=n.COLOR_BUFFER_BIT;const W=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=i.get(T),he=g.length>1;if(he)for(let Ne=0;Ne<g.length;Ne++)t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);const Te=T.texture.mipmaps;Te&&Te.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Ne=0;Ne<g.length;Ne++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),he){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,be.__webglColorRenderbuffer[Ne]);const oe=i.get(g[Ne]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,oe,0)}n.blitFramebuffer(0,0,L,q,0,0,L,q,ie,n.NEAREST),c===!0&&(Je.length=0,Ge.length=0,Je.push(n.COLOR_ATTACHMENT0+Ne),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Je.push(W),Ge.push(W),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ge)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Je))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let Ne=0;Ne<g.length;Ne++){t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,be.__webglColorRenderbuffer[Ne]);const oe=i.get(g[Ne]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,oe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const g=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function C(T){return Math.min(r.maxSamples,T.samples)}function ft(T){const g=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function nt(T){const g=a.render.frame;f.get(T)!==g&&(f.set(T,g),T.update())}function dt(T,g){const L=T.colorSpace,q=T.format,ie=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||L!==ts&&L!==ir&&(ut.getTransfer(L)===xt?(q!==Jn||ie!==Cn)&&Ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ct("WebGLTextures: Unsupported texture color space:",L)),g}function ye(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=I,this.resetTextureUnits=G,this.setTexture2D=X,this.setTexture2DArray=F,this.setTexture3D=z,this.setTextureCube=te,this.rebindTextures=Pe,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=K,this.useMultisampledRTT=ft,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function A0(n,e){function t(i,r=ir){let s;const a=ut.getTransfer(r);if(i===Cn)return n.UNSIGNED_BYTE;if(i===Vo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Go)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Fu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ou)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Uu)return n.BYTE;if(i===Nu)return n.SHORT;if(i===zs)return n.UNSIGNED_SHORT;if(i===zo)return n.INT;if(i===ai)return n.UNSIGNED_INT;if(i===oi)return n.FLOAT;if(i===Li)return n.HALF_FLOAT;if(i===Bu)return n.ALPHA;if(i===zu)return n.RGB;if(i===Jn)return n.RGBA;if(i===Ii)return n.DEPTH_COMPONENT;if(i===Tr)return n.DEPTH_STENCIL;if(i===Vu)return n.RED;if(i===Ho)return n.RED_INTEGER;if(i===es)return n.RG;if(i===ko)return n.RG_INTEGER;if(i===Wo)return n.RGBA_INTEGER;if(i===Aa||i===wa||i===Ra||i===Ca)if(a===xt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Aa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===wa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ra)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ca)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Aa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===wa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ra)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ca)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Xo||i===Yo||i===qo||i===$o)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Xo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Yo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===qo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===$o)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===jo||i===Zo||i===Ko||i===Jo||i===Qo||i===el||i===tl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===jo||i===Zo)return a===xt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ko)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Jo)return s.COMPRESSED_R11_EAC;if(i===Qo)return s.COMPRESSED_SIGNED_R11_EAC;if(i===el)return s.COMPRESSED_RG11_EAC;if(i===tl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===nl||i===il||i===rl||i===sl||i===al||i===ol||i===ll||i===cl||i===ul||i===fl||i===dl||i===hl||i===pl||i===ml)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===nl)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===il)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===rl)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===sl)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===al)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ol)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ll)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===cl)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ul)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===fl)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===dl)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===hl)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===pl)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ml)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===_l||i===gl||i===vl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===_l)return a===xt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===gl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===vl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===xl||i===Sl||i===Ml||i===El)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===xl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Sl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ml)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===El)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Vs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const w0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,R0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class C0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Mf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new En({vertexShader:w0,fragmentShader:R0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mn(new Hi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class P0 extends is{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,f=null,u=null,d=null,p=null,_=null;const v=typeof XRWebGLBinding<"u",m=new C0,h={},b=t.getContextAttributes();let M=null,E=null;const A=[],w=[],R=new $e;let U=null;const x=new on;x.viewport=new Pt;const y=new on;y.viewport=new Pt;const P=[x,y],G=new Sm;let I=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let j=A[V];return j===void 0&&(j=new Kl,A[V]=j),j.getTargetRaySpace()},this.getControllerGrip=function(V){let j=A[V];return j===void 0&&(j=new Kl,A[V]=j),j.getGripSpace()},this.getHand=function(V){let j=A[V];return j===void 0&&(j=new Kl,A[V]=j),j.getHandSpace()};function X(V){const j=w.indexOf(V.inputSource);if(j===-1)return;const K=A[j];K!==void 0&&(K.update(V.inputSource,V.frame,l||a),K.dispatchEvent({type:V.type,data:V.inputSource}))}function F(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",z);for(let V=0;V<A.length;V++){const j=w[V];j!==null&&(w[V]=null,A[V].disconnect(j))}I=null,O=null,m.reset();for(const V in h)delete h[V];e.setRenderTarget(M),p=null,d=null,u=null,r=null,E=null,Ue.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&Ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,i.isPresenting===!0&&Ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",F),r.addEventListener("inputsourceschange",z),b.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let K=null,_e=null,le=null;b.depth&&(le=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=b.stencil?Tr:Ii,_e=b.stencil?Vs:ai);const Ce={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(Ce),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new ci(d.textureWidth,d.textureHeight,{format:Jn,type:Cn,depthTexture:new ea(d.textureWidth,d.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const K={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,K),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new ci(p.framebufferWidth,p.framebufferHeight,{format:Jn,type:Cn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Ue.setContext(r),Ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function z(V){for(let j=0;j<V.removed.length;j++){const K=V.removed[j],_e=w.indexOf(K);_e>=0&&(w[_e]=null,A[_e].disconnect(K))}for(let j=0;j<V.added.length;j++){const K=V.added[j];let _e=w.indexOf(K);if(_e===-1){for(let Ce=0;Ce<A.length;Ce++)if(Ce>=w.length){w.push(K),_e=Ce;break}else if(w[Ce]===null){w[Ce]=K,_e=Ce;break}if(_e===-1)break}const le=A[_e];le&&le.connect(K)}}const te=new H,re=new H;function ae(V,j,K){te.setFromMatrixPosition(j.matrixWorld),re.setFromMatrixPosition(K.matrixWorld);const _e=te.distanceTo(re),le=j.projectionMatrix.elements,Ce=K.projectionMatrix.elements,Pe=le[14]/(le[10]-1),Ee=le[14]/(le[10]+1),ze=(le[9]+1)/le[5],Je=(le[9]-1)/le[5],Ge=(le[8]-1)/le[0],pt=(Ce[8]+1)/Ce[0],C=Pe*Ge,ft=Pe*pt,nt=_e/(-Ge+pt),dt=nt*-Ge;if(j.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(dt),V.translateZ(nt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),le[10]===-1)V.projectionMatrix.copy(j.projectionMatrix),V.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const ye=Pe+nt,T=Ee+nt,g=C-dt,L=ft+(_e-dt),q=ze*Ee/T*ye,ie=Je*Ee/T*ye;V.projectionMatrix.makePerspective(g,L,q,ie,ye,T),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function de(V,j){j===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(j.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;let j=V.near,K=V.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(K=m.depthFar)),G.near=y.near=x.near=j,G.far=y.far=x.far=K,(I!==G.near||O!==G.far)&&(r.updateRenderState({depthNear:G.near,depthFar:G.far}),I=G.near,O=G.far),G.layers.mask=V.layers.mask|6,x.layers.mask=G.layers.mask&3,y.layers.mask=G.layers.mask&5;const _e=V.parent,le=G.cameras;de(G,_e);for(let Ce=0;Ce<le.length;Ce++)de(le[Ce],_e);le.length===2?ae(G,x,y):G.projectionMatrix.copy(x.projectionMatrix),Re(V,G,_e)};function Re(V,j,K){K===null?V.matrix.copy(j.matrixWorld):(V.matrix.copy(K.matrixWorld),V.matrix.invert(),V.matrix.multiply(j.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(j.projectionMatrix),V.projectionMatrixInverse.copy(j.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Al*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(V){c=V,d!==null&&(d.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(V){return h[V]};let me=null;function Fe(V,j){if(f=j.getViewerPose(l||a),_=j,f!==null){const K=f.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let _e=!1;K.length!==G.cameras.length&&(G.cameras.length=0,_e=!0);for(let Ee=0;Ee<K.length;Ee++){const ze=K[Ee];let Je=null;if(p!==null)Je=p.getViewport(ze);else{const pt=u.getViewSubImage(d,ze);Je=pt.viewport,Ee===0&&(e.setRenderTargetTextures(E,pt.colorTexture,pt.depthStencilTexture),e.setRenderTarget(E))}let Ge=P[Ee];Ge===void 0&&(Ge=new on,Ge.layers.enable(Ee),Ge.viewport=new Pt,P[Ee]=Ge),Ge.matrix.fromArray(ze.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(ze.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(Je.x,Je.y,Je.width,Je.height),Ee===0&&(G.matrix.copy(Ge.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),_e===!0&&G.cameras.push(Ge)}const le=r.enabledFeatures;if(le&&le.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){u=i.getBinding();const Ee=u.getDepthInformation(K[0]);Ee&&Ee.isValid&&Ee.texture&&m.init(Ee,r.renderState)}if(le&&le.includes("camera-access")&&v){e.state.unbindTexture(),u=i.getBinding();for(let Ee=0;Ee<K.length;Ee++){const ze=K[Ee].camera;if(ze){let Je=h[ze];Je||(Je=new Mf,h[ze]=Je);const Ge=u.getCameraImage(ze);Je.sourceTexture=Ge}}}}for(let K=0;K<A.length;K++){const _e=w[K],le=A[K];_e!==null&&le!==void 0&&le.update(_e,j,l||a)}me&&me(V,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),_=null}const Ue=new Cf;Ue.setAnimationLoop(Fe),this.setAnimationLoop=function(V){me=V},this.dispose=function(){}}}const Ir=new ui,D0=new Rt;function L0(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,mf(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,b,M,E){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),u(m,h)):h.isMeshPhongMaterial?(s(m,h),f(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,E)):h.isMeshMatcapMaterial?(s(m,h),_(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),v(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?c(m,h,b,M):h.isSpriteMaterial?l(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===vn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===vn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const b=e.get(h),M=b.envMap,E=b.envMapRotation;M&&(m.envMap.value=M,Ir.copy(E),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),m.envMapRotation.value.setFromMatrix4(D0.makeRotationFromEuler(Ir)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function c(m,h,b,M){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*b,m.scale.value=M*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function l(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function f(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function u(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,b){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===vn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function v(m,h){const b=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function I0(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,M){const E=M.program;i.uniformBlockBinding(b,E)}function l(b,M){let E=r[b.id];E===void 0&&(_(b),E=f(b),r[b.id]=E,b.addEventListener("dispose",m));const A=M.program;i.updateUBOMapping(b,A);const w=e.render.frame;s[b.id]!==w&&(d(b),s[b.id]=w)}function f(b){const M=u();b.__bindingPointIndex=M;const E=n.createBuffer(),A=b.__size,w=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,A,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,E),E}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const M=r[b.id],E=b.uniforms,A=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let w=0,R=E.length;w<R;w++){const U=Array.isArray(E[w])?E[w]:[E[w]];for(let x=0,y=U.length;x<y;x++){const P=U[x];if(p(P,w,x,A)===!0){const G=P.__offset,I=Array.isArray(P.value)?P.value:[P.value];let O=0;for(let X=0;X<I.length;X++){const F=I[X],z=v(F);typeof F=="number"||typeof F=="boolean"?(P.__data[0]=F,n.bufferSubData(n.UNIFORM_BUFFER,G+O,P.__data)):F.isMatrix3?(P.__data[0]=F.elements[0],P.__data[1]=F.elements[1],P.__data[2]=F.elements[2],P.__data[3]=0,P.__data[4]=F.elements[3],P.__data[5]=F.elements[4],P.__data[6]=F.elements[5],P.__data[7]=0,P.__data[8]=F.elements[6],P.__data[9]=F.elements[7],P.__data[10]=F.elements[8],P.__data[11]=0):(F.toArray(P.__data,O),O+=z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(b,M,E,A){const w=b.value,R=M+"_"+E;if(A[R]===void 0)return typeof w=="number"||typeof w=="boolean"?A[R]=w:A[R]=w.clone(),!0;{const U=A[R];if(typeof w=="number"||typeof w=="boolean"){if(U!==w)return A[R]=w,!0}else if(U.equals(w)===!1)return U.copy(w),!0}return!1}function _(b){const M=b.uniforms;let E=0;const A=16;for(let R=0,U=M.length;R<U;R++){const x=Array.isArray(M[R])?M[R]:[M[R]];for(let y=0,P=x.length;y<P;y++){const G=x[y],I=Array.isArray(G.value)?G.value:[G.value];for(let O=0,X=I.length;O<X;O++){const F=I[O],z=v(F),te=E%A,re=te%z.boundary,ae=te+re;E+=re,ae!==0&&A-ae<z.storage&&(E+=A-ae),G.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=E,E+=z.storage}}}const w=E%A;return w>0&&(E+=A-w),b.__size=E,b.__cache={},this}function v(b){const M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?Ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ye("WebGLRenderer: Unsupported uniform value type.",b),M}function m(b){const M=b.target;M.removeEventListener("dispose",m);const E=a.indexOf(M.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function h(){for(const b in r)n.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:c,update:l,dispose:h}}const U0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let hi=null;function N0(){return hi===null&&(hi=new rm(U0,16,16,es,Li),hi.name="DFG_LUT",hi.minFilter=yt,hi.magFilter=yt,hi.wrapS=Di,hi.wrapT=Di,hi.generateMipmaps=!1,hi.needsUpdate=!0),hi}class sa{constructor(e={}){const{canvas:t=Lp(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:p=Cn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const v=p,m=new Set([Wo,ko,Ho]),h=new Set([Cn,ai,zs,Vs,Vo,Go]),b=new Uint32Array(4),M=new Int32Array(4);let E=null,A=null;const w=[],R=[];let U=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=cn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let y=!1;this._outputColorSpace=en;let P=0,G=0,I=null,O=-1,X=null;const F=new Pt,z=new Pt;let te=null;const re=new ht(0);let ae=0,de=t.width,Re=t.height,me=1,Fe=null,Ue=null;const V=new Pt(0,0,de,Re),j=new Pt(0,0,de,Re);let K=!1;const _e=new Ql;let le=!1,Ce=!1;const Pe=new Rt,Ee=new H,ze=new Pt,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function pt(){return I===null?me:1}let C=i;function ft(S,N){return t.getContext(S,N)}try{const S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${yo}`),t.addEventListener("webglcontextlost",Ie,!1),t.addEventListener("webglcontextrestored",Qe,!1),t.addEventListener("webglcontextcreationerror",et,!1),C===null){const N="webgl2";if(C=ft(N,S),C===null)throw ft(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw ct("WebGLRenderer: "+S.message),S}let nt,dt,ye,T,g,L,q,ie,W,be,he,Te,Ne,oe,fe,xe,Me,ue,ke,D,ee,J,ce,Q;function Z(){nt=new Ng(C),nt.init(),J=new A0(C,nt),dt=new Ag(C,nt,e,J),ye=new y0(C,nt),dt.reversedDepthBuffer&&d&&ye.buffers.depth.setReversed(!0),T=new Bg(C),g=new c0,L=new T0(C,nt,ye,g,dt,J,T),q=new Rg(x),ie=new Ug(x),W=new Em(C),ce=new yg(C,W),be=new Fg(C,W,T,ce),he=new Vg(C,be,W,T),ke=new zg(C,dt,L),xe=new wg(g),Te=new l0(x,q,ie,nt,dt,ce,xe),Ne=new L0(x,g),oe=new f0,fe=new g0(nt),ue=new bg(x,q,ie,ye,he,_,c),Me=new E0(x,he,dt),Q=new I0(C,T,dt,ye),D=new Tg(C,nt,T),ee=new Og(C,nt,T),T.programs=Te.programs,x.capabilities=dt,x.extensions=nt,x.properties=g,x.renderLists=oe,x.shadowMap=Me,x.state=ye,x.info=T}Z(),v!==Cn&&(U=new Hg(v,t.width,t.height,r,s));const se=new P0(x,C);this.xr=se,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const S=nt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=nt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(S){S!==void 0&&(me=S,this.setSize(de,Re,!1))},this.getSize=function(S){return S.set(de,Re)},this.setSize=function(S,N,Y=!0){if(se.isPresenting){Ye("WebGLRenderer: Can't change size while VR device is presenting.");return}de=S,Re=N,t.width=Math.floor(S*me),t.height=Math.floor(N*me),Y===!0&&(t.style.width=S+"px",t.style.height=N+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(de*me,Re*me).floor()},this.setDrawingBufferSize=function(S,N,Y){de=S,Re=N,me=Y,t.width=Math.floor(S*Y),t.height=Math.floor(N*Y),this.setViewport(0,0,S,N)},this.setEffects=function(S){if(v===Cn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let N=0;N<S.length;N++)if(S[N].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(F)},this.getViewport=function(S){return S.copy(V)},this.setViewport=function(S,N,Y,k){S.isVector4?V.set(S.x,S.y,S.z,S.w):V.set(S,N,Y,k),ye.viewport(F.copy(V).multiplyScalar(me).round())},this.getScissor=function(S){return S.copy(j)},this.setScissor=function(S,N,Y,k){S.isVector4?j.set(S.x,S.y,S.z,S.w):j.set(S,N,Y,k),ye.scissor(z.copy(j).multiplyScalar(me).round())},this.getScissorTest=function(){return K},this.setScissorTest=function(S){ye.setScissorTest(K=S)},this.setOpaqueSort=function(S){Fe=S},this.setTransparentSort=function(S){Ue=S},this.getClearColor=function(S){return S.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor(...arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha(...arguments)},this.clear=function(S=!0,N=!0,Y=!0){let k=0;if(S){let B=!1;if(I!==null){const ge=I.texture.format;B=m.has(ge)}if(B){const ge=I.texture.type,Ae=h.has(ge),Se=ue.getClearColor(),we=ue.getClearAlpha(),Le=Se.r,He=Se.g,Oe=Se.b;Ae?(b[0]=Le,b[1]=He,b[2]=Oe,b[3]=we,C.clearBufferuiv(C.COLOR,0,b)):(M[0]=Le,M[1]=He,M[2]=Oe,M[3]=we,C.clearBufferiv(C.COLOR,0,M))}else k|=C.COLOR_BUFFER_BIT}N&&(k|=C.DEPTH_BUFFER_BIT),Y&&(k|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ie,!1),t.removeEventListener("webglcontextrestored",Qe,!1),t.removeEventListener("webglcontextcreationerror",et,!1),ue.dispose(),oe.dispose(),fe.dispose(),g.dispose(),q.dispose(),ie.dispose(),he.dispose(),ce.dispose(),Q.dispose(),Te.dispose(),se.dispose(),se.removeEventListener("sessionstart",mt),se.removeEventListener("sessionend",Dt),St.stop()};function Ie(S){S.preventDefault(),qu("WebGLRenderer: Context Lost."),y=!0}function Qe(){qu("WebGLRenderer: Context Restored."),y=!1;const S=T.autoReset,N=Me.enabled,Y=Me.autoUpdate,k=Me.needsUpdate,B=Me.type;Z(),T.autoReset=S,Me.enabled=N,Me.autoUpdate=Y,Me.needsUpdate=k,Me.type=B}function et(S){ct("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ht(S){const N=S.target;N.removeEventListener("dispose",Ht),Ct(N)}function Ct(S){Wn(S),g.remove(S)}function Wn(S){const N=g.get(S).programs;N!==void 0&&(N.forEach(function(Y){Te.releaseProgram(Y)}),S.isShaderMaterial&&Te.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,Y,k,B,ge){N===null&&(N=Je);const Ae=B.isMesh&&B.matrixWorld.determinant()<0,Se=mc(S,N,Y,k,B);ye.setMaterial(k,Ae);let we=Y.index,Le=1;if(k.wireframe===!0){if(we=be.getWireframeAttribute(Y),we===void 0)return;Le=2}const He=Y.drawRange,Oe=Y.attributes.position;let rt=He.start*Le,Et=(He.start+He.count)*Le;ge!==null&&(rt=Math.max(rt,ge.start*Le),Et=Math.min(Et,(ge.start+ge.count)*Le)),we!==null?(rt=Math.max(rt,0),Et=Math.min(Et,we.count)):Oe!=null&&(rt=Math.max(rt,0),Et=Math.min(Et,Oe.count));const Lt=Et-rt;if(Lt<0||Lt===1/0)return;ce.setup(B,k,Se,Y,we);let It,bt=D;if(we!==null&&(It=W.get(we),bt=ee,bt.setIndex(It)),B.isMesh)k.wireframe===!0?(ye.setLineWidth(k.wireframeLinewidth*pt()),bt.setMode(C.LINES)):bt.setMode(C.TRIANGLES);else if(B.isLine){let Be=k.linewidth;Be===void 0&&(Be=1),ye.setLineWidth(Be*pt()),B.isLineSegments?bt.setMode(C.LINES):B.isLineLoop?bt.setMode(C.LINE_LOOP):bt.setMode(C.LINE_STRIP)}else B.isPoints?bt.setMode(C.POINTS):B.isSprite&&bt.setMode(C.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Hs("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),bt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))bt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Be=B._multiDrawStarts,Mt=B._multiDrawCounts,_t=B._multiDrawCount,Un=we?W.get(we).bytesPerElement:1,Cs=g.get(k).currentProgram.getUniforms();for(let Nn=0;Nn<_t;Nn++)Cs.setValue(C,"_gl_DrawID",Nn),bt.render(Be[Nn]/Un,Mt[Nn])}else if(B.isInstancedMesh)bt.renderInstances(rt,Lt,B.count);else if(Y.isInstancedBufferGeometry){const Be=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Mt=Math.min(Y.instanceCount,Be);bt.renderInstances(rt,Lt,Mt)}else bt.render(rt,Lt)};function Xn(S,N,Y){S.transparent===!0&&S.side===xn&&S.forceSinglePass===!1?(S.side=vn,S.needsUpdate=!0,Mi(S,N,Y),S.side=nr,S.needsUpdate=!0,Mi(S,N,Y),S.side=xn):Mi(S,N,Y)}this.compile=function(S,N,Y=null){Y===null&&(Y=S),A=fe.get(Y),A.init(N),R.push(A),Y.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(A.pushLight(B),B.castShadow&&A.pushShadow(B))}),S!==Y&&S.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(A.pushLight(B),B.castShadow&&A.pushShadow(B))}),A.setupLights();const k=new Set;return S.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ge=B.material;if(ge)if(Array.isArray(ge))for(let Ae=0;Ae<ge.length;Ae++){const Se=ge[Ae];Xn(Se,Y,B),k.add(Se)}else Xn(ge,Y,B),k.add(ge)}),A=R.pop(),k},this.compileAsync=function(S,N,Y=null){const k=this.compile(S,N,Y);return new Promise(B=>{function ge(){if(k.forEach(function(Ae){g.get(Ae).currentProgram.isReady()&&k.delete(Ae)}),k.size===0){B(S);return}setTimeout(ge,10)}nt.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let De=null;function qe(S){De&&De(S)}function mt(){St.stop()}function Dt(){St.start()}const St=new Cf;St.setAnimationLoop(qe),typeof self<"u"&&St.setContext(self),this.setAnimationLoop=function(S){De=S,se.setAnimationLoop(S),S===null?St.stop():St.start()},se.addEventListener("sessionstart",mt),se.addEventListener("sessionend",Dt),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;const Y=se.enabled===!0&&se.isPresenting===!0,k=U!==null&&(I===null||Y)&&U.begin(x,I);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(se.cameraAutoUpdate===!0&&se.updateCamera(N),N=se.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,N,I),A=fe.get(S,R.length),A.init(N),R.push(A),Pe.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),_e.setFromProjectionMatrix(Pe,li,N.reversedDepth),Ce=this.localClippingEnabled,le=xe.init(this.clippingPlanes,Ce),E=oe.get(S,w.length),E.init(),w.push(E),se.enabled===!0&&se.isPresenting===!0){const Ae=x.xr.getDepthSensingMesh();Ae!==null&&Ut(Ae,N,-1/0,x.sortObjects)}Ut(S,N,0,x.sortObjects),E.finish(),x.sortObjects===!0&&E.sort(Fe,Ue),Ge=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,Ge&&ue.addToRenderList(E,S),this.info.render.frame++,le===!0&&xe.beginShadows();const B=A.state.shadowsArray;if(Me.render(B,S,N),le===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(k&&U.hasRenderPass())===!1){const Ae=E.opaque,Se=E.transmissive;if(A.setupLights(),N.isArrayCamera){const we=N.cameras;if(Se.length>0)for(let Le=0,He=we.length;Le<He;Le++){const Oe=we[Le];xi(Ae,Se,S,Oe)}Ge&&ue.render(S);for(let Le=0,He=we.length;Le<He;Le++){const Oe=we[Le];In(E,S,Oe,Oe.viewport)}}else Se.length>0&&xi(Ae,Se,S,N),Ge&&ue.render(S),In(E,S,N)}I!==null&&G===0&&(L.updateMultisampleRenderTarget(I),L.updateRenderTargetMipmap(I)),k&&U.end(x),S.isScene===!0&&S.onAfterRender(x,S,N),ce.resetDefaultState(),O=-1,X=null,R.pop(),R.length>0?(A=R[R.length-1],le===!0&&xe.setGlobalState(x.clippingPlanes,A.state.camera)):A=null,w.pop(),w.length>0?E=w[w.length-1]:E=null};function Ut(S,N,Y,k){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)Y=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)A.pushLight(S),S.castShadow&&A.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||_e.intersectsSprite(S)){k&&ze.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Pe);const Ae=he.update(S),Se=S.material;Se.visible&&E.push(S,Ae,Se,Y,ze.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||_e.intersectsObject(S))){const Ae=he.update(S),Se=S.material;if(k&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ze.copy(S.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),ze.copy(Ae.boundingSphere.center)),ze.applyMatrix4(S.matrixWorld).applyMatrix4(Pe)),Array.isArray(Se)){const we=Ae.groups;for(let Le=0,He=we.length;Le<He;Le++){const Oe=we[Le],rt=Se[Oe.materialIndex];rt&&rt.visible&&E.push(S,Ae,rt,Y,ze.z,Oe)}}else Se.visible&&E.push(S,Ae,Se,Y,ze.z,null)}}const ge=S.children;for(let Ae=0,Se=ge.length;Ae<Se;Ae++)Ut(ge[Ae],N,Y,k)}function In(S,N,Y,k){const{opaque:B,transmissive:ge,transparent:Ae}=S;A.setupLightsView(Y),le===!0&&xe.setGlobalState(x.clippingPlanes,Y),k&&ye.viewport(F.copy(k)),B.length>0&&it(B,N,Y),ge.length>0&&it(ge,N,Y),Ae.length>0&&it(Ae,N,Y),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function xi(S,N,Y,k){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[k.id]===void 0){const rt=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[k.id]=new ci(1,1,{generateMipmaps:!0,type:rt?Li:Cn,minFilter:yr,samples:dt.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace})}const ge=A.state.transmissionRenderTarget[k.id],Ae=k.viewport||F;ge.setSize(Ae.z*x.transmissionResolutionScale,Ae.w*x.transmissionResolutionScale);const Se=x.getRenderTarget(),we=x.getActiveCubeFace(),Le=x.getActiveMipmapLevel();x.setRenderTarget(ge),x.getClearColor(re),ae=x.getClearAlpha(),ae<1&&x.setClearColor(16777215,.5),x.clear(),Ge&&ue.render(Y);const He=x.toneMapping;x.toneMapping=cn;const Oe=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),A.setupLightsView(k),le===!0&&xe.setGlobalState(x.clippingPlanes,k),it(S,Y,k),L.updateMultisampleRenderTarget(ge),L.updateRenderTargetMipmap(ge),nt.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let Et=0,Lt=N.length;Et<Lt;Et++){const It=N[Et],{object:bt,geometry:Be,material:Mt,group:_t}=It;if(Mt.side===xn&&bt.layers.test(k.layers)){const Un=Mt.side;Mt.side=vn,Mt.needsUpdate=!0,Si(bt,Y,k,Be,Mt,_t),Mt.side=Un,Mt.needsUpdate=!0,rt=!0}}rt===!0&&(L.updateMultisampleRenderTarget(ge),L.updateRenderTargetMipmap(ge))}x.setRenderTarget(Se,we,Le),x.setClearColor(re,ae),Oe!==void 0&&(k.viewport=Oe),x.toneMapping=He}function it(S,N,Y){const k=N.isScene===!0?N.overrideMaterial:null;for(let B=0,ge=S.length;B<ge;B++){const Ae=S[B],{object:Se,geometry:we,group:Le}=Ae;let He=Ae.material;He.allowOverride===!0&&k!==null&&(He=k),Se.layers.test(Y.layers)&&Si(Se,N,Y,we,He,Le)}}function Si(S,N,Y,k,B,ge){S.onBeforeRender(x,N,Y,k,B,ge),S.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),B.onBeforeRender(x,N,Y,k,S,ge),B.transparent===!0&&B.side===xn&&B.forceSinglePass===!1?(B.side=vn,B.needsUpdate=!0,x.renderBufferDirect(Y,N,k,B,S,ge),B.side=nr,B.needsUpdate=!0,x.renderBufferDirect(Y,N,k,B,S,ge),B.side=xn):x.renderBufferDirect(Y,N,k,B,S,ge),S.onAfterRender(x,N,Y,k,B,ge)}function Mi(S,N,Y){N.isScene!==!0&&(N=Je);const k=g.get(S),B=A.state.lights,ge=A.state.shadowsArray,Ae=B.state.version,Se=Te.getParameters(S,B.state,ge,N,Y),we=Te.getProgramCacheKey(Se);let Le=k.programs;k.environment=S.isMeshStandardMaterial?N.environment:null,k.fog=N.fog,k.envMap=(S.isMeshStandardMaterial?ie:q).get(S.envMap||k.environment),k.envMapRotation=k.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,Le===void 0&&(S.addEventListener("dispose",Ht),Le=new Map,k.programs=Le);let He=Le.get(we);if(He!==void 0){if(k.currentProgram===He&&k.lightsStateVersion===Ae)return io(S,Se),He}else Se.uniforms=Te.getUniforms(S),S.onBeforeCompile(Se,x),He=Te.acquireProgram(Se,we),Le.set(we,He),k.uniforms=Se.uniforms;const Oe=k.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Oe.clippingPlanes=xe.uniform),io(S,Se),k.needsLights=vx(S),k.lightsStateVersion=Ae,k.needsLights&&(Oe.ambientLightColor.value=B.state.ambient,Oe.lightProbe.value=B.state.probe,Oe.directionalLights.value=B.state.directional,Oe.directionalLightShadows.value=B.state.directionalShadow,Oe.spotLights.value=B.state.spot,Oe.spotLightShadows.value=B.state.spotShadow,Oe.rectAreaLights.value=B.state.rectArea,Oe.ltc_1.value=B.state.rectAreaLTC1,Oe.ltc_2.value=B.state.rectAreaLTC2,Oe.pointLights.value=B.state.point,Oe.pointLightShadows.value=B.state.pointShadow,Oe.hemisphereLights.value=B.state.hemi,Oe.directionalShadowMap.value=B.state.directionalShadowMap,Oe.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Oe.spotShadowMap.value=B.state.spotShadowMap,Oe.spotLightMatrix.value=B.state.spotLightMatrix,Oe.spotLightMap.value=B.state.spotLightMap,Oe.pointShadowMap.value=B.state.pointShadowMap,Oe.pointShadowMatrix.value=B.state.pointShadowMatrix),k.currentProgram=He,k.uniformsList=null,He}function Rs(S){if(S.uniformsList===null){const N=S.currentProgram.getUniforms();S.uniformsList=Qa.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function io(S,N){const Y=g.get(S);Y.outputColorSpace=N.outputColorSpace,Y.batching=N.batching,Y.batchingColor=N.batchingColor,Y.instancing=N.instancing,Y.instancingColor=N.instancingColor,Y.instancingMorph=N.instancingMorph,Y.skinning=N.skinning,Y.morphTargets=N.morphTargets,Y.morphNormals=N.morphNormals,Y.morphColors=N.morphColors,Y.morphTargetsCount=N.morphTargetsCount,Y.numClippingPlanes=N.numClippingPlanes,Y.numIntersection=N.numClipIntersection,Y.vertexAlphas=N.vertexAlphas,Y.vertexTangents=N.vertexTangents,Y.toneMapping=N.toneMapping}function mc(S,N,Y,k,B){N.isScene!==!0&&(N=Je),L.resetTextureUnits();const ge=N.fog,Ae=k.isMeshStandardMaterial?N.environment:null,Se=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:ts,we=(k.isMeshStandardMaterial?ie:q).get(k.envMap||Ae),Le=k.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,He=!!Y.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Oe=!!Y.morphAttributes.position,rt=!!Y.morphAttributes.normal,Et=!!Y.morphAttributes.color;let Lt=cn;k.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Lt=x.toneMapping);const It=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,bt=It!==void 0?It.length:0,Be=g.get(k),Mt=A.state.lights;if(le===!0&&(Ce===!0||S!==X)){const fn=S===X&&k.id===O;xe.setState(k,S,fn)}let _t=!1;k.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Mt.state.version||Be.outputColorSpace!==Se||B.isBatchedMesh&&Be.batching===!1||!B.isBatchedMesh&&Be.batching===!0||B.isBatchedMesh&&Be.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Be.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Be.instancing===!1||!B.isInstancedMesh&&Be.instancing===!0||B.isSkinnedMesh&&Be.skinning===!1||!B.isSkinnedMesh&&Be.skinning===!0||B.isInstancedMesh&&Be.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Be.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Be.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Be.instancingMorph===!1&&B.morphTexture!==null||Be.envMap!==we||k.fog===!0&&Be.fog!==ge||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==xe.numPlanes||Be.numIntersection!==xe.numIntersection)||Be.vertexAlphas!==Le||Be.vertexTangents!==He||Be.morphTargets!==Oe||Be.morphNormals!==rt||Be.morphColors!==Et||Be.toneMapping!==Lt||Be.morphTargetsCount!==bt)&&(_t=!0):(_t=!0,Be.__version=k.version);let Un=Be.currentProgram;_t===!0&&(Un=Mi(k,N,B));let Cs=!1,Nn=!1,ua=!1;const Tt=Un.getUniforms(),yn=Be.uniforms;if(ye.useProgram(Un.program)&&(Cs=!0,Nn=!0,ua=!0),k.id!==O&&(O=k.id,Nn=!0),Cs||X!==S){ye.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Tt.setValue(C,"projectionMatrix",S.projectionMatrix),Tt.setValue(C,"viewMatrix",S.matrixWorldInverse);const Tn=Tt.map.cameraPosition;Tn!==void 0&&Tn.setValue(C,Ee.setFromMatrixPosition(S.matrixWorld)),dt.logarithmicDepthBuffer&&Tt.setValue(C,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Tt.setValue(C,"isOrthographic",S.isOrthographicCamera===!0),X!==S&&(X=S,Nn=!0,ua=!0)}if(Be.needsLights&&(Mt.state.directionalShadowMap.length>0&&Tt.setValue(C,"directionalShadowMap",Mt.state.directionalShadowMap,L),Mt.state.spotShadowMap.length>0&&Tt.setValue(C,"spotShadowMap",Mt.state.spotShadowMap,L),Mt.state.pointShadowMap.length>0&&Tt.setValue(C,"pointShadowMap",Mt.state.pointShadowMap,L)),B.isSkinnedMesh){Tt.setOptional(C,B,"bindMatrix"),Tt.setOptional(C,B,"bindMatrixInverse");const fn=B.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),Tt.setValue(C,"boneTexture",fn.boneTexture,L))}B.isBatchedMesh&&(Tt.setOptional(C,B,"batchingTexture"),Tt.setValue(C,"batchingTexture",B._matricesTexture,L),Tt.setOptional(C,B,"batchingIdTexture"),Tt.setValue(C,"batchingIdTexture",B._indirectTexture,L),Tt.setOptional(C,B,"batchingColorTexture"),B._colorsTexture!==null&&Tt.setValue(C,"batchingColorTexture",B._colorsTexture,L));const Yn=Y.morphAttributes;if((Yn.position!==void 0||Yn.normal!==void 0||Yn.color!==void 0)&&ke.update(B,Y,Un),(Nn||Be.receiveShadow!==B.receiveShadow)&&(Be.receiveShadow=B.receiveShadow,Tt.setValue(C,"receiveShadow",B.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(yn.envMap.value=we,yn.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&N.environment!==null&&(yn.envMapIntensity.value=N.environmentIntensity),yn.dfgLUT!==void 0&&(yn.dfgLUT.value=N0()),Nn&&(Tt.setValue(C,"toneMappingExposure",x.toneMappingExposure),Be.needsLights&&gx(yn,ua),ge&&k.fog===!0&&Ne.refreshFogUniforms(yn,ge),Ne.refreshMaterialUniforms(yn,k,me,Re,A.state.transmissionRenderTarget[S.id]),Qa.upload(C,Rs(Be),yn,L)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Qa.upload(C,Rs(Be),yn,L),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Tt.setValue(C,"center",B.center),Tt.setValue(C,"modelViewMatrix",B.modelViewMatrix),Tt.setValue(C,"normalMatrix",B.normalMatrix),Tt.setValue(C,"modelMatrix",B.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const fn=k.uniformsGroups;for(let Tn=0,_c=fn.length;Tn<_c;Tn++){const Vr=fn[Tn];Q.update(Vr,Un),Q.bind(Vr,Un)}}return Un}function gx(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function vx(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(S,N,Y){const k=g.get(S);k.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),g.get(S.texture).__webglTexture=N,g.get(S.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:Y,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,N){const Y=g.get(S);Y.__webglFramebuffer=N,Y.__useDefaultFramebuffer=N===void 0};const xx=C.createFramebuffer();this.setRenderTarget=function(S,N=0,Y=0){I=S,P=N,G=Y;let k=null,B=!1,ge=!1;if(S){const Se=g.get(S);if(Se.__useDefaultFramebuffer!==void 0){ye.bindFramebuffer(C.FRAMEBUFFER,Se.__webglFramebuffer),F.copy(S.viewport),z.copy(S.scissor),te=S.scissorTest,ye.viewport(F),ye.scissor(z),ye.setScissorTest(te),O=-1;return}else if(Se.__webglFramebuffer===void 0)L.setupRenderTarget(S);else if(Se.__hasExternalTextures)L.rebindTextures(S,g.get(S.texture).__webglTexture,g.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const He=S.depthTexture;if(Se.__boundDepthTexture!==He){if(He!==null&&g.has(He)&&(S.width!==He.image.width||S.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(S)}}const we=S.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(ge=!0);const Le=g.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Le[N])?k=Le[N][Y]:k=Le[N],B=!0):S.samples>0&&L.useMultisampledRTT(S)===!1?k=g.get(S).__webglMultisampledFramebuffer:Array.isArray(Le)?k=Le[Y]:k=Le,F.copy(S.viewport),z.copy(S.scissor),te=S.scissorTest}else F.copy(V).multiplyScalar(me).floor(),z.copy(j).multiplyScalar(me).floor(),te=K;if(Y!==0&&(k=xx),ye.bindFramebuffer(C.FRAMEBUFFER,k)&&ye.drawBuffers(S,k),ye.viewport(F),ye.scissor(z),ye.setScissorTest(te),B){const Se=g.get(S.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+N,Se.__webglTexture,Y)}else if(ge){const Se=N;for(let we=0;we<S.textures.length;we++){const Le=g.get(S.textures[we]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+we,Le.__webglTexture,Y,Se)}}else if(S!==null&&Y!==0){const Se=g.get(S.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Se.__webglTexture,Y)}O=-1},this.readRenderTargetPixels=function(S,N,Y,k,B,ge,Ae,Se=0){if(!(S&&S.isWebGLRenderTarget)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=g.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ae!==void 0&&(we=we[Ae]),we){ye.bindFramebuffer(C.FRAMEBUFFER,we);try{const Le=S.textures[Se],He=Le.format,Oe=Le.type;if(!dt.textureFormatReadable(He)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(Oe)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-k&&Y>=0&&Y<=S.height-B&&(S.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Se),C.readPixels(N,Y,k,B,J.convert(He),J.convert(Oe),ge))}finally{const Le=I!==null?g.get(I).__webglFramebuffer:null;ye.bindFramebuffer(C.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(S,N,Y,k,B,ge,Ae,Se=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=g.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ae!==void 0&&(we=we[Ae]),we)if(N>=0&&N<=S.width-k&&Y>=0&&Y<=S.height-B){ye.bindFramebuffer(C.FRAMEBUFFER,we);const Le=S.textures[Se],He=Le.format,Oe=Le.type;if(!dt.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const rt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,rt),C.bufferData(C.PIXEL_PACK_BUFFER,ge.byteLength,C.STREAM_READ),S.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Se),C.readPixels(N,Y,k,B,J.convert(He),J.convert(Oe),0);const Et=I!==null?g.get(I).__webglFramebuffer:null;ye.bindFramebuffer(C.FRAMEBUFFER,Et);const Lt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Ip(C,Lt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,rt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ge),C.deleteBuffer(rt),C.deleteSync(Lt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,N=null,Y=0){const k=Math.pow(2,-Y),B=Math.floor(S.image.width*k),ge=Math.floor(S.image.height*k),Ae=N!==null?N.x:0,Se=N!==null?N.y:0;L.setTexture2D(S,0),C.copyTexSubImage2D(C.TEXTURE_2D,Y,0,0,Ae,Se,B,ge),ye.unbindTexture()};const Sx=C.createFramebuffer(),Mx=C.createFramebuffer();this.copyTextureToTexture=function(S,N,Y=null,k=null,B=0,ge=null){ge===null&&(B!==0?(Hs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ge=B,B=0):ge=0);let Ae,Se,we,Le,He,Oe,rt,Et,Lt;const It=S.isCompressedTexture?S.mipmaps[ge]:S.image;if(Y!==null)Ae=Y.max.x-Y.min.x,Se=Y.max.y-Y.min.y,we=Y.isBox3?Y.max.z-Y.min.z:1,Le=Y.min.x,He=Y.min.y,Oe=Y.isBox3?Y.min.z:0;else{const Yn=Math.pow(2,-B);Ae=Math.floor(It.width*Yn),Se=Math.floor(It.height*Yn),S.isDataArrayTexture?we=It.depth:S.isData3DTexture?we=Math.floor(It.depth*Yn):we=1,Le=0,He=0,Oe=0}k!==null?(rt=k.x,Et=k.y,Lt=k.z):(rt=0,Et=0,Lt=0);const bt=J.convert(N.format),Be=J.convert(N.type);let Mt;N.isData3DTexture?(L.setTexture3D(N,0),Mt=C.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(L.setTexture2DArray(N,0),Mt=C.TEXTURE_2D_ARRAY):(L.setTexture2D(N,0),Mt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,N.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,N.unpackAlignment);const _t=C.getParameter(C.UNPACK_ROW_LENGTH),Un=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Cs=C.getParameter(C.UNPACK_SKIP_PIXELS),Nn=C.getParameter(C.UNPACK_SKIP_ROWS),ua=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,It.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,It.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Le),C.pixelStorei(C.UNPACK_SKIP_ROWS,He),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Oe);const Tt=S.isDataArrayTexture||S.isData3DTexture,yn=N.isDataArrayTexture||N.isData3DTexture;if(S.isDepthTexture){const Yn=g.get(S),fn=g.get(N),Tn=g.get(Yn.__renderTarget),_c=g.get(fn.__renderTarget);ye.bindFramebuffer(C.READ_FRAMEBUFFER,Tn.__webglFramebuffer),ye.bindFramebuffer(C.DRAW_FRAMEBUFFER,_c.__webglFramebuffer);for(let Vr=0;Vr<we;Vr++)Tt&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,g.get(S).__webglTexture,B,Oe+Vr),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,g.get(N).__webglTexture,ge,Lt+Vr)),C.blitFramebuffer(Le,He,Ae,Se,rt,Et,Ae,Se,C.DEPTH_BUFFER_BIT,C.NEAREST);ye.bindFramebuffer(C.READ_FRAMEBUFFER,null),ye.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(B!==0||S.isRenderTargetTexture||g.has(S)){const Yn=g.get(S),fn=g.get(N);ye.bindFramebuffer(C.READ_FRAMEBUFFER,Sx),ye.bindFramebuffer(C.DRAW_FRAMEBUFFER,Mx);for(let Tn=0;Tn<we;Tn++)Tt?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Yn.__webglTexture,B,Oe+Tn):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Yn.__webglTexture,B),yn?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,fn.__webglTexture,ge,Lt+Tn):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,fn.__webglTexture,ge),B!==0?C.blitFramebuffer(Le,He,Ae,Se,rt,Et,Ae,Se,C.COLOR_BUFFER_BIT,C.NEAREST):yn?C.copyTexSubImage3D(Mt,ge,rt,Et,Lt+Tn,Le,He,Ae,Se):C.copyTexSubImage2D(Mt,ge,rt,Et,Le,He,Ae,Se);ye.bindFramebuffer(C.READ_FRAMEBUFFER,null),ye.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else yn?S.isDataTexture||S.isData3DTexture?C.texSubImage3D(Mt,ge,rt,Et,Lt,Ae,Se,we,bt,Be,It.data):N.isCompressedArrayTexture?C.compressedTexSubImage3D(Mt,ge,rt,Et,Lt,Ae,Se,we,bt,It.data):C.texSubImage3D(Mt,ge,rt,Et,Lt,Ae,Se,we,bt,Be,It):S.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,ge,rt,Et,Ae,Se,bt,Be,It.data):S.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,ge,rt,Et,It.width,It.height,bt,It.data):C.texSubImage2D(C.TEXTURE_2D,ge,rt,Et,Ae,Se,bt,Be,It);C.pixelStorei(C.UNPACK_ROW_LENGTH,_t),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Un),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Cs),C.pixelStorei(C.UNPACK_SKIP_ROWS,Nn),C.pixelStorei(C.UNPACK_SKIP_IMAGES,ua),ge===0&&N.generateMipmaps&&C.generateMipmap(Mt),ye.unbindTexture()},this.initRenderTarget=function(S){g.get(S).__webglFramebuffer===void 0&&L.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?L.setTextureCube(S,0):S.isData3DTexture?L.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?L.setTexture2DArray(S,0):L.setTexture2D(S,0),ye.unbindTexture()},this.resetState=function(){P=0,G=0,I=null,ye.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}}var F0=Xe('<div class="star-container svelte-1a66aez"></div>');function O0(n,e){hn(e,!0);let t=je(e,"images",19,()=>[]);const i={radius:1.1,cardWidth:1.65,cardHeight:1.15,baseRotationSpeed:.006,portraitSpeedMultiplier:1.3,tiltLoopSpeed:.005,tiltLimit:Math.PI,baseTilt:{tiltX:.65,tiltZ:.25},landscape:{cameraZ:9,masterRotationZ:0},portrait:{cameraZ:12,masterRotationZ:75*(Math.PI/180)}};let r;tr(()=>{if(!t().length||!r)return;const a=t().length;let o,c,l=null,f=!1;try{o=new sa({antialias:!0,alpha:!0})}catch{return}const u=new Qs;u.fog=new $a(0,.06);const d=new on(35,1,.1,30);o.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.toneMapping=cn,o.outputColorSpace=en,o.setClearColor(0,0),r.appendChild(o.domElement);function p(F){F.preventDefault(),cancelAnimationFrame(c)}function _(){f||X()}o.domElement.addEventListener("webglcontextlost",p),o.domElement.addEventListener("webglcontextrestored",_);const v=new ii;u.add(v);const m=new ii;v.add(m);const h=new ii;m.add(h);const b=new xm(16777215,.6);u.add(b);const M=new vm(16777215,1.2);M.position.set(3,4,5),u.add(M);const E=new Hi(1,1),A=new ta,w=[],R=[];for(let F=0;F<a;F++){const z=A.load(t()[F].url);z.minFilter=yt,z.magFilter=yt,R.push(z);const te=new um({map:z,side:xn,roughness:.7,metalness:.05});w.push(te);const re=new Mn(E,te),ae=F/a*Math.PI*2,de=Math.sin(ae)*i.radius,Re=Math.cos(ae)*i.radius;re.position.set(de,0,Re),re.rotation.y=ae+Math.PI/2,re.scale.set(i.cardWidth,i.cardHeight,1),h.add(re)}let U=-i.tiltLimit,x=1,y=0,P=i.baseRotationSpeed;function G(){if(!r)return;const{width:F,height:z}=r.getBoundingClientRect();if(F===0||z===0)return;const te=F/z<1,re=te?i.portrait:i.landscape;d.aspect=F/z,d.updateProjectionMatrix(),o.setSize(F,z),d.position.set(0,0,re.cameraZ),d.lookAt(0,0,0);const ae=i.radius*Math.sin(i.baseTilt.tiltX)/2.2;v.position.y=ae,v.rotation.z=re.masterRotationZ,P=te?i.baseRotationSpeed*i.portraitSpeedMultiplier:i.baseRotationSpeed}G(),l=new ResizeObserver(G),l.observe(r);let I=!0;const O=new IntersectionObserver(([F])=>{I=F.isIntersecting,I&&!f?X():cancelAnimationFrame(c)},{threshold:0});O.observe(r);function X(){!I||f||(c=requestAnimationFrame(X),U+=i.tiltLoopSpeed*x,U>=i.tiltLimit?(U=i.tiltLimit,x=-1):U<=-i.tiltLimit&&(U=-i.tiltLimit,x=1),y+=P,m.rotation.y=U,m.rotation.x=i.baseTilt.tiltX,m.rotation.z=i.baseTilt.tiltZ,h.rotation.y=y-U,o.render(u,d))}return X(),()=>{f=!0,cancelAnimationFrame(c),l&&l.disconnect(),O.disconnect(),o.domElement.removeEventListener("webglcontextlost",p),o.domElement.removeEventListener("webglcontextrestored",_),h.clear(),m.clear(),v.clear(),u.clear(),E.dispose();for(const F of w)F.dispose();for(const F of R)F.dispose();w.length=0,R.length=0,o.dispose(),o.forceContextLoss(),o.domElement.parentNode&&o.domElement.parentNode.removeChild(o.domElement)}});var s=F0();er(s,a=>r=a,()=>r),Ve(n,s),pn()}var B0=Xe('<div class="helix-wrapper svelte-vcb9pb"><div class="helix-vignette top svelte-vcb9pb"></div> <div class="helix-container svelte-vcb9pb"></div> <div class="helix-vignette bottom svelte-vcb9pb"></div></div>');function z0(n,e){hn(e,!0);let t=je(e,"images",19,()=>[]);const i=2.4,r=1.6,s=.15,a=16,o=48,c=Math.PI*4/3,l=-20*(Math.PI/180),f=.003,u=10,d=.15,p=.05,_=`
        uniform float uTwist;
        uniform float uOffset;
        uniform float uStripCenter;

        varying vec2 vUv;
        varying vec3 vNormal;

        void main() {
            vUv = uv;

            // World-space Y of this vertex (card position + local vertex)
            vec4 worldPos = modelMatrix * vec4(position, 1.0);
            float globalY = worldPos.y;

            // Twist angle based on distance from strip center
            float angle = (globalY - uStripCenter) * uTwist + uOffset;
            float ca = cos(angle);
            float sa = sin(angle);

            // Wrap X around the helix
            float localX = position.x;
            vec3 pos;
            pos.x = ca * localX;
            pos.z = sa * localX;
            pos.y = position.y;

            // Compute twisted normal — the plane normal (0,0,1) rotated by twist angle
            vec3 twistedNormal = vec3(-sa, 0.0, ca);
            vNormal = normalize(normalMatrix * twistedNormal);

            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
    `,v=`
        precision mediump float;

        uniform sampler2D uTexture;
        uniform vec2 uPlaneSize;
        uniform vec2 uImageRes;
        uniform vec3 uLightDir;
        uniform float uAmbient;
        uniform float uDiffuse;

        varying vec2 vUv;
        varying vec3 vNormal;

        vec2 CoverUV(vec2 u, vec2 s, vec2 i) {
            float rs = s.x / s.y;
            float ri = i.x / i.y;
            vec2 st = rs < ri ? vec2(i.x * s.y / i.y, s.y) : vec2(s.x, i.y * s.x / i.x);
            vec2 o = (rs < ri ? vec2((st.x - s.x) / 2.0, 0.0) : vec2(0.0, (st.y - s.y) / 2.0)) / st;
            return u * s / st + o;
        }

        void main() {
            vec2 uv = CoverUV(vUv, uPlaneSize, uImageRes);
            vec4 tex = texture2D(uTexture, uv);

            // Lighting — ambient + diffuse from directional light
            vec3 n = normalize(vNormal);
            float diff = max(dot(n, uLightDir), 0.0);
            float lighting = uAmbient + uDiffuse * diff;

            gl_FragColor = vec4(tex.rgb * lighting, tex.a);
        }
    `;let m;tr(()=>{if(!t().length||!m)return;const M=t().length;let E,A,w=null,R=!1;try{E=new sa({antialias:!0,alpha:!0})}catch{return}const U=new Qs;U.fog=new $a(0,.04);const x=new on(40,1,.1,30);E.setPixelRatio(Math.min(window.devicePixelRatio,2)),E.toneMapping=cn,E.outputColorSpace=en,E.setClearColor(0,0),m.appendChild(E.domElement);function y(Pe){Pe.preventDefault(),cancelAnimationFrame(A)}function P(){R||le()}E.domElement.addEventListener("webglcontextlost",y),E.domElement.addEventListener("webglcontextrestored",P);const G=new H(3,4,5).normalize(),I=new ii;I.rotation.z=l,U.add(I);const O=M*r+(M-1)*s,X=0,F=c/O,z=new Hi(i,r,a,o),te=new ta,re=[],ae=[];for(let Pe=0;Pe<M;Pe++){const Ee=te.load(t()[Pe].url);Ee.minFilter=yt,Ee.magFilter=yt,ae.push(Ee);const ze=new En({uniforms:{uTwist:{value:F},uOffset:{value:0},uStripCenter:{value:X},uTexture:{value:Ee},uPlaneSize:{value:new $e(i,r)},uImageRes:{value:new $e(1,1)},uLightDir:{value:G},uAmbient:{value:.6},uDiffuse:{value:.5}},vertexShader:_,fragmentShader:v,side:xn});Ee.userData.materials||(Ee.userData.materials=[],Ee.onUpdate=()=>{if(Ee.image){const pt=Ee.image.width||1,C=Ee.image.height||1;for(const ft of Ee.userData.materials)ft.uniforms.uImageRes.value.set(pt,C)}}),Ee.userData.materials.push(ze),re.push(ze);const Je=new Mn(z,ze),Ge=-O/2+r/2+Pe*(r+s);Je.position.y=Ge,I.add(Je)}function de(){if(!m)return;const{width:Pe,height:Ee}=m.getBoundingClientRect();Pe===0||Ee===0||(x.aspect=Pe/Ee,x.updateProjectionMatrix(),E.setSize(Pe,Ee),x.position.set(0,0,u),x.lookAt(0,0,0))}de(),w=new ResizeObserver(de),w.observe(m);let Re=0,me=0,Fe=0,Ue=0;function V(Pe){const Ee=m.getBoundingClientRect(),ze=(Pe.clientX-Ee.left)/Ee.width*2-1;Re=-((Pe.clientY-Ee.top)/Ee.height*2-1)*d,me=ze*d}function j(){Re=0,me=0}m.addEventListener("mousemove",V),m.addEventListener("mouseleave",j);let K=0,_e=!0;function le(){if(!(!_e||R)){cancelAnimationFrame(A),A=requestAnimationFrame(le),K+=f,Fe+=(Re-Fe)*p,Ue+=(me-Ue)*p,I.rotation.x=Fe,I.rotation.y=Ue;for(const Pe of re)Pe.uniforms.uOffset.value=K;E.render(U,x)}}const Ce=new IntersectionObserver(([Pe])=>{_e=Pe.isIntersecting,_e&&!R?le():cancelAnimationFrame(A)},{threshold:0});return Ce.observe(m),le(),()=>{R=!0,cancelAnimationFrame(A),w&&w.disconnect(),Ce.disconnect(),m==null||m.removeEventListener("mousemove",V),m==null||m.removeEventListener("mouseleave",j),E.domElement.removeEventListener("webglcontextlost",y),E.domElement.removeEventListener("webglcontextrestored",P),I.clear(),U.clear(),z.dispose();for(const Pe of re)Pe.dispose();for(const Pe of ae)Pe.userData.materials=null,Pe.dispose();re.length=0,ae.length=0,E.dispose(),E.forceContextLoss(),E.domElement.parentNode&&E.domElement.parentNode.removeChild(E.domElement)}});var h=B0(),b=ot(pe(h),2);er(b,M=>m=M,()=>m),Ve(n,h),pn()}var V0=Xe('<div class="drum-container svelte-6qlern"></div>');function G0(n,e){hn(e,!0);let t=je(e,"images",19,()=>[]);const i=2*Math.PI,r=2.4,s=1.6,a=2,o=12,c=.006,l=`
        uniform float uRadius;
        uniform float uBaseAngle;
        uniform float uScaleY;

        varying vec2 vUv;
        varying float vDepth;

        void main() {
            // UVs stay at full scale — image doesn't distort
            vUv = uv;

            float angleOffset = position.x / uRadius;
            float angle = uBaseAngle + angleOffset;

            vec3 pos;
            pos.x = sin(angle) * uRadius;
            // Scale geometry height but keep image anchored from center
            pos.y = position.y * uScaleY;
            pos.z = cos(angle) * uRadius;

            // Per-vertex depth: positive = facing camera, negative = behind horizon
            vDepth = pos.z;

            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
    `,f=`
        uniform sampler2D uTexture;
        uniform vec2 uImageRes;
        uniform vec2 uPlaneSize;
        uniform float uScaleY;

        varying vec2 vUv;
        varying float vDepth;

        vec2 CoverUV(vec2 u, vec2 s, vec2 i) {
            float rs = s.x / s.y;
            float ri = i.x / i.y;
            vec2 st = rs < ri ? vec2(i.x * s.y / i.y, s.y) : vec2(s.x, i.y * s.x / i.x);
            vec2 o = (rs < ri ? vec2((st.x - s.x) / 2.0, 0.0) : vec2(0.0, (st.y - s.y) / 2.0)) / st;
            return u * s / st + o;
        }

        void main() {
            // Remap V so the image stays full-size, centered — mask reveal effect
            // When uScaleY=0.5, vUv.y 0→1 maps to image 0.25→0.75 (center crop)
            float remappedV = mix(0.5 - 0.5 * uScaleY, 0.5 + 0.5 * uScaleY, vUv.y);
            vec2 maskedUv = vec2(vUv.x, remappedV);

            vec2 uv = CoverUV(maskedUv, uPlaneSize, uImageRes);
            vec4 tex = texture2D(uTexture, uv);

            // Per-pixel dim past the horizon: darken RGB instead of alpha (avoids transparent sort overhead)
            float fade = vDepth > 0.0 ? 1.0 : 0.3;
            gl_FragColor = vec4(tex.rgb * fade, tex.a);
        }
    `;let u;tr(()=>{if(!t().length||!u)return;let p,_,v=null;try{p=new sa({antialias:!0,alpha:!0})}catch{return}const m=new Qs,h=new on(40,1,.1,100);h.position.set(0,0,o),h.lookAt(0,0,0),p.setPixelRatio(Math.min(window.devicePixelRatio,2)),p.toneMapping=cn,p.outputColorSpace=en,p.setClearColor(0,0),u.appendChild(p.domElement),p.domElement.addEventListener("webglcontextlost",K=>{K.preventDefault(),cancelAnimationFrame(_)}),p.domElement.addEventListener("webglcontextrestored",()=>{V()});const b=new ii;b.position.y=.5,b.rotation.z=10*(Math.PI/180),b.rotation.x=15*(Math.PI/180),m.add(b);const M=new ta,E=[],A=new Hi(r,s,16,1),w=t().length,R=5,U=i/R,x=new Map;function y(K){if(x.has(K))return x.get(K);const _e=M.load(t()[K].url,le=>{if(le.image){const Ce=le.image.width||1,Pe=le.image.height||1;for(const Ee of le.userData.materials||[])Ee.uniforms.uImageRes.value.set(Ce,Pe)}});return _e.minFilter=yt,_e.magFilter=yt,x.set(K,_e),_e}for(let K=0;K<R;K++){const _e=K%w,le=-K*U,Ce=y(_e),Pe=new En({uniforms:{uRadius:{value:a},uBaseAngle:{value:le},uScaleY:{value:0},uTexture:{value:Ce},uPlaneSize:{value:new $e(r,s)},uImageRes:{value:new $e(1,1)}},vertexShader:l,fragmentShader:f,side:xn});Ce.userData.materials||(Ce.userData.materials=[]),Ce.userData.materials.push(Pe);const Ee=new Mn(A,Pe);b.add(Ee),E.push(Pe)}let P;function G(){if(!u)return;const{width:K,height:_e}=u.getBoundingClientRect();K===0||_e===0||(h.aspect=K/_e,h.updateProjectionMatrix(),p.setSize(K,_e))}v=new ResizeObserver(()=>{clearTimeout(P),P=setTimeout(G,100)}),v.observe(u),requestAnimationFrame(G);const I=.6,O=3,X=.6,F=.12,z=F*(R-1),te=I+z,re=te+O,ae=re+X+z;let de=0,Re=!0,me=-1;function Fe(K){return K<.5?4*K*K*K:1-Math.pow(-2*K+2,3)/2}function Ue(K,_e){const le=(R-1-K)*F,Ce=Math.max(0,Math.min(1,(_e-le)/I));if(_e<te)return Fe(Ce);if(_e<re)return 1;const Pe=(R-1-K)*F,Ee=Math.max(0,Math.min(1,(_e-re-Pe)/X));return 1-Fe(Ee)}function V(){if(!Re)return;cancelAnimationFrame(_),_=requestAnimationFrame(V);const K=performance.now()/1e3;me<0&&(me=K);const _e=K-me;if(_e>=ae){for(let le=0;le<R;le++)E[le].uniforms.uScaleY.value=0;p.render(m,h);return}de+=c;for(let le=0;le<R;le++){const Ce=-le*U;E[le].uniforms.uBaseAngle.value=Ce+de,E[le].uniforms.uScaleY.value=Ue(le,_e)}p.render(m,h)}const j=new IntersectionObserver(([K])=>{Re=K.isIntersecting,Re?V():cancelAnimationFrame(_)},{threshold:0});return j.observe(u),V(),()=>{cancelAnimationFrame(_),v&&v.disconnect(),j.disconnect(),A.dispose();for(const K of E)K.dispose();x.forEach(K=>K.dispose()),x.clear(),p.dispose(),p.domElement.parentNode&&p.domElement.parentNode.removeChild(p.domElement)}});var d=V0();er(d,p=>u=p,()=>u),Ve(n,d),pn()}var H0=Xe("<c-indexcard></c-indexcard>",2),k0=Xe('<div class="mobile-fallback svelte-6olp7"></div>'),W0=Xe('<div class="canvas-container svelte-6olp7"></div>');function X0(n,e){hn(e,!0);let t=je(e,"projects",19,()=>[]);const i=2*Math.PI,r=6,s=6,a=8,o=20,c=991,l=3e-4,f=.004,u=.92,d=5e-4,p=.08,_=.001,v=120,m=.2,h=.2,b=new H;let M=Kt(void 0),E=Kt(!1);function A(I,O,X){const F=Math.max(0,Math.min(1,(X-I)/(O-I)));return F*F*(3-2*F)}const w=`
        uniform float uRadius;
        uniform float uBaseAngle;

        varying vec2 vUv;

        void main() {
            vUv = uv;

            float angleOffset = position.y / uRadius;
            float angle = uBaseAngle + angleOffset;

            vec3 pos;
            pos.x = position.x;
            pos.y = sin(angle) * uRadius;
            pos.z = cos(angle) * uRadius;

            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
    `,R=`
        precision mediump float;

        uniform sampler2D uTexture;
        uniform vec2 uImageRes;
        uniform vec2 uPlaneSize;
        uniform float uOpacity;

        varying vec2 vUv;

        vec2 CoverUV(vec2 u, vec2 s, vec2 i) {
            float rs = s.x / s.y;
            float ri = i.x / i.y;
            vec2 st = rs < ri ? vec2(i.x * s.y / i.y, s.y) : vec2(s.x, i.y * s.x / i.x);
            vec2 o = (rs < ri ? vec2((st.x - s.x) / 2.0, 0.0) : vec2(0.0, (st.y - s.y) / 2.0)) / st;
            return u * s / st + o;
        }

        void main() {
            vec2 uv = CoverUV(vUv, uPlaneSize, uImageRes);
            vec4 tex = texture2D(uTexture, uv);
            gl_FragColor = vec4(tex.rgb, uOpacity);
        }
    `;function U(){Nt(E,window.innerWidth<=c)}tr(()=>{if(U(),window.addEventListener("resize",U),$(E)||!t().length||!$(M))return()=>{window.removeEventListener("resize",U)};let I,O,X=null;try{I=new sa({antialias:!0,alpha:!0})}catch{return Nt(E,!0),()=>{window.removeEventListener("resize",U)}}let F=!1;const z=new Qs,te=new on(45,1,.1,50);te.position.set(0,0,o),te.lookAt(0,0,0),I.setPixelRatio(Math.min(window.devicePixelRatio,2)),I.toneMapping=cn,I.outputColorSpace=en,$(M).appendChild(I.domElement);function re(ee){ee.preventDefault(),cancelAnimationFrame(O)}function ae(){F||D()}I.domElement.addEventListener("webglcontextlost",re),I.domElement.addEventListener("webglcontextrestored",ae);const de=new ii;z.add(de);const Re=new ta,me=[],Fe=[],Ue=[],V=new Hi(r,s,1,16),j=t().length,K=s/a,_e=Math.ceil(i/(K+.04)),le=Math.max(j,Math.floor(_e/j)*j),Ce=i/le,Pe=new Map;function Ee(ee){if(Pe.has(ee))return Pe.get(ee);const J=Re.load(t()[ee].thumbnail_base);return J.minFilter=yt,J.magFilter=yt,Pe.set(ee,J),J}for(let ee=0;ee<le;ee++){const J=ee%j,ce=t()[J],Q=-ee*Ce,Z=Ee(J),se=new En({uniforms:{uRadius:{value:a},uBaseAngle:{value:Q},uTexture:{value:Z},uPlaneSize:{value:new $e(r,s)},uImageRes:{value:new $e(1,1)},uOpacity:{value:1}},vertexShader:w,fragmentShader:R,transparent:!0,side:xn});Z.userData.materials||(Z.userData.materials=[],Z.onUpdate=()=>{if(Z.image){const Qe=Z.image,et=Qe.width||1,Ht=Qe.height||1;for(const Ct of Z.userData.materials)Ct.uniforms.uImageRes.value.set(et,Ht)}}),Z.userData.materials.push(se);const Ie=new Mn(V,se);Ie.userData={meshIndex:ee,projectIndex:J,project:ce,baseSeatAngle:Q},de.add(Ie),me.push(se),Fe.push(Ie),Ue.push(1)}function ze(){if(!$(M))return;const{width:ee,height:J}=$(M).getBoundingClientRect();ee===0||J===0||(te.aspect=ee/J,te.updateProjectionMatrix(),I.setSize(ee,J))}X=new ResizeObserver(ze),X.observe($(M)),requestAnimationFrame(ze);const Je=new Af,Ge=new $e;let pt=-1,C=!1,ft=null;function nt(ee){if(!$(M))return-1;const J=$(M).getBoundingClientRect();Ge.x=(ee.clientX-J.left)/J.width*2-1,Ge.y=-((ee.clientY-J.top)/J.height)*2+1,Je.setFromCamera(Ge,te);const ce=Je.ray.origin,Q=Je.ray.direction,Z=Q.y*Q.y+Q.z*Q.z,se=2*(ce.y*Q.y+ce.z*Q.z),Ie=ce.y*ce.y+ce.z*ce.z-a*a,Qe=se*se-4*Z*Ie;if(Qe<0)return-1;const et=(-se-Math.sqrt(Qe))/(2*Z);if(et<0||(b.copy(ce).addScaledVector(Q,et),Math.abs(b.x)>r/2))return-1;const Ht=Math.atan2(b.y,b.z),Ct=s/2/a;let Wn=-1,Xn=1/0;for(let De=0;De<le;De++){if(!Fe[De].visible)continue;const qe=me[De].uniforms.uBaseAngle.value;let mt=Ht-qe;mt=((mt+Math.PI)%i+i)%i-Math.PI,Math.abs(mt)<Ct&&Math.abs(mt)<Xn&&(Xn=Math.abs(mt),Wn=De)}return Wn}function dt(ee){const J=nt(ee);J>=0?(pt=J,C=!0,$(M).style.cursor="pointer"):(pt=-1,C=!1,$(M).style.cursor="default")}function ye(ee){ft=ee,dt(ee)}function T(){ft=null,pt=-1,C=!1,$(M)&&($(M).style.cursor="default")}function g(ee){var ce;const J=nt(ee);if(J>=0){const Q=Fe[J].userData.project;if(Q!=null&&Q.url){const Z=(ce=$(M))==null?void 0:ce.closest("c-reel");Z&&Z.dispatchEvent(new CustomEvent("reel:exit",{bubbles:!0,detail:{url:Q.url,project:Q}}))}}}$(M).addEventListener("mousemove",ye),$(M).addEventListener("mouseleave",T),$(M).addEventListener("click",g);const L=$(M).closest("[data-canvas-map]");let q=0,ie=0,W=!1,be=0,he=0,Te=-1,Ne=0;function oe(ee){ee.preventDefault(),ie+=ee.deltaY*l,W=!1,he=performance.now()}function fe(ee){Ne=ee.touches[0].clientY,ie=0,W=!1,he=performance.now()}function xe(ee){ee.preventDefault();const J=ee.touches[0].clientY;ie=(Ne-J)*f,q+=ie,Ne=J,he=performance.now()}function Me(){he=performance.now()}L&&(L.addEventListener("wheel",oe,{passive:!1}),L.addEventListener("touchstart",fe,{passive:!0}),L.addEventListener("touchmove",xe,{passive:!1}),L.addEventListener("touchend",Me));let ue=!0;const ke=new IntersectionObserver(([ee])=>{ue=ee.isIntersecting,ue&&!F?D():cancelAnimationFrame(O)},{threshold:0});ke.observe($(M));function D(){var Z;if(F||!ue)return;O=requestAnimationFrame(D);const ee=performance.now();if(W||(q+=ie,ie*=u),!W&&Math.abs(ie)<d&&ee-he>v){const se=(q%i+i)%i,Ie=Math.floor(se/Ce+.4);be=Math.round(q/i)*i+Ie*Ce,Math.abs(be-q)>i/2&&(be+=q>be?i:-i),W=!0,ie=0}W&&(q+=(be-q)*p,Math.abs(be-q)<_&&(q=be,W=!1)),ft&&(Math.abs(ie)>1e-4||W)&&dt(ft);const J=(q%i+i)%i,ce=Math.round(J/Ce)%le,Q=ce%j;for(let se=0;se<le;se++){const Qe=-se*Ce+q;me[se].uniforms.uBaseAngle.value=Qe;const et=(Qe%i+i)%i,Ht=Math.cos(et),Ct=A(.3,.6,Ht);Fe[se].visible=Ct>.01;let Wn;Fe[se].visible?C?Wn=se===pt?Ct:Ct*m:Wn=se===ce?Ct:Ct*m:Wn=0,Ue[se]=Wn;const Xn=me[se].uniforms.uOpacity.value;me[se].uniforms.uOpacity.value+=(Ue[se]-Xn)*h}if(Q!==Te&&t()[Q]){Te=Q;const se=(Z=$(M))==null?void 0:Z.closest("c-reel");se&&se.dispatchEvent(new CustomEvent("reel:update",{bubbles:!0,detail:{project:t()[Q],index:Q}}))}I.render(z,te)}return D(),requestAnimationFrame(()=>{var J;const ee=(J=$(M))==null?void 0:J.closest("c-reel");ee&&t()[0]&&(Te=0,ee.dispatchEvent(new CustomEvent("reel:update",{bubbles:!0,detail:{project:t()[0],index:0}})))}),()=>{var ee,J,ce;F=!0,window.removeEventListener("resize",U),cancelAnimationFrame(O),X&&X.disconnect(),ke.disconnect(),(ee=$(M))==null||ee.removeEventListener("mousemove",ye),(J=$(M))==null||J.removeEventListener("mouseleave",T),(ce=$(M))==null||ce.removeEventListener("click",g),L&&(L.removeEventListener("wheel",oe),L.removeEventListener("touchstart",fe),L.removeEventListener("touchmove",xe),L.removeEventListener("touchend",Me)),I.domElement.removeEventListener("webglcontextlost",re),I.domElement.removeEventListener("webglcontextrestored",ae),de.clear(),z.clear(),V.dispose();for(const Q of me)Q.dispose();Pe.forEach(Q=>{Q.userData.materials=null,Q.dispose()}),Pe.clear(),me.length=0,Fe.length=0,I.dispose(),I.forceContextLoss(),I.domElement.parentNode&&I.domElement.parentNode.removeChild(I.domElement)}});var x=Ma(),y=gr(x);{var P=I=>{var O=k0();Ci(O,21,t,Ri,(X,F)=>{var z=H0();We(()=>zt(z,"href",$(F).url)),We(()=>zt(z,"title",$(F).title)),We(()=>zt(z,"backgroundimage",$(F).thumbnail_base)),We(()=>zt(z,"overlayimage",$(F).thumbnail_overlay)),Ve(X,z)}),Ve(I,O)},G=I=>{var O=W0();er(O,X=>Nt(M,X),()=>$(M)),Ve(I,O)};Wt(y,I=>{$(E)?I(P):I(G,!1)})}Ve(n,x),pn()}var Y0=Xe("<c-indexcard></c-indexcard>",2),q0=Xe('<div class="mobile-fallback svelte-5ts47l"></div>'),$0=Xe('<div class="canvas-container svelte-5ts47l"></div>');function j0(n,e){hn(e,!0);let t=je(e,"projects",19,()=>[]);const i=2,r=3.2*i,s=4.2*i,o=s+.28,c=.22,l=o*4,f=4,u=0,d=8,p=80,_=-30*(Math.PI/180),v=0,m=2,h=.08,b=o*5,M=.004,E=.008,A=.91,w=.003,R=.1,U=.0015,x=100,y=o*.08,P=.2,G=.18,I=991;let O=Kt(void 0),X=Kt(!1);function F(){Nt(X,window.innerWidth<=I)}const z=`
        uniform float uSeatY;
        uniform float uViewCenterY;
        uniform float uCurveStrength;
        uniform float uCurveExp;
        uniform float uCurveRange;

        varying vec2 vUv;

        void main() {
            vUv = uv;

            vec3 pos = position;
            float stripY = uSeatY + pos.y;
            float relY = stripY - uViewCenterY;
            float clampedRelY = clamp(relY, -uCurveRange, uCurveRange);
            float curveExp = exp(-clampedRelY * uCurveExp);

            pos.z += uCurveStrength * (curveExp - 1.0);

            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
    `,te=`
        precision mediump float;

        uniform sampler2D uTexture;
        uniform vec2 uImageRes;
        uniform vec2 uPlaneSize;
        uniform float uOpacity;

        varying vec2 vUv;

        vec2 CoverUV(vec2 u, vec2 s, vec2 i) {
            float rs = s.x / s.y;
            float ri = i.x / i.y;
            vec2 st = rs < ri ? vec2(i.x * s.y / i.y, s.y) : vec2(s.x, i.y * s.x / i.x);
            vec2 o = (rs < ri ? vec2((st.x - s.x) / 2.0, 0.0) : vec2(0.0, (st.y - s.y) / 2.0)) / st;
            return u * s / st + o;
        }

        void main() {
            vec2 uv = CoverUV(vUv, uPlaneSize, uImageRes);
            vec4 tex = texture2D(uTexture, uv);
            gl_FragColor = vec4(tex.rgb, uOpacity);
        }
    `;tr(()=>{if(F(),window.addEventListener("resize",F),$(X)||!t().length||!$(O))return()=>{window.removeEventListener("resize",F)};let me,Fe,Ue=null,V=!1;try{me=new sa({antialias:!0,alpha:!0})}catch{return Nt(X,!0),()=>{window.removeEventListener("resize",F)}}const j=new Qs,K=new on(p,1,.1,60);K.position.set(f,u,d),K.lookAt(0,0,0),me.setPixelRatio(Math.min(window.devicePixelRatio,2)),me.toneMapping=cn,me.outputColorSpace=en,$(O).appendChild(me.domElement);function _e(De){De.preventDefault(),cancelAnimationFrame(Fe)}function le(){V||Xn()}me.domElement.addEventListener("webglcontextlost",_e),me.domElement.addEventListener("webglcontextrestored",le);const Ce=new ii;Ce.rotation.x=_,Ce.position.y=v,j.add(Ce);const Pe=new ta,Ee=[],ze=[],Je=[],Ge=new Hi(r,s,1,16),pt=t().length,C=Math.ceil(d*2/o)+4,ft=Math.max(pt*3,Math.ceil(C/pt)*pt),nt=ft*o,dt=nt/2,ye=new Map;function T(De){if(ye.has(De))return ye.get(De);const qe=Pe.load(t()[De].thumbnail_base);return qe.minFilter=yt,qe.magFilter=yt,ye.set(De,qe),qe}for(let De=0;De<ft;De++){const qe=De%pt,mt=T(qe),Dt=-dt+o*.5+De*o,St=new En({uniforms:{uTexture:{value:mt},uPlaneSize:{value:new $e(r,s)},uImageRes:{value:new $e(1,1)},uOpacity:{value:1},uSeatY:{value:Dt},uViewCenterY:{value:0},uCurveStrength:{value:m},uCurveExp:{value:h},uCurveRange:{value:b}},vertexShader:z,fragmentShader:te,transparent:!0,side:xn});mt.userData.materials||(mt.userData.materials=[],mt.onUpdate=()=>{if(mt.image){const In=mt.image,xi=In.width||1,it=In.height||1;for(const Si of mt.userData.materials)Si.uniforms.uImageRes.value.set(xi,it)}}),mt.userData.materials.push(St);const Ut=new Mn(Ge,St);Ut.position.y=Dt,Ut.userData={meshIndex:De,projectIndex:qe,project:t()[qe],baseSeatY:Dt},Ce.add(Ut),Ee.push(St),ze.push(Ut),Je.push(1)}function g(){if(!$(O))return;const{width:De,height:qe}=$(O).getBoundingClientRect();De===0||qe===0||(K.aspect=De/qe,K.updateProjectionMatrix(),me.setSize(De,qe))}Ue=new ResizeObserver(g),Ue.observe($(O)),requestAnimationFrame(g);const L=new Af,q=new $e;let ie=-1,W=!1,be=null;function he(De){if(!$(O))return;const qe=$(O).getBoundingClientRect();q.x=(De.clientX-qe.left)/qe.width*2-1,q.y=-((De.clientY-qe.top)/qe.height)*2+1,L.setFromCamera(q,K);const mt=L.intersectObjects(ze);mt.length>0?(ie=mt[0].object.userData.meshIndex,W=!0,$(O).style.cursor="pointer"):(ie=-1,W=!1,$(O).style.cursor="default")}function Te(De){be=De,he(De)}function Ne(){be=null,ie=-1,W=!1,$(O)&&($(O).style.cursor="default")}function oe(De){if(!$(O))return;const qe=$(O).getBoundingClientRect();q.x=(De.clientX-qe.left)/qe.width*2-1,q.y=-((De.clientY-qe.top)/qe.height)*2+1,L.setFromCamera(q,K);const mt=L.intersectObjects(ze);if(mt.length>0){const St=mt[0].object.userData.project;if(St!=null&&St.url){const Ut=$(O).closest("c-strip");Ut&&Ut.dispatchEvent(new CustomEvent("strip:exit",{bubbles:!0,detail:{url:St.url,project:St}}))}}}$(O).addEventListener("mousemove",Te),$(O).addEventListener("mouseleave",Ne),$(O).addEventListener("click",oe);const fe=$(O).closest("[data-canvas-map]");let xe=0,Me=0,ue=!1,ke=0,D=-1,ee=0,J=-1,ce=-1,Q=0;function Z(De,qe){return((De+qe+dt)%nt+nt)%nt-dt}function se(De,qe){let mt=0,Dt=0,St=1/0;for(let Ut=0;Ut<ft;Ut++){const In=ze[Ut].userData.baseSeatY,xi=Z(In,De),it=Math.abs(xi-qe);it<St&&(St=it,mt=Ut,Dt=xi)}return{index:mt,worldY:Dt,dist:St}}function Ie(De){De.preventDefault(),Me+=De.deltaY*M,ue=!1,ee=performance.now()}function Qe(De){Q=De.touches[0].clientY,Me=0,ue=!1,ee=performance.now()}function et(De){De.preventDefault();const qe=De.touches[0].clientY;Me=(Q-qe)*E,xe+=Me,Q=qe,ee=performance.now()}function Ht(){ee=performance.now()}fe&&(fe.addEventListener("wheel",Ie,{passive:!1}),fe.addEventListener("touchstart",Qe,{passive:!0}),fe.addEventListener("touchmove",et,{passive:!1}),fe.addEventListener("touchend",Ht));let Ct=!0;const Wn=new IntersectionObserver(([De])=>{Ct=De.isIntersecting,Ct&&!V?Xn():cancelAnimationFrame(Fe)},{threshold:0});Wn.observe($(O));function Xn(){var xi;if(V||!Ct)return;Fe=requestAnimationFrame(Xn);const De=performance.now();L.setFromCamera(new $e(0,0),K);const qe=L.ray,mt=-qe.origin.z/qe.direction.z,Dt=qe.origin.y+mt*qe.direction.y;if(ue||(xe+=Me,Me*=A),!ue&&Math.abs(Me)<w&&De-ee>x){const it=se(xe,Dt);D=it.index,ke=xe+(Dt-it.worldY),ue=!0,Me=0}ue&&(xe+=(ke-xe)*R,Math.abs(ke-xe)<U&&(xe=ke,ue=!1,D=-1)),be&&(Math.abs(Me)>.001||ue)&&he(be);let St=0,Ut=1/0;for(let it=0;it<ft;it++){const Si=ze[it].userData.baseSeatY,Mi=Z(Si,xe);ze[it].position.y=Mi,ze[it].position.z=0,ze[it].rotation.x=0,Ee[it].uniforms.uSeatY.value=Mi,Ee[it].uniforms.uViewCenterY.value=Dt;const Rs=Math.abs(Mi-Dt);Rs<Ut&&(Ut=Rs,St=it);const io=Math.min(Rs/l,1),mc=1-c*io;ze[it].scale.set(mc,1,1)}if(ue&&D>=0)St=D;else if(ce>=0){const it=Math.abs(ze[ce].position.y-Dt);St!==ce&&Ut>it-y&&(St=ce,Ut=it)}ce=St;const In=ze[St].userData.projectIndex;for(let it=0;it<ft;it++){let Si;W?Si=it===ie?1:P:Si=it===St?1:P,Je[it]=Si;const Mi=Ee[it].uniforms.uOpacity.value;Ee[it].uniforms.uOpacity.value+=(Je[it]-Mi)*G}if(In!==J&&t()[In]){J=In;const it=(xi=$(O))==null?void 0:xi.closest("c-strip");it&&it.dispatchEvent(new CustomEvent("strip:update",{bubbles:!0,detail:{project:t()[In],index:In}}))}me.render(j,K)}return Xn(),requestAnimationFrame(()=>{var qe;const De=(qe=$(O))==null?void 0:qe.closest("c-strip");De&&t()[0]&&(J=0,De.dispatchEvent(new CustomEvent("strip:update",{bubbles:!0,detail:{project:t()[0],index:0}})))}),()=>{var De,qe,mt;V=!0,window.removeEventListener("resize",F),cancelAnimationFrame(Fe),Ue&&Ue.disconnect(),Wn.disconnect(),(De=$(O))==null||De.removeEventListener("mousemove",Te),(qe=$(O))==null||qe.removeEventListener("mouseleave",Ne),(mt=$(O))==null||mt.removeEventListener("click",oe),fe&&(fe.removeEventListener("wheel",Ie),fe.removeEventListener("touchstart",Qe),fe.removeEventListener("touchmove",et),fe.removeEventListener("touchend",Ht)),me.domElement.removeEventListener("webglcontextlost",_e),me.domElement.removeEventListener("webglcontextrestored",le),Ce.clear(),j.clear(),Ge.dispose();for(const Dt of Ee)Dt.dispose();ye.forEach(Dt=>{Dt.userData.materials=null,Dt.dispose()}),ye.clear(),Ee.length=0,ze.length=0,me.dispose(),me.forceContextLoss(),me.domElement.parentNode&&me.domElement.parentNode.removeChild(me.domElement)}});var re=Ma(),ae=gr(re);{var de=me=>{var Fe=q0();Ci(Fe,21,t,Ri,(Ue,V)=>{var j=Y0();We(()=>zt(j,"href",$(V).url)),We(()=>zt(j,"title",$(V).title)),We(()=>zt(j,"backgroundimage",$(V).thumbnail_base)),We(()=>zt(j,"overlayimage",$(V).thumbnail_overlay)),Ve(Ue,j)}),Ve(me,Fe)},Re=me=>{var Fe=$0();er(Fe,Ue=>Nt(O,Ue),()=>$(O)),Ve(me,Fe)};Wt(ae,me=>{$(X)?me(de):me(Re,!1)})}Ve(n,re),pn()}var Z0=Xe('<div class="text svelte-1v32imz"><div class="text-md"><!></div></div>'),K0=Xe('<header><div class="heading svelte-1v32imz"><h2 class="svelte-1v32imz"><!></h2></div> <!></header>');function J0(n,e){hn(e,!0);let t=je(e,"title",3,""),i=je(e,"description",3,""),r=je(e,"layout",3,"column");const s=$i(()=>t().replace(/^<p>(.*)<\/p>$/s,"$1")),a=$i(()=>i().replace(/^<p>(.*)<\/p>$/s,"$1"));var o=K0();let c;var l=pe(o),f=pe(l),u=pe(f);si(u,()=>$(s));var d=ot(l,2);{var p=_=>{var v=Z0(),m=pe(v),h=pe(m);si(h,()=>$(a)),Ve(_,v)};Wt(d,_=>{i()&&_(p)})}We(()=>c=Mr(o,1,"header svelte-1v32imz",null,c,{"is-row":r()==="row"})),Ve(n,o),pn()}var Q0=Xe('<img loading="lazy" class="svelte-1pcp5jh"/>'),ex=Xe('<figcaption class="caption text-sm svelte-1pcp5jh"> </figcaption>'),tx=Xe('<figure class="figure svelte-1pcp5jh"><div class="img-wrap svelte-1pcp5jh"><!></div> <!></figure>'),nx=Xe('<section class="section"><div><div class="grid svelte-1pcp5jh"></div></div></section>');function ix(n,e){let t=je(e,"images",19,()=>[]),i=je(e,"spacing",3,"stack");var r=nx(),s=pe(r);let a;var o=pe(s);Ci(o,21,t,Ri,(c,l)=>{var f=tx(),u=pe(f),d=pe(u);{var p=m=>{var h=Q0();We(()=>{Jt(h,"src",$(l).url),Jt(h,"alt",$(l).alt||"")}),Ve(m,h)};Wt(d,m=>{$(l).url&&m(p)})}var _=ot(u,2);{var v=m=>{var h=ex(),b=pe(h);We(()=>tn(b,$(l).caption)),Ve(m,h)};Wt(_,m=>{$(l).caption&&m(v)})}Ve(c,f)}),We(()=>a=Mr(s,1,"container-fw py-sm",null,a,{"pt-0":i()==="trim"})),Ve(n,r)}var rx=Xe('<p class="heading svelte-h8mvjh"> </p>'),sx=Xe('<div class="col svelte-h8mvjh"><!> <div class="text-md"><!></div></div>'),ax=Xe('<section class="section svelte-h8mvjh"><div></div></section>');function ox(n,e){hn(e,!0);let t=je(e,"columns",3,"4"),i=je(e,"items",19,()=>[]);const r=$i(()=>Math.max(1,Number(t())-i().length+1));var s=ax(),a=pe(s);Ci(a,21,i,Ri,(o,c,l)=>{var f=sx(),u=pe(f);{var d=v=>{var m=rx(),h=pe(m);We(()=>tn(h,$(c).heading)),Ve(v,m)};Wt(u,v=>{$(c).heading&&v(d)})}var p=ot(u,2),_=pe(p);si(_,()=>$(c).content),We(()=>Os(f,l===0?`grid-column-start: ${$(r)}`:"")),Ve(o,f)}),We(()=>Mr(a,1,`grid col-${t()??""}`,"svelte-h8mvjh")),Ve(n,s),pn()}var lx=Xe("<h5> </h5>"),cx=Xe("<h5> </h5>"),ux=Xe('<div class="cell svelte-1k4htmo"><!> <div class="text-md"><!></div></div>'),fx=Xe('<section class="section"><div class="container-fw py-sm"><div></div></div></section>');function dx(n,e){hn(e,!0);let t=je(e,"columns",3,"4"),i=je(e,"items",19,()=>[]);const r=$i(()=>Math.max(1,Number(t())-i().length+1));var s=fx(),a=pe(s),o=pe(a);Ci(o,21,i,Ri,(c,l,f)=>{var u=ux(),d=pe(u);{var p=h=>{var b=lx(),M=pe(b);We(()=>tn(M,$(l).heading)),Ve(h,b)},_=h=>{var b=cx(),M=pe(b);We(E=>tn(M,`(${E??""})`),[()=>String(f+1).padStart(2,"0")]),Ve(h,b)};Wt(d,h=>{$(l).heading?h(p):h(_,!1)})}var v=ot(d,2),m=pe(v);si(m,()=>$(l).description),We(()=>Os(u,f===0?`grid-column-start: ${$(r)}`:"")),Ve(c,u)}),We(()=>Mr(o,1,`grid col-${t()??""}`,"svelte-1k4htmo")),Ve(n,s),pn()}var hx=Xe('<img loading="lazy" class="svelte-144qpa3"/>'),px=Xe('<figcaption class="caption text-sm svelte-144qpa3"> </figcaption>'),mx=Xe('<section class="section-fw"><figure class="figure svelte-144qpa3"><div class="img-wrap svelte-144qpa3"><!></div> <!></figure></section>');function _x(n,e){let t=je(e,"image",3,""),i=je(e,"alt",3,""),r=je(e,"caption",3,"");var s=mx(),a=pe(s),o=pe(a),c=pe(o);{var l=d=>{var p=hx();We(()=>{Jt(p,"src",t()),Jt(p,"alt",i())}),Ve(d,p)};Wt(c,d=>{t()&&d(l)})}var f=ot(o,2);{var u=d=>{var p=px(),_=pe(p);We(()=>tn(_,r())),Ve(d,p)};Wt(f,d=>{r()&&d(u)})}Ve(n,s)}Xt("c-header",wh,["rootpath","links"]),Xt("c-footer",Lh,["fixed","links"]),Xt("c-preloader",Nh,["title","images"]),Xt("l-home",zh,["eyebrow","title","buttonlabel","buttonhref","projects"]),Xt("c-button",jh,["href","label","active"]),Xt("c-indexcard",Qh,["href","title","backgroundimage","overlayimage"]),Xt("c-asterisk",O0,["images"]),Xt("c-helix",z0,["images"]),Xt("c-drum",G0,["images"]),Xt("c-reel",X0,["projects"]),Xt("c-strip",j0,["projects"]),Xt("b-header",J0,["title","description","layout"]),Xt("b-img",ix,["images","spacing"]),Xt("b-text",ox,["columns","items"]),Xt("b-grid",dx,["columns","items"]),Xt("b-fullbleed",_x,["image","alt","caption"]),Xt("l-about",Wh,["images","items"]),Xt("l-404",qh,["title","message","buttonlabel","buttonhref"]),console.log("Svelte components loaded"),window.dispatchEvent(new CustomEvent("svelte-ready"))})();

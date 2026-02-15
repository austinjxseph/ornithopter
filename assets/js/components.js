var vx=Object.defineProperty;var nd=Mt=>{throw TypeError(Mt)};var xx=(Mt,St,Rt)=>St in Mt?vx(Mt,St,{enumerable:!0,configurable:!0,writable:!0,value:Rt}):Mt[St]=Rt;var On=(Mt,St,Rt)=>xx(Mt,typeof St!="symbol"?St+"":St,Rt),uc=(Mt,St,Rt)=>St.has(Mt)||nd("Cannot "+Rt);var Z=(Mt,St,Rt)=>(uc(Mt,St,"read from private field"),Rt?Rt.call(Mt):St.get(Mt)),tt=(Mt,St,Rt)=>St.has(Mt)?nd("Cannot add the same private member more than once"):St instanceof WeakSet?St.add(Mt):St.set(Mt,Rt),$e=(Mt,St,Rt,ci)=>(uc(Mt,St,"write to private field"),ci?ci.call(Mt,Rt):St.set(Mt,Rt),Rt),jt=(Mt,St,Rt)=>(uc(Mt,St,"access private method"),Rt);(function(){"use strict";var hs,ps,Er,ms,$s,Zs,yr,_s,ri,fc,dc,id,Un,ac,si,br,ai,Nn,fn,oi,wi,Ji,Tr,Qi,gs,Ar,vs,xs,Ri,Xa,Nt,Sx,Mx,hc,Za,Ka,pc,Yn,li,Tn,wr,Ks,js,qa,Zf;var St=Array.isArray,Rt=Array.prototype.indexOf,ci=Array.prototype.includes,Qs=Array.from,rd=Object.defineProperty,Dr=Object.getOwnPropertyDescriptor,sd=Object.getOwnPropertyDescriptors,ad=Object.prototype,od=Array.prototype,mc=Object.getPrototypeOf,_c=Object.isExtensible;function ld(n){for(var e=0;e<n.length;e++)n[e]()}function gc(){var n,e,t=new Promise((i,r)=>{n=i,e=r});return{promise:t,resolve:n,reject:e}}const Ft=2,ea=4,ta=8,vc=1<<24,ui=16,Bn=32,tr=64,ja=128,Rn=512,It=1024,rn=2048,fi=4096,pn=8192,di=16384,Ja=32768,Lr=65536,xc=1<<17,Sc=1<<18,Ir=1<<19,cd=1<<20,Di=1<<25,nr=32768,Qa=1<<21,eo=1<<22,Li=1<<23,Ms=Symbol("$state"),ud=Symbol("legacy props"),fd=Symbol(""),Ur=new class extends Error{constructor(){super(...arguments);On(this,"name","StaleReactionError");On(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};function dd(n){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function hd(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function pd(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function md(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function _d(n){throw new Error("https://svelte.dev/e/effect_orphan")}function gd(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function vd(n){throw new Error("https://svelte.dev/e/props_invalid_value")}function xd(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Sd(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Md(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Ed(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const yd=1,bd=2,Td=16,Ad=1,wd=4,Rd=8,Cd=16,Pd=1,Dd=2,Ot=Symbol(),Ld="http://www.w3.org/1999/xhtml";function Id(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Mc(n){return n===this.v}function Ud(n,e){return n!=n?e==e:n!==e||n!==null&&typeof n=="object"||typeof n=="function"}function Ec(n){return!Ud(n,this.v)}let Ex=!1,mn=null;function Nr(n){mn=n}function _n(n,e=!1,t){mn={p:mn,i:!1,c:null,e:null,s:n,x:null,l:null}}function gn(n){var e=mn,t=e.e;if(t!==null){e.e=null;for(var i of t)kc(i)}return e.i=!0,mn=e.p,{}}function yc(){return!0}let Fr=[];function Nd(){var n=Fr;Fr=[],ld(n)}function ir(n){if(Fr.length===0){var e=Fr;queueMicrotask(()=>{e===Fr&&Nd()})}Fr.push(n)}function bc(n){var e=ut;if(e===null)return Je.f|=Li,n;if((e.f&Ja)===0){if((e.f&ja)===0)throw n;e.b.error(n)}else Or(n,e)}function Or(n,e){for(;e!==null;){if((e.f&ja)!==0)try{e.b.error(n);return}catch(t){n=t}e=e.parent}throw n}const Fd=-7169;function Ct(n,e){n.f=n.f&Fd|e}function to(n){(n.f&Rn)!==0||n.deps===null?Ct(n,It):Ct(n,fi)}function Tc(n){if(n!==null)for(const e of n)(e.f&Ft)===0||(e.f&nr)===0||(e.f^=nr,Tc(e.deps))}function Ac(n,e,t){(n.f&rn)!==0?e.add(n):(n.f&fi)!==0&&t.add(n),Tc(n.deps),Ct(n,It)}const na=new Set;let ft=null,Bt=null,zn=[],no=null,io=!1;const sc=class sc{constructor(){tt(this,ri);On(this,"committed",!1);On(this,"current",new Map);On(this,"previous",new Map);tt(this,hs,new Set);tt(this,ps,new Set);tt(this,Er,0);tt(this,ms,0);tt(this,$s,null);tt(this,Zs,new Set);tt(this,yr,new Set);On(this,"skipped_effects",new Set);On(this,"is_fork",!1);tt(this,_s,!1)}is_deferred(){return this.is_fork||Z(this,ms)>0}process(e){var r;zn=[],this.apply();var t=[],i=[];for(const s of e)jt(this,ri,fc).call(this,s,t,i);if(this.is_deferred()){jt(this,ri,dc).call(this,i),jt(this,ri,dc).call(this,t);for(const s of this.skipped_effects)Pc(s)}else{for(const s of Z(this,hs))s();Z(this,hs).clear(),Z(this,Er)===0&&jt(this,ri,id).call(this),ft=null,wc(i),wc(t),(r=Z(this,$s))==null||r.resolve()}Bt=null}capture(e,t){t!==Ot&&!this.previous.has(e)&&this.previous.set(e,t),(e.f&Li)===0&&(this.current.set(e,e.v),Bt==null||Bt.set(e,e.v))}activate(){ft=this,this.apply()}deactivate(){ft===this&&(ft=null,Bt=null)}flush(){if(this.activate(),zn.length>0){if(Od(),ft!==null&&ft!==this)return}else Z(this,Er)===0&&this.process([]);this.deactivate()}discard(){for(const e of Z(this,ps))e(this);Z(this,ps).clear()}increment(e){$e(this,Er,Z(this,Er)+1),e&&$e(this,ms,Z(this,ms)+1)}decrement(e){$e(this,Er,Z(this,Er)-1),e&&$e(this,ms,Z(this,ms)-1),!Z(this,_s)&&($e(this,_s,!0),ir(()=>{$e(this,_s,!1),this.is_deferred()?zn.length>0&&this.flush():this.revive()}))}revive(){for(const e of Z(this,Zs))Z(this,yr).delete(e),Ct(e,rn),hi(e);for(const e of Z(this,yr))Ct(e,fi),hi(e);this.flush()}oncommit(e){Z(this,hs).add(e)}ondiscard(e){Z(this,ps).add(e)}settled(){return(Z(this,$s)??$e(this,$s,gc())).promise}static ensure(){if(ft===null){const e=ft=new sc;na.add(ft),ir(()=>{ft===e&&e.flush()})}return ft}apply(){}};hs=new WeakMap,ps=new WeakMap,Er=new WeakMap,ms=new WeakMap,$s=new WeakMap,Zs=new WeakMap,yr=new WeakMap,_s=new WeakMap,ri=new WeakSet,fc=function(e,t,i){e.f^=It;for(var r=e.first,s=null;r!==null;){var a=r.f,o=(a&(Bn|tr))!==0,c=o&&(a&It)!==0,l=c||(a&pn)!==0||this.skipped_effects.has(r);if(!l&&r.fn!==null){o?r.f^=It:s!==null&&(a&(ea|ta|vc))!==0?s.b.defer_effect(r):(a&ea)!==0?t.push(r):bs(r)&&((a&ui)!==0&&Z(this,yr).add(r),Ts(r));var f=r.first;if(f!==null){r=f;continue}}var u=r.parent;for(r=r.next;r===null&&u!==null;)u===s&&(s=null),r=u.next,u=u.parent}},dc=function(e){for(var t=0;t<e.length;t+=1)Ac(e[t],Z(this,Zs),Z(this,yr))},id=function(){var r;if(na.size>1){this.previous.clear();var e=Bt,t=!0;for(const s of na){if(s===this){t=!1;continue}const a=[];for(const[c,l]of this.current){if(s.current.has(c))if(t&&l!==s.current.get(c))s.current.set(c,l);else continue;a.push(c)}if(a.length===0)continue;const o=[...s.current.keys()].filter(c=>!this.current.has(c));if(o.length>0){var i=zn;zn=[];const c=new Set,l=new Map;for(const f of a)Rc(f,o,c,l);if(zn.length>0){ft=s,s.apply();for(const f of zn)jt(r=s,ri,fc).call(r,f,[],[]);s.deactivate()}zn=i}}ft=null,Bt=e}this.committed=!0,na.delete(this)};let Ii=sc;function Od(){io=!0;var n=null;try{for(var e=0;zn.length>0;){var t=Ii.ensure();if(e++>1e3){var i,r;Bd()}t.process(zn),Ni.clear()}}finally{io=!1,no=null}}function Bd(){try{gd()}catch(n){Or(n,no)}}let Vn=null;function wc(n){var e=n.length;if(e!==0){for(var t=0;t<e;){var i=n[t++];if((i.f&(di|pn))===0&&bs(i)&&(Vn=new Set,Ts(i),i.deps===null&&i.first===null&&i.nodes===null&&(i.teardown===null&&i.ac===null?$c(i):i.fn=null),(Vn==null?void 0:Vn.size)>0)){Ni.clear();for(const r of Vn){if((r.f&(di|pn))!==0)continue;const s=[r];let a=r.parent;for(;a!==null;)Vn.has(a)&&(Vn.delete(a),s.push(a)),a=a.parent;for(let o=s.length-1;o>=0;o--){const c=s[o];(c.f&(di|pn))===0&&Ts(c)}}Vn.clear()}}Vn=null}}function Rc(n,e,t,i){if(!t.has(n)&&(t.add(n),n.reactions!==null))for(const r of n.reactions){const s=r.f;(s&Ft)!==0?Rc(r,e,t,i):(s&(eo|ui))!==0&&(s&rn)===0&&Cc(r,e,i)&&(Ct(r,rn),hi(r))}}function Cc(n,e,t){const i=t.get(n);if(i!==void 0)return i;if(n.deps!==null)for(const r of n.deps){if(ci.call(e,r))return!0;if((r.f&Ft)!==0&&Cc(r,e,t))return t.set(r,!0),!0}return t.set(n,!1),!1}function hi(n){for(var e=no=n;e.parent!==null;){e=e.parent;var t=e.f;if(io&&e===ut&&(t&ui)!==0&&(t&Sc)===0)return;if((t&(tr|Bn))!==0){if((t&It)===0)return;e.f^=It}}zn.push(e)}function Pc(n){if(!((n.f&Bn)!==0&&(n.f&It)!==0)){Ct(n,It);for(var e=n.first;e!==null;)Pc(e),e=e.next}}function zd(n){let e=0,t=rr(0),i;return()=>{oo()&&(ie(t),Wc(()=>(e===0&&(i=aa(()=>n(()=>Es(t)))),e+=1,()=>{ir(()=>{e-=1,e===0&&(i==null||i(),i=void 0,Es(t))})})))}}var Vd=Lr|Ir|ja;function Gd(n,e,t){new Hd(n,e,t)}class Hd{constructor(e,t,i){tt(this,Nt);On(this,"parent");On(this,"is_pending",!1);tt(this,Un);tt(this,ac,null);tt(this,si);tt(this,br);tt(this,ai);tt(this,Nn,null);tt(this,fn,null);tt(this,oi,null);tt(this,wi,null);tt(this,Ji,null);tt(this,Tr,0);tt(this,Qi,0);tt(this,gs,!1);tt(this,Ar,!1);tt(this,vs,new Set);tt(this,xs,new Set);tt(this,Ri,null);tt(this,Xa,zd(()=>($e(this,Ri,rr(Z(this,Tr))),()=>{$e(this,Ri,null)})));$e(this,Un,e),$e(this,si,t),$e(this,br,i),this.parent=ut.b,this.is_pending=!!Z(this,si).pending,$e(this,ai,lo(()=>{ut.b=this;{var r=jt(this,Nt,hc).call(this);try{$e(this,Nn,Cn(()=>i(r)))}catch(s){this.error(s)}Z(this,Qi)>0?jt(this,Nt,Ka).call(this):this.is_pending=!1}return()=>{var s;(s=Z(this,Ji))==null||s.remove()}},Vd))}defer_effect(e){Ac(e,Z(this,vs),Z(this,xs))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!Z(this,si).pending}update_pending_count(e){jt(this,Nt,pc).call(this,e),$e(this,Tr,Z(this,Tr)+e),!(!Z(this,Ri)||Z(this,gs))&&($e(this,gs,!0),ir(()=>{$e(this,gs,!1),Z(this,Ri)&&Br(Z(this,Ri),Z(this,Tr))}))}get_effect_pending(){return Z(this,Xa).call(this),ie(Z(this,Ri))}error(e){var t=Z(this,si).onerror;let i=Z(this,si).failed;if(Z(this,Ar)||!t&&!i)throw e;Z(this,Nn)&&(sn(Z(this,Nn)),$e(this,Nn,null)),Z(this,fn)&&(sn(Z(this,fn)),$e(this,fn,null)),Z(this,oi)&&(sn(Z(this,oi)),$e(this,oi,null));var r=!1,s=!1;const a=()=>{if(r){Id();return}r=!0,s&&Ed(),Ii.ensure(),$e(this,Tr,0),Z(this,oi)!==null&&sr(Z(this,oi),()=>{$e(this,oi,null)}),this.is_pending=this.has_pending_snippet(),$e(this,Nn,jt(this,Nt,Za).call(this,()=>($e(this,Ar,!1),Cn(()=>Z(this,br).call(this,Z(this,Un)))))),Z(this,Qi)>0?jt(this,Nt,Ka).call(this):this.is_pending=!1};ir(()=>{try{s=!0,t==null||t(e,a),s=!1}catch(o){Or(o,Z(this,ai)&&Z(this,ai).parent)}i&&$e(this,oi,jt(this,Nt,Za).call(this,()=>{Ii.ensure(),$e(this,Ar,!0);try{return Cn(()=>{i(Z(this,Un),()=>e,()=>a)})}catch(o){return Or(o,Z(this,ai).parent),null}finally{$e(this,Ar,!1)}}))})}}Un=new WeakMap,ac=new WeakMap,si=new WeakMap,br=new WeakMap,ai=new WeakMap,Nn=new WeakMap,fn=new WeakMap,oi=new WeakMap,wi=new WeakMap,Ji=new WeakMap,Tr=new WeakMap,Qi=new WeakMap,gs=new WeakMap,Ar=new WeakMap,vs=new WeakMap,xs=new WeakMap,Ri=new WeakMap,Xa=new WeakMap,Nt=new WeakSet,Sx=function(){try{$e(this,Nn,Cn(()=>Z(this,br).call(this,Z(this,Un))))}catch(e){this.error(e)}},Mx=function(){const e=Z(this,si).pending;e&&($e(this,fn,Cn(()=>e(Z(this,Un)))),ir(()=>{var t=jt(this,Nt,hc).call(this);$e(this,Nn,jt(this,Nt,Za).call(this,()=>(Ii.ensure(),Cn(()=>Z(this,br).call(this,t))))),Z(this,Qi)>0?jt(this,Nt,Ka).call(this):(sr(Z(this,fn),()=>{$e(this,fn,null)}),this.is_pending=!1)}))},hc=function(){var e=Z(this,Un);return this.is_pending&&($e(this,Ji,Fi()),Z(this,Un).before(Z(this,Ji)),e=Z(this,Ji)),e},Za=function(e){var t=ut,i=Je,r=mn;Pn(Z(this,ai)),an(Z(this,ai)),Nr(Z(this,ai).ctx);try{return e()}catch(s){return bc(s),null}finally{Pn(t),an(i),Nr(r)}},Ka=function(){const e=Z(this,si).pending;Z(this,Nn)!==null&&($e(this,wi,document.createDocumentFragment()),Z(this,wi).append(Z(this,Ji)),jc(Z(this,Nn),Z(this,wi))),Z(this,fn)===null&&$e(this,fn,Cn(()=>e(Z(this,Un))))},pc=function(e){var t;if(!this.has_pending_snippet()){this.parent&&jt(t=this.parent,Nt,pc).call(t,e);return}if($e(this,Qi,Z(this,Qi)+e),Z(this,Qi)===0){this.is_pending=!1;for(const i of Z(this,vs))Ct(i,rn),hi(i);for(const i of Z(this,xs))Ct(i,fi),hi(i);Z(this,vs).clear(),Z(this,xs).clear(),Z(this,fn)&&sr(Z(this,fn),()=>{$e(this,fn,null)}),Z(this,wi)&&(Z(this,Un).before(Z(this,wi)),$e(this,wi,null))}};function kd(n,e,t,i){const r=ia;var s=n.filter(d=>!d.settled);if(t.length===0&&s.length===0){i(e.map(r));return}var a=ft,o=ut,c=Wd(),l=s.length===1?s[0].promise:s.length>1?Promise.all(s.map(d=>d.promise)):null;function f(d){c();try{i(d)}catch(p){(o.f&di)===0&&Or(p,o)}a==null||a.deactivate(),ro()}if(t.length===0){l.then(()=>f(e.map(r)));return}function u(){c(),Promise.all(t.map(d=>Xd(d))).then(d=>f([...e.map(r),...d])).catch(d=>Or(d,o))}l?l.then(u):u()}function Wd(){var n=ut,e=Je,t=mn,i=ft;return function(s=!0){Pn(n),an(e),Nr(t),s&&(i==null||i.activate())}}function ro(){Pn(null),an(null),Nr(null)}function ia(n){var e=Ft|rn,t=Je!==null&&(Je.f&Ft)!==0?Je:null;return ut!==null&&(ut.f|=Ir),{ctx:mn,deps:null,effects:null,equals:Mc,f:e,fn:n,reactions:null,rv:0,v:Ot,wv:0,parent:t??ut,ac:null}}function Xd(n,e,t){let i=ut;i===null&&hd();var r=i.b,s=void 0,a=rr(Ot),o=!Je,c=new Map;return nh(()=>{var p;var l=gc();s=l.promise;try{Promise.resolve(n()).then(l.resolve,l.reject).then(()=>{f===ft&&f.committed&&f.deactivate(),ro()})}catch(_){l.reject(_),ro()}var f=ft;if(o){var u=r.is_rendered();r.update_pending_count(1),f.increment(u),(p=c.get(f))==null||p.reject(Ur),c.delete(f),c.set(f,l)}const d=(_,v=void 0)=>{if(f.activate(),v)v!==Ur&&(a.f|=Li,Br(a,v));else{(a.f&Li)!==0&&(a.f^=Li),Br(a,_);for(const[m,h]of c){if(c.delete(m),m===f)break;h.reject(Ur)}}o&&(r.update_pending_count(-1),f.decrement(u))};l.promise.then(d,_=>d(null,_||"unknown"))}),Qd(()=>{for(const l of c.values())l.reject(Ur)}),new Promise(l=>{function f(u){function d(){u===s?l(a):f(s)}u.then(d,d)}f(s)})}function Ui(n){const e=ia(n);return Qc(e),e}function Dc(n){const e=ia(n);return e.equals=Ec,e}function Lc(n){var e=n.effects;if(e!==null){n.effects=null;for(var t=0;t<e.length;t+=1)sn(e[t])}}function qd(n){for(var e=n.parent;e!==null;){if((e.f&Ft)===0)return(e.f&di)===0?e:null;e=e.parent}return null}function so(n){var e,t=ut;Pn(qd(n));try{n.f&=~nr,Lc(n),e=ru(n)}finally{Pn(t)}return e}function Ic(n){var e=so(n);if(!n.equals(e)&&(n.wv=nu(),(!(ft!=null&&ft.is_fork)||n.deps===null)&&(n.v=e,n.deps===null))){Ct(n,It);return}Bi||(Bt!==null?(oo()||ft!=null&&ft.is_fork)&&Bt.set(n,e):to(n))}let ao=new Set;const Ni=new Map;let Uc=!1;function rr(n,e){var t={f:0,v:n,reactions:null,equals:Mc,rv:0,wv:0};return t}function Jt(n,e){const t=rr(n);return Qc(t),t}function Yd(n,e=!1,t=!0){const i=rr(n);return e||(i.equals=Ec),i}function zt(n,e,t=!1){Je!==null&&(!Gn||(Je.f&xc)!==0)&&yc()&&(Je.f&(Ft|ui|eo|xc))!==0&&(Dn===null||!ci.call(Dn,n))&&Md();let i=t?zr(e):e;return Br(n,i)}function Br(n,e){if(!n.equals(e)){var t=n.v;Bi?Ni.set(n,e):Ni.set(n,t),n.v=e;var i=Ii.ensure();if(i.capture(n,t),(n.f&Ft)!==0){const r=n;(n.f&rn)!==0&&so(r),to(r)}n.wv=nu(),Nc(n,rn),ut!==null&&(ut.f&It)!==0&&(ut.f&(Bn|tr))===0&&(Ln===null?rh([n]):Ln.push(n)),!i.is_fork&&ao.size>0&&!Uc&&$d()}return e}function $d(){Uc=!1;for(const n of ao)(n.f&It)!==0&&Ct(n,fi),bs(n)&&Ts(n);ao.clear()}function Es(n){zt(n,n.v+1)}function Nc(n,e){var t=n.reactions;if(t!==null)for(var i=t.length,r=0;r<i;r++){var s=t[r],a=s.f,o=(a&rn)===0;if(o&&Ct(s,e),(a&Ft)!==0){var c=s;Bt==null||Bt.delete(c),(a&nr)===0&&(a&Rn&&(s.f|=nr),Nc(c,fi))}else o&&((a&ui)!==0&&Vn!==null&&Vn.add(s),hi(s))}}function zr(n){if(typeof n!="object"||n===null||Ms in n)return n;const e=mc(n);if(e!==ad&&e!==od)return n;var t=new Map,i=St(n),r=Jt(0),s=or,a=o=>{if(or===s)return o();var c=Je,l=or;an(null),tu(s);var f=o();return an(c),tu(l),f};return i&&t.set("length",Jt(n.length)),new Proxy(n,{defineProperty(o,c,l){(!("value"in l)||l.configurable===!1||l.enumerable===!1||l.writable===!1)&&xd();var f=t.get(c);return f===void 0?f=a(()=>{var u=Jt(l.value);return t.set(c,u),u}):zt(f,l.value,!0),!0},deleteProperty(o,c){var l=t.get(c);if(l===void 0){if(c in o){const f=a(()=>Jt(Ot));t.set(c,f),Es(r)}}else zt(l,Ot),Es(r);return!0},get(o,c,l){var p;if(c===Ms)return n;var f=t.get(c),u=c in o;if(f===void 0&&(!u||(p=Dr(o,c))!=null&&p.writable)&&(f=a(()=>{var _=zr(u?o[c]:Ot),v=Jt(_);return v}),t.set(c,f)),f!==void 0){var d=ie(f);return d===Ot?void 0:d}return Reflect.get(o,c,l)},getOwnPropertyDescriptor(o,c){var l=Reflect.getOwnPropertyDescriptor(o,c);if(l&&"value"in l){var f=t.get(c);f&&(l.value=ie(f))}else if(l===void 0){var u=t.get(c),d=u==null?void 0:u.v;if(u!==void 0&&d!==Ot)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return l},has(o,c){var d;if(c===Ms)return!0;var l=t.get(c),f=l!==void 0&&l.v!==Ot||Reflect.has(o,c);if(l!==void 0||ut!==null&&(!f||(d=Dr(o,c))!=null&&d.writable)){l===void 0&&(l=a(()=>{var p=f?zr(o[c]):Ot,_=Jt(p);return _}),t.set(c,l));var u=ie(l);if(u===Ot)return!1}return f},set(o,c,l,f){var M;var u=t.get(c),d=c in o;if(i&&c==="length")for(var p=l;p<u.v;p+=1){var _=t.get(p+"");_!==void 0?zt(_,Ot):p in o&&(_=a(()=>Jt(Ot)),t.set(p+"",_))}if(u===void 0)(!d||(M=Dr(o,c))!=null&&M.writable)&&(u=a(()=>Jt(void 0)),zt(u,zr(l)),t.set(c,u));else{d=u.v!==Ot;var v=a(()=>zr(l));zt(u,v)}var m=Reflect.getOwnPropertyDescriptor(o,c);if(m!=null&&m.set&&m.set.call(f,l),!d){if(i&&typeof c=="string"){var h=t.get("length"),y=Number(c);Number.isInteger(y)&&y>=h.v&&zt(h,y+1)}Es(r)}return!0},ownKeys(o){ie(r);var c=Reflect.ownKeys(o).filter(u=>{var d=t.get(u);return d===void 0||d.v!==Ot});for(var[l,f]of t)f.v!==Ot&&!(l in o)&&c.push(l);return c},setPrototypeOf(){Sd()}})}var Fc,Oc,Bc,zc;function Zd(){if(Fc===void 0){Fc=window,Oc=/Firefox/.test(navigator.userAgent);var n=Element.prototype,e=Node.prototype,t=Text.prototype;Bc=Dr(e,"firstChild").get,zc=Dr(e,"nextSibling").get,_c(n)&&(n.__click=void 0,n.__className=void 0,n.__attributes=null,n.__style=void 0,n.__e=void 0),_c(t)&&(t.__t=void 0)}}function Fi(n=""){return document.createTextNode(n)}function Oi(n){return Bc.call(n)}function ys(n){return zc.call(n)}function fe(n,e){return Oi(n)}function Vr(n,e=!1){{var t=Oi(n);return t instanceof Comment&&t.data===""?ys(t):t}}function nt(n,e=1,t=!1){let i=n;for(;e--;)i=ys(i);return i}function Kd(n){n.textContent=""}function Vc(){return!1}function Gc(n){var e=Je,t=ut;an(null),Pn(null);try{return n()}finally{an(e),Pn(t)}}function jd(n){ut===null&&(Je===null&&_d(),md()),Bi&&pd()}function Jd(n,e){var t=e.last;t===null?e.last=e.first=n:(t.next=n,n.prev=t,e.last=n)}function pi(n,e,t){var i=ut;i!==null&&(i.f&pn)!==0&&(n|=pn);var r={ctx:mn,deps:null,nodes:null,f:n|rn|Rn,first:null,fn:e,last:null,next:null,parent:i,b:i&&i.b,prev:null,teardown:null,wv:0,ac:null};if(t)try{Ts(r),r.f|=Ja}catch(o){throw sn(r),o}else e!==null&&hi(r);var s=r;if(t&&s.deps===null&&s.teardown===null&&s.nodes===null&&s.first===s.last&&(s.f&Ir)===0&&(s=s.first,(n&ui)!==0&&(n&Lr)!==0&&s!==null&&(s.f|=Lr)),s!==null&&(s.parent=i,i!==null&&Jd(s,i),Je!==null&&(Je.f&Ft)!==0&&(n&tr)===0)){var a=Je;(a.effects??(a.effects=[])).push(s)}return r}function oo(){return Je!==null&&!Gn}function Qd(n){const e=pi(ta,null,!1);return Ct(e,It),e.teardown=n,e}function Hc(n){jd();var e=ut.f,t=!Je&&(e&Bn)!==0&&(e&Ja)===0;if(t){var i=mn;(i.e??(i.e=[])).push(n)}else return kc(n)}function kc(n){return pi(ea|cd,n,!1)}function eh(n){Ii.ensure();const e=pi(tr|Ir,n,!0);return(t={})=>new Promise(i=>{t.outro?sr(e,()=>{sn(e),i(void 0)}):(sn(e),i(void 0))})}function th(n){return pi(ea,n,!1)}function nh(n){return pi(eo|Ir,n,!0)}function Wc(n,e=0){return pi(ta|e,n,!0)}function He(n,e=[],t=[],i=[]){kd(i,e,t,r=>{pi(ta,()=>n(...r.map(ie)),!0)})}function lo(n,e=0){var t=pi(ui|e,n,!0);return t}function Cn(n){return pi(Bn|Ir,n,!0)}function Xc(n){var e=n.teardown;if(e!==null){const t=Bi,i=Je;Jc(!0),an(null);try{e.call(null)}finally{Jc(t),an(i)}}}function qc(n,e=!1){var t=n.first;for(n.first=n.last=null;t!==null;){const r=t.ac;r!==null&&Gc(()=>{r.abort(Ur)});var i=t.next;(t.f&tr)!==0?t.parent=null:sn(t,e),t=i}}function ih(n){for(var e=n.first;e!==null;){var t=e.next;(e.f&Bn)===0&&sn(e),e=t}}function sn(n,e=!0){var t=!1;(e||(n.f&Sc)!==0)&&n.nodes!==null&&n.nodes.end!==null&&(Yc(n.nodes.start,n.nodes.end),t=!0),qc(n,e&&!t),sa(n,0),Ct(n,di);var i=n.nodes&&n.nodes.t;if(i!==null)for(const s of i)s.stop();Xc(n);var r=n.parent;r!==null&&r.first!==null&&$c(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes=n.ac=null}function Yc(n,e){for(;n!==null;){var t=n===e?null:ys(n);n.remove(),n=t}}function $c(n){var e=n.parent,t=n.prev,i=n.next;t!==null&&(t.next=i),i!==null&&(i.prev=t),e!==null&&(e.first===n&&(e.first=i),e.last===n&&(e.last=t))}function sr(n,e,t=!0){var i=[];Zc(n,i,!0);var r=()=>{t&&sn(n),e&&e()},s=i.length;if(s>0){var a=()=>--s||r();for(var o of i)o.out(a)}else r()}function Zc(n,e,t){if((n.f&pn)===0){n.f^=pn;var i=n.nodes&&n.nodes.t;if(i!==null)for(const o of i)(o.is_global||t)&&e.push(o);for(var r=n.first;r!==null;){var s=r.next,a=(r.f&Lr)!==0||(r.f&Bn)!==0&&(n.f&ui)!==0;Zc(r,e,a?t:!1),r=s}}}function co(n){Kc(n,!0)}function Kc(n,e){if((n.f&pn)!==0){n.f^=pn,(n.f&It)===0&&(Ct(n,rn),hi(n));for(var t=n.first;t!==null;){var i=t.next,r=(t.f&Lr)!==0||(t.f&Bn)!==0;Kc(t,r?e:!1),t=i}var s=n.nodes&&n.nodes.t;if(s!==null)for(const a of s)(a.is_global||e)&&a.in()}}function jc(n,e){if(n.nodes)for(var t=n.nodes.start,i=n.nodes.end;t!==null;){var r=t===i?null:ys(t);e.append(t),t=r}}let ra=!1,Bi=!1;function Jc(n){Bi=n}let Je=null,Gn=!1;function an(n){Je=n}let ut=null;function Pn(n){ut=n}let Dn=null;function Qc(n){Je!==null&&(Dn===null?Dn=[n]:Dn.push(n))}let on=null,vn=0,Ln=null;function rh(n){Ln=n}let eu=1,ar=0,or=ar;function tu(n){or=n}function nu(){return++eu}function bs(n){var e=n.f;if((e&rn)!==0)return!0;if(e&Ft&&(n.f&=~nr),(e&fi)!==0){for(var t=n.deps,i=t.length,r=0;r<i;r++){var s=t[r];if(bs(s)&&Ic(s),s.wv>n.wv)return!0}(e&Rn)!==0&&Bt===null&&Ct(n,It)}return!1}function iu(n,e,t=!0){var i=n.reactions;if(i!==null&&!(Dn!==null&&ci.call(Dn,n)))for(var r=0;r<i.length;r++){var s=i[r];(s.f&Ft)!==0?iu(s,e,!1):e===s&&(t?Ct(s,rn):(s.f&It)!==0&&Ct(s,fi),hi(s))}}function ru(n){var v;var e=on,t=vn,i=Ln,r=Je,s=Dn,a=mn,o=Gn,c=or,l=n.f;on=null,vn=0,Ln=null,Je=(l&(Bn|tr))===0?n:null,Dn=null,Nr(n.ctx),Gn=!1,or=++ar,n.ac!==null&&(Gc(()=>{n.ac.abort(Ur)}),n.ac=null);try{n.f|=Qa;var f=n.fn,u=f(),d=n.deps,p=ft==null?void 0:ft.is_fork;if(on!==null){var _;if(p||sa(n,vn),d!==null&&vn>0)for(d.length=vn+on.length,_=0;_<on.length;_++)d[vn+_]=on[_];else n.deps=d=on;if(oo()&&(n.f&Rn)!==0)for(_=vn;_<d.length;_++)((v=d[_]).reactions??(v.reactions=[])).push(n)}else!p&&d!==null&&vn<d.length&&(sa(n,vn),d.length=vn);if(yc()&&Ln!==null&&!Gn&&d!==null&&(n.f&(Ft|fi|rn))===0)for(_=0;_<Ln.length;_++)iu(Ln[_],n);if(r!==null&&r!==n){if(ar++,r.deps!==null)for(let m=0;m<t;m+=1)r.deps[m].rv=ar;if(e!==null)for(const m of e)m.rv=ar;Ln!==null&&(i===null?i=Ln:i.push(...Ln))}return(n.f&Li)!==0&&(n.f^=Li),u}catch(m){return bc(m)}finally{n.f^=Qa,on=e,vn=t,Ln=i,Je=r,Dn=s,Nr(a),Gn=o,or=c}}function sh(n,e){let t=e.reactions;if(t!==null){var i=Rt.call(t,n);if(i!==-1){var r=t.length-1;r===0?t=e.reactions=null:(t[i]=t[r],t.pop())}}if(t===null&&(e.f&Ft)!==0&&(on===null||!ci.call(on,e))){var s=e;(s.f&Rn)!==0&&(s.f^=Rn,s.f&=~nr),to(s),Lc(s),sa(s,0)}}function sa(n,e){var t=n.deps;if(t!==null)for(var i=e;i<t.length;i++)sh(n,t[i])}function Ts(n){var e=n.f;if((e&di)===0){Ct(n,It);var t=ut,i=ra;ut=n,ra=!0;try{(e&(ui|vc))!==0?ih(n):qc(n),Xc(n);var r=ru(n);n.teardown=typeof r=="function"?r:null,n.wv=eu;var s}finally{ra=i,ut=t}}}function ie(n){var e=n.f,t=(e&Ft)!==0;if(Je!==null&&!Gn){var i=ut!==null&&(ut.f&di)!==0;if(!i&&(Dn===null||!ci.call(Dn,n))){var r=Je.deps;if((Je.f&Qa)!==0)n.rv<ar&&(n.rv=ar,on===null&&r!==null&&r[vn]===n?vn++:on===null?on=[n]:on.push(n));else{(Je.deps??(Je.deps=[])).push(n);var s=n.reactions;s===null?n.reactions=[Je]:ci.call(s,Je)||s.push(Je)}}}if(Bi&&Ni.has(n))return Ni.get(n);if(t){var a=n;if(Bi){var o=a.v;return((a.f&It)===0&&a.reactions!==null||au(a))&&(o=so(a)),Ni.set(a,o),o}var c=(a.f&Rn)===0&&!Gn&&Je!==null&&(ra||(Je.f&Rn)!==0),l=a.deps===null;bs(a)&&(c&&(a.f|=Rn),Ic(a)),c&&!l&&su(a)}if(Bt!=null&&Bt.has(n))return Bt.get(n);if((n.f&Li)!==0)throw n.v;return n.v}function su(n){if(n.deps!==null){n.f|=Rn;for(const e of n.deps)(e.reactions??(e.reactions=[])).push(n),(e.f&Ft)!==0&&(e.f&Rn)===0&&su(e)}}function au(n){if(n.v===Ot)return!0;if(n.deps===null)return!1;for(const e of n.deps)if(Ni.has(e)||(e.f&Ft)!==0&&au(e))return!0;return!1}function aa(n){var e=Gn;try{return Gn=!0,n()}finally{Gn=e}}const ah=["touchstart","touchmove"];function oh(n){return ah.includes(n)}const ou=new Set,uo=new Set;function lh(n){for(var e=0;e<n.length;e++)ou.add(n[e]);for(var t of uo)t(n)}let lu=null;function oa(n){var m;var e=this,t=e.ownerDocument,i=n.type,r=((m=n.composedPath)==null?void 0:m.call(n))||[],s=r[0]||n.target;lu=n;var a=0,o=lu===n&&n.__root;if(o){var c=r.indexOf(o);if(c!==-1&&(e===document||e===window)){n.__root=e;return}var l=r.indexOf(e);if(l===-1)return;c<=l&&(a=c)}if(s=r[a]||n.target,s!==e){rd(n,"currentTarget",{configurable:!0,get(){return s||t}});var f=Je,u=ut;an(null),Pn(null);try{for(var d,p=[];s!==null;){var _=s.assignedSlot||s.parentNode||s.host||null;try{var v=s["__"+i];v!=null&&(!s.disabled||n.target===s)&&v.call(s,n)}catch(h){d?p.push(h):d=h}if(n.cancelBubble||_===e||_===null)break;s=_}if(d){for(let h of p)queueMicrotask(()=>{throw h});throw d}}finally{n.__root=e,delete n.currentTarget,an(f),Pn(u)}}}function cu(n){var e=document.createElement("template");return e.innerHTML=n.replaceAll("<!>","<!---->"),e.content}function la(n,e){var t=ut;t.nodes===null&&(t.nodes={start:n,end:e,a:null,t:null})}function Ge(n,e){var t=(e&Pd)!==0,i=(e&Dd)!==0,r,s=!n.startsWith("<!>");return()=>{r===void 0&&(r=cu(s?n:"<!>"+n),t||(r=Oi(r)));var a=i||Oc?document.importNode(r,!0):r.cloneNode(!0);if(t){var o=Oi(a),c=a.lastChild;la(o,c)}else la(a,a);return a}}function fo(){var n=document.createDocumentFragment(),e=document.createComment(""),t=Fi();return n.append(e,t),la(e,t),n}function Oe(n,e){n!==null&&n.before(e)}function Wt(n,e){var t=e==null?"":typeof e=="object"?e+"":e;t!==(n.__t??(n.__t=n.nodeValue))&&(n.__t=t,n.nodeValue=t+"")}function ch(n,e){return uh(n,e)}const Gr=new Map;function uh(n,{target:e,anchor:t,props:i={},events:r,context:s,intro:a=!0}){Zd();var o=new Set,c=u=>{for(var d=0;d<u.length;d++){var p=u[d];if(!o.has(p)){o.add(p);var _=oh(p);e.addEventListener(p,oa,{passive:_});var v=Gr.get(p);v===void 0?(document.addEventListener(p,oa,{passive:_}),Gr.set(p,1)):Gr.set(p,v+1)}}};c(Qs(ou)),uo.add(c);var l=void 0,f=eh(()=>{var u=t??e.appendChild(Fi());return Gd(u,{pending:()=>{}},d=>{if(s){_n({});var p=mn;p.c=s}r&&(i.$$events=r),l=n(d,i)||{},s&&gn()}),()=>{var _;for(var d of o){e.removeEventListener(d,oa);var p=Gr.get(d);--p===0?(document.removeEventListener(d,oa),Gr.delete(d)):Gr.set(d,p)}uo.delete(c),u!==t&&((_=u.parentNode)==null||_.removeChild(u))}});return ho.set(l,f),l}let ho=new WeakMap;function fh(n,e){const t=ho.get(n);return t?(ho.delete(n),t(e)):Promise.resolve()}class dh{constructor(e,t=!0){On(this,"anchor");tt(this,Yn,new Map);tt(this,li,new Map);tt(this,Tn,new Map);tt(this,wr,new Set);tt(this,Ks,!0);tt(this,js,()=>{var e=ft;if(Z(this,Yn).has(e)){var t=Z(this,Yn).get(e),i=Z(this,li).get(t);if(i)co(i),Z(this,wr).delete(t);else{var r=Z(this,Tn).get(t);r&&(Z(this,li).set(t,r.effect),Z(this,Tn).delete(t),r.fragment.lastChild.remove(),this.anchor.before(r.fragment),i=r.effect)}for(const[s,a]of Z(this,Yn)){if(Z(this,Yn).delete(s),s===e)break;const o=Z(this,Tn).get(a);o&&(sn(o.effect),Z(this,Tn).delete(a))}for(const[s,a]of Z(this,li)){if(s===t||Z(this,wr).has(s))continue;const o=()=>{if(Array.from(Z(this,Yn).values()).includes(s)){var l=document.createDocumentFragment();jc(a,l),l.append(Fi()),Z(this,Tn).set(s,{effect:a,fragment:l})}else sn(a);Z(this,wr).delete(s),Z(this,li).delete(s)};Z(this,Ks)||!i?(Z(this,wr).add(s),sr(a,o,!1)):o()}}});tt(this,qa,e=>{Z(this,Yn).delete(e);const t=Array.from(Z(this,Yn).values());for(const[i,r]of Z(this,Tn))t.includes(i)||(sn(r.effect),Z(this,Tn).delete(i))});this.anchor=e,$e(this,Ks,t)}ensure(e,t){var i=ft,r=Vc();if(t&&!Z(this,li).has(e)&&!Z(this,Tn).has(e))if(r){var s=document.createDocumentFragment(),a=Fi();s.append(a),Z(this,Tn).set(e,{effect:Cn(()=>t(a)),fragment:s})}else Z(this,li).set(e,Cn(()=>t(this.anchor)));if(Z(this,Yn).set(i,e),r){for(const[o,c]of Z(this,li))o===e?i.skipped_effects.delete(c):i.skipped_effects.add(c);for(const[o,c]of Z(this,Tn))o===e?i.skipped_effects.delete(c.effect):i.skipped_effects.add(c.effect);i.oncommit(Z(this,js)),i.ondiscard(Z(this,qa))}else Z(this,js).call(this)}}Yn=new WeakMap,li=new WeakMap,Tn=new WeakMap,wr=new WeakMap,Ks=new WeakMap,js=new WeakMap,qa=new WeakMap;function Vt(n,e,t=!1){var i=new dh(n),r=t?Lr:0;function s(a,o){i.ensure(a,o)}lo(()=>{var a=!1;e((o,c=!0)=>{a=!0,s(c,o)}),a||s(!1,null)},r)}function zi(n,e){return e}function hh(n,e,t){for(var i=[],r=e.length,s,a=e.length,o=0;o<r;o++){let u=e[o];sr(u,()=>{if(s){if(s.pending.delete(u),s.done.add(u),s.pending.size===0){var d=n.outrogroups;po(Qs(s.done)),d.delete(s),d.size===0&&(n.outrogroups=null)}}else a-=1},!1)}if(a===0){var c=i.length===0&&t!==null;if(c){var l=t,f=l.parentNode;Kd(f),f.append(l),n.items.clear()}po(e,!c)}else s={pending:new Set(e),done:new Set},(n.outrogroups??(n.outrogroups=new Set)).add(s)}function po(n,e=!0){for(var t=0;t<n.length;t++)sn(n[t],e)}var uu;function Vi(n,e,t,i,r,s=null){var a=n,o=new Map;{var c=n;a=c.appendChild(Fi())}var l=null,f=Dc(()=>{var m=t();return St(m)?m:m==null?[]:Qs(m)}),u,d=!0;function p(){v.fallback=l,ph(v,u,a,e,i),l!==null&&(u.length===0?(l.f&Di)===0?co(l):(l.f^=Di,ws(l,null,a)):sr(l,()=>{l=null}))}var _=lo(()=>{u=ie(f);for(var m=u.length,h=new Set,y=ft,M=Vc(),E=0;E<m;E+=1){var A=u[E],w=i(A,E),R=d?null:o.get(w);R?(R.v&&Br(R.v,A),R.i&&Br(R.i,E),M&&y.skipped_effects.delete(R.e)):(R=mh(o,d?a:uu??(uu=Fi()),A,w,E,r,e,t),d||(R.e.f|=Di),o.set(w,R)),h.add(w)}if(m===0&&s&&!l&&(d?l=Cn(()=>s(a)):(l=Cn(()=>s(uu??(uu=Fi()))),l.f|=Di)),!d)if(M){for(const[N,x]of o)h.has(N)||y.skipped_effects.add(x.e);y.oncommit(p),y.ondiscard(()=>{})}else p();ie(f)}),v={effect:_,items:o,outrogroups:null,fallback:l};d=!1}function As(n){for(;n!==null&&(n.f&Bn)===0;)n=n.next;return n}function ph(n,e,t,i,r){var N;var s=e.length,a=n.items,o=As(n.effect.first),c,l=null,f=[],u=[],d,p,_,v;for(v=0;v<s;v+=1){if(d=e[v],p=r(d,v),_=a.get(p).e,n.outrogroups!==null)for(const x of n.outrogroups)x.pending.delete(_),x.done.delete(_);if((_.f&Di)!==0)if(_.f^=Di,_===o)ws(_,null,t);else{var m=l?l.next:o;_===n.effect.last&&(n.effect.last=_.prev),_.prev&&(_.prev.next=_.next),_.next&&(_.next.prev=_.prev),Gi(n,l,_),Gi(n,_,m),ws(_,m,t),l=_,f=[],u=[],o=As(l.next);continue}if((_.f&pn)!==0&&co(_),_!==o){if(c!==void 0&&c.has(_)){if(f.length<u.length){var h=u[0],y;l=h.prev;var M=f[0],E=f[f.length-1];for(y=0;y<f.length;y+=1)ws(f[y],h,t);for(y=0;y<u.length;y+=1)c.delete(u[y]);Gi(n,M.prev,E.next),Gi(n,l,M),Gi(n,E,h),o=h,l=E,v-=1,f=[],u=[]}else c.delete(_),ws(_,o,t),Gi(n,_.prev,_.next),Gi(n,_,l===null?n.effect.first:l.next),Gi(n,l,_),l=_;continue}for(f=[],u=[];o!==null&&o!==_;)(c??(c=new Set)).add(o),u.push(o),o=As(o.next);if(o===null)continue}(_.f&Di)===0&&f.push(_),l=_,o=As(_.next)}if(n.outrogroups!==null){for(const x of n.outrogroups)x.pending.size===0&&(po(Qs(x.done)),(N=n.outrogroups)==null||N.delete(x));n.outrogroups.size===0&&(n.outrogroups=null)}if(o!==null||c!==void 0){var A=[];if(c!==void 0)for(_ of c)(_.f&pn)===0&&A.push(_);for(;o!==null;)(o.f&pn)===0&&o!==n.fallback&&A.push(o),o=As(o.next);var w=A.length;if(w>0){var R=s===0?t:null;hh(n,A,R)}}}function mh(n,e,t,i,r,s,a,o){var c=(a&yd)!==0?(a&Td)===0?Yd(t,!1,!1):rr(t):null,l=(a&bd)!==0?rr(r):null;return{v:c,i:l,e:Cn(()=>(s(e,c??t,l??r,o),()=>{n.delete(i)}))}}function ws(n,e,t){if(n.nodes)for(var i=n.nodes.start,r=n.nodes.end,s=e&&(e.f&Di)===0?e.nodes.start:t;i!==null;){var a=ys(i);if(s.before(i),i===r)return;i=a}}function Gi(n,e,t){e===null?n.effect.first=t:e.next=t,t===null?n.effect.last=e:t.prev=e}function $n(n,e,t=!1,i=!1,r=!1){var s=n,a="";He(()=>{var o=ut;if(a!==(a=e()??"")&&(o.nodes!==null&&(Yc(o.nodes.start,o.nodes.end),o.nodes=null),a!=="")){var c=a+"";t?c=`<svg>${c}</svg>`:i&&(c=`<math>${c}</math>`);var l=cu(c);if((t||i)&&(l=Oi(l)),la(Oi(l),l.lastChild),t||i)for(;Oi(l);)s.before(Oi(l));else s.before(l)}})}const fu=[...` 	
\r\f \v\uFEFF`];function _h(n,e,t){var i=n==null?"":""+n;if(e&&(i=i?i+" "+e:e),t){for(var r in t)if(t[r])i=i?i+" "+r:r;else if(i.length)for(var s=r.length,a=0;(a=i.indexOf(r,a))>=0;){var o=a+s;(a===0||fu.includes(i[a-1]))&&(o===i.length||fu.includes(i[o]))?i=(a===0?"":i.substring(0,a))+i.substring(o+1):a=o}}return i===""?null:i}function gh(n,e){return n==null?null:String(n)}function Hr(n,e,t,i,r,s){var a=n.__className;if(a!==t||a===void 0){var o=_h(t,i,s);o==null?n.removeAttribute("class"):n.className=o,n.__className=t}else if(s&&r!==s)for(var c in s){var l=!!s[c];(r==null||l!==!!r[c])&&n.classList.toggle(c,l)}return s}function Rs(n,e,t,i){var r=n.__style;if(r!==e){var s=gh(e);s==null?n.removeAttribute("style"):n.style.cssText=s,n.__style=e}return i}const vh=Symbol("is custom element"),xh=Symbol("is html");function Gt(n,e,t,i){var r=Sh(n);r[e]!==(r[e]=t)&&(e==="loading"&&(n[fd]=t),t==null?n.removeAttribute(e):typeof t!="string"&&du(n).includes(e)?n[e]=t:n.setAttribute(e,t))}function Qt(n,e,t){var i=Je,r=ut;an(null),Pn(null);try{e!=="style"&&(mo.has(n.getAttribute("is")||n.nodeName)||!customElements||customElements.get(n.getAttribute("is")||n.tagName.toLowerCase())?du(n).includes(e):t&&typeof t=="object")?n[e]=t:Gt(n,e,t==null?t:String(t))}finally{an(i),Pn(r)}}function Sh(n){return n.__attributes??(n.__attributes={[vh]:n.nodeName.includes("-"),[xh]:n.namespaceURI===Ld})}var mo=new Map;function du(n){var e=n.getAttribute("is")||n.nodeName,t=mo.get(e);if(t)return t;mo.set(e,t=[]);for(var i,r=n,s=Element.prototype;s!==r;){i=sd(r);for(var a in i)i[a].set&&t.push(a);r=mc(r)}return t}function hu(n,e){return n===e||(n==null?void 0:n[Ms])===e}function lr(n={},e,t,i){return th(()=>{var r,s;return Wc(()=>{r=s,s=[],aa(()=>{n!==t(...s)&&(e(n,...s),r&&hu(t(...r),n)&&e(null,...r))})}),()=>{ir(()=>{s&&hu(t(...s),n)&&e(null,...s)})}}),n}let ca=!1;function Mh(n){var e=ca;try{return ca=!1,[n(),ca]}finally{ca=e}}function qe(n,e,t,i){var y;var r=(t&Rd)!==0,s=(t&Cd)!==0,a=i,o=!0,c=()=>(o&&(o=!1,a=s?aa(i):i),a),l;if(r){var f=Ms in n||ud in n;l=((y=Dr(n,e))==null?void 0:y.set)??(f&&e in n?M=>n[e]=M:void 0)}var u,d=!1;r?[u,d]=Mh(()=>n[e]):u=n[e],u===void 0&&i!==void 0&&(u=c(),l&&(vd(),l(u)));var p;if(p=()=>{var M=n[e];return M===void 0?c():(o=!0,M)},(t&wd)===0)return p;if(l){var _=n.$$legacy;return(function(M,E){return arguments.length>0?((!E||_||d)&&l(E?p():M),M):p()})}var v=!1,m=((t&Ad)!==0?ia:Dc)(()=>(v=!1,p()));r&&ie(m);var h=ut;return(function(M,E){if(arguments.length>0){const A=E?ie(m):r?zr(M):M;return zt(m,A),v=!0,a!==void 0&&(a=A),M}return Bi&&v||(h.f&di)!==0?m.v:ie(m)})}function cr(n){mn===null&&dd(),Hc(()=>{const e=aa(n);if(typeof e=="function")return e})}function Ht(n,e,t=[]){class i extends HTMLElement{constructor(){super(...arguments);On(this,"_component",null)}connectedCallback(){if(this._component)return;this.innerHTML="";let a={};const o=this.getAttribute("id");if(o){const c=document.querySelector(`script[data-for="${o}"]`);if(c)try{a=JSON.parse(c.textContent||"{}"),c.remove()}catch(l){console.warn(`Failed to parse JSON props for #${o}:`,l)}}if(Object.keys(a).length===0)for(const c of t){const l=this.getAttribute(c);if(l!==null)try{a[c]=JSON.parse(l)}catch{a[c]=l}}this._component=ch(e,{target:this,props:a})}disconnectedCallback(){this._component&&(fh(this._component),this._component=null)}}customElements.define(n,i)}const Eh="5";typeof window<"u"&&((Zf=window.__svelte??(window.__svelte={})).v??(Zf.v=new Set)).add(Eh);var yh=Ge('<a class="c-header_link svelte-i67nal"><h3 class="svelte-i67nal"> </h3></a>'),bh=Ge('<header data-nav-element="navbar" class="c-header_navbar svelte-i67nal"><div class="c-header_vignette svelte-i67nal"></div> <div class="c-header_inner svelte-i67nal"><button data-nav-element="overlay" aria-hidden="true" class="c-header_overlay svelte-i67nal"></button> <a aria-label="Go Back Home" class="c-header_logo svelte-i67nal">Austin Joseph</a> <ul role="list" class="c-header_drawer svelte-i67nal"><div class="c-header_edge svelte-i67nal"><div class="c-header_edge-shine svelte-i67nal"></div></div> <li class="c-header_links svelte-i67nal"></li></ul> <button data-nav-element="menu" class="c-header_menu svelte-i67nal"><div class="c-header_marker svelte-i67nal"></div> <div class="svelte-i67nal">Menu</div></button></div></header>');function Th(n,e){_n(e,!0);let t=qe(e,"rootpath",3,"/"),i=qe(e,"links",19,()=>[]),r=Jt("closed");function s(){zt(r,ie(r)==="open"?"closed":"open",!0),document.body.style.overflow=ie(r)==="open"?"hidden":"",window.lenis&&(ie(r)==="open"?window.lenis.stop():window.lenis.start())}cr(()=>{function p(){zt(r,"closed"),document.body.style.overflow=""}return window.addEventListener("barba-close-nav",p),()=>window.removeEventListener("barba-close-nav",p)});var a=bh(),o=nt(fe(a),2),c=fe(o);c.__click=s;var l=nt(c,2),f=nt(l,2),u=nt(fe(f),2);Vi(u,21,i,zi,(p,_)=>{var v=yh(),m=fe(v),h=fe(m);He(()=>{Gt(v,"href",ie(_).href),Wt(h,ie(_).label)}),Oe(p,v)});var d=nt(f,2);d.__click=s,He(()=>{Gt(a,"data-nav-state",ie(r)),Gt(l,"href",t())}),Oe(n,a),gn()}lh(["click"]);var Ah=Ge('<img width="24" height="24"/>'),wh=Ge("<span> </span>"),Rh=Ge('<li><a class="c-footer_link svelte-1hhfvj" target="_blank" rel="noopener noreferrer"><!></a></li>'),Ch=Ge('<footer><div class="c-footer_vignette svelte-1hhfvj"></div> <div class="c-footer_component svelte-1hhfvj"><div class="c-footer_inner svelte-1hhfvj"><div class="c-footer_row copyright svelte-1hhfvj"><div class="u-text-secondary svelte-1hhfvj"><div class="text-sm svelte-1hhfvj">© <span> </span> Austin Joseph.</div></div></div> <div class="c-footer_location svelte-1hhfvj"><span class="c-footer_location-label svelte-1hhfvj">London, England</span> <span class="c-footer_location-time svelte-1hhfvj"> </span></div> <ul role="list" class="c-footer_row svelte-1hhfvj"></ul></div></div></footer>');function Ph(n,e){_n(e,!0);let t=qe(e,"fixed",3,!1),i=qe(e,"links",19,()=>[]);const r=new Date().getFullYear();let s=Jt("");function a(){zt(s,new Date().toLocaleTimeString("en-GB",{timeZone:"Europe/London",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0}).toUpperCase(),!0)}Hc(()=>{a();const E=setInterval(a,1e3);return()=>clearInterval(E)});var o=Ch();let c;var l=nt(fe(o),2),f=fe(l),u=fe(f),d=fe(u),p=fe(d),_=nt(fe(p)),v=fe(_),m=nt(u,2),h=nt(fe(m),2),y=fe(h),M=nt(m,2);Vi(M,21,i,zi,(E,A)=>{var w=Rh(),R=fe(w),N=fe(R);{var x=P=>{var V=Ah();He(()=>{Gt(V,"src",ie(A).icon),Gt(V,"alt",ie(A).label)}),Oe(P,V)},b=P=>{var V=wh(),I=fe(V);He(()=>Wt(I,ie(A).label)),Oe(P,V)};Vt(N,P=>{ie(A).icon?P(x):P(b,!1)})}He(()=>{Gt(R,"href",ie(A).href),Gt(R,"title",ie(A).label)}),Oe(E,w)}),He(()=>{c=Hr(o,1,"c-footer svelte-1hhfvj",null,c,{abs:t()}),Wt(v,r),Wt(y,`[${ie(s)??""}]`)}),Oe(n,o),gn()}var Dh=Ge('<h4 class="svelte-l43pdu"><!></h4>'),Lh=Ge('<div class="preloader svelte-l43pdu"><div class="preloader-canvas svelte-l43pdu"><c-drum></c-drum></div> <div class="preloader-footer svelte-l43pdu"><!> <div class="progress-row svelte-l43pdu"><div class="progress-bar svelte-l43pdu"><div class="progress-thumb svelte-l43pdu"></div></div> <p class="progress-pct svelte-l43pdu"> </p></div></div></div>',2);function Ih(n,e){_n(e,!0);let t=qe(e,"title",3,""),i=qe(e,"images",19,()=>[]),r=Jt(void 0),s=Jt(void 0),a=Jt(0);cr(()=>{const y=window.gsap;if(!y)return;const M=5.16,E={value:0},A=()=>{zt(a,E.value,!0)},w=y.timeline();return w.to(E,{value:12,duration:M*.15,ease:"power2.inOut",onUpdate:A}),w.to(E,{value:60,duration:M*.25,ease:"power2.inOut",onUpdate:A}),w.to(E,{value:84,duration:M*.3,ease:"power2.inOut",onUpdate:A}),w.to(E,{value:100,duration:M*.25,ease:"power2.inOut",onUpdate:A}),w.to(ie(s),{opacity:0,duration:.25,ease:"power2.out",delay:.15}),w.to(ie(r),{opacity:0,duration:.3,ease:"power2.out",onStart:()=>{window.dispatchEvent(new CustomEvent("preloader-done"))},onComplete:()=>{var N;const R=(N=ie(r))==null?void 0:N.closest("c-preloader");R&&R.remove()}}),()=>{w.kill()}});var o=Lh(),c=fe(o),l=fe(c);He(()=>Qt(l,"images",JSON.stringify(i())));var f=nt(c,2),u=fe(f);{var d=y=>{var M=Dh(),E=fe(M);$n(E,t),Oe(y,M)};Vt(u,y=>{t()&&y(d)})}var p=nt(u,2),_=fe(p),v=fe(_),m=nt(_,2),h=fe(m);lr(f,y=>zt(s,y),()=>ie(s)),lr(o,y=>zt(r,y),()=>ie(r)),He(y=>{Rs(v,`width: ${ie(a)??""}%`),Wt(h,`${y??""}%`)},[()=>Math.round(ie(a))]),Oe(n,o),gn()}var Uh=Ge('<a class="slot-item svelte-bahvkp" data-slot-item=""> </a>'),Nh=Ge('<div class="slot svelte-bahvkp"><div class="slot-marker svelte-bahvkp"><div class="slot-marker-pip svelte-bahvkp"></div></div> <div class="slot-window svelte-bahvkp"><div class="slot-inner svelte-bahvkp" data-slot-inner=""></div></div></div>'),Fh=Ge('<main class="main svelte-bahvkp"><section class="section-hr svelte-bahvkp"><div class="container-xl svelte-bahvkp"><div class="inner svelte-bahvkp" data-canvas-map=""><div class="wrap svelte-bahvkp"><div class="text svelte-bahvkp"><!> <div class="heading svelte-bahvkp"><div class="eyebrow svelte-bahvkp"><div class="marker svelte-bahvkp"></div> <div class="eyebrow-text svelte-bahvkp"> </div></div> <h1 class="svelte-bahvkp"><!></h1> <c-button></c-button></div></div></div> <div class="track svelte-bahvkp"><c-reel></c-reel> <!></div></div></div></section></main>',2);function Oh(n,e){_n(e,!0);let t=qe(e,"eyebrow",3,"Available for freelance work"),i=qe(e,"title",3,""),r=qe(e,"buttonlabel",3,"Get in touch"),s=qe(e,"buttonhref",3,"#"),a=qe(e,"projects",19,()=>[]),o,c;const l="indexwheel-"+Math.random().toString(36).slice(2,8),f=32,u=f,d=.35,p=Ui(()=>a().length),_=Ui(()=>Array.from({length:3},()=>a()).flat());let v=-1,m=0;cr(()=>{if(ie(p)===0)return;c=o.closest(".section-hr");const se=c.querySelector("[data-slot-inner]"),ae=c.querySelectorAll("[data-slot-item]");if(!se||!ae.length)return;m=ie(p);function ce(Be){return-Be*f+u}gsap.set(se,{y:ce(m)}),Ce(m);function Ce(Be){ae.forEach((k,Q)=>{const ee=Q-Be;if(Math.abs(ee)>3){gsap.set(k,{opacity:0});return}let ge=0;ee===-1?ge=.2:ee===0?ge=1:ee===1?ge=.4:ee===2?ge=.15:ee===3&&(ge=.05),gsap.to(k,{opacity:ge,duration:d,ease:"power2.out",overwrite:!0})})}function we(){const Be=(m%ie(p)+ie(p))%ie(p),k=ie(p)+Be;m!==k&&(gsap.killTweensOf(se),gsap.set(se,{y:ce(k)}),m=k)}function ke(Be){const k=Be.detail,Q=k==null?void 0:k.index;if(Q==null||ie(p)===0)return;if(v===-1){v=Q,m=ie(p)+Q,gsap.set(se,{y:ce(m)}),Ce(m);return}let ee=Q-v;ee>ie(p)/2&&(ee-=ie(p)),ee<-ie(p)/2&&(ee+=ie(p)),v=Q,(m+ee<0||m+ee>=ie(p)*3)&&we(),m+=ee,gsap.to(se,{y:ce(m),duration:d,ease:"power2.out",overwrite:!0}),Ce(m)}return o==null||o.addEventListener("activecard",ke),()=>{o==null||o.removeEventListener("activecard",ke),gsap.killTweensOf(se),gsap.killTweensOf(ae)}});var h=Fh(),y=fe(h),M=fe(y),E=fe(M),A=fe(E),w=fe(A),R=fe(w);{var N=se=>{var ae=Nh(),ce=fe(ae);Rs(ce,"height: 32px; margin-top: 32px");var Ce=nt(ce,2),we=fe(Ce);Vi(we,21,()=>ie(_),zi,(ke,Be)=>{var k=Uh();Rs(k,"height: 32px");var Q=fe(k);He(()=>{Gt(k,"href",ie(Be).url),Wt(Q,ie(Be).title)}),Oe(ke,k)}),Oe(se,ae)};Vt(R,se=>{a().length&&se(N)})}var x=nt(R,2),b=fe(x),P=nt(fe(b),2),V=fe(P),I=nt(b,2),H=fe(I);$n(H,i);var q=nt(I,2);He(()=>Qt(q,"label",r())),He(()=>Qt(q,"href",s())),Qt(q,"active",!0);var F=nt(A,2),B=fe(F);He(()=>Qt(B,"id",l));var J=nt(B,2);$n(J,()=>`<script type="application/json" data-for="${l}">${JSON.stringify({projects:a()}).replace(/<\//g,"<\\/")}<\/script>`),lr(F,se=>o=se,()=>o),He(()=>Wt(V,t())),Oe(n,h),gn()}var Bh=Ge("<c-helix></c-helix> <!>",3),zh=Ge("<b-header></b-header> <!>",3),Vh=Ge("<b-text></b-text> <!>",3),Gh=Ge('<section class="section ab svelte-1ijkaem"><div class="container-xl py-lg"><div class="l-inner svelte-1ijkaem"><div class="col-img svelte-1ijkaem"><!></div> <div class="col-body svelte-1ijkaem"></div></div></div></section>');function Hh(n,e){_n(e,!0);let t=qe(e,"images",19,()=>[]),i=qe(e,"items",19,()=>[]);var r=Gh(),s=fe(r),a=fe(s),o=fe(a),c=fe(o);{var l=u=>{const d=Ui(()=>`ab-helix-${Math.random().toString(36).slice(2,8)}`);var p=Bh(),_=Vr(p);He(()=>Qt(_,"id",ie(d)));var v=nt(_,2);$n(v,()=>`<script type="application/json" data-for="${ie(d)}">${JSON.stringify({images:t()})}<\/script>`),Oe(u,p)};Vt(c,u=>{t().length&&u(l)})}var f=nt(o,2);Vi(f,21,i,zi,(u,d,p)=>{const _=Ui(()=>`ab-${ie(d).type}-${p}`);var v=fo(),m=Vr(v);{var h=M=>{var E=zh(),A=Vr(E);He(()=>Qt(A,"id",ie(_)));var w=nt(A,2);$n(w,()=>`<script type="application/json" data-for="${ie(_)}">${JSON.stringify({title:ie(d).title,description:ie(d).description,layout:ie(d).layout})}<\/script>`),Oe(M,E)},y=M=>{var E=fo(),A=Vr(E);{var w=R=>{var N=Vh(),x=Vr(N);He(()=>Qt(x,"id",ie(_)));var b=nt(x,2);$n(b,()=>`<script type="application/json" data-for="${ie(_)}">${JSON.stringify({columns:ie(d).columns,items:ie(d).items})}<\/script>`),Oe(R,N)};Vt(A,R=>{ie(d).type==="b-text"&&R(w)},!0)}Oe(M,E)};Vt(m,M=>{ie(d).type==="b-header"?M(h):M(y,!1)})}Oe(u,v)}),Oe(n,r),gn()}var kh=Ge('<div class="s-404_message svelte-n2mvd"><p class="svelte-n2mvd"> </p></div>'),Wh=Ge('<div class="s-404_section svelte-n2mvd"><div class="s-404_container svelte-n2mvd"><div class="s-404_inner svelte-n2mvd"><div class="s-404_heading svelte-n2mvd"><div class="s-404_title svelte-n2mvd"><h1 class="svelte-n2mvd"> </h1></div> <!></div> <c-button></c-button></div></div></div>',2);function Xh(n,e){let t=qe(e,"title",3,"404"),i=qe(e,"message",3,""),r=qe(e,"buttonlabel",3,"Go back Home"),s=qe(e,"buttonhref",3,"/");var a=Wh(),o=fe(a),c=fe(o),l=fe(c),f=fe(l),u=fe(f),d=fe(u),p=nt(f,2);{var _=m=>{var h=kh(),y=fe(h),M=fe(y);He(()=>Wt(M,i())),Oe(m,h)};Vt(p,m=>{i()&&m(_)})}var v=nt(l,2);He(()=>Qt(v,"href",s())),He(()=>Qt(v,"label",r())),Qt(v,"active","true"),He(()=>Wt(d,t())),Oe(n,a)}var qh=Ge('<div><div class="c-button_motion svelte-er4ugn"><div class="c-button_glow svelte-er4ugn"></div> <div class="c-button_mask svelte-er4ugn"><div class="c-button_cone svelte-er4ugn"></div></div></div> <div class="c-button_orb svelte-er4ugn"><div class="c-button_border svelte-er4ugn"></div></div> <a class="c-button_wrapper svelte-er4ugn"><div class="c-button_label svelte-er4ugn"> </div></a></div>');function Yh(n,e){let t=qe(e,"href",3,"#"),i=qe(e,"label",3,"Button"),r=qe(e,"active",3,!1);var s=qh(),a=nt(fe(s),4),o=fe(a),c=fe(o);He(()=>{Hr(s,1,`c-button ${r()?"c-button_active":""}`,"svelte-er4ugn"),Gt(a,"href",t()),Wt(c,i())}),Oe(n,s)}var $h=Ge('<img alt="" loading="lazy" class="svelte-ag87v9"/>'),Zh=Ge('<img alt="" loading="lazy" class="svelte-ag87v9"/>'),Kh=Ge('<a class="c-indexcard svelte-ag87v9"><div class="c-indexcard_overlay svelte-ag87v9"><!></div> <div class="c-indexcard_bg svelte-ag87v9"><!></div> <div class="c-indexcard_text svelte-ag87v9"><div class="c-indexcard_heading svelte-ag87v9"><h4> </h4></div></div></a>');function jh(n,e){let t=qe(e,"href",3,"#"),i=qe(e,"title",3,""),r=qe(e,"backgroundimage",3,""),s=qe(e,"overlayimage",3,"");var a=Kh(),o=fe(a),c=fe(o);{var l=h=>{var y=$h();He(()=>Gt(y,"src",s())),Oe(h,y)};Vt(c,h=>{s()&&h(l)})}var f=nt(o,2),u=fe(f);{var d=h=>{var y=Zh();He(()=>Gt(y,"src",r())),Oe(h,y)};Vt(u,h=>{r()&&h(d)})}var p=nt(f,2),_=fe(p),v=fe(_),m=fe(v);He(()=>{Gt(a,"href",t()),Wt(m,i())}),Oe(n,a)}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _o="182",Jh=0,pu=1,Qh=2,ua=1,ep=2,Cs=3,Hi=0,ln=1,xn=2,mi=0,kr=1,mu=2,_u=3,gu=4,tp=5,ur=100,np=101,ip=102,rp=103,sp=104,ap=200,op=201,lp=202,cp=203,go=204,vo=205,up=206,fp=207,dp=208,hp=209,pp=210,mp=211,_p=212,gp=213,vp=214,xo=0,So=1,Mo=2,Wr=3,Eo=4,yo=5,bo=6,To=7,vu=0,xp=1,Sp=2,cn=0,xu=1,Su=2,Mu=3,Eu=4,yu=5,bu=6,Tu=7,Au=300,fr=301,Xr=302,Ao=303,wo=304,fa=306,Ro=1e3,_i=1001,Co=1002,kt=1003,Mp=1004,da=1005,Et=1006,Po=1007,dr=1008,Sn=1009,wu=1010,Ru=1011,Ps=1012,Do=1013,Zn=1014,Kn=1015,gi=1016,Lo=1017,Io=1018,Ds=1020,Cu=35902,Pu=35899,Du=1021,Lu=1022,Hn=1023,vi=1026,hr=1027,Iu=1028,Uo=1029,qr=1030,No=1031,Fo=1033,ha=33776,pa=33777,ma=33778,_a=33779,Oo=35840,Bo=35841,zo=35842,Vo=35843,Go=36196,Ho=37492,ko=37496,Wo=37488,Xo=37489,qo=37490,Yo=37491,$o=37808,Zo=37809,Ko=37810,jo=37811,Jo=37812,Qo=37813,el=37814,tl=37815,nl=37816,il=37817,rl=37818,sl=37819,al=37820,ol=37821,ll=36492,cl=36494,ul=36495,fl=36283,dl=36284,hl=36285,pl=36286,Ep=3200,Uu=0,yp=1,ki="",Xt="srgb",Yr="srgb-linear",ga="linear",dt="srgb",$r=7680,Nu=519,bp=512,Tp=513,Ap=514,ml=515,wp=516,Rp=517,_l=518,Cp=519,Fu=35044,Ou="300 es",jn=2e3,va=2001;function Bu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ls(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Pp(){const n=Ls("canvas");return n.style.display="block",n}const zu={};function Vu(...n){const e="THREE."+n.shift();console.log(e,...n)}function Ve(...n){const e="THREE."+n.shift();console.warn(e,...n)}function st(...n){const e="THREE."+n.shift();console.error(e,...n)}function Is(...n){const e=n.join(" ");e in zu||(zu[e]=!0,Ve(...n))}function Dp(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}class Zr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gl=Math.PI/180,vl=180/Math.PI;function Us(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]).toLowerCase()}function it(n,e,t){return Math.max(e,Math.min(t,n))}function Lp(n,e){return(n%e+e)%e}function xl(n,e,t){return(1-t)*n+t*e}function Ns(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function un(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ze{constructor(e=0,t=0){Ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fs{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],f=i[r+2],u=i[r+3],d=s[a+0],p=s[a+1],_=s[a+2],v=s[a+3];if(o<=0){e[t+0]=c,e[t+1]=l,e[t+2]=f,e[t+3]=u;return}if(o>=1){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=v;return}if(u!==v||c!==d||l!==p||f!==_){let m=c*d+l*p+f*_+u*v;m<0&&(d=-d,p=-p,_=-_,v=-v,m=-m);let h=1-o;if(m<.9995){const y=Math.acos(m),M=Math.sin(y);h=Math.sin(h*y)/M,o=Math.sin(o*y)/M,c=c*h+d*o,l=l*h+p*o,f=f*h+_*o,u=u*h+v*o}else{c=c*h+d*o,l=l*h+p*o,f=f*h+_*o,u=u*h+v*o;const y=1/Math.sqrt(c*c+l*l+f*f+u*u);c*=y,l*=y,f*=y,u*=y}}e[t]=c,e[t+1]=l,e[t+2]=f,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],f=i[r+3],u=s[a],d=s[a+1],p=s[a+2],_=s[a+3];return e[t]=o*_+f*u+c*p-l*d,e[t+1]=c*_+f*d+l*u-o*p,e[t+2]=l*_+f*p+o*d-c*u,e[t+3]=f*_-o*u-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),f=o(r/2),u=o(s/2),d=c(i/2),p=c(r/2),_=c(s/2);switch(a){case"XYZ":this._x=d*f*u+l*p*_,this._y=l*p*u-d*f*_,this._z=l*f*_+d*p*u,this._w=l*f*u-d*p*_;break;case"YXZ":this._x=d*f*u+l*p*_,this._y=l*p*u-d*f*_,this._z=l*f*_-d*p*u,this._w=l*f*u+d*p*_;break;case"ZXY":this._x=d*f*u-l*p*_,this._y=l*p*u+d*f*_,this._z=l*f*_+d*p*u,this._w=l*f*u-d*p*_;break;case"ZYX":this._x=d*f*u-l*p*_,this._y=l*p*u+d*f*_,this._z=l*f*_-d*p*u,this._w=l*f*u+d*p*_;break;case"YZX":this._x=d*f*u+l*p*_,this._y=l*p*u+d*f*_,this._z=l*f*_-d*p*u,this._w=l*f*u-d*p*_;break;case"XZY":this._x=d*f*u-l*p*_,this._y=l*p*u-d*f*_,this._z=l*f*_+d*p*u,this._w=l*f*u+d*p*_;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],f=t[6],u=t[10],d=i+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(f-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(i>o&&i>u){const p=2*Math.sqrt(1+i-o-u);this._w=(f-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>u){const p=2*Math.sqrt(1+o-i-u);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+f)/p}else{const p=2*Math.sqrt(1+u-i-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,f=t._w;return this._x=i*f+a*o+r*l-s*c,this._y=r*f+a*c+s*o-i*l,this._z=s*f+a*l+i*c-r*o,this._w=a*f-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),f=Math.sin(l);c=Math.sin(c*l)/f,t=Math.sin(t*l)/f,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),f=2*(o*t-s*r),u=2*(s*i-a*t);return this.x=t+c*l+a*u-o*f,this.y=i+c*f+o*l-s*u,this.z=r+c*u+s*f-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Sl.copy(this).projectOnVector(e),this.sub(Sl)}reflect(e){return this.sub(Sl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sl=new z,Gu=new Fs;class Xe{constructor(e,t,i,r,s,a,o,c,l){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=t,f[4]=s,f[5]=c,f[6]=i,f[7]=a,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],f=i[4],u=i[7],d=i[2],p=i[5],_=i[8],v=r[0],m=r[3],h=r[6],y=r[1],M=r[4],E=r[7],A=r[2],w=r[5],R=r[8];return s[0]=a*v+o*y+c*A,s[3]=a*m+o*M+c*w,s[6]=a*h+o*E+c*R,s[1]=l*v+f*y+u*A,s[4]=l*m+f*M+u*w,s[7]=l*h+f*E+u*R,s[2]=d*v+p*y+_*A,s[5]=d*m+p*M+_*w,s[8]=d*h+p*E+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8];return t*a*f-t*o*l-i*s*f+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8],u=f*a-o*l,d=o*c-f*s,p=l*s-a*c,_=t*u+i*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=u*v,e[1]=(r*l-f*i)*v,e[2]=(o*i-r*a)*v,e[3]=d*v,e[4]=(f*t-r*c)*v,e[5]=(r*s-o*t)*v,e[6]=p*v,e[7]=(i*c-l*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ml.makeScale(e,t)),this}rotate(e){return this.premultiply(Ml.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ml.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ml=new Xe,Hu=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ku=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ip(){const n={enabled:!0,workingColorSpace:Yr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===dt&&(r.r=xi(r.r),r.g=xi(r.g),r.b=xi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===dt&&(r.r=Kr(r.r),r.g=Kr(r.g),r.b=Kr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ki?ga:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Is("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Is("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Yr]:{primaries:e,whitePoint:i,transfer:ga,toXYZ:Hu,fromXYZ:ku,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:e,whitePoint:i,transfer:dt,toXYZ:Hu,fromXYZ:ku,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}}),n}const at=Ip();function xi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Kr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let jr;class Up{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{jr===void 0&&(jr=Ls("canvas")),jr.width=e.width,jr.height=e.height;const r=jr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=jr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ls("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=xi(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(xi(t[i]/255)*255):t[i]=xi(t[i]);return{data:t,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Np=0;class El{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=Us(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(yl(r[a].image)):s.push(yl(r[a]))}else s=yl(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function yl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Up.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}let Fp=0;const bl=new z;class Yt extends Zr{constructor(e=Yt.DEFAULT_IMAGE,t=Yt.DEFAULT_MAPPING,i=_i,r=_i,s=Et,a=dr,o=Hn,c=Sn,l=Yt.DEFAULT_ANISOTROPY,f=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=Us(),this.name="",this.source=new El(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(bl).x}get height(){return this.source.getSize(bl).y}get depth(){return this.source.getSize(bl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ve(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ve(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Au)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ro:e.x=e.x-Math.floor(e.x);break;case _i:e.x=e.x<0?0:1;break;case Co:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ro:e.y=e.y-Math.floor(e.y);break;case _i:e.y=e.y<0?0:1;break;case Co:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yt.DEFAULT_IMAGE=null,Yt.DEFAULT_MAPPING=Au,Yt.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,t=0,i=0,r=1){bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],f=c[4],u=c[8],d=c[1],p=c[5],_=c[9],v=c[2],m=c[6],h=c[10];if(Math.abs(f-d)<.01&&Math.abs(u-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(f+d)<.1&&Math.abs(u+v)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,E=(p+1)/2,A=(h+1)/2,w=(f+d)/4,R=(u+v)/4,N=(_+m)/4;return M>E&&M>A?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=w/i,s=R/i):E>A?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=w/r,s=N/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=R/s,r=N/s),this.set(i,r,s,t),this}let y=Math.sqrt((m-_)*(m-_)+(u-v)*(u-v)+(d-f)*(d-f));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(u-v)/y,this.z=(d-f)/y,this.w=Math.acos((l+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Op extends Zr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Et,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Yt(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Et,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new El(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jn extends Op{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Wu extends Yt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Bp extends Yt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Os{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,kn):kn.fromBufferAttribute(s,a),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xa.copy(i.boundingBox)),xa.applyMatrix4(e.matrixWorld),this.union(xa)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bs),Sa.subVectors(this.max,Bs),Jr.subVectors(e.a,Bs),Qr.subVectors(e.b,Bs),es.subVectors(e.c,Bs),Wi.subVectors(Qr,Jr),Xi.subVectors(es,Qr),pr.subVectors(Jr,es);let t=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-pr.z,pr.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,pr.z,0,-pr.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-pr.y,pr.x,0];return!Tl(t,Jr,Qr,es,Sa)||(t=[1,0,0,0,1,0,0,0,1],!Tl(t,Jr,Qr,es,Sa))?!1:(Ma.crossVectors(Wi,Xi),t=[Ma.x,Ma.y,Ma.z],Tl(t,Jr,Qr,es,Sa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Si=[new z,new z,new z,new z,new z,new z,new z,new z],kn=new z,xa=new Os,Jr=new z,Qr=new z,es=new z,Wi=new z,Xi=new z,pr=new z,Bs=new z,Sa=new z,Ma=new z,mr=new z;function Tl(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){mr.fromArray(n,s);const o=r.x*Math.abs(mr.x)+r.y*Math.abs(mr.y)+r.z*Math.abs(mr.z),c=e.dot(mr),l=t.dot(mr),f=i.dot(mr);if(Math.max(-Math.max(c,l,f),Math.min(c,l,f))>o)return!1}return!0}const zp=new Os,zs=new z,Al=new z;class wl{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):zp.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zs.subVectors(e,this.center);const t=zs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(zs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Al.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zs.copy(e.center).add(Al)),this.expandByPoint(zs.copy(e.center).sub(Al))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Mi=new z,Rl=new z,Ea=new z,qi=new z,Cl=new z,ya=new z,Pl=new z;class Xu{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mi.copy(this.origin).addScaledVector(this.direction,t),Mi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Rl.copy(e).add(t).multiplyScalar(.5),Ea.copy(t).sub(e).normalize(),qi.copy(this.origin).sub(Rl);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ea),o=qi.dot(this.direction),c=-qi.dot(Ea),l=qi.lengthSq(),f=Math.abs(1-a*a);let u,d,p,_;if(f>0)if(u=a*c-o,d=a*o-c,_=s*f,u>=0)if(d>=-_)if(d<=_){const v=1/f;u*=v,d*=v,p=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d<=-_?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-c),s),p=-u*u+d*(d+2*c)+l):d<=_?(u=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+l):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-c),s),p=-u*u+d*(d+2*c)+l);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Rl).addScaledVector(Ea,d),p}intersectSphere(e,t){Mi.subVectors(e.center,this.origin);const i=Mi.dot(this.direction),r=Mi.dot(Mi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,f=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),f>=0?(s=(e.min.y-d.y)*f,a=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,a=(e.min.y-d.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Mi)!==null}intersectTriangle(e,t,i,r,s){Cl.subVectors(t,e),ya.subVectors(i,e),Pl.crossVectors(Cl,ya);let a=this.direction.dot(Pl),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;qi.subVectors(this.origin,e);const c=o*this.direction.dot(ya.crossVectors(qi,ya));if(c<0)return null;const l=o*this.direction.dot(Cl.cross(qi));if(l<0||c+l>a)return null;const f=-o*qi.dot(Pl);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,t,i,r,s,a,o,c,l,f,u,d,p,_,v,m){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,f,u,d,p,_,v,m)}set(e,t,i,r,s,a,o,c,l,f,u,d,p,_,v,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=c,h[2]=l,h[6]=f,h[10]=u,h[14]=d,h[3]=p,h[7]=_,h[11]=v,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/ts.setFromMatrixColumn(e,0).length(),s=1/ts.setFromMatrixColumn(e,1).length(),a=1/ts.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),f=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=a*f,p=a*u,_=o*f,v=o*u;t[0]=c*f,t[4]=-c*u,t[8]=l,t[1]=p+_*l,t[5]=d-v*l,t[9]=-o*c,t[2]=v-d*l,t[6]=_+p*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*f,p=c*u,_=l*f,v=l*u;t[0]=d+v*o,t[4]=_*o-p,t[8]=a*l,t[1]=a*u,t[5]=a*f,t[9]=-o,t[2]=p*o-_,t[6]=v+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*f,p=c*u,_=l*f,v=l*u;t[0]=d-v*o,t[4]=-a*u,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*f,t[9]=v-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*f,p=a*u,_=o*f,v=o*u;t[0]=c*f,t[4]=_*l-p,t[8]=d*l+v,t[1]=c*u,t[5]=v*l+d,t[9]=p*l-_,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,p=a*l,_=o*c,v=o*l;t[0]=c*f,t[4]=v-d*u,t[8]=_*u+p,t[1]=u,t[5]=a*f,t[9]=-o*f,t[2]=-l*f,t[6]=p*u+_,t[10]=d-v*u}else if(e.order==="XZY"){const d=a*c,p=a*l,_=o*c,v=o*l;t[0]=c*f,t[4]=-u,t[8]=l*f,t[1]=d*u+v,t[5]=a*f,t[9]=p*u-_,t[2]=_*u-p,t[6]=o*f,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vp,e,Gp)}lookAt(e,t,i){const r=this.elements;return Mn.subVectors(e,t),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Yi.crossVectors(i,Mn),Yi.lengthSq()===0&&(Math.abs(i.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Yi.crossVectors(i,Mn)),Yi.normalize(),ba.crossVectors(Mn,Yi),r[0]=Yi.x,r[4]=ba.x,r[8]=Mn.x,r[1]=Yi.y,r[5]=ba.y,r[9]=Mn.y,r[2]=Yi.z,r[6]=ba.z,r[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],f=i[1],u=i[5],d=i[9],p=i[13],_=i[2],v=i[6],m=i[10],h=i[14],y=i[3],M=i[7],E=i[11],A=i[15],w=r[0],R=r[4],N=r[8],x=r[12],b=r[1],P=r[5],V=r[9],I=r[13],H=r[2],q=r[6],F=r[10],B=r[14],J=r[3],se=r[7],ae=r[11],ce=r[15];return s[0]=a*w+o*b+c*H+l*J,s[4]=a*R+o*P+c*q+l*se,s[8]=a*N+o*V+c*F+l*ae,s[12]=a*x+o*I+c*B+l*ce,s[1]=f*w+u*b+d*H+p*J,s[5]=f*R+u*P+d*q+p*se,s[9]=f*N+u*V+d*F+p*ae,s[13]=f*x+u*I+d*B+p*ce,s[2]=_*w+v*b+m*H+h*J,s[6]=_*R+v*P+m*q+h*se,s[10]=_*N+v*V+m*F+h*ae,s[14]=_*x+v*I+m*B+h*ce,s[3]=y*w+M*b+E*H+A*J,s[7]=y*R+M*P+E*q+A*se,s[11]=y*N+M*V+E*F+A*ae,s[15]=y*x+M*I+E*B+A*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],f=e[2],u=e[6],d=e[10],p=e[14],_=e[3],v=e[7],m=e[11],h=e[15],y=c*p-l*d,M=o*p-l*u,E=o*d-c*u,A=a*p-l*f,w=a*d-c*f,R=a*u-o*f;return t*(v*y-m*M+h*E)-i*(_*y-m*A+h*w)+r*(_*M-v*A+h*R)-s*(_*E-v*w+m*R)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8],u=e[9],d=e[10],p=e[11],_=e[12],v=e[13],m=e[14],h=e[15],y=u*m*l-v*d*l+v*c*p-o*m*p-u*c*h+o*d*h,M=_*d*l-f*m*l-_*c*p+a*m*p+f*c*h-a*d*h,E=f*v*l-_*u*l+_*o*p-a*v*p-f*o*h+a*u*h,A=_*u*c-f*v*c-_*o*d+a*v*d+f*o*m-a*u*m,w=t*y+i*M+r*E+s*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=y*R,e[1]=(v*d*s-u*m*s-v*r*p+i*m*p+u*r*h-i*d*h)*R,e[2]=(o*m*s-v*c*s+v*r*l-i*m*l-o*r*h+i*c*h)*R,e[3]=(u*c*s-o*d*s-u*r*l+i*d*l+o*r*p-i*c*p)*R,e[4]=M*R,e[5]=(f*m*s-_*d*s+_*r*p-t*m*p-f*r*h+t*d*h)*R,e[6]=(_*c*s-a*m*s-_*r*l+t*m*l+a*r*h-t*c*h)*R,e[7]=(a*d*s-f*c*s+f*r*l-t*d*l-a*r*p+t*c*p)*R,e[8]=E*R,e[9]=(_*u*s-f*v*s-_*i*p+t*v*p+f*i*h-t*u*h)*R,e[10]=(a*v*s-_*o*s+_*i*l-t*v*l-a*i*h+t*o*h)*R,e[11]=(f*o*s-a*u*s-f*i*l+t*u*l+a*i*p-t*o*p)*R,e[12]=A*R,e[13]=(f*v*r-_*u*r+_*i*d-t*v*d-f*i*m+t*u*m)*R,e[14]=(_*o*r-a*v*r-_*i*c+t*v*c+a*i*m-t*o*m)*R,e[15]=(a*u*r-f*o*r+f*i*c-t*u*c-a*i*d+t*o*d)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,f=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,f*o+i,f*c-r*a,0,l*c-r*o,f*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,f=a+a,u=o+o,d=s*l,p=s*f,_=s*u,v=a*f,m=a*u,h=o*u,y=c*l,M=c*f,E=c*u,A=i.x,w=i.y,R=i.z;return r[0]=(1-(v+h))*A,r[1]=(p+E)*A,r[2]=(_-M)*A,r[3]=0,r[4]=(p-E)*w,r[5]=(1-(d+h))*w,r[6]=(m+y)*w,r[7]=0,r[8]=(_+M)*R,r[9]=(m-y)*R,r[10]=(1-(d+v))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return i.set(1,1,1),t.identity(),this;let s=ts.set(r[0],r[1],r[2]).length();const a=ts.set(r[4],r[5],r[6]).length(),o=ts.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),Wn.copy(this);const l=1/s,f=1/a,u=1/o;return Wn.elements[0]*=l,Wn.elements[1]*=l,Wn.elements[2]*=l,Wn.elements[4]*=f,Wn.elements[5]*=f,Wn.elements[6]*=f,Wn.elements[8]*=u,Wn.elements[9]*=u,Wn.elements[10]*=u,t.setFromRotationMatrix(Wn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=jn,c=!1){const l=this.elements,f=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),p=(i+r)/(i-r);let _,v;if(c)_=s/(a-s),v=a*s/(a-s);else if(o===jn)_=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===va)_=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=f,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=jn,c=!1){const l=this.elements,f=2/(t-e),u=2/(i-r),d=-(t+e)/(t-e),p=-(i+r)/(i-r);let _,v;if(c)_=1/(a-s),v=a/(a-s);else if(o===jn)_=-2/(a-s),v=-(a+s)/(a-s);else if(o===va)_=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=f,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=_,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ts=new z,Wn=new yt,Vp=new z(0,0,0),Gp=new z(1,1,1),Yi=new z,ba=new z,Mn=new z,qu=new yt,Yu=new Fs;class Qn{constructor(e=0,t=0,i=0,r=Qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],f=r[9],u=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-it(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(it(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(it(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return qu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yu.setFromEuler(this),this.setFromQuaternion(Yu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qn.DEFAULT_ORDER="XYZ";class Dl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hp=0;const $u=new z,ns=new Fs,Ei=new yt,Ta=new z,Vs=new z,kp=new z,Wp=new Fs,Zu=new z(1,0,0),Ku=new z(0,1,0),ju=new z(0,0,1),Ju={type:"added"},Xp={type:"removed"},is={type:"childadded",child:null},Ll={type:"childremoved",child:null};class $t extends Zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=Us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$t.DEFAULT_UP.clone();const e=new z,t=new Qn,i=new Fs,r=new z(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yt},normalMatrix:{value:new Xe}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=$t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.multiply(ns),this}rotateOnWorldAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.premultiply(ns),this}rotateX(e){return this.rotateOnAxis(Zu,e)}rotateY(e){return this.rotateOnAxis(Ku,e)}rotateZ(e){return this.rotateOnAxis(ju,e)}translateOnAxis(e,t){return $u.copy(e).applyQuaternion(this.quaternion),this.position.add($u.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zu,e)}translateY(e){return this.translateOnAxis(Ku,e)}translateZ(e){return this.translateOnAxis(ju,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ta.copy(e):Ta.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(Vs,Ta,this.up):Ei.lookAt(Ta,Vs,this.up),this.quaternion.setFromRotationMatrix(Ei),r&&(Ei.extractRotation(r.matrixWorld),ns.setFromRotationMatrix(Ei),this.quaternion.premultiply(ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(st("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ju),is.child=e,this.dispatchEvent(is),is.child=null):st("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xp),Ll.child=e,this.dispatchEvent(Ll),Ll.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ju),is.child=e,this.dispatchEvent(is),is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,e,kp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,Wp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,f=c.length;l<f;l++){const u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),f=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),f.length>0&&(i.images=f),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const c=[];for(const l in o){const f=o[l];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}$t.DEFAULT_UP=new z(0,1,0),$t.DEFAULT_MATRIX_AUTO_UPDATE=!0,$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xn=new z,yi=new z,Il=new z,bi=new z,rs=new z,ss=new z,Qu=new z,Ul=new z,Nl=new z,Fl=new z,Ol=new bt,Bl=new bt,zl=new bt;class qn{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Xn.subVectors(e,t),r.cross(Xn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Xn.subVectors(r,t),yi.subVectors(i,t),Il.subVectors(e,t);const a=Xn.dot(Xn),o=Xn.dot(yi),c=Xn.dot(Il),l=yi.dot(yi),f=yi.dot(Il),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,p=(l*c-o*f)*d,_=(a*f-o*c)*d;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,bi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,bi.x),c.addScaledVector(a,bi.y),c.addScaledVector(o,bi.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return Ol.setScalar(0),Bl.setScalar(0),zl.setScalar(0),Ol.fromBufferAttribute(e,t),Bl.fromBufferAttribute(e,i),zl.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ol,s.x),a.addScaledVector(Bl,s.y),a.addScaledVector(zl,s.z),a}static isFrontFacing(e,t,i,r){return Xn.subVectors(i,t),yi.subVectors(e,t),Xn.cross(yi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),Xn.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return qn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return qn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;rs.subVectors(r,i),ss.subVectors(s,i),Ul.subVectors(e,i);const c=rs.dot(Ul),l=ss.dot(Ul);if(c<=0&&l<=0)return t.copy(i);Nl.subVectors(e,r);const f=rs.dot(Nl),u=ss.dot(Nl);if(f>=0&&u<=f)return t.copy(r);const d=c*u-f*l;if(d<=0&&c>=0&&f<=0)return a=c/(c-f),t.copy(i).addScaledVector(rs,a);Fl.subVectors(e,s);const p=rs.dot(Fl),_=ss.dot(Fl);if(_>=0&&p<=_)return t.copy(s);const v=p*l-c*_;if(v<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(i).addScaledVector(ss,o);const m=f*_-p*u;if(m<=0&&u-f>=0&&p-_>=0)return Qu.subVectors(s,r),o=(u-f)/(u-f+(p-_)),t.copy(r).addScaledVector(Qu,o);const h=1/(m+v+d);return a=v*h,o=d*h,t.copy(i).addScaledVector(rs,a).addScaledVector(ss,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ef={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},Aa={h:0,s:0,l:0};function Vl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class lt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=at.workingColorSpace){return this.r=e,this.g=t,this.b=i,at.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=at.workingColorSpace){if(e=Lp(e,1),t=it(t,0,1),i=it(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Vl(a,s,e+1/3),this.g=Vl(a,s,e),this.b=Vl(a,s,e-1/3)}return at.colorSpaceToWorking(this,r),this}setStyle(e,t=Xt){function i(s){s!==void 0&&parseFloat(s)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ve("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){const i=ef[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}copyLinearToSRGB(e){return this.r=Kr(e.r),this.g=Kr(e.g),this.b=Kr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return at.workingToColorSpace(Zt.copy(this),e),Math.round(it(Zt.r*255,0,255))*65536+Math.round(it(Zt.g*255,0,255))*256+Math.round(it(Zt.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace(Zt.copy(this),t);const i=Zt.r,r=Zt.g,s=Zt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const f=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=f<=.5?u/(a+o):u/(2-a-o),a){case i:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-i)/u+2;break;case s:c=(i-r)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=f,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=Xt){at.workingToColorSpace(Zt.copy(this),e);const t=Zt.r,i=Zt.g,r=Zt.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL($i),this.setHSL($i.h+e,$i.s+t,$i.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL($i),e.getHSL(Aa);const i=xl($i.h,Aa.h,t),r=xl($i.s,Aa.s,t),s=xl($i.l,Aa.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new lt;lt.NAMES=ef;let qp=0;class Gs extends Zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=Us(),this.name="",this.type="Material",this.blending=kr,this.side=Hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=go,this.blendDst=vo,this.blendEquation=ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=Wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$r,this.stencilZFail=$r,this.stencilZPass=$r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ve(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==kr&&(i.blending=this.blending),this.side!==Hi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==go&&(i.blendSrc=this.blendSrc),this.blendDst!==vo&&(i.blendDst=this.blendDst),this.blendEquation!==ur&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Wr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$r&&(i.stencilFail=this.stencilFail),this.stencilZFail!==$r&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==$r&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class tf extends Gs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=vu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new z,wa=new Ze;let Yp=0;class ei{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Fu,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)wa.fromBufferAttribute(this,t),wa.applyMatrix3(e),this.setXY(t,wa.x,wa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ns(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=un(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ns(t,this.array)),t}setX(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ns(t,this.array)),t}setY(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ns(t,this.array)),t}setZ(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ns(t,this.array)),t}setW(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),i=un(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),i=un(i,this.array),r=un(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),i=un(i,this.array),r=un(r,this.array),s=un(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fu&&(e.usage=this.usage),e}}class nf extends ei{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class rf extends ei{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ti extends ei{constructor(e,t,i){super(new Float32Array(e),t,i)}}let $p=0;const In=new yt,Gl=new $t,as=new z,En=new Os,Hs=new Os,Ut=new z;class Ai extends Zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=Us(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bu(e)?rf:nf)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,t,i){return In.makeTranslation(e,t,i),this.applyMatrix4(In),this}scale(e,t,i){return In.makeScale(e,t,i),this.applyMatrix4(In),this}lookAt(e){return Gl.lookAt(e),Gl.updateMatrix(),this.applyMatrix4(Gl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ti(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Os);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];En.setFromBufferAttribute(s),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&st('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Hs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ut.addVectors(En.min,Hs.min),En.expandByPoint(Ut),Ut.addVectors(En.max,Hs.max),En.expandByPoint(Ut)):(En.expandByPoint(Hs.min),En.expandByPoint(Hs.max))}En.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ut.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ut));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,f=o.count;l<f;l++)Ut.fromBufferAttribute(o,l),c&&(as.fromBufferAttribute(e,l),Ut.add(as)),r=Math.max(r,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&st('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){st("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ei(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let N=0;N<i.count;N++)o[N]=new z,c[N]=new z;const l=new z,f=new z,u=new z,d=new Ze,p=new Ze,_=new Ze,v=new z,m=new z;function h(N,x,b){l.fromBufferAttribute(i,N),f.fromBufferAttribute(i,x),u.fromBufferAttribute(i,b),d.fromBufferAttribute(s,N),p.fromBufferAttribute(s,x),_.fromBufferAttribute(s,b),f.sub(l),u.sub(l),p.sub(d),_.sub(d);const P=1/(p.x*_.y-_.x*p.y);isFinite(P)&&(v.copy(f).multiplyScalar(_.y).addScaledVector(u,-p.y).multiplyScalar(P),m.copy(u).multiplyScalar(p.x).addScaledVector(f,-_.x).multiplyScalar(P),o[N].add(v),o[x].add(v),o[b].add(v),c[N].add(m),c[x].add(m),c[b].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let N=0,x=y.length;N<x;++N){const b=y[N],P=b.start,V=b.count;for(let I=P,H=P+V;I<H;I+=3)h(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const M=new z,E=new z,A=new z,w=new z;function R(N){A.fromBufferAttribute(r,N),w.copy(A);const x=o[N];M.copy(x),M.sub(A.multiplyScalar(A.dot(x))).normalize(),E.crossVectors(w,x);const P=E.dot(c[N])<0?-1:1;a.setXYZW(N,M.x,M.y,M.z,P)}for(let N=0,x=y.length;N<x;++N){const b=y[N],P=b.start,V=b.count;for(let I=P,H=P+V;I<H;I+=3)R(e.getX(I+0)),R(e.getX(I+1)),R(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ei(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new z,s=new z,a=new z,o=new z,c=new z,l=new z,f=new z,u=new z;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),f.subVectors(a,s),u.subVectors(r,s),f.cross(u),o.fromBufferAttribute(i,_),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),o.add(f),c.add(f),l.add(f),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),f.subVectors(a,s),u.subVectors(r,s),f.cross(u),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(o,c){const l=o.array,f=o.itemSize,u=o.normalized,d=new l.constructor(c.length*f);let p=0,_=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?p=c[v]*o.data.stride+o.offset:p=c[v]*f;for(let h=0;h<f;h++)d[_++]=l[p++]}return new ei(d,f,u)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ai,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let f=0,u=l.length;f<u;f++){const d=l[f],p=e(d,i);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],f=[];for(let u=0,d=l.length;u<d;u++){const p=l[u];f.push(p.toJSON(e.data))}f.length>0&&(r[c]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const f=r[l];this.setAttribute(l,f.clone(t))}const s=e.morphAttributes;for(const l in s){const f=[],u=s[l];for(let d=0,p=u.length;d<p;d++)f.push(u[d].clone(t));this.morphAttributes[l]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,f=a.length;l<f;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sf=new yt,_r=new Xu,Ra=new wl,af=new z,Ca=new z,Pa=new z,Da=new z,Hl=new z,La=new z,of=new z,Ia=new z;class yn extends $t{constructor(e=new Ai,t=new tf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){La.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const f=o[c],u=s[c];f!==0&&(Hl.fromBufferAttribute(u,e),a?La.addScaledVector(Hl,f):La.addScaledVector(Hl.sub(t),f))}t.add(La)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ra.copy(i.boundingSphere),Ra.applyMatrix4(s),_r.copy(e.ray).recast(e.near),!(Ra.containsPoint(_r.origin)===!1&&(_r.intersectSphere(Ra,af)===null||_r.origin.distanceToSquared(af)>(e.far-e.near)**2))&&(sf.copy(s).invert(),_r.copy(e.ray).applyMatrix4(sf),!(i.boundingBox!==null&&_r.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,_r)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,f=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=d.length;_<v;_++){const m=d[_],h=a[m.materialIndex],y=Math.max(m.start,p.start),M=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let E=y,A=M;E<A;E+=3){const w=o.getX(E),R=o.getX(E+1),N=o.getX(E+2);r=Ua(this,h,e,i,l,f,u,w,R,N),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=_,h=v;m<h;m+=3){const y=o.getX(m),M=o.getX(m+1),E=o.getX(m+2);r=Ua(this,a,e,i,l,f,u,y,M,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,v=d.length;_<v;_++){const m=d[_],h=a[m.materialIndex],y=Math.max(m.start,p.start),M=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let E=y,A=M;E<A;E+=3){const w=E,R=E+1,N=E+2;r=Ua(this,h,e,i,l,f,u,w,R,N),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let m=_,h=v;m<h;m+=3){const y=m,M=m+1,E=m+2;r=Ua(this,a,e,i,l,f,u,y,M,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Zp(n,e,t,i,r,s,a,o){let c;if(e.side===ln?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===Hi,o),c===null)return null;Ia.copy(o),Ia.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Ia);return l<t.near||l>t.far?null:{distance:l,point:Ia.clone(),object:n}}function Ua(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,Ca),n.getVertexPosition(c,Pa),n.getVertexPosition(l,Da);const f=Zp(n,e,t,i,Ca,Pa,Da,of);if(f){const u=new z;qn.getBarycoord(of,Ca,Pa,Da,u),r&&(f.uv=qn.getInterpolatedAttribute(r,o,c,l,u,new Ze)),s&&(f.uv1=qn.getInterpolatedAttribute(s,o,c,l,u,new Ze)),a&&(f.normal=qn.getInterpolatedAttribute(a,o,c,l,u,new z),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new z,materialIndex:0};qn.getNormal(Ca,Pa,Da,d.normal),f.face=d,f.barycoord=u}return f}class ks extends Ai{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],f=[],u=[];let d=0,p=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,r,a,2),_("x","z","y",1,-1,e,i,-t,r,a,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Ti(l,3)),this.setAttribute("normal",new Ti(f,3)),this.setAttribute("uv",new Ti(u,2));function _(v,m,h,y,M,E,A,w,R,N,x){const b=E/R,P=A/N,V=E/2,I=A/2,H=w/2,q=R+1,F=N+1;let B=0,J=0;const se=new z;for(let ae=0;ae<F;ae++){const ce=ae*P-I;for(let Ce=0;Ce<q;Ce++){const we=Ce*b-V;se[v]=we*y,se[m]=ce*M,se[h]=H,l.push(se.x,se.y,se.z),se[v]=0,se[m]=0,se[h]=w>0?1:-1,f.push(se.x,se.y,se.z),u.push(Ce/R),u.push(1-ae/N),B+=1}}for(let ae=0;ae<N;ae++)for(let ce=0;ce<R;ce++){const Ce=d+ce+q*ae,we=d+ce+q*(ae+1),ke=d+(ce+1)+q*(ae+1),Be=d+(ce+1)+q*ae;c.push(Ce,we,Be),c.push(we,ke,Be),J+=6}o.addGroup(p,J,x),p+=J,d+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ks(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function os(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function en(n){const e={};for(let t=0;t<n.length;t++){const i=os(n[t]);for(const r in i)e[r]=i[r]}return e}function Kp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function lf(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const jp={clone:os,merge:en};var Jp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bn extends Gs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jp,this.fragmentShader=Qp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=os(e.uniforms),this.uniformsGroups=Kp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class cf extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zi=new z,uf=new Ze,ff=new Ze;class tn extends cf{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vl*2*Math.atan(Math.tan(gl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z)}getViewSize(e,t){return this.getViewBounds(e,uf,ff),t.subVectors(ff,uf)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(gl*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ls=-90,cs=1;class em extends $t{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new tn(ls,cs,e,t);r.layers=this.layers,this.add(r);const s=new tn(ls,cs,e,t);s.layers=this.layers,this.add(s);const a=new tn(ls,cs,e,t);a.layers=this.layers,this.add(a);const o=new tn(ls,cs,e,t);o.layers=this.layers,this.add(o);const c=new tn(ls,cs,e,t);c.layers=this.layers,this.add(c);const l=new tn(ls,cs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===jn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===va)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,f]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,f),e.setRenderTarget(u,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class df extends Yt{constructor(e=[],t=fr,i,r,s,a,o,c,l,f){super(e,t,i,r,s,a,o,c,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hf extends Jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new df(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ks(5,5,5),s=new bn({name:"CubemapFromEquirect",uniforms:os(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:mi});s.uniforms.tEquirect.value=t;const a=new yn(r,s),o=t.minFilter;return t.minFilter===dr&&(t.minFilter=Et),new em(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class ti extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tm={type:"move"};class kl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ti,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ti,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ti,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),h=this._getHandJoint(l,v);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const f=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=f.position.distanceTo(u.position),p=.02,_=.005;l.inputState.pinching&&d>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(tm)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ti;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Na{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new lt(e),this.density=t}clone(){return new Na(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Fa extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class nm extends Yt{constructor(e=null,t=1,i=1,r,s,a,o,c,l=kt,f=kt,u,d){super(null,a,o,c,l,f,r,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wl=new z,im=new z,rm=new Xe;class gr{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Wl.subVectors(i,t).cross(im.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Wl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||rm.getNormalMatrix(e),r=this.coplanarPoint(Wl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vr=new wl,sm=new Ze(.5,.5),Oa=new z;class Xl{constructor(e=new gr,t=new gr,i=new gr,r=new gr,s=new gr,a=new gr){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=jn,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],f=s[4],u=s[5],d=s[6],p=s[7],_=s[8],v=s[9],m=s[10],h=s[11],y=s[12],M=s[13],E=s[14],A=s[15];if(r[0].setComponents(l-a,p-f,h-_,A-y).normalize(),r[1].setComponents(l+a,p+f,h+_,A+y).normalize(),r[2].setComponents(l+o,p+u,h+v,A+M).normalize(),r[3].setComponents(l-o,p-u,h-v,A-M).normalize(),i)r[4].setComponents(c,d,m,E).normalize(),r[5].setComponents(l-c,p-d,h-m,A-E).normalize();else if(r[4].setComponents(l-c,p-d,h-m,A-E).normalize(),t===jn)r[5].setComponents(l+c,p+d,h+m,A+E).normalize();else if(t===va)r[5].setComponents(c,d,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(e){vr.center.set(0,0,0);const t=sm.distanceTo(e.center);return vr.radius=.7071067811865476+t,vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Oa.x=r.normal.x>0?e.max.x:e.min.x,Oa.y=r.normal.y>0?e.max.y:e.min.y,Oa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Oa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ws extends Yt{constructor(e,t,i=Zn,r,s,a,o=kt,c=kt,l,f=vi,u=1){if(f!==vi&&f!==hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,r,s,a,o,c,f,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new El(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class am extends Ws{constructor(e,t=Zn,i=fr,r,s,a=kt,o=kt,c,l=vi){const f={width:e,height:e,depth:1},u=[f,f,f,f,f,f];super(e,e,t,i,r,s,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class pf extends Yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ki extends Ai{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,f=c+1,u=e/o,d=t/c,p=[],_=[],v=[],m=[];for(let h=0;h<f;h++){const y=h*d-a;for(let M=0;M<l;M++){const E=M*u-s;_.push(E,-y,0),v.push(0,0,1),m.push(M/o),m.push(1-h/c)}}for(let h=0;h<c;h++)for(let y=0;y<o;y++){const M=y+l*h,E=y+l*(h+1),A=y+1+l*(h+1),w=y+1+l*h;p.push(M,E,w),p.push(E,A,w)}this.setIndex(p),this.setAttribute("position",new Ti(_,3)),this.setAttribute("normal",new Ti(v,3)),this.setAttribute("uv",new Ti(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ki(e.width,e.height,e.widthSegments,e.heightSegments)}}class om extends bn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class lm extends Gs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uu,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cm extends Gs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ep,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class um extends Gs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ql={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class fm{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(f){o++,s===!1&&r.onStart!==void 0&&r.onStart(f,a,o),s=!0},this.itemEnd=function(f){a++,r.onProgress!==void 0&&r.onProgress(f,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return c?c(f):f},this.setURLModifier=function(f){return c=f,this},this.addHandler=function(f,u){return l.push(f,u),this},this.removeHandler=function(f){const u=l.indexOf(f);return u!==-1&&l.splice(u,2),this},this.getHandler=function(f){for(let u=0,d=l.length;u<d;u+=2){const p=l[u],_=l[u+1];if(p.global&&(p.lastIndex=0),p.test(f))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const dm=new fm;class Yl{constructor(e){this.manager=e!==void 0?e:dm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Yl.DEFAULT_MATERIAL_NAME="__DEFAULT";const us=new WeakMap;class hm extends Yl{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ql.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let u=us.get(a);u===void 0&&(u=[],us.set(a,u)),u.push({onLoad:t,onError:r})}return a}const o=Ls("img");function c(){f(),t&&t(this);const u=us.get(this)||[];for(let d=0;d<u.length;d++){const p=u[d];p.onLoad&&p.onLoad(this)}us.delete(this),s.manager.itemEnd(e)}function l(u){f(),r&&r(u),ql.remove(`image:${e}`);const d=us.get(this)||[];for(let p=0;p<d.length;p++){const _=d[p];_.onError&&_.onError(u)}us.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ql.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class Ba extends Yl{constructor(e){super(e)}load(e,t,i,r){const s=new Yt,a=new hm(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class mf extends $t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new lt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const $l=new yt,_f=new z,gf=new z;class pm{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.mapType=Sn,this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xl,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;_f.setFromMatrixPosition(e.matrixWorld),t.position.copy(_f),gf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gf),t.updateMatrixWorld(),$l.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix($l,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply($l)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Zl extends cf{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=f*this.view.offsetY,c=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class mm extends pm{constructor(){super(new Zl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _m extends mf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.shadow=new mm}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class gm extends mf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class vm extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const vf=new yt;class xm{constructor(e,t,i=0,r=1/0){this.ray=new Xu(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Dl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):st("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return vf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vf),this}intersectObject(e,t=!0,i=[]){return Kl(e,this,i,t),i.sort(xf),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Kl(e[r],this,i,t);return i.sort(xf),i}}function xf(n,e){return n.distance-e.distance}function Kl(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)Kl(s[a],e,t,!0)}}function Sf(n,e,t,i){const r=Sm(i);switch(t){case Du:return n*e;case Iu:return n*e/r.components*r.byteLength;case Uo:return n*e/r.components*r.byteLength;case qr:return n*e*2/r.components*r.byteLength;case No:return n*e*2/r.components*r.byteLength;case Lu:return n*e*3/r.components*r.byteLength;case Hn:return n*e*4/r.components*r.byteLength;case Fo:return n*e*4/r.components*r.byteLength;case ha:case pa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ma:case _a:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bo:case Vo:return Math.max(n,16)*Math.max(e,8)/4;case Oo:case zo:return Math.max(n,8)*Math.max(e,8)/2;case Go:case Ho:case Wo:case Xo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ko:case qo:case Yo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case $o:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Zo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ko:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case jo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Jo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Qo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case el:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case tl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case nl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case il:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case rl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case sl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case al:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ol:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ll:case cl:case ul:return Math.ceil(n/4)*Math.ceil(e/4)*16;case fl:case dl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case hl:case pl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Sm(n){switch(n){case Sn:case wu:return{byteLength:1,components:1};case Ps:case Ru:case gi:return{byteLength:2,components:1};case Lo:case Io:return{byteLength:2,components:4};case Zn:case Do:case Kn:return{byteLength:4,components:1};case Cu:case Pu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_o}})),typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_o);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Mf(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Mm(n){const e=new WeakMap;function t(o,c){const l=o.array,f=o.usage,u=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,f),o.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,c,l){const f=c.array,u=c.updateRanges;if(n.bindBuffer(l,o),u.length===0)n.bufferSubData(l,0,f);else{u.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<u.length;p++){const _=u[d],v=u[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++d,u[d]=v)}u.length=d+1;for(let p=0,_=u.length;p<_;p++){const v=u[p];n.bufferSubData(l,v.start*f.BYTES_PER_ELEMENT,f,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var Em=`#ifdef USE_ALPHAHASH
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
#endif`,bm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Am=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rm=`#ifdef USE_AOMAP
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
#endif`,Cm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pm=`#ifdef USE_BATCHING
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
#endif`,Dm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Im=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Um=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Nm=`#ifdef USE_IRIDESCENCE
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
#endif`,Fm=`#ifdef USE_BUMPMAP
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
#endif`,Om=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,km=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Wm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Xm=`#define PI 3.141592653589793
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
#endif`,Ym=`vec3 transformedNormal = objectNormal;
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
#endif`,$m=`#ifdef USE_DISPLACEMENTMAP
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
#endif`,jm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,e_=`#ifdef USE_ENVMAP
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
#endif`,t_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,n_=`#ifdef USE_ENVMAP
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
#endif`,i_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,r_=`#ifdef USE_ENVMAP
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
#endif`,s_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,a_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,o_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,l_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,c_=`#ifdef USE_GRADIENTMAP
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
}`,u_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,f_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,d_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,h_=`uniform bool receiveShadow;
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
#endif`,p_=`#ifdef USE_ENVMAP
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
#endif`,m_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,__=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,g_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,v_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,x_=`PhysicalMaterial material;
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
#endif`,S_=`uniform sampler2D dfgLUT;
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
}`,M_=`
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
#endif`,E_=`#if defined( RE_IndirectDiffuse )
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
#endif`,b_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,T_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,A_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,w_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,R_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,C_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,P_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,D_=`#if defined( USE_POINTS_UV )
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
#endif`,L_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,I_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,U_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,N_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,F_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,O_=`#ifdef USE_MORPHTARGETS
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
#endif`,B_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,z_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,V_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,G_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,W_=`#ifdef USE_NORMALMAP
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
#endif`,X_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,q_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Y_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$_=`#ifdef USE_IRIDESCENCEMAP
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
}`,j_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,J_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Q_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ng=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ig=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ag=`float getShadowMask() {
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
}`,og=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lg=`#ifdef USE_SKINNING
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
#endif`,cg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ug=`#ifdef USE_SKINNING
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
#endif`,fg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mg=`#ifdef USE_TRANSMISSION
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
#endif`,_g=`#ifdef USE_TRANSMISSION
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
#endif`,gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ye={alphahash_fragment:Em,alphahash_pars_fragment:ym,alphamap_fragment:bm,alphamap_pars_fragment:Tm,alphatest_fragment:Am,alphatest_pars_fragment:wm,aomap_fragment:Rm,aomap_pars_fragment:Cm,batching_pars_vertex:Pm,batching_vertex:Dm,begin_vertex:Lm,beginnormal_vertex:Im,bsdfs:Um,iridescence_fragment:Nm,bumpmap_pars_fragment:Fm,clipping_planes_fragment:Om,clipping_planes_pars_fragment:Bm,clipping_planes_pars_vertex:zm,clipping_planes_vertex:Vm,color_fragment:Gm,color_pars_fragment:Hm,color_pars_vertex:km,color_vertex:Wm,common:Xm,cube_uv_reflection_fragment:qm,defaultnormal_vertex:Ym,displacementmap_pars_vertex:$m,displacementmap_vertex:Zm,emissivemap_fragment:Km,emissivemap_pars_fragment:jm,colorspace_fragment:Jm,colorspace_pars_fragment:Qm,envmap_fragment:e_,envmap_common_pars_fragment:t_,envmap_pars_fragment:n_,envmap_pars_vertex:i_,envmap_physical_pars_fragment:p_,envmap_vertex:r_,fog_vertex:s_,fog_pars_vertex:a_,fog_fragment:o_,fog_pars_fragment:l_,gradientmap_pars_fragment:c_,lightmap_pars_fragment:u_,lights_lambert_fragment:f_,lights_lambert_pars_fragment:d_,lights_pars_begin:h_,lights_toon_fragment:m_,lights_toon_pars_fragment:__,lights_phong_fragment:g_,lights_phong_pars_fragment:v_,lights_physical_fragment:x_,lights_physical_pars_fragment:S_,lights_fragment_begin:M_,lights_fragment_maps:E_,lights_fragment_end:y_,logdepthbuf_fragment:b_,logdepthbuf_pars_fragment:T_,logdepthbuf_pars_vertex:A_,logdepthbuf_vertex:w_,map_fragment:R_,map_pars_fragment:C_,map_particle_fragment:P_,map_particle_pars_fragment:D_,metalnessmap_fragment:L_,metalnessmap_pars_fragment:I_,morphinstance_vertex:U_,morphcolor_vertex:N_,morphnormal_vertex:F_,morphtarget_pars_vertex:O_,morphtarget_vertex:B_,normal_fragment_begin:z_,normal_fragment_maps:V_,normal_pars_fragment:G_,normal_pars_vertex:H_,normal_vertex:k_,normalmap_pars_fragment:W_,clearcoat_normal_fragment_begin:X_,clearcoat_normal_fragment_maps:q_,clearcoat_pars_fragment:Y_,iridescence_pars_fragment:$_,opaque_fragment:Z_,packing:K_,premultiplied_alpha_fragment:j_,project_vertex:J_,dithering_fragment:Q_,dithering_pars_fragment:eg,roughnessmap_fragment:tg,roughnessmap_pars_fragment:ng,shadowmap_pars_fragment:ig,shadowmap_pars_vertex:rg,shadowmap_vertex:sg,shadowmask_pars_fragment:ag,skinbase_vertex:og,skinning_pars_vertex:lg,skinning_vertex:cg,skinnormal_vertex:ug,specularmap_fragment:fg,specularmap_pars_fragment:dg,tonemapping_fragment:hg,tonemapping_pars_fragment:pg,transmission_fragment:mg,transmission_pars_fragment:_g,uv_pars_fragment:gg,uv_pars_vertex:vg,uv_vertex:xg,worldpos_vertex:Sg,background_vert:`varying vec2 vUv;
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
}`},_e={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},ni={basic:{uniforms:en([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:en([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new lt(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:en([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:en([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:en([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new lt(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:en([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:en([_e.points,_e.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:en([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:en([_e.common,_e.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:en([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:en([_e.sprite,_e.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distance:{uniforms:en([_e.common,_e.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distance_vert,fragmentShader:Ye.distance_frag},shadow:{uniforms:en([_e.lights,_e.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};ni.physical={uniforms:en([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const za={r:0,b:0,g:0},xr=new Qn,Mg=new yt;function Eg(n,e,t,i,r,s,a){const o=new lt(0);let c=s===!0?0:1,l,f,u=null,d=0,p=null;function _(M){let E=M.isScene===!0?M.background:null;return E&&E.isTexture&&(E=(M.backgroundBlurriness>0?t:e).get(E)),E}function v(M){let E=!1;const A=_(M);A===null?h(o,c):A&&A.isColor&&(h(A,1),E=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(M,E){const A=_(E);A&&(A.isCubeTexture||A.mapping===fa)?(f===void 0&&(f=new yn(new ks(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:os(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(w,R,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),xr.copy(E.backgroundRotation),xr.x*=-1,xr.y*=-1,xr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),f.material.uniforms.envMap.value=A,f.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Mg.makeRotationFromEuler(xr)),f.material.toneMapped=at.getTransfer(A.colorSpace)!==dt,(u!==A||d!==A.version||p!==n.toneMapping)&&(f.material.needsUpdate=!0,u=A,d=A.version,p=n.toneMapping),f.layers.enableAll(),M.unshift(f,f.geometry,f.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new yn(new Ki(2,2),new bn({name:"BackgroundMaterial",uniforms:os(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=at.getTransfer(A.colorSpace)!==dt,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||d!==A.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,u=A,d=A.version,p=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function h(M,E){M.getRGB(za,lf(n)),i.buffers.color.setClear(za.r,za.g,za.b,E,a)}function y(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,E=1){o.set(M),c=E,h(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,h(o,c)},render:v,addToRenderList:m,dispose:y}}function yg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(b,P,V,I,H){let q=!1;const F=u(I,V,P);s!==F&&(s=F,l(s.object)),q=p(b,I,V,H),q&&_(b,I,V,H),H!==null&&e.update(H,n.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,E(b,P,V,I),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function c(){return n.createVertexArray()}function l(b){return n.bindVertexArray(b)}function f(b){return n.deleteVertexArray(b)}function u(b,P,V){const I=V.wireframe===!0;let H=i[b.id];H===void 0&&(H={},i[b.id]=H);let q=H[P.id];q===void 0&&(q={},H[P.id]=q);let F=q[I];return F===void 0&&(F=d(c()),q[I]=F),F}function d(b){const P=[],V=[],I=[];for(let H=0;H<t;H++)P[H]=0,V[H]=0,I[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:V,attributeDivisors:I,object:b,attributes:{},index:null}}function p(b,P,V,I){const H=s.attributes,q=P.attributes;let F=0;const B=V.getAttributes();for(const J in B)if(B[J].location>=0){const ae=H[J];let ce=q[J];if(ce===void 0&&(J==="instanceMatrix"&&b.instanceMatrix&&(ce=b.instanceMatrix),J==="instanceColor"&&b.instanceColor&&(ce=b.instanceColor)),ae===void 0||ae.attribute!==ce||ce&&ae.data!==ce.data)return!0;F++}return s.attributesNum!==F||s.index!==I}function _(b,P,V,I){const H={},q=P.attributes;let F=0;const B=V.getAttributes();for(const J in B)if(B[J].location>=0){let ae=q[J];ae===void 0&&(J==="instanceMatrix"&&b.instanceMatrix&&(ae=b.instanceMatrix),J==="instanceColor"&&b.instanceColor&&(ae=b.instanceColor));const ce={};ce.attribute=ae,ae&&ae.data&&(ce.data=ae.data),H[J]=ce,F++}s.attributes=H,s.attributesNum=F,s.index=I}function v(){const b=s.newAttributes;for(let P=0,V=b.length;P<V;P++)b[P]=0}function m(b){h(b,0)}function h(b,P){const V=s.newAttributes,I=s.enabledAttributes,H=s.attributeDivisors;V[b]=1,I[b]===0&&(n.enableVertexAttribArray(b),I[b]=1),H[b]!==P&&(n.vertexAttribDivisor(b,P),H[b]=P)}function y(){const b=s.newAttributes,P=s.enabledAttributes;for(let V=0,I=P.length;V<I;V++)P[V]!==b[V]&&(n.disableVertexAttribArray(V),P[V]=0)}function M(b,P,V,I,H,q,F){F===!0?n.vertexAttribIPointer(b,P,V,H,q):n.vertexAttribPointer(b,P,V,I,H,q)}function E(b,P,V,I){v();const H=I.attributes,q=V.getAttributes(),F=P.defaultAttributeValues;for(const B in q){const J=q[B];if(J.location>=0){let se=H[B];if(se===void 0&&(B==="instanceMatrix"&&b.instanceMatrix&&(se=b.instanceMatrix),B==="instanceColor"&&b.instanceColor&&(se=b.instanceColor)),se!==void 0){const ae=se.normalized,ce=se.itemSize,Ce=e.get(se);if(Ce===void 0)continue;const we=Ce.buffer,ke=Ce.type,Be=Ce.bytesPerElement,k=ke===n.INT||ke===n.UNSIGNED_INT||se.gpuType===Do;if(se.isInterleavedBufferAttribute){const Q=se.data,ee=Q.stride,ge=se.offset;if(Q.isInstancedInterleavedBuffer){for(let le=0;le<J.locationSize;le++)h(J.location+le,Q.meshPerAttribute);b.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let le=0;le<J.locationSize;le++)m(J.location+le);n.bindBuffer(n.ARRAY_BUFFER,we);for(let le=0;le<J.locationSize;le++)M(J.location+le,ce/J.locationSize,ke,ae,ee*Be,(ge+ce/J.locationSize*le)*Be,k)}else{if(se.isInstancedBufferAttribute){for(let Q=0;Q<J.locationSize;Q++)h(J.location+Q,se.meshPerAttribute);b.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Q=0;Q<J.locationSize;Q++)m(J.location+Q);n.bindBuffer(n.ARRAY_BUFFER,we);for(let Q=0;Q<J.locationSize;Q++)M(J.location+Q,ce/J.locationSize,ke,ae,ce*Be,ce/J.locationSize*Q*Be,k)}}else if(F!==void 0){const ae=F[B];if(ae!==void 0)switch(ae.length){case 2:n.vertexAttrib2fv(J.location,ae);break;case 3:n.vertexAttrib3fv(J.location,ae);break;case 4:n.vertexAttrib4fv(J.location,ae);break;default:n.vertexAttrib1fv(J.location,ae)}}}}y()}function A(){N();for(const b in i){const P=i[b];for(const V in P){const I=P[V];for(const H in I)f(I[H].object),delete I[H];delete P[V]}delete i[b]}}function w(b){if(i[b.id]===void 0)return;const P=i[b.id];for(const V in P){const I=P[V];for(const H in I)f(I[H].object),delete I[H];delete P[V]}delete i[b.id]}function R(b){for(const P in i){const V=i[P];if(V[b.id]===void 0)continue;const I=V[b.id];for(const H in I)f(I[H].object),delete I[H];delete V[b.id]}}function N(){x(),a=!0,s!==r&&(s=r,l(s.object))}function x(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:N,resetDefaultState:x,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function bg(n,e,t){let i;function r(l){i=l}function s(l,f){n.drawArrays(i,l,f),t.update(f,i,1)}function a(l,f,u){u!==0&&(n.drawArraysInstanced(i,l,f,u),t.update(f,i,u))}function o(l,f,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,f,0,u);let p=0;for(let _=0;_<u;_++)p+=f[_];t.update(p,i,1)}function c(l,f,u,d){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<l.length;_++)a(l[_],f[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,f,0,d,0,u);let _=0;for(let v=0;v<u;v++)_+=f[v]*d[v];t.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Tg(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==Hn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const N=R===gi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Sn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Kn&&!N)}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const f=c(l);f!==l&&(Ve("WebGLRenderer:",l,"not supported, using",f,"instead."),l=f);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:E,maxSamples:A,samples:w}}function Ag(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new gr,o=new Xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||i!==0||r;return r=d,i=u.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=f(u,d,0)},this.setState=function(u,d,p){const _=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,h=n.get(u);if(!r||_===null||_.length===0||s&&!m)s?f(null):l();else{const y=s?0:i,M=y*4;let E=h.clippingState||null;c.value=E,E=f(_,d,M,p);for(let A=0;A!==M;++A)E[A]=t[A];h.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(u,d,p,_){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=c.value,_!==!0||m===null){const h=p+v*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<h)&&(m=new Float32Array(h));for(let M=0,E=p;M!==v;++M,E+=4)a.copy(u[M]).applyMatrix4(y,o),a.normal.toArray(m,E),m[E+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function wg(n){let e=new WeakMap;function t(a,o){return o===Ao?a.mapping=fr:o===wo&&(a.mapping=Xr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ao||o===wo)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new hf(c.height);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const ji=4,Ef=[.125,.215,.35,.446,.526,.582],Sr=20,Rg=256,Xs=new Zl,yf=new lt;let jl=null,Jl=0,Ql=0,ec=!1;const Cg=new z;class bf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=Cg}=s;jl=this._renderer.getRenderTarget(),Jl=this._renderer.getActiveCubeFace(),Ql=this._renderer.getActiveMipmapLevel(),ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Af(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(jl,Jl,Ql),this._renderer.xr.enabled=ec,e.scissorTest=!1,fs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fr||e.mapping===Xr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jl=this._renderer.getRenderTarget(),Jl=this._renderer.getActiveCubeFace(),Ql=this._renderer.getActiveMipmapLevel(),ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Et,minFilter:Et,generateMipmaps:!1,type:gi,format:Hn,colorSpace:Yr,depthBuffer:!1},r=Tf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tf(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Pg(s)),this._blurMaterial=Lg(s,e,t),this._ggxMaterial=Dg(s,e,t)}return r}_compileMaterial(e){const t=new yn(new Ai,e);this._renderer.compile(t,Xs)}_sceneToCubeUV(e,t,i,r,s){const c=new tn(90,1,t,i),l=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(yf),u.toneMapping=cn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new yn(new ks,new tf({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let h=!1;const y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,h=!0):(m.color.copy(yf),h=!0);for(let M=0;M<6;M++){const E=M%3;E===0?(c.up.set(0,l[M],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+f[M],s.y,s.z)):E===1?(c.up.set(0,0,l[M]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+f[M],s.z)):(c.up.set(0,l[M],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+f[M]));const A=this._cubeSize;fs(r,E*A,M>2?A:0,A,A),u.setRenderTarget(r),h&&u.render(v,c),u.render(e,c)}u.toneMapping=p,u.autoClear=d,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===fr||e.mapping===Xr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=wf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Af());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;fs(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,Xs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,l=i/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-f*f),d=0+l*1.25,p=u*d,{_lodMax:_}=this,v=this._sizeLods[i],m=3*v*(i>_-ji?i-_+ji:0),h=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=_-t,fs(s,m,h,3*v,2*v),r.setRenderTarget(s),r.render(o,Xs),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=_-i,fs(e,m,h,3*v,2*v),r.setRenderTarget(e),r.render(o,Xs)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&st("blur direction must be either latitudinal or longitudinal!");const f=3,u=this._lodMeshes[r];u.material=l;const d=l.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Sr-1),v=s/_,m=isFinite(s)?1+Math.floor(f*v):Sr;m>Sr&&Ve(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Sr}`);const h=[];let y=0;for(let R=0;R<Sr;++R){const N=R/v,x=Math.exp(-N*N/2);h.push(x),R===0?y+=x:R<m&&(y+=2*x)}for(let R=0;R<h.length;R++)h[R]=h[R]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:M}=this;d.dTheta.value=_,d.mipInt.value=M-i;const E=this._sizeLods[r],A=3*E*(r>M-ji?r-M+ji:0),w=4*(this._cubeSize-E);fs(t,A,w,3*E,2*E),c.setRenderTarget(t),c.render(u,Xs)}}function Pg(n){const e=[],t=[],i=[];let r=n;const s=n-ji+1+Ef.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>n-ji?c=Ef[a-n+ji-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),f=-l,u=1+l,d=[f,f,u,f,u,u,f,f,u,u,f,u],p=6,_=6,v=3,m=2,h=1,y=new Float32Array(v*_*p),M=new Float32Array(m*_*p),E=new Float32Array(h*_*p);for(let w=0;w<p;w++){const R=w%3*2/3-1,N=w>2?0:-1,x=[R,N,0,R+2/3,N,0,R+2/3,N+1,0,R,N,0,R+2/3,N+1,0,R,N+1,0];y.set(x,v*_*w),M.set(d,m*_*w);const b=[w,w,w,w,w,w];E.set(b,h*_*w)}const A=new Ai;A.setAttribute("position",new ei(y,v)),A.setAttribute("uv",new ei(M,m)),A.setAttribute("faceIndex",new ei(E,h)),i.push(new yn(A,null)),r>ji&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Tf(n,e,t){const i=new Jn(n,e,t);return i.texture.mapping=fa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function fs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Dg(n,e,t){return new bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Rg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Va(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Lg(n,e,t){const i=new Float32Array(Sr),r=new z(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:Sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Va(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Af(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Va(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function wf(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Va(){return`

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
	`}function Ig(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===Ao||c===wo,f=c===fr||c===Xr;if(l||f){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new bf(n)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return l&&p&&p.height>0||f&&p&&r(p)?(t===null&&(t=new bf(n)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function r(o){let c=0;const l=6;for(let f=0;f<l;f++)o[f]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Ug(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Is("WebGLRenderer: "+i+" extension not supported."),r}}}function Ng(n,e,t,i){const r={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const p in d)e.update(d[p],n.ARRAY_BUFFER)}function l(u){const d=[],p=u.index,_=u.attributes.position;let v=0;if(p!==null){const y=p.array;v=p.version;for(let M=0,E=y.length;M<E;M+=3){const A=y[M+0],w=y[M+1],R=y[M+2];d.push(A,w,w,R,R,A)}}else if(_!==void 0){const y=_.array;v=_.version;for(let M=0,E=y.length/3-1;M<E;M+=3){const A=M+0,w=M+1,R=M+2;d.push(A,w,w,R,R,A)}}else return;const m=new(Bu(d)?rf:nf)(d,1);m.version=v;const h=s.get(u);h&&e.remove(h),s.set(u,m)}function f(u){const d=s.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:f}}function Fg(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,p){n.drawElements(i,p,s,d*a),t.update(p,i,1)}function l(d,p,_){_!==0&&(n.drawElementsInstanced(i,p,s,d*a,_),t.update(p,i,_))}function f(d,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,_);let m=0;for(let h=0;h<_;h++)m+=p[h];t.update(m,i,1)}function u(d,p,_,v){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)l(d[h]/a,p[h],v[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,v,0,_);let h=0;for(let y=0;y<_;y++)h+=p[y]*v[y];t.update(h,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=f,this.renderMultiDrawInstances=u}function Og(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:st("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Bg(n,e,t){const i=new WeakMap,r=new bt;function s(a,o,c){const l=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=f!==void 0?f.length:0;let d=i.get(o);if(d===void 0||d.count!==u){let x=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",x)};d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let M=0;p===!0&&(M=1),_===!0&&(M=2),v===!0&&(M=3);let E=o.attributes.position.count*M,A=1;E>e.maxTextureSize&&(A=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const w=new Float32Array(E*A*4*u),R=new Wu(w,E,A,u);R.type=Kn,R.needsUpdate=!0;const N=M*4;for(let b=0;b<u;b++){const P=m[b],V=h[b],I=y[b],H=E*A*4*b;for(let q=0;q<P.count;q++){const F=q*N;p===!0&&(r.fromBufferAttribute(P,q),w[H+F+0]=r.x,w[H+F+1]=r.y,w[H+F+2]=r.z,w[H+F+3]=0),_===!0&&(r.fromBufferAttribute(V,q),w[H+F+4]=r.x,w[H+F+5]=r.y,w[H+F+6]=r.z,w[H+F+7]=0),v===!0&&(r.fromBufferAttribute(I,q),w[H+F+8]=r.x,w[H+F+9]=r.y,w[H+F+10]=r.z,w[H+F+11]=I.itemSize===4?r.w:1)}}d={count:u,texture:R,size:new Ze(E,A)},i.set(o,d),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let p=0;for(let v=0;v<l.length;v++)p+=l[v];const _=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function zg(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,f=c.geometry,u=e.get(c,f);if(r.get(u)!==l&&(e.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return u}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const Vg={[xu]:"LINEAR_TONE_MAPPING",[Su]:"REINHARD_TONE_MAPPING",[Mu]:"CINEON_TONE_MAPPING",[Eu]:"ACES_FILMIC_TONE_MAPPING",[bu]:"AGX_TONE_MAPPING",[Tu]:"NEUTRAL_TONE_MAPPING",[yu]:"CUSTOM_TONE_MAPPING"};function Gg(n,e,t,i,r){const s=new Jn(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),a=new Jn(e,t,{type:gi,depthBuffer:!1,stencilBuffer:!1}),o=new Ai;o.setAttribute("position",new Ti([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Ti([0,2,0,0,2,0],2));const c=new om({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new yn(o,c),f=new Zl(-1,1,1,-1,0,1);let u=null,d=null,p=!1,_,v=null,m=[],h=!1;this.setSize=function(y,M){s.setSize(y,M),a.setSize(y,M);for(let E=0;E<m.length;E++){const A=m[E];A.setSize&&A.setSize(y,M)}},this.setEffects=function(y){m=y,h=m.length>0&&m[0].isRenderPass===!0;const M=s.width,E=s.height;for(let A=0;A<m.length;A++){const w=m[A];w.setSize&&w.setSize(M,E)}},this.begin=function(y,M){if(p||y.toneMapping===cn&&m.length===0)return!1;if(v=M,M!==null){const E=M.width,A=M.height;(s.width!==E||s.height!==A)&&this.setSize(E,A)}return h===!1&&y.setRenderTarget(s),_=y.toneMapping,y.toneMapping=cn,!0},this.hasRenderPass=function(){return h},this.end=function(y,M){y.toneMapping=_,p=!0;let E=s,A=a;for(let w=0;w<m.length;w++){const R=m[w];if(R.enabled!==!1&&(R.render(y,A,E,M),R.needsSwap!==!1)){const N=E;E=A,A=N}}if(u!==y.outputColorSpace||d!==y.toneMapping){u=y.outputColorSpace,d=y.toneMapping,c.defines={},at.getTransfer(u)===dt&&(c.defines.SRGB_TRANSFER="");const w=Vg[d];w&&(c.defines[w]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(v),y.render(l,f),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),c.dispose()}}const Rf=new Yt,tc=new Ws(1,1),Cf=new Wu,Pf=new Bp,Df=new df,Lf=[],If=[],Uf=new Float32Array(16),Nf=new Float32Array(9),Ff=new Float32Array(4);function ds(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Lf[r];if(s===void 0&&(s=new Float32Array(r),Lf[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Pt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Dt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ga(n,e){let t=If[e];t===void 0&&(t=new Int32Array(e),If[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Hg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function kg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2fv(this.addr,e),Dt(t,e)}}function Wg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;n.uniform3fv(this.addr,e),Dt(t,e)}}function Xg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4fv(this.addr,e),Dt(t,e)}}function qg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,i))return;Ff.set(i),n.uniformMatrix2fv(this.addr,!1,Ff),Dt(t,i)}}function Yg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,i))return;Nf.set(i),n.uniformMatrix3fv(this.addr,!1,Nf),Dt(t,i)}}function $g(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,i))return;Uf.set(i),n.uniformMatrix4fv(this.addr,!1,Uf),Dt(t,i)}}function Zg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Kg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2iv(this.addr,e),Dt(t,e)}}function jg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3iv(this.addr,e),Dt(t,e)}}function Jg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4iv(this.addr,e),Dt(t,e)}}function Qg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ev(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2uiv(this.addr,e),Dt(t,e)}}function tv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3uiv(this.addr,e),Dt(t,e)}}function nv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4uiv(this.addr,e),Dt(t,e)}}function iv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(tc.compareFunction=t.isReversedDepthBuffer()?_l:ml,s=tc):s=Rf,t.setTexture2D(e||s,r)}function rv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Pf,r)}function sv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Df,r)}function av(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Cf,r)}function ov(n){switch(n){case 5126:return Hg;case 35664:return kg;case 35665:return Wg;case 35666:return Xg;case 35674:return qg;case 35675:return Yg;case 35676:return $g;case 5124:case 35670:return Zg;case 35667:case 35671:return Kg;case 35668:case 35672:return jg;case 35669:case 35673:return Jg;case 5125:return Qg;case 36294:return ev;case 36295:return tv;case 36296:return nv;case 35678:case 36198:case 36298:case 36306:case 35682:return iv;case 35679:case 36299:case 36307:return rv;case 35680:case 36300:case 36308:case 36293:return sv;case 36289:case 36303:case 36311:case 36292:return av}}function lv(n,e){n.uniform1fv(this.addr,e)}function cv(n,e){const t=ds(e,this.size,2);n.uniform2fv(this.addr,t)}function uv(n,e){const t=ds(e,this.size,3);n.uniform3fv(this.addr,t)}function fv(n,e){const t=ds(e,this.size,4);n.uniform4fv(this.addr,t)}function dv(n,e){const t=ds(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function hv(n,e){const t=ds(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function pv(n,e){const t=ds(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function mv(n,e){n.uniform1iv(this.addr,e)}function _v(n,e){n.uniform2iv(this.addr,e)}function gv(n,e){n.uniform3iv(this.addr,e)}function vv(n,e){n.uniform4iv(this.addr,e)}function xv(n,e){n.uniform1uiv(this.addr,e)}function Sv(n,e){n.uniform2uiv(this.addr,e)}function Mv(n,e){n.uniform3uiv(this.addr,e)}function Ev(n,e){n.uniform4uiv(this.addr,e)}function yv(n,e,t){const i=this.cache,r=e.length,s=Ga(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=tc:a=Rf;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function bv(n,e,t){const i=this.cache,r=e.length,s=Ga(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Pf,s[a])}function Tv(n,e,t){const i=this.cache,r=e.length,s=Ga(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Df,s[a])}function Av(n,e,t){const i=this.cache,r=e.length,s=Ga(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Cf,s[a])}function wv(n){switch(n){case 5126:return lv;case 35664:return cv;case 35665:return uv;case 35666:return fv;case 35674:return dv;case 35675:return hv;case 35676:return pv;case 5124:case 35670:return mv;case 35667:case 35671:return _v;case 35668:case 35672:return gv;case 35669:case 35673:return vv;case 5125:return xv;case 36294:return Sv;case 36295:return Mv;case 36296:return Ev;case 35678:case 36198:case 36298:case 36306:case 35682:return yv;case 35679:case 36299:case 36307:return bv;case 35680:case 36300:case 36308:case 36293:return Tv;case 36289:case 36303:case 36311:case 36292:return Av}}class Rv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ov(t.type)}}class Cv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wv(t.type)}}class Pv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const nc=/(\w+)(\])?(\[|\.)?/g;function Of(n,e){n.seq.push(e),n.map[e.id]=e}function Dv(n,e,t){const i=n.name,r=i.length;for(nc.lastIndex=0;;){const s=nc.exec(i),a=nc.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Of(t,l===void 0?new Rv(o,n,e):new Cv(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new Pv(o),Of(t,u)),t=u}}}class Ha{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Dv(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Bf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Lv=37297;let Iv=0;function Uv(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const zf=new Xe;function Nv(n){at._getMatrix(zf,at.workingColorSpace,n);const e=`mat3( ${zf.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(n)){case ga:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Vf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Uv(n.getShaderSource(e),o)}else return s}function Fv(n,e){const t=Nv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Ov={[xu]:"Linear",[Su]:"Reinhard",[Mu]:"Cineon",[Eu]:"ACESFilmic",[bu]:"AgX",[Tu]:"Neutral",[yu]:"Custom"};function Bv(n,e){const t=Ov[e];return t===void 0?(Ve("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ka=new z;function zv(){at.getLuminanceCoefficients(ka);const n=ka.x.toFixed(4),e=ka.y.toFixed(4),t=ka.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qs).join(`
`)}function Gv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Hv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function qs(n){return n!==""}function Gf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kv=/^[ \t]*#include +<([\w\d./]+)>/gm;function ic(n){return n.replace(kv,Xv)}const Wv=new Map;function Xv(n,e){let t=Ye[e];if(t===void 0){const i=Wv.get(e);if(i!==void 0)t=Ye[i],Ve('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ic(t)}const qv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kf(n){return n.replace(qv,Yv)}function Yv(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Wf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const $v={[ua]:"SHADOWMAP_TYPE_PCF",[Cs]:"SHADOWMAP_TYPE_VSM"};function Zv(n){return $v[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Kv={[fr]:"ENVMAP_TYPE_CUBE",[Xr]:"ENVMAP_TYPE_CUBE",[fa]:"ENVMAP_TYPE_CUBE_UV"};function jv(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Kv[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const Jv={[Xr]:"ENVMAP_MODE_REFRACTION"};function Qv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Jv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const e0={[vu]:"ENVMAP_BLENDING_MULTIPLY",[xp]:"ENVMAP_BLENDING_MIX",[Sp]:"ENVMAP_BLENDING_ADD"};function t0(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":e0[n.combine]||"ENVMAP_BLENDING_NONE"}function n0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function i0(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Zv(t),l=jv(t),f=Qv(t),u=t0(t),d=n0(t),p=Vv(t),_=Gv(s),v=r.createProgram();let m,h,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(qs).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(qs).join(`
`),h.length>0&&(h+=`
`)):(m=[Wf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qs).join(`
`),h=[Wf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+f:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==cn?"#define TONE_MAPPING":"",t.toneMapping!==cn?Ye.tonemapping_pars_fragment:"",t.toneMapping!==cn?Bv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,Fv("linearToOutputTexel",t.outputColorSpace),zv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qs).join(`
`)),a=ic(a),a=Gf(a,t),a=Hf(a,t),o=ic(o),o=Gf(o,t),o=Hf(o,t),a=kf(a),o=kf(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===Ou?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ou?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const M=y+m+a,E=y+h+o,A=Bf(r,r.VERTEX_SHADER,M),w=Bf(r,r.FRAGMENT_SHADER,E);r.attachShader(v,A),r.attachShader(v,w),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function R(P){if(n.debug.checkShaderErrors){const V=r.getProgramInfoLog(v)||"",I=r.getShaderInfoLog(A)||"",H=r.getShaderInfoLog(w)||"",q=V.trim(),F=I.trim(),B=H.trim();let J=!0,se=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,A,w);else{const ae=Vf(r,A,"vertex"),ce=Vf(r,w,"fragment");st("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+q+`
`+ae+`
`+ce)}else q!==""?Ve("WebGLProgram: Program Info Log:",q):(F===""||B==="")&&(se=!1);se&&(P.diagnostics={runnable:J,programLog:q,vertexShader:{log:F,prefix:m},fragmentShader:{log:B,prefix:h}})}r.deleteShader(A),r.deleteShader(w),N=new Ha(r,v),x=Hv(r,v)}let N;this.getUniforms=function(){return N===void 0&&R(this),N};let x;this.getAttributes=function(){return x===void 0&&R(this),x};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(v,Lv)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Iv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=w,this}let r0=0;class s0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new a0(e),t.set(e,i)),i}}class a0{constructor(e){this.id=r0++,this.code=e,this.usedTimes=0}}function o0(n,e,t,i,r,s,a){const o=new Dl,c=new s0,l=new Set,f=[],u=new Map,d=r.logarithmicDepthBuffer;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,b,P,V,I){const H=V.fog,q=I.geometry,F=x.isMeshStandardMaterial?V.environment:null,B=(x.isMeshStandardMaterial?t:e).get(x.envMap||F),J=B&&B.mapping===fa?B.image.height:null,se=_[x.type];x.precision!==null&&(p=r.getMaxPrecision(x.precision),p!==x.precision&&Ve("WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const ae=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ce=ae!==void 0?ae.length:0;let Ce=0;q.morphAttributes.position!==void 0&&(Ce=1),q.morphAttributes.normal!==void 0&&(Ce=2),q.morphAttributes.color!==void 0&&(Ce=3);let we,ke,Be,k;if(se){const et=ni[se];we=et.vertexShader,ke=et.fragmentShader}else we=x.vertexShader,ke=x.fragmentShader,c.update(x),Be=c.getVertexShaderID(x),k=c.getFragmentShaderID(x);const Q=n.getRenderTarget(),ee=n.state.buffers.depth.getReversed(),ge=I.isInstancedMesh===!0,le=I.isBatchedMesh===!0,Le=!!x.map,Pe=!!x.matcap,ye=!!B,Ke=!!x.aoMap,rt=!!x.lightMap,ze=!!x.bumpMap,_t=!!x.normalMap,C=!!x.displacementMap,gt=!!x.emissiveMap,ot=!!x.metalnessMap,ht=!!x.roughnessMap,Te=x.anisotropy>0,T=x.clearcoat>0,g=x.dispersion>0,L=x.iridescence>0,Y=x.sheen>0,ne=x.transmission>0,X=Te&&!!x.anisotropyMap,xe=T&&!!x.clearcoatMap,de=T&&!!x.clearcoatNormalMap,Ee=T&&!!x.clearcoatRoughnessMap,Ne=L&&!!x.iridescenceMap,oe=L&&!!x.iridescenceThicknessMap,pe=Y&&!!x.sheenColorMap,Me=Y&&!!x.sheenRoughnessMap,Ae=!!x.specularMap,he=!!x.specularColorMap,We=!!x.specularIntensityMap,D=ne&&!!x.transmissionMap,te=ne&&!!x.thicknessMap,K=!!x.gradientMap,ue=!!x.alphaMap,j=x.alphaTest>0,$=!!x.alphaHash,re=!!x.extensions;let De=cn;x.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(De=n.toneMapping);const Qe={shaderID:se,shaderType:x.type,shaderName:x.name,vertexShader:we,fragmentShader:ke,defines:x.defines,customVertexShaderID:Be,customFragmentShaderID:k,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,batching:le,batchingColor:le&&I._colorsTexture!==null,instancing:ge,instancingColor:ge&&I.instanceColor!==null,instancingMorph:ge&&I.morphTexture!==null,outputColorSpace:Q===null?n.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Yr,alphaToCoverage:!!x.alphaToCoverage,map:Le,matcap:Pe,envMap:ye,envMapMode:ye&&B.mapping,envMapCubeUVHeight:J,aoMap:Ke,lightMap:rt,bumpMap:ze,normalMap:_t,displacementMap:C,emissiveMap:gt,normalMapObjectSpace:_t&&x.normalMapType===yp,normalMapTangentSpace:_t&&x.normalMapType===Uu,metalnessMap:ot,roughnessMap:ht,anisotropy:Te,anisotropyMap:X,clearcoat:T,clearcoatMap:xe,clearcoatNormalMap:de,clearcoatRoughnessMap:Ee,dispersion:g,iridescence:L,iridescenceMap:Ne,iridescenceThicknessMap:oe,sheen:Y,sheenColorMap:pe,sheenRoughnessMap:Me,specularMap:Ae,specularColorMap:he,specularIntensityMap:We,transmission:ne,transmissionMap:D,thicknessMap:te,gradientMap:K,opaque:x.transparent===!1&&x.blending===kr&&x.alphaToCoverage===!1,alphaMap:ue,alphaTest:j,alphaHash:$,combine:x.combine,mapUv:Le&&v(x.map.channel),aoMapUv:Ke&&v(x.aoMap.channel),lightMapUv:rt&&v(x.lightMap.channel),bumpMapUv:ze&&v(x.bumpMap.channel),normalMapUv:_t&&v(x.normalMap.channel),displacementMapUv:C&&v(x.displacementMap.channel),emissiveMapUv:gt&&v(x.emissiveMap.channel),metalnessMapUv:ot&&v(x.metalnessMap.channel),roughnessMapUv:ht&&v(x.roughnessMap.channel),anisotropyMapUv:X&&v(x.anisotropyMap.channel),clearcoatMapUv:xe&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:de&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:Me&&v(x.sheenRoughnessMap.channel),specularMapUv:Ae&&v(x.specularMap.channel),specularColorMapUv:he&&v(x.specularColorMap.channel),specularIntensityMapUv:We&&v(x.specularIntensityMap.channel),transmissionMapUv:D&&v(x.transmissionMap.channel),thicknessMapUv:te&&v(x.thicknessMap.channel),alphaMapUv:ue&&v(x.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(_t||Te),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!q.attributes.uv&&(Le||ue),fog:!!H,useFog:x.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ee,skinning:I.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:Ce,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:De,decodeVideoTexture:Le&&x.map.isVideoTexture===!0&&at.getTransfer(x.map.colorSpace)===dt,decodeVideoTextureEmissive:gt&&x.emissiveMap.isVideoTexture===!0&&at.getTransfer(x.emissiveMap.colorSpace)===dt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===xn,flipSided:x.side===ln,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:re&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&x.extensions.multiDraw===!0||le)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Qe.vertexUv1s=l.has(1),Qe.vertexUv2s=l.has(2),Qe.vertexUv3s=l.has(3),l.clear(),Qe}function h(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)b.push(P),b.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(y(b,x),M(b,x),b.push(n.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function y(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function M(x,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),x.push(o.mask)}function E(x){const b=_[x.type];let P;if(b){const V=ni[b];P=jp.clone(V.uniforms)}else P=x.uniforms;return P}function A(x,b){let P=u.get(b);return P!==void 0?++P.usedTimes:(P=new i0(n,b,x,s),f.push(P),u.set(b,P)),P}function w(x){if(--x.usedTimes===0){const b=f.indexOf(x);f[b]=f[f.length-1],f.pop(),u.delete(x.cacheKey),x.destroy()}}function R(x){c.remove(x)}function N(){c.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:E,acquireProgram:A,releaseProgram:w,releaseShaderCache:R,programs:f,dispose:N}}function l0(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function c0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Xf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function qf(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(u,d,p,_,v,m){let h=n[e];return h===void 0?(h={id:u.id,object:u,geometry:d,material:p,groupOrder:_,renderOrder:u.renderOrder,z:v,group:m},n[e]=h):(h.id=u.id,h.object=u,h.geometry=d,h.material=p,h.groupOrder=_,h.renderOrder=u.renderOrder,h.z=v,h.group=m),e++,h}function o(u,d,p,_,v,m){const h=a(u,d,p,_,v,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function c(u,d,p,_,v,m){const h=a(u,d,p,_,v,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function l(u,d){t.length>1&&t.sort(u||c0),i.length>1&&i.sort(d||Xf),r.length>1&&r.sort(d||Xf)}function f(){for(let u=e,d=n.length;u<d;u++){const p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:f,sort:l}}function u0(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new qf,n.set(i,[a])):r>=s.length?(a=new qf,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function f0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new lt};break;case"SpotLight":t={position:new z,direction:new z,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":t={color:new lt,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function d0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let h0=0;function p0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function m0(n){const e=new f0,t=d0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new z);const r=new z,s=new yt,a=new yt;function o(l){let f=0,u=0,d=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let p=0,_=0,v=0,m=0,h=0,y=0,M=0,E=0,A=0,w=0,R=0;l.sort(p0);for(let x=0,b=l.length;x<b;x++){const P=l[x],V=P.color,I=P.intensity,H=P.distance;let q=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===qr?q=P.shadow.map.texture:q=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)f+=V.r*I,u+=V.g*I,d+=V.b*I;else if(P.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(P.sh.coefficients[F],I);R++}else if(P.isDirectionalLight){const F=e.get(P);if(F.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const B=P.shadow,J=t.get(P);J.shadowIntensity=B.intensity,J.shadowBias=B.bias,J.shadowNormalBias=B.normalBias,J.shadowRadius=B.radius,J.shadowMapSize=B.mapSize,i.directionalShadow[p]=J,i.directionalShadowMap[p]=q,i.directionalShadowMatrix[p]=P.shadow.matrix,y++}i.directional[p]=F,p++}else if(P.isSpotLight){const F=e.get(P);F.position.setFromMatrixPosition(P.matrixWorld),F.color.copy(V).multiplyScalar(I),F.distance=H,F.coneCos=Math.cos(P.angle),F.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),F.decay=P.decay,i.spot[v]=F;const B=P.shadow;if(P.map&&(i.spotLightMap[A]=P.map,A++,B.updateMatrices(P),P.castShadow&&w++),i.spotLightMatrix[v]=B.matrix,P.castShadow){const J=t.get(P);J.shadowIntensity=B.intensity,J.shadowBias=B.bias,J.shadowNormalBias=B.normalBias,J.shadowRadius=B.radius,J.shadowMapSize=B.mapSize,i.spotShadow[v]=J,i.spotShadowMap[v]=q,E++}v++}else if(P.isRectAreaLight){const F=e.get(P);F.color.copy(V).multiplyScalar(I),F.halfWidth.set(P.width*.5,0,0),F.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=F,m++}else if(P.isPointLight){const F=e.get(P);if(F.color.copy(P.color).multiplyScalar(P.intensity),F.distance=P.distance,F.decay=P.decay,P.castShadow){const B=P.shadow,J=t.get(P);J.shadowIntensity=B.intensity,J.shadowBias=B.bias,J.shadowNormalBias=B.normalBias,J.shadowRadius=B.radius,J.shadowMapSize=B.mapSize,J.shadowCameraNear=B.camera.near,J.shadowCameraFar=B.camera.far,i.pointShadow[_]=J,i.pointShadowMap[_]=q,i.pointShadowMatrix[_]=P.shadow.matrix,M++}i.point[_]=F,_++}else if(P.isHemisphereLight){const F=e.get(P);F.skyColor.copy(P.color).multiplyScalar(I),F.groundColor.copy(P.groundColor).multiplyScalar(I),i.hemi[h]=F,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=u,i.ambient[2]=d;const N=i.hash;(N.directionalLength!==p||N.pointLength!==_||N.spotLength!==v||N.rectAreaLength!==m||N.hemiLength!==h||N.numDirectionalShadows!==y||N.numPointShadows!==M||N.numSpotShadows!==E||N.numSpotMaps!==A||N.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=E+A-w,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=R,N.directionalLength=p,N.pointLength=_,N.spotLength=v,N.rectAreaLength=m,N.hemiLength=h,N.numDirectionalShadows=y,N.numPointShadows=M,N.numSpotShadows=E,N.numSpotMaps=A,N.numLightProbes=R,i.version=h0++)}function c(l,f){let u=0,d=0,p=0,_=0,v=0;const m=f.matrixWorldInverse;for(let h=0,y=l.length;h<y;h++){const M=l[h];if(M.isDirectionalLight){const E=i.directional[u];E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),u++}else if(M.isSpotLight){const E=i.spot[p];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),p++}else if(M.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),a.identity(),s.copy(M.matrixWorld),s.premultiply(m),a.extractRotation(s),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const E=i.hemi[v];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(m),v++}}}return{setup:o,setupView:c,state:i}}function Yf(n){const e=new m0(n),t=[],i=[];function r(f){l.camera=f,t.length=0,i.length=0}function s(f){t.push(f)}function a(f){i.push(f)}function o(){e.setup(t)}function c(f){e.setupView(t,f)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function _0(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Yf(n),e.set(r,[o])):s>=a.length?(o=new Yf(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const g0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,v0=`uniform sampler2D shadow_pass;
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
}`,x0=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],S0=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],$f=new yt,Ys=new z,rc=new z;function M0(n,e,t){let i=new Xl;const r=new Ze,s=new Ze,a=new bt,o=new cm,c=new um,l={},f=t.maxTextureSize,u={[Hi]:ln,[ln]:Hi,[xn]:xn},d=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:g0,fragmentShader:v0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new Ai;_.setAttribute("position",new ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new yn(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ua;let h=this.type;this.render=function(w,R,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;w.type===ep&&(Ve("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),w.type=ua);const x=n.getRenderTarget(),b=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),V=n.state;V.setBlending(mi),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const I=h!==this.type;I&&R.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(q=>q.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,q=w.length;H<q;H++){const F=w[H],B=F.shadow;if(B===void 0){Ve("WebGLShadowMap:",F,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const J=B.getFrameExtents();if(r.multiply(J),s.copy(B.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/J.x),r.x=s.x*J.x,B.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/J.y),r.y=s.y*J.y,B.mapSize.y=s.y)),B.map===null||I===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Cs){if(F.isPointLight){Ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Jn(r.x,r.y,{format:qr,type:gi,minFilter:Et,magFilter:Et,generateMipmaps:!1}),B.map.texture.name=F.name+".shadowMap",B.map.depthTexture=new Ws(r.x,r.y,Kn),B.map.depthTexture.name=F.name+".shadowMapDepth",B.map.depthTexture.format=vi,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=kt,B.map.depthTexture.magFilter=kt}else{F.isPointLight?(B.map=new hf(r.x),B.map.depthTexture=new am(r.x,Zn)):(B.map=new Jn(r.x,r.y),B.map.depthTexture=new Ws(r.x,r.y,Zn)),B.map.depthTexture.name=F.name+".shadowMap",B.map.depthTexture.format=vi;const ae=n.state.buffers.depth.getReversed();this.type===ua?(B.map.depthTexture.compareFunction=ae?_l:ml,B.map.depthTexture.minFilter=Et,B.map.depthTexture.magFilter=Et):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=kt,B.map.depthTexture.magFilter=kt)}B.camera.updateProjectionMatrix()}const se=B.map.isWebGLCubeRenderTarget?6:1;for(let ae=0;ae<se;ae++){if(B.map.isWebGLCubeRenderTarget)n.setRenderTarget(B.map,ae),n.clear();else{ae===0&&(n.setRenderTarget(B.map),n.clear());const ce=B.getViewport(ae);a.set(s.x*ce.x,s.y*ce.y,s.x*ce.z,s.y*ce.w),V.viewport(a)}if(F.isPointLight){const ce=B.camera,Ce=B.matrix,we=F.distance||ce.far;we!==ce.far&&(ce.far=we,ce.updateProjectionMatrix()),Ys.setFromMatrixPosition(F.matrixWorld),ce.position.copy(Ys),rc.copy(ce.position),rc.add(x0[ae]),ce.up.copy(S0[ae]),ce.lookAt(rc),ce.updateMatrixWorld(),Ce.makeTranslation(-Ys.x,-Ys.y,-Ys.z),$f.multiplyMatrices(ce.projectionMatrix,ce.matrixWorldInverse),B._frustum.setFromProjectionMatrix($f,ce.coordinateSystem,ce.reversedDepth)}else B.updateMatrices(F);i=B.getFrustum(),E(R,N,B.camera,F,this.type)}B.isPointLightShadow!==!0&&this.type===Cs&&y(B,N),B.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(x,b,P)};function y(w,R){const N=e.update(v);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Jn(r.x,r.y,{format:qr,type:gi})),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(R,null,N,d,v,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(R,null,N,p,v,null)}function M(w,R,N,x){let b=null;const P=N.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)b=P;else if(b=N.isPointLight===!0?c:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const V=b.uuid,I=R.uuid;let H=l[V];H===void 0&&(H={},l[V]=H);let q=H[I];q===void 0&&(q=b.clone(),H[I]=q,R.addEventListener("dispose",A)),b=q}if(b.visible=R.visible,b.wireframe=R.wireframe,x===Cs?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:u[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,N.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const V=n.properties.get(b);V.light=N}return b}function E(w,R,N,x,b){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===Cs)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,w.matrixWorld);const I=e.update(w),H=w.material;if(Array.isArray(H)){const q=I.groups;for(let F=0,B=q.length;F<B;F++){const J=q[F],se=H[J.materialIndex];if(se&&se.visible){const ae=M(w,se,x,b);w.onBeforeShadow(n,w,R,N,I,ae,J),n.renderBufferDirect(N,null,I,ae,w,J),w.onAfterShadow(n,w,R,N,I,ae,J)}}}else if(H.visible){const q=M(w,H,x,b);w.onBeforeShadow(n,w,R,N,I,q,null),n.renderBufferDirect(N,null,I,q,w,null),w.onAfterShadow(n,w,R,N,I,q,null)}}const V=w.children;for(let I=0,H=V.length;I<H;I++)E(V[I],R,N,x,b)}function A(w){w.target.removeEventListener("dispose",A);for(const N in l){const x=l[N],b=w.target.uuid;b in x&&(x[b].dispose(),delete x[b])}}}const E0={[xo]:So,[Mo]:bo,[Eo]:To,[Wr]:yo,[So]:xo,[bo]:Mo,[To]:Eo,[yo]:Wr};function y0(n,e){function t(){let D=!1;const te=new bt;let K=null;const ue=new bt(0,0,0,0);return{setMask:function(j){K!==j&&!D&&(n.colorMask(j,j,j,j),K=j)},setLocked:function(j){D=j},setClear:function(j,$,re,De,Qe){Qe===!0&&(j*=De,$*=De,re*=De),te.set(j,$,re,De),ue.equals(te)===!1&&(n.clearColor(j,$,re,De),ue.copy(te))},reset:function(){D=!1,K=null,ue.set(-1,0,0,0)}}}function i(){let D=!1,te=!1,K=null,ue=null,j=null;return{setReversed:function($){if(te!==$){const re=e.get("EXT_clip_control");$?re.clipControlEXT(re.LOWER_LEFT_EXT,re.ZERO_TO_ONE_EXT):re.clipControlEXT(re.LOWER_LEFT_EXT,re.NEGATIVE_ONE_TO_ONE_EXT),te=$;const De=j;j=null,this.setClear(De)}},getReversed:function(){return te},setTest:function($){$?Q(n.DEPTH_TEST):ee(n.DEPTH_TEST)},setMask:function($){K!==$&&!D&&(n.depthMask($),K=$)},setFunc:function($){if(te&&($=E0[$]),ue!==$){switch($){case xo:n.depthFunc(n.NEVER);break;case So:n.depthFunc(n.ALWAYS);break;case Mo:n.depthFunc(n.LESS);break;case Wr:n.depthFunc(n.LEQUAL);break;case Eo:n.depthFunc(n.EQUAL);break;case yo:n.depthFunc(n.GEQUAL);break;case bo:n.depthFunc(n.GREATER);break;case To:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ue=$}},setLocked:function($){D=$},setClear:function($){j!==$&&(te&&($=1-$),n.clearDepth($),j=$)},reset:function(){D=!1,K=null,ue=null,j=null,te=!1}}}function r(){let D=!1,te=null,K=null,ue=null,j=null,$=null,re=null,De=null,Qe=null;return{setTest:function(et){D||(et?Q(n.STENCIL_TEST):ee(n.STENCIL_TEST))},setMask:function(et){te!==et&&!D&&(n.stencilMask(et),te=et)},setFunc:function(et,Kt,Lt){(K!==et||ue!==Kt||j!==Lt)&&(n.stencilFunc(et,Kt,Lt),K=et,ue=Kt,j=Lt)},setOp:function(et,Kt,Lt){($!==et||re!==Kt||De!==Lt)&&(n.stencilOp(et,Kt,Lt),$=et,re=Kt,De=Lt)},setLocked:function(et){D=et},setClear:function(et){Qe!==et&&(n.clearStencil(et),Qe=et)},reset:function(){D=!1,te=null,K=null,ue=null,j=null,$=null,re=null,De=null,Qe=null}}}const s=new t,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let f={},u={},d=new WeakMap,p=[],_=null,v=!1,m=null,h=null,y=null,M=null,E=null,A=null,w=null,R=new lt(0,0,0),N=0,x=!1,b=null,P=null,V=null,I=null,H=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,B=0;const J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(J)[1]),F=B>=1):J.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),F=B>=2);let se=null,ae={};const ce=n.getParameter(n.SCISSOR_BOX),Ce=n.getParameter(n.VIEWPORT),we=new bt().fromArray(ce),ke=new bt().fromArray(Ce);function Be(D,te,K,ue){const j=new Uint8Array(4),$=n.createTexture();n.bindTexture(D,$),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let re=0;re<K;re++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(te,0,n.RGBA,1,1,ue,0,n.RGBA,n.UNSIGNED_BYTE,j):n.texImage2D(te+re,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,j);return $}const k={};k[n.TEXTURE_2D]=Be(n.TEXTURE_2D,n.TEXTURE_2D,1),k[n.TEXTURE_CUBE_MAP]=Be(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),k[n.TEXTURE_2D_ARRAY]=Be(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),k[n.TEXTURE_3D]=Be(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(n.DEPTH_TEST),a.setFunc(Wr),ze(!1),_t(pu),Q(n.CULL_FACE),Ke(mi);function Q(D){f[D]!==!0&&(n.enable(D),f[D]=!0)}function ee(D){f[D]!==!1&&(n.disable(D),f[D]=!1)}function ge(D,te){return u[D]!==te?(n.bindFramebuffer(D,te),u[D]=te,D===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=te),D===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=te),!0):!1}function le(D,te){let K=p,ue=!1;if(D){K=d.get(te),K===void 0&&(K=[],d.set(te,K));const j=D.textures;if(K.length!==j.length||K[0]!==n.COLOR_ATTACHMENT0){for(let $=0,re=j.length;$<re;$++)K[$]=n.COLOR_ATTACHMENT0+$;K.length=j.length,ue=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,ue=!0);ue&&n.drawBuffers(K)}function Le(D){return _!==D?(n.useProgram(D),_=D,!0):!1}const Pe={[ur]:n.FUNC_ADD,[np]:n.FUNC_SUBTRACT,[ip]:n.FUNC_REVERSE_SUBTRACT};Pe[rp]=n.MIN,Pe[sp]=n.MAX;const ye={[ap]:n.ZERO,[op]:n.ONE,[lp]:n.SRC_COLOR,[go]:n.SRC_ALPHA,[pp]:n.SRC_ALPHA_SATURATE,[dp]:n.DST_COLOR,[up]:n.DST_ALPHA,[cp]:n.ONE_MINUS_SRC_COLOR,[vo]:n.ONE_MINUS_SRC_ALPHA,[hp]:n.ONE_MINUS_DST_COLOR,[fp]:n.ONE_MINUS_DST_ALPHA,[mp]:n.CONSTANT_COLOR,[_p]:n.ONE_MINUS_CONSTANT_COLOR,[gp]:n.CONSTANT_ALPHA,[vp]:n.ONE_MINUS_CONSTANT_ALPHA};function Ke(D,te,K,ue,j,$,re,De,Qe,et){if(D===mi){v===!0&&(ee(n.BLEND),v=!1);return}if(v===!1&&(Q(n.BLEND),v=!0),D!==tp){if(D!==m||et!==x){if((h!==ur||E!==ur)&&(n.blendEquation(n.FUNC_ADD),h=ur,E=ur),et)switch(D){case kr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mu:n.blendFunc(n.ONE,n.ONE);break;case _u:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case gu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:st("WebGLState: Invalid blending: ",D);break}else switch(D){case kr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case _u:st("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gu:st("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:st("WebGLState: Invalid blending: ",D);break}y=null,M=null,A=null,w=null,R.set(0,0,0),N=0,m=D,x=et}return}j=j||te,$=$||K,re=re||ue,(te!==h||j!==E)&&(n.blendEquationSeparate(Pe[te],Pe[j]),h=te,E=j),(K!==y||ue!==M||$!==A||re!==w)&&(n.blendFuncSeparate(ye[K],ye[ue],ye[$],ye[re]),y=K,M=ue,A=$,w=re),(De.equals(R)===!1||Qe!==N)&&(n.blendColor(De.r,De.g,De.b,Qe),R.copy(De),N=Qe),m=D,x=!1}function rt(D,te){D.side===xn?ee(n.CULL_FACE):Q(n.CULL_FACE);let K=D.side===ln;te&&(K=!K),ze(K),D.blending===kr&&D.transparent===!1?Ke(mi):Ke(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const ue=D.stencilWrite;o.setTest(ue),ue&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),gt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Q(n.SAMPLE_ALPHA_TO_COVERAGE):ee(n.SAMPLE_ALPHA_TO_COVERAGE)}function ze(D){b!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),b=D)}function _t(D){D!==Jh?(Q(n.CULL_FACE),D!==P&&(D===pu?n.cullFace(n.BACK):D===Qh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ee(n.CULL_FACE),P=D}function C(D){D!==V&&(F&&n.lineWidth(D),V=D)}function gt(D,te,K){D?(Q(n.POLYGON_OFFSET_FILL),(I!==te||H!==K)&&(n.polygonOffset(te,K),I=te,H=K)):ee(n.POLYGON_OFFSET_FILL)}function ot(D){D?Q(n.SCISSOR_TEST):ee(n.SCISSOR_TEST)}function ht(D){D===void 0&&(D=n.TEXTURE0+q-1),se!==D&&(n.activeTexture(D),se=D)}function Te(D,te,K){K===void 0&&(se===null?K=n.TEXTURE0+q-1:K=se);let ue=ae[K];ue===void 0&&(ue={type:void 0,texture:void 0},ae[K]=ue),(ue.type!==D||ue.texture!==te)&&(se!==K&&(n.activeTexture(K),se=K),n.bindTexture(D,te||k[D]),ue.type=D,ue.texture=te)}function T(){const D=ae[se];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function g(){try{n.compressedTexImage2D(...arguments)}catch(D){st("WebGLState:",D)}}function L(){try{n.compressedTexImage3D(...arguments)}catch(D){st("WebGLState:",D)}}function Y(){try{n.texSubImage2D(...arguments)}catch(D){st("WebGLState:",D)}}function ne(){try{n.texSubImage3D(...arguments)}catch(D){st("WebGLState:",D)}}function X(){try{n.compressedTexSubImage2D(...arguments)}catch(D){st("WebGLState:",D)}}function xe(){try{n.compressedTexSubImage3D(...arguments)}catch(D){st("WebGLState:",D)}}function de(){try{n.texStorage2D(...arguments)}catch(D){st("WebGLState:",D)}}function Ee(){try{n.texStorage3D(...arguments)}catch(D){st("WebGLState:",D)}}function Ne(){try{n.texImage2D(...arguments)}catch(D){st("WebGLState:",D)}}function oe(){try{n.texImage3D(...arguments)}catch(D){st("WebGLState:",D)}}function pe(D){we.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),we.copy(D))}function Me(D){ke.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),ke.copy(D))}function Ae(D,te){let K=l.get(te);K===void 0&&(K=new WeakMap,l.set(te,K));let ue=K.get(D);ue===void 0&&(ue=n.getUniformBlockIndex(te,D.name),K.set(D,ue))}function he(D,te){const ue=l.get(te).get(D);c.get(te)!==ue&&(n.uniformBlockBinding(te,ue,D.__bindingPointIndex),c.set(te,ue))}function We(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},se=null,ae={},u={},d=new WeakMap,p=[],_=null,v=!1,m=null,h=null,y=null,M=null,E=null,A=null,w=null,R=new lt(0,0,0),N=0,x=!1,b=null,P=null,V=null,I=null,H=null,we.set(0,0,n.canvas.width,n.canvas.height),ke.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Q,disable:ee,bindFramebuffer:ge,drawBuffers:le,useProgram:Le,setBlending:Ke,setMaterial:rt,setFlipSided:ze,setCullFace:_t,setLineWidth:C,setPolygonOffset:gt,setScissorTest:ot,activeTexture:ht,bindTexture:Te,unbindTexture:T,compressedTexImage2D:g,compressedTexImage3D:L,texImage2D:Ne,texImage3D:oe,updateUBOMapping:Ae,uniformBlockBinding:he,texStorage2D:de,texStorage3D:Ee,texSubImage2D:Y,texSubImage3D:ne,compressedTexSubImage2D:X,compressedTexSubImage3D:xe,scissor:pe,viewport:Me,reset:We}}function b0(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ze,f=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,g){return p?new OffscreenCanvas(T,g):Ls("canvas")}function v(T,g,L){let Y=1;const ne=Te(T);if((ne.width>L||ne.height>L)&&(Y=L/Math.max(ne.width,ne.height)),Y<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const X=Math.floor(Y*ne.width),xe=Math.floor(Y*ne.height);u===void 0&&(u=_(X,xe));const de=g?_(X,xe):u;return de.width=X,de.height=xe,de.getContext("2d").drawImage(T,0,0,X,xe),Ve("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+X+"x"+xe+")."),de}else return"data"in T&&Ve("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),T;return T}function m(T){return T.generateMipmaps}function h(T){n.generateMipmap(T)}function y(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(T,g,L,Y,ne=!1){if(T!==null){if(n[T]!==void 0)return n[T];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let X=g;if(g===n.RED&&(L===n.FLOAT&&(X=n.R32F),L===n.HALF_FLOAT&&(X=n.R16F),L===n.UNSIGNED_BYTE&&(X=n.R8)),g===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(X=n.R8UI),L===n.UNSIGNED_SHORT&&(X=n.R16UI),L===n.UNSIGNED_INT&&(X=n.R32UI),L===n.BYTE&&(X=n.R8I),L===n.SHORT&&(X=n.R16I),L===n.INT&&(X=n.R32I)),g===n.RG&&(L===n.FLOAT&&(X=n.RG32F),L===n.HALF_FLOAT&&(X=n.RG16F),L===n.UNSIGNED_BYTE&&(X=n.RG8)),g===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(X=n.RG8UI),L===n.UNSIGNED_SHORT&&(X=n.RG16UI),L===n.UNSIGNED_INT&&(X=n.RG32UI),L===n.BYTE&&(X=n.RG8I),L===n.SHORT&&(X=n.RG16I),L===n.INT&&(X=n.RG32I)),g===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(X=n.RGB8UI),L===n.UNSIGNED_SHORT&&(X=n.RGB16UI),L===n.UNSIGNED_INT&&(X=n.RGB32UI),L===n.BYTE&&(X=n.RGB8I),L===n.SHORT&&(X=n.RGB16I),L===n.INT&&(X=n.RGB32I)),g===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),L===n.UNSIGNED_INT&&(X=n.RGBA32UI),L===n.BYTE&&(X=n.RGBA8I),L===n.SHORT&&(X=n.RGBA16I),L===n.INT&&(X=n.RGBA32I)),g===n.RGB&&(L===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),L===n.UNSIGNED_INT_10F_11F_11F_REV&&(X=n.R11F_G11F_B10F)),g===n.RGBA){const xe=ne?ga:at.getTransfer(Y);L===n.FLOAT&&(X=n.RGBA32F),L===n.HALF_FLOAT&&(X=n.RGBA16F),L===n.UNSIGNED_BYTE&&(X=xe===dt?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function E(T,g){let L;return T?g===null||g===Zn||g===Ds?L=n.DEPTH24_STENCIL8:g===Kn?L=n.DEPTH32F_STENCIL8:g===Ps&&(L=n.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Zn||g===Ds?L=n.DEPTH_COMPONENT24:g===Kn?L=n.DEPTH_COMPONENT32F:g===Ps&&(L=n.DEPTH_COMPONENT16),L}function A(T,g){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==kt&&T.minFilter!==Et?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function w(T){const g=T.target;g.removeEventListener("dispose",w),N(g),g.isVideoTexture&&f.delete(g)}function R(T){const g=T.target;g.removeEventListener("dispose",R),b(g)}function N(T){const g=i.get(T);if(g.__webglInit===void 0)return;const L=T.source,Y=d.get(L);if(Y){const ne=Y[g.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&x(T),Object.keys(Y).length===0&&d.delete(L)}i.remove(T)}function x(T){const g=i.get(T);n.deleteTexture(g.__webglTexture);const L=T.source,Y=d.get(L);delete Y[g.__cacheKey],a.memory.textures--}function b(T){const g=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(g.__webglFramebuffer[Y]))for(let ne=0;ne<g.__webglFramebuffer[Y].length;ne++)n.deleteFramebuffer(g.__webglFramebuffer[Y][ne]);else n.deleteFramebuffer(g.__webglFramebuffer[Y]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[Y])}else{if(Array.isArray(g.__webglFramebuffer))for(let Y=0;Y<g.__webglFramebuffer.length;Y++)n.deleteFramebuffer(g.__webglFramebuffer[Y]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let Y=0;Y<g.__webglColorRenderbuffer.length;Y++)g.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[Y]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const L=T.textures;for(let Y=0,ne=L.length;Y<ne;Y++){const X=i.get(L[Y]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),a.memory.textures--),i.remove(L[Y])}i.remove(T)}let P=0;function V(){P=0}function I(){const T=P;return T>=r.maxTextures&&Ve("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),P+=1,T}function H(T){const g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function q(T,g){const L=i.get(T);if(T.isVideoTexture&&ot(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&L.__version!==T.version){const Y=T.image;if(Y===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{k(L,T,g);return}}else T.isExternalTexture&&(L.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+g)}function F(T,g){const L=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&L.__version!==T.version){k(L,T,g);return}else T.isExternalTexture&&(L.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+g)}function B(T,g){const L=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&L.__version!==T.version){k(L,T,g);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+g)}function J(T,g){const L=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&L.__version!==T.version){Q(L,T,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+g)}const se={[Ro]:n.REPEAT,[_i]:n.CLAMP_TO_EDGE,[Co]:n.MIRRORED_REPEAT},ae={[kt]:n.NEAREST,[Mp]:n.NEAREST_MIPMAP_NEAREST,[da]:n.NEAREST_MIPMAP_LINEAR,[Et]:n.LINEAR,[Po]:n.LINEAR_MIPMAP_NEAREST,[dr]:n.LINEAR_MIPMAP_LINEAR},ce={[bp]:n.NEVER,[Cp]:n.ALWAYS,[Tp]:n.LESS,[ml]:n.LEQUAL,[Ap]:n.EQUAL,[_l]:n.GEQUAL,[wp]:n.GREATER,[Rp]:n.NOTEQUAL};function Ce(T,g){if(g.type===Kn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Et||g.magFilter===Po||g.magFilter===da||g.magFilter===dr||g.minFilter===Et||g.minFilter===Po||g.minFilter===da||g.minFilter===dr)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,se[g.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,se[g.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,se[g.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,ae[g.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,ae[g.minFilter]),g.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,ce[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===kt||g.minFilter!==da&&g.minFilter!==dr||g.type===Kn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function we(T,g){let L=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",w));const Y=g.source;let ne=d.get(Y);ne===void 0&&(ne={},d.set(Y,ne));const X=H(g);if(X!==T.__cacheKey){ne[X]===void 0&&(ne[X]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,L=!0),ne[X].usedTimes++;const xe=ne[T.__cacheKey];xe!==void 0&&(ne[T.__cacheKey].usedTimes--,xe.usedTimes===0&&x(g)),T.__cacheKey=X,T.__webglTexture=ne[X].texture}return L}function ke(T,g,L){return Math.floor(Math.floor(T/L)/g)}function Be(T,g,L,Y){const X=T.updateRanges;if(X.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,L,Y,g.data);else{X.sort((oe,pe)=>oe.start-pe.start);let xe=0;for(let oe=1;oe<X.length;oe++){const pe=X[xe],Me=X[oe],Ae=pe.start+pe.count,he=ke(Me.start,g.width,4),We=ke(pe.start,g.width,4);Me.start<=Ae+1&&he===We&&ke(Me.start+Me.count-1,g.width,4)===he?pe.count=Math.max(pe.count,Me.start+Me.count-pe.start):(++xe,X[xe]=Me)}X.length=xe+1;const de=n.getParameter(n.UNPACK_ROW_LENGTH),Ee=n.getParameter(n.UNPACK_SKIP_PIXELS),Ne=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let oe=0,pe=X.length;oe<pe;oe++){const Me=X[oe],Ae=Math.floor(Me.start/4),he=Math.ceil(Me.count/4),We=Ae%g.width,D=Math.floor(Ae/g.width),te=he,K=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,We),n.pixelStorei(n.UNPACK_SKIP_ROWS,D),t.texSubImage2D(n.TEXTURE_2D,0,We,D,te,K,L,Y,g.data)}T.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,de),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ee),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ne)}}function k(T,g,L){let Y=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(Y=n.TEXTURE_3D);const ne=we(T,g),X=g.source;t.bindTexture(Y,T.__webglTexture,n.TEXTURE0+L);const xe=i.get(X);if(X.version!==xe.__version||ne===!0){t.activeTexture(n.TEXTURE0+L);const de=at.getPrimaries(at.workingColorSpace),Ee=g.colorSpace===ki?null:at.getPrimaries(g.colorSpace),Ne=g.colorSpace===ki||de===Ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let oe=v(g.image,!1,r.maxTextureSize);oe=ht(g,oe);const pe=s.convert(g.format,g.colorSpace),Me=s.convert(g.type);let Ae=M(g.internalFormat,pe,Me,g.colorSpace,g.isVideoTexture);Ce(Y,g);let he;const We=g.mipmaps,D=g.isVideoTexture!==!0,te=xe.__version===void 0||ne===!0,K=X.dataReady,ue=A(g,oe);if(g.isDepthTexture)Ae=E(g.format===hr,g.type),te&&(D?t.texStorage2D(n.TEXTURE_2D,1,Ae,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,Ae,oe.width,oe.height,0,pe,Me,null));else if(g.isDataTexture)if(We.length>0){D&&te&&t.texStorage2D(n.TEXTURE_2D,ue,Ae,We[0].width,We[0].height);for(let j=0,$=We.length;j<$;j++)he=We[j],D?K&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,he.width,he.height,pe,Me,he.data):t.texImage2D(n.TEXTURE_2D,j,Ae,he.width,he.height,0,pe,Me,he.data);g.generateMipmaps=!1}else D?(te&&t.texStorage2D(n.TEXTURE_2D,ue,Ae,oe.width,oe.height),K&&Be(g,oe,pe,Me)):t.texImage2D(n.TEXTURE_2D,0,Ae,oe.width,oe.height,0,pe,Me,oe.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){D&&te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,Ae,We[0].width,We[0].height,oe.depth);for(let j=0,$=We.length;j<$;j++)if(he=We[j],g.format!==Hn)if(pe!==null)if(D){if(K)if(g.layerUpdates.size>0){const re=Sf(he.width,he.height,g.format,g.type);for(const De of g.layerUpdates){const Qe=he.data.subarray(De*re/he.data.BYTES_PER_ELEMENT,(De+1)*re/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,De,he.width,he.height,1,pe,Qe)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,he.width,he.height,oe.depth,pe,he.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,Ae,he.width,he.height,oe.depth,0,he.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?K&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,he.width,he.height,oe.depth,pe,Me,he.data):t.texImage3D(n.TEXTURE_2D_ARRAY,j,Ae,he.width,he.height,oe.depth,0,pe,Me,he.data)}else{D&&te&&t.texStorage2D(n.TEXTURE_2D,ue,Ae,We[0].width,We[0].height);for(let j=0,$=We.length;j<$;j++)he=We[j],g.format!==Hn?pe!==null?D?K&&t.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,he.width,he.height,pe,he.data):t.compressedTexImage2D(n.TEXTURE_2D,j,Ae,he.width,he.height,0,he.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?K&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,he.width,he.height,pe,Me,he.data):t.texImage2D(n.TEXTURE_2D,j,Ae,he.width,he.height,0,pe,Me,he.data)}else if(g.isDataArrayTexture)if(D){if(te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,Ae,oe.width,oe.height,oe.depth),K)if(g.layerUpdates.size>0){const j=Sf(oe.width,oe.height,g.format,g.type);for(const $ of g.layerUpdates){const re=oe.data.subarray($*j/oe.data.BYTES_PER_ELEMENT,($+1)*j/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,$,oe.width,oe.height,1,pe,Me,re)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,pe,Me,oe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ae,oe.width,oe.height,oe.depth,0,pe,Me,oe.data);else if(g.isData3DTexture)D?(te&&t.texStorage3D(n.TEXTURE_3D,ue,Ae,oe.width,oe.height,oe.depth),K&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,pe,Me,oe.data)):t.texImage3D(n.TEXTURE_3D,0,Ae,oe.width,oe.height,oe.depth,0,pe,Me,oe.data);else if(g.isFramebufferTexture){if(te)if(D)t.texStorage2D(n.TEXTURE_2D,ue,Ae,oe.width,oe.height);else{let j=oe.width,$=oe.height;for(let re=0;re<ue;re++)t.texImage2D(n.TEXTURE_2D,re,Ae,j,$,0,pe,Me,null),j>>=1,$>>=1}}else if(We.length>0){if(D&&te){const j=Te(We[0]);t.texStorage2D(n.TEXTURE_2D,ue,Ae,j.width,j.height)}for(let j=0,$=We.length;j<$;j++)he=We[j],D?K&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,pe,Me,he):t.texImage2D(n.TEXTURE_2D,j,Ae,pe,Me,he);g.generateMipmaps=!1}else if(D){if(te){const j=Te(oe);t.texStorage2D(n.TEXTURE_2D,ue,Ae,j.width,j.height)}K&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe,Me,oe)}else t.texImage2D(n.TEXTURE_2D,0,Ae,pe,Me,oe);m(g)&&h(Y),xe.__version=X.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function Q(T,g,L){if(g.image.length!==6)return;const Y=we(T,g),ne=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+L);const X=i.get(ne);if(ne.version!==X.__version||Y===!0){t.activeTexture(n.TEXTURE0+L);const xe=at.getPrimaries(at.workingColorSpace),de=g.colorSpace===ki?null:at.getPrimaries(g.colorSpace),Ee=g.colorSpace===ki||xe===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Ne=g.isCompressedTexture||g.image[0].isCompressedTexture,oe=g.image[0]&&g.image[0].isDataTexture,pe=[];for(let $=0;$<6;$++)!Ne&&!oe?pe[$]=v(g.image[$],!0,r.maxCubemapSize):pe[$]=oe?g.image[$].image:g.image[$],pe[$]=ht(g,pe[$]);const Me=pe[0],Ae=s.convert(g.format,g.colorSpace),he=s.convert(g.type),We=M(g.internalFormat,Ae,he,g.colorSpace),D=g.isVideoTexture!==!0,te=X.__version===void 0||Y===!0,K=ne.dataReady;let ue=A(g,Me);Ce(n.TEXTURE_CUBE_MAP,g);let j;if(Ne){D&&te&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,We,Me.width,Me.height);for(let $=0;$<6;$++){j=pe[$].mipmaps;for(let re=0;re<j.length;re++){const De=j[re];g.format!==Hn?Ae!==null?D?K&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,re,0,0,De.width,De.height,Ae,De.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,re,We,De.width,De.height,0,De.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,re,0,0,De.width,De.height,Ae,he,De.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,re,We,De.width,De.height,0,Ae,he,De.data)}}}else{if(j=g.mipmaps,D&&te){j.length>0&&ue++;const $=Te(pe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,We,$.width,$.height)}for(let $=0;$<6;$++)if(oe){D?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,pe[$].width,pe[$].height,Ae,he,pe[$].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,We,pe[$].width,pe[$].height,0,Ae,he,pe[$].data);for(let re=0;re<j.length;re++){const Qe=j[re].image[$].image;D?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,re+1,0,0,Qe.width,Qe.height,Ae,he,Qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,re+1,We,Qe.width,Qe.height,0,Ae,he,Qe.data)}}else{D?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ae,he,pe[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,We,Ae,he,pe[$]);for(let re=0;re<j.length;re++){const De=j[re];D?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,re+1,0,0,Ae,he,De.image[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,re+1,We,Ae,he,De.image[$])}}}m(g)&&h(n.TEXTURE_CUBE_MAP),X.__version=ne.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function ee(T,g,L,Y,ne,X){const xe=s.convert(L.format,L.colorSpace),de=s.convert(L.type),Ee=M(L.internalFormat,xe,de,L.colorSpace),Ne=i.get(g),oe=i.get(L);if(oe.__renderTarget=g,!Ne.__hasExternalTextures){const pe=Math.max(1,g.width>>X),Me=Math.max(1,g.height>>X);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,X,Ee,pe,Me,g.depth,0,xe,de,null):t.texImage2D(ne,X,Ee,pe,Me,0,xe,de,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),gt(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,ne,oe.__webglTexture,0,C(g)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,ne,oe.__webglTexture,X),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ge(T,g,L){if(n.bindRenderbuffer(n.RENDERBUFFER,T),g.depthBuffer){const Y=g.depthTexture,ne=Y&&Y.isDepthTexture?Y.type:null,X=E(g.stencilBuffer,ne),xe=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;gt(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,C(g),X,g.width,g.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,C(g),X,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,X,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xe,n.RENDERBUFFER,T)}else{const Y=g.textures;for(let ne=0;ne<Y.length;ne++){const X=Y[ne],xe=s.convert(X.format,X.colorSpace),de=s.convert(X.type),Ee=M(X.internalFormat,xe,de,X.colorSpace);gt(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,C(g),Ee,g.width,g.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,C(g),Ee,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,Ee,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function le(T,g,L){const Y=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=i.get(g.depthTexture);if(ne.__renderTarget=g,(!ne.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Y){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,g.depthTexture.addEventListener("dispose",w)),ne.__webglTexture===void 0){ne.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),Ce(n.TEXTURE_CUBE_MAP,g.depthTexture);const Ne=s.convert(g.depthTexture.format),oe=s.convert(g.depthTexture.type);let pe;g.depthTexture.format===vi?pe=n.DEPTH_COMPONENT24:g.depthTexture.format===hr&&(pe=n.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,pe,g.width,g.height,0,Ne,oe,null)}}else q(g.depthTexture,0);const X=ne.__webglTexture,xe=C(g),de=Y?n.TEXTURE_CUBE_MAP_POSITIVE_X+L:n.TEXTURE_2D,Ee=g.depthTexture.format===hr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(g.depthTexture.format===vi)gt(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ee,de,X,0,xe):n.framebufferTexture2D(n.FRAMEBUFFER,Ee,de,X,0);else if(g.depthTexture.format===hr)gt(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ee,de,X,0,xe):n.framebufferTexture2D(n.FRAMEBUFFER,Ee,de,X,0);else throw new Error("Unknown depthTexture format")}function Le(T){const g=i.get(T),L=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){const Y=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),Y){const ne=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,Y.removeEventListener("dispose",ne)};Y.addEventListener("dispose",ne),g.__depthDisposeCallback=ne}g.__boundDepthTexture=Y}if(T.depthTexture&&!g.__autoAllocateDepthBuffer)if(L)for(let Y=0;Y<6;Y++)le(g.__webglFramebuffer[Y],T,Y);else{const Y=T.texture.mipmaps;Y&&Y.length>0?le(g.__webglFramebuffer[0],T,0):le(g.__webglFramebuffer,T,0)}else if(L){g.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[Y]),g.__webglDepthbuffer[Y]===void 0)g.__webglDepthbuffer[Y]=n.createRenderbuffer(),ge(g.__webglDepthbuffer[Y],T,!1);else{const ne=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=g.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,X)}}else{const Y=T.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),ge(g.__webglDepthbuffer,T,!1);else{const ne=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,X)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pe(T,g,L){const Y=i.get(T);g!==void 0&&ee(Y.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&Le(T)}function ye(T){const g=T.texture,L=i.get(T),Y=i.get(g);T.addEventListener("dispose",R);const ne=T.textures,X=T.isWebGLCubeRenderTarget===!0,xe=ne.length>1;if(xe||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=g.version,a.memory.textures++),X){L.__webglFramebuffer=[];for(let de=0;de<6;de++)if(g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer[de]=[];for(let Ee=0;Ee<g.mipmaps.length;Ee++)L.__webglFramebuffer[de][Ee]=n.createFramebuffer()}else L.__webglFramebuffer[de]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer=[];for(let de=0;de<g.mipmaps.length;de++)L.__webglFramebuffer[de]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(xe)for(let de=0,Ee=ne.length;de<Ee;de++){const Ne=i.get(ne[de]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&gt(T)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let de=0;de<ne.length;de++){const Ee=ne[de];L.__webglColorRenderbuffer[de]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[de]);const Ne=s.convert(Ee.format,Ee.colorSpace),oe=s.convert(Ee.type),pe=M(Ee.internalFormat,Ne,oe,Ee.colorSpace,T.isXRRenderTarget===!0),Me=C(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Me,pe,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,L.__webglColorRenderbuffer[de])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),ge(L.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),Ce(n.TEXTURE_CUBE_MAP,g);for(let de=0;de<6;de++)if(g.mipmaps&&g.mipmaps.length>0)for(let Ee=0;Ee<g.mipmaps.length;Ee++)ee(L.__webglFramebuffer[de][Ee],T,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ee);else ee(L.__webglFramebuffer[de],T,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(g)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let de=0,Ee=ne.length;de<Ee;de++){const Ne=ne[de],oe=i.get(Ne);let pe=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(pe=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,oe.__webglTexture),Ce(pe,Ne),ee(L.__webglFramebuffer,T,Ne,n.COLOR_ATTACHMENT0+de,pe,0),m(Ne)&&h(pe)}t.unbindTexture()}else{let de=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(de=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,Y.__webglTexture),Ce(de,g),g.mipmaps&&g.mipmaps.length>0)for(let Ee=0;Ee<g.mipmaps.length;Ee++)ee(L.__webglFramebuffer[Ee],T,g,n.COLOR_ATTACHMENT0,de,Ee);else ee(L.__webglFramebuffer,T,g,n.COLOR_ATTACHMENT0,de,0);m(g)&&h(de),t.unbindTexture()}T.depthBuffer&&Le(T)}function Ke(T){const g=T.textures;for(let L=0,Y=g.length;L<Y;L++){const ne=g[L];if(m(ne)){const X=y(T),xe=i.get(ne).__webglTexture;t.bindTexture(X,xe),h(X),t.unbindTexture()}}}const rt=[],ze=[];function _t(T){if(T.samples>0){if(gt(T)===!1){const g=T.textures,L=T.width,Y=T.height;let ne=n.COLOR_BUFFER_BIT;const X=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=i.get(T),de=g.length>1;if(de)for(let Ne=0;Ne<g.length;Ne++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const Ee=T.texture.mipmaps;Ee&&Ee.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Ne=0;Ne<g.length;Ne++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),de){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[Ne]);const oe=i.get(g[Ne]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,oe,0)}n.blitFramebuffer(0,0,L,Y,0,0,L,Y,ne,n.NEAREST),c===!0&&(rt.length=0,ze.length=0,rt.push(n.COLOR_ATTACHMENT0+Ne),T.depthBuffer&&T.resolveDepthBuffer===!1&&(rt.push(X),ze.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ze)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,rt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),de)for(let Ne=0;Ne<g.length;Ne++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,xe.__webglColorRenderbuffer[Ne]);const oe=i.get(g[Ne]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,oe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const g=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function C(T){return Math.min(r.maxSamples,T.samples)}function gt(T){const g=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function ot(T){const g=a.render.frame;f.get(T)!==g&&(f.set(T,g),T.update())}function ht(T,g){const L=T.colorSpace,Y=T.format,ne=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||L!==Yr&&L!==ki&&(at.getTransfer(L)===dt?(Y!==Hn||ne!==Sn)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):st("WebGLTextures: Unsupported texture color space:",L)),g}function Te(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=I,this.resetTextureUnits=V,this.setTexture2D=q,this.setTexture2DArray=F,this.setTexture3D=B,this.setTextureCube=J,this.rebindTextures=Pe,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=gt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function T0(n,e){function t(i,r=ki){let s;const a=at.getTransfer(r);if(i===Sn)return n.UNSIGNED_BYTE;if(i===Lo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Io)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Cu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Pu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===wu)return n.BYTE;if(i===Ru)return n.SHORT;if(i===Ps)return n.UNSIGNED_SHORT;if(i===Do)return n.INT;if(i===Zn)return n.UNSIGNED_INT;if(i===Kn)return n.FLOAT;if(i===gi)return n.HALF_FLOAT;if(i===Du)return n.ALPHA;if(i===Lu)return n.RGB;if(i===Hn)return n.RGBA;if(i===vi)return n.DEPTH_COMPONENT;if(i===hr)return n.DEPTH_STENCIL;if(i===Iu)return n.RED;if(i===Uo)return n.RED_INTEGER;if(i===qr)return n.RG;if(i===No)return n.RG_INTEGER;if(i===Fo)return n.RGBA_INTEGER;if(i===ha||i===pa||i===ma||i===_a)if(a===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ha)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===pa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ma)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===_a)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ha)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===pa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ma)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===_a)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Oo||i===Bo||i===zo||i===Vo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Oo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Bo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===zo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Vo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Go||i===Ho||i===ko||i===Wo||i===Xo||i===qo||i===Yo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Go||i===Ho)return a===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ko)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Wo)return s.COMPRESSED_R11_EAC;if(i===Xo)return s.COMPRESSED_SIGNED_R11_EAC;if(i===qo)return s.COMPRESSED_RG11_EAC;if(i===Yo)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===$o||i===Zo||i===Ko||i===jo||i===Jo||i===Qo||i===el||i===tl||i===nl||i===il||i===rl||i===sl||i===al||i===ol)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===$o)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Zo)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ko)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===jo)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Jo)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Qo)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===el)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===tl)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===nl)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===il)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===rl)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===sl)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===al)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ol)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ll||i===cl||i===ul)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ll)return a===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===cl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ul)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===fl||i===dl||i===hl||i===pl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===fl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===dl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===hl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===pl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ds?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const A0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,w0=`
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

}`;class R0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new pf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new bn({vertexShader:A0,fragmentShader:w0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new yn(new Ki(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class C0 extends Zr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,f=null,u=null,d=null,p=null,_=null;const v=typeof XRWebGLBinding<"u",m=new R0,h={},y=t.getContextAttributes();let M=null,E=null;const A=[],w=[],R=new Ze;let N=null;const x=new tn;x.viewport=new bt;const b=new tn;b.viewport=new bt;const P=[x,b],V=new vm;let I=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let Q=A[k];return Q===void 0&&(Q=new kl,A[k]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(k){let Q=A[k];return Q===void 0&&(Q=new kl,A[k]=Q),Q.getGripSpace()},this.getHand=function(k){let Q=A[k];return Q===void 0&&(Q=new kl,A[k]=Q),Q.getHandSpace()};function q(k){const Q=w.indexOf(k.inputSource);if(Q===-1)return;const ee=A[Q];ee!==void 0&&(ee.update(k.inputSource,k.frame,l||a),ee.dispatchEvent({type:k.type,data:k.inputSource}))}function F(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",B);for(let k=0;k<A.length;k++){const Q=w[k];Q!==null&&(w[k]=null,A[k].disconnect(Q))}I=null,H=null,m.reset();for(const k in h)delete h[k];e.setRenderTarget(M),p=null,d=null,u=null,r=null,E=null,Be.stop(),i.isPresenting=!1,e.setPixelRatio(N),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,i.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,i.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",F),r.addEventListener("inputsourceschange",B),y.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ee=null,ge=null,le=null;y.depth&&(le=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=y.stencil?hr:vi,ge=y.stencil?Ds:Zn);const Le={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(Le),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new Jn(d.textureWidth,d.textureHeight,{format:Hn,type:Sn,depthTexture:new Ws(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ee={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ee),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new Jn(p.framebufferWidth,p.framebufferHeight,{format:Hn,type:Sn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Be.setContext(r),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function B(k){for(let Q=0;Q<k.removed.length;Q++){const ee=k.removed[Q],ge=w.indexOf(ee);ge>=0&&(w[ge]=null,A[ge].disconnect(ee))}for(let Q=0;Q<k.added.length;Q++){const ee=k.added[Q];let ge=w.indexOf(ee);if(ge===-1){for(let Le=0;Le<A.length;Le++)if(Le>=w.length){w.push(ee),ge=Le;break}else if(w[Le]===null){w[Le]=ee,ge=Le;break}if(ge===-1)break}const le=A[ge];le&&le.connect(ee)}}const J=new z,se=new z;function ae(k,Q,ee){J.setFromMatrixPosition(Q.matrixWorld),se.setFromMatrixPosition(ee.matrixWorld);const ge=J.distanceTo(se),le=Q.projectionMatrix.elements,Le=ee.projectionMatrix.elements,Pe=le[14]/(le[10]-1),ye=le[14]/(le[10]+1),Ke=(le[9]+1)/le[5],rt=(le[9]-1)/le[5],ze=(le[8]-1)/le[0],_t=(Le[8]+1)/Le[0],C=Pe*ze,gt=Pe*_t,ot=ge/(-ze+_t),ht=ot*-ze;if(Q.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(ht),k.translateZ(ot),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),le[10]===-1)k.projectionMatrix.copy(Q.projectionMatrix),k.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const Te=Pe+ot,T=ye+ot,g=C-ht,L=gt+(ge-ht),Y=Ke*ye/T*Te,ne=rt*ye/T*Te;k.projectionMatrix.makePerspective(g,L,Y,ne,Te,T),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function ce(k,Q){Q===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(Q.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;let Q=k.near,ee=k.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(ee=m.depthFar)),V.near=b.near=x.near=Q,V.far=b.far=x.far=ee,(I!==V.near||H!==V.far)&&(r.updateRenderState({depthNear:V.near,depthFar:V.far}),I=V.near,H=V.far),V.layers.mask=k.layers.mask|6,x.layers.mask=V.layers.mask&3,b.layers.mask=V.layers.mask&5;const ge=k.parent,le=V.cameras;ce(V,ge);for(let Le=0;Le<le.length;Le++)ce(le[Le],ge);le.length===2?ae(V,x,b):V.projectionMatrix.copy(x.projectionMatrix),Ce(k,V,ge)};function Ce(k,Q,ee){ee===null?k.matrix.copy(Q.matrixWorld):(k.matrix.copy(ee.matrixWorld),k.matrix.invert(),k.matrix.multiply(Q.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(Q.projectionMatrix),k.projectionMatrixInverse.copy(Q.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=vl*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(k){c=k,d!==null&&(d.fixedFoveation=k),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=k)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(k){return h[k]};let we=null;function ke(k,Q){if(f=Q.getViewerPose(l||a),_=Q,f!==null){const ee=f.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let ge=!1;ee.length!==V.cameras.length&&(V.cameras.length=0,ge=!0);for(let ye=0;ye<ee.length;ye++){const Ke=ee[ye];let rt=null;if(p!==null)rt=p.getViewport(Ke);else{const _t=u.getViewSubImage(d,Ke);rt=_t.viewport,ye===0&&(e.setRenderTargetTextures(E,_t.colorTexture,_t.depthStencilTexture),e.setRenderTarget(E))}let ze=P[ye];ze===void 0&&(ze=new tn,ze.layers.enable(ye),ze.viewport=new bt,P[ye]=ze),ze.matrix.fromArray(Ke.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(Ke.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(rt.x,rt.y,rt.width,rt.height),ye===0&&(V.matrix.copy(ze.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),ge===!0&&V.cameras.push(ze)}const le=r.enabledFeatures;if(le&&le.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){u=i.getBinding();const ye=u.getDepthInformation(ee[0]);ye&&ye.isValid&&ye.texture&&m.init(ye,r.renderState)}if(le&&le.includes("camera-access")&&v){e.state.unbindTexture(),u=i.getBinding();for(let ye=0;ye<ee.length;ye++){const Ke=ee[ye].camera;if(Ke){let rt=h[Ke];rt||(rt=new pf,h[Ke]=rt);const ze=u.getCameraImage(Ke);rt.sourceTexture=ze}}}}for(let ee=0;ee<A.length;ee++){const ge=w[ee],le=A[ee];ge!==null&&le!==void 0&&le.update(ge,Q,l||a)}we&&we(k,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),_=null}const Be=new Mf;Be.setAnimationLoop(ke),this.setAnimationLoop=function(k){we=k},this.dispose=function(){}}}const Mr=new Qn,P0=new yt;function D0(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,lf(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,y,M,E){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),u(m,h)):h.isMeshPhongMaterial?(s(m,h),f(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,E)):h.isMeshMatcapMaterial?(s(m,h),_(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),v(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?c(m,h,y,M):h.isSpriteMaterial?l(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===ln&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===ln&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const y=e.get(h),M=y.envMap,E=y.envMapRotation;M&&(m.envMap.value=M,Mr.copy(E),Mr.x*=-1,Mr.y*=-1,Mr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Mr.y*=-1,Mr.z*=-1),m.envMapRotation.value.setFromMatrix4(P0.makeRotationFromEuler(Mr)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function c(m,h,y,M){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*y,m.scale.value=M*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function l(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function f(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function u(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,y){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===ln&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function v(m,h){const y=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function L0(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,M){const E=M.program;i.uniformBlockBinding(y,E)}function l(y,M){let E=r[y.id];E===void 0&&(_(y),E=f(y),r[y.id]=E,y.addEventListener("dispose",m));const A=M.program;i.updateUBOMapping(y,A);const w=e.render.frame;s[y.id]!==w&&(d(y),s[y.id]=w)}function f(y){const M=u();y.__bindingPointIndex=M;const E=n.createBuffer(),A=y.__size,w=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,A,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,E),E}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return st("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const M=r[y.id],E=y.uniforms,A=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let w=0,R=E.length;w<R;w++){const N=Array.isArray(E[w])?E[w]:[E[w]];for(let x=0,b=N.length;x<b;x++){const P=N[x];if(p(P,w,x,A)===!0){const V=P.__offset,I=Array.isArray(P.value)?P.value:[P.value];let H=0;for(let q=0;q<I.length;q++){const F=I[q],B=v(F);typeof F=="number"||typeof F=="boolean"?(P.__data[0]=F,n.bufferSubData(n.UNIFORM_BUFFER,V+H,P.__data)):F.isMatrix3?(P.__data[0]=F.elements[0],P.__data[1]=F.elements[1],P.__data[2]=F.elements[2],P.__data[3]=0,P.__data[4]=F.elements[3],P.__data[5]=F.elements[4],P.__data[6]=F.elements[5],P.__data[7]=0,P.__data[8]=F.elements[6],P.__data[9]=F.elements[7],P.__data[10]=F.elements[8],P.__data[11]=0):(F.toArray(P.__data,H),H+=B.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(y,M,E,A){const w=y.value,R=M+"_"+E;if(A[R]===void 0)return typeof w=="number"||typeof w=="boolean"?A[R]=w:A[R]=w.clone(),!0;{const N=A[R];if(typeof w=="number"||typeof w=="boolean"){if(N!==w)return A[R]=w,!0}else if(N.equals(w)===!1)return N.copy(w),!0}return!1}function _(y){const M=y.uniforms;let E=0;const A=16;for(let R=0,N=M.length;R<N;R++){const x=Array.isArray(M[R])?M[R]:[M[R]];for(let b=0,P=x.length;b<P;b++){const V=x[b],I=Array.isArray(V.value)?V.value:[V.value];for(let H=0,q=I.length;H<q;H++){const F=I[H],B=v(F),J=E%A,se=J%B.boundary,ae=J+se;E+=se,ae!==0&&A-ae<B.storage&&(E+=A-ae),V.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=E,E+=B.storage}}}const w=E%A;return w>0&&(E+=A-w),y.__size=E,y.__cache={},this}function v(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ve("WebGLRenderer: Unsupported uniform value type.",y),M}function m(y){const M=y.target;M.removeEventListener("dispose",m);const E=a.indexOf(M.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function h(){for(const y in r)n.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:c,update:l,dispose:h}}const I0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ii=null;function U0(){return ii===null&&(ii=new nm(I0,16,16,qr,gi),ii.name="DFG_LUT",ii.minFilter=Et,ii.magFilter=Et,ii.wrapS=_i,ii.wrapT=_i,ii.generateMipmaps=!1,ii.needsUpdate=!0),ii}class Wa{constructor(e={}){const{canvas:t=Pp(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:p=Sn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const v=p,m=new Set([Fo,No,Uo]),h=new Set([Sn,Zn,Ps,Ds,Lo,Io]),y=new Uint32Array(4),M=new Int32Array(4);let E=null,A=null;const w=[],R=[];let N=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=cn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let b=!1;this._outputColorSpace=Xt;let P=0,V=0,I=null,H=-1,q=null;const F=new bt,B=new bt;let J=null;const se=new lt(0);let ae=0,ce=t.width,Ce=t.height,we=1,ke=null,Be=null;const k=new bt(0,0,ce,Ce),Q=new bt(0,0,ce,Ce);let ee=!1;const ge=new Xl;let le=!1,Le=!1;const Pe=new yt,ye=new z,Ke=new bt,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function _t(){return I===null?we:1}let C=i;function gt(S,U){return t.getContext(S,U)}try{const S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${_o}`),t.addEventListener("webglcontextlost",De,!1),t.addEventListener("webglcontextrestored",Qe,!1),t.addEventListener("webglcontextcreationerror",et,!1),C===null){const U="webgl2";if(C=gt(U,S),C===null)throw gt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw st("WebGLRenderer: "+S.message),S}let ot,ht,Te,T,g,L,Y,ne,X,xe,de,Ee,Ne,oe,pe,Me,Ae,he,We,D,te,K,ue,j;function $(){ot=new Ug(C),ot.init(),K=new T0(C,ot),ht=new Tg(C,ot,e,K),Te=new y0(C,ot),ht.reversedDepthBuffer&&d&&Te.buffers.depth.setReversed(!0),T=new Og(C),g=new l0,L=new b0(C,ot,Te,g,ht,K,T),Y=new wg(x),ne=new Ig(x),X=new Mm(C),ue=new yg(C,X),xe=new Ng(C,X,T,ue),de=new zg(C,xe,X,T),We=new Bg(C,ht,L),Me=new Ag(g),Ee=new o0(x,Y,ne,ot,ht,ue,Me),Ne=new D0(x,g),oe=new u0,pe=new _0(ot),he=new Eg(x,Y,ne,Te,de,_,c),Ae=new M0(x,de,ht),j=new L0(C,T,ht,Te),D=new bg(C,ot,T),te=new Fg(C,ot,T),T.programs=Ee.programs,x.capabilities=ht,x.extensions=ot,x.properties=g,x.renderLists=oe,x.shadowMap=Ae,x.state=Te,x.info=T}$(),v!==Sn&&(N=new Gg(v,t.width,t.height,r,s));const re=new C0(x,C);this.xr=re,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const S=ot.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ot.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return we},this.setPixelRatio=function(S){S!==void 0&&(we=S,this.setSize(ce,Ce,!1))},this.getSize=function(S){return S.set(ce,Ce)},this.setSize=function(S,U,W=!0){if(re.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}ce=S,Ce=U,t.width=Math.floor(S*we),t.height=Math.floor(U*we),W===!0&&(t.style.width=S+"px",t.style.height=U+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(ce*we,Ce*we).floor()},this.setDrawingBufferSize=function(S,U,W){ce=S,Ce=U,we=W,t.width=Math.floor(S*W),t.height=Math.floor(U*W),this.setViewport(0,0,S,U)},this.setEffects=function(S){if(v===Sn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let U=0;U<S.length;U++)if(S[U].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(F)},this.getViewport=function(S){return S.copy(k)},this.setViewport=function(S,U,W,G){S.isVector4?k.set(S.x,S.y,S.z,S.w):k.set(S,U,W,G),Te.viewport(F.copy(k).multiplyScalar(we).round())},this.getScissor=function(S){return S.copy(Q)},this.setScissor=function(S,U,W,G){S.isVector4?Q.set(S.x,S.y,S.z,S.w):Q.set(S,U,W,G),Te.scissor(B.copy(Q).multiplyScalar(we).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(S){Te.setScissorTest(ee=S)},this.setOpaqueSort=function(S){ke=S},this.setTransparentSort=function(S){Be=S},this.getClearColor=function(S){return S.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor(...arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha(...arguments)},this.clear=function(S=!0,U=!0,W=!0){let G=0;if(S){let O=!1;if(I!==null){const me=I.texture.format;O=m.has(me)}if(O){const me=I.texture.type,Se=h.has(me),ve=he.getClearColor(),be=he.getClearAlpha(),Re=ve.r,Fe=ve.g,Ie=ve.b;Se?(y[0]=Re,y[1]=Fe,y[2]=Ie,y[3]=be,C.clearBufferuiv(C.COLOR,0,y)):(M[0]=Re,M[1]=Fe,M[2]=Ie,M[3]=be,C.clearBufferiv(C.COLOR,0,M))}else G|=C.COLOR_BUFFER_BIT}U&&(G|=C.DEPTH_BUFFER_BIT),W&&(G|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",Qe,!1),t.removeEventListener("webglcontextcreationerror",et,!1),he.dispose(),oe.dispose(),pe.dispose(),g.dispose(),Y.dispose(),ne.dispose(),de.dispose(),ue.dispose(),j.dispose(),Ee.dispose(),re.dispose(),re.removeEventListener("sessionstart",er),re.removeEventListener("sessionend",Kf),Cr.stop()};function De(S){S.preventDefault(),Vu("WebGLRenderer: Context Lost."),b=!0}function Qe(){Vu("WebGLRenderer: Context Restored."),b=!1;const S=T.autoReset,U=Ae.enabled,W=Ae.autoUpdate,G=Ae.needsUpdate,O=Ae.type;$(),T.autoReset=S,Ae.enabled=U,Ae.autoUpdate=W,Ae.needsUpdate=G,Ae.type=O}function et(S){st("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Kt(S){const U=S.target;U.removeEventListener("dispose",Kt),Lt(U)}function Lt(S){Ci(S),g.remove(S)}function Ci(S){const U=g.get(S).programs;U!==void 0&&(U.forEach(function(W){Ee.releaseProgram(W)}),S.isShaderMaterial&&Ee.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,W,G,O,me){U===null&&(U=rt);const Se=O.isMesh&&O.matrixWorld.determinant()<0,ve=dx(S,U,W,G,O);Te.setMaterial(G,Se);let be=W.index,Re=1;if(G.wireframe===!0){if(be=xe.getWireframeAttribute(W),be===void 0)return;Re=2}const Fe=W.drawRange,Ie=W.attributes.position;let je=Fe.start*Re,mt=(Fe.start+Fe.count)*Re;me!==null&&(je=Math.max(je,me.start*Re),mt=Math.min(mt,(me.start+me.count)*Re)),be!==null?(je=Math.max(je,0),mt=Math.min(mt,be.count)):Ie!=null&&(je=Math.max(je,0),mt=Math.min(mt,Ie.count));const Tt=mt-je;if(Tt<0||Tt===1/0)return;ue.setup(O,G,ve,W,be);let At,vt=D;if(be!==null&&(At=X.get(be),vt=te,vt.setIndex(At)),O.isMesh)G.wireframe===!0?(Te.setLineWidth(G.wireframeLinewidth*_t()),vt.setMode(C.LINES)):vt.setMode(C.TRIANGLES);else if(O.isLine){let Ue=G.linewidth;Ue===void 0&&(Ue=1),Te.setLineWidth(Ue*_t()),O.isLineSegments?vt.setMode(C.LINES):O.isLineLoop?vt.setMode(C.LINE_LOOP):vt.setMode(C.LINE_STRIP)}else O.isPoints?vt.setMode(C.POINTS):O.isSprite&&vt.setMode(C.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Is("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),vt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(ot.get("WEBGL_multi_draw"))vt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ue=O._multiDrawStarts,pt=O._multiDrawCounts,ct=O._multiDrawCount,An=be?X.get(be).bytesPerElement:1,Ss=g.get(G).currentProgram.getUniforms();for(let wn=0;wn<ct;wn++)Ss.setValue(C,"_gl_DrawID",wn),vt.render(Ue[wn]/An,pt[wn])}else if(O.isInstancedMesh)vt.renderInstances(je,Tt,O.count);else if(W.isInstancedBufferGeometry){const Ue=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,pt=Math.min(W.instanceCount,Ue);vt.renderInstances(je,Tt,pt)}else vt.render(je,Tt)};function Rr(S,U,W){S.transparent===!0&&S.side===xn&&S.forceSinglePass===!1?(S.side=ln,S.needsUpdate=!0,$a(S,U,W),S.side=Hi,S.needsUpdate=!0,$a(S,U,W),S.side=xn):$a(S,U,W)}this.compile=function(S,U,W=null){W===null&&(W=S),A=pe.get(W),A.init(U),R.push(A),W.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(A.pushLight(O),O.castShadow&&A.pushShadow(O))}),S!==W&&S.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(A.pushLight(O),O.castShadow&&A.pushShadow(O))}),A.setupLights();const G=new Set;return S.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const me=O.material;if(me)if(Array.isArray(me))for(let Se=0;Se<me.length;Se++){const ve=me[Se];Rr(ve,W,O),G.add(ve)}else Rr(me,W,O),G.add(me)}),A=R.pop(),G},this.compileAsync=function(S,U,W=null){const G=this.compile(S,U,W);return new Promise(O=>{function me(){if(G.forEach(function(Se){g.get(Se).currentProgram.isReady()&&G.delete(Se)}),G.size===0){O(S);return}setTimeout(me,10)}ot.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Pi=null;function oc(S){Pi&&Pi(S)}function er(){Cr.stop()}function Kf(){Cr.start()}const Cr=new Mf;Cr.setAnimationLoop(oc),typeof self<"u"&&Cr.setContext(self),this.setAnimationLoop=function(S){Pi=S,re.setAnimationLoop(S),S===null?Cr.stop():Cr.start()},re.addEventListener("sessionstart",er),re.addEventListener("sessionend",Kf),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){st("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;const W=re.enabled===!0&&re.isPresenting===!0,G=N!==null&&(I===null||W)&&N.begin(x,I);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(U),U=re.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,U,I),A=pe.get(S,R.length),A.init(U),R.push(A),Pe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ge.setFromProjectionMatrix(Pe,jn,U.reversedDepth),Le=this.localClippingEnabled,le=Me.init(this.clippingPlanes,Le),E=oe.get(S,w.length),E.init(),w.push(E),re.enabled===!0&&re.isPresenting===!0){const Se=x.xr.getDepthSensingMesh();Se!==null&&lc(Se,U,-1/0,x.sortObjects)}lc(S,U,0,x.sortObjects),E.finish(),x.sortObjects===!0&&E.sort(ke,Be),ze=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,ze&&he.addToRenderList(E,S),this.info.render.frame++,le===!0&&Me.beginShadows();const O=A.state.shadowsArray;if(Ae.render(O,S,U),le===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset(),(G&&N.hasRenderPass())===!1){const Se=E.opaque,ve=E.transmissive;if(A.setupLights(),U.isArrayCamera){const be=U.cameras;if(ve.length>0)for(let Re=0,Fe=be.length;Re<Fe;Re++){const Ie=be[Re];Jf(Se,ve,S,Ie)}ze&&he.render(S);for(let Re=0,Fe=be.length;Re<Fe;Re++){const Ie=be[Re];jf(E,S,Ie,Ie.viewport)}}else ve.length>0&&Jf(Se,ve,S,U),ze&&he.render(S),jf(E,S,U)}I!==null&&V===0&&(L.updateMultisampleRenderTarget(I),L.updateRenderTargetMipmap(I)),G&&N.end(x),S.isScene===!0&&S.onAfterRender(x,S,U),ue.resetDefaultState(),H=-1,q=null,R.pop(),R.length>0?(A=R[R.length-1],le===!0&&Me.setGlobalState(x.clippingPlanes,A.state.camera)):A=null,w.pop(),w.length>0?E=w[w.length-1]:E=null};function lc(S,U,W,G){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)A.pushLight(S),S.castShadow&&A.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||ge.intersectsSprite(S)){G&&Ke.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Pe);const Se=de.update(S),ve=S.material;ve.visible&&E.push(S,Se,ve,W,Ke.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||ge.intersectsObject(S))){const Se=de.update(S),ve=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ke.copy(S.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Ke.copy(Se.boundingSphere.center)),Ke.applyMatrix4(S.matrixWorld).applyMatrix4(Pe)),Array.isArray(ve)){const be=Se.groups;for(let Re=0,Fe=be.length;Re<Fe;Re++){const Ie=be[Re],je=ve[Ie.materialIndex];je&&je.visible&&E.push(S,Se,je,W,Ke.z,Ie)}}else ve.visible&&E.push(S,Se,ve,W,Ke.z,null)}}const me=S.children;for(let Se=0,ve=me.length;Se<ve;Se++)lc(me[Se],U,W,G)}function jf(S,U,W,G){const{opaque:O,transmissive:me,transparent:Se}=S;A.setupLightsView(W),le===!0&&Me.setGlobalState(x.clippingPlanes,W),G&&Te.viewport(F.copy(G)),O.length>0&&Ya(O,U,W),me.length>0&&Ya(me,U,W),Se.length>0&&Ya(Se,U,W),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function Jf(S,U,W,G){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[G.id]===void 0){const je=ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[G.id]=new Jn(1,1,{generateMipmaps:!0,type:je?gi:Sn,minFilter:dr,samples:ht.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace})}const me=A.state.transmissionRenderTarget[G.id],Se=G.viewport||F;me.setSize(Se.z*x.transmissionResolutionScale,Se.w*x.transmissionResolutionScale);const ve=x.getRenderTarget(),be=x.getActiveCubeFace(),Re=x.getActiveMipmapLevel();x.setRenderTarget(me),x.getClearColor(se),ae=x.getClearAlpha(),ae<1&&x.setClearColor(16777215,.5),x.clear(),ze&&he.render(W);const Fe=x.toneMapping;x.toneMapping=cn;const Ie=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),A.setupLightsView(G),le===!0&&Me.setGlobalState(x.clippingPlanes,G),Ya(S,W,G),L.updateMultisampleRenderTarget(me),L.updateRenderTargetMipmap(me),ot.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let mt=0,Tt=U.length;mt<Tt;mt++){const At=U[mt],{object:vt,geometry:Ue,material:pt,group:ct}=At;if(pt.side===xn&&vt.layers.test(G.layers)){const An=pt.side;pt.side=ln,pt.needsUpdate=!0,Qf(vt,W,G,Ue,pt,ct),pt.side=An,pt.needsUpdate=!0,je=!0}}je===!0&&(L.updateMultisampleRenderTarget(me),L.updateRenderTargetMipmap(me))}x.setRenderTarget(ve,be,Re),x.setClearColor(se,ae),Ie!==void 0&&(G.viewport=Ie),x.toneMapping=Fe}function Ya(S,U,W){const G=U.isScene===!0?U.overrideMaterial:null;for(let O=0,me=S.length;O<me;O++){const Se=S[O],{object:ve,geometry:be,group:Re}=Se;let Fe=Se.material;Fe.allowOverride===!0&&G!==null&&(Fe=G),ve.layers.test(W.layers)&&Qf(ve,U,W,be,Fe,Re)}}function Qf(S,U,W,G,O,me){S.onBeforeRender(x,U,W,G,O,me),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),O.onBeforeRender(x,U,W,G,S,me),O.transparent===!0&&O.side===xn&&O.forceSinglePass===!1?(O.side=ln,O.needsUpdate=!0,x.renderBufferDirect(W,U,G,O,S,me),O.side=Hi,O.needsUpdate=!0,x.renderBufferDirect(W,U,G,O,S,me),O.side=xn):x.renderBufferDirect(W,U,G,O,S,me),S.onAfterRender(x,U,W,G,O,me)}function $a(S,U,W){U.isScene!==!0&&(U=rt);const G=g.get(S),O=A.state.lights,me=A.state.shadowsArray,Se=O.state.version,ve=Ee.getParameters(S,O.state,me,U,W),be=Ee.getProgramCacheKey(ve);let Re=G.programs;G.environment=S.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(S.isMeshStandardMaterial?ne:Y).get(S.envMap||G.environment),G.envMapRotation=G.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Re===void 0&&(S.addEventListener("dispose",Kt),Re=new Map,G.programs=Re);let Fe=Re.get(be);if(Fe!==void 0){if(G.currentProgram===Fe&&G.lightsStateVersion===Se)return td(S,ve),Fe}else ve.uniforms=Ee.getUniforms(S),S.onBeforeCompile(ve,x),Fe=Ee.acquireProgram(ve,be),Re.set(be,Fe),G.uniforms=ve.uniforms;const Ie=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ie.clippingPlanes=Me.uniform),td(S,ve),G.needsLights=px(S),G.lightsStateVersion=Se,G.needsLights&&(Ie.ambientLightColor.value=O.state.ambient,Ie.lightProbe.value=O.state.probe,Ie.directionalLights.value=O.state.directional,Ie.directionalLightShadows.value=O.state.directionalShadow,Ie.spotLights.value=O.state.spot,Ie.spotLightShadows.value=O.state.spotShadow,Ie.rectAreaLights.value=O.state.rectArea,Ie.ltc_1.value=O.state.rectAreaLTC1,Ie.ltc_2.value=O.state.rectAreaLTC2,Ie.pointLights.value=O.state.point,Ie.pointLightShadows.value=O.state.pointShadow,Ie.hemisphereLights.value=O.state.hemi,Ie.directionalShadowMap.value=O.state.directionalShadowMap,Ie.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ie.spotShadowMap.value=O.state.spotShadowMap,Ie.spotLightMatrix.value=O.state.spotLightMatrix,Ie.spotLightMap.value=O.state.spotLightMap,Ie.pointShadowMap.value=O.state.pointShadowMap,Ie.pointShadowMatrix.value=O.state.pointShadowMatrix),G.currentProgram=Fe,G.uniformsList=null,Fe}function ed(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=Ha.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function td(S,U){const W=g.get(S);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function dx(S,U,W,G,O){U.isScene!==!0&&(U=rt),L.resetTextureUnits();const me=U.fog,Se=G.isMeshStandardMaterial?U.environment:null,ve=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Yr,be=(G.isMeshStandardMaterial?ne:Y).get(G.envMap||Se),Re=G.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Fe=!!W.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ie=!!W.morphAttributes.position,je=!!W.morphAttributes.normal,mt=!!W.morphAttributes.color;let Tt=cn;G.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Tt=x.toneMapping);const At=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,vt=At!==void 0?At.length:0,Ue=g.get(G),pt=A.state.lights;if(le===!0&&(Le===!0||S!==q)){const nn=S===q&&G.id===H;Me.setState(G,S,nn)}let ct=!1;G.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==pt.state.version||Ue.outputColorSpace!==ve||O.isBatchedMesh&&Ue.batching===!1||!O.isBatchedMesh&&Ue.batching===!0||O.isBatchedMesh&&Ue.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ue.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ue.instancing===!1||!O.isInstancedMesh&&Ue.instancing===!0||O.isSkinnedMesh&&Ue.skinning===!1||!O.isSkinnedMesh&&Ue.skinning===!0||O.isInstancedMesh&&Ue.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ue.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ue.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ue.instancingMorph===!1&&O.morphTexture!==null||Ue.envMap!==be||G.fog===!0&&Ue.fog!==me||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==Me.numPlanes||Ue.numIntersection!==Me.numIntersection)||Ue.vertexAlphas!==Re||Ue.vertexTangents!==Fe||Ue.morphTargets!==Ie||Ue.morphNormals!==je||Ue.morphColors!==mt||Ue.toneMapping!==Tt||Ue.morphTargetsCount!==vt)&&(ct=!0):(ct=!0,Ue.__version=G.version);let An=Ue.currentProgram;ct===!0&&(An=$a(G,U,O));let Ss=!1,wn=!1,Js=!1;const xt=An.getUniforms(),dn=Ue.uniforms;if(Te.useProgram(An.program)&&(Ss=!0,wn=!0,Js=!0),G.id!==H&&(H=G.id,wn=!0),Ss||q!==S){Te.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),xt.setValue(C,"projectionMatrix",S.projectionMatrix),xt.setValue(C,"viewMatrix",S.matrixWorldInverse);const hn=xt.map.cameraPosition;hn!==void 0&&hn.setValue(C,ye.setFromMatrixPosition(S.matrixWorld)),ht.logarithmicDepthBuffer&&xt.setValue(C,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&xt.setValue(C,"isOrthographic",S.isOrthographicCamera===!0),q!==S&&(q=S,wn=!0,Js=!0)}if(Ue.needsLights&&(pt.state.directionalShadowMap.length>0&&xt.setValue(C,"directionalShadowMap",pt.state.directionalShadowMap,L),pt.state.spotShadowMap.length>0&&xt.setValue(C,"spotShadowMap",pt.state.spotShadowMap,L),pt.state.pointShadowMap.length>0&&xt.setValue(C,"pointShadowMap",pt.state.pointShadowMap,L)),O.isSkinnedMesh){xt.setOptional(C,O,"bindMatrix"),xt.setOptional(C,O,"bindMatrixInverse");const nn=O.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),xt.setValue(C,"boneTexture",nn.boneTexture,L))}O.isBatchedMesh&&(xt.setOptional(C,O,"batchingTexture"),xt.setValue(C,"batchingTexture",O._matricesTexture,L),xt.setOptional(C,O,"batchingIdTexture"),xt.setValue(C,"batchingIdTexture",O._indirectTexture,L),xt.setOptional(C,O,"batchingColorTexture"),O._colorsTexture!==null&&xt.setValue(C,"batchingColorTexture",O._colorsTexture,L));const Fn=W.morphAttributes;if((Fn.position!==void 0||Fn.normal!==void 0||Fn.color!==void 0)&&We.update(O,W,An),(wn||Ue.receiveShadow!==O.receiveShadow)&&(Ue.receiveShadow=O.receiveShadow,xt.setValue(C,"receiveShadow",O.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(dn.envMap.value=be,dn.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(dn.envMapIntensity.value=U.environmentIntensity),dn.dfgLUT!==void 0&&(dn.dfgLUT.value=U0()),wn&&(xt.setValue(C,"toneMappingExposure",x.toneMappingExposure),Ue.needsLights&&hx(dn,Js),me&&G.fog===!0&&Ne.refreshFogUniforms(dn,me),Ne.refreshMaterialUniforms(dn,G,we,Ce,A.state.transmissionRenderTarget[S.id]),Ha.upload(C,ed(Ue),dn,L)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ha.upload(C,ed(Ue),dn,L),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&xt.setValue(C,"center",O.center),xt.setValue(C,"modelViewMatrix",O.modelViewMatrix),xt.setValue(C,"normalMatrix",O.normalMatrix),xt.setValue(C,"modelMatrix",O.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const nn=G.uniformsGroups;for(let hn=0,cc=nn.length;hn<cc;hn++){const Pr=nn[hn];j.update(Pr,An),j.bind(Pr,An)}}return An}function hx(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function px(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(S,U,W){const G=g.get(S);G.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),g.get(S.texture).__webglTexture=U,g.get(S.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:W,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,U){const W=g.get(S);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0};const mx=C.createFramebuffer();this.setRenderTarget=function(S,U=0,W=0){I=S,P=U,V=W;let G=null,O=!1,me=!1;if(S){const ve=g.get(S);if(ve.__useDefaultFramebuffer!==void 0){Te.bindFramebuffer(C.FRAMEBUFFER,ve.__webglFramebuffer),F.copy(S.viewport),B.copy(S.scissor),J=S.scissorTest,Te.viewport(F),Te.scissor(B),Te.setScissorTest(J),H=-1;return}else if(ve.__webglFramebuffer===void 0)L.setupRenderTarget(S);else if(ve.__hasExternalTextures)L.rebindTextures(S,g.get(S.texture).__webglTexture,g.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Fe=S.depthTexture;if(ve.__boundDepthTexture!==Fe){if(Fe!==null&&g.has(Fe)&&(S.width!==Fe.image.width||S.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(S)}}const be=S.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(me=!0);const Re=g.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Re[U])?G=Re[U][W]:G=Re[U],O=!0):S.samples>0&&L.useMultisampledRTT(S)===!1?G=g.get(S).__webglMultisampledFramebuffer:Array.isArray(Re)?G=Re[W]:G=Re,F.copy(S.viewport),B.copy(S.scissor),J=S.scissorTest}else F.copy(k).multiplyScalar(we).floor(),B.copy(Q).multiplyScalar(we).floor(),J=ee;if(W!==0&&(G=mx),Te.bindFramebuffer(C.FRAMEBUFFER,G)&&Te.drawBuffers(S,G),Te.viewport(F),Te.scissor(B),Te.setScissorTest(J),O){const ve=g.get(S.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+U,ve.__webglTexture,W)}else if(me){const ve=U;for(let be=0;be<S.textures.length;be++){const Re=g.get(S.textures[be]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+be,Re.__webglTexture,W,ve)}}else if(S!==null&&W!==0){const ve=g.get(S.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,ve.__webglTexture,W)}H=-1},this.readRenderTargetPixels=function(S,U,W,G,O,me,Se,ve=0){if(!(S&&S.isWebGLRenderTarget)){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=g.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Se!==void 0&&(be=be[Se]),be){Te.bindFramebuffer(C.FRAMEBUFFER,be);try{const Re=S.textures[ve],Fe=Re.format,Ie=Re.type;if(!ht.textureFormatReadable(Fe)){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(Ie)){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-G&&W>=0&&W<=S.height-O&&(S.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+ve),C.readPixels(U,W,G,O,K.convert(Fe),K.convert(Ie),me))}finally{const Re=I!==null?g.get(I).__webglFramebuffer:null;Te.bindFramebuffer(C.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(S,U,W,G,O,me,Se,ve=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=g.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Se!==void 0&&(be=be[Se]),be)if(U>=0&&U<=S.width-G&&W>=0&&W<=S.height-O){Te.bindFramebuffer(C.FRAMEBUFFER,be);const Re=S.textures[ve],Fe=Re.format,Ie=Re.type;if(!ht.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,je),C.bufferData(C.PIXEL_PACK_BUFFER,me.byteLength,C.STREAM_READ),S.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+ve),C.readPixels(U,W,G,O,K.convert(Fe),K.convert(Ie),0);const mt=I!==null?g.get(I).__webglFramebuffer:null;Te.bindFramebuffer(C.FRAMEBUFFER,mt);const Tt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Dp(C,Tt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,je),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,me),C.deleteBuffer(je),C.deleteSync(Tt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,U=null,W=0){const G=Math.pow(2,-W),O=Math.floor(S.image.width*G),me=Math.floor(S.image.height*G),Se=U!==null?U.x:0,ve=U!==null?U.y:0;L.setTexture2D(S,0),C.copyTexSubImage2D(C.TEXTURE_2D,W,0,0,Se,ve,O,me),Te.unbindTexture()};const _x=C.createFramebuffer(),gx=C.createFramebuffer();this.copyTextureToTexture=function(S,U,W=null,G=null,O=0,me=null){me===null&&(O!==0?(Is("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),me=O,O=0):me=0);let Se,ve,be,Re,Fe,Ie,je,mt,Tt;const At=S.isCompressedTexture?S.mipmaps[me]:S.image;if(W!==null)Se=W.max.x-W.min.x,ve=W.max.y-W.min.y,be=W.isBox3?W.max.z-W.min.z:1,Re=W.min.x,Fe=W.min.y,Ie=W.isBox3?W.min.z:0;else{const Fn=Math.pow(2,-O);Se=Math.floor(At.width*Fn),ve=Math.floor(At.height*Fn),S.isDataArrayTexture?be=At.depth:S.isData3DTexture?be=Math.floor(At.depth*Fn):be=1,Re=0,Fe=0,Ie=0}G!==null?(je=G.x,mt=G.y,Tt=G.z):(je=0,mt=0,Tt=0);const vt=K.convert(U.format),Ue=K.convert(U.type);let pt;U.isData3DTexture?(L.setTexture3D(U,0),pt=C.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(L.setTexture2DArray(U,0),pt=C.TEXTURE_2D_ARRAY):(L.setTexture2D(U,0),pt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);const ct=C.getParameter(C.UNPACK_ROW_LENGTH),An=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Ss=C.getParameter(C.UNPACK_SKIP_PIXELS),wn=C.getParameter(C.UNPACK_SKIP_ROWS),Js=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,At.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,At.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Re),C.pixelStorei(C.UNPACK_SKIP_ROWS,Fe),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ie);const xt=S.isDataArrayTexture||S.isData3DTexture,dn=U.isDataArrayTexture||U.isData3DTexture;if(S.isDepthTexture){const Fn=g.get(S),nn=g.get(U),hn=g.get(Fn.__renderTarget),cc=g.get(nn.__renderTarget);Te.bindFramebuffer(C.READ_FRAMEBUFFER,hn.__webglFramebuffer),Te.bindFramebuffer(C.DRAW_FRAMEBUFFER,cc.__webglFramebuffer);for(let Pr=0;Pr<be;Pr++)xt&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,g.get(S).__webglTexture,O,Ie+Pr),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,g.get(U).__webglTexture,me,Tt+Pr)),C.blitFramebuffer(Re,Fe,Se,ve,je,mt,Se,ve,C.DEPTH_BUFFER_BIT,C.NEAREST);Te.bindFramebuffer(C.READ_FRAMEBUFFER,null),Te.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(O!==0||S.isRenderTargetTexture||g.has(S)){const Fn=g.get(S),nn=g.get(U);Te.bindFramebuffer(C.READ_FRAMEBUFFER,_x),Te.bindFramebuffer(C.DRAW_FRAMEBUFFER,gx);for(let hn=0;hn<be;hn++)xt?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Fn.__webglTexture,O,Ie+hn):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Fn.__webglTexture,O),dn?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,nn.__webglTexture,me,Tt+hn):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,nn.__webglTexture,me),O!==0?C.blitFramebuffer(Re,Fe,Se,ve,je,mt,Se,ve,C.COLOR_BUFFER_BIT,C.NEAREST):dn?C.copyTexSubImage3D(pt,me,je,mt,Tt+hn,Re,Fe,Se,ve):C.copyTexSubImage2D(pt,me,je,mt,Re,Fe,Se,ve);Te.bindFramebuffer(C.READ_FRAMEBUFFER,null),Te.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else dn?S.isDataTexture||S.isData3DTexture?C.texSubImage3D(pt,me,je,mt,Tt,Se,ve,be,vt,Ue,At.data):U.isCompressedArrayTexture?C.compressedTexSubImage3D(pt,me,je,mt,Tt,Se,ve,be,vt,At.data):C.texSubImage3D(pt,me,je,mt,Tt,Se,ve,be,vt,Ue,At):S.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,me,je,mt,Se,ve,vt,Ue,At.data):S.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,me,je,mt,At.width,At.height,vt,At.data):C.texSubImage2D(C.TEXTURE_2D,me,je,mt,Se,ve,vt,Ue,At);C.pixelStorei(C.UNPACK_ROW_LENGTH,ct),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,An),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ss),C.pixelStorei(C.UNPACK_SKIP_ROWS,wn),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Js),me===0&&U.generateMipmaps&&C.generateMipmap(pt),Te.unbindTexture()},this.initRenderTarget=function(S){g.get(S).__webglFramebuffer===void 0&&L.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?L.setTextureCube(S,0):S.isData3DTexture?L.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?L.setTexture2DArray(S,0):L.setTexture2D(S,0),Te.unbindTexture()},this.resetState=function(){P=0,V=0,I=null,Te.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}}var N0=Ge('<div class="star-container svelte-1a66aez"></div>');function F0(n,e){_n(e,!0);let t=qe(e,"images",19,()=>[]);const i={radius:1.1,cardWidth:1.65,cardHeight:1.15,baseRotationSpeed:.006,portraitSpeedMultiplier:1.3,tiltLoopSpeed:.005,tiltLimit:Math.PI,baseTilt:{tiltX:.65,tiltZ:.25},landscape:{cameraZ:9,masterRotationZ:0},portrait:{cameraZ:12,masterRotationZ:75*(Math.PI/180)}};let r;cr(()=>{if(!t().length||!r)return;const a=t().length;let o,c,l=null,f=!1;try{o=new Wa({antialias:!0,alpha:!0})}catch{return}const u=new Fa;u.fog=new Na(0,.06);const d=new tn(35,1,.1,30);o.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.toneMapping=cn,o.outputColorSpace=Xt,o.setClearColor(0,0),r.appendChild(o.domElement);function p(F){F.preventDefault(),cancelAnimationFrame(c)}function _(){f||q()}o.domElement.addEventListener("webglcontextlost",p),o.domElement.addEventListener("webglcontextrestored",_);const v=new ti;u.add(v);const m=new ti;v.add(m);const h=new ti;m.add(h);const y=new gm(16777215,.6);u.add(y);const M=new _m(16777215,1.2);M.position.set(3,4,5),u.add(M);const E=new Ki(1,1),A=new Ba,w=[],R=[];for(let F=0;F<a;F++){const B=A.load(t()[F].url);B.minFilter=Et,B.magFilter=Et,R.push(B);const J=new lm({map:B,side:xn,roughness:.7,metalness:.05});w.push(J);const se=new yn(E,J),ae=F/a*Math.PI*2,ce=Math.sin(ae)*i.radius,Ce=Math.cos(ae)*i.radius;se.position.set(ce,0,Ce),se.rotation.y=ae+Math.PI/2,se.scale.set(i.cardWidth,i.cardHeight,1),h.add(se)}let N=-i.tiltLimit,x=1,b=0,P=i.baseRotationSpeed;function V(){if(!r)return;const{width:F,height:B}=r.getBoundingClientRect();if(F===0||B===0)return;const J=F/B<1,se=J?i.portrait:i.landscape;d.aspect=F/B,d.updateProjectionMatrix(),o.setSize(F,B),d.position.set(0,0,se.cameraZ),d.lookAt(0,0,0);const ae=i.radius*Math.sin(i.baseTilt.tiltX)/2.2;v.position.y=ae,v.rotation.z=se.masterRotationZ,P=J?i.baseRotationSpeed*i.portraitSpeedMultiplier:i.baseRotationSpeed}V(),l=new ResizeObserver(V),l.observe(r);let I=!0;const H=new IntersectionObserver(([F])=>{I=F.isIntersecting,I&&!f?q():cancelAnimationFrame(c)},{threshold:0});H.observe(r);function q(){!I||f||(c=requestAnimationFrame(q),N+=i.tiltLoopSpeed*x,N>=i.tiltLimit?(N=i.tiltLimit,x=-1):N<=-i.tiltLimit&&(N=-i.tiltLimit,x=1),b+=P,m.rotation.y=N,m.rotation.x=i.baseTilt.tiltX,m.rotation.z=i.baseTilt.tiltZ,h.rotation.y=b-N,o.render(u,d))}return q(),()=>{f=!0,cancelAnimationFrame(c),l&&l.disconnect(),H.disconnect(),o.domElement.removeEventListener("webglcontextlost",p),o.domElement.removeEventListener("webglcontextrestored",_),h.clear(),m.clear(),v.clear(),u.clear(),E.dispose();for(const F of w)F.dispose();for(const F of R)F.dispose();w.length=0,R.length=0,o.dispose(),o.forceContextLoss(),o.domElement.parentNode&&o.domElement.parentNode.removeChild(o.domElement)}});var s=N0();lr(s,a=>r=a,()=>r),Oe(n,s),gn()}var O0=Ge('<div class="helix-wrapper svelte-vcb9pb"><div class="helix-vignette top svelte-vcb9pb"></div> <div class="helix-container svelte-vcb9pb"></div> <div class="helix-vignette bottom svelte-vcb9pb"></div></div>');function B0(n,e){_n(e,!0);let t=qe(e,"images",19,()=>[]);const i=2.4,r=1.6,s=.15,a=16,o=48,c=Math.PI*4/3,l=-20*(Math.PI/180),f=.003,u=10,d=.15,p=.05,_=`
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
    `;let m;cr(()=>{if(!t().length||!m)return;const M=t().length;let E,A,w=null,R=!1;try{E=new Wa({antialias:!0,alpha:!0})}catch{return}const N=new Fa;N.fog=new Na(0,.04);const x=new tn(40,1,.1,30);E.setPixelRatio(Math.min(window.devicePixelRatio,2)),E.toneMapping=cn,E.outputColorSpace=Xt,E.setClearColor(0,0),m.appendChild(E.domElement);function b(Pe){Pe.preventDefault(),cancelAnimationFrame(A)}function P(){R||le()}E.domElement.addEventListener("webglcontextlost",b),E.domElement.addEventListener("webglcontextrestored",P);const V=new z(3,4,5).normalize(),I=new ti;I.rotation.z=l,N.add(I);const H=M*r+(M-1)*s,q=0,F=c/H,B=new Ki(i,r,a,o),J=new Ba,se=[],ae=[];for(let Pe=0;Pe<M;Pe++){const ye=J.load(t()[Pe].url);ye.minFilter=Et,ye.magFilter=Et,ae.push(ye);const Ke=new bn({uniforms:{uTwist:{value:F},uOffset:{value:0},uStripCenter:{value:q},uTexture:{value:ye},uPlaneSize:{value:new Ze(i,r)},uImageRes:{value:new Ze(1,1)},uLightDir:{value:V},uAmbient:{value:.6},uDiffuse:{value:.5}},vertexShader:_,fragmentShader:v,side:xn});ye.userData.materials||(ye.userData.materials=[],ye.onUpdate=()=>{if(ye.image){const _t=ye.image.width||1,C=ye.image.height||1;for(const gt of ye.userData.materials)gt.uniforms.uImageRes.value.set(_t,C)}}),ye.userData.materials.push(Ke),se.push(Ke);const rt=new yn(B,Ke),ze=-H/2+r/2+Pe*(r+s);rt.position.y=ze,I.add(rt)}function ce(){if(!m)return;const{width:Pe,height:ye}=m.getBoundingClientRect();Pe===0||ye===0||(x.aspect=Pe/ye,x.updateProjectionMatrix(),E.setSize(Pe,ye),x.position.set(0,0,u),x.lookAt(0,0,0))}ce(),w=new ResizeObserver(ce),w.observe(m);let Ce=0,we=0,ke=0,Be=0;function k(Pe){const ye=m.getBoundingClientRect(),Ke=(Pe.clientX-ye.left)/ye.width*2-1;Ce=-((Pe.clientY-ye.top)/ye.height*2-1)*d,we=Ke*d}function Q(){Ce=0,we=0}m.addEventListener("mousemove",k),m.addEventListener("mouseleave",Q);let ee=0,ge=!0;function le(){if(!(!ge||R)){cancelAnimationFrame(A),A=requestAnimationFrame(le),ee+=f,ke+=(Ce-ke)*p,Be+=(we-Be)*p,I.rotation.x=ke,I.rotation.y=Be;for(const Pe of se)Pe.uniforms.uOffset.value=ee;E.render(N,x)}}const Le=new IntersectionObserver(([Pe])=>{ge=Pe.isIntersecting,ge&&!R?le():cancelAnimationFrame(A)},{threshold:0});return Le.observe(m),le(),()=>{R=!0,cancelAnimationFrame(A),w&&w.disconnect(),Le.disconnect(),m==null||m.removeEventListener("mousemove",k),m==null||m.removeEventListener("mouseleave",Q),E.domElement.removeEventListener("webglcontextlost",b),E.domElement.removeEventListener("webglcontextrestored",P),I.clear(),N.clear(),B.dispose();for(const Pe of se)Pe.dispose();for(const Pe of ae)Pe.userData.materials=null,Pe.dispose();se.length=0,ae.length=0,E.dispose(),E.forceContextLoss(),E.domElement.parentNode&&E.domElement.parentNode.removeChild(E.domElement)}});var h=O0(),y=nt(fe(h),2);lr(y,M=>m=M,()=>m),Oe(n,h),gn()}var z0=Ge('<div class="drum-container svelte-6qlern"></div>');function V0(n,e){_n(e,!0);let t=qe(e,"images",19,()=>[]);const i=2*Math.PI,r=2.4,s=1.6,a=2,o=12,c=.006,l=`
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
    `;let u;cr(()=>{if(!t().length||!u)return;let p,_,v=null;try{p=new Wa({antialias:!0,alpha:!0})}catch{return}const m=new Fa,h=new tn(40,1,.1,100);h.position.set(0,0,o),h.lookAt(0,0,0),p.setPixelRatio(Math.min(window.devicePixelRatio,2)),p.toneMapping=cn,p.outputColorSpace=Xt,p.setClearColor(0,0),u.appendChild(p.domElement),p.domElement.addEventListener("webglcontextlost",ee=>{ee.preventDefault(),cancelAnimationFrame(_)}),p.domElement.addEventListener("webglcontextrestored",()=>{k()});const y=new ti;y.position.y=.5,y.rotation.z=10*(Math.PI/180),y.rotation.x=15*(Math.PI/180),m.add(y);const M=new Ba,E=[],A=new Ki(r,s,16,1),w=t().length,R=5,N=i/R,x=new Map;function b(ee){if(x.has(ee))return x.get(ee);const ge=M.load(t()[ee].url,le=>{if(le.image){const Le=le.image.width||1,Pe=le.image.height||1;for(const ye of le.userData.materials||[])ye.uniforms.uImageRes.value.set(Le,Pe)}});return ge.minFilter=Et,ge.magFilter=Et,x.set(ee,ge),ge}for(let ee=0;ee<R;ee++){const ge=ee%w,le=-ee*N,Le=b(ge),Pe=new bn({uniforms:{uRadius:{value:a},uBaseAngle:{value:le},uScaleY:{value:0},uTexture:{value:Le},uPlaneSize:{value:new Ze(r,s)},uImageRes:{value:new Ze(1,1)}},vertexShader:l,fragmentShader:f,side:xn});Le.userData.materials||(Le.userData.materials=[]),Le.userData.materials.push(Pe);const ye=new yn(A,Pe);y.add(ye),E.push(Pe)}let P;function V(){if(!u)return;const{width:ee,height:ge}=u.getBoundingClientRect();ee===0||ge===0||(h.aspect=ee/ge,h.updateProjectionMatrix(),p.setSize(ee,ge))}v=new ResizeObserver(()=>{clearTimeout(P),P=setTimeout(V,100)}),v.observe(u),requestAnimationFrame(V);const I=.6,H=3,q=.6,F=.12,B=F*(R-1),J=I+B,se=J+H,ae=se+q+B;let ce=0,Ce=!0,we=-1;function ke(ee){return ee<.5?4*ee*ee*ee:1-Math.pow(-2*ee+2,3)/2}function Be(ee,ge){const le=(R-1-ee)*F,Le=Math.max(0,Math.min(1,(ge-le)/I));if(ge<J)return ke(Le);if(ge<se)return 1;const Pe=(R-1-ee)*F,ye=Math.max(0,Math.min(1,(ge-se-Pe)/q));return 1-ke(ye)}function k(){if(!Ce)return;cancelAnimationFrame(_),_=requestAnimationFrame(k);const ee=performance.now()/1e3;we<0&&(we=ee);const ge=ee-we;if(ge>=ae){for(let le=0;le<R;le++)E[le].uniforms.uScaleY.value=0;p.render(m,h);return}ce+=c;for(let le=0;le<R;le++){const Le=-le*N;E[le].uniforms.uBaseAngle.value=Le+ce,E[le].uniforms.uScaleY.value=Be(le,ge)}p.render(m,h)}const Q=new IntersectionObserver(([ee])=>{Ce=ee.isIntersecting,Ce?k():cancelAnimationFrame(_)},{threshold:0});return Q.observe(u),k(),()=>{cancelAnimationFrame(_),v&&v.disconnect(),Q.disconnect(),A.dispose();for(const ee of E)ee.dispose();x.forEach(ee=>ee.dispose()),x.clear(),p.dispose(),p.domElement.parentNode&&p.domElement.parentNode.removeChild(p.domElement)}});var d=z0();lr(d,p=>u=p,()=>u),Oe(n,d),gn()}var G0=Ge("<c-indexcard></c-indexcard>",2),H0=Ge('<div class="mobile-fallback svelte-6olp7"></div>'),k0=Ge('<div class="canvas-container svelte-6olp7"></div>');function W0(n,e){_n(e,!0);let t=qe(e,"projects",19,()=>[]);const i=2*Math.PI,r=6,s=6,a=8,o=20,c=991,l=3e-4,f=.004,u=.92,d=5e-4,p=.08,_=.001,v=120,m=.2,h=.2,y=new z;let M=Jt(void 0),E=Jt(!1);function A(I,H,q){const F=Math.max(0,Math.min(1,(q-I)/(H-I)));return F*F*(3-2*F)}const w=`
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
    `;function N(){zt(E,window.innerWidth<=c)}cr(()=>{if(N(),window.addEventListener("resize",N),ie(E)||!t().length||!ie(M))return()=>{window.removeEventListener("resize",N)};let I,H,q=null;try{I=new Wa({antialias:!0,alpha:!0})}catch{return zt(E,!0),()=>{window.removeEventListener("resize",N)}}let F=!1;const B=new Fa,J=new tn(45,1,.1,50);J.position.set(0,0,o),J.lookAt(0,0,0),I.setPixelRatio(Math.min(window.devicePixelRatio,2)),I.toneMapping=cn,I.outputColorSpace=Xt,ie(M).appendChild(I.domElement);function se(te){te.preventDefault(),cancelAnimationFrame(H)}function ae(){F||D()}I.domElement.addEventListener("webglcontextlost",se),I.domElement.addEventListener("webglcontextrestored",ae);const ce=new ti;B.add(ce);const Ce=new Ba,we=[],ke=[],Be=[],k=new Ki(r,s,1,16),Q=t().length,ee=s/a,ge=Math.ceil(i/(ee+.04)),le=Math.max(Q,Math.floor(ge/Q)*Q),Le=i/le,Pe=new Map;function ye(te){if(Pe.has(te))return Pe.get(te);const K=Ce.load(t()[te].thumbnail_base);return K.minFilter=Et,K.magFilter=Et,Pe.set(te,K),K}for(let te=0;te<le;te++){const K=te%Q,ue=t()[K],j=-te*Le,$=ye(K),re=new bn({uniforms:{uRadius:{value:a},uBaseAngle:{value:j},uTexture:{value:$},uPlaneSize:{value:new Ze(r,s)},uImageRes:{value:new Ze(1,1)},uOpacity:{value:1}},vertexShader:w,fragmentShader:R,transparent:!0,side:xn});$.userData.materials||($.userData.materials=[],$.onUpdate=()=>{if($.image){const Qe=$.image,et=Qe.width||1,Kt=Qe.height||1;for(const Lt of $.userData.materials)Lt.uniforms.uImageRes.value.set(et,Kt)}}),$.userData.materials.push(re);const De=new yn(k,re);De.userData={meshIndex:te,projectIndex:K,project:ue,baseSeatAngle:j},ce.add(De),we.push(re),ke.push(De),Be.push(1)}function Ke(){if(!ie(M))return;const{width:te,height:K}=ie(M).getBoundingClientRect();te===0||K===0||(J.aspect=te/K,J.updateProjectionMatrix(),I.setSize(te,K))}q=new ResizeObserver(Ke),q.observe(ie(M)),requestAnimationFrame(Ke);const rt=new xm,ze=new Ze;let _t=-1,C=!1,gt=null;function ot(te){if(!ie(M))return-1;const K=ie(M).getBoundingClientRect();ze.x=(te.clientX-K.left)/K.width*2-1,ze.y=-((te.clientY-K.top)/K.height)*2+1,rt.setFromCamera(ze,J);const ue=rt.ray.origin,j=rt.ray.direction,$=j.y*j.y+j.z*j.z,re=2*(ue.y*j.y+ue.z*j.z),De=ue.y*ue.y+ue.z*ue.z-a*a,Qe=re*re-4*$*De;if(Qe<0)return-1;const et=(-re-Math.sqrt(Qe))/(2*$);if(et<0||(y.copy(ue).addScaledVector(j,et),Math.abs(y.x)>r/2))return-1;const Kt=Math.atan2(y.y,y.z),Lt=s/2/a;let Ci=-1,Rr=1/0;for(let Pi=0;Pi<le;Pi++){if(!ke[Pi].visible)continue;const oc=we[Pi].uniforms.uBaseAngle.value;let er=Kt-oc;er=((er+Math.PI)%i+i)%i-Math.PI,Math.abs(er)<Lt&&Math.abs(er)<Rr&&(Rr=Math.abs(er),Ci=Pi)}return Ci}function ht(te){const K=ot(te);K>=0?(_t=K,C=!0,ie(M).style.cursor="pointer"):(_t=-1,C=!1,ie(M).style.cursor="default")}function Te(te){gt=te,ht(te)}function T(){gt=null,_t=-1,C=!1,ie(M)&&(ie(M).style.cursor="default")}function g(te){var ue;const K=ot(te);if(K>=0){const j=ke[K].userData.project;if(j!=null&&j.url){const $=(ue=ie(M))==null?void 0:ue.closest("c-reel");$&&$.dispatchEvent(new CustomEvent("reel-navigate",{bubbles:!0,detail:{url:j.url,project:j}}))}}}ie(M).addEventListener("mousemove",Te),ie(M).addEventListener("mouseleave",T),ie(M).addEventListener("click",g);const L=ie(M).closest("[data-canvas-map]");let Y=0,ne=0,X=!1,xe=0,de=0,Ee=-1,Ne=0;function oe(te){te.preventDefault(),ne+=te.deltaY*l,X=!1,de=performance.now()}function pe(te){Ne=te.touches[0].clientY,ne=0,X=!1,de=performance.now()}function Me(te){te.preventDefault();const K=te.touches[0].clientY;ne=(Ne-K)*f,Y+=ne,Ne=K,de=performance.now()}function Ae(){de=performance.now()}L&&(L.addEventListener("wheel",oe,{passive:!1}),L.addEventListener("touchstart",pe,{passive:!0}),L.addEventListener("touchmove",Me,{passive:!1}),L.addEventListener("touchend",Ae));let he=!0;const We=new IntersectionObserver(([te])=>{he=te.isIntersecting,he&&!F?D():cancelAnimationFrame(H)},{threshold:0});We.observe(ie(M));function D(){var $;if(F||!he)return;H=requestAnimationFrame(D);const te=performance.now();if(X||(Y+=ne,ne*=u),!X&&Math.abs(ne)<d&&te-de>v){const re=(Y%i+i)%i,De=Math.floor(re/Le+.4);xe=Math.round(Y/i)*i+De*Le,Math.abs(xe-Y)>i/2&&(xe+=Y>xe?i:-i),X=!0,ne=0}X&&(Y+=(xe-Y)*p,Math.abs(xe-Y)<_&&(Y=xe,X=!1)),gt&&(Math.abs(ne)>1e-4||X)&&ht(gt);const K=(Y%i+i)%i,ue=Math.round(K/Le)%le,j=ue%Q;for(let re=0;re<le;re++){const Qe=-re*Le+Y;we[re].uniforms.uBaseAngle.value=Qe;const et=(Qe%i+i)%i,Kt=Math.cos(et),Lt=A(.3,.6,Kt);ke[re].visible=Lt>.01;let Ci;ke[re].visible?C?Ci=re===_t?Lt:Lt*m:Ci=re===ue?Lt:Lt*m:Ci=0,Be[re]=Ci;const Rr=we[re].uniforms.uOpacity.value;we[re].uniforms.uOpacity.value+=(Be[re]-Rr)*h}if(j!==Ee&&t()[j]){Ee=j;const re=($=ie(M))==null?void 0:$.closest("c-reel");re&&re.dispatchEvent(new CustomEvent("activecard",{bubbles:!0,detail:{project:t()[j],index:j}}))}I.render(B,J)}return D(),requestAnimationFrame(()=>{var K;const te=(K=ie(M))==null?void 0:K.closest("c-reel");te&&t()[0]&&(Ee=0,te.dispatchEvent(new CustomEvent("activecard",{bubbles:!0,detail:{project:t()[0],index:0}})))}),()=>{var te,K,ue;F=!0,window.removeEventListener("resize",N),cancelAnimationFrame(H),q&&q.disconnect(),We.disconnect(),(te=ie(M))==null||te.removeEventListener("mousemove",Te),(K=ie(M))==null||K.removeEventListener("mouseleave",T),(ue=ie(M))==null||ue.removeEventListener("click",g),L&&(L.removeEventListener("wheel",oe),L.removeEventListener("touchstart",pe),L.removeEventListener("touchmove",Me),L.removeEventListener("touchend",Ae)),I.domElement.removeEventListener("webglcontextlost",se),I.domElement.removeEventListener("webglcontextrestored",ae),ce.clear(),B.clear(),k.dispose();for(const j of we)j.dispose();Pe.forEach(j=>{j.userData.materials=null,j.dispose()}),Pe.clear(),we.length=0,ke.length=0,I.dispose(),I.forceContextLoss(),I.domElement.parentNode&&I.domElement.parentNode.removeChild(I.domElement)}});var x=fo(),b=Vr(x);{var P=I=>{var H=H0();Vi(H,21,t,zi,(q,F)=>{var B=G0();He(()=>Qt(B,"href",ie(F).url)),He(()=>Qt(B,"title",ie(F).title)),He(()=>Qt(B,"backgroundimage",ie(F).thumbnail_base)),He(()=>Qt(B,"overlayimage",ie(F).thumbnail_overlay)),Oe(q,B)}),Oe(I,H)},V=I=>{var H=k0();lr(H,q=>zt(M,q),()=>ie(M)),Oe(I,H)};Vt(b,I=>{ie(E)?I(P):I(V,!1)})}Oe(n,x),gn()}var X0=Ge('<div class="text svelte-1v32imz"><div class="text-md"><!></div></div>'),q0=Ge('<header><div class="heading svelte-1v32imz"><h2 class="svelte-1v32imz"><!></h2></div> <!></header>');function Y0(n,e){_n(e,!0);let t=qe(e,"title",3,""),i=qe(e,"description",3,""),r=qe(e,"layout",3,"column");const s=Ui(()=>t().replace(/^<p>(.*)<\/p>$/s,"$1")),a=Ui(()=>i().replace(/^<p>(.*)<\/p>$/s,"$1"));var o=q0();let c;var l=fe(o),f=fe(l),u=fe(f);$n(u,()=>ie(s));var d=nt(l,2);{var p=_=>{var v=X0(),m=fe(v),h=fe(m);$n(h,()=>ie(a)),Oe(_,v)};Vt(d,_=>{i()&&_(p)})}He(()=>c=Hr(o,1,"header svelte-1v32imz",null,c,{"is-row":r()==="row"})),Oe(n,o),gn()}var $0=Ge('<img loading="lazy" class="svelte-1pcp5jh"/>'),Z0=Ge('<figcaption class="caption text-sm svelte-1pcp5jh"> </figcaption>'),K0=Ge('<figure class="figure svelte-1pcp5jh"><div class="img-wrap svelte-1pcp5jh"><!></div> <!></figure>'),j0=Ge('<section class="section"><div><div class="grid svelte-1pcp5jh"></div></div></section>');function J0(n,e){let t=qe(e,"images",19,()=>[]),i=qe(e,"spacing",3,"stack");var r=j0(),s=fe(r);let a;var o=fe(s);Vi(o,21,t,zi,(c,l)=>{var f=K0(),u=fe(f),d=fe(u);{var p=m=>{var h=$0();He(()=>{Gt(h,"src",ie(l).url),Gt(h,"alt",ie(l).alt||"")}),Oe(m,h)};Vt(d,m=>{ie(l).url&&m(p)})}var _=nt(u,2);{var v=m=>{var h=Z0(),y=fe(h);He(()=>Wt(y,ie(l).caption)),Oe(m,h)};Vt(_,m=>{ie(l).caption&&m(v)})}Oe(c,f)}),He(()=>a=Hr(s,1,"container-fw py-sm",null,a,{"pt-0":i()==="trim"})),Oe(n,r)}var Q0=Ge('<p class="headling svelte-h8mvjh"> </p>'),ex=Ge('<div class="col svelte-h8mvjh"><!> <div class="text-md"><!></div></div>'),tx=Ge('<section class="section svelte-h8mvjh"><div></div></section>');function nx(n,e){_n(e,!0);let t=qe(e,"columns",3,"4"),i=qe(e,"items",19,()=>[]);const r=Ui(()=>Math.max(1,Number(t())-i().length+1));var s=tx(),a=fe(s);Vi(a,21,i,zi,(o,c,l)=>{var f=ex(),u=fe(f);{var d=v=>{var m=Q0(),h=fe(m);He(()=>Wt(h,ie(c).heading)),Oe(v,m)};Vt(u,v=>{ie(c).heading&&v(d)})}var p=nt(u,2),_=fe(p);$n(_,()=>ie(c).content),He(()=>Rs(f,l===0?`grid-column-start: ${ie(r)}`:"")),Oe(o,f)}),He(()=>Hr(a,1,`grid col-${t()??""}`,"svelte-h8mvjh")),Oe(n,s),gn()}var ix=Ge("<h5> </h5>"),rx=Ge("<h5> </h5>"),sx=Ge('<div class="cell svelte-1k4htmo"><!> <div class="text-md"><!></div></div>'),ax=Ge('<section class="section"><div class="container-fw py-sm"><div></div></div></section>');function ox(n,e){_n(e,!0);let t=qe(e,"columns",3,"4"),i=qe(e,"items",19,()=>[]);const r=Ui(()=>Math.max(1,Number(t())-i().length+1));var s=ax(),a=fe(s),o=fe(a);Vi(o,21,i,zi,(c,l,f)=>{var u=sx(),d=fe(u);{var p=h=>{var y=ix(),M=fe(y);He(()=>Wt(M,ie(l).heading)),Oe(h,y)},_=h=>{var y=rx(),M=fe(y);He(E=>Wt(M,`(${E??""})`),[()=>String(f+1).padStart(2,"0")]),Oe(h,y)};Vt(d,h=>{ie(l).heading?h(p):h(_,!1)})}var v=nt(d,2),m=fe(v);$n(m,()=>ie(l).description),He(()=>Rs(u,f===0?`grid-column-start: ${ie(r)}`:"")),Oe(c,u)}),He(()=>Hr(o,1,`grid col-${t()??""}`,"svelte-1k4htmo")),Oe(n,s),gn()}var lx=Ge('<img loading="lazy" class="svelte-144qpa3"/>'),cx=Ge('<figcaption class="caption text-sm svelte-144qpa3"> </figcaption>'),ux=Ge('<section class="section-fw"><figure class="figure svelte-144qpa3"><div class="img-wrap svelte-144qpa3"><!></div> <!></figure></section>');function fx(n,e){let t=qe(e,"image",3,""),i=qe(e,"alt",3,""),r=qe(e,"caption",3,"");var s=ux(),a=fe(s),o=fe(a),c=fe(o);{var l=d=>{var p=lx();He(()=>{Gt(p,"src",t()),Gt(p,"alt",i())}),Oe(d,p)};Vt(c,d=>{t()&&d(l)})}var f=nt(o,2);{var u=d=>{var p=cx(),_=fe(p);He(()=>Wt(_,r())),Oe(d,p)};Vt(f,d=>{r()&&d(u)})}Oe(n,s)}Ht("c-header",Th,["rootpath","links"]),Ht("c-footer",Ph,["fixed","links"]),Ht("c-preloader",Ih,["title","images"]),Ht("l-home",Oh,["eyebrow","title","buttonlabel","buttonhref","projects"]),Ht("c-button",Yh,["href","label","active"]),Ht("c-indexcard",jh,["href","title","backgroundimage","overlayimage"]),Ht("c-asterisk",F0,["images"]),Ht("c-helix",B0,["images"]),Ht("c-drum",V0,["images"]),Ht("c-reel",W0,["projects"]),Ht("b-header",Y0,["title","description","layout"]),Ht("b-img",J0,["images","spacing"]),Ht("b-text",nx,["columns","items"]),Ht("b-grid",ox,["columns","items"]),Ht("b-fullbleed",fx,["image","alt","caption"]),Ht("l-about",Hh,["images","items"]),Ht("l-404",Xh,["title","message","buttonlabel","buttonhref"]),console.log("Svelte components loaded")})();

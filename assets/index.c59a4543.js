import{w as Ie,S as G,i as T,s as U,e as le,a as S,b as m,t as I,c as u,d as q,f as z,g as Ve,h as V,j as h,k as x,l as oe,m as E,n as ae,r as re,o as ke,p as Be,q as ie,u as Oe,v as ce,x as k,y as ue,z as P,A as fe,B as de,C as ge,D as Se,E as K,F as pe,G as Y,H as Q,I as ze,J as Ce,K as Ne,L as Z,M as me,N as ee,O as je}from"./vendor.41c0da5c.js";const Le=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}};Le();const Me=JSON.parse(localStorage.getItem("gyms")),te=Ie(Me);te.subscribe(l=>{typeof l=="object"&&l!=null&&localStorage.setItem("gyms",JSON.stringify(l))});function Xe(l){l.slice(0,1)==="#"&&(l=l.slice(1));const t=parseInt(l.substr(0,2),16),s=parseInt(l.substr(2,2),16),n=parseInt(l.substr(4,2),16);return(t*299+s*587+n*114)/1e3>=128?"black":"white"}const J={red:"#ce0000",green:"#0f480c",yellow:"#dcd138",orange:"#ff7200",black:"#000000",pink:"#ff00ed",blue:"#0093ff",purple:"#822fe0",lime:"#05ff00",white:"#ffffff"};function Pe(l,t){let s=t.filter((e,o)=>{for(const a of e.climb_groups)if(a.climb_id==l)return e});return s.length<1?s="aaa":s=s[0].name,s=s.toLowerCase(),s.split("/").length>1&&(s=s.split("/")[0]),J[s]?J[s]:"#0000ff"}function Ae(l,t){let s=t.filter((e,o)=>{for(const a of e.climb_groups)if(a.climb_id==l)return e});if(s.length<1?s="aaa":s=s[0].name,s=s.toLowerCase(),s.split("/").length>1){const e=s.split("/");return`--dot-col: linear-gradient(315deg, ${J[e[0]]} 50%, ${J[e[1]]} 50%)`}return`--dot-col: ${J[s]?J[s]:"#0000ff"}`}const De={uiaa:{2:"III",3:"IV-",3.44:"IV",3.89:"IV+",4.33:"V-",4.67:"V",4.92:"V+",5.5:"VI",5.21:"VI-",5.78:"VI+",6.06:"VII-",6.33:"VII",6.56:"VII+",6.78:"VIII-",7:"VIII",7.22:"VIII+",7.44:"IX-",7.67:"IX",7.89:"IX+",8.11:"X-",8.33:"X",8.56:"X+",8.78:"XI-",9:"XI",9.22:"XI+",9.44:"XII-"},yds:{2:"5.3",3:"5.4",4:"5.5",4.33:"5.6",4.67:"5.7",5:"5.8",5.33:"5.9",5.67:"5.10a",6:"5.10b",6.5:"5.11a",6.17:"5.10c",6.33:"5.10d",6.67:"5.11b",6.83:"5.11c",7:"5.11d",7.5:"5.12c",7.17:"5.12a",7.33:"5.12b",7.67:"5.12d",7.83:"5.13a",8:"5.13b",8.5:"5.14a",8.17:"5.13c",8.33:"5.13d",8.67:"5.14b",8.83:"5.14c",9:"5.14d",9.5:"5.15c",9.17:"5.15a",9.33:"5.15b"},french:{2:"2",2.5:"2",3:"3a",3.33:"3b",3.67:"3c",4:"4a",4.33:"4b",4.67:"4c",5:"5a",5.17:"5a+",5.33:"5b",5.5:"5b+",5.67:"5c",5.83:"5c+",6:"6a",6.17:"6a+",6.33:"6b",6.5:"6b+",6.67:"6c",6.83:"6c+",7:"7a",7.17:"7a+",7.33:"7b",7.5:"7b+",7.67:"7c",7.83:"7c+",8:"8a",8.17:"8a+",8.33:"8b",8.5:"8b+",8.67:"8c",8.83:"8c+",9:"9a",9.17:"9a+",9.33:"9b",9.5:"9b+"},french_boulder:{2:"2",2.5:"2",2.75:"2+",3:"3a",3.33:"3b",3.67:"3c",4:"4a",4.33:"4b",4.67:"4c",5:"5a",5.17:"5a+",5.33:"5b",5.5:"5b+",5.67:"5c",5.83:"5c+",6:"6a",6.17:"6a+",6.33:"6b",6.5:"6b+",6.67:"6c",6.83:"6c+",7:"7a",7.17:"7a+",7.33:"7b",7.5:"7b+",7.67:"7c",7.83:"7c+",8:"8a",8.17:"8a+",8.33:"8b",8.5:"8b+",8.67:"8c",8.83:"8c+",9:"9a",9.17:"9a+",9.33:"9b",9.5:"9b+"},french_rounded:{2:"2",2.5:"2",2.75:"2+",3:"3",3.33:"3+",3.67:"4-",4:"4",4.33:"4+",4.67:"5-",5:"5",5.5:"5+",6:"6a",6.5:"6b+",6.17:"6a+",6.33:"6b",6.67:"6c",6.83:"6c+",7:"7a",7.5:"7b+",7.17:"7a+",7.33:"7b",7.67:"7c",7.83:"7c+",8:"8a",8.5:"8b+",8.17:"8a+",8.33:"8b",8.67:"8c",8.83:"8c+",9:"9a",9.5:"9b+",9.17:"9a+",9.33:"9b"},ewbank:{2:"7",3:"8",3.33:"9",3.67:"10",4:"11",4.33:"12",4.66:"13",5:"14",5.33:"15",5.67:"16",6:"17",6.5:"20",6.17:"18",6.33:"19",6.67:"21",6.83:"22",7:"23",7.5:"26",7.17:"24",7.33:"25",7.67:"27",7.83:"28",8:"29",8.5:"32",8.17:"30",8.33:"31",8.67:"33",8.83:"34",9:"35",9.5:"38",9.17:"36",9.33:"37"},british:{2:"B0",3:"B1",3.83:"B2",5:"B3",6:"B4",6.28:"B5",6.56:"B6",6.83:"B7",7.11:"B8",7.39:"B9",7.67:"B10",7.87:"B11",8.08:"B12",8.29:"B13",8.5:"B14",8.67:"B15",8.83:"B16",9:"B17"},v_grade:{2:"VB",3:"VB",3.5:"V0-",4:"V0",4.5:"V0+",5:"V1",5.5:"V2",6:"V3",6.33:"V4",6.67:"V5",7:"V6",7.2:"V7",7.4:"V8",7.6:"V9",7.8:"V10",8:"V11",8.17:"V12",8.33:"V13",8.5:"V14",8.67:"V15",8.83:"V16",9:"V17"}};function ne(l,t){return De[t][Number(l)]}const he="https://api.toplogger.nu/v1";function He(l){return`https://cdn1.toplogger.nu/images/gyms/${l}/floorplan.svg`}function Je(l){const t={filters:{deleted:!1,live:!0}};return`${he}/gyms/${l}/climbs?json_params=${encodeURIComponent(JSON.stringify(t))}`}function Re(l){const t={filters:{gym_id:l,deleted:!1,live:!0,score_system:"none"},includes:["climb_groups"]};return`${he}/groups?json_params=${encodeURIComponent(JSON.stringify(t))}`}async function qe(l,t){const[s,n,e]=await Promise.all([fetch(Je(l)),fetch(Re(l)),fetch(He(t))]).then(o=>Promise.all([o[0].json(),o[1].json(),o[2].text()])).then(o=>o).catch(o=>{throw new Error(o)});return[s,n,e]}function _e(l,t,s){const n=l.slice();return n[5]=t[s],n}function be(l){let t,s=l[1],n=[];for(let e=0;e<s.length;e+=1)n[e]=ve(_e(l,s,e));return{c(){for(let e=0;e<n.length;e+=1)n[e].c();t=le()},m(e,o){for(let a=0;a<n.length;a+=1)n[a].m(e,o);S(e,t,o)},p(e,o){if(o&2){s=e[1];let a;for(a=0;a<s.length;a+=1){const r=_e(e,s,a);n[a]?n[a].p(r,o):(n[a]=ve(r),n[a].c(),n[a].m(t.parentNode,t))}for(;a<n.length;a+=1)n[a].d(1);n.length=s.length}},d(e){Ve(n,e),e&&z(t)}}}function ve(l){let t,s=l[5].name+"",n,e;return{c(){t=m("option"),n=I(s),t.__value=e=l[5],t.value=t.__value},m(o,a){S(o,t,a),u(t,n)},p(o,a){a&2&&s!==(s=o[5].name+"")&&q(n,s),a&2&&e!==(e=o[5])&&(t.__value=e,t.value=t.__value)},d(o){o&&z(t)}}}function Ee(l){let t,s,n,e,o,a,r=l[1]&&be(l);return{c(){t=m("div"),s=m("label"),s.textContent="Gym",n=V(),e=m("select"),r&&r.c(),h(s,"for","gym"),h(e,"name",""),h(e,"id","gym"),l[0]===void 0&&x(()=>l[3].call(e)),h(t,"class","select svelte-1f5yysq")},m(i,d){S(i,t,d),u(t,s),u(t,n),u(t,e),r&&r.m(e,null),oe(e,l[0]),o||(a=[E(e,"change",l[3]),E(e,"change",l[4])],o=!0)},p(i,[d]){i[1]?r?r.p(i,d):(r=be(i),r.c(),r.m(e,null)):r&&(r.d(1),r=null),d&3&&oe(e,i[0])},i:ae,o:ae,d(i){i&&z(t),r&&r.d(),o=!1,re(a)}}}function Fe(l,t,s){let n;ke(l,te,i=>s(1,n=i));let e;const o=Be();ie(async()=>{if(n==null){console.log("fetching gyms");const d=await(await fetch("https://api.toplogger.nu/v1/gyms/")).json();te.set(d)}});function a(){e=Oe(this),s(0,e)}return[e,n,o,a,()=>{o("change",e)}]}class Ge extends G{constructor(t){super();T(this,t,Fe,Ee,U,{})}}function ye(l){const t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],s=l?new Date(l):new Date,n=t[s.getMonth()],e=String(s.getDate()).padStart(2,"0"),o=s.getFullYear();return`${e} ${n} ${o}`}function we(l){let t,s,n,e,o,a,r,i,d,f=ne(l[0].grade,"french_boulder")+"",c,_,C,F,N=l[0].nr_of_ascends+"",j,$,g,W,A=l[0].average_opinion+"",B,L,M,O,R,p=ye(l[0].date_set)+"",v,b,y,X,D;return{c(){t=m("div"),s=m("div"),n=m("h3"),n.textContent="Route data",e=V(),o=m("button"),o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>',a=V(),r=m("ul"),i=m("li"),d=I("grade: "),c=I(f),_=V(),C=m("li"),F=I("ascends: "),j=I(N),$=V(),g=m("li"),W=I("average opinion: "),B=I(A),L=I("/5.0"),M=V(),O=m("li"),R=I("date set: "),v=I(p),h(n,"class","svelte-1uei8sl"),h(o,"class","svelte-1uei8sl"),h(s,"class","preview__header svelte-1uei8sl"),h(i,"class","svelte-1uei8sl"),h(C,"class","svelte-1uei8sl"),h(g,"class","svelte-1uei8sl"),h(O,"class","svelte-1uei8sl"),h(t,"class","preview svelte-1uei8sl")},m(w,H){S(w,t,H),u(t,s),u(s,n),u(s,e),u(s,o),u(t,a),u(t,r),u(r,i),u(i,d),u(i,c),u(r,_),u(r,C),u(C,F),u(C,j),u(r,$),u(r,g),u(g,W),u(g,B),u(g,L),u(r,M),u(r,O),u(O,R),u(O,v),y=!0,X||(D=E(o,"click",l[1]),X=!0)},p(w,H){l=w,(!y||H&1)&&f!==(f=ne(l[0].grade,"french_boulder")+"")&&q(c,f),(!y||H&1)&&N!==(N=l[0].nr_of_ascends+"")&&q(j,N),(!y||H&1)&&A!==(A=l[0].average_opinion+"")&&q(B,A),(!y||H&1)&&p!==(p=ye(l[0].date_set)+"")&&q(v,p)},i(w){y||(x(()=>{b||(b=ce(t,ge,{duration:200,easing:de},!0)),b.run(1)}),y=!0)},o(w){b||(b=ce(t,ge,{duration:200,easing:de},!1)),b.run(0),y=!1},d(w){w&&z(t),w&&b&&b.end(),X=!1,D()}}}function Te(l){let t,s,n=l[0]&&we(l);return{c(){n&&n.c(),t=le()},m(e,o){n&&n.m(e,o),S(e,t,o),s=!0},p(e,[o]){e[0]?n?(n.p(e,o),o&1&&k(n,1)):(n=we(e),n.c(),k(n,1),n.m(t.parentNode,t)):n&&(ue(),P(n,1,1,()=>{n=null}),fe())},i(e){s||(k(n),s=!0)},o(e){P(n),s=!1},d(e){n&&n.d(e),e&&z(t)}}}function Ue(l,t,s){let{data:n}=t;function e(o){Se.call(this,l,o)}return l.$$set=o=>{"data"in o&&s(0,n=o.data)},[n,e]}class We extends G{constructor(t){super();T(this,t,Ue,Te,U,{data:0})}}function xe(l){let t,s,n,e,o,a,r,i,d,f;return r=new Ge({}),r.$on("change",Ke),{c(){t=m("header"),s=m("label"),s.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>',n=V(),e=m("input"),o=V(),a=m("div"),K(r.$$.fragment),h(s,"for","menuToggle"),h(e,"type","checkbox"),h(e,"id","menuToggle"),h(e,"class","svelte-zlos4x"),h(a,"class","menu svelte-zlos4x"),pe(a,"open",l[0]),h(t,"class","svelte-zlos4x")},m(c,_){S(c,t,_),u(t,s),u(t,n),u(t,e),e.checked=l[0],u(t,o),u(t,a),Y(r,a,null),i=!0,d||(f=E(e,"change",l[1]),d=!0)},p(c,[_]){_&1&&(e.checked=c[0]),_&1&&pe(a,"open",c[0])},i(c){i||(k(r.$$.fragment,c),i=!0)},o(c){P(r.$$.fragment,c),i=!1},d(c){c&&z(t),Q(r),d=!1,f()}}}const Ke=async l=>{};function Ye(l,t,s){let n=!1;function e(){n=this.checked,s(0,n)}return[n,e]}class Qe extends G{constructor(t){super();T(this,t,Ye,xe,U,{})}}const{window:se}=Ne;function $e(l){let t,s;return t=new We({props:{data:l[4]}}),t.$on("click",l[7]),{c(){K(t.$$.fragment)},m(n,e){Y(t,n,e),s=!0},p(n,e){const o={};e&16&&(o.data=n[4]),t.$set(o)},i(n){s||(k(t.$$.fragment,n),s=!0)},o(n){P(t.$$.fragment,n),s=!1},d(n){Q(t,n)}}}function Ze(l){let t,s,n,e,o,a,r,i,d;x(l[6]),t=new Qe({});let f=l[2]&&$e(l);return{c(){K(t.$$.fragment),s=V(),n=m("main"),e=m("div"),a=V(),f&&f.c(),h(e,"class","svgContainer svelte-wdcirs")},m(c,_){Y(t,c,_),S(c,s,_),S(c,n,_),u(n,e),e.innerHTML=l[3],u(n,a),f&&f.m(n,null),r=!0,i||(d=[E(se,"resize",l[6]),ze(o=l[5].call(null,e,l[3]))],i=!0)},p(c,[_]){(!r||_&8)&&(e.innerHTML=c[3]),o&&Ce(o.update)&&_&8&&o.update.call(null,c[3]),c[2]?f?(f.p(c,_),_&4&&k(f,1)):(f=$e(c),f.c(),k(f,1),f.m(n,null)):f&&(ue(),P(f,1,1,()=>{f=null}),fe())},i(c){r||(k(t.$$.fragment,c),k(f),r=!0)},o(c){P(t.$$.fragment,c),P(f),r=!1},d(c){Q(t,c),c&&z(s),c&&z(n),f&&f.d(),i=!1,re(d)}}}function et(l,t,s){let n=!1,e=[],o="",a,r,i=window.innerWidth,d=window.innerHeight;function f(N,j){return{update(){console.log("updated svg"),_(e,a)},destroy(){}}}function c(){Z("svg.flex").attr("width",i).attr("height",d)}function _(N,j){const $=Z("svg.flex").attr("width",i).attr("height",d);me("g#zoom_layer").each(function(){let p=this;Z(p.parentNode).insert("g").attr("class","zoom").append(()=>p)});const g=$.select("#zoom_layer").node().getBBox();e=$.select("#zoom_layer").attr("transform",`translate(${-g.x}, ${-g.y})`).append("g").attr("class","routes").selectAll("g").data(N).enter().append("g").attr("transform",p=>`translate(${g.width*p.position_x}, ${g.height*p.position_y})`).attr("class","route").on("click",(p,v)=>{p.stopPropagation(),s(4,r=v),s(2,n=!0);const b=g.width/i*.75,y=g.width*v.position_x-g.x,X=g.height*v.position_y-g.y,D=i/2-2.5,w=d/2-2.5;$.transition().duration(500).call(L.transform,ee.translate(-y*b+D,-X*b+w).scale(b))}).append("foreignObject").attr("x",0).attr("y",0).attr("width",1).attr("height",1).attr("class","scale"),e.append("xhtml:div").html(p=>ne(p.grade,"french_boulder")).attr("style",p=>Ae(p.id,j)).style("color",p=>Xe(Pe(p.id,j)));const A=$.select(".zoom"),B=150,L=je().translateExtent([[-B,-B],[g.width+B,g.height+B]]).scaleExtent([.1,2.5]).on("zoom",(p,v)=>{A.attr("transform",p.transform),e.attr("transform",`scale(${1/p.transform.k})`)}),M=d/g.height*.9,O=i/2-g.width/2*M,R=d/2-g.height/2*M;$.call(L).call(L.transform,ee.translate(O,R).scale(M)),$.select(".zoom").attr("transform",`translate(${O}, ${R}) scale(${M})`),me("g.map-region").on("click",function(p){p.stopPropagation();const v=$.select(`#${this.id}`).node().getBBox(),b=d/v.height*.8,y=-(v.x-g.x)*b,X=-(v.y-g.y)*b,D=d/2-v.height/2*b,w=i/2-v.width/2*b;$.transition().duration(500).call(L.transform,ee.translate(y+w,X+D).scale(b))})}ie(async()=>{s(3,[e,a,o]=await qe(8,"bruut_boulder_breda"),o)});function C(){s(1,d=se.innerHeight),s(0,i=se.innerWidth)}const F=()=>{s(2,n=!1)};return l.$$.update=()=>{l.$$.dirty&1&&c(),l.$$.dirty&2&&c()},[i,d,n,o,r,f,C,F]}class tt extends G{constructor(t){super();T(this,t,et,Ze,U,{})}}new tt({target:document.body,props:{}});
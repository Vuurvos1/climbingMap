import{w as Oe,S as R,i as T,s as U,e as oe,a as z,b,t as B,c as f,d as F,f as C,g as Se,h as $,j as h,k as K,l as se,m as H,n as ae,r as re,o as ze,p as ie,q as ce,u as Ce,v as fe,x as S,y as ue,z as L,A as de,B as me,C as ge,D as je,E as Y,F as pe,G as Q,H as Z,I as Ne,J as Ge,K as Me,L as he,M as _e,N as ee,O as Le}from"./vendor.41c0da5c.js";const Xe=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}};Xe();const Ae=JSON.parse(localStorage.getItem("gyms")),te=Oe(Ae);te.subscribe(l=>{typeof l=="object"&&l!=null&&localStorage.setItem("gyms",JSON.stringify(l))});function De(l){l.slice(0,1)==="#"&&(l=l.slice(1));const n=parseInt(l.substr(0,2),16),s=parseInt(l.substr(2,2),16),t=parseInt(l.substr(4,2),16);return(n*299+s*587+t*114)/1e3>=128?"black":"white"}const x={red:"#ce0000",green:"#0f480c",yellow:"#dcd138",geel:"#dcd138",orange:"#ff7200",black:"#000000",pink:"#ff00ed",blue:"#0093ff",purple:"#822fe0",lime:"#05ff00",white:"#ffffff"};function be(l,n,s=!1){let t=n.filter((o,a)=>{for(const r of o.climb_groups)if(r.climb_id==l)return o});if(t.length<1)t="";else{if(t[0].color!=null)return t[0].color.toLowerCase();t=t[0].name}if(t=t.toLowerCase(),t.split("/").length>1){const o=t.split("/");if(s)return`--dot-col: linear-gradient(315deg, ${x[o[0]]} 50%, ${x[o[1]]} 50%)`;t=o[0]}const e=x[t]?x[t]:"#0000ff";return s?`--dot-col: ${e}`:e}const Ee={uiaa:{2:"III",3:"IV-",3.44:"IV",3.89:"IV+",4.33:"V-",4.67:"V",4.92:"V+",5.5:"VI",5.21:"VI-",5.78:"VI+",6.06:"VII-",6.33:"VII",6.56:"VII+",6.78:"VIII-",7:"VIII",7.22:"VIII+",7.44:"IX-",7.67:"IX",7.89:"IX+",8.11:"X-",8.33:"X",8.56:"X+",8.78:"XI-",9:"XI",9.22:"XI+",9.44:"XII-"},yds:{2:"5.3",3:"5.4",4:"5.5",4.33:"5.6",4.67:"5.7",5:"5.8",5.33:"5.9",5.67:"5.10a",6:"5.10b",6.5:"5.11a",6.17:"5.10c",6.33:"5.10d",6.67:"5.11b",6.83:"5.11c",7:"5.11d",7.5:"5.12c",7.17:"5.12a",7.33:"5.12b",7.67:"5.12d",7.83:"5.13a",8:"5.13b",8.5:"5.14a",8.17:"5.13c",8.33:"5.13d",8.67:"5.14b",8.83:"5.14c",9:"5.14d",9.5:"5.15c",9.17:"5.15a",9.33:"5.15b"},french:{2:"2",2.5:"2",3:"3a",3.33:"3b",3.67:"3c",4:"4a",4.33:"4b",4.67:"4c",5:"5a",5.17:"5a+",5.33:"5b",5.5:"5b+",5.67:"5c",5.83:"5c+",6:"6a",6.17:"6a+",6.33:"6b",6.5:"6b+",6.67:"6c",6.83:"6c+",7:"7a",7.17:"7a+",7.33:"7b",7.5:"7b+",7.67:"7c",7.83:"7c+",8:"8a",8.17:"8a+",8.33:"8b",8.5:"8b+",8.67:"8c",8.83:"8c+",9:"9a",9.17:"9a+",9.33:"9b",9.5:"9b+"},french_boulder:{2:"2",2.5:"2",2.75:"2+",3:"3a",3.33:"3b",3.67:"3c",4:"4a",4.33:"4b",4.67:"4c",5:"5a",5.17:"5a+",5.33:"5b",5.5:"5b+",5.67:"5c",5.83:"5c+",6:"6a",6.17:"6a+",6.33:"6b",6.5:"6b+",6.67:"6c",6.83:"6c+",7:"7a",7.17:"7a+",7.33:"7b",7.5:"7b+",7.67:"7c",7.83:"7c+",8:"8a",8.17:"8a+",8.33:"8b",8.5:"8b+",8.67:"8c",8.83:"8c+",9:"9a",9.17:"9a+",9.33:"9b",9.5:"9b+"},french_rounded:{2:"2",2.5:"2",2.75:"2+",3:"3",3.33:"3+",3.67:"4-",4:"4",4.33:"4+",4.67:"5-",5:"5",5.5:"5+",6:"6a",6.5:"6b+",6.17:"6a+",6.33:"6b",6.67:"6c",6.83:"6c+",7:"7a",7.5:"7b+",7.17:"7a+",7.33:"7b",7.67:"7c",7.83:"7c+",8:"8a",8.5:"8b+",8.17:"8a+",8.33:"8b",8.67:"8c",8.83:"8c+",9:"9a",9.5:"9b+",9.17:"9a+",9.33:"9b"},ewbank:{2:"7",3:"8",3.33:"9",3.67:"10",4:"11",4.33:"12",4.66:"13",5:"14",5.33:"15",5.67:"16",6:"17",6.5:"20",6.17:"18",6.33:"19",6.67:"21",6.83:"22",7:"23",7.5:"26",7.17:"24",7.33:"25",7.67:"27",7.83:"28",8:"29",8.5:"32",8.17:"30",8.33:"31",8.67:"33",8.83:"34",9:"35",9.5:"38",9.17:"36",9.33:"37"},british:{2:"B0",3:"B1",3.83:"B2",5:"B3",6:"B4",6.28:"B5",6.56:"B6",6.83:"B7",7.11:"B8",7.39:"B9",7.67:"B10",7.87:"B11",8.08:"B12",8.29:"B13",8.5:"B14",8.67:"B15",8.83:"B16",9:"B17"},v_grade:{2:"VB",3:"VB",3.5:"V0-",4:"V0",4.5:"V0+",5:"V1",5.5:"V2",6:"V3",6.33:"V4",6.67:"V5",7:"V6",7.2:"V7",7.4:"V8",7.6:"V9",7.8:"V10",8:"V11",8.17:"V12",8.33:"V13",8.5:"V14",8.67:"V15",8.83:"V16",9:"V17"}};function ne(l,n){return Ee[n][Number(l)]}const ye="https://api.toplogger.nu/v1";function Fe(l){return`https://cdn1.toplogger.nu/images/gyms/${l}/floorplan.svg`}function He(l){const n={filters:{deleted:!1,live:!0}};return`${ye}/gyms/${l}/climbs?json_params=${encodeURIComponent(JSON.stringify(n))}`}function Je(l){const n={filters:{gym_id:l,deleted:!1,live:!0,score_system:"none"},includes:["climb_groups"]};return`${ye}/groups?json_params=${encodeURIComponent(JSON.stringify(n))}`}async function we(l,n){const[s,t,e]=await Promise.all([fetch(He(l)),fetch(Je(l)),fetch(Fe(n))]).then(o=>Promise.all([o[0].json(),o[1].json(),o[2].text()])).then(o=>o).catch(o=>{throw new Error(o)});return[s,t,e]}function ve(l,n,s){const t=l.slice();return t[5]=n[s],t}function Ie(l){let n,s=l[1],t=[];for(let e=0;e<s.length;e+=1)t[e]=Ve(ve(l,s,e));return{c(){for(let e=0;e<t.length;e+=1)t[e].c();n=oe()},m(e,o){for(let a=0;a<t.length;a+=1)t[a].m(e,o);z(e,n,o)},p(e,o){if(o&2){s=e[1];let a;for(a=0;a<s.length;a+=1){const r=ve(e,s,a);t[a]?t[a].p(r,o):(t[a]=Ve(r),t[a].c(),t[a].m(n.parentNode,n))}for(;a<t.length;a+=1)t[a].d(1);t.length=s.length}},d(e){Se(t,e),e&&C(n)}}}function Ve(l){let n,s=l[5].name+"",t,e;return{c(){n=b("option"),t=B(s),n.__value=e=l[5],n.value=n.__value},m(o,a){z(o,n,a),f(n,t)},p(o,a){a&2&&s!==(s=o[5].name+"")&&F(t,s),a&2&&e!==(e=o[5])&&(n.__value=e,n.value=n.__value)},d(o){o&&C(n)}}}function Pe(l){let n,s,t,e,o,a,r=l[1]&&Ie(l);return{c(){n=b("div"),s=b("label"),s.textContent="Gym",t=$(),e=b("select"),r&&r.c(),h(s,"for","gym"),h(e,"name",""),h(e,"id","gym"),l[0]===void 0&&K(()=>l[3].call(e)),h(n,"class","p-4")},m(c,g){z(c,n,g),f(n,s),f(n,t),f(n,e),r&&r.m(e,null),se(e,l[0]),o||(a=[H(e,"change",l[3]),H(e,"change",l[4])],o=!0)},p(c,[g]){c[1]?r?r.p(c,g):(r=Ie(c),r.c(),r.m(e,null)):r&&(r.d(1),r=null),g&3&&se(e,c[0])},i:ae,o:ae,d(c){c&&C(n),r&&r.d(),o=!1,re(a)}}}function qe(l,n,s){let t;ze(l,te,c=>s(1,t=c));let e;const o=ie();ce(async()=>{if(t==null){console.log("fetching gyms");const g=await(await fetch("https://api.toplogger.nu/v1/gyms/")).json();te.set(g)}});function a(){e=Ce(this),s(0,e)}return[e,t,o,a,()=>{o("change",e)}]}class Re extends R{constructor(n){super();T(this,n,qe,Pe,U,{})}}function ke(l){const n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],s=l?new Date(l):new Date,t=n[s.getMonth()],e=String(s.getDate()).padStart(2,"0"),o=s.getFullYear();return`${e} ${t} ${o}`}function Be(l){let n,s,t,e,o,a,r,c,g,u=ne(l[0].grade,"french_boulder")+"",i,m,j,J,X=l[0].nr_of_ascends+"",E,P,y,O,w=l[0].average_opinion+"",p,q,N,V,G,M=ke(l[0].date_set)+"",A,d,_,v,D;return{c(){n=b("div"),s=b("div"),t=b("h3"),t.textContent="Route data",e=$(),o=b("button"),o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>',a=$(),r=b("ul"),c=b("li"),g=B("grade: "),i=B(u),m=$(),j=b("li"),J=B("ascends: "),E=B(X),P=$(),y=b("li"),O=B("average opinion: "),p=B(w),q=B("/5.0"),N=$(),V=b("li"),G=B("date set: "),A=B(M),h(t,"class","mr-auto"),h(o,"class","bg-none border-none leading-none"),h(s,"class","flex flex-row items-center mb-4"),h(c,"class","list-none"),h(j,"class","list-none"),h(y,"class","list-none"),h(V,"class","list-none"),h(n,"class","preview fixed bottom-0 left-0 w-screen px-4 py-4 bg-white shadow-lg md:w-max md:right-4 md:left-auto md:bottom-4")},m(I,k){z(I,n,k),f(n,s),f(s,t),f(s,e),f(s,o),f(n,a),f(n,r),f(r,c),f(c,g),f(c,i),f(r,m),f(r,j),f(j,J),f(j,E),f(r,P),f(r,y),f(y,O),f(y,p),f(y,q),f(r,N),f(r,V),f(V,G),f(V,A),_=!0,v||(D=H(o,"click",l[1]),v=!0)},p(I,k){l=I,(!_||k&1)&&u!==(u=ne(l[0].grade,"french_boulder")+"")&&F(i,u),(!_||k&1)&&X!==(X=l[0].nr_of_ascends+"")&&F(E,X),(!_||k&1)&&w!==(w=l[0].average_opinion+"")&&F(p,w),(!_||k&1)&&M!==(M=ke(l[0].date_set)+"")&&F(A,M)},i(I){_||(K(()=>{d||(d=fe(n,ge,{duration:200,easing:me},!0)),d.run(1)}),_=!0)},o(I){d||(d=fe(n,ge,{duration:200,easing:me},!1)),d.run(0),_=!1},d(I){I&&C(n),I&&d&&d.end(),v=!1,D()}}}function Te(l){let n,s,t=l[0]&&Be(l);return{c(){t&&t.c(),n=oe()},m(e,o){t&&t.m(e,o),z(e,n,o),s=!0},p(e,[o]){e[0]?t?(t.p(e,o),o&1&&S(t,1)):(t=Be(e),t.c(),S(t,1),t.m(n.parentNode,n)):t&&(ue(),L(t,1,1,()=>{t=null}),de())},i(e){s||(S(t),s=!0)},o(e){L(t),s=!1},d(e){t&&t.d(e),e&&C(n)}}}function Ue(l,n,s){let{data:t}=n;function e(o){je.call(this,l,o)}return l.$$set=o=>{"data"in o&&s(0,t=o.data)},[t,e]}class xe extends R{constructor(n){super();T(this,n,Ue,Te,U,{data:0})}}function We(l){let n,s,t,e,o,a,r,c,g,u;return r=new Re({}),r.$on("change",l[4]),{c(){n=b("header"),s=b("label"),s.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>',t=$(),e=b("input"),o=$(),a=b("div"),Y(r.$$.fragment),h(s,"for","menuToggle"),h(s,"class","z-20"),h(e,"type","checkbox"),h(e,"id","menuToggle"),h(e,"class","w-0 h-0 hidden"),h(a,"class","menu fixed top-0 left-0 h-screen w-80 pt-12 bg-white shadow-lg svelte-3241ld"),pe(a,"open",l[1]),h(n,"class","fixed top-0 left-0 z-30 flex items-center px-4 py-2 bg-white shadow-lg svelte-3241ld")},m(i,m){z(i,n,m),f(n,s),f(n,t),f(n,e),e.checked=l[1],f(n,o),f(n,a),Q(r,a,null),c=!0,g||(u=H(e,"change",l[3]),g=!0)},p(i,[m]){m&2&&(e.checked=i[1]),m&2&&pe(a,"open",i[1])},i(i){c||(S(r.$$.fragment,i),c=!0)},o(i){L(r.$$.fragment,i),c=!1},d(i){i&&C(n),Z(r),g=!1,u()}}}function Ke(l,n,s){const t=ie();let e=!1,{selectedGym:o}=n;function a(){e=this.checked,s(1,e)}const r=c=>{s(0,o=c.detail),t("changeGym",c.detail)};return l.$$set=c=>{"selectedGym"in c&&s(0,o=c.selectedGym)},[o,e,t,a,r]}class Ye extends R{constructor(n){super();T(this,n,Ke,We,U,{selectedGym:0})}}const{window:le}=Me;function $e(l){let n,s;return n=new xe({props:{data:l[6]}}),n.$on("click",l[11]),{c(){Y(n.$$.fragment)},m(t,e){Q(n,t,e),s=!0},p(t,e){const o={};e&64&&(o.data=t[6]),n.$set(o)},i(t){s||(S(n.$$.fragment,t),s=!0)},o(t){L(n.$$.fragment,t),s=!1},d(t){Z(n,t)}}}function Qe(l){let n,s,t,e,o,a,r,c,g;K(l[9]),n=new Ye({}),n.$on("changeGym",l[10]);let u=l[2]&&$e(l);return{c(){Y(n.$$.fragment),s=$(),t=b("main"),e=b("div"),a=$(),u&&u.c(),h(e,"class","svgContainer h-screen svelte-1uvat6c")},m(i,m){Q(n,i,m),z(i,s,m),z(i,t,m),f(t,e),e.innerHTML=l[4],f(t,a),u&&u.m(t,null),r=!0,c||(g=[H(le,"resize",l[9]),Ne(o=l[8].call(null,e,l[4]))],c=!0)},p(i,[m]){(!r||m&16)&&(e.innerHTML=i[4]),o&&Ge(o.update)&&m&16&&o.update.call(null,i[4]),i[2]?u?(u.p(i,m),m&4&&S(u,1)):(u=$e(i),u.c(),S(u,1),u.m(t,null)):u&&(ue(),L(u,1,1,()=>{u=null}),de())},i(i){r||(S(n.$$.fragment,i),S(u),r=!0)},o(i){L(n.$$.fragment,i),L(u),r=!1},d(i){Z(n,i),i&&C(s),i&&C(t),u&&u.d(),c=!1,re(g)}}}function Ze(l,n,s){let t=!1,e=[],o="",a,r,c=1,g,u={},i=window.innerWidth,m=window.innerHeight;function j(y,O){return{update(){J(e,a)},destroy(){}}}function J(y,O){const w=he("svg.flex").attr("width",i).attr("height",m);_e("g#zoom_layer").each(function(){let d=this;he(d.parentNode).insert("g").attr("class","zoom").append(()=>d)});const p=w.select("#zoom_layer").node().getBBox();g=w.select("#zoom_layer").attr("transform",`translate(${-p.x}, ${-p.y})`).append("g").attr("class","routes"),s(3,e=g.selectAll("foreignObject").data(y).enter().append("foreignObject").on("click",(d,_)=>{d.stopPropagation(),s(6,r=_),s(2,t=!0);const v=p.width/i*.75,D=p.width*_.position_x-p.x,I=p.height*_.position_y-p.y,k=i/2-20,W=m/2-20;w.transition().duration(500).call(V.transform,ee.translate(-D*v+k,-I*v+W).scale(v))}).attr("x",d=>p.width*d.position_x).attr("y",d=>p.height*d.position_y).attr("width",40).attr("height",40)),e.append("xhtml:div").html(d=>ne(d.grade,"french_boulder")).attr("style",d=>be(d.id,O,!0)).style("color",d=>De(be(d.id,O,!1)));const q=w.select(".zoom"),N=150,V=Le().translateExtent([[-N,-N],[p.width+N,p.height+N]]).scaleExtent([.1,2.5]).on("zoom",(d,_)=>{q.attr("transform",d.transform),c=Math.round(1/d.transform.k*100)/100}),G=m/p.height*.9,M=i/2-p.width/2*G,A=m/2-p.height/2*G;w.call(V).call(V.transform,ee.translate(M,A).scale(G)),w.select(".zoom").attr("transform",`translate(${M}, ${A}) scale(${G})`),_e("g.map-region").on("click",function(d){d.stopPropagation();const _=w.select(`#${this.id}`).node().getBBox(),v=m/_.height*.8,D=-(_.x-p.x)*v,I=-(_.y-p.y)*v,k=m/2-_.height/2*v,W=i/2-_.width/2*v;w.transition().duration(500).call(V.transform,ee.translate(D+W,I+k).scale(v))})}ce(async()=>{s(3,[e,a,o]=await we(8,"bruut_boulder_breda"),e,s(5,a),s(4,o));let y;function O(){y=requestAnimationFrame(O),g&&g.attr("style",`--dot-scale: ${c}`)}return O(),()=>cancelAnimationFrame(y)});function X(){s(1,m=le.innerHeight),s(0,i=le.innerWidth)}const E=async y=>{s(7,u=y.detail),s(3,[e,a,o]=await we(u.id,u.id_name),e,s(5,a),s(4,o)),console.log(e,a)},P=()=>{s(2,t=!1)};return l.$$.update=()=>{l.$$.dirty&1,l.$$.dirty&2},[i,m,t,e,o,a,r,u,j,X,E,P]}class et extends R{constructor(n){super();T(this,n,Ze,Qe,U,{})}}new et({target:document.body,props:{}});

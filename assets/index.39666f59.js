import{w as T,S as q,i as x,s as U,e as w,a as k,t as I,b as L,c as P,d as i,f as N,g as A,h as Y,n as E,j as K,k as Q,m as Z,l as ee,o as te,p as ne,q as se,r as ae,u as re,v as oe,x as le,y as ie,z as F,A as H,B as J,C as ce}from"./vendor.ab9f0e66.js";const fe=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}};fe();function ue(t){t.slice(0,1)==="#"&&(t=t.slice(1));const n=parseInt(t.substr(0,2),16),e=parseInt(t.substr(2,2),16),a=parseInt(t.substr(4,2),16);return(n*299+e*587+a*114)/1e3>=128?"black":"white"}function R(t,n){let e=n.filter((r,o)=>{for(const c of r.climb_groups)if(c.climb_id==t)return r});e.length<1?e="aaa":e=e[0].name;const a={red:"ce0000",green:"0f480c",yellow:"dcd138",orange:"ff7200",black:"000000",pink:"ff00ed",blue:"0093ff",purple:"822fe0",lime:"05ff00",white:"ffffff"};return a[e.toLowerCase()]?a[e.toLowerCase()]:"0000ff"}const de={uiaa:{2:"III",3:"IV-",3.44:"IV",3.89:"IV+",4.33:"V-",4.67:"V",4.92:"V+",5.5:"VI",5.21:"VI-",5.78:"VI+",6.06:"VII-",6.33:"VII",6.56:"VII+",6.78:"VIII-",7:"VIII",7.22:"VIII+",7.44:"IX-",7.67:"IX",7.89:"IX+",8.11:"X-",8.33:"X",8.56:"X+",8.78:"XI-",9:"XI",9.22:"XI+",9.44:"XII-"},yds:{2:"5.3",3:"5.4",4:"5.5",4.33:"5.6",4.67:"5.7",5:"5.8",5.33:"5.9",5.67:"5.10a",6:"5.10b",6.5:"5.11a",6.17:"5.10c",6.33:"5.10d",6.67:"5.11b",6.83:"5.11c",7:"5.11d",7.5:"5.12c",7.17:"5.12a",7.33:"5.12b",7.67:"5.12d",7.83:"5.13a",8:"5.13b",8.5:"5.14a",8.17:"5.13c",8.33:"5.13d",8.67:"5.14b",8.83:"5.14c",9:"5.14d",9.5:"5.15c",9.17:"5.15a",9.33:"5.15b"},french:{2:"2",2.5:"2",3:"3a",3.33:"3b",3.67:"3c",4:"4a",4.33:"4b",4.67:"4c",5:"5a",5.17:"5a+",5.33:"5b",5.5:"5b+",5.67:"5c",5.83:"5c+",6:"6a",6.17:"6a+",6.33:"6b",6.5:"6b+",6.67:"6c",6.83:"6c+",7:"7a",7.17:"7a+",7.33:"7b",7.5:"7b+",7.67:"7c",7.83:"7c+",8:"8a",8.17:"8a+",8.33:"8b",8.5:"8b+",8.67:"8c",8.83:"8c+",9:"9a",9.17:"9a+",9.33:"9b",9.5:"9b+"},french_boulder:{2:"2",2.5:"2",2.75:"2+",3:"3a",3.33:"3b",3.67:"3c",4:"4a",4.33:"4b",4.67:"4c",5:"5a",5.17:"5a+",5.33:"5b",5.5:"5b+",5.67:"5c",5.83:"5c+",6:"6a",6.17:"6a+",6.33:"6b",6.5:"6b+",6.67:"6c",6.83:"6c+",7:"7a",7.17:"7a+",7.33:"7b",7.5:"7b+",7.67:"7c",7.83:"7c+",8:"8a",8.17:"8a+",8.33:"8b",8.5:"8b+",8.67:"8c",8.83:"8c+",9:"9a",9.17:"9a+",9.33:"9b",9.5:"9b+"},french_rounded:{2:"2",2.5:"2",2.75:"2+",3:"3",3.33:"3+",3.67:"4-",4:"4",4.33:"4+",4.67:"5-",5:"5",5.5:"5+",6:"6a",6.5:"6b+",6.17:"6a+",6.33:"6b",6.67:"6c",6.83:"6c+",7:"7a",7.5:"7b+",7.17:"7a+",7.33:"7b",7.67:"7c",7.83:"7c+",8:"8a",8.5:"8b+",8.17:"8a+",8.33:"8b",8.67:"8c",8.83:"8c+",9:"9a",9.5:"9b+",9.17:"9a+",9.33:"9b"},ewbank:{2:"7",3:"8",3.33:"9",3.67:"10",4:"11",4.33:"12",4.66:"13",5:"14",5.33:"15",5.67:"16",6:"17",6.5:"20",6.17:"18",6.33:"19",6.67:"21",6.83:"22",7:"23",7.5:"26",7.17:"24",7.33:"25",7.67:"27",7.83:"28",8:"29",8.5:"32",8.17:"30",8.33:"31",8.67:"33",8.83:"34",9:"35",9.5:"38",9.17:"36",9.33:"37"},british:{2:"B0",3:"B1",3.83:"B2",5:"B3",6:"B4",6.28:"B5",6.56:"B6",6.83:"B7",7.11:"B8",7.39:"B9",7.67:"B10",7.87:"B11",8.08:"B12",8.29:"B13",8.5:"B14",8.67:"B15",8.83:"B16",9:"B17"},v_grade:{2:"VB",3:"VB",3.5:"V0-",4:"V0",4.5:"V0+",5:"V1",5.5:"V2",6:"V3",6.33:"V4",6.67:"V5",7:"V6",7.2:"V7",7.4:"V8",7.6:"V9",7.8:"V10",8:"V11",8.17:"V12",8.33:"V13",8.5:"V14",8.67:"V15",8.83:"V16",9:"V17"}};function pe(t,n){return de[n][Number(t)]}const ge=JSON.parse(localStorage.getItem("gyms")),me=T(ge);me.subscribe(t=>{typeof t=="object"&&t!=null&&localStorage.setItem("gyms",JSON.stringify(t))});function D(t){const n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],e=t?new Date(t):new Date,a=n[e.getMonth()],s=String(e.getDate()).padStart(2,"0"),r=e.getFullYear();return`${s} ${a} ${r}`}function W(t){let n,e,a,s,r,o,c=t[0].grade+"",V,u,d,h,p=t[0].nr_or_ascends+"",b,f,z,C,v=t[0].average_opinion+"",B,$,O,S,l,g=D(t[0].date_set)+"",m;return{c(){n=w("div"),e=w("h3"),e.textContent="Route data",a=k(),s=w("ul"),r=w("li"),o=I("grade: "),V=I(c),u=k(),d=w("li"),h=I("ascends: "),b=I(p),f=k(),z=w("li"),C=I("average opinion: "),B=I(v),$=I("/5.0"),O=k(),S=w("li"),l=I("date set: "),m=I(g),L(e,"class","svelte-2vyvgn"),L(n,"class","preview svelte-2vyvgn")},m(_,y){P(_,n,y),i(n,e),i(n,a),i(n,s),i(s,r),i(r,o),i(r,V),i(s,u),i(s,d),i(d,h),i(d,b),i(s,f),i(s,z),i(z,C),i(z,B),i(z,$),i(s,O),i(s,S),i(S,l),i(S,m)},p(_,y){y&1&&c!==(c=_[0].grade+"")&&N(V,c),y&1&&p!==(p=_[0].nr_or_ascends+"")&&N(b,p),y&1&&v!==(v=_[0].average_opinion+"")&&N(B,v),y&1&&g!==(g=D(_[0].date_set)+"")&&N(m,g)},d(_){_&&A(n)}}}function be(t){let n,e=t[0]&&W(t);return{c(){e&&e.c(),n=Y()},m(a,s){e&&e.m(a,s),P(a,n,s)},p(a,[s]){a[0]?e?e.p(a,s):(e=W(a),e.c(),e.m(n.parentNode,n)):e&&(e.d(1),e=null)},i:E,o:E,d(a){e&&e.d(a),a&&A(n)}}}function _e(t,n,e){let{data:a}=n;return t.$$set=s=>{"data"in s&&e(0,a=s.data)},[a]}class he extends q{constructor(n){super();x(this,n,_e,be,U,{data:0})}}const{window:M}=ie;function ye(t){let n,e,a,s,r,o,c,V;return K(t[4]),r=new he({props:{data:t[3]}}),{c(){n=w("main"),e=w("div"),s=k(),Q(r.$$.fragment),L(e,"class","svgContainer svelte-1qtevlj")},m(u,d){P(u,n,d),i(n,e),e.innerHTML=t[2],i(n,s),Z(r,n,null),o=!0,c||(V=[ee(M,"resize",t[4]),te(a=ve.call(null,e,t[2]))],c=!0)},p(u,[d]){(!o||d&4)&&(e.innerHTML=u[2]),a&&ne(a.update)&&d&4&&a.update.call(null,u[2]);const h={};d&8&&(h.data=u[3]),r.$set(h)},i(u){o||(se(r.$$.fragment,u),o=!0)},o(u){ae(r.$$.fragment,u),o=!1},d(u){u&&A(n),re(r),c=!1,oe(V)}}}const G="https://api.toplogger.nu/v1";function ve(t,n){return{update(){},destroy(){}}}function we(t){return`https://cdn1.toplogger.nu/images/gyms/${t}/floorplan.svg`}function Ie(t){const n={filters:{deleted:!1,live:!0}};return`${G}/gyms/${t}/climbs?json_params=${encodeURIComponent(JSON.stringify(n))}`}function Ve(t){const n={filters:{gym_id:t,deleted:!1,live:!0,score_system:"none"},includes:["climb_groups"]};return`${G}/groups?json_params=${encodeURIComponent(JSON.stringify(n))}`}function Be(t,n,e){let a=[],s="",r,o=window.innerWidth,c=window.innerHeight;function V(d,h){const p=20,b=F("svg.flex").attr("width",o).attr("height",c);H("g#zoom_layer").each(function(){let l=this;F(l.parentNode).insert("g").attr("class","zoom").append(()=>l)});const f=b.select("#zoom_layer").node().getBBox();a=b.select("#zoom_layer").attr("transform",`translate(${-f.x}, ${-f.y})`).append("g").attr("class","routes").selectAll("g").data(d).enter().append("g").attr("transform",l=>`translate(${f.width*l.position_x}, ${f.height*l.position_y})`).attr("class","route").on("click",(l,g)=>{l.stopPropagation(),e(3,r=g);const m=f.width/o*.75,_=f.width*g.position_x-f.x,y=f.height*g.position_y-f.y,X=o/2-2.5,j=c/2-2.5;b.transition().duration(500).call(B.transform,J.translate(-_*m+X,-y*m+j).scale(m))}).append("g").attr("class","scale"),a.append("circle").attr("r",p).style("fill",l=>`#${R(l.id,h)}`),a.append("text").attr("dy",5).text(l=>pe(l.grade,"french_boulder")).attr("class",l=>ue(R(l.id,h))).attr("text-anchor","middle");const C=b.select(".zoom"),v=150,B=ce().translateExtent([[-v,-v],[f.width+v,f.height+v]]).scaleExtent([.1,2.5]).on("zoom",(l,g)=>{C.attr("transform",l.transform),a.attr("transform",`scale(${1/l.transform.k})`)}),$=c/f.height*.9,O=o/2-f.width/2*$,S=c/2-f.height/2*$;b.call(B).call(B.transform,J.translate(O,S).scale($)),b.select(".zoom").attr("transform",`translate(${O}, ${S}) scale(${$})`),H("g.map-region").on("click",function(l){l.stopPropagation();const g=b.select(`#${this.id}`).node().getBBox(),m=c/g.height*.8,_=-(g.x-f.x)*m,y=-(g.y-f.y)*m,X=c/2-g.height/2*m,j=o/2-g.width/2*m;b.transition().duration(500).call(B.transform,J.translate(_+j,y+X).scale(m))})}le(async()=>{let d,h;e(2,[d,h,s]=await Promise.all([fetch(Ie(8)),fetch(Ve(8)),fetch(we("bruut_boulder_breda"))]).then(p=>Promise.all([p[0].json(),p[1].json(),p[2].text()])).then(p=>(e(2,s=p[2]),p)).catch(p=>{throw new Error(p)}),s),V(d,h)});function u(){e(1,c=M.innerHeight),e(0,o=M.innerWidth)}return t.$$.update=()=>{t.$$.dirty&1,t.$$.dirty&2},[o,c,s,r,u]}class $e extends q{constructor(n){super();x(this,n,Be,ye,U,{})}}new $e({target:document.body,props:{}});

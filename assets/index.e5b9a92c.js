import{p as a,r as u,S as i,F as c,a as f,M as d,T as p,O as y,V as m,b as w,G as g,c as S,f as b,t as L}from"./vendor.ca9d0f55.js";const P=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}};P();a.defs("EPSG:2163","+proj=laea +lat_0=45 +lon_0=-100 +x_0=0 +y_0=0 +a=6370997 +b=6370997 +units=m +no_defs");u(a);const E=new i({fill:new c({color:"rgb(0,88,36)"}),stroke:new f({color:"rgb(237,248,251)"})}),h=new i({fill:new c({color:"rgb(217,72,1)",opacity:.5}),stroke:new f({color:"rgb(237,248,251)",opacity:.5})});new d({target:"map",layers:[new p({source:new y}),new m({source:new w({format:new g,url:"nps-project.json"}),style:function(s,o){var t=s.get("UNIT_TYPE");return t=="National Park"?E:h}})],view:new S({projection:"EPSG:2163",center:b([37,-95],"EPSG:2163"),zoom:3,extent:L([167.65,15.56,-65.69,74.71],"EPSG:4326","EPSG:2163")})});
//# sourceMappingURL=index.e5b9a92c.js.map
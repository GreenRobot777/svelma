import{S as t,i as e,s,c as a,a as n,e as c,t as $,j as o,f as r,b as l,g as i,h as f,d as g,k as d,n as p,m,l as u,o as h,p as T,r as v,a7 as y,V as b,W as x,a8 as w}from"./client.3a653b77.js";import{D as j}from"./DocHeader.f86869c0.js";import{E}from"./Example.88b8f4ad.js";import{J as A}from"./JSDoc.33353c2c.js";import"./Code.00dea932.js";function D(t){let e;return{c(){e=$("Tag label")},l(t){e=f(t,"Tag label")},m(t,s){m(t,e,s)},d(t){t&&g(e)}}}function C(t){let e;return{c(){e=$("Rounded tag label")},l(t){e=f(t,"Rounded tag label")},m(t,s){m(t,e,s)},d(t){t&&g(e)}}}function I(t){let e,s,$,f,b,x;return $=new y({props:{$$slots:{default:[D]},$$scope:{ctx:t}}}),b=new y({props:{rounded:!0,$$slots:{default:[C]},$$scope:{ctx:t}}}),{c(){e=c("div"),s=c("div"),a($.$$.fragment),f=n(),a(b.$$.fragment),this.h()},l(t){e=l(t,"DIV",{slot:!0});var a=i(e);s=l(a,"DIV",{class:!0});var n=i(s);o($.$$.fragment,n),f=r(n),o(b.$$.fragment,n),n.forEach(g),a.forEach(g),this.h()},h(){d(s,"class","tags svelte-y2oy5h"),d(e,"slot","preview")},m(t,a){m(t,e,a),u(e,s),p($,s,null),u(s,f),p(b,s,null),x=!0},p(t,e){const s={};256&e&&(s.$$scope={dirty:e,ctx:t}),$.$set(s);const a={};256&e&&(a.$$scope={dirty:e,ctx:t}),b.$set(a)},i(t){x||(h($.$$.fragment,t),h(b.$$.fragment,t),x=!0)},o(t){T($.$$.fragment,t),T(b.$$.fragment,t),x=!1},d(t){t&&g(e),v($),v(b)}}}function H(t){let e,s;return e=new y({props:{type:"is-primary",closable:!0,$$slots:{default:[V]},$$scope:{ctx:t}}}),e.$on("close",t[5]),{c(){a(e.$$.fragment)},l(t){o(e.$$.fragment,t)},m(t,a){p(e,t,a),s=!0},p(t,s){const a={};256&s&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){s||(h(e.$$.fragment,t),s=!0)},o(t){T(e.$$.fragment,t),s=!1},d(t){v(e,t)}}}function V(t){let e;return{c(){e=$("Colored closable tag label")},l(t){e=f(t,"Colored closable tag label")},m(t,s){m(t,e,s)},d(t){t&&g(e)}}}function F(t){let e,s;return e=new y({props:{attached:!0,closable:!0,$$slots:{default:[R]},$$scope:{ctx:t}}}),e.$on("close",t[6]),{c(){a(e.$$.fragment)},l(t){o(e.$$.fragment,t)},m(t,a){p(e,t,a),s=!0},p(t,s){const a={};256&s&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){s||(h(e.$$.fragment,t),s=!0)},o(t){T(e.$$.fragment,t),s=!1},d(t){v(e,t)}}}function R(t){let e;return{c(){e=$("Attached closable tag label")},l(t){e=f(t,"Attached closable tag label")},m(t,s){m(t,e,s)},d(t){t&&g(e)}}}function k(t){let e,s;return e=new y({props:{type:"is-danger",attached:!0,closable:!0,$$slots:{default:[P]},$$scope:{ctx:t}}}),e.$on("close",t[7]),{c(){a(e.$$.fragment)},l(t){o(e.$$.fragment,t)},m(t,a){p(e,t,a),s=!0},p(t,s){const a={};256&s&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){s||(h(e.$$.fragment,t),s=!0)},o(t){T(e.$$.fragment,t),s=!1},d(t){v(e,t)}}}function P(t){let e;return{c(){e=$("Colored attached closable tag label")},l(t){e=f(t,"Colored attached closable tag label")},m(t,s){m(t,e,s)},d(t){t&&g(e)}}}function S(t){let e,s,a,$,o,f,p,v,y=t[2]&&H(t),w=t[3]&&F(t),j=t[4]&&k(t);return{c(){e=c("div"),s=c("div"),a=c("div"),y&&y.c(),$=n(),o=c("div"),w&&w.c(),f=n(),p=c("div"),j&&j.c(),this.h()},l(t){e=l(t,"DIV",{slot:!0});var n=i(e);s=l(n,"DIV",{class:!0});var c=i(s);a=l(c,"DIV",{class:!0});var d=i(a);y&&y.l(d),d.forEach(g),$=r(c),o=l(c,"DIV",{class:!0});var m=i(o);w&&w.l(m),m.forEach(g),f=r(c),p=l(c,"DIV",{class:!0});var u=i(p);j&&j.l(u),u.forEach(g),c.forEach(g),n.forEach(g),this.h()},h(){d(a,"class","field"),d(o,"class","field"),d(p,"class","field"),d(s,"class","closing-tags svelte-y2oy5h"),d(e,"slot","preview")},m(t,n){m(t,e,n),u(e,s),u(s,a),y&&y.m(a,null),u(s,$),u(s,o),w&&w.m(o,null),u(s,f),u(s,p),j&&j.m(p,null),v=!0},p(t,e){t[2]?y?(y.p(t,e),4&e&&h(y,1)):(y=H(t),y.c(),h(y,1),y.m(a,null)):y&&(b(),T(y,1,1,(()=>{y=null})),x()),t[3]?w?(w.p(t,e),8&e&&h(w,1)):(w=F(t),w.c(),h(w,1),w.m(o,null)):w&&(b(),T(w,1,1,(()=>{w=null})),x()),t[4]?j?(j.p(t,e),16&e&&h(j,1)):(j=k(t),j.c(),h(j,1),j.m(p,null)):j&&(b(),T(j,1,1,(()=>{j=null})),x())},i(t){v||(h(y),h(w),h(j),v=!0)},o(t){T(y),T(w),T(j),v=!1},d(t){t&&g(e),y&&y.d(),w&&w.d(),j&&j.d()}}}function B(t){let e;return{c(){e=$("First")},l(t){e=f(t,"First")},m(t,s){m(t,e,s)},d(t){t&&g(e)}}}function J(t){let e;return{c(){e=$("Second")},l(t){e=f(t,"Second")},m(t,s){m(t,e,s)},d(t){t&&g(e)}}}function U(t){let e;return{c(){e=$("Third")},l(t){e=f(t,"Third")},m(t,s){m(t,e,s)},d(t){t&&g(e)}}}function O(t){let e;return{c(){e=$("Fourth")},l(t){e=f(t,"Fourth")},m(t,s){m(t,e,s)},d(t){t&&g(e)}}}function W(t){let e;return{c(){e=$("Fifth")},l(t){e=f(t,"Fifth")},m(t,s){m(t,e,s)},d(t){t&&g(e)}}}function q(t){let e,s,c,$,l,i,f,d,u,b;return e=new y({props:{type:"is-info",$$slots:{default:[B]},$$scope:{ctx:t}}}),c=new y({props:{type:"is-info",$$slots:{default:[J]},$$scope:{ctx:t}}}),l=new y({props:{type:"is-info",$$slots:{default:[U]},$$scope:{ctx:t}}}),f=new y({props:{type:"is-info",$$slots:{default:[O]},$$scope:{ctx:t}}}),u=new y({props:{type:"is-info",$$slots:{default:[W]},$$scope:{ctx:t}}}),{c(){a(e.$$.fragment),s=n(),a(c.$$.fragment),$=n(),a(l.$$.fragment),i=n(),a(f.$$.fragment),d=n(),a(u.$$.fragment)},l(t){o(e.$$.fragment,t),s=r(t),o(c.$$.fragment,t),$=r(t),o(l.$$.fragment,t),i=r(t),o(f.$$.fragment,t),d=r(t),o(u.$$.fragment,t)},m(t,a){p(e,t,a),m(t,s,a),p(c,t,a),m(t,$,a),p(l,t,a),m(t,i,a),p(f,t,a),m(t,d,a),p(u,t,a),b=!0},p(t,s){const a={};256&s&&(a.$$scope={dirty:s,ctx:t}),e.$set(a);const n={};256&s&&(n.$$scope={dirty:s,ctx:t}),c.$set(n);const $={};256&s&&($.$$scope={dirty:s,ctx:t}),l.$set($);const o={};256&s&&(o.$$scope={dirty:s,ctx:t}),f.$set(o);const r={};256&s&&(r.$$scope={dirty:s,ctx:t}),u.$set(r)},i(t){b||(h(e.$$.fragment,t),h(c.$$.fragment,t),h(l.$$.fragment,t),h(f.$$.fragment,t),h(u.$$.fragment,t),b=!0)},o(t){T(e.$$.fragment,t),T(c.$$.fragment,t),T(l.$$.fragment,t),T(f.$$.fragment,t),T(u.$$.fragment,t),b=!1},d(t){v(e,t),t&&g(s),v(c,t),t&&g($),v(l,t),t&&g(i),v(f,t),t&&g(d),v(u,t)}}}function z(t){let e,s,n;return s=new w({props:{$$slots:{default:[q]},$$scope:{ctx:t}}}),{c(){e=c("div"),a(s.$$.fragment),this.h()},l(t){e=l(t,"DIV",{slot:!0});var a=i(e);o(s.$$.fragment,a),a.forEach(g),this.h()},h(){d(e,"slot","preview")},m(t,a){m(t,e,a),p(s,e,null),n=!0},p(t,e){const a={};256&e&&(a.$$scope={dirty:e,ctx:t}),s.$set(a)},i(t){n||(h(s.$$.fragment,t),n=!0)},o(t){T(s.$$.fragment,t),n=!1},d(t){t&&g(e),v(s)}}}function G(t){let e;return{c(){e=$("npm")},l(t){e=f(t,"npm")},m(t,s){m(t,e,s)},d(t){t&&g(e)}}}function K(t){let e;return{c(){e=$("0.2.1")},l(t){e=f(t,"0.2.1")},m(t,s){m(t,e,s)},d(t){t&&g(e)}}}function L(t){let e,s,c,$;return e=new y({props:{type:"is-dark",$$slots:{default:[G]},$$scope:{ctx:t}}}),c=new y({props:{type:"is-info",$$slots:{default:[K]},$$scope:{ctx:t}}}),{c(){a(e.$$.fragment),s=n(),a(c.$$.fragment)},l(t){o(e.$$.fragment,t),s=r(t),o(c.$$.fragment,t)},m(t,a){p(e,t,a),m(t,s,a),p(c,t,a),$=!0},p(t,s){const a={};256&s&&(a.$$scope={dirty:s,ctx:t}),e.$set(a);const n={};256&s&&(n.$$scope={dirty:s,ctx:t}),c.$set(n)},i(t){$||(h(e.$$.fragment,t),h(c.$$.fragment,t),$=!0)},o(t){T(e.$$.fragment,t),T(c.$$.fragment,t),$=!1},d(t){v(e,t),t&&g(s),v(c,t)}}}function M(t){let e,s,n;return s=new w({props:{attached:!0,$$slots:{default:[L]},$$scope:{ctx:t}}}),{c(){e=c("div"),a(s.$$.fragment),this.h()},l(t){e=l(t,"DIV",{slot:!0});var a=i(e);o(s.$$.fragment,a),a.forEach(g),this.h()},h(){d(e,"slot","preview")},m(t,a){m(t,e,a),p(s,e,null),n=!0},p(t,e){const a={};256&e&&(a.$$scope={dirty:e,ctx:t}),s.$set(a)},i(t){n||(h(s.$$.fragment,t),n=!0)},o(t){T(s.$$.fragment,t),n=!1},d(t){t&&g(e),v(s)}}}function N(t){let e,s,y,b,x,w,D,C,H,V,F,R,k,P,B,J,U,O,W,q,G,K,L,N,Q,X,Y,Z,_,tt,et,st,at,nt,ct,$t,ot,rt,lt,it,ft,gt,dt,pt,mt,ut,ht,Tt,vt,yt;return e=new j({props:{title:"Tag",subtitle:"Tag labels to insert anywhere"}}),y=new E({props:{code:"\n  <script>\n    import { Tag } from 'svelma'\n  <\/script>\n\n  <Tag>Tag label</Tag>\n  <Tag rounded>Rounded tag label</Tag>",$$slots:{preview:[I]},$$scope:{ctx:t}}}),k=new E({props:{code:'\n  <script>\n    import { Tag } from \'svelma\'\n    \n    let isTag1Active = true\n    let isTag2Active = true\n    let isTag3Active = true\n  <\/script>\n\n  <div class="field">\n    {#if isTag1Active}\n      <Tag  type="is-primary" \n            closable \n            on:close={e => isTag1Active = false}>\n        Colored closable tag label\n      </Tag>\n    {/if}\n  </div>\n\n  <div class="field">\n    {#if isTag2Active}\n      <Tag  attached closable \n            on:close={e => isTag2Active = false}>\n        Attached closable tag label\n      </Tag>\n    {/if}\n  </div>\n\n  <div class="field">\n    {#if isTag3Active}\n    <Tag  type="is-danger" \n          attached closable \n          on:close={e => isTag3Active = false}>\n      Colored attached closable tag label\n    </Tag>\n    {/if} \n  </div>',$$slots:{preview:[S]},$$scope:{ctx:t}}}),q=new E({props:{code:"\n  <script>\n    import { Tag, Taglist } from 'svelma'\n  <\/script>\n\n  <Taglist>\n    <Tag type='is-info'>First</Tag>\n    <Tag type='is-info'>Second</Tag>\n    <Tag type='is-info'>Third</Tag>\n    <Tag type='is-info'>Fourth</Tag>\n    <Tag type='is-info'>Fifth</Tag> \n  </Taglist>",$$slots:{preview:[z]},$$scope:{ctx:t}}}),tt=new E({props:{code:"\n  <script>\n    import { Tag, Taglist } from 'svelma'\n  <\/script>\n\n  <Taglist attached>\n    <Tag type='is-dark'>npm</Tag>\n    <Tag type='is-info'>0.2.1</Tag>\n  </Taglist>",$$slots:{preview:[M]},$$scope:{ctx:t}}}),it=new A({props:{jsdoc:t[0],showHeader:!1}}),vt=new A({props:{jsdoc:t[1],showHeader:!1}}),{c(){a(e.$$.fragment),s=n(),a(y.$$.fragment),b=n(),x=c("hr"),w=n(),D=c("p"),C=$("Closable tags have a button that can be focused, it emits a close event when clicked or when delete key is pressed."),H=n(),V=c("p"),F=$("Closable"),R=n(),a(k.$$.fragment),P=n(),B=c("hr"),J=n(),U=c("p"),O=$("Taglist"),W=n(),a(q.$$.fragment),G=n(),K=c("hr"),L=n(),N=c("p"),Q=$("Use the "),X=c("code"),Y=$("attached"),Z=$(" prop to attach tags together."),_=n(),a(tt.$$.fragment),et=n(),st=c("hr"),at=n(),nt=c("h2"),ct=$("API"),$t=n(),ot=c("h3"),rt=$("Tag"),lt=n(),a(it.$$.fragment),ft=n(),gt=c("br"),dt=n(),pt=c("br"),mt=n(),ut=c("h3"),ht=$("Taglist"),Tt=n(),a(vt.$$.fragment),this.h()},l(t){o(e.$$.fragment,t),s=r(t),o(y.$$.fragment,t),b=r(t),x=l(t,"HR",{class:!0}),w=r(t),D=l(t,"P",{class:!0});var a=i(D);C=f(a,"Closable tags have a button that can be focused, it emits a close event when clicked or when delete key is pressed."),a.forEach(g),H=r(t),V=l(t,"P",{class:!0});var n=i(V);F=f(n,"Closable"),n.forEach(g),R=r(t),o(k.$$.fragment,t),P=r(t),B=l(t,"HR",{class:!0}),J=r(t),U=l(t,"P",{class:!0});var c=i(U);O=f(c,"Taglist"),c.forEach(g),W=r(t),o(q.$$.fragment,t),G=r(t),K=l(t,"HR",{class:!0}),L=r(t),N=l(t,"P",{class:!0});var $=i(N);Q=f($,"Use the "),X=l($,"CODE",{});var d=i(X);Y=f(d,"attached"),d.forEach(g),Z=f($," prop to attach tags together."),$.forEach(g),_=r(t),o(tt.$$.fragment,t),et=r(t),st=l(t,"HR",{class:!0}),at=r(t),nt=l(t,"H2",{class:!0});var p=i(nt);ct=f(p,"API"),p.forEach(g),$t=r(t),ot=l(t,"H3",{class:!0});var m=i(ot);rt=f(m,"Tag"),m.forEach(g),lt=r(t),o(it.$$.fragment,t),ft=r(t),gt=l(t,"BR",{}),dt=r(t),pt=l(t,"BR",{}),mt=r(t),ut=l(t,"H3",{class:!0});var u=i(ut);ht=f(u,"Taglist"),u.forEach(g),Tt=r(t),o(vt.$$.fragment,t),this.h()},h(){d(x,"class","is-medium"),d(D,"class","sub-text svelte-y2oy5h"),d(V,"class","title is-4"),d(B,"class","is-medium"),d(U,"class","title is-4"),d(K,"class","is-medium"),d(N,"class","sub-text svelte-y2oy5h"),d(st,"class","is-medium"),d(nt,"class","title is-4 is-spaced"),d(ot,"class","subtitle"),d(ut,"class","subtitle is-spaced")},m(t,a){p(e,t,a),m(t,s,a),p(y,t,a),m(t,b,a),m(t,x,a),m(t,w,a),m(t,D,a),u(D,C),m(t,H,a),m(t,V,a),u(V,F),m(t,R,a),p(k,t,a),m(t,P,a),m(t,B,a),m(t,J,a),m(t,U,a),u(U,O),m(t,W,a),p(q,t,a),m(t,G,a),m(t,K,a),m(t,L,a),m(t,N,a),u(N,Q),u(N,X),u(X,Y),u(N,Z),m(t,_,a),p(tt,t,a),m(t,et,a),m(t,st,a),m(t,at,a),m(t,nt,a),u(nt,ct),m(t,$t,a),m(t,ot,a),u(ot,rt),m(t,lt,a),p(it,t,a),m(t,ft,a),m(t,gt,a),m(t,dt,a),m(t,pt,a),m(t,mt,a),m(t,ut,a),u(ut,ht),m(t,Tt,a),p(vt,t,a),yt=!0},p(t,[e]){const s={};256&e&&(s.$$scope={dirty:e,ctx:t}),y.$set(s);const a={};284&e&&(a.$$scope={dirty:e,ctx:t}),k.$set(a);const n={};256&e&&(n.$$scope={dirty:e,ctx:t}),q.$set(n);const c={};256&e&&(c.$$scope={dirty:e,ctx:t}),tt.$set(c);const $={};1&e&&($.jsdoc=t[0]),it.$set($);const o={};2&e&&(o.jsdoc=t[1]),vt.$set(o)},i(t){yt||(h(e.$$.fragment,t),h(y.$$.fragment,t),h(k.$$.fragment,t),h(q.$$.fragment,t),h(tt.$$.fragment,t),h(it.$$.fragment,t),h(vt.$$.fragment,t),yt=!0)},o(t){T(e.$$.fragment,t),T(y.$$.fragment,t),T(k.$$.fragment,t),T(q.$$.fragment,t),T(tt.$$.fragment,t),T(it.$$.fragment,t),T(vt.$$.fragment,t),yt=!1},d(t){v(e,t),t&&g(s),v(y,t),t&&g(b),t&&g(x),t&&g(w),t&&g(D),t&&g(H),t&&g(V),t&&g(R),v(k,t),t&&g(P),t&&g(B),t&&g(J),t&&g(U),t&&g(W),v(q,t),t&&g(G),t&&g(K),t&&g(L),t&&g(N),t&&g(_),v(tt,t),t&&g(et),t&&g(st),t&&g(at),t&&g(nt),t&&g($t),t&&g(ot),t&&g(lt),v(it,t),t&&g(ft),t&&g(gt),t&&g(dt),t&&g(pt),t&&g(mt),t&&g(ut),t&&g(Tt),v(vt,t)}}}async function Q(){const t=await this.fetch("components/tag.json"),e=await this.fetch("components/taglist.json");return{jsdocTag:await t.json(),jsdocTaglist:await e.json()}}function X(t,e,s){let{jsdocTag:a}=e,{jsdocTaglist:n}=e,c=!0,$=!0,o=!0;return t.$$set=t=>{"jsdocTag"in t&&s(0,a=t.jsdocTag),"jsdocTaglist"in t&&s(1,n=t.jsdocTaglist)},[a,n,c,$,o,t=>s(2,c=!1),t=>s(3,$=!1),t=>s(4,o=!1)]}export default class extends t{constructor(t){super(),e(this,t,X,N,s,{jsdocTag:0,jsdocTaglist:1})}}export{Q as preload};

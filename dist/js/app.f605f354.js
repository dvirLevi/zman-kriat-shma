(function(t){function e(e){for(var s,n,c=e[0],o=e[1],l=e[2],u=0,m=[];u<c.length;u++)n=c[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&m.push(i[n][0]),i[n]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);f&&f(e);while(m.length)m.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,n=1;n<a.length;n++){var c=a[n];0!==i[c]&&(s=!1)}s&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},n={app:0},i={app:0},r=[];function c(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-6a1eba3c":"363b0887"}[t]+".js"}function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a={"chunk-6a1eba3c":1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var s="css/"+({}[t]||t)+"."+{"chunk-6a1eba3c":"ef966cfc"}[t]+".css",i=o.p+s,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var l=r[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===s||u===i))return e()}var m=document.getElementsByTagName("style");for(c=0;c<m.length;c++){l=m[c],u=l.getAttribute("data-href");if(u===s||u===i)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var s=e&&e.target&&e.target.src||i,r=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=s,delete n[t],f.parentNode.removeChild(f),a(r)},f.href=i;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){n[t]=0})));var s=i[t];if(0!==s)if(s)e.push(s[2]);else{var r=new Promise((function(e,a){s=i[t]=[e,a]}));e.push(s[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=c(t);var m=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(f);var a=i[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;m.message="Loading chunk "+t+" failed.\n("+s+": "+n+")",m.name="ChunkLoadError",m.type=s,m.request=n,a[1](m)}i[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var m=0;m<l.length;m++)e(l[m]);var f=u;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1056:function(t,e,a){},"2fe5":function(t,e,a){},4678:function(t,e,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=i(t);return a(e)}function i(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=i,t.exports=n,n.id="4678"},"4c5b":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid",attrs:{id:"app"}},[a("toolBar"),a("router-view"),t._m(0)],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col center-all pt-2 pb-2 app-life"},[a("h4",{staticClass:"m-0"},[t._v("נבנה ופותח ב"),a("a",{attrs:{href:"https://apps-life.netlify.com/#/"}},[t._v("AppsLife")])])])])}],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"row pb-2 pt-2 row-nav"},[a("div",{staticClass:"col center-all-between"},[t._m(0),a("div",{staticClass:"bar"},[a("div",{staticClass:"circle-bar contain",on:{click:function(e){t.ifMenu=!t.ifMenu}}},[a("div",{staticClass:"bar1"}),a("div",{staticClass:"bar2"}),a("div",{staticClass:"bar3"})])]),a("menus",{attrs:{ifMenu:t.ifMenu},on:{close:function(e){t.ifMenu=!t.ifMenu}}})],1)])},c=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"logo center-all"},[s("img",{attrs:{src:a("bb5f"),alt:""}}),s("p",{staticClass:"mb-0"},[t._v("שמע בזמנה")])])}],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bac-menu",class:{menusToolBar:!t.ifMenu},on:{click:function(e){return t.$emit("close")}}},[a("div",{staticClass:"center-all wrap-items"},t._l(t.categories,(function(e){return a("router-link",{key:e.id,staticClass:"items-menu",attrs:{to:e.link,"router-link-active":""}},[t._v(t._s(e.name))])})),1)])},l=[],u={name:"menus",components:{},props:{ifMenu:Boolean},data:function(){return{categories:[{name:"ראשי",link:"/",id:0},{name:"קריאת שמע",link:"/Shema",id:1}]}},computed:{},methods:{}},m=u,f=(a("5fb2"),a("2877")),d=Object(f["a"])(m,o,l,!1,null,"6f4256ad",null),h=d.exports,b={name:"toolBar",components:{menus:h},data:function(){return{ifMenu:!1}},mounted:function(){},methods:{},computed:{}},g=b,j=(a("7b00"),Object(f["a"])(g,r,c,!1,null,"4ec8bbd9",null)),v=j.exports,p={name:"Home",components:{toolBar:v},data:function(){return{}}},_=p,w=Object(f["a"])(_,n,i,!1,null,null,null),D=w.exports,C=(a("d3b7"),a("8c4f")),y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row title-row "},[a("div",{staticClass:"col center-all mt-3 mb-3"},[a("h1",{staticClass:"text-center"},[t._v("סוף זמן קריאת שמע וזמני היום")]),a("h3",{staticClass:"text-center w-100"},[t._v("יום "+t._s(t.dey)+" "+t._s(t.Hdate))]),a("h3",{staticClass:"text-center w-100"},[t._v("פרשת "+t._s(t.mainHDate.getSedra("h")[0]))])])]),a("clock"),a("div",{staticClass:"row while-row"},[a("div",{staticClass:"col-md-6 center-all mga"},[a("h4",{staticClass:"w-100 mt-5 text-center"},[t._v("סוף זמן קריאת שמע לשיטת המגן אברהם")]),a("h3",{staticClass:"h1 mt-3 mb-5"},[t._v(t._s(t.SofZmanShmaMGA))])]),a("div",{staticClass:"col-md-6 center-all gra"},[a("h4",{staticClass:"w-100 mt-5 text-center"},[t._v('סוף זמן קריאת שמע לשיטת הגר"א ובעל התניא')]),a("h3",{staticClass:"h1 mt-3 mb-5"},[t._v(t._s(t.SofZmanShmaGRA))])])]),a("dayTime")],1)},k=[],H=(a("25f0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row row-clock"},[a("div",{staticClass:"col center-all pt-4 pb-4"},[a("div",{staticClass:"clock"},[a("div",{staticClass:"wrap"},[a("p",{staticClass:"c12 n"},[t._v("12")]),a("p",{staticClass:"c6 n"},[t._v("6")]),a("p",{staticClass:"c3 n"},[t._v("3")]),a("p",{staticClass:"c-dote n"},[t._v(".")]),a("div",{staticClass:"num-clock center-all"},[1===t.hours.toString().length?[t._v("0")]:t._e(),t._v(t._s(t.hours)+":"),1===t.minutes.toString().length?[t._v("0")]:t._e(),t._v(t._s(t.minutes))],2),a("span",{staticClass:"hour",style:{transform:"rotate("+t.hour+"deg)"}}),a("span",{staticClass:"minute",style:{transform:"rotate("+t.minute+"deg)"}}),a("span",{staticClass:"second",style:{transform:"rotate("+t.second+"deg)"}}),a("span",{staticClass:"dot"})])])])])}),x=[],S={name:"clock",components:{},data:function(){return{hour:0,minute:0,second:0,hours:0,minutes:0,seconds:0}},mounted:function(){var t=1e3;setInterval(this.clock,t)},methods:{clock:function(){var t=new Date;this.hours=t.getHours(),this.minutes=t.getMinutes(),this.seconds=t.getSeconds(),this.hour=30*((this.hours+11)%12+1),this.minute=6*this.minutes,this.second=6*this.seconds}},computed:{}},M=S,Z=(a("ffe5"),Object(f["a"])(M,H,x,!1,null,"e5865534",null)),z=Z.exports,O=a("59f8"),E=a("8373"),A={name:"Home",components:{clock:z,dayTime:O["a"]},data:function(){return{days:["ראשון","שני","שלישי","רביעי","חמישי","שישי","שבת"]}},computed:{SofZmanShmaMGA:function(){var t=E["a"](this.options);return new Date(t.BasicZmanim.SofZmanShmaMGA).getHours()+":"+new Date(t.BasicZmanim.SofZmanShmaMGA).getMinutes()},SofZmanShmaGRA:function(){var t=E["a"](this.options);return new Date(t.BasicZmanim.SofZmanShmaGRA).getHours()+":"+new Date(t.BasicZmanim.SofZmanShmaGRA).getMinutes()},Hdate:function(){return this.mainHDate.toString("h")},dey:function(){return this.days[this.mainDate.getDay()]},options:function(){return this.$store.getters.options},mainDate:function(){return this.$store.state.mainDate},mainHDate:function(){return this.$store.getters.mainHDate}}},$=A,T=(a("6b00"),Object(f["a"])($,y,k,!1,null,"7fef2492",null)),B=T.exports;s["a"].use(C["a"]);var L=[{path:"/",name:"Home",component:B},{path:"/Shema",name:"Shema",component:function(){return a.e("chunk-6a1eba3c").then(a.bind(null,"bd14"))}}],G=new C["a"]({routes:L}),P=G,N=a("2f62"),q=a("4695"),J=a.n(q);s["a"].use(N["a"]);var R=new N["a"].Store({state:{mainDate:new Date,coordinates:{latitude:31,longitude:35}},getters:{options:function(t){var e={date:new Date,timeZoneId:"Asia/Jerusalem",locationName:"Asia/Jerusalem",latitude:31,longitude:35,elevation:0,complexZmanim:!1};return e.date=t.mainDate,e.latitude=t.coordinates.latitude,e.longitude=t.coordinates.longitude,e},mainHDate:function(t){var e=new J.a.HDate(t.mainDate);return e.setLocation(t.coordinates.latitude,t.coordinates.longitude),e}},mutations:{},actions:{},modules:{}});a("2fe5"),a("1056");s["a"].config.productionTip=!1,new s["a"]({router:P,store:R,render:function(t){return t(D)}}).$mount("#app")},"59f8":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row time-row pb-3"},[a("div",{staticClass:"col"},[t._m(0),a("div",{staticClass:"row center-all-around"},[t.holidays?a("div",{staticClass:"col-md-3 right-column"},t._l(t.holidays,(function(e){return a("h5",{key:e,staticClass:"text-rigth"},[t._v(t._s(e))])})),0):t._e(),t.mainHDate.candleLighting()||t.mainHDate.havdalah()?a("div",{staticClass:"col-md-3 right-column"},[t.mainHDate.candleLighting()?a("h5",{staticClass:"text-rigth"},[t._v("הדלקת נרות: "+t._s(new Date(t.mainHDate.candleLighting()).getHours())+":"+t._s(new Date(t.mainHDate.candleLighting()).getMinutes()))]):t._e(),t.mainHDate.havdalah()?a("h5",{staticClass:"text-rigth"},[t._v("הבדלה: "+t._s(new Date(t.mainHDate.havdalah()).getHours())+":"+t._s(new Date(t.mainHDate.havdalah()).getMinutes()))]):t._e()]):t._e(),a("div",{staticClass:"col-md-3 right-column"},[a("h5",{staticClass:"text-rigth"},[t._v("חצות: "+t._s(new Date(t.mainHDate.getZemanim().chatzot).getHours())+":"+t._s(new Date(t.mainHDate.getZemanim().chatzot).getMinutes()))]),a("h5",{staticClass:"text-rigth"},[t._v("עלות השחר: "+t._s(new Date(t.mainHDate.getZemanim().alot_hashachar).getHours())+":"+t._s(new Date(t.mainHDate.getZemanim().alot_hashachar).getMinutes()))]),a("h5",{staticClass:"text-rigth"},[t._v("נץ החמה: "+t._s(new Date(t.mainHDate.getZemanim().neitz_hachama).getHours())+":"+t._s(new Date(t.mainHDate.getZemanim().neitz_hachama).getMinutes()))]),a("h5",{staticClass:"text-rigth"},[t._v("שקיעה: "+t._s(new Date(t.mainHDate.getZemanim().shkiah).getHours())+":"+t._s(new Date(t.mainHDate.getZemanim().shkiah).getMinutes()))]),a("h5",{staticClass:"text-rigth"},[t._v("צאת הכוכבים: "+t._s(new Date(t.mainHDate.getZemanim().tzeit).getHours())+":"+t._s(new Date(t.mainHDate.getZemanim().tzeit).getMinutes()))])]),a("div",{staticClass:"col-md-3 right-column"},[a("h5",{staticClass:"text-rigth"},[t._v('סוף זמן תפילה גר"א: '+t._s(new Date(t.mainHDate.getZemanim().sof_zman_tfilla).getHours())+":"+t._s(new Date(t.mainHDate.getZemanim().sof_zman_tfilla).getMinutes()))]),a("h5",{staticClass:"text-rigth"},[t._v("מנחה גדולה: "+t._s(new Date(t.mainHDate.getZemanim().mincha_gedola).getHours())+":"+t._s(new Date(t.mainHDate.getZemanim().mincha_gedola).getMinutes()))]),a("h5",{staticClass:"text-rigth"},[t._v("מנחה קטנה: "+t._s(new Date(t.mainHDate.getZemanim().mincha_ketana).getHours())+":"+t._s(new Date(t.mainHDate.getZemanim().mincha_ketana).getMinutes()))]),a("h5",{staticClass:"text-rigth"},[t._v("פלג המנחה: "+t._s(new Date(t.mainHDate.getZemanim().plag_hamincha).getHours())+":"+t._s(new Date(t.mainHDate.getZemanim().plag_hamincha).getMinutes()))])])])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row "},[a("div",{staticClass:"col center-all mt-3 mb-3"},[a("i",{staticClass:"far fa-calendar-alt h3 ml-2"}),a("h3",{staticClass:"text-center m-0"},[t._v(" זמני היום")])])])}],i={name:"dayTime",components:{},data:function(){return{}},mounted:function(){},methods:{},computed:{mainHDate:function(){return this.$store.getters.mainHDate},holidays:function(){var t=[];for(var e in this.mainHDate.holidays())t.push(this.mainHDate.holidays()[e].desc[2]);return t}}},r=i,c=(a("a07d"),a("2877")),o=Object(c["a"])(r,s,n,!1,null,"38f5ecdf",null);e["a"]=o.exports},"5fb2":function(t,e,a){"use strict";var s=a("c9f6"),n=a.n(s);n.a},"6b00":function(t,e,a){"use strict";var s=a("a4e6"),n=a.n(s);n.a},"6f5f":function(t,e,a){},"7b00":function(t,e,a){"use strict";var s=a("e5aa"),n=a.n(s);n.a},a07d:function(t,e,a){"use strict";var s=a("4c5b"),n=a.n(s);n.a},a4e6:function(t,e,a){},bb5f:function(t,e,a){t.exports=a.p+"img/ass2.af558759.png"},c9f6:function(t,e,a){},e5aa:function(t,e,a){},ffe5:function(t,e,a){"use strict";var s=a("6f5f"),n=a.n(s);n.a}});
//# sourceMappingURL=app.f605f354.js.map
(function(t){function e(e){for(var a,n,c=e[0],r=e[1],l=e[2],u=0,d=[];u<c.length;u++)n=c[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&d.push(i[n][0]),i[n]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);m&&m(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],a=!0,n=1;n<s.length;n++){var c=s[n];0!==i[c]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},n={app:0},i={app:0},o=[];function c(t){return r.p+"js/"+({}[t]||t)+"."+{"chunk-6a1eba3c":"03a9e617"}[t]+".js"}function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.e=function(t){var e=[],s={"chunk-6a1eba3c":1};n[t]?e.push(n[t]):0!==n[t]&&s[t]&&e.push(n[t]=new Promise((function(e,s){for(var a="css/"+({}[t]||t)+"."+{"chunk-6a1eba3c":"ef966cfc"}[t]+".css",i=r.p+a,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var l=o[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===i))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===a||u===i)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var a=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete n[t],m.parentNode.removeChild(m),s(o)},m.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){n[t]=0})));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,s){a=i[t]=[e,s]}));e.push(a[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,r.nc&&u.setAttribute("nonce",r.nc),u.src=c(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(m);var s=i[t];if(0!==s){if(s){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",d.name="ChunkLoadError",d.type=a,d.request=n,s[1](d)}i[t]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var m=u;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("85ec"),n=s.n(a);n.a},"0e24":function(t,e,s){"use strict";var a=s("fa3c"),n=s.n(a);n.a},1056:function(t,e,s){},"2fe5":function(t,e,s){},"34ef":function(t,e,s){"use strict";var a=s("8d71"),n=s.n(a);n.a},"3bc9":function(t,e,s){},4678:function(t,e,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=i(t);return s(e)}function i(t){if(!s.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=i,t.exports=n,n.id="4678"},"4cc4":function(t,e,s){"use strict";var a=s("b28d"),n=s.n(a);n.a},"555e":function(t,e,s){"use strict";var a=s("3bc9"),n=s.n(a);n.a},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid",attrs:{id:"app"}},[s("toolBar"),s("router-view"),t._m(0)],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col center-all pt-2 pb-2 app-life"},[s("h4",{staticClass:"m-0"},[t._v("נבנה ופותח ב"),s("a",{attrs:{href:"https://apps-life.netlify.com/#/",target:"_blanc"}},[t._v("AppsLife")])])])])}],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"row pb-2 pt-2 row-nav"},[s("div",{staticClass:"col center-all-between"},[t._m(0),s("div",{staticClass:"bar"},[s("div",{staticClass:"circle-bar contain",on:{click:function(e){t.ifMenu=!t.ifMenu}}},[s("div",{staticClass:"bar1"}),s("div",{staticClass:"bar2"}),s("div",{staticClass:"bar3"})])]),s("menus",{attrs:{ifMenu:t.ifMenu},on:{close:function(e){t.ifMenu=!t.ifMenu}}})],1)])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"logo center-all"},[a("img",{attrs:{src:s("cf05"),alt:""}})])}],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bac-menu",class:{menusToolBar:!t.ifMenu},on:{click:function(e){return t.$emit("close")}}},[s("div",{staticClass:"center-all wrap-items"},t._l(t.categories,(function(e){return s("router-link",{key:e.id,staticClass:"items-menu",attrs:{to:e.link,"router-link-active":""}},[t._v(t._s(e.name))])})),1)])},l=[],u={name:"menus",components:{},props:{ifMenu:Boolean},data:function(){return{categories:[{name:"ראשי",link:"/",id:0},{name:"קריאת שמע",link:"/Shema",id:1}]}},computed:{},methods:{}},d=u,m=(s("0e24"),s("2877")),f=Object(m["a"])(d,r,l,!1,null,"a36a1c0a",null),h=f.exports,v={name:"toolBar",components:{menus:h},data:function(){return{ifMenu:!1}},mounted:function(){},methods:{},computed:{}},p=v,g=(s("4cc4"),Object(m["a"])(p,o,c,!1,null,"5c9e389f",null)),b=g.exports,j={name:"Home",components:{toolBar:b},data:function(){return{}}},w=j,_=(s("034f"),Object(m["a"])(w,n,i,!1,null,null,null)),C=_.exports,y=(s("d3b7"),s("8c4f")),k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"row title-row "},[s("div",{staticClass:"col center-all mt-3 mb-3"},[s("h1",{staticClass:"text-center"},[t._v("סוף זמן קריאת שמע וזמני היום")]),s("h3",{staticClass:"text-center w-100"},[t._v("יום "+t._s(t.dey)+" "+t._s(t.Hdate)+" "),s("span",[t._v(t._s(t.formatDate))])]),s("h3",{staticClass:"text-center w-100"},[t._v("פרשת "+t._s(t.mainHDate.getSedra("h")[0]))]),s("div",{staticClass:"w-100 center-all"},[s("div",{staticClass:"butt center-all"},[s("i",{staticClass:"far fa-calendar-alt m-2 h3 c-p",attrs:{for:"date-input"}}),s("input",{attrs:{id:"date-input m-2",type:"date"},on:{input:t.selectDate}})])])])]),s("clock"),s("findLocation"),s("myMap",{directives:[{name:"show",rawName:"v-show",value:t.showMap,expression:"showMap"}]}),s("div",{staticClass:"row while-row"},[s("div",{staticClass:"col-md-6 center-all mga"},[s("h4",{staticClass:"w-100 mt-5 text-center"},[t._v("סוף זמן קריאת שמע לשיטת המגן אברהם")]),s("h3",{staticClass:"h1 mt-3 mb-5"},[t._v(t._s(t.SofZmanShmaMGA))])]),s("div",{staticClass:"col-md-6 center-all gra"},[s("h4",{staticClass:"w-100 mt-5 text-center"},[t._v('סוף זמן קריאת שמע לשיטת הגר"א ובעל התניא')]),s("h3",{staticClass:"h1 mt-3 mb-5"},[t._v(t._s(t.SofZmanShmaGRA))])])]),s("dayTime")],1)},M=[],S=(s("a15b"),s("25f0"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row row-clock"},[s("div",{staticClass:"col center-all pt-4 pb-4"},[s("div",{staticClass:"clock"},[s("div",{staticClass:"wrap"},[s("p",{staticClass:"c12 n"},[t._v("12")]),s("p",{staticClass:"c6 n"},[t._v("6")]),s("p",{staticClass:"c3 n"},[t._v("3")]),s("p",{staticClass:"c-dote n"},[t._v(".")]),s("div",{staticClass:"num-clock center-all"},[1===t.hours.toString().length?[t._v("0")]:t._e(),t._v(t._s(t.hours)+":"),1===t.minutes.toString().length?[t._v("0")]:t._e(),t._v(t._s(t.minutes))],2),s("span",{staticClass:"hour",style:{transform:"rotate("+t.hour+"deg)"}}),s("span",{staticClass:"minute",style:{transform:"rotate("+t.minute+"deg)"}}),s("span",{staticClass:"second",style:{transform:"rotate("+t.second+"deg)"}}),s("span",{staticClass:"dot"})])])])])}),x=[],z={name:"clock",components:{},data:function(){return{hour:0,minute:0,second:0,hours:0,minutes:0,seconds:0}},mounted:function(){var t=1e3;setInterval(this.clock,t)},methods:{clock:function(){var t=new Date;this.hours=t.getHours(),this.minutes=t.getMinutes(),this.seconds=t.getSeconds(),this.hour=30*((this.hours+11)%12+1),this.minute=6*this.minutes,this.second=6*this.seconds}},computed:{}},D=z,H=(s("ffe5"),Object(m["a"])(D,S,x,!1,null,"e5865534",null)),$=H.exports,A=s("59f8"),O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row time-row"},[s("div",{staticClass:"col"},[s("iframe",{staticStyle:{border:"0"},attrs:{src:t.src,width:"360",height:"270",frameborder:"0"}})])])},E=[],L=(s("99af"),{name:"myMap",components:{},data:function(){return{}},mounted:function(){},methods:{},computed:{src:function(){return"https://maps.google.com/maps?q=".concat(this.coordinates.latitude,", ").concat(this.coordinates.longitude,"&z=15&output=embed")},coordinates:function(){return this.$store.state.coordinates}}}),T=L,Z=(s("34ef"),Object(m["a"])(T,O,E,!1,null,"a4958bb8",null)),P=Z.exports,G=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row time-row pb-3 pt-3"},[s("div",{staticClass:"col center-all"},[s("findMyLocation")],1)])},N=[],B=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"w-100 center-all"},[s("selectLocation",{attrs:{items:t.cities},on:{mySelect:t.selectCity}}),s("div",{staticClass:"butt p-2 c-p center-all m-1",on:{click:t.getLocation}},[s("i",{staticClass:"fas fa-map-marker-alt m-2"}),s("p",{staticClass:"m-0"},[t._v("מצא את המיקום שלי")])]),s("div",{staticClass:"butt p-2 c-p center-all m-1",on:{click:t.ifShowMap}},[s("i",{staticClass:"fas fa-map-marked-alt m-2"}),t.showMap?s("p",{staticClass:"m-0"},[t._v("הסתר מיקום נוכחי במפה")]):s("p",{staticClass:"m-0"},[t._v("הצג מיקום נוכחי במפה")])])],1)},q=[],R=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"butt p-2 c-p center-all m-1",on:{click:function(e){t.showMenu=!t.showMenu}}},[s("p",{staticClass:"m-0"},[t._v(" בחר מיקום: "+t._s(t.nameSelect))]),s("i",{staticClass:"fas fa-chevron-down m-2"}),t.showMenu?s("div",{staticClass:"menu w-100 center-all"},t._l(t.items,(function(e){return s("p",{key:e.id,staticClass:"w-100 p-1 border-top border-bottem m-0 c-p",on:{click:function(s){return t.select(e)}}},[t._v(" "+t._s(e.name))])})),0):t._e()])},F=[],J=(s("b0c0"),{name:"selectLocation",components:{},props:{items:Array},data:function(){return{showMenu:!1}},mounted:function(){this.select(this.items[0])},methods:{select:function(t){this.$emit("mySelect",t)}},computed:{coordinates:function(){return this.$store.state.coordinates},nameSelect:function(){var t="";for(var e in this.items)this.coordinates.latitude===this.items[e].latitude&&(t=this.items[e].name);return""===t?"אוטומטי":t}}}),I=J,K=(s("a5d8"),Object(m["a"])(I,R,F,!1,null,"20da6afa",null)),U=K.exports,Y={name:"findMyLocation",components:{selectLocation:U},data:function(){return{cities:[{name:"ירושלים",latitude:31.77798,longitude:35.235353,id:0},{name:"תל-אביב",latitude:32.079529,longitude:34.792419,id:1},{name:"חיפה",latitude:32.811016,longitude:34.984933,id:2},{name:"באר שבע",latitude:31.251202,longitude:34.790857,id:3}]}},mounted:function(){},methods:{getLocation:function(){navigator.geolocation?navigator.geolocation.getCurrentPosition(this.showPosition):alert("Geolocation is not supported by this browser.")},showPosition:function(t){this.$store.commit("setPosition",t),this.$store.commit("showMap")},selectCity:function(t){var e={coords:{latitude:t.latitude,longitude:t.longitude}};this.$store.commit("setPosition",e)},ifShowMap:function(){this.$store.commit("ifShowMap")}},computed:{showMap:function(){return this.$store.state.showMap}}},Q=Y,V=(s("555e"),Object(m["a"])(Q,B,q,!1,null,"5b6aae21",null)),W=V.exports,X={name:"findLocation",components:{findMyLocation:W},data:function(){return{}},mounted:function(){},methods:{},computed:{}},tt=X,et=(s("e262"),Object(m["a"])(tt,G,N,!1,null,"2de5b991",null)),st=et.exports,at=s("8373"),nt={name:"Home",components:{clock:$,dayTime:A["a"],findLocation:st,myMap:P},data:function(){return{days:["ראשון","שני","שלישי","רביעי","חמישי","שישי","שבת"]}},methods:{selectDate:function(t){""!==t.target.value?this.$store.commit("selectDate",t.target.value):this.$store.commit("selectDate",new Date)}},computed:{SofZmanShmaMGA:function(){var t=at["a"](this.options);return new Date(t.Zmanim.SofZmanShmaMGA).getHours()+":"+new Date(t.Zmanim.SofZmanShmaMGA).getMinutes()},SofZmanShmaGRA:function(){var t=at["a"](this.options);return new Date(t.Zmanim.SofZmanShmaGRA).getHours()+":"+new Date(t.Zmanim.SofZmanShmaGRA).getMinutes()},Hdate:function(){return this.mainHDate.toString("h")},dey:function(){return this.days[this.mainDate.getDay()]},options:function(){return this.$store.getters.options},mainDate:function(){return this.$store.state.mainDate},formatDate:function(){var t=this.mainDate,e=""+(t.getMonth()+1),s=""+t.getDate(),a=t.getFullYear();return e.length<2&&(e="0"+e),s.length<2&&(s="0"+s),[s,e,a].join("/")},showMap:function(){return this.$store.state.showMap},mainHDate:function(){return this.$store.getters.mainHDate}}},it=nt,ot=(s("9cac"),Object(m["a"])(it,k,M,!1,null,"7d2782b5",null)),ct=ot.exports;a["a"].use(y["a"]);var rt=[{path:"*",name:"default",component:ct},{path:"/",name:"Home",component:ct},{path:"/Shema",name:"Shema",component:function(){return s.e("chunk-6a1eba3c").then(s.bind(null,"bd14"))}}],lt=new y["a"]({scrollBehavior:function(){return{x:0,y:0}},mode:"history",routes:rt}),ut=lt,dt=s("2f62"),mt=s("4695"),ft=s.n(mt);a["a"].use(dt["a"]);var ht=new dt["a"].Store({state:{mainDate:new Date,coordinates:{latitude:31.77798,longitude:35.235353,altitude:null},showMap:!1},getters:{options:function(t){var e={date:new Date,timeZoneId:"Asia/Jerusalem",locationName:"Asia/Jerusalem",latitude:31,longitude:35,elevation:0,complexZmanim:!0};return e.date=t.mainDate,e.latitude=t.coordinates.latitude,e.longitude=t.coordinates.longitude,e.elevation=t.coordinates.altitude,e},mainHDate:function(t){var e=new ft.a.HDate(t.mainDate);return e.setLocation(t.coordinates.latitude,t.coordinates.longitude),e}},mutations:{setPosition:function(t,e){t.coordinates.latitude=e.coords.latitude,t.coordinates.longitude=e.coords.longitude,t.coordinates.altitude=e.coords.altitude},ifShowMap:function(t){t.showMap=!t.showMap},showMap:function(t){t.showMap=!0},selectDate:function(t,e){t.mainDate=new Date(e)}},actions:{},modules:{}}),vt=(s("2fe5"),s("1056"),s("9483"));Object(vt["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),a["a"].config.productionTip=!1,new a["a"]({router:ut,store:ht,render:function(t){return t(C)}}).$mount("#app")},"59f8":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row time-row pb-3"},[s("div",{staticClass:"col"},[t._m(0),s("div",{staticClass:"row center-top"},[t.mainHDate.candleLighting()||t.mainHDate.havdalah()||t.holidays.length?s("div",{staticClass:"col-md-3 right-column"},[t.holidays.length?t._l(t.holidays,(function(e){return s("h5",{key:e,staticClass:"text-rigth"},[t._v(t._s(e))])})):t._e(),t.mainHDate.candleLighting()||t.mainHDate.havdalah()?[s("div",{staticClass:"w-100 center-all"},[s("h5",{staticClass:"w-50 text-rigth"},[t._v(" הדלקת נרות: ")]),s("h5",{staticClass:"w-50 text-rigth"},[t._v(" "+t._s(t.getHours(t.zmanim.CandleLighting))+":"+t._s(t.getMinutes(t.zmanim.CandleLighting))+" ")])]),s("div",{staticClass:"w-100 center-all"},[s("h5",{staticClass:"w-50 text-rigth"},[t._v(" הבדלה: ")]),s("h5",{staticClass:"w-50 text-rigth"},[t._v(" "+t._s(t.getHours(t.zmanim.Tzais))+":"+t._s(t.getMinutes(t.zmanim.Tzais))+" ")])])]:t._e()],2):t._e(),s("div",{staticClass:"col-md-3 right-column"},[s("div",{staticClass:"w-100 center-all"},[s("h5",{staticClass:"w-50 text-rigth"},[t._v(" חצות: ")]),s("h5",{staticClass:"w-50 text-center"},[t._v(" "+t._s(t.getHours(t.zmanim.Chatzos))+":"+t._s(t.getMinutes(t.zmanim.Chatzos))+" ")])]),s("div",{staticClass:"w-100 center-all"},[s("h5",{staticClass:"w-50 text-rigth"},[t._v(" עלות השחר: ")]),s("h5",{staticClass:"w-50 text-center"},[t._v(" "+t._s(t.getHours(t.zmanim.Alos72))+":"+t._s(t.getMinutes(t.zmanim.Alos72))+" ")])]),s("div",{staticClass:"w-100 center-all"},[s("h5",{staticClass:"w-50 text-rigth"},[t._v(" נץ החמה: ")]),s("h5",{staticClass:"w-50 text-center"},[t._v(" "+t._s(t.getHours(t.zmanim.Sunrise))+":"+t._s(t.getMinutes(t.zmanim.Sunrise))+" ")])]),s("div",{staticClass:"w-100 center-all"},[s("h5",{staticClass:"w-50 text-rigth"},[t._v(" שקיעה: ")]),s("h5",{staticClass:"w-50 text-center"},[t._v(" "+t._s(t.getHours(t.zmanim.Sunset))+":"+t._s(t.getMinutes(t.zmanim.Sunset))+" ")])]),s("div",{staticClass:"w-100 center-all"},[s("h5",{staticClass:"w-50 text-rigth"},[t._v(" צאת הכוכבים: ")]),s("h5",{staticClass:"w-50 text-center"},[t._v(" "+t._s(t.getHours(t.zmanim.TzaisGeonim4Point8Degrees))+":"+t._s(t.getMinutes(t.zmanim.TzaisGeonim4Point8Degrees))+" ")])])]),s("div",{staticClass:"col-md-3 right-column"},[s("div",{staticClass:"w-100 center-all"},[s("h5",{staticClass:"w-50 text-rigth"},[t._v(' סוף זמן תפילה מג"א: ')]),s("h5",{staticClass:"w-50 text-center"},[t._v(" "+t._s(t.getHours(t.zmanim.SofZmanTfilaMGA))+":"+t._s(t.getMinutes(t.zmanim.SofZmanTfilaMGA))+" ")])]),s("div",{staticClass:"w-100 center-all"},[s("h5",{staticClass:"w-50 text-rigth"},[t._v(' סוף זמן תפילה גר"א: ')]),s("h5",{staticClass:"w-50 text-center"},[t._v(" "+t._s(t.getHours(t.zmanim.SofZmanTfilaGRA))+":"+t._s(t.getMinutes(t.zmanim.SofZmanTfilaGRA))+" ")])]),s("div",{staticClass:"w-100 center-all"},[s("h5",{staticClass:"w-50 text-rigth"},[t._v(" מנחה גדולה: ")]),s("h5",{staticClass:"w-50 text-center"},[t._v(" "+t._s(t.getHours(t.zmanim.MinchaGedola))+":"+t._s(t.getMinutes(t.zmanim.MinchaGedola))+" ")])]),s("div",{staticClass:"w-100 center-all"},[s("h5",{staticClass:"w-50 text-rigth"},[t._v(" מנחה קטנה: ")]),s("h5",{staticClass:"w-50 text-center"},[t._v(" "+t._s(t.getHours(t.zmanim.MinchaKetana))+":"+t._s(t.getMinutes(t.zmanim.MinchaKetana))+" ")])]),s("div",{staticClass:"w-100 center-all"},[s("h5",{staticClass:"w-50 text-rigth"},[t._v(" פלג המנחה: ")]),s("h5",{staticClass:"w-50 text-center"},[t._v(" "+t._s(t.getHours(t.zmanim.PlagHamincha))+":"+t._s(t.getMinutes(t.zmanim.PlagHamincha))+" ")])])])])])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row "},[s("div",{staticClass:"col center-all mt-3 mb-3"},[s("i",{staticClass:"far fa-calendar-alt h3 ml-2"}),s("h3",{staticClass:"text-center m-0"},[t._v(" זמני היום")])])])}],i=(s("d3b7"),s("25f0"),s("8373")),o={name:"dayTime",components:{},data:function(){return{}},mounted:function(){},methods:{getHours:function(t){var e=new Date(t).getHours();return e.toString().length<=1?"0"+e:e},getMinutes:function(t){var e=new Date(t).getMinutes();return e.toString().length<=1?"0"+e:e}},computed:{tzeit:function(){var t=new Date(this.mainHDate.getZemanim().shkiah).getMinutes()+18,e=new Date(this.mainHDate.getZemanim().shkiah).getHours();return t>=59&&(e+=1,t-=60),t.toString().length<2?e+":0"+t:e+":"+t},mainHDate:function(){return this.$store.getters.mainHDate},holidays:function(){var t=[];for(var e in this.mainHDate.holidays())t.push(this.mainHDate.holidays()[e].desc[2]);return t},options:function(){return this.$store.getters.options},zmanim:function(){var t=i["a"](this.options);return t.Zmanim}}},c=o,r=(s("efd2"),s("2877")),l=Object(r["a"])(c,a,n,!1,null,"cafdc6f4",null);e["a"]=l.exports},"5b2d":function(t,e,s){},"6f5f":function(t,e,s){},8218:function(t,e,s){},"85ec":function(t,e,s){},"8d71":function(t,e,s){},"9cac":function(t,e,s){"use strict";var a=s("5b2d"),n=s.n(a);n.a},a5d8:function(t,e,s){"use strict";var a=s("ca1c"),n=s.n(a);n.a},abca:function(t,e,s){},b28d:function(t,e,s){},ca1c:function(t,e,s){},cf05:function(t,e,s){t.exports=s.p+"img/logo.cfbad45a.png"},e262:function(t,e,s){"use strict";var a=s("abca"),n=s.n(a);n.a},efd2:function(t,e,s){"use strict";var a=s("8218"),n=s.n(a);n.a},fa3c:function(t,e,s){},ffe5:function(t,e,s){"use strict";var a=s("6f5f"),n=s.n(a);n.a}});
//# sourceMappingURL=app.10cf90d6.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e3d0d62"],{"06c5":function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));a("a630"),a("fb6a"),a("b0c0"),a("d3b7"),a("25f0"),a("3ca3");var r=a("6b75");function n(t,e){if(t){if("string"===typeof t)return Object(r["a"])(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(r["a"])(t,e):void 0}}},"1c7e":function(t,e,a){var r=a("b622"),n=r("iterator"),i=!1;try{var s=0,o={next:function(){return{done:!!s++}},return:function(){i=!0}};o[n]=function(){return this},Array.from(o,(function(){throw 2}))}catch(c){}t.exports=function(t,e){if(!e&&!i)return!1;var a=!1;try{var r={};r[n]=function(){return{next:function(){return{done:a=!0}}}},t(r)}catch(c){}return a}},"2e5e":function(t,e,a){t.exports=a.p+"img/features.faf4a439.png"},"35a1":function(t,e,a){var r=a("f5df"),n=a("3f8c"),i=a("b622"),s=i("iterator");t.exports=function(t){if(void 0!=t)return t[s]||t["@@iterator"]||n[r(t)]}},"4df4":function(t,e,a){"use strict";var r=a("0366"),n=a("7b0b"),i=a("9bdd"),s=a("e95a"),o=a("50c4"),c=a("8418"),u=a("35a1");t.exports=function(t){var e,a,l,f,p,d,h=n(t),m="function"==typeof this?this:Array,v=arguments.length,g=v>1?arguments[1]:void 0,b=void 0!==g,y=u(h),k=0;if(b&&(g=r(g,v>2?arguments[2]:void 0,2)),void 0==y||m==Array&&s(y))for(e=o(h.length),a=new m(e);e>k;k++)d=b?g(h[k],k):h[k],c(a,k,d);else for(f=y.call(h),p=f.next,a=new m;!(l=p.call(f)).done;k++)d=b?i(f,g,[l.value,k],!0):l.value,c(a,k,d);return a.length=k,a}},"5c13":function(t,e,a){},"6b75":function(t,e,a){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,r=new Array(e);a<e;a++)r[a]=t[a];return r}a.d(e,"a",(function(){return r}))},"9bdd":function(t,e,a){var r=a("825a");t.exports=function(t,e,a,n){try{return n?e(r(a)[0],a[1]):e(a)}catch(s){var i=t["return"];throw void 0!==i&&r(i.call(t)),s}}},"9da2":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section"},[a("t-features-page")],1)},n=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("m-features-main-heading"),a("div",{staticClass:"columns is-flex-wrap-wrap is-3"},t._l(t.featuresData,(function(e){return a("div",{key:e.id,staticClass:"features-card column is-half"},[a("transition",{attrs:{name:"expand"}},[e.textLimit?a("m-features-details",{class:e.textLimit?"feature-card__details":"",attrs:{"features-title":e.title,"features-text":e.text.substring(0,300)+"..."}}):t._e(),e.textLimit?t._e():a("m-features-details",{class:e.textLimit?"feature-card__details":"",attrs:{"features-title":e.title,"features-text":e.text}})],1),e.textLimit?a("p",{staticClass:"feature-card__show",on:{click:function(a){return t.expand(e.id)}}},[t._v(" Show more ")]):t._e(),e.textLimit?t._e():a("p",{staticClass:"feature-card__hide",on:{click:function(a){return t.expand(e.id)}}},[t._v(" Show Less ")])],1)})),0)],1)},s=[],o=a("5530"),c=a("b85c"),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-features-details"},[a("img",{staticClass:"m-features-details__img",attrs:{src:t.src}}),a("h2",{staticClass:"m-features-details__title"},[t._v(t._s(t.featuresTitle))]),a("br"),a("p",{staticClass:"m-features-details__text",domProps:{innerHTML:t._s(t.featuresText)}})])},l=[],f={name:"MFeaturesDetails",components:{},props:{featuresTitle:String,featuresText:String},data:function(){return{src:a("dd24")}}},p=f,d=(a("bb52"),a("2877")),h=Object(d["a"])(p,u,l,!1,null,"880bbb60",null),m=h.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-heading columns"},[t._m(0),a("div",{staticClass:"main-heading__img column"},[a("div",{staticClass:"img-wrapper"},[a("div",{staticClass:"img-wrapper__img-width"},[a("img",{attrs:{src:t.src}})])])])])},g=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-heading__text column is-one-third"},[a("h1",{staticClass:"title--size"},[t._v(" Why Parking With ParkSpot Is "),a("span",{staticClass:"title__second"},[t._v("GOOD")])]),a("br"),a("p",{staticClass:"main-heading__para"},[t._v(" Finding cheap and best parking space with ease. Providing a lot of features that no other parking platforms provide. ")]),a("p",{staticClass:"main-heading__para"},[t._v(" Navigation, Booking, Searching, Safety & Security and many others services at ParkSpot which makes your parking experience better than ever'\" ")]),a("br")])}],b={name:"MFeaturesMainHeading",components:{},props:{featuresButton:{type:String,default:function(){return"Contact Us"}},featuresButtonLink:{type:String,default:function(){return"t-contact"}}},data:function(){return{src:a("2e5e")}}},y=b,k=(a("9de2"),Object(d["a"])(y,v,g,!1,null,"01e50ca7",null)),w=k.exports,_={name:"TFeaturesPage",components:{MFeaturesDetails:m,MFeaturesMainHeading:w},data:function(){return{featuresData:[{id:1,title:"Navigation",text:"It is very difficult to go to an unknown place. \n          People usually search on Google Maps to reach a particular          location but sometimes it happens that people don’t get          the exact address from the map.It is easy to find places          like malls, hospitals, and much more popular sites, but           when it comes to finding a specific location like a house,           it’s really hard.<br> <br> ParkSpot helps in this situation.           ParkSpot stores the exact location of the parking location           and gives a navigation feature that will direct the ParkSpot           user to navigate to the desired parking space.This easy-finding           feature helps let users experience a hassle-free parking experience.",textLimit:!0},{id:2,title:"Booking",text:"Who doesn’t want to reserve a spot? It is easy to park           vehicles beside the roadside but everyone knows what might be           the consequences.The usual consequences will be that the user’s           vehicle might get towed away. Just like people going to Movie           Theatres after booking a ticket so that they don’t need to worry           about the availability of tickets after going to the Theatre, users           can also book their car parking space by using our platform and           will be assured that there will be a parking space reserved for           their vehicles. <br> <br> ParkSpot helps in this situation. Our platform           provides short term booking as well as long term rental booking.           So if people want to go out of the station for a few days and people           who do not have a parking area in their apartment and do not have           a parking spot to keep their vehicle, they may not be able to           afford airport parking rates and malls do not allow longtime booking.           ParkSpot can be of help in this situation. ParkSpot helps users to book           the best, cheap and secure parking space for the long term at a very reasonable price.",textLimit:!0},{id:3,title:"Searching",text:"People love their cars and hence they would want to keep their           vehicles in a safe and secure parking area. They would want a parking           area where there will be security guards, CCTV cameras, etc. ParkSpot           provides a genuine and authentic parking space for its users so that           no mishappening will be done to the user’s property. ParkSpot provides           security to private property as well so that users don’t need to worry           about the place where they are keeping their vehicles.",textLimit:!0},{id:4,title:"Safety & Security",text:"People go to places like shopping malls, hospitals, and many local           areas with their cars, without thinking that there may not be available car           parking spaces. Maps can help you search popular sites but ParkSpot along           with search provides additional information like current availability,           rates, distance, etc. ParkSpot also helps users to search apartment parking areas.",textLimit:!0}]}},methods:{expand:function(t){var e,a=[],r=Object(c["a"])(this.featuresData);try{for(r.s();!(e=r.n()).done;){var n=e.value;n.id===t?(n=Object(o["a"])(Object(o["a"])({},n),{},{textLimit:!n.textLimit}),a.push(n)):a.push(n)}}catch(i){r.e(i)}finally{r.f()}this.featuresData=a}}},x=_,S=(a("a455"),Object(d["a"])(x,i,s,!1,null,"28038bbd",null)),C=S.exports,P={name:"Features",components:{tFeaturesPage:C}},A=P,O=Object(d["a"])(A,r,n,!1,null,"017bf102",null);e["default"]=O.exports},"9de2":function(t,e,a){"use strict";var r=a("b738"),n=a.n(r);n.a},a455:function(t,e,a){"use strict";var r=a("ed95"),n=a.n(r);n.a},a630:function(t,e,a){var r=a("23e7"),n=a("4df4"),i=a("1c7e"),s=!i((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:s},{from:n})},b738:function(t,e,a){},b85c:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));a("a4d3"),a("e01a"),a("d28b"),a("d3b7"),a("3ca3"),a("ddb0");var r=a("06c5");function n(t,e){var a;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(a=Object(r["a"])(t))||e&&t&&"number"===typeof t.length){a&&(t=a);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,o=!0,c=!1;return{s:function(){a=t[Symbol.iterator]()},n:function(){var t=a.next();return o=t.done,t},e:function(t){c=!0,s=t},f:function(){try{o||null==a["return"]||a["return"]()}finally{if(c)throw s}}}}},bb52:function(t,e,a){"use strict";var r=a("5c13"),n=a.n(r);n.a},dd24:function(t,e,a){t.exports=a.p+"img/features-tick.396ee303.svg"},e95a:function(t,e,a){var r=a("b622"),n=a("3f8c"),i=r("iterator"),s=Array.prototype;t.exports=function(t){return void 0!==t&&(n.Array===t||s[i]===t)}},ed95:function(t,e,a){},fb6a:function(t,e,a){"use strict";var r=a("23e7"),n=a("861d"),i=a("e8b5"),s=a("23cb"),o=a("50c4"),c=a("fc6a"),u=a("8418"),l=a("b622"),f=a("1dde"),p=a("ae40"),d=f("slice"),h=p("slice",{ACCESSORS:!0,0:0,1:2}),m=l("species"),v=[].slice,g=Math.max;r({target:"Array",proto:!0,forced:!d||!h},{slice:function(t,e){var a,r,l,f=c(this),p=o(f.length),d=s(t,p),h=s(void 0===e?p:e,p);if(i(f)&&(a=f.constructor,"function"!=typeof a||a!==Array&&!i(a.prototype)?n(a)&&(a=a[m],null===a&&(a=void 0)):a=void 0,a===Array||void 0===a))return v.call(f,d,h);for(r=new(void 0===a?Array:a)(g(h-d,0)),l=0;d<h;d++,l++)d in f&&u(r,l,f[d]);return r.length=l,r}})}}]);
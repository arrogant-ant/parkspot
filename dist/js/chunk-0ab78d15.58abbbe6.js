(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ab78d15"],{1026:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("TemplateNearBy",{attrs:{nearByLocation:t.nearByLocation,spots:t.spots}})},s=[],o=e("2909"),r=(e("96cf"),e("1da1")),c=e("dc59"),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("HeaderBanner",[e("AtomHeading",{staticClass:"custom-title"},[t._v(" Book Your Parking Spot ")]),e("b-breadcrumb",{attrs:{align:"is-centered",size:"is-medium"}},[e("b-breadcrumb-item",{attrs:{tag:"router-link",to:"/"}},[t._v(" Home ")]),e("b-breadcrumb-item",{attrs:{tag:"router-link",to:"/blog",active:""}},[t._v(" "+t._s(t.locationWithCaps)+" ")])],1)],1),e("BodyWrapper",[e("AtomHeading",{staticClass:"mb-4",attrs:{level:"h4"}},[t._v(" Parking near "+t._s(t.locationWithCaps)+" ")]),e("div",{staticClass:"columns mb-6"},t._l(t.spots,(function(a){return e("MoleculeSRPCard",{key:a.ID,staticClass:"column",attrs:{spot:a},on:{booked:t.onBook}})})),1),e("div",{staticClass:"nearbytext-container"},[e("AtomHeading",{attrs:{level:"h3"}},[t._v(" Find and book parking spaces near "+t._s(t.locationWithCaps)+" ")]),e("AtomParagraph",{staticClass:"custom-nearby"},[t._v(t._s(t.nearByText))]),e("br"),e("AtomParagraph",{staticClass:"custom-nearby"},[t._v(" Want to earn extra money? Rent your vacant space at our platform and start earning extra. ")])],1)],1)],1)},l=[],p=(e("99af"),e("fb6a"),e("99ec")),u=e("61c8"),m=e("f801"),d=e("8d8b"),h=e("8b09"),f={name:"TemplateNearBy",components:{HeaderBanner:p["a"],AtomHeading:u["a"],MoleculeSRPCard:m["a"],AtomParagraph:d["a"],BodyWrapper:h["a"]},props:{nearByLocation:{type:String},spots:{type:Array}},data:function(){return{}},computed:{nearByText:function(){return"\n       Searching parking space near ".concat(this.nearByLocation,"  ? Book the cheap and best space for yourself near  ").concat(this.nearByLocation,"  with ParkSpot.\n       With us, you can leave the uncertainty of not finding parking space for your Car or Bike. \n       We do short term as well as long term parking as per your need with the minimum cost. \n       Choose the new way of parking near  ").concat(this.nearByLocation,", choose the smart way of parking, CHOOSE ParkSpot .\n       Think about the stress avoided, fuel & time saved.")},locationWithCaps:function(){return this.nearByLocation.charAt(0).toUpperCase()+this.nearByLocation.slice(1)}},methods:{onBook:function(){this.$router.push({name:"contactUs"})}}},g=f,b=(e("7019"),e("2877")),v=Object(b["a"])(g,i,l,!1,null,"2a7ca4cf",null),y=v.exports,_={name:"PageNearBy",components:{TemplateNearBy:y},data:function(){return{spots:[],nearByLocation:"",show:!1}},mounted:function(){this.getPageData(),this.nearByLocation=this.$route.params.pathMatch},methods:{getPageData:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var e,n,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e=Object(c["d"])(c["b"]),n=Object(c["e"])(e),a.next=4,Object(c["c"])(Object(c["a"])(n,"seo-pages/".concat(t.$route.params.pathMatch))).then((function(a){if(a.exists())return a.val();console.log("No data available"),t.show=!t.show})).catch((function(t){console.error(t)}));case 4:s=a.sent,t.spots=Object(o["a"])(s.Sites),console.log(s);case 7:case"end":return a.stop()}}),a)})))()}}},k=_,B=Object(b["a"])(k,n,s,!1,null,null,null);a["default"]=B.exports},"50b8":function(t,a,e){},7019:function(t,a,e){"use strict";var n=e("50b8"),s=e.n(n);s.a},"99ec":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"custom-banner"},[t._t("default")],2)},s=[],o={name:"HeaderBanner"},r=o,c=(e("b61e"),e("2877")),i=Object(c["a"])(r,n,s,!1,null,"14548892",null);a["a"]=i.exports},"9fcf":function(t,a,e){},b61e:function(t,a,e){"use strict";var n=e("e72f"),s=e.n(n);s.a},e72f:function(t,a,e){},f3f5:function(t,a,e){"use strict";var n=e("9fcf"),s=e.n(n);s.a},f801:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"custom-card"},[e("figure",{staticClass:"card-img image is-96x96"},[e("img",{attrs:{alt:"Parking spot image",src:t.spot.IconURL}})]),e("AtomRating",{staticClass:"card-rating",attrs:{rate:t.spot.Rating}}),e("AtomParagraph",{staticClass:"card-title",attrs:{type:"span"}},[t._v(" "+t._s(t.spot.Name)+" ")]),e("div",{staticClass:"card-location"},[e("span",{staticClass:"location-icon"},[e("AtomIcon",{attrs:{icon:"map-marker-radius"}})],1),e("AtomParagraph",{staticClass:"location-text",attrs:{type:"span"}},[t._v(" "+t._s(t.spot.Address)+" ")])],1),e("AtomParagraph",{staticClass:"card-distance",attrs:{type:"span"}},[e("strong",[t._v("Distance : ")]),t._v(" "+t._s(t.spot.Distance)+" KM ")]),e("AtomParagraph",{staticClass:"card-type",attrs:{type:"span"}},[e("strong",[t._v("Type : ")]),t._v(" "+t._s(t.spot.VehicleType)+" ")]),e("AtomParagraph",{staticClass:"card-rate",attrs:{type:"span"}},[e("strong",[t._v("Rate : ")]),t._v(" ₹ "+t._s(t.spot.Rate)+" / "+t._s(t.spot.RentUnit)+" ")]),e("AtomParagraph",{staticClass:"card-spot",attrs:{type:"span"}},[e("strong",[t._v("Available Spot : ")]),t._v(" "+t._s(t._f("available")(t.spot.SlotsAvailable))+" ")]),e("AtomButton",{staticClass:"card-btn",nativeOn:{click:function(a){return t.onBook(a)}}},[t._v(" Book Spot ")])],1)},s=[],o=e("8268"),r=e("8d8b"),c=e("02cf"),i=e("3164"),l={name:"MoleculeSRPCard",components:{AtomRating:o["a"],AtomParagraph:r["a"],AtomButton:c["a"],AtomIcon:i["a"]},props:{spot:{type:Object}},emits:["booked"],filters:{available:function(t){return 0===t?"N/A":t}},methods:{onBook:function(){this.$emit("booked")}}},p=l,u=(e("f3f5"),e("2877")),m=Object(u["a"])(p,n,s,!1,null,"3cd01364",null);a["a"]=m.exports}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a4ee878"],{"1cd6":function(e,t,a){"use strict";var i=a("88cd"),s=a.n(i);s.a},"2e5e":function(e,t,a){e.exports=a.p+"img/features.faf4a439.png"},3215:function(e,t,a){},"37eb":function(e,t,a){"use strict";var i=a("3215"),s=a.n(i);s.a},"88cd":function(e,t,a){},9851:function(e,t,a){},"9da2":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"section"},[a("t-features-page")],1)},s=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("m-features-main-heading"),a("div",{staticClass:"columns is-flex-wrap-wrap is-3"},e._l(e.featuresData,(function(t){return a("div",{key:t.id,staticClass:"features-card column is-half"},[a("transition",{attrs:{name:"expand"}},[t.textLimit?a("m-features-details",{class:t.textLimit?"feature-card__details":"",attrs:{"features-title":t.title,"features-text":t.text.substring(0,300)+"..."}}):e._e(),t.textLimit?e._e():a("m-features-details",{class:t.textLimit?"feature-card__details":"",attrs:{"features-title":t.title,"features-text":t.text}})],1),t.textLimit?a("p",{staticClass:"feature-card__show",on:{click:function(a){return e.expand(t.id)}}},[e._v(" Show more ")]):e._e(),t.textLimit?e._e():a("p",{staticClass:"feature-card__hide",on:{click:function(a){return e.expand(t.id)}}},[e._v(" Show Less ")])],1)})),0)],1)},n=[],o=a("5530"),c=a("b85c"),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"m-features-details"},[a("img",{staticClass:"m-features-details__img",attrs:{src:e.src}}),a("h2",{staticClass:"m-features-details__title"},[e._v(e._s(e.featuresTitle))]),a("br"),a("p",{staticClass:"m-features-details__text",domProps:{innerHTML:e._s(e.featuresText)}})])},u=[],p={name:"MFeaturesDetails",components:{},props:{featuresTitle:String,featuresText:String},data:function(){return{src:a("dd24")}}},h=p,d=(a("bc1b"),a("2877")),f=Object(d["a"])(h,l,u,!1,null,"b27c1caa",null),m=f.exports,g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main-heading columns"},[e._m(0),a("div",{staticClass:"main-heading__img column"},[a("div",{staticClass:"img-wrapper"},[a("div",{staticClass:"img-wrapper__img-width"},[a("img",{attrs:{src:e.src}})])])])])},k=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main-heading__text column is-one-third"},[a("h1",{staticClass:"title--size"},[e._v(" Why Parking With ParkSpot Is "),a("span",{staticClass:"title__second"},[e._v("GOOD")])]),a("br"),a("p",{staticClass:"main-heading__para"},[e._v(" Finding cheap and best parking space with ease. Providing a lot of features that no other parking platforms provide. ")]),a("p",{staticClass:"main-heading__para"},[e._v(" Navigation, Booking, Searching, Safety & Security and many others services at ParkSpot which makes your parking experience better than ever'\" ")]),a("br")])}],v={name:"MFeaturesMainHeading",components:{},props:{featuresButton:{type:String,default:function(){return"Contact Us"}},featuresButtonLink:{type:String,default:function(){return"contactUs"}}},data:function(){return{src:a("2e5e")}}},b=v,_=(a("37eb"),Object(d["a"])(b,g,k,!1,null,"ab347f06",null)),w=_.exports,x={name:"TFeaturesPage",components:{MFeaturesDetails:m,MFeaturesMainHeading:w},data:function(){return{featuresData:[{id:1,title:"Navigation",text:"It is very difficult to go to an unknown place. \n                                    People usually search on Google Maps to reach a particular                                    location but sometimes it happens that people don’t get                                    the exact address from the map.It is easy to find places                                    like malls, hospitals, and much more popular sites, but                                     when it comes to finding a specific location like a house,                                     it’s really hard.<br> <br> ParkSpot helps in this situation.                                     ParkSpot stores the exact location of the parking location                                     and gives a navigation feature that will direct the ParkSpot                                     user to navigate to the desired parking space.This easy-finding                                     feature helps let users experience a hassle-free parking experience.",textLimit:!0},{id:2,title:"Booking",text:"Who doesn’t want to reserve a spot? It is easy to park           vehicles beside the roadside but everyone knows what might be           the consequences.The usual consequences will be that the user’s           vehicle might get towed away. Just like people going to Movie           Theatres after booking a ticket so that they don’t need to worry           about the availability of tickets after going to the Theatre, users           can also book their car parking space by using our platform and           will be assured that there will be a parking space reserved for           their vehicles. <br> <br> ParkSpot helps in this situation. Our platform           provides short term booking as well as long term rental booking.           So if people want to go out of the station for a few days and people           who do not have a parking area in their apartment and do not have           a parking spot to keep their vehicle, they may not be able to           afford airport parking rates and malls do not allow longtime booking.           ParkSpot can be of help in this situation. ParkSpot helps users to book           the best, cheap and secure parking space for the long term at a very reasonable price.",textLimit:!0},{id:3,title:"Searching",text:"People love their cars and hence they would want to keep their           vehicles in a safe and secure parking area. They would want a parking           area where there will be security guards, CCTV cameras, etc. ParkSpot           provides a genuine and authentic parking space for its users so that           no mishappening will be done to the user’s property. ParkSpot provides           security to private property as well so that users don’t need to worry           about the place where they are keeping their vehicles.",textLimit:!0},{id:4,title:"Safety & Security",text:"People go to places like shopping malls, hospitals, and many local           areas with their cars, without thinking that there may not be available car           parking spaces. Maps can help you search popular sites but ParkSpot along           with search provides additional information like current availability,           rates, distance, etc. ParkSpot also helps users to search apartment parking areas.",textLimit:!0}]}},methods:{expand:function(e){var t,a=[],i=Object(c["a"])(this.featuresData);try{for(i.s();!(t=i.n()).done;){var s=t.value;s.id===e?(s=Object(o["a"])(Object(o["a"])({},s),{},{textLimit:!s.textLimit}),a.push(s)):a.push(s)}}catch(r){i.e(r)}finally{i.f()}this.featuresData=a}}},y=x,S=(a("1cd6"),Object(d["a"])(y,r,n,!1,null,"0f879c06",null)),C=S.exports,P={name:"Features",components:{tFeaturesPage:C}},L=P,T=Object(d["a"])(L,i,s,!1,null,"d8625b5e",null);t["default"]=T.exports},bc1b:function(e,t,a){"use strict";var i=a("9851"),s=a.n(i);s.a},dd24:function(e,t,a){e.exports=a.p+"img/features-tick.396ee303.svg"}}]);
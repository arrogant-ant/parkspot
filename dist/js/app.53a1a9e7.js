(function(t){function a(a){for(var s,r,o=a[0],l=a[1],c=a[2],h=0,d=[];h<o.length;h++)r=o[h],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(a);while(d.length)d.shift()();return n.push.apply(n,c||[]),e()}function e(){for(var t,a=0;a<n.length;a++){for(var e=n[a],s=!0,o=1;o<e.length;o++){var l=e[o];0!==i[l]&&(s=!1)}s&&(n.splice(a--,1),t=r(r.s=e[0]))}return t}var s={},i={app:0},n=[];function r(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=s,r.d=function(t,a,e){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)r.d(e,s,function(a){return t[a]}.bind(null,s));return e},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=a,o=o.slice();for(var c=0;c<o.length;c++)a(o[c]);var u=l;n.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";var s=e("85ec"),i=e.n(s);i.a},"051b":function(t,a,e){},"07ed":function(t,a,e){t.exports=e.p+"img/new.21a304b8.png"},"0932":function(t,a,e){"use strict";var s=e("e7f6"),i=e.n(s);i.a},"2b9c":function(t,a,e){t.exports=e.p+"img/bang.5702f9f4.jpeg"},"30a1":function(t,a,e){t.exports=e.p+"img/mini.70b85385.png"},3100:function(t,a,e){},"33f6":function(t,a,e){"use strict";var s=e("051b"),i=e.n(s);i.a},"437f":function(t,a,e){t.exports=e.p+"img/playstoreMini.243c06fc.png"},"56d7":function(t,a,e){"use strict";e.r(a);e("e623"),e("e379"),e("5dc8"),e("37e1");var s=e("2b0e"),i=e("289d"),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},r=[],o=(e("034f"),e("2877")),l={},c=Object(o["a"])(l,n,r,!1,null,null,null),u=c.exports,h=(e("5abe"),e("8c4f")),d=(e("99af"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("PSNavbar"),e("PSMap"),e("MainBanner"),e("Services"),e("PSTeam"),e("PSSites"),e("PSAbout"),e("contact"),e("PSFooter")],1)}),p=[],m=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"PSContainer",attrs:{id:"topNav"}},[e("b-navbar",{attrs:{id:"top"}},[e("template",{slot:"brand"},[e("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/"}}},[e("img",{attrs:{src:""+t.minilogo.path,placeholder:"ParkSpot",id:"maximize"}})])],1),e("template",{slot:"start"},[e("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/"}}},[e("img",{attrs:{src:""+t.minilogotext.path,placeholder:"ParkSpot",id:"maximize"}})])],1),e("template",{slot:"end"},[e("b-navbar-item",{attrs:{tag:"div"}},[e("div",{staticClass:"buttons"},[e("b-navbar-item",{staticClass:"button is-dark"},[e("strong",[t._v("Sign up")])]),e("b-navbar-item",{staticClass:"button is-warning",on:{click:function(a){return t.cardModal()}}},[e("strong",[t._v("Log in")])])],1)])],1)],2),e("b-navbar",{staticClass:"is-dark",attrs:{id:"mainNav"}},[e("template",{slot:"end"},[e("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/"}}},[t._v("Home")]),e("b-navbar-item",{attrs:{href:"/#services"}},[t._v("Services")]),e("b-navbar-item",{attrs:{href:"/#team"}},[t._v("Team")]),e("b-navbar-item",{attrs:{href:"/#book"}},[t._v("Book")]),e("b-navbar-item",{attrs:{href:"/#contact"}},[t._v("Rent")]),e("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/faq"}}},[t._v("FAQs")]),e("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/blog/eliminating-reason-for-traffic-jam"}}},[t._v("Blog")]),e("b-navbar-item",{attrs:{href:"/#about"}},[t._v("About")]),e("b-navbar-item",{attrs:{href:"/#contact"}},[t._v("Contact Us")])],1)],2)],1)},f=[],v=(e("4795"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("form",{attrs:{action:""}},[e("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[e("header",{staticClass:"modal-card-head"},[e("p",{staticClass:"modal-card-title"},[t._v("Login")]),e("button",{staticClass:"delete",attrs:{type:"button"},on:{click:function(a){return t.$emit("close")}}})]),e("section",{staticClass:"modal-card-body"},[e("b-field",{attrs:{label:"Username"}},[e("b-input",{attrs:{value:t.loginUser,placeholder:"Your Username",required:""},model:{value:t.loginUser,callback:function(a){t.loginUser=a},expression:"loginUser"}})],1),e("b-field",{attrs:{label:"Password"}},[e("b-input",{attrs:{type:"password",value:t.loginPassword,"password-reveal":"",placeholder:"Your password",required:""},model:{value:t.loginPassword,callback:function(a){t.loginPassword=a},expression:"loginPassword"}})],1),e("b-checkbox",[t._v("Remember me")])],1),e("footer",{staticClass:"modal-card-foot"},[e("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(a){return t.$emit("close")}}},[t._v("Close")]),e("button",{staticClass:"button is-warning",on:{click:[function(a){return t.handleLogin()},function(a){return a.preventDefault(),t.handleLogin()}]}},[t._v("Login")])])])])}),b=[],g=(e("d3b7"),{name:"ModalForm",data:function(){return{loginPassword:"",loginUser:""}},methods:{handleLogin:function(){var t=this;fetch("http://168.63.243.20:5002/login",{method:"POST",mode:"cors",body:JSON.stringify({Username:this.loginUser,Password:this.loginPassword}),cache:"no-cache",credentials:"include",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},redirect:"follow",referrerPolicy:"no-referrer"}).then((function(t){console.log(t)}))["catch"]((function(a){console.log(a),t.$emit("close")}))}}}),k=g,C=Object(o["a"])(k,v,b,!1,null,null,null),_=C.exports,y=(setInterval((function(){var t=document.getElementById("mainNav"),a=document.getElementById("topNav").offsetHeight;window.scrollY>a?t.classList.add("is-fixed-top"):t.classList.remove("is-fixed-top")}),100),{name:"PSNavbar",methods:{cardModal:function(){console.log("hello"),this.$buefy.modal.open({parent:this,component:_,hasModalCard:!0,customClass:"custom-class custom-class-2",trapFocus:!0})}},data:function(){return{minilogotext:{path:e("b401")},minilogo:{path:e("beb9")}}}}),w=y,x=(e("efd7"),Object(o["a"])(w,m,f,!1,null,"855f2cce",null)),S=x.exports,P=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",{staticClass:"footer",attrs:{id:"black"}},[e("div",{staticClass:"content has-text-centered"},[e("div",{staticClass:"footercontainer"},[e("div",{staticClass:"containersocial"}),e("br"),e("p",{staticClass:"has-text-white"},[t._v("© 2020 "),e("strong",{staticClass:"has-text-white"},[t._v("The Thought Engine ")]),t._v("- All rights reserved.")])])])])}],E={name:"PSFooter",data:function(){return{bottomicons:[{image:e("437f"),href:"https://play.google.com/store/apps/details?id=com.parkspot.parkspot"},{image:e("da2b"),href:"https://www.linkedin.com/company/parkspot-in"},{image:e("b29b"),href:"https://twitter.com/sud_ambastha"}]}}},M=E,N=(e("7d14"),Object(o["a"])(M,P,j,!1,null,"5594e276",null)),O=N.exports,T=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"customherocontainer"},[e("div",{staticClass:"customhero"},[e("div",{staticClass:"searchbar"},[e("p",{staticClass:"is-size-1 has-text-dark",attrs:{id:"welcomeText"}},[t._v(" Search a parking spot near you ! ")]),e("section",[e("b-autocomplete",{attrs:{data:t.data,placeholder:"e.g. Bangalore",field:"title",loading:t.isFetching},on:{typing:t.getAsyncData,select:function(a){return t.selected=a}},scopedSlots:t._u([{key:"default",fn:function(a){return[e("div",{staticClass:"media-content"},[t._v(" "+t._s(a.option)+" ")])]}}])})],1),e("br"),e("button",{staticClass:"button is-warning",attrs:{type:"submit"},on:{click:function(a){return t.flyToSrp()}}},[t._v(" Go !")])]),t.mapdisp?e("div",{attrs:{id:"maph"}}):t._e()])])},$=[],z=(e("d81d"),e("b047")),I=e.n(z),B={name:"PSMap",data:function(){return{data:[],selected:null,isFetching:!1,cdata:[],mapdisp:!0}},mounted:function(){var t,a,e=[77.8782,12.9098];function s(e){a=new mapboxgl.Map({container:"maph",style:"mapbox://styles/mapbox/dark-v10",center:e,zoom:13}),t=setInterval((function(t,a){if(a.loaded()){var e=document.getElementById("welcomeText");e.classList.remove("has-text-dark"),e.classList.add("has-text-light")}clearInterval(t)}),100,t,a),a.scrollZoom.disable()}mapboxgl.accessToken="pk.eyJ1IjoiYmZyaWVkbHkiLCJhIjoiY2p4bHd1OXdpMGFycDN0bzFiNWR4d2VyNyJ9.3hQjvgyoPoCuRx-Hqr_BFQ",navigator.geolocation.getCurrentPosition((function(t){var a=[t.coords.longitude,t.coords.latitude];s(a)})),s(e)},methods:{getAsyncData:I()((function(t){var a=this;t.length?(this.isFetching=!0,fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/".concat(t,".json?access_token=pk.eyJ1IjoiaWFtZmlhc2NvIiwiYSI6ImNrOWZiankzdjA5d2kzbWp3NGNzNmIwaHAifQ.E2UwYdvpjc6yNoCmBjfTaQ&proximity=77.4977,12.9716")).then((function(t){return t.json()})).then((function(t){try{a.cdata=t.features,a.data=t.features.map((function(t){return t.place_name}))}catch(e){a.data=[]}}))):this.data=[]}),500),flyToSrp:function(){for(var t=null,a=null,e=0;e<this.cdata.length;e++)if(this.cdata[e].place_name===this.selected){t=this.cdata[e].center[0],a=this.cdata[e].center[1];break}this.$router.push({name:"PSSrp",query:{lat:a,lng:t}})}}},F=B,L=(e("b1e3"),Object(o["a"])(F,T,$,!1,null,"c7f29b0c",null)),W=L.exports,q=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"banner"},[e("b-carousel",t._l(t.carousels,(function(a,s){return e("b-carousel-item",{key:s},[e("section",{class:"hero is-fullheight is-"+a.color},[e("div",{staticClass:"hero-body has-centered-text"}),e("div",{staticClass:"eightypercent"},[e("div",{staticClass:"columns is-vcentered"},[a.istextb?e("div",{staticClass:"column is-half"},[e("p",{staticClass:"title has-text-black"},[t._v(t._s(a.title))]),e("br"),e("pre",{staticClass:"subtitle has-text-black"},[t._v(t._s(a.subtitle))])]):e("div",{staticClass:"column is-half"},[e("p",{staticClass:"title"},[t._v(t._s(a.title))]),e("br"),e("p",{staticClass:"subtitle",staticStyle:{"white-space":"pre-line"}},[t._v(t._s(a.subtitle))])]),e("div",{staticClass:"column is-half"},[e("img",{attrs:{src:""+a.path}})])])])])])})),1)],1)},A=[],R={name:"MainBanner",data:function(){return{carousels:[{title:"Park Smart with ParkSpot!",subtitle:"In case you are fed up of drifting through the traffic to find a parking lot on a hit and trial basis, we are here to help you out.\n\nParkSpot is a completely automated parking spot booking platform for the new generation.\nWe aims to provide you a secured parking reservation in your desired locality, with real time surveillance, anytime anywhere at the cost of the parking bill for the available spots.",path:e("d2e3"),color:"black",istextb:!1},{title:"Worried about security?",subtitle:"We'll make sure no harm occurs to your property. To ensure this you can monitor your property in real time",path:e("72c0"),color:"warning",istextb:!0},{title:"Long term parking required ?",subtitle:"No worries you can choose the timing duration and location",path:e("c22f"),color:"black",istextb:!1},{title:"Want to rent out your private space for extra pennies?",subtitle:"ParkSpot allows you to list your private areas in our platform. It'll help you reach new customers",path:e("dec3"),color:"warning",istextb:!0}]}}},K=R,H=(e("94d0"),Object(o["a"])(K,q,A,!1,null,"40ea16a4",null)),U=H.exports,D=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"hero is-black is-fullheight",attrs:{id:"team"}},[e("div",{staticClass:"hero-head"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"columns is-vcentered"},[t._m(0),t._l(t.teamMates,(function(a,s){return e("div",{key:s,staticClass:"column is-one-fifth"},[e("div",{staticClass:"card team"},[e("div",{staticClass:"card-image"},[e("figure",{staticClass:"image is-128x128"},[e("img",{attrs:{src:""+a.dp}})])]),e("div",{staticClass:"card-content"},[e("div",{staticClass:"media"},[e("div",{staticClass:"media-left"},[e("figure",{staticClass:"image is-48x48"},[e("img",{attrs:{src:""+t.parkspot}})])]),e("div",{staticClass:"media-content"},[e("p",{staticClass:"title is-4 has-text-black nowrap"},[t._v(t._s(a.name)+" ")]),e("p",{staticClass:"subtitle is-6 has-text-black"},[t._v(t._s(a.username))])])]),e("div",{staticClass:"content"},[e("div",{staticClass:"columns is-centered is-vcentered"},[e("div",{staticClass:"column is-one-third"},[e("a",{attrs:{href:""+a.git}},[e("img",{staticClass:"image is-48x48",attrs:{src:""+t.github}})])]),e("div",{staticClass:"column is-one-third"},[e("a",{attrs:{href:""+a.linkedin}},[e("img",{staticClass:"image is-48x48",attrs:{src:""+t.linkedin}})])]),e("div",{staticClass:"column is-one-third"},[e("a",{attrs:{href:""+a.twitter}},[e("img",{staticClass:"image is-48x48",attrs:{src:""+t.twitter}})])])])])])])])}))],2)])])])},J=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"column is-one-fifth"},[e("p",{staticClass:"title"},[t._v("Our Team")])])}],Y={name:"PSTeam",data:function(){return{linkedin:e("da2b"),github:e("9225"),twitter:e("b29b"),parkspot:e("30a1"),teamMates:[{name:"Sudhanshu Kr. Ambastha",dp:e("5777"),git:"https://www.github.com/arrogant-ant",linkedin:"https://www.linkedin.com/in/sudhanshu-ambastha/",twitter:"https://twitter.com/sud_ambastha",username:"@arrogant-ant"},{name:"Ishwar Kumar",dp:e("f7fb"),git:"https://www.github.com/nextishwar",linkedin:"https://www.linkedin.com/in/ishwar-kumar-50403a130/",twitter:"https://twitter.com/nextishwar",username:"@nextishwar"},{name:"Nikhil Surya Mukhi",dp:e("c294"),git:"https://www.github.com/iamfiasco",linkedin:"https://www.linkedin.com/in/iamfiasco/",twitter:"https://twitter.com/NikhilSuryaMuk1",username:"@iamfiasco"},{name:"Shubham Choudhary",dp:e("f2f0"),git:"https://www.github.com/subhamjpc",linkedin:"https://www.linkedin.com/in/shubham-choudhary-391942101",twitter:"https://twitter.com/shubhamjpc?s=09",username:"@shubhamjpc"}]}}},Q=Y,V=(e("5b03"),Object(o["a"])(Q,D,J,!1,null,"3dc4c56e",null)),Z=V.exports,G=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"containerz"},t._l(t.services,(function(a,s){return e("div",{key:s,attrs:{id:"services"}},[e("section",{class:"hero is-fullheight is-"+a.color},[e("div",{staticClass:"hero-body has-centered-text"},[e("div",{staticClass:"columns is-vcentered"},[e("div",{staticClass:"column is-half"},["warning"===a.color?e("div",{staticClass:"column"},[e("h1",{staticClass:"title has-text-black"},[t._v(t._s(a.title))]),e("br"),e("h2",{staticClass:"subtitle has-text-black"},[t._v(t._s(a.subtitle))]),e("p",{staticClass:"has-text-black"},[t._v(t._s(a.text))])]):e("div",{staticClass:"column"},[e("h1",{staticClass:"title"},[t._v(t._s(a.title))]),e("br"),e("h2",{staticClass:"subtitle"},[t._v(t._s(a.subtitle))]),e("p",{staticClass:"has-text-white is-size-5"},[t._v(t._s(a.text))])])]),e("div",{staticClass:"column is-half"},[e("img",{attrs:{src:""+a.image}})])])])])])})),0)},X=[],tt={name:"Service",data:function(){return{services:[{title:"Join ParkSpot platform as a parking operator",subtitle:"Want to reach new customers?",text:"Not getting enough customers? Spending too much on billboards but still not reaching customers? Try parkspot.in to list your parking sites on our platform for reaching a bigger customer base. We at ParkSpot will be renting your parking sites on our platform for better visibility and reach out to a bigger customer base. This will minimise your effort, increase your income and we will take care of customer’s convenience.",image:e("8440"),color:"black"},{title:"Join ParkSpot as an individual",subtitle:"Looking for new ways to make money?",text:"If you have extra parking space. Try parkspot.in to list/rent your parking space in our platform on your terms for extra income",image:e("e77f"),color:"warning"}]}}},at=tt,et=Object(o["a"])(at,G,X,!1,null,null,null),st=et.exports,it=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},nt=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"hero is-fullheight is-warning",attrs:{id:"contact"}},[e("div",{staticClass:"hero-head"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-half contact"},[e("p",{staticClass:"title has-text-black has-text-left"},[t._v("Contact Us")]),e("br"),e("p",{staticClass:"subtitle has-text-black has-text-left"},[t._v("Location:")]),e("p",{staticClass:"subtitle has-text-black has-text-left"},[t._v("Norbert Church Road, Off, Kasavanahalli Main Rd, Kasavanahalli, Karnataka 560035")]),e("p",{staticClass:"subtitle has-text-black has-text-left"},[t._v("Email: connect@parkspot.in")]),e("p",{staticClass:"subtitle has-text-left"},[t._v(" Call: +91 80929 96057")]),e("iframe",{attrs:{src:"https://maps.google.com/maps?q=bhavya%20serene&t=&z=13&ie=UTF8&iwloc=&output=embed",height:"45%",width:"100%"}})]),e("div",{staticClass:"column is-half contact"},[e("p",{staticClass:"title has-text-black has-text-left"},[t._v("Got suggestions?")]),e("form",{staticClass:"form",attrs:{id:"contactusform",action:"https://api.sheetmonkey.io/form/4LQXCEMZFtaaSQMmXc7nbw",method:"POST"}},[e("label",{staticClass:"label has-text-black has-text-left"},[t._v("Name")]),e("input",{staticClass:"input",attrs:{id:"namec",type:"text",name:"Name",placeholder:"Enter Name Here"}}),e("label",{staticClass:"label has-text-black has-text-left"},[t._v("Email")]),e("input",{staticClass:"input",attrs:{id:"emailc",type:"text",name:"Email",placeholder:"Enter Email id here"}}),e("label",{staticClass:"label has-text-black has-text-left"},[t._v("City")]),e("input",{staticClass:"input",attrs:{id:"cityc",type:"text",name:"City",placeholder:"Bangalore"}}),e("label",{staticClass:"label has-text-black has-text-left"},[t._v("Authority type")]),e("div",{staticClass:"control level"},[e("div",{staticClass:"select level-left"},[e("select",{attrs:{id:"options",name:"Authority type"}},[e("option",[t._v("Parking Operator")]),e("option",[t._v("Parking User")]),e("option",[t._v("Others")])])])]),e("label",{staticClass:"label has-text-black has-text-left"},[t._v("Message")]),e("textarea",{staticClass:"textarea",attrs:{id:"messagec",name:"Message",placeholder:"Enter your suggestions; We are happy to listen"}}),e("br"),e("button",{staticClass:"button is-dark"},[t._v("Submit")])])])])])])}],rt={name:"contact"},ot=rt,lt=(e("e583"),Object(o["a"])(ot,it,nt,!1,null,"2c5a411c",null)),ct=lt.exports,ut=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"hero is-fullheight is-warning",attrs:{id:"book"}},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"columns is-vcentered is-centered"},[t._m(0),e("div",{staticClass:"column is-one-quarter"},[e("div",{staticClass:"card team"},[e("div",{staticClass:"card-image"},[e("figure",{staticClass:"image is-4by3"},[e("img",{attrs:{src:""+t.kolkata}})])]),t._m(1),t._m(2)])]),e("div",{staticClass:"column is-one-quarter"},[e("div",{staticClass:"card team"},[e("div",{staticClass:"card-image"},[e("figure",{staticClass:"image is-4by3"},[e("img",{attrs:{src:""+t.chennai}})])]),t._m(3),t._m(4)])]),e("div",{staticClass:"column is-one-quarter"},[e("div",{staticClass:"card team"},[e("div",{staticClass:"card-image"},[e("figure",{staticClass:"image is-4by3"},[e("img",{attrs:{src:""+t.bangalore}})])]),t._m(5),t._m(6)])])])])])},ht=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"column is-one-quarter"},[e("p",{staticClass:"title has-text-black"},[t._v("Our best picks")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card-content"},[e("div",{staticClass:"media"},[e("div",{staticClass:"media-content"},[e("p",{staticClass:"title is-4 has-text-black"},[t._v("Kolkata")]),e("p",{staticClass:"subtitle is-6 has-text-black"},[t._v("@Ballygunge")])])]),e("div",{staticClass:"content"},[t._v("129, KN Sen Rd, New Ballygunge, Kasba, Kolkata, West Bengal 700042")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card-footer"},[e("div",{staticClass:"card-footer-item"},[e("a",{staticClass:"button is-dark",attrs:{href:"#contact",id:"Kolkata"}},[t._v("Book")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card-content"},[e("div",{staticClass:"media"},[e("div",{staticClass:"media-content"},[e("p",{staticClass:"title is-4 has-text-black"},[t._v("Chennai")]),e("p",{staticClass:"subtitle is-6 has-text-black"},[t._v("@Pallikaranai")])])]),e("div",{staticClass:"content"},[t._v("Apartment name: Newry Shanmitha, 1st floor, 1b- 105, Block 1, Bharathiyar salai, Pallikaranai Chennai -600100")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card-footer"},[e("div",{staticClass:"card-footer-item"},[e("a",{staticClass:"button is-dark",attrs:{href:"#contact",id:"Chennai"}},[t._v("Book")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card-content"},[e("div",{staticClass:"media"},[e("div",{staticClass:"media-content"},[e("p",{staticClass:"title is-4 has-text-black"},[t._v("Bangalore")]),e("p",{staticClass:"subtitle is-6 has-text-black"},[t._v("@RTNagar")])])]),e("div",{staticClass:"content"},[t._v("Hani elegance RT Nagar")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card-footer"},[e("div",{staticClass:"card-footer-item"},[e("a",{staticClass:"button is-dark",attrs:{href:"#contact",id:"Bangalore"}},[t._v("Book")])])])}],dt={name:"PSSites",data:function(){return{bangalore:e("2b9c"),chennai:e("852b"),kolkata:e("6cba")}}},pt=dt,mt=Object(o["a"])(pt,ut,ht,!1,null,null,null),ft=mt.exports,vt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"hero is-fullheight is-dark",attrs:{id:"book"}},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"columns is-vcentered tengine"},[e("div",{staticClass:"column is-half"},[e("img",{staticClass:"aboutbanner team",attrs:{src:""+t.aboutimg}})]),t._m(0)])])])},bt=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"column is-half"},[e("h1",{staticClass:"title has-text-light"},[t._v("About ParkSpot")]),e("br"),e("p",{staticClass:"subsitle has-text-light"},[t._v("We at ParkSpot strive to solve the trivial problem of finding/booking available parking slots in vicinity which is faced by millions of people on a daily basis. we vie for solutions which brings technology and life closer and accessible.")]),e("br"),e("p",{staticClass:"has-text-white has-text-weight-semibold"},[t._v('"When the need for something becomes imperative, you are forced to find ways of getting or achieving it. - lexico.com"')])])}],gt={name:"PSAbout",data:function(){return{aboutimg:e("f899")}}},kt=gt,Ct=Object(o["a"])(kt,vt,bt,!1,null,null,null),_t=Ct.exports,yt={name:"App",components:{PSNavbar:S,MainBanner:U,PSTeam:Z,Services:st,contact:ct,PSMap:W,PSFooter:O,PSSites:ft,PSAbout:_t}},wt=yt,xt=(e("cccb"),Object(o["a"])(wt,d,p,!1,null,null,null)),St=xt.exports,Pt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("PSNavbar"),e("PSThanks"),e("PSFooter")],1)},jt=[],Et=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},Mt=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wrapper"},[e("div",{staticClass:"hero is-fullheight is-warning"},[e("div",{staticClass:"hero-head"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-full is-vcentered is-centered"},[e("p",{staticClass:"title"},[t._v("Thanks for reaching out to us.")]),e("div",{staticClass:"thanks inline"},[e("a",{attrs:{href:"mailto:connect@parkspot.in"}},[e("p",{staticClass:"subtitle"},[t._v("Please email your further concerns at connect@parkspot.in")])])])])])])])])])])}],Nt={name:"PSThanks"},Ot=Nt,Tt=(e("33f6"),Object(o["a"])(Ot,Et,Mt,!1,null,"021dd418",null)),$t=Tt.exports,zt={name:"Thanks",components:{PSThanks:$t,PSNavbar:S,PSFooter:O}},It=zt,Bt=Object(o["a"])(It,Pt,jt,!1,null,null,null),Ft=Bt.exports,Lt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("PSNavbar"),e("PSFaq"),e("PSFooter")],1)},Wt=[],qt=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},At=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wrappermain"},[e("div",{staticClass:"mainp"},[e("br"),e("br"),e("div",{staticClass:"content"},[e("p",{staticClass:"is-size-1 has-text-black"},[t._v("Frequently Asked Questions")])]),e("article",{staticClass:"message"},[e("div",{staticClass:"message-header"},[e("p",[t._v("What is ParkSpot ?")])]),e("div",{staticClass:"message-body"},[e("p",[t._v("ParkSpot is a smart parking platform, where you can search and book a parking spot at your desired location or in your vicinity. ParkSpot also supports long term parking and rental parkings. ParkSpot relies on new technology and software that allows you to monitor your vehicle in realtime post parking your vehicle in the parking spot.")])])]),e("article",{staticClass:"message"},[e("div",{staticClass:"message-header"},[e("p",[t._v("Why do I need to add my vehicle number at the time of booking? Is it safe ?")])]),e("div",{staticClass:"message-body"},[e("p",[t._v("We require your vehicle number just to make the post booking process more convenient. You dont need to wait for a parking operator to just to register your vehicle numbers manually. The systems will detect your car when it enter the parking site and from then you'll get a video stream to monitor your car We dont share your personal details no matter what. We'll keep that our secret.")])])]),e("article",{staticClass:"message"},[e("div",{staticClass:"message-header"},[e("p",[t._v("How can your platform help me? How safe is your platform ? ")])]),e("div",{staticClass:"message-body"},[e("p",[t._v("The problem that people in urban areas face is, where do they find a parking space? We list the safest parking sites and show you the parking places you can visit. We desire to be the goto place for parking sites. We've used state of the art technologies to solve all your problems regarding the parking site question. We have built the entire platform while pushing security and transparency to the limit. You can monitor your vehicle at realtime for the peace of your mind.")])])]),e("article",{staticClass:"message"},[e("div",{staticClass:"message-header"},[e("p",[t._v("Does ParkSpot support cashless and no contact bookings ?")])]),e("div",{staticClass:"message-body"},[e("p",[t._v("Yes ParkSpot supports cashless modes of payments and you can book a parking site and park your vehicle at your allocated spot without having to contact a person in person or any other mode.")])])]),e("br"),e("br")])])}],Rt={name:"PSFaq"},Kt=Rt,Ht=(e("0932"),Object(o["a"])(Kt,qt,At,!1,null,"ad788c00",null)),Ut=Ht.exports,Dt={name:"Faq",components:{PSFaq:Ut,PSNavbar:S,PSFooter:O}},Jt=Dt,Yt=Object(o["a"])(Jt,Lt,Wt,!1,null,null,null),Qt=Yt.exports,Vt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",[e("PSNavbar"),e("SRP"),e("PSSrpDetails"),e("PSFooter")],1)},Zt=[],Gt=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},Xt=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"customherocontainer"},[e("div",{staticClass:"customhero"},[e("div",{attrs:{id:"map"}})])])}],ta=(e("a9e3"),e("ac1f"),e("3ca3"),e("841c"),e("ddb0"),e("2b3d"),e("2909")),aa={name:"SRP",mounted:function(){var t,a,e=this.getLat(),s=this.getLng();function i(t){console.log("hale",t),a=new mapboxgl.Map({container:"map",style:"mapbox://styles/mapbox/dark-v10",center:t,zoom:13}),a.scrollZoom.disable();for(var e=10,s=0;s<e;s++){var i=Object(ta["a"])(t),n=.01,r=.2;i[-1]=i[0]+(Math.random()*(r-n)+n),i[1]=i[1]+(Math.random()*(r-n)+n),console.log(i);(new mapboxgl.Marker).setLngLat(i).addTo(a)}}t=null===e||null===s?[77.8782,12.9098]:[Number(s),Number(e)],mapboxgl.accessToken="pk.eyJ1IjoiYmZyaWVkbHkiLCJhIjoiY2p4bHd1OXdpMGFycDN0bzFiNWR4d2VyNyJ9.3hQjvgyoPoCuRx-Hqr_BFQ",null!==e&&null!==s||navigator.geolocation.getCurrentPosition((function(t){var a=[t.coords.longitude,t.coords.latitude];console.log(a),i(a)})),i(t)},methods:{getLat:function(){var t=new URLSearchParams(window.location.search);return console.log(t.get("lat")),t.get("lat")},getLng:function(){var t=new URLSearchParams(window.location.search);return console.log(t.get("lng")),t.get("lng")}}},ea=aa,sa=(e("ac52"),Object(o["a"])(ea,Gt,Xt,!1,null,"a2fc7a8e",null)),ia=sa.exports,na=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"cont"},[e("br"),e("div",{staticClass:"hero"},[e("p",{staticClass:"title has-text-left"},[t._v("Results:")]),t._l(t.sites,(function(a,s){return e("div",{key:s,staticClass:"containers"},[e("div",{staticClass:"rcorner"},[e("div",{staticClass:"columns is-vcentered"},[e("div",{staticClass:"column is-half"},[e("img",{staticClass:"resultimg",attrs:{src:""+t.newPSSite}})]),e("div",{staticClass:"column is-half"},[e("div",{staticClass:"grid"},[e("div",{staticClass:"tname"},[e("div",{staticClass:"has-text-left is-size-7"},[t._v(t._s(a.type))]),e("div",{staticClass:"subtitle has-text-left"},[t._v(t._s(a.name))])]),e("div",{staticClass:"loc has-text-left is-size-6"},[e("strong",[t._v("Address: ")]),t._v(t._s(a.location))]),e("div",{staticClass:"rate has-text-right is-size-6"},[e("strong",[t._v("Rate: ")]),t._v("₹ "+t._s(a.rate)+"/"+t._s(a.unit))])]),t._m(0,!0)])])]),e("br"),e("br"),e("br")])}))],2)])},ra=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"floatright"},[e("a",{staticClass:"button is-warning"},[t._v("Book")])])}],oa=(e("4de4"),{name:"PSSrpDetails",data:function(){return{newPSSite:e("07ed"),sites:[{name:"Muthumariamma Temple",location:"Off Kasavanahalli Main Road Off Kasavanahalli Main Road, Norbert Church Rd, Kasavanahalli, Karnataka 560035",latLng:[13.012172800000002,77.6077312],rate:10,unit:"day",type:"private parking"},{name:"Vijaya Niketan",location:"Vijayanikethan Apartment, Norbert Church road, Kasavanahalli, Sarjapur, Karnataka 560035",latLng:[12.9151665,77.6879585],rate:10,unit:"hour",type:"private parking"},{name:"Ittina Mahavir",location:"O block 102, Ittina Mahavir, Neeladri Nagar, Electronic City Phase 1, Bangalore Karnataka 560100",latLng:[12.8402,77.6482],rate:20,unit:"month",type:"housing society parking"}]}},methods:{getLatLng:function(){return new Promise((function(t,a){navigator.geolocation.getCurrentPosition((function(e){var s=e.coords.latitude,i=e.coords.longitude;null===s&&null===i?a("failed to get current position"):t([s,i])}))}))},calcDist:function(t,a,e,s){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"K",n=t*Math.PI/180,r=a*Math.PI/180,o=(a-t)*Math.PI/180,l=(s-e)*Math.PI/180,c=Math.sin(o/2)*Math.sin(o/2)+Math.cos(n)*Math.cos(r)*Math.sin(l/2)*Math.sin(l/2),u=2*Math.atan2(Math.sqrt(c),Math.sqrt(1-c)),h=6371e3;switch(i){case"m":return h*u;case"K":return h*u/1e3;case"M":return h*u*62137e-8;default:return 0}},filterDist:function(t,a){return this.sites.filter((function(e){return distance(t,e.latLng[0],a,e.latLng[1])<60}))}}}),la=oa,ca=(e("7161"),Object(o["a"])(la,na,ra,!1,null,"c4da34d6",null)),ua=ca.exports,ha={name:"PSSrp",components:{PSNavbar:S,PSFooter:O,SRP:ia,PSSrpDetails:ua}},da=ha,pa=Object(o["a"])(da,Vt,Zt,!1,null,null,null),ma=pa.exports,fa=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("PSNavbar"),e("BlogOne"),e("PSFooter")],1)},va=[],ba=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wrappermain"},[e("div",{staticClass:"mainp"},[e("br"),e("div",{staticClass:"content"},[e("p",{staticClass:"is-size-1 has-text-black has-text-left"},[t._v("Eliminating Traffic jams in India!")]),e("div",{attrs:{id:"authorDetails"}},[e("img",{staticClass:"round",attrs:{src:""+t.dp}}),e("p",{staticClass:"is-size-6 has-text-success noBottomMargin"},[t._v("Nikhil Surya Mukhi")]),e("p",{staticClass:"is-size-6 has-text-dark noBottomMargin"},[t._v("Nov 2, 2020")]),e("p",{staticClass:"is-size-6 has-text-dark noBottomMargin"},[t._v("5 min read")]),e("p",{staticClass:"is-size-6 has-text-dark noBottomMargin"})]),e("hr"),e("img",{attrs:{src:"https://www.stevenvanbelleghem.com/wp-content/uploads/2020/04/Heavy-rains-lash-Delhi-NCR-traffic-snarls-at-many-places.jpg"}}),e("br"),e("br"),e("p",{staticClass:"is-size-6 has-text-black has-text-left"},[t._v("In the recent years all over the globe production and demand for motor vehicles has increased dramatically. Earlier motor vehicles were a luxury only few can afford but now their prices have plummeted and its more easily available to the population. India for an example took about 60 years to acquire 100 million vehicles and the next 100 million vehicles were bought in the last 10 years !")]),e("br"),t._m(0),e("br"),e("p",{staticClass:"is-size-3 has-text-black has-text-left"},[t._v("What causes a traffic jam ?")]),e("br"),e("p",{staticClass:"is-size-6 has-text-black has-text-left"},[t._v("There a numerous reasons for traffic jams like lack of proper infrastructure, office rush hours, illegal parkings and many more. Improper parkings beside roads/no parking zones are he main cause for traffic jams. Even the widest of roads have traffic jams because of illegal parkings. Widening the ones which face traffic jams are not so rewarding because empty roads means more room for people to park vehicles. Inadequate parking infrastructure is the reason to blame when people park their vehicles in no parking zones. Absence of a proper inventory for parking sites and the lack of awareness is the root of the cause.")]),e("br"),e("p",{staticClass:"is-size-3 has-text-black has-text-left"},[t._v("How can a smart parking platform help ?")]),e("br"),e("p",{staticClass:"is-size-6 has-text-black has-text-left"},[t._v("A smart parking system allows people to search and book a secure parking spot. This two features to search and book will allow people to plan where they park their vehicle in a secure parking zone. These two features can curb the problem of traffic jams. Smart parking systems are equipped with smart sensors and devices which make the parking experience seamless which users will flock to experience.")]),e("br"),e("p",{staticClass:"is-size-3 has-text-black has-text-left"},[t._v("The new normal and how ParkSpot helps the cause.")]),e("br"),e("p",{staticClass:"is-size-6 has-text-black has-text-left"},[t._v("The COVID-19 pandemic shed light upon the problems in our day to day habits which aids in transmission of diseases. Social distancing, wearing of masks and hand sanitation have become a new normal withing our society. People are distancing themselves from other people. ParkSpot is a smart parking platform which allows users to search and book secure parking spots for long and short term. ParkSpot gives users a seamless and contact-less experience which users are searching for after the corona outbreak. ParkSpot also allow users to list out their free parking space into our platform which other users finding for a parking space can use. This will help our weak parking infrastructure in the battle to curb traffic congestion.")]),e("br"),e("p",{staticClass:"is-size-3 has-text-black has-text-left"},[t._v("Join hands with ParkSpot and help us win this fight against traffic jams")]),e("br"),t._m(1)]),e("br"),e("br")])])},ga=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",{staticClass:"is-size-6 has-text-black has-text-left"},[t._v("This sheer increase in vehicles has caused a strain on the roadways and parking infrastructure. Having such a high population and vehicle density in India only makes things worse. These problems elevate the risk of traffic jams in urban cities. With Bengaluru facing the worst traffic congestion in the world, Delhi, Mumbai and Pune "),e("a",{attrs:{href:"https://www.google.com",target:"blank"}},[t._v("remain")]),t._v(" in the top 10 source traffic congestion index.")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",{staticClass:"is-size-6 has-text-black has-text-left"},[t._v("send us mail to "),e("a",{attrs:{href:"connect@parkspot.in"}},[t._v("connect@parkspot.in")]),t._v(" to join list your parking spots in our platform.")])}],ka={name:"Blog1",data:function(){return{dp:e("c294")}}},Ca=ka,_a=(e("909d"),Object(o["a"])(Ca,ba,ga,!1,null,"7ccd7bac",null)),ya=_a.exports,wa={name:"Faq",components:{BlogOne:ya,PSNavbar:S,PSFooter:O}},xa=wa,Sa=Object(o["a"])(xa,fa,va,!1,null,null,null),Pa=Sa.exports,ja=[{path:"/",name:"Home",component:St},{path:"/faq",name:"Faq",component:Qt},{path:"/thanks",name:"Thanks",component:Ft},{path:"/srp",name:"PSSrp",component:ma},{path:"/blog/eliminating-reason-for-traffic-jam",name:"EliminateTrafficJam",component:Pa},{path:"*",beforeRouteEnter:function(t,a,e){console.log("route from ".concat(t," to ").concat(a)),e("/")},component:St}];s["a"].use(h["a"]);var Ea=new h["a"]({mode:"history",base:"/",routes:ja}),Ma=Ea;s["a"].config.productionTip=!1,s["a"].use(i["a"]),new s["a"]({router:Ma,render:function(t){return t(u)}}).$mount("#app")},5777:function(t,a,e){t.exports=e.p+"img/sud.f99f15d4.jpg"},"5b03":function(t,a,e){"use strict";var s=e("8271"),i=e.n(s);i.a},"5ced":function(t,a,e){},"6c18":function(t,a,e){},"6cba":function(t,a,e){t.exports=e.p+"img/kol.581c7e61.jpeg"},7161:function(t,a,e){"use strict";var s=e("e2d0"),i=e.n(s);i.a},"72c0":function(t,a,e){t.exports=e.p+"img/2b.15226bb7.png"},"7d14":function(t,a,e){"use strict";var s=e("e0a2"),i=e.n(s);i.a},8271:function(t,a,e){},8440:function(t,a,e){t.exports=e.p+"img/operator.7c15d7f3.png"},"852b":function(t,a,e){t.exports=e.p+"img/ch.aae3390e.jpeg"},"85ec":function(t,a,e){},"909d":function(t,a,e){"use strict";var s=e("b696"),i=e.n(s);i.a},9225:function(t,a,e){t.exports=e.p+"img/github.ec3a60c8.png"},"94d0":function(t,a,e){"use strict";var s=e("ead9"),i=e.n(s);i.a},ac52:function(t,a,e){"use strict";var s=e("3100"),i=e.n(s);i.a},b1e3:function(t,a,e){"use strict";var s=e("6c18"),i=e.n(s);i.a},b29b:function(t,a,e){t.exports=e.p+"img/twitter.67a5471f.png"},b401:function(t,a,e){t.exports=e.p+"img/pstoptext.fe28e099.png"},b696:function(t,a,e){},beb9:function(t,a,e){t.exports=e.p+"img/pstopmini.04c6c92a.png"},c22f:function(t,a,e){t.exports=e.p+"img/3b.22eb234a.png"},c294:function(t,a,e){t.exports=e.p+"img/nik.2c622420.jpg"},cccb:function(t,a,e){"use strict";var s=e("5ced"),i=e.n(s);i.a},d2e3:function(t,a,e){t.exports=e.p+"img/1b.073f632f.png"},da2b:function(t,a,e){t.exports=e.p+"img/linkedin.e94e7b60.png"},dec3:function(t,a,e){t.exports=e.p+"img/4b.1243dd7e.png"},e0a2:function(t,a,e){},e27f:function(t,a,e){},e2d0:function(t,a,e){},e583:function(t,a,e){"use strict";var s=e("e9d4"),i=e.n(s);i.a},e77f:function(t,a,e){t.exports=e.p+"img/owner.043a40b5.png"},e7f6:function(t,a,e){},e9d4:function(t,a,e){},ead9:function(t,a,e){},efd7:function(t,a,e){"use strict";var s=e("e27f"),i=e.n(s);i.a},f2f0:function(t,a,e){t.exports=e.p+"img/sub.e9dafecc.jpg"},f7fb:function(t,a,e){t.exports=e.p+"img/ish.a58fea85.jpg"},f899:function(t,a,e){t.exports=e.p+"img/aboutimg.b4f3ef8e.png"}});
//# sourceMappingURL=app.53a1a9e7.js.map
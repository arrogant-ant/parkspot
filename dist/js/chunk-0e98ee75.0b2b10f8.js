(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e98ee75"],{"01c0":function(e,t,a){},"06b1":function(e,t,a){e.exports=a.p+"img/blog2.62a42d5f.jpg"},"0b79":function(e,t,a){"use strict";var s=a("6418"),i=a.n(s);i.a},"22cd":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"m_blog_box"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-image"},[a("figure",{staticClass:"image is-4by3"},[e.blogDetails.postImage?a("atom-img",{attrs:{src:e.blogDetails.postImage}}):a("atom-img",{attrs:{src:e.src}})],1)]),a("div",{staticClass:"card-content"},[a("div",{staticClass:"content"},[a("atom-b-subtitle",{staticClass:"is-size-4",attrs:{text:e.blogDetails.postTitle}}),a("atom-text",{staticClass:"is-size-6",attrs:{text:e.blogDetails.postSummary}}),a("atom-link",{staticClass:"is-size-6",attrs:{text:e.read}})],1)])]),a("br")])},i=[],o=a("6cb1"),n=a("9aa5"),r=a("89fb"),l=a("abde"),c={components:{atomImg:o["a"],AtomBSubtitle:r["a"],AtomText:l["a"],AtomLink:n["a"]},name:"m-blog-box-details",props:["blogDetails"],data:function(){return{src:"https://bulma.io/images/placeholders/1280x960.png",subtitle:"This is subtitle for subheading",text:"This is paragraph written in blog please click the blog to see the th blog content in details.",read:"Read more.."}}},p=c,h=(a("f831"),a("2877")),m=Object(h["a"])(p,s,i,!1,null,"2b9628c7",null);t["a"]=m.exports},"377f":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main_blog"},[a("t-main-blog",{attrs:{currBlog:e.currBlog,nextBlog:e.nextBlog}})],1)},i=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"t_main_blog section"},[a("div",{staticClass:"container"},[a("nav",{staticClass:"breadcrumb has-arrow-separator is-size-7",attrs:{"aria-label":"breadcrumbs"}},[a("ul",[a("li",[a("atom-router-link",{attrs:{text:e.home,link:e.hlink}})],1),a("li",[a("atom-router-link",{attrs:{text:e.blogs,link:e.blink}})],1),a("li",{staticClass:"is-active has-text-weight-semibold is-size-7"},[a("a",{attrs:{href:"#","aria-current":"page"}},[e._v(e._s(e.currBlog.postTitle))])])])]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-9"},[a("article",[1==e.currBlog.id?a("BlogOne"):e._e(),2==e.currBlog.id?a("blog-2"):e._e(),3==e.currBlog.id?a("blog-3"):e._e()],1),a("o-comment",{staticStyle:{margin:"0 10% 0 10%"}})],1),a("o-recent",{staticClass:"column",attrs:{blogDetails:e.nextBlog,check:e.currBlog.id}})],1)])])},n=[],r=a("dec2"),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"o_comment"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.postComment(t)}}},[a("atom-b-subtitle",{staticClass:"is-size-4 mb-2",attrs:{text:e.commentTitle}}),a("atom-text",{staticClass:"is-size-7 mx-2",attrs:{text:e.comment}}),a("atom-textarea",{staticClass:"textarea mb-2",model:{value:e.commentDetails.comment,callback:function(t){e.$set(e.commentDetails,"comment",t)},expression:"commentDetails.comment"}}),a("atom-text",{staticClass:"is-size-7 mx-2",attrs:{text:e.name}}),a("atom-input",{staticClass:"input mb-2",model:{value:e.commentDetails.name,callback:function(t){e.$set(e.commentDetails,"name",t)},expression:"commentDetails.name"}}),a("atom-text",{staticClass:"is-size-7 mx-2",attrs:{text:e.email}}),a("atom-input",{staticClass:"input mb-2",model:{value:e.commentDetails.email,callback:function(t){e.$set(e.commentDetails,"email",t)},expression:"commentDetails.email"}}),a("atom-button",{staticClass:"button is-warning is-pulled-right",class:{"is-loading":e.toggle},attrs:{text:e.Submit}})],1)])},c=[],p=(a("b0c0"),a("d3b7"),a("96cf"),a("1da1")),h=a("3093"),m=a("f23f"),u=a("ed9a"),g=a("89fb"),d=a("abde"),f={components:{atomBSubtitle:g["a"],AtomTextarea:u["a"],AtomInput:m["a"],AtomButton:h["a"],AtomText:d["a"]},name:"o-comment",data:function(){return{commentTitle:"Leave A Comment",Submit:"Submit",comment:"Comment",name:"Name",email:"Email (optional)",toggle:!1,commentDetails:{comment:"",name:"",email:""}}},methods:{postComment:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.toggle=!e.toggle,t.next=3,fetch("https://maya.parkspot.in/contact",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({User:{FullName:e.commentDetails.name,EmailID:e.commentDetails.email,Mobile:""},Comments:e.commentDetails.comment})});case 3:t.sent,e.commentDetails.name="",e.commentDetails.email="",e.commentDetails.comment="",e.toggle=!e.toggle;case 8:case"end":return t.stop()}}),t)})))()}}},v=f,b=a("2877"),k=Object(b["a"])(v,l,c,!1,null,null,null),w=k.exports,y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"o_recent"},[a("atom-b-subtitle",{staticClass:"is-size-3 mb-2",attrs:{text:e.recent}}),a("hr"),e._l(e.blogDetail,(function(t){return a("m-blog-box-details",{key:t.id,attrs:{blogDetails:t},nativeOn:{click:function(a){return e.getBlog(t)}}})}))],2)},_=[],x=(a("4de4"),a("22cd")),C={components:{AtomBSubtitle:g["a"],MBlogBoxDetails:x["a"]},props:["blogDetails","check"],name:"o-recent",data:function(){return{recent:"Recent Posts"}},computed:{blogDetail:function(){var e=this;return this.blogDetails.filter((function(t){if(t.id!=e.check)return t}))}},methods:{getBlog:function(e){var t=JSON.parse(JSON.stringify(this.blogDetails));this.$router.push({name:"mainBlog",params:{id:"".concat(e.id),data:t,postImage:e.postImage,postSummary:e.postSummary,postTitle:e.postTitle}})}}},A=C,B=Object(b["a"])(A,y,_,!1,null,null,null),T=B.exports,E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"mainp"},[a("br"),a("div",{staticClass:"content"},[a("h1",{staticClass:"is-size-2"},[e._v("Eliminating Traffic jams in India!")]),a("div",{attrs:{id:"authorDetails"}},[a("img",{staticClass:"round",attrs:{src:e.dp,alt:""}}),a("p",{staticClass:"has-text-success is-size-6"},[e._v("Nikhil Surya Mukhi")]),a("p",{staticClass:"has-text-dark is-size-6"},[e._v("Nov 2, 2020")]),a("p",{staticClass:"has-text-dark is-size-6"},[e._v("5 min read")]),a("p")]),a("hr"),a("img",{attrs:{src:e.blogimg,alt:""}}),a("h1",[e._v("Eliminating Traffic jams in India!")]),a("p",[e._v(" In the recent years all over the globe production and demand for motor vehicles has increased dramatically. Earlier motor vehicles were a luxury only few can afford but now their prices have plummeted and its more easily available to the population. India for an example took about 60 years to acquire 100 million vehicles and the next 100 million vehicles were bought in the last 10 years ! ")]),a("br"),a("p",[e._v(" This sheer increase in vehicles has caused a strain on the roadways and parking infrastructure. Having such a high population and vehicle density in India only makes things worse. These problems elevate the risk of traffic jams in urban cities. With Bengaluru facing the worst traffic congestion in the world, Delhi, Mumbai and Pune remain in the top 10 source traffic congestion index. ")]),a("h2",[e._v("What causes a traffic jam ?")]),a("p",[e._v(" There a numerous reasons for traffic jams like lack of proper infrastructure, office rush hours, illegal parkings and many more. Improper parkings beside roads/no parking zones are he main cause for traffic jams. Even the widest of roads have traffic jams because of illegal parkings. Widening the ones which face traffic jams are not so rewarding because empty roads means more room for people to park vehicles. Inadequate parking infrastructure is the reason to blame when people park their vehicles in no parking zones. Absence of a proper inventory for parking sites and the lack of awareness is the root of the cause. ")]),a("h2",[e._v("How can a smart parking platform help ?")]),a("p",[e._v(" A smart parking system allows people to search and book a secure parking spot. This two features to search and book will allow people to plan where they park their vehicle in a secure parking zone. These two features can curb the problem of traffic jams. Car parking systems are equipped with smart sensors and devices which make the parking experience seamless which users will flock to experience. ")]),a("h2",[e._v("The new normal and how ParkSpot helps the cause.")]),a("p",[e._v(" The COVID-19 pandemic shed light upon the problems in our day to day habits which aids in transmission of diseases. Social distancing, wearing of masks and hand sanitation have become a new normal withing our society. People are distancing themselves from other people. ParkSpot is a smart parking platform which allows users to search and book secure parking spots for long and short term. ParkSpot gives users a seamless and contact-less experience which users are searching for after the corona outbreak. ParkSpot also allow users to list out their free parking space into our platform which other users finding for a parking space can use. This will help our weak parking infrastructure in the battle to curb traffic congestion. ")]),a("br"),a("p",[e._v(" Join hands with ParkSpot and help us win this fight against traffic jams ")]),a("br"),a("img",{attrs:{src:e.parkspotimg,alt:""}}),e._m(0),a("br"),a("br")])])])},O=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v(" Let us know if you also have similar parking issues, and what solution would you like to recommend to your office. You can write to us at "),a("a",{attrs:{href:"mailto:connect@parkspot.in"}},[e._v("connect@parkspot.in")])])}],j={name:"Blog1",data:function(){return{dp:a("c294"),blogimg:"https://www.stevenvanbelleghem.com/wp-content/uploads/2020/04/Heavy-rains-lash-Delhi-NCR-traffic-snarls-at-many-places.jpg",parkspotimg:a("c5e4")}}},D=j,S=(a("0b79"),Object(b["a"])(D,E,O,!1,null,"ddaf40d2",null)),I=S.exports,R=a("9205"),z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"mainp"},[a("br"),a("div",{staticClass:"content"},[a("h1",{staticClass:"is-size-2"},[e._v("Parking Challenges in Office Area")]),a("div",{attrs:{id:"authorDetails"}},[a("img",{staticClass:"round",attrs:{src:e.dp,alt:""}}),a("p",{staticClass:"has-text-success is-size-6"},[e._v("Anonymous")]),a("p",{staticClass:"has-text-dark is-size-6"},[e._v("Aug 5, 2021")]),a("p",{staticClass:"has-text-dark is-size-6"},[e._v("5 min read")]),a("p")]),a("hr"),a("img",{attrs:{src:e.blogimg,alt:""}}),a("h1",[e._v("Parking Challenges in Office Area")]),a("p",[e._v(" Parking has been a major concern in major cities. Due to fewer parking spaces, people have to spend a lot of time searching for the right spot. Another concern is the parking charges. Especially when it comes to Bangalore downtown, the charges are so high that it’s getting difficult day by day to afford to park there. In spite of these issues, the majority of people prefer driving to the workplace than using public transport. They feel it is much more convenient. They do not have to depend on the specific timings of public transport and can leave whenever they want to. Also, many of them have additional duties such as picking/ dropping their kids to school while coming to the office. So, having their own car helps in multitasking. ")]),a("br"),a("p",[e._v(" For some of the employees parking near the office has become an everyday challenge especially in cities like Bangalore. Some of these challenges include: ")]),a("h2",[e._v("Parking Challenges:")]),e._m(0),a("br"),a("p",[e._v(" Though it would take time to resolve these issues, it’s always beneficial to take steps towards improvement. Some of the simple yet effective solutions are: ")]),a("h2",[e._v("Solutions:")]),e._m(1),a("br"),a("img",{attrs:{src:e.parkspotimg,alt:""}}),e._m(2),a("br"),a("br")])])])},P=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ol",[a("li",[a("p",[e._v("Insufficient Parking spots.")])]),a("li",[a("p",[e._v(" No Parking option provided by offices, especially in downtowns. ")])]),a("li",[a("p",[e._v("Lack of spots for the clients and customers.")])]),a("li",[a("p",[e._v("Rule Violations.")])]),a("li",[a("p",[e._v("Inappropriate Parking ratio.")])]),a("li",[a("p",[e._v("A lot of time spent on finding a parking spot.")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ol",[a("li",[a("p",[e._v(" Stacked Spaces: Parking cars one after the other in form of stacks. This would work if the one who has parked the car inside would leave later. But this can not be the case always. So, figuring out a method through which only those cars that leave later get parked inside can somehow help solve the parking issue and a lot more cars will get parked this way. This can be done through valley parking. ")])]),a("li",[a("p",[e._v(" Transportation Allowance: The company can help its employees by providing an allowance for public transport or uber. This will help in encouraging them to use public transport and avoid coming by personal car. ")])]),a("li",[a("p",[e._v(" Talk to your employees: Getting to know personal insights and feedback is very important. Speak to your employees on this, what challenges do they face, what solutions would help them in this situation. ")])]),a("li",[a("p",[e._v(" Using ParkSpot App: ParkSpot provides a digital parking solution. The app has an interactive map that provides real-time data and helps users find and book a parking spot. The best part is that this online solution is user friendly and free of cost. ParkSpot app is available on google play. Download the app for free and sign up. if you have any questions, just call at +91 80929 96057, or email at "),a("a",{attrs:{href:"mailto:connect@parkspot.in"}},[e._v("connect@parkspot.in")])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v(" Let us know if you also have similar parking issues, and what solution would you like to recommend to your office. You can write to us at "),a("a",{attrs:{href:"mailto:connect@parkspot.in"}},[e._v("connect@parkspot.in")])])}],U={name:"blog2",data:function(){return{dp:a("6c3f"),blogimg:a("06b1"),parkspotimg:a("c5e4")}}},N=U,M=(a("bf2a"),Object(b["a"])(N,z,P,!1,null,"ba47769c",null)),K=M.exports,L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"mainp"},[a("br"),a("div",{staticClass:"content"},[a("h1",{staticClass:"is-size-2"},[e._v("NO Parking")]),a("div",{attrs:{id:"authorDetails"}},[a("img",{staticClass:"round",attrs:{src:e.dp,alt:""}}),a("p",{staticClass:"has-text-success is-size-6"},[e._v("Ishwar Kumar")]),a("p",{staticClass:"has-text-dark is-size-6"},[e._v("Aug 30, 2021")]),a("p",{staticClass:"has-text-dark is-size-6"},[e._v("5 min read")]),a("p")]),a("hr"),a("img",{attrs:{src:e.blogimg,alt:""}}),a("h1",[e._v("NO Parking")]),a("p",[e._v(" Parking problems have always been an issue and this issue has grown exponentially with the increase of population. In order to tackle this issue, many solutions were tried and implemented. For example, commercial parkings were built where vehicle owners can pay and park their vehicles at hourly rates. With the increase of vehicles in an area, the demand for off-street parking also increased vigorously. Government made special rules like for every 1000 square feet of an area, there must be some particular number of parking spaces in that area. ")]),a("br"),e._m(0),a("br"),a("p",[e._v(" It is assumed that people having their own house will have parking space. This is not exactly true. Two out of ten do not have parking space for their vehicles. This is because there are many apartments where parking spaces are not provided. After their home, people go to work and hence they would require a parking space for their vehicle but mostly the number of vehicles exceeds the space available at the office premises. So, employees have to come early in order to get a spot. Other than home and office, people go out to malls, markets, and many other places. Yes, malls could have parking spaces, but there are places like local market shops where people usually go but there are not proper parking spaces. ")]),a("br"),e._m(1),a("br"),e._m(2),a("br"),a("img",{attrs:{src:e.parkspotimg,alt:""}}),e._m(3),a("br"),a("br")])])])},G=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v(" In a recent survey, it is calculated that in a city of India, "),a("mark",[e._v(" Bengaluru has only 13000 parking spaces for cars and 40000 for two-wheelers but Bengaluru has registered over 75 lakhs vehicles.")]),e._v(" Mostly the parking spaces are located in malls, hospitals, stadiums, etc which are mostly vacant as they are private parking and are allowed for only hourly parking and people usually don’t go to these places. It is calculated that on an average a vehicle owner needs three parking spaces for his/her vehicle. First at home, second at his workplace and the third if the user goes out somewhere. Now, a question arises, where would a person park his vehicle who usually does not go to these places. Mostly the "),a("strong",[e._v("people who could not find a parking spot, they illegally park their vehicle, at roadside, or wherever they find space where their vehicle can fit. Illegal parking results in vehicle tow, theft, damages, traffic congestions, etc.")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v(" The parking issue is like something that can’t be completely resolved. We, ParkSpot, are trying to solve some of the parking issues to some extent by creating a smart parking system. Smart parking system does not mean that vehicles will automatically search a parking spot and drive by itself to the spot. Smart Parking System means that "),a("strong",[e._v("people can use a platform where people can search nearby parking spaces and check the availability and can even book a spot online in a few clicks ")]),e._v(" , just like people buy movie tickets. People usually illegally park their vehicle because they don’t know where they can find a parking space that can let the person park his car to whatever duration the person wants to park. To resolve this issue, we have placed a search and booking option in our platform. As we went deeper into the issues, we found that there are a considerable amount of people who are desperately looking for parking space on a monthly basis. It means people own vehicles but don’t have their own parking space. As we went deeper to resolve this issue, we found that people are not getting parking spaces because there is a demand supply gap. People who have parking space but don’t have their vehicle can rent their parking space too just like people rent their flats, houses, etc. People are unaware that this can be a source of income where people don’t have to do any physical work. ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v(" As soon as the people get aware that they can rent their parking, the parking issue where people need it on a monthly basis can be resolved to some extent. Another solution could be the parking space of the malls, stadiums, etc. These spaces are mostly vacant, and can be used on non-busy days. This can profit both the parties, parking owners and the vehicle owners. Yes, it's true that these pre-existing parking spots can not handle the upcoming demands of the parking. Awareness is missing because we are mis-calculating the parking issue. The issues are bigger than what we have thought of it. "),a("strong",[e._v("If you have any such vacant parking spots, feel free to reach out to us.")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v(" Let us know if you also have similar parking issues, and what solution would you like to recommend to your office. You can write to us at "),a("a",{attrs:{href:"mailto:connect@parkspot.in"}},[e._v("connect@parkspot.in")])])}],Y={name:"blog3",data:function(){return{dp:a("8200"),blogimg:a("f999"),parkspotimg:a("c5e4")}}},J=Y,H=(a("800e"),Object(b["a"])(J,L,G,!1,null,"3d795032",null)),V=H.exports,W={name:"t-main-blog",components:{AtomRouterLink:r["a"],ORecent:T,OComment:w,BlogOne:I,OBlogBox:R["a"],Blog2:K,Blog3:V},props:["currBlog","nextBlog"],data:function(){return{home:"Home",hlink:"Home",blogs:"Blogs",blink:"blog"}}},q=W,X=Object(b["a"])(q,o,n,!1,null,null,null),$=X.exports,Z={components:{tMainBlog:$},name:"main-blog",data:function(){return{}},computed:{currBlog:function(){return this.$route.params},nextBlog:function(){var e=this.$route.params.data;return e}},methods:{check:function(){console.log("coming data",this.$route.params.data)}},created:function(){this.check()}},F=Z,Q=Object(b["a"])(F,s,i,!1,null,null,null);t["default"]=Q.exports},"45a8":function(e,t,a){},6418:function(e,t,a){},"6c3f":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLeqsbTn6eqpr7PJzc/j5ebf4eLZ3N2wtrnBxsjN0NLGysy6v8HT1tissra8wMNxTKO9AAAFDklEQVR4nO2d3XqDIAxAlfivoO//tEOZWzvbVTEpic252W3PF0gAIcsyRVEURVEURVEURVEURVEURVEURVEURVEURVEURflgAFL/AirAqzXO9R7XNBVcy9TbuMHmxjN6lr92cNVVLKEurVfK/zCORVvW8iUBnC02dj+Wpu0z0Y6QlaN5phcwZqjkOkK5HZyPAjkIjSO4fIdfcOwFKkJlX4zPu7Ha1tIcwR3wWxyFhRG6g4Je0YpSPDJCV8a2Sv2zd1O1x/2WMDZCwljH+clRrHfWCLGK8REMiql//2si5+DKWKcWeAGcFMzzNrXC/0TUwQ2s6+LhlcwjTMlYsUIQzPOCb7YBiyHopyLXIEKPEkI/TgeuiidK/R9FniUDOjRDpvm0RhqjMyyXNjDhCfIMYl1gGjIMIuYsnGEYRMRZOMMunaLVwpWRW008v6fYKDIzxCwVAeNSO90BJW6emelYBRF/kHpYGVaoxTDAaxOFsfP9y8hpJ4xd7gOcij7JNGQ1EYFgkPJa1jQEiYZXRaRINKxSDUW9n+FT82lSKadkiru9/4XPqSLWOekGPoY05TAvLm9orm+YWuwHoBHkZKijNBJGmeb61eL6Ff/6q7bLr7yvv3vKGhpDRjvgjGaPz+gUg6YgcvpyAR2FIZ9U6nEEyZRTovmEU32KichpGn7C17XrfyH9gK/c0CMP05HZIM2uf9sEveizKveBy9/6Qt7o89ne33D525cfcIMW6ab+TMEukQbQbu+xu7X3A9bChmWaCeAkG17bpntwXgWxHaMzGPmUaR5dQZiKqRVeUZ3047fi3nAu28h4CHxCsZAgmEH8Y27jJAhm8c+5RQzRQNVGhVFSfxOYIjp/pP7RxzjevYXVGf4eLt+BJ1vCuLuLkrgABgCGXZ2wik5uty+oBvNirI6mkzhAf4Gsb58Hcm67Jzd+KwD10BYPLL3e0MjvKrgAULnOfveF/O4N2Xb9BZom3gJes3F9X5Zze8/6Yt09b4CrqsEjUv8oFBaR2rl+6CZr2xVrp24o/WitBKuGrrpl1+bFkmK2qXTON4VpbdfLa7o7y/WdLxG7lm2Lqh2clOwTegbvc/vj2U78CwhA87Bn8G5Nk3eOb0Nsr9flz3sG78UUtue4kpv1xvjg3TMay62BMlTlP+vrOMnJsRmt/ze0jsfkPPYdAH57hK+34PeOyc8XIXu5xT2HsUkdZz+adwg8HGFfQ3K5jtDvbUiO4Di9/ywHGrL88pDizZ++oTp+an+SMX/ndymUCwmHMdO7yuOx83pUx/eEMU0AvxWndwgidAqOZ8ypCwdEfvvEo6D9HwpA8wzvmOJEqAg9ySu8g4x0Hb9hSB/BANEKJ+LbPBU0lzbAJs4xt1AoshKkUGQmiH8/jJ0gdhTTLmSegHlPE0oOdXALnqDjKYh3px//fSgSWG8UqfrrIICzYYSJXRr9BSPbpNzw7gBjKjKOYI7ReIGqQRIap5+5MdjyvuDkExvGeXSlONWZAP3/AZBwJohU7QJRGU+cTVH18ELmRPNBmibW6MT/k1b0XhdkRBvyT6SB6EYv/GvhSmRNpGngRULsAlxMCGNXp7w3FfdEbTEEDdLI9TdIKRUzUesa3I461ER8cpNT7gMRhpKmYVS9ELOgCUQsa4SsulciKiLbY+AnHD8cpuhISsnxpamI84sbDq9qYJgf8wiiOBrC7Ml7M7ZECCqKoiiKoiiKoiiKoijv5AvJxlZRyNWWLwAAAABJRU5ErkJggg=="},"7f21":function(e,t,a){},"800e":function(e,t,a){"use strict";var s=a("01c0"),i=a.n(s);i.a},8200:function(e,t,a){e.exports=a.p+"img/ish.893cb46c.svg"},9205:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"o_blog-box mx-6"},[a("div",{staticClass:"columns is-centered"},e._l(e.noOfBlog,(function(t){return a("m-blog-box-details",{key:t.id,staticClass:"column is-4",attrs:{blogDetails:t},nativeOn:{click:function(a){return e.getBlog(t)}}})})),1)])},i=[],o=a("22cd"),n={components:{mBlogBoxDetails:o["a"]},props:{noOfBlog:Array},name:"o-blog-box",methods:{getBlog:function(e){this.$router.push({name:"mainBlog",params:{id:"".concat(e.id),data:this.noOfBlog,postImage:e.postImage,postSummary:e.postSummary,postTitle:e.postTitle}})}}},r=n,l=a("2877"),c=Object(l["a"])(r,s,i,!1,null,null,null);t["a"]=c.exports},"9aa5":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{attrs:{href:e.href}},[e._v(e._s(e.text))])},i=[],o={name:"atom-link",props:{href:String,text:String}},n=o,r=a("2877"),l=Object(r["a"])(n,s,i,!1,null,null,null);t["a"]=l.exports},bf2a:function(e,t,a){"use strict";var s=a("7f21"),i=a.n(s);i.a},c294:function(e,t,a){e.exports=a.p+"img/nik.216ef67a.jpg"},f831:function(e,t,a){"use strict";var s=a("45a8"),i=a.n(s);i.a},f999:function(e,t,a){e.exports=a.p+"img/blog3.95939a15.jpg"}}]);
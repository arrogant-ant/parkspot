(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-768bd957"],{"5cf0":function(t,e,a){"use strict";var n=a("ec49"),r=a.n(n);r.a},"99ec":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"custom-banner"},[t._t("default")],2)},r=[],o={name:"HeaderBanner"},s=o,c=(a("b61e"),a("2877")),i=Object(c["a"])(s,n,r,!1,null,"14548892",null);e["a"]=i.exports},b61e:function(t,e,a){"use strict";var n=a("e72f"),r=a.n(n);r.a},e72f:function(t,e,a){},ec49:function(t,e,a){},f652:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("TemplateBlogPost",{attrs:{blog:t.blog,content:t.content}}),a("PageContactUs")],1)},r=[],o=(a("96cf"),a("1da1")),s=a("5530"),c=a("2f62"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("HeaderBanner",[a("AtomHeading",{staticClass:"custom-title",attrs:{level:"h2"}},[t._v(" Parking Blogs ")]),a("b-breadcrumb",{attrs:{align:"is-centered",size:"is-medium"}},[a("b-breadcrumb-item",{attrs:{tag:"router-link",to:"/"}},[t._v(" Home ")]),a("b-breadcrumb-item",{attrs:{tag:"router-link",to:"/blog"}},[t._v(" Blogs ")]),a("b-breadcrumb-item",{attrs:{tag:"router-link",to:"/blog",active:""}},[t._v(" "+t._s(t.blog.title)+" ")])],1)],1),a("BodyWrapper",[a("article",{staticClass:"article-wrapper",attrs:{"data-aos":"fade-up"}},[a("header",{staticClass:"mb-6"},[a("AtomHeading",{staticClass:"mb-2"},[t._v(" "+t._s(t.blog.title)+" ")]),a("div",{staticClass:"custom-author"},[a("figure",{staticClass:"author-img image is-48x48"},[a("img",{staticClass:"is-rounded",attrs:{src:t.blog.author_img,alt:"Placeholder image"}})]),a("AtomParagraph",{staticClass:"author-name",attrs:{variation:"small"}},[t._v(" "+t._s(t.blog.author)+" ")]),a("AtomParagraph",{staticClass:"author-timestamp",attrs:{variation:"small"}},[t._v(" "+t._s(t.blog.time)+" ")])],1)],1),a("AtomImage",{staticClass:"mb-4",attrs:{alt:t.blog.title,src:t.blog.img,ratio:"16by9"}}),a("section",{domProps:{innerHTML:t._s(t.content)}})],1)])],1)},l=[],u=a("99ec"),g=a("61c8"),m=a("8b09"),b=a("8d8b"),d=a("40d5"),p={name:"TemplateBlogPost",components:{HeaderBanner:u["a"],AtomHeading:g["a"],AtomParagraph:b["a"],AtomImage:d["a"],BodyWrapper:m["a"]},props:{blog:{type:Object},content:{type:String}},data:function(){return{}}},f=p,h=(a("5cf0"),a("2877")),v=Object(h["a"])(f,i,l,!1,null,"5cf67a1b",null),B=v.exports,C=a("fa91"),_={name:"PageBlogPost",components:{TemplateBlogPost:B,PageContactUs:C["default"]},data:function(){return{content:""}},computed:Object(s["a"])(Object(s["a"])({},Object(c["c"])({getBlogById:"blog/getBlogById"})),{},{blog:function(){return this.getBlogById(this.$route.params.id)}}),mounted:function(){var t=this;this.getContentById(this.$route.params.id).then((function(e){return t.content=e}))},methods:Object(s["a"])(Object(s["a"])({},Object(c["b"])({getContentById:"blog/getContentById",onlyContact:"user/onlyContact"})),{},{fireContact:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.isLoading=!0,e.next=4,t.onlyContact();case 4:t.$buefy.toast.open({message:"ParkSpot registered successfully!",type:"is-success",duration:2e3}),t.$router.push({name:"thankYou"}),e.next=13;break;case 8:e.prev=8,e.t0=e["catch"](0),console.error({error:e.t0}),t.$buefy.toast.open({message:"Something went wrong!",type:"is-danger",duration:2e3}),t.$router.push({name:"Home"});case 13:t.isLoading=!1;case 14:case"end":return e.stop()}}),e,null,[[0,8]])})))()}})},y=_,P=Object(h["a"])(y,n,r,!1,null,null,null);e["default"]=P.exports}}]);
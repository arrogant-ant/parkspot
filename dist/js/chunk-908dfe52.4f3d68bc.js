(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-908dfe52"],{"0bb7":function(t,e,a){},"0ee9":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-field",{attrs:{label:t.label,type:t.errorType,message:t.errorMessage}},[a("b-select",{attrs:{placeholder:t.placeholder,expanded:""},model:{value:t.innerValue,callback:function(e){t.innerValue=e},expression:"innerValue"}},[a("option",{attrs:{value:""}},[t._v(t._s(t.placeholder))]),t._l(t.list,(function(e){return a("option",{key:e.id,domProps:{value:e.id}},[t._v(" "+t._s(e.name)+" ")])}))],2)],1)},s=[],r={name:"AtomSelectInput",props:{placeholder:{type:String,default:"Select anything from list"},list:{type:Array,default:null},errorMessage:{type:Array,default:null},errorType:{type:Object,default:null},label:{type:String},value:{type:null}},emits:["input"],data:function(){return{innerValue:""}},watch:{innerValue:function(t){this.$emit("input",t),this.$emit("changed",t)},value:function(t){this.innerValue=t}},created:function(){this.value&&(this.innerValue=this.value)}},o=r,i=a("2877"),l=Object(i["a"])(o,n,s,!1,null,null,null);e["a"]=l.exports},"30cb":function(t,e,a){"use strict";var n=a("0bb7"),s=a.n(n);s.a},bf19:function(t,e,a){"use strict";var n=a("23e7");n({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return URL.prototype.toString.call(this)}})},f43e:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("TemplateInventory",{attrs:{lists:t.spotDetails,isLoading:t.isLoading},on:{updateRequest:t.updateRequest}})},s=[],r=(a("d3b7"),a("96cf"),a("1da1")),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"custom-wrap"},[a("b-table",{attrs:{data:t.isEmpty?[]:t.lists,bordered:!0,hoverable:!0,loading:t.isLoading,focusable:!0,"mobile-cards":t.hasMobileCards,scrollable:!0,"sticky-header":!0,height:"800"},scopedSlots:t._u([{key:"empty",fn:function(){return[a("div",{staticClass:"has-text-centered"},[t._v("No records")])]},proxy:!0}])},[a("b-table-column",{attrs:{field:"ID",label:"ID",width:"40",numeric:"",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.ID)+" ")]}}])}),a("b-table-column",{attrs:{field:"CreatedAt",label:"Date",centered:"",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"tag is-success"},[t._v(" "+t._s(new Date(e.row.CreatedAt).toLocaleDateString())+" ")])]}}])}),a("b-table-column",{attrs:{field:"Priority",label:"Priority",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"tag",class:{"is-low":1===e.row.Priority,"is-medium":2===e.row.Priority,"is-high":3===e.row.Priority}},[t._v(" "+t._s(t.getPriority(e.row.Priority))+" ")])]}}])}),a("b-table-column",{attrs:{field:"contact",label:"Contact Details"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("p",[t._v(" Name: "),a("strong",[t._v(t._s(e.row.Name))])]),a("p",[t._v(" Mobile: "),a("strong",[t._v(t._s(e.row.Mobile))])]),a("p",[t._v(" Email: "),a("strong",[t._v(t._s(e.row.EmailID))])]),a("p",[t._v(" Landmark : "),a("strong",[t._v(t._s(e.row.Landmark))])]),a("p",[t._v("City: "+t._s(e.row.City))]),a("p",[t._v("Duration : "+t._s(e.row.Duration))]),a("p",[t._v("Car Model: "+t._s(e.row.CarModel))])]}}])}),a("b-table-column",{attrs:{field:"comments",label:"Comments"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("AtomTextarea",{staticClass:"custom-colComment",attrs:{value:e.row.Comments},on:{changed:function(a){var n=arguments.length,s=Array(n);while(n--)s[n]=arguments[n];return t.onCommentUpdate.apply(void 0,[e.row].concat(s))}}})]}}])}),a("b-table-column",{attrs:{field:"status_nextCall",label:"Status/Next Call",width:"100px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"tag is-warning"},[t._v(" "+t._s(t.statusList[e.row.Status].name)+" ")]),a("AtomSelectInput",{staticClass:"custom-columnWidth",attrs:{list:t.statusList},on:{changed:function(a){var n=arguments.length,s=Array(n);while(n--)s[n]=arguments[n];return t.onStatusUpdate.apply(void 0,[e.row].concat(s))}}}),a("span",{staticClass:"tag is-warning",class:{"is-danger":t.getStatus(e.row.NextCall)}},[a("span",[t._v(" "+t._s(t.getStatus(e.row.NextCall)?"delayed ":"upcoming ")+" ")]),a("strong",[t._v(" "+t._s(new Date(e.row.NextCall).toLocaleDateString())+" ")])]),a("AtomDatePicker",{staticClass:"custom-columnWidth",on:{changed:function(a){var n=arguments.length,s=Array(n);while(n--)s[n]=arguments[n];return t.onDateUpdate.apply(void 0,[e.row].concat(s))}}})]}}])}),a("b-table-column",{attrs:{field:"UpdatedAt",label:"Last Updated",centered:"",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"tag is-success"},[t._v(" "+t._s(new Date(e.row.UpdatedAt).toLocaleDateString())+" ")])]}}])}),a("b-table-column",{attrs:{field:"lat_lng",label:"Lat/Lng"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.Latitude.toFixed(6)+"/"+e.row.Longitude.toFixed(6))+" ")]}}])})],1)],1)},i=[],l=(a("bf19"),a("bf75")),u=a("0ee9"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-field",[a("b-datepicker",{attrs:{placeholder:"Click to select..."},on:{input:t.onChange},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)},d=[],p={name:"AtomDatePicker",props:{assignedDate:{type:Date}},emits:["changed"],data:function(){return{date:new Date}},methods:{onChange:function(t){this.$emit("changed",t)}}},m=p,f=a("2877"),g=Object(f["a"])(m,c,d,!1,null,null,null),b=g.exports,h={name:"TemplateInventory",components:{AtomTextarea:l["a"],AtomSelectInput:u["a"],AtomDatePicker:b},props:{lists:{type:Array},isLoading:{type:Boolean}},emits:["updateRequest"],data:function(){return{isEmpty:!1,isBordered:!1,isStriped:!1,isNarrowed:!1,isHoverable:!1,isFocusable:!1,hasMobileCards:!0,statusList:[{id:1,name:"StatusNotSet"},{id:2,name:"Registered"},{id:3,name:"Processing"},{id:4,name:"SpotSuggested"},{id:5,name:"SpotAccepted"},{id:6,name:"SpotDenied"},{id:7,name:"Archive"}],priorityList:[{id:1,name:"Not Set"},{id:2,name:"Low"},{id:3,name:"Medium"},{id:4,name:"High"}],model:{comments:"",status:"",nextCall:""}}},methods:{getPriority:function(t){switch(t){case 1:return"Low";case 2:return"Medium";case 3:return"High"}},getStatus:function(t){return(new Date).getTime()>new Date(t).getTime()},onDateUpdate:function(t,e){t["NextCall"]=e.toJSON(),this.$emit("updateRequest",t)},onCommentUpdate:function(t,e){t["Comments"]=e,this.$emit("updateRequest",t)},onStatusUpdate:function(t,e){t["Status"]=e-1,this.$emit("updateRequest",t)}}},y=h,v=(a("30cb"),Object(f["a"])(y,o,i,!1,null,"3ea0a626",null)),w=v.exports,_={name:"PageInventory",components:{TemplateInventory:w},data:function(){return{spotDetails:[],isLoading:!1}},created:function(){this.getSpotDetails()},methods:{getSpotDetails:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,fetch("https://maya.parkspot.in/internal/parking-requests");case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,t.spotDetails=n,t.isLoading=!1;case 9:case"end":return e.stop()}}),e)})))()},updateRequest:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,e.isLoading=!0,a.next=4,fetch("https://maya.parkspot.in/owner/request-comments",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:return n=a.sent,a.next=7,n.json();case 7:e.$buefy.toast.open({message:"Sucessfully updated!",type:"is-success",duration:2e3}),a.next=14;break;case 10:a.prev=10,a.t0=a["catch"](0),console.error({error:a.t0}),e.$buefy.toast.open({message:"Something went wrong!",type:"is-danger",duration:2e3});case 14:e.isLoading=!1;case 15:case"end":return a.stop()}}),a,null,[[0,10]])})))()}}},S=_,C=Object(f["a"])(S,n,s,!1,null,null,null);e["default"]=C.exports}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-open-location-open-location"],{"137e":function(t,i,n){"use strict";n("a9e3"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={data:function(){return{title:"openLocation"}},methods:{openLocation:function(t){console.log(t);var i=t.detail.value;uni.openLocation({longitude:Number(i.longitude),latitude:Number(i.latitude),name:i.name,address:i.address})}}};i.default=e},"57a5":function(t,i,n){"use strict";n.r(i);var e=n("a582"),a=n("831b");for(var s in a)"default"!==s&&function(t){n.d(i,t,(function(){return a[t]}))}(s);n("f5cf");var u,l=n("f0c5"),c=Object(l["a"])(a["default"],e["b"],e["c"],!1,null,"3215ee57",null,!1,e["a"],u);i["default"]=c.exports},7841:function(t,i,n){var e=n("c322");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=n("4f06").default;a("6f67d3ba",e,!0,{sourceMap:!1,shadowMode:!1})},"831b":function(t,i,n){"use strict";n.r(i);var e=n("137e"),a=n.n(e);for(var s in e)"default"!==s&&function(t){n.d(i,t,(function(){return e[t]}))}(s);i["default"]=a.a},a582:function(t,i,n){"use strict";var e,a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",[n("page-head",{attrs:{title:t.title}}),n("v-uni-view",{staticClass:"uni-common-mt"},[n("v-uni-form",{on:{submit:function(i){arguments[0]=i=t.$handleEvent(i),t.openLocation.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"uni-list"},[n("v-uni-view",{staticClass:"uni-list-cell"},[n("v-uni-view",{staticClass:"uni-list-cell-left"},[n("v-uni-view",{staticClass:"uni-label"},[t._v("经度")])],1),n("v-uni-view",{staticClass:"uni-list-cell-db"},[n("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",disabled:!0,value:"116.39747",name:"longitude"}})],1)],1),n("v-uni-view",{staticClass:"uni-list-cell"},[n("v-uni-view",{staticClass:"uni-list-cell-left"},[n("v-uni-view",{staticClass:"uni-label"},[t._v("纬度")])],1),n("v-uni-view",{staticClass:"uni-list-cell-db"},[n("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",disabled:!0,value:"39.9085",name:"latitude"}})],1)],1),n("v-uni-view",{staticClass:"uni-list-cell"},[n("v-uni-view",{staticClass:"uni-list-cell-left"},[n("v-uni-view",{staticClass:"uni-label"},[t._v("位置名称")])],1),n("v-uni-view",{staticClass:"uni-list-cell-db"},[n("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",disabled:!0,value:"天安门",name:"name"}})],1)],1),n("v-uni-view",{staticClass:"uni-list-cell"},[n("v-uni-view",{staticClass:"uni-list-cell-left"},[n("v-uni-view",{staticClass:"uni-label"},[t._v("详细位置")])],1),n("v-uni-view",{staticClass:"uni-list-cell-db"},[n("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",disabled:!0,value:"北京市东城区东长安街",name:"address"}})],1)],1)],1),n("v-uni-view",{staticClass:"uni-padding-wrap"},[n("v-uni-view",{staticClass:"uni-btn-v uni-common-mt"},[n("v-uni-button",{attrs:{type:"primary",formType:"submit"}},[t._v("查看位置")])],1)],1)],1)],1)],1)},s=[];n.d(i,"b",(function(){return a})),n.d(i,"c",(function(){return s})),n.d(i,"a",(function(){return e}))},c322:function(t,i,n){var e=n("24fb");i=e(!1),i.push([t.i,".uni-list-cell-left[data-v-3215ee57]{padding:0 %?30?%}",""]),t.exports=i},f5cf:function(t,i,n){"use strict";var e=n("7841"),a=n.n(e);a.a}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-set-navigation-bar-title-set-navigation-bar-title"],{"02be":function(t,e,n){"use strict";n.r(e);var i=n("ef15"),a=n("03b6");for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);var u,o=n("f0c5"),r=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"2231487b",null,!1,i["a"],u);e["default"]=r.exports},"03b6":function(t,e,n){"use strict";n.r(e);var i=n("bb9d"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a},bb9d:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{title:"nav-default",hasSetText:!1,hasSetBg:!1}},methods:{setText:function(){this.hasSetText=!this.hasSetText,uni.setNavigationBarTitle({title:this.hasSetText?"Hello uni-app":"默认导航栏"})},setBg:function(){this.hasSetBg=!this.hasSetBg,uni.setNavigationBarColor({frontColor:this.hasSetBg?"#000000":"#ffffff",backgroundColor:this.hasSetBg?"#F8F8F8":"#007AFF"})}}};e.default=i},ef15:function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"page"},[n("page-head",{attrs:{title:t.title}}),n("v-uni-view",{staticClass:"uni-padding-wrap"},[n("v-uni-view",{staticClass:"uni-helllo-text"},[t._v("本页标题栏是uni-app的默认配置，开发者可在pages.json里配置文字内容及标题颜色，也可通过api接口将其改变。")]),n("v-uni-view",{staticClass:"uni-btn-v"},[n("v-uni-button",{attrs:{type:"default"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setText.apply(void 0,arguments)}}},[t._v("改变标题栏文字")]),n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setBg.apply(void 0,arguments)}}},[t._v("改变标题栏颜色")])],1)],1)],1)},s=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}))}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-link-link"],{"0170":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'.uni-section[data-v-a4d4924e]{position:relative;\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\tmargin-top:10px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 10px;height:50px;background-color:#f8f8f8;\n\tfont-weight:400}\n\n.uni-section[data-v-a4d4924e]:after{position:absolute;bottom:0;right:0;left:0;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5}\n\n.uni-section__head[data-v-a4d4924e]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-right:10px}.line[data-v-a4d4924e]{height:15px;background-color:silver;border-radius:5px;width:3px}.circle[data-v-a4d4924e]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:silver}.uni-section__content[data-v-a4d4924e]{-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#333}.uni-section__content-title[data-v-a4d4924e]{font-size:%?28?%;color:#333}.distraction[data-v-a4d4924e]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-section__content-sub[data-v-a4d4924e]{font-size:%?24?%;color:#999}',""]),t.exports=e},1027:function(t,e,n){"use strict";n.r(e);var i=n("5a60"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"139e":function(t,e,n){"use strict";var i,o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-section",attrs:{nvue:!0}},[t.type?n("v-uni-view",{staticClass:"uni-section__head"},[n("v-uni-view",{staticClass:"uni-section__head-tag",class:t.type})],1):t._e(),n("v-uni-view",{staticClass:"uni-section__content"},[n("v-uni-text",{staticClass:"uni-section__content-title",class:{distraction:!t.subTitle}},[t._v(t._s(t.title))]),t.subTitle?n("v-uni-text",{staticClass:"uni-section__content-sub"},[t._v(t._s(t.subTitle))]):t._e()],1),t._t("default")],2)},a=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))},"1eeb":function(t,e,n){"use strict";var i={"uni-section":n("7ddd").default,"uni-link":n("620e").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"page"},[n("v-uni-text",{staticClass:"example-info"},[t._v("超链接组件，在小程序内复制url，在app内打开外部浏览器，在h5端打开新网页。")]),n("uni-section",{attrs:{title:"基本示例",type:"line"}}),n("v-uni-view",{staticClass:"example-body"},[n("uni-link",{attrs:{href:"https://uniapp.dcloud.io/",text:"https://uniapp.dcloud.io/"}})],1),n("uni-section",{attrs:{title:"自定义样式",type:"line"}}),n("v-uni-view",{staticClass:"example-body"},[n("uni-link",{attrs:{href:"https://uniapp.dcloud.io/",text:"https://uniapp.dcloud.io/",showUnderLine:"false",color:"#0000FF"}})],1)],1)},a=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))},3002:function(t,e,n){var i=n("b7be");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("12206815",i,!0,{sourceMap:!1,shadowMode:!1})},"5a60":function(t,e,n){"use strict";var i=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("620e")),a=i(n("7ddd")),r={components:{uniLink:o.default,uniSection:a.default},data:function(){return{}}};e.default=r},"620e":function(t,e,n){"use strict";n.r(e);var i=n("dfa4"),o=n("b797");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("b0d5");var r,c=n("f0c5"),l=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"715e5d41",null,!1,i["a"],r);e["default"]=l.exports},7121:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniTitle",props:{type:{type:String,default:""},title:{type:String,default:""},subTitle:{type:String,default:""}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=i},"7ddd":function(t,e,n){"use strict";n.r(e);var i=n("139e"),o=n("be55");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("c068");var r,c=n("f0c5"),l=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"a4d4924e",null,!1,i["a"],r);e["default"]=l.exports},8423:function(t,e,n){"use strict";n.r(e);var i=n("1eeb"),o=n("1027");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("9c4b");var r,c=n("f0c5"),l=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"6701bf36",null,!1,i["a"],r);e["default"]=l.exports},"9c4b":function(t,e,n){"use strict";var i=n("ac98"),o=n.n(i);o.a},aa47:function(t,e,n){var i=n("0170");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("259d99b2",i,!0,{sourceMap:!1,shadowMode:!1})},ac98:function(t,e,n){var i=n("f34c");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("17ce85aa",i,!0,{sourceMap:!1,shadowMode:!1})},b0d5:function(t,e,n){"use strict";var i=n("3002"),o=n.n(i);o.a},b797:function(t,e,n){"use strict";n.r(e);var i=n("e6d5"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},b7be:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".uni-link--withline[data-v-715e5d41]{text-decoration:underline}",""]),t.exports=e},be55:function(t,e,n){"use strict";n.r(e);var i=n("7121"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},c068:function(t,e,n){"use strict";var i=n("aa47"),o=n.n(i);o.a},dfa4:function(t,e,n){"use strict";var i,o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-text",{staticClass:"uni-link",class:{"uni-link--withline":!0===t.showUnderLine||"true"===t.showUnderLine},style:{color:t.color,fontSize:t.fontSize+"px"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openURL.apply(void 0,arguments)}}},[t._v(t._s(t.text))])},a=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))},e6d5:function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"uniLink",props:{href:{type:String,default:""},text:{type:String,default:""},showUnderLine:{type:[Boolean,String],default:!0},copyTips:{type:String,default:"已自动复制网址，请在手机浏览器里粘贴该网址"},color:{type:String,default:"#999999"},fontSize:{type:[Number,String],default:14}},methods:{openURL:function(){window.open(this.href)}}};e.default=i},f34c:function(t,e,n){var i=n("24fb"),o=n("1de5"),a=n("36db");e=i(!1);o(a);e.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* 头条小程序组件内不能引入字体 */\n\nuni-page-body[data-v-6701bf36]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;box-sizing:border-box;background-color:#efeff4;min-height:100%;height:auto}uni-view[data-v-6701bf36]{font-size:14px;line-height:inherit}.example[data-v-6701bf36]{padding:0 15px 15px}.example-info[data-v-6701bf36]{padding:15px;color:#3b4144;background:#fff}.example-body[data-v-6701bf36]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0;font-size:14px;background-color:#fff}\n.example[data-v-6701bf36]{padding:0 15px}.example-info[data-v-6701bf36]{\n\tdisplay:block;\n\tpadding:15px;color:#3b4144;background-color:#fff;font-size:14px;line-height:20px}.example-info-text[data-v-6701bf36]{font-size:14px;line-height:20px;color:#3b4144}.example-body[data-v-6701bf36]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:15px;background-color:#fff}.word-btn-white[data-v-6701bf36]{font-size:18px;color:#fff}.word-btn[data-v-6701bf36]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-radius:6px;height:48px;margin:15px;background-color:#007aff}.word-btn--hover[data-v-6701bf36]{background-color:#4ca2ff}.example-body[data-v-6701bf36]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}body.?%PAGE?%[data-v-6701bf36]{background-color:#efeff4}",""]),t.exports=e}}]);
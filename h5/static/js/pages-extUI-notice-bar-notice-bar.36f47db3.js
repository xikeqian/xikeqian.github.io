(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-notice-bar-notice-bar"],{"0170":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'.uni-section[data-v-a4d4924e]{position:relative;\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\tmargin-top:10px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 10px;height:50px;background-color:#f8f8f8;\n\tfont-weight:400}\n\n.uni-section[data-v-a4d4924e]:after{position:absolute;bottom:0;right:0;left:0;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5}\n\n.uni-section__head[data-v-a4d4924e]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-right:10px}.line[data-v-a4d4924e]{height:15px;background-color:silver;border-radius:5px;width:3px}.circle[data-v-a4d4924e]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:silver}.uni-section__content[data-v-a4d4924e]{-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#333}.uni-section__content-title[data-v-a4d4924e]{font-size:%?28?%;color:#333}.distraction[data-v-a4d4924e]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-section__content-sub[data-v-a4d4924e]{font-size:%?24?%;color:#999}',""]),t.exports=e},"0f32":function(t,e,n){"use strict";var i={"uni-icons":n("c4dc").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("v-uni-view",{staticClass:"uni-noticebar",style:{backgroundColor:t.backgroundColor},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[!0===t.showClose||"true"===t.showClose?n("uni-icons",{staticClass:"uni-noticebar-close",attrs:{type:"closeempty",color:t.color,size:"12"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}}):t._e(),!0===t.showIcon||"true"===t.showIcon?n("uni-icons",{staticClass:"uni-noticebar-icon",attrs:{type:"sound",color:t.color,size:"14"}}):t._e(),n("v-uni-view",{ref:"textBox",staticClass:"uni-noticebar__content-wrapper",class:{"uni-noticebar__content-wrapper--scrollable":t.scrollable,"uni-noticebar__content-wrapper--single":!t.scrollable&&(t.single||t.moreText)}},[n("v-uni-view",{staticClass:"uni-noticebar__content",class:{"uni-noticebar__content--scrollable":t.scrollable,"uni-noticebar__content--single":!t.scrollable&&(t.single||t.moreText)},attrs:{id:t.elIdBox}},[n("v-uni-text",{ref:"animationEle",staticClass:"uni-noticebar__content-text",class:{"uni-noticebar__content-text--scrollable":t.scrollable,"uni-noticebar__content-text--single":!t.scrollable&&(t.single||t.moreText)},style:{color:t.color,width:t.wrapWidth+"px",animationDuration:t.animationDuration,"-webkit-animationDuration":t.animationDuration,animationPlayState:t.webviewHide?"paused":t.animationPlayState,"-webkit-animationPlayState":t.webviewHide?"paused":t.animationPlayState,animationDelay:t.animationDelay,"-webkit-animationDelay":t.animationDelay},attrs:{id:t.elId}},[t._v(t._s(t.text))])],1)],1),!0===t.showGetMore||"true"===t.showGetMore?n("v-uni-view",{staticClass:"uni-noticebar__more",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickMore.apply(void 0,arguments)}}},[t.moreText?n("v-uni-text",{staticClass:"uni-noticebar__more-text",style:{color:t.moreColor}},[t._v(t._s(t.moreText))]):t._e(),n("uni-icons",{attrs:{type:"arrowright",color:t.moreColor,size:"14"}})],1):t._e()],1):t._e()},a=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))},"139e":function(t,e,n){"use strict";var i,o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-section",attrs:{nvue:!0}},[t.type?n("v-uni-view",{staticClass:"uni-section__head"},[n("v-uni-view",{staticClass:"uni-section__head-tag",class:t.type})],1):t._e(),n("v-uni-view",{staticClass:"uni-section__content"},[n("v-uni-text",{staticClass:"uni-section__content-title",class:{distraction:!t.subTitle}},[t._v(t._s(t.title))]),t.subTitle?n("v-uni-text",{staticClass:"uni-section__content-sub"},[t._v(t._s(t.subTitle))]):t._e()],1),t._t("default")],2)},a=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))},"1bc0":function(t,e,n){var i=n("b7a4");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("30f3e3c7",i,!0,{sourceMap:!1,shadowMode:!1})},2700:function(t,e,n){"use strict";n.r(e);var i=n("7e71"),o=n("dd6b");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("9cac");var r,c=n("f0c5"),l=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"0cfedd53",null,!1,i["a"],r);e["default"]=l.exports},"508b":function(t,e,n){"use strict";n.r(e);var i=n("7aa3"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"5e63":function(t,e,n){"use strict";var i=n("1bc0"),o=n.n(i);o.a},"6d2d":function(t,e,n){"use strict";n.r(e);var i=n("0f32"),o=n("508b");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("5e63");var r,c=n("f0c5"),l=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"0b3df91c",null,!1,i["a"],r);e["default"]=l.exports},7121:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniTitle",props:{type:{type:String,default:""},title:{type:String,default:""},subTitle:{type:String,default:""}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=i},"7aa3":function(t,e,n){"use strict";var i=n("ee27");n("a9e3"),n("d3b7"),n("ac1f"),n("25f0"),n("3ca3"),n("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("c4dc")),a={name:"UniNoticeBar",components:{uniIcons:o.default},props:{text:{type:String,default:""},moreText:{type:String,default:""},backgroundColor:{type:String,default:"#fffbe8"},speed:{type:Number,default:100},color:{type:String,default:"#de8c17"},moreColor:{type:String,default:"#999999"},single:{type:[Boolean,String],default:!1},scrollable:{type:[Boolean,String],default:!1},showIcon:{type:[Boolean,String],default:!1},showGetMore:{type:[Boolean,String],default:!1},showClose:{type:[Boolean,String],default:!1}},data:function(){var t="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36)),e="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{textWidth:0,boxWidth:0,wrapWidth:"",webviewHide:!1,elId:t,elIdBox:e,show:!0,animationDuration:"none",animationPlayState:"paused",animationDelay:"0s"}},mounted:function(){var t=this;this.$nextTick((function(){t.initSize()}))},methods:{initSize:function(){var t=this;if(this.scrollable){var e=[],n=new Promise((function(e,n){uni.createSelectorQuery().in(t).select("#".concat(t.elId)).boundingClientRect().exec((function(n){t.textWidth=n[0].width,e()}))})),i=new Promise((function(e,n){uni.createSelectorQuery().in(t).select("#".concat(t.elIdBox)).boundingClientRect().exec((function(n){t.boxWidth=n[0].width,e()}))}));e.push(n),e.push(i),Promise.all(e).then((function(){t.animationDuration="".concat(t.textWidth/t.speed,"s"),t.animationDelay="-".concat(t.boxWidth/t.speed,"s"),setTimeout((function(){t.animationPlayState="running"}),1e3)}))}},loopAnimation:function(){},clickMore:function(){this.$emit("getmore")},close:function(){this.show=!1,this.$emit("close")},onClick:function(){this.$emit("click")}}};e.default=a},"7ddd":function(t,e,n){"use strict";n.r(e);var i=n("139e"),o=n("be55");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("c068");var r,c=n("f0c5"),l=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"a4d4924e",null,!1,i["a"],r);e["default"]=l.exports},"7e71":function(t,e,n){"use strict";var i={"uni-section":n("7ddd").default,"uni-notice-bar":n("6d2d").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-text",{staticClass:"example-info"},[t._v("通告栏组件多用于系统通知，广告通知等场景，可自定义图标，颜色，展现方式等。")]),n("uni-section",{attrs:{title:"基本用法",type:"line"}}),n("v-uni-view",{staticClass:"example-body"},[n("uni-notice-bar",{attrs:{single:!0,text:"[单行] uni-app 1.6发布，开发一次、7端覆盖！"}}),n("uni-notice-bar",{attrs:{text:"[多行] uni-app 1.6版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。"}})],1),n("uni-section",{attrs:{title:"加图标",type:"line"}}),n("v-uni-view",{staticClass:"example-body"},[n("uni-notice-bar",{attrs:{single:!0,"show-icon":!0,text:"uni-app行业峰会频频亮相，开发者反响热烈!"}}),n("uni-notice-bar",{attrs:{"show-icon":!0,text:"8月12日DCloud受邀参加iWEB峰会后，9月19日DCloud CEO 王安在千人小程序峰会——见实大会，做了主题为《App和小程序，鱼与熊掌如何兼得？》的分享。"}})],1),n("uni-section",{attrs:{title:"文字滚动",type:"line"}}),n("v-uni-view",{staticClass:"example-body"},[n("uni-notice-bar",{attrs:{scrollable:!0,single:!0,text:"uni-app行业峰会频频亮相，开发者反响热烈!"}}),n("uni-notice-bar",{attrs:{"show-icon":!0,scrollable:!0,single:!0,text:"uni-app 1.6版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。"}}),n("uni-notice-bar",{attrs:{scrollable:!0,text:"8月12日DCloud受邀参加iWEB峰会后，9月19日DCloud CEO 王安在千人小程序峰会——见实大会，做了主题为《App和小程序，鱼与熊掌如何兼得？》的分享。"}})],1),n("uni-section",{attrs:{title:"查看更多",type:"line"}}),n("v-uni-view",{staticClass:"example-body"},[n("uni-notice-bar",{attrs:{"show-get-more":!0,single:!0,text:"年末大礼：uni-app1.4 新增百度、支付宝小程序。插件市场重磅上线！"},on:{getmore:function(e){arguments[0]=e=t.$handleEvent(e),t.getMore.apply(void 0,arguments)}}}),n("uni-notice-bar",{attrs:{"show-get-more":!0,"show-icon":!0,single:!0,"more-text":"查看更多",text:"年末大礼：uni-app1.4 新增百度、支付宝小程序。插件市场重磅上线！"},on:{getmore:function(e){arguments[0]=e=t.$handleEvent(e),t.getMore.apply(void 0,arguments)}}})],1),n("uni-section",{attrs:{title:"修改颜色",type:"line"}}),n("v-uni-view",{staticClass:"example-body"},[n("uni-notice-bar",{attrs:{single:!0,"more-text":"查看更多",color:"red","background-color":"#eee",text:"uni-app 1.6版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。"}}),n("uni-notice-bar",{attrs:{single:!0,"show-get-more":!0,"more-text":"查看更多","more-color":"blue",color:"red","background-color":"#eee",text:"uni-app 1.6版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。"},on:{getmore:function(e){arguments[0]=e=t.$handleEvent(e),t.getMore.apply(void 0,arguments)}}}),n("uni-notice-bar",{attrs:{"show-icon":!0,color:"blue",text:"uni-app 1.6版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。"}})],1),n("uni-section",{attrs:{title:"关闭按钮",type:"line"}}),n("v-uni-view",{staticClass:"example-body"},[n("uni-notice-bar",{attrs:{"show-close":!0,single:!0,text:"HBuilderX 1.0正式发布！uni-app实现里程碑突破！"}}),n("uni-notice-bar",{attrs:{"show-close":!0,"show-icon":!0,"more-text":"查看更多",text:"HBuilderX 1.0正式发布！uni-app实现里程碑突破！"}}),n("uni-notice-bar",{attrs:{"show-close":!0,"show-icon":!0,text:"uni-app 1.6发布，开发一次、7端覆盖！"}}),n("uni-notice-bar",{attrs:{"show-close":!0,"show-icon":!0,single:!0,text:"uni-app 1.6版正式发布，开发一次，同时发布到iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。"}})],1)],1)},a=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))},"9cac":function(t,e,n){"use strict";var i=n("a885"),o=n.n(i);o.a},a885:function(t,e,n){var i=n("eb3f");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("79057b3f",i,!0,{sourceMap:!1,shadowMode:!1})},aa47:function(t,e,n){var i=n("0170");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("259d99b2",i,!0,{sourceMap:!1,shadowMode:!1})},b7a4:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".uni-noticebar[data-v-0b3df91c]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;width:100%;box-sizing:border-box;\n\t-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:6px 12px;margin-bottom:10px}.uni-noticebar-close[data-v-0b3df91c]{margin-right:5px}.uni-noticebar-icon[data-v-0b3df91c]{margin-right:5px}.uni-noticebar__content-wrapper[data-v-0b3df91c]{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;overflow:hidden}.uni-noticebar__content-wrapper--single[data-v-0b3df91c]{\n\tline-height:18px\n\t}.uni-noticebar__content-wrapper--single[data-v-0b3df91c],\n.uni-noticebar__content-wrapper--scrollable[data-v-0b3df91c]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}\n\n.uni-noticebar__content-wrapper--scrollable[data-v-0b3df91c]{position:relative;height:18px}\n\n.uni-noticebar__content--scrollable[data-v-0b3df91c]{\n\t\n\t-webkit-box-flex:1;-webkit-flex:1;flex:1;display:block;overflow:hidden\n\t}.uni-noticebar__content--single[data-v-0b3df91c]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:0;-webkit-flex:none;flex:none;width:100%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center\n\t}.uni-noticebar__content-text[data-v-0b3df91c]{font-size:14px;line-height:18px;\n\tword-break:break-all\n\t}.uni-noticebar__content-text--single[data-v-0b3df91c]{\n\t\n\tdisplay:block;width:100%;white-space:nowrap;\n\toverflow:hidden;text-overflow:ellipsis}.uni-noticebar__content-text--scrollable[data-v-0b3df91c]{\n\t\n\tposition:absolute;display:block;height:18px;line-height:18px;white-space:nowrap;padding-left:100%;-webkit-animation:notice-data-v-0b3df91c 10s 0s linear infinite both;animation:notice-data-v-0b3df91c 10s 0s linear infinite both;-webkit-animation-play-state:paused;animation-play-state:paused\n\t}.uni-noticebar__more[data-v-0b3df91c]{\n\tdisplay:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;\n\t-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-left:5px}.uni-noticebar__more-text[data-v-0b3df91c]{font-size:14px}@-webkit-keyframes notice-data-v-0b3df91c{100%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@keyframes notice-data-v-0b3df91c{100%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}",""]),t.exports=e},be55:function(t,e,n){"use strict";n.r(e);var i=n("7121"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},c068:function(t,e,n){"use strict";var i=n("aa47"),o=n.n(i);o.a},dd6b:function(t,e,n){"use strict";n.r(e);var i=n("ece2"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},eb3f:function(t,e,n){var i=n("24fb"),o=n("1de5"),a=n("36db");e=i(!1);o(a);e.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* 头条小程序组件内不能引入字体 */\n\nuni-page-body[data-v-0cfedd53]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;box-sizing:border-box;background-color:#efeff4;min-height:100%;height:auto}uni-view[data-v-0cfedd53]{font-size:14px;line-height:inherit}.example[data-v-0cfedd53]{padding:0 15px 15px}.example-info[data-v-0cfedd53]{padding:15px;color:#3b4144;background:#fff}.example-body[data-v-0cfedd53]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0;font-size:14px;background-color:#fff}\n.example[data-v-0cfedd53]{padding:0 15px}.example-info[data-v-0cfedd53]{\n\tdisplay:block;\n\tpadding:15px;color:#3b4144;background-color:#fff;font-size:14px;line-height:20px}.example-info-text[data-v-0cfedd53]{font-size:14px;line-height:20px;color:#3b4144}.example-body[data-v-0cfedd53]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:15px;background-color:#fff}.word-btn-white[data-v-0cfedd53]{font-size:18px;color:#fff}.word-btn[data-v-0cfedd53]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-radius:6px;height:48px;margin:15px;background-color:#007aff}.word-btn--hover[data-v-0cfedd53]{background-color:#4ca2ff}.example-body[data-v-0cfedd53]{padding:%?5?% 0;padding-top:%?20?%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;\n\tdisplay:block\n\t}body.?%PAGE?%[data-v-0cfedd53]{background-color:#efeff4}",""]),t.exports=e},ece2:function(t,e,n){"use strict";var i=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("6d2d")),a=i(n("7ddd")),r={components:{uniNoticeBar:o.default,uniSection:a.default},data:function(){return{}},created:function(){},methods:{getMore:function(){uni.showToast({title:"点击查看更多",icon:"none"})}}};e.default=r}}]);
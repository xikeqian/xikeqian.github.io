(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-album-createCloudAlbum-createCloudAlbum"],{"06e9":function(t,a,e){"use strict";var n=e("4ea4");e("d3b7"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(e("3200")),o={name:"UniPopup",components:{uniTransition:i.default},props:{animation:{type:Boolean,default:!0},type:{type:String,default:"center"},maskClick:{type:Boolean,default:!0}},data:function(){return{duration:300,ani:[],showPopup:!1,showTrans:!1,maskClass:{position:"fixed",bottom:0,top:0,left:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.4)"},transClass:{position:"fixed",left:0,right:0}}},watch:{type:{handler:function(t){switch(this.type){case"top":this.ani=["slide-top"],this.transClass={position:"fixed",left:0,right:0};break;case"bottom":this.ani=["slide-bottom"],this.transClass={position:"fixed",left:0,right:0,bottom:0};break;case"center":this.ani=["zoom-out","fade"],this.transClass={position:"fixed",display:"flex",flexDirection:"column",bottom:0,left:0,right:0,top:0,justifyContent:"center",alignItems:"center"};break}},immediate:!0}},created:function(){this.animation?this.duration=300:this.duration=0},methods:{clear:function(t){t.stopPropagation()},open:function(){var t=this;this.showPopup=!0,this.$nextTick((function(){new Promise((function(a){clearTimeout(t.timer),t.timer=setTimeout((function(){t.showTrans=!0,a()}),50)})).then((function(a){t.$emit("change",{show:!0})}))}))},close:function(t){var a=this;this.showTrans=!1,this.$nextTick((function(){a.$emit("change",{show:!1}),clearTimeout(a.timer),a.timer=setTimeout((function(){a.showPopup=!1}),300)}))},onTap:function(){this.maskClick&&this.close()}}};a.default=o},"1c89":function(t,a,e){"use strict";e.r(a);var n=e("ef5d"),i=e("f441");for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);e("8d5f");var r,s=e("f0c5"),c=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"b2204a16",null,!1,n["a"],r);a["default"]=c.exports},"2da5":function(t,a,e){"use strict";var n=e("4ea4");e("4160"),e("a9e3"),e("ac1f"),e("5319"),e("159b"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(e("5530")),o={name:"uniTransition",props:{show:{type:Boolean,default:!1},modeClass:{type:Array,default:function(){return[]}},duration:{type:Number,default:300},styles:{type:Object,default:function(){return{}}}},data:function(){return{isShow:!1,transform:"",ani:{in:"",active:""}}},watch:{show:{handler:function(t){t?this.open():this.close()},immediate:!0}},computed:{stylesObject:function(){var t=(0,i.default)((0,i.default)({},this.styles),{},{"transition-duration":this.duration/1e3+"s"}),a="";for(var e in t){var n=this.toLine(e);a+=n+":"+t[e]+";"}return a}},created:function(){},methods:{change:function(){this.$emit("click",{detail:this.isShow})},open:function(){var t=this;for(var a in clearTimeout(this.timer),this.isShow=!0,this.transform="",this.ani.in="",this.getTranfrom(!1))"opacity"===a?this.ani.in="fade-in":this.transform+="".concat(this.getTranfrom(!1)[a]," ");this.$nextTick((function(){setTimeout((function(){t._animation(!0)}),50)}))},close:function(t){clearTimeout(this.timer),this._animation(!1)},_animation:function(t){var a=this,e=this.getTranfrom(t);for(var n in this.transform="",e)"opacity"===n?this.ani.in="fade-".concat(t?"out":"in"):this.transform+="".concat(e[n]," ");this.timer=setTimeout((function(){t||(a.isShow=!1),a.$emit("change",{detail:a.isShow})}),this.duration)},getTranfrom:function(t){var a={transform:""};return this.modeClass.forEach((function(e){switch(e){case"fade":a.opacity=t?1:0;break;case"slide-top":a.transform+="translateY(".concat(t?"0":"-100%",") ");break;case"slide-right":a.transform+="translateX(".concat(t?"0":"100%",") ");break;case"slide-bottom":a.transform+="translateY(".concat(t?"0":"100%",") ");break;case"slide-left":a.transform+="translateX(".concat(t?"0":"-100%",") ");break;case"zoom-in":a.transform+="scale(".concat(t?1:.8,") ");break;case"zoom-out":a.transform+="scale(".concat(t?1:1.2,") ");break}})),a},_modeClassArr:function(t){var a=this.modeClass;if("string"!==typeof a){var e="";return a.forEach((function(a){e+=a+"-"+t+","})),e.substr(0,e.length-1)}return a+"-"+t},toLine:function(t){return t.replace(/([A-Z])/g,"-$1").toLowerCase()}}};a.default=o},"31d5":function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,".uni-transition[data-v-64457ece]{-webkit-transition-timing-function:ease;transition-timing-function:ease;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform}.fade-in[data-v-64457ece]{opacity:0}.fade-active[data-v-64457ece]{opacity:1}.slide-top-in[data-v-64457ece]{\n\t/* transition-property: transform, opacity; */-webkit-transform:translateY(-100%);transform:translateY(-100%)}.slide-top-active[data-v-64457ece]{-webkit-transform:translateY(0);transform:translateY(0)\n\t/* opacity: 1; */}.slide-right-in[data-v-64457ece]{-webkit-transform:translateX(100%);transform:translateX(100%)}.slide-right-active[data-v-64457ece]{-webkit-transform:translateX(0);transform:translateX(0)}.slide-bottom-in[data-v-64457ece]{-webkit-transform:translateY(100%);transform:translateY(100%)}.slide-bottom-active[data-v-64457ece]{-webkit-transform:translateY(0);transform:translateY(0)}.slide-left-in[data-v-64457ece]{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.slide-left-active[data-v-64457ece]{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}.zoom-in-in[data-v-64457ece]{-webkit-transform:scale(.8);transform:scale(.8)}.zoom-out-active[data-v-64457ece]{-webkit-transform:scale(1);transform:scale(1)}.zoom-out-in[data-v-64457ece]{-webkit-transform:scale(1.2);transform:scale(1.2)}",""]),t.exports=a},3200:function(t,a,e){"use strict";e.r(a);var n=e("a967"),i=e("e2ca");for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);e("e97c");var r,s=e("f0c5"),c=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"64457ece",null,!1,n["a"],r);a["default"]=c.exports},8041:function(t,a,e){var n=e("31d5");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("7c2a138c",n,!0,{sourceMap:!1,shadowMode:!1})},"8d5f":function(t,a,e){"use strict";var n=e("ce54"),i=e.n(n);i.a},a8e9:function(t,a,e){"use strict";e("4160"),e("a9e3"),e("159b"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{albumName:"",galleryId:"",gallertName:"",checked:!0,albumid:"",type:"",rightabout:!0}},onLoad:function(t){(t.gallery_id||t.gallery_name)&&(this.galleryId=t.gallery_id,this.gallertName=t.gallery_name,this.albumName=t.albumName,this.checked=!!Number(t.isupload),this.rightabout=!!Number(t.rightabout)),t.albumid&&(this.albumid=t.albumid,this.albumName=t.albumName,this.galleryId=t.gallery_id),this.attributionGallery(),uni.setNavigationBarTitle({title:t.type}),this.type=t.type},onshow:function(t){},methods:{selectGallery:function(){if(!this.rightabout)return uni.showToast({title:"只有图库创建者才能更改图库",icon:"none"});uni.navigateTo({url:"../selectGallery/selectGallery?albumName="+this.albumName+"&type="+this.type+"&albumid="+this.albumid+"&galleryId="+this.galleryId})},newPhoto:function(){"创建云相册"==this.type?this.savePhoto():this.updatePhoto()},savePhoto:function(){if(""==this.albumName)return uni.showToast({title:"请输入相册名称",icon:"none"});this.$http.post("pm/createAlbum",{album_name:this.albumName,album_type:"PHOTO_ALBUM",plan_shoot_time:"0",plan_shoot_end_time:"0",theme_style:"SIMPLE_WHITE",gallery_id:this.galleryId,template_type:"PHOTO_ALBUM",sale_model:"FREE",sale_price:0,is_show_face_list:1,is_interactive_upload:this.checked?1:0}).then((function(t){uni.redirectTo({url:"../cloudPhoto/cloudPhoto?albumid="+t.result.shoot_task_id+"&initialize=1"})})).catch((function(t){if(t.data.errMsg)return uni.showToast({title:err.data&&err.data.errMsg||err.errMsg,icon:"none"});console.log(t)}))},updatePhoto:function(){var t=this;if(""==this.albumName)return uni.showToast({title:"请输入相册名称",icon:"none"});this.$http.post("pm/updateAlbumInfo",{album_id:this.albumid,album_name:this.albumName,sale_model:"FREE",sale_price:0,theme_style:"SIMPLE_WHITE",gallery_id:this.galleryId,is_show_face_list:1,is_interactive_upload:this.checked?1:0}).then((function(a){uni.redirectTo({url:"../cloudPhoto/cloudPhoto?albumid="+t.albumid+"&initialize=0"})})).catch((function(t){console.log(t),uni.showToast({title:err.data&&err.data.errMsg||err.errMsg,icon:"none"})}))},attributionGallery:function(){var t=this;this.$http.get("cm/getUserGalleries",{is_user_create_album:1,page_no:1,page_size:9999}).then((function(a){t.galleryId?a.result.galleries.forEach((function(a){a.gallery_id==t.galleryId&&(t.gallertName=a.name)})):a.result.galleries.forEach((function(a){a.is_default&&(t.galleryId=a.gallery_id,t.gallertName=a.name)}))})).catch((function(t){console.log(t),uni.showToast({title:err.data&&err.data.errMsg||err.errMsg,icon:"none"})}))},visitorsUpload:function(){this.checked=!this.checked},expandSpace:function(){this.$refs.downloadAppPopup.open()},cancelDownload:function(){this.$refs.downloadAppPopup.close()},downloadApp:function(){uni.navigateTo({url:"../../iframe/iframe?type=1"})},returnclick:function(){uni.navigateBack({delta:1})}}};a.default=n},a967:function(t,a,e){"use strict";var n;e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return n}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.isShow?e("v-uni-view",{ref:"ani",staticClass:"uni-transition",class:[t.ani.in],style:"transform:"+t.transform+";"+t.stylesObject,on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.change.apply(void 0,arguments)}}},[t._t("default")],2):t._e()},o=[]},ad1f:function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-popup[data-v-b2204a16]{position:fixed;top:var(--window-top);bottom:0;left:0;right:0;z-index:99}.uni-popup__mask[data-v-b2204a16]{position:absolute;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.4);opacity:0}.mask-ani[data-v-b2204a16]{-webkit-transition-property:opacity;transition-property:opacity;-webkit-transition-duration:.2s;transition-duration:.2s}.uni-top-mask[data-v-b2204a16]{opacity:1}.uni-bottom-mask[data-v-b2204a16]{opacity:1}.uni-center-mask[data-v-b2204a16]{opacity:1}.uni-popup__wrapper[data-v-b2204a16]{display:block;position:absolute}.top[data-v-b2204a16]{top:0;left:0;right:0;-webkit-transform:translateY(-500px);transform:translateY(-500px)}.bottom[data-v-b2204a16]{bottom:0;left:0;right:0;-webkit-transform:translateY(500px);transform:translateY(500px)}.center[data-v-b2204a16]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;bottom:0;left:0;right:0;top:0;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-transform:scale(1.2);transform:scale(1.2);opacity:0}.uni-popup__wrapper-box[data-v-b2204a16]{display:block;position:relative}.content-ani[data-v-b2204a16]{-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform;-webkit-transition-duration:.2s;transition-duration:.2s}.uni-top-content[data-v-b2204a16]{-webkit-transform:translateY(0);transform:translateY(0)}.uni-bottom-content[data-v-b2204a16]{-webkit-transform:translateY(0);transform:translateY(0)}.uni-center-content[data-v-b2204a16]{-webkit-transform:scale(1);transform:scale(1);opacity:1}',""]),t.exports=a},b579:function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,"uni-page-body[data-v-4897d090]{background-color:#f2f2f2}.content[data-v-4897d090]{margin-top:%?20?%;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-content:start;align-content:start;background-color:#fff}.content-v[data-v-4897d090]{width:100%;margin-left:%?24?%;padding:%?30?% %?0?%;border-bottom:1px solid #e5e5e5;font-size:%?30?%;height:%?102?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.content-v-l[data-v-4897d090]{width:30%}.bottom-tap[data-v-4897d090]{position:absolute;bottom:%?120?%}.bottom-tap-l[data-v-4897d090]{width:%?300?%;height:%?90?%;line-height:%?90?%;border-radius:45px}.content-v-v[data-v-4897d090]{height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.content-v-v > span[data-v-4897d090]{width:90%}.content-v-v > uni-image[data-v-4897d090]{height:%?20?%;width:%?16?%}.u-download[data-v-4897d090]{text-align:center}.u-download uni-image[data-v-4897d090]{width:%?64?%;height:%?64?%;border-radius:50%}body.?%PAGE?%[data-v-4897d090]{background-color:#f2f2f2}",""]),t.exports=a},be44:function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return n}));var n={"uni-popup":e("1c89").default},i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"content uni-flex"},[e("v-uni-view",{staticClass:"content-v uni-flex"},[e("v-uni-view",{staticClass:"content-v-l"},[t._v("相册名称")]),e("v-uni-view",[e("v-uni-input",{attrs:{type:"text",placeholder:"给相册取一个名字吧"},model:{value:t.albumName,callback:function(a){t.albumName=a},expression:"albumName"}})],1)],1),e("v-uni-view",{staticClass:"content-v uni-flex",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.expandSpace.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"content-v-l"},[t._v("相册风格")]),e("v-uni-view",[e("v-uni-view",{staticClass:"content-v-v"},[e("span",[t._v("简约白")]),e("v-uni-image",{attrs:{src:"https://common.xxpie.com/ic_gd.png"}})],1)],1)],1),e("v-uni-view",{staticClass:"content-v uni-flex"},[e("v-uni-view",{staticClass:"content-v-l"},[t._v("访客上传")]),e("v-uni-view",{staticStyle:{"text-align":"right"}},[e("v-uni-switch",{attrs:{checked:t.checked},on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.visitorsUpload.apply(void 0,arguments)}}})],1)],1),e("v-uni-view",{staticClass:"content-v uni-flex",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.selectGallery.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"content-v-l"},[t._v("归属图库")]),e("v-uni-view",{staticClass:"content-v-v"},[e("span",[t._v(t._s(t.gallertName))]),e("v-uni-image",{attrs:{src:"https://common.xxpie.com/ic_gd.png"}})],1)],1),e("v-uni-view",{staticClass:"bottom-tap uni-flex"},[e("v-uni-button",{staticClass:"bottom-tap-l",staticStyle:{background:"linear-gradient(#303030,#4A4A4A)"},attrs:{type:"primary"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.returnclick.apply(void 0,arguments)}}},[t._v("取消")]),e("v-uni-button",{staticClass:"bottom-tap-l",attrs:{type:"primary"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.newPhoto.apply(void 0,arguments)}}},[t._v("保存")])],1),e("uni-popup",{ref:"downloadAppPopup",attrs:{type:"center"}},[e("v-uni-view",{staticClass:"m-popup"},[e("v-uni-view",{staticClass:"popup-head"},[t._v("提示")]),e("v-uni-view",{staticClass:"popup-body u-download"},[e("v-uni-image",{attrs:{src:"https://common.xxpie.com/mini-logo.png",mode:""}}),e("v-uni-view",{staticClass:"desc"},[t._v("部分功能只有享像派APP才开放")])],1),e("v-uni-view",{staticClass:"popup-foot"},[e("v-uni-view",{staticClass:"cancel",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.cancelDownload.apply(void 0,arguments)}}},[t._v("取消")]),e("v-uni-view",{staticClass:"confirm",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.cancelDownload.apply(void 0,arguments)}}},[t._v("完成")])],1)],1)],1)],1)},o=[]},c8d6:function(t,a,e){var n=e("b579");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("1e46a19b",n,!0,{sourceMap:!1,shadowMode:!1})},cb05:function(t,a,e){"use strict";e.r(a);var n=e("a8e9"),i=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);a["default"]=i.a},ce54:function(t,a,e){var n=e("ad1f");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("2bb367a4",n,!0,{sourceMap:!1,shadowMode:!1})},e2ca:function(t,a,e){"use strict";e.r(a);var n=e("2da5"),i=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);a["default"]=i.a},e97c:function(t,a,e){"use strict";var n=e("8041"),i=e.n(n);i.a},ef5d:function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return n}));var n={"uni-transition":e("3200").default},i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.showPopup?e("v-uni-view",{staticClass:"uni-popup",on:{touchmove:function(a){a.stopPropagation(),a.preventDefault(),arguments[0]=a=t.$handleEvent(a),t.clear.apply(void 0,arguments)}}},[e("uni-transition",{attrs:{"mode-class":["fade"],styles:t.maskClass,duration:t.duration,show:t.showTrans},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.onTap.apply(void 0,arguments)}}}),e("uni-transition",{attrs:{"mode-class":t.ani,styles:t.transClass,duration:t.duration,show:t.showTrans},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.onTap.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"uni-popup__wrapper-box",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.clear.apply(void 0,arguments)}}},[t._t("default")],2)],1)],1):t._e()},o=[]},f441:function(t,a,e){"use strict";e.r(a);var n=e("06e9"),i=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);a["default"]=i.a},fd81:function(t,a,e){"use strict";var n=e("c8d6"),i=e.n(n);i.a},ff50:function(t,a,e){"use strict";e.r(a);var n=e("be44"),i=e("cb05");for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);e("fd81");var r,s=e("f0c5"),c=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"4897d090",null,!1,n["a"],r);a["default"]=c.exports}}]);
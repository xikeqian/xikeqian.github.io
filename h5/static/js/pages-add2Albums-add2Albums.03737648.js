(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-add2Albums-add2Albums"],{"044d":function(t,i,e){"use strict";var a=e("2579"),n=e.n(a);n.a},"15ec":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,".browse[data-v-6aa68786]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#999}.main[data-v-6aa68786]{position:relative;height:100%;padding-bottom:%?130?%;padding-top:%?30?%}.tips[data-v-6aa68786]{margin:auto;position:absolute;left:0;top:0;right:0;height:%?30?%;line-height:%?30?%;color:#ff4e28;padding:0 0 0 %?32?%;font-size:%?24?%}.confirmCheck[data-v-6aa68786]{position:fixed;left:0;right:0;bottom:0;text-align:center;padding:%?20?%}.confirmCheck .confirm-btn[data-v-6aa68786]{display:inline-block;height:%?90?%;background:-webkit-linear-gradient(right,#fa4545,#ff6614);background:linear-gradient(270deg,#fa4545,#ff6614);border-radius:45px;color:#fff;text-align:center;line-height:%?90?%}.singleAlbum[data-v-6aa68786]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;padding:%?12?% %?20?%;min-width:0;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.albumsTitle[data-v-6aa68786]{width:%?478?%;height:%?45?%;font-size:%?32?%;font-family:PingFangSC-Semibold,PingFang SC;font-weight:600;color:#333;line-height:%?45?%}.albumInfoArea[data-v-6aa68786]{padding:%?0?% %?24?%;word-wrap:normal;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;-webkit-box-flex:1;-webkit-flex:1;flex:1}.dateArea[data-v-6aa68786]{width:%?240?%;height:%?40?%;font-size:%?28?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#999;line-height:%?40?%}.iconsArea[data-v-6aa68786]{padding:0 %?20?%;width:auto}.iconsArea uni-image[data-v-6aa68786]{margin-right:%?8?%;height:%?40?%;width:%?40?%;vertical-align:bottom}#albumCover uni-image[data-v-6aa68786]{height:%?200?%;width:%?200?%}.fontStyle[data-v-6aa68786]{width:%?62?%;height:%?30?%;font-size:%?28?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#999;line-height:%?30?%;margin-right:%?150?%}.no-gallery[data-v-6aa68786]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?32?%;padding-top:%?120?%}.singleAlbum .item-img uni-image[data-v-6aa68786]{width:%?240?%;height:%?152?%;vertical-align:top}",""]),t.exports=i},2579:function(t,i,e){var a=e("15ec");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("0eed1336",a,!0,{sourceMap:!1,shadowMode:!1})},8930:function(t,i,e){"use strict";e.r(i);var a=e("b64f"),n=e.n(a);for(var l in a)"default"!==l&&function(t){e.d(i,t,(function(){return a[t]}))}(l);i["default"]=n.a},abdf:function(t,i,e){"use strict";e.r(i);var a=e("b27b"),n=e("8930");for(var l in n)"default"!==l&&function(t){e.d(i,t,(function(){return n[t]}))}(l);e("044d");var o,r=e("f0c5"),s=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"6aa68786",null,!1,a["a"],o);i["default"]=s.exports},b27b:function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return l})),e.d(i,"a",(function(){return a}));var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"main"},[e("v-uni-view",{staticClass:"tips"},[t._v("Tips: 照片只能添加到归属于同一图库的相册，请知悉")]),e("v-uni-scroll-view",{staticStyle:{height:"100%"},attrs:{"scroll-y":"true"},on:{scrolltolower:function(i){arguments[0]=i=t.$handleEvent(i),t.reachBottom.apply(void 0,arguments)}}},[0==t.albumsArr.length?e("v-uni-view",{staticClass:"no-gallery"},[t._v("该图库下没有归属相册")]):t._l(t.albumsArr,(function(i){return e("v-uni-view",{key:i.album_id,staticClass:"singleAlbum",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.albumCheck(i)}}},[e("v-uni-view",{staticClass:"item-img",staticStyle:{width:"fit-content"}},[e("v-uni-image",{attrs:{src:"https://common.xxpie.com/live_album_album:default_cover.png"}})],1),e("v-uni-view",{staticClass:"albumInfoArea"},[e("v-uni-view",[t._v(t._s(i.share_title))]),e("v-uni-view",{staticClass:"browse"},[t._v(t._s(i.create_time.substr(0,10)))]),e("v-uni-view",{staticClass:"browse"},[e("v-uni-image",{staticStyle:{height:"48upx",width:"48upx","padding-right":"10upx"},attrs:{src:"https://common.xxpie.com/blockBrowse.png"}}),t._v(t._s(i.visit_count))],1)],1),e("v-uni-view",{staticClass:"iconsArea"},[e("v-uni-view",{class:{"m-radio":!0,active:i.check},staticStyle:{"text-align":"end"}})],1)],1)}))],2),e("v-uni-view",{staticClass:"confirmCheck"},[e("v-uni-view",{staticClass:"confirm-btn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.confirmCheck.apply(void 0,arguments)}}},[t._v("确定")])],1)],1)},l=[]},b64f:function(t,i,e){"use strict";e("99af"),e("4de4"),e("4160"),e("159b"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{albumsArr:[],page_no:1,gallery_id:"",gallery_ossobject_ids:"",flag:""}},onLoad:function(t){console.log(t.gallery_id),this.gallery_id=t.gallery_id;var i=getApp().globalData.albumSelectedInfo;this.gallery_ossobject_ids=i.selected,this.flag=t.isAllSelected,this.getAlbumsList()},methods:{reachBottom:function(){this.page_no++,this.getAlbumsList()},albumCheck:function(t){this.albumsArr.forEach((function(i){i.album_id==t.album_id?i.check=!i.check:i.check=!1})),this.$forceUpdate()},getAlbumsList:function(){var t=this;this.$http.get("pm/queryAlbumsPg",{page_no:this.page_no,platform:"WEB"}).then((function(i){var e=[];i.result.albums.forEach((function(i){i.check=!1,t.gallery_id==i.gallery_id&&e.push(i)})),t.albumsArr=t.albumsArr.concat(e)})).catch((function(t){return uni.showToast({title:t.data.errMsg,icon:"none"})}))},confirmCheck:function(){if(0===this.albumsArr.length)return uni.showToast({title:"请先选择相册",icon:"none"});var t=this.albumsArr.filter((function(t){return 1==t.check}))[0],i={filter_condition:{gallery_id:this.gallery_id},target_album_id:t.album_id,gallery_ossobject_ids:this.gallery_ossobject_ids,is_selected_all:1==this.flag?1:0,reason:"ADD_TO_ALBUM"};this.$http.post("cm/advancedOperateGalleryItems",i).then((function(t){uni.showToast({title:"添加相册成功",icon:"none"}),setTimeout((function(){uni.navigateBack({delta:1})}),500)})).catch((function(t){return uni.showToast({title:t.data.errMsg,icon:"none"})}))}}};i.default=a}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-album-selectGallery-selectGallery"],{2693:function(t,e,a){"use strict";a("4160"),a("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{gallerylist:[],isactive:"",albumName:"",type:"",albumid:"",galleryId:""}},onLoad:function(t){this.isactive=t.galleryId,this.albumid=t.albumid,this.albumName=t.albumName,this.type=t.type,this.attributionGallery()},methods:{attributionGallery:function(){var t=this;this.$http.get("cm/getUserGalleries",{is_user_create_album:1,page_no:1,page_size:9999}).then((function(e){var a=[];e.result.galleries.forEach((function(t){"READER"!=t.role&&a.push(t)})),t.gallerylist=a})).catch((function(t){console.log(t)}))},pitchGallery:function(t){var e=this;this.isactive=t.gallery_id,setTimeout((function(){uni.redirectTo({url:"../createCloudAlbum/createCloudAlbum?gallery_id="+t.gallery_id+"&gallery_name="+t.name+"&albumName="+e.albumName+"&type="+e.type+"&albumid="+e.albumid})}),500)}}};e.default=i},3256:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return l})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"content-top"},[t._v("选择文件归属图库")]),t._l(t.gallerylist,(function(e,i){return a("v-uni-view",{key:i,staticClass:"content-details",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.pitchGallery(e)}}},[a("v-uni-image",{attrs:{src:e.cover_photo_url}}),a("v-uni-view",{staticClass:"content-details-name"},[t._v(t._s(e.name))]),a("v-uni-view",{staticClass:"m-radio",class:{active:e.gallery_id==t.isactive}})],1)}))],2)},l=[]},"58e6":function(t,e,a){var i=a("a751");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("0fbe16d2",i,!0,{sourceMap:!1,shadowMode:!1})},"5cce":function(t,e,a){"use strict";a.r(e);var i=a("3256"),n=a("fcc1");for(var l in n)"default"!==l&&function(t){a.d(e,t,(function(){return n[t]}))}(l);a("d8ce");var c,r=a("f0c5"),s=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"b58a730a",null,!1,i["a"],c);e["default"]=s.exports},a751:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".content[data-v-b58a730a]{padding:%?40?% %?0?% %?0?% %?25?%}.content-top[data-v-b58a730a]{color:#999;font-size:%?30?%}.content-details[data-v-b58a730a]{height:%?140?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-align-content:center;align-content:center;border-bottom:%?1?% solid #e5e5e5}.content-details > uni-image[data-v-b58a730a]{width:%?60?%;height:%?60?%}.content-details-name[data-v-b58a730a]{padding-left:%?20?%;width:80%}",""]),t.exports=e},d8ce:function(t,e,a){"use strict";var i=a("58e6"),n=a.n(i);n.a},fcc1:function(t,e,a){"use strict";a.r(e);var i=a("2693"),n=a.n(i);for(var l in i)"default"!==l&&function(t){a.d(e,t,(function(){return i[t]}))}(l);e["default"]=n.a}}]);
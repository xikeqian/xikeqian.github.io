(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-allCharacters-allCharacters"],{"00f4":function(t,e,a){"use strict";a.r(e);var r=a("6573"),n=a("0ea7");for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);a("f368");var c,o=a("f0c5"),l=Object(o["a"])(n["default"],r["b"],r["c"],!1,null,"05990962",null,!1,r["a"],c);e["default"]=l.exports},"0ea7":function(t,e,a){"use strict";a.r(e);var r=a("f885"),n=a.n(r);for(var i in r)"default"!==i&&function(t){a.d(e,t,(function(){return r[t]}))}(i);e["default"]=n.a},4312:function(t,e,a){var r=a("24fb");e=r(!1),e.push([t.i,".allCharacters[data-v-05990962]{display:block;padding:%?30?%;-webkit-box-pack:start;-webkit-justify-content:start;justify-content:start;overflow:auto;margin:auto;position:absolute;left:0;top:0;right:0;bottom:0}.singleCharacter[data-v-05990962]{display:inline-block;width:%?230?%;height:%?260?%;text-align:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.singleCharacter uni-image[data-v-05990962]{width:%?160?%;height:%?160?%;border-radius:50%}",""]),t.exports=e},6573:function(t,e,a){"use strict";var r;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return r}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-scroll-view",{staticClass:"allCharacters",attrs:{"scroll-y":!0},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.getPersonFace.apply(void 0,arguments)}}},t._l(t.charactarArr,(function(e){return a("v-uni-view",{staticClass:"singleCharacter",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.M2PerInfo(e)}}},[a("v-uni-view",{staticStyle:{"text-align":"center"}},[a("v-uni-image",{attrs:{src:e.cover_photo_url}})],1),a("v-uni-view",{staticStyle:{"text-align":"center"}},[a("v-uni-text",[t._v(t._s(e.name))])],1)],1)})),1)],1)},i=[]},7660:function(t,e,a){var r=a("4312");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=a("4f06").default;n("026d0b72",r,!0,{sourceMap:!1,shadowMode:!1})},f368:function(t,e,a){"use strict";var r=a("7660"),n=a.n(r);n.a},f885:function(t,e,a){"use strict";a("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={data:function(){return{charactarArr:[],pageNo:1,pageSize:50,galleryId:"",galleryName:"",jurisdiction:""}},onLoad:function(t){this.galleryId=t.galleryId,this.jurisdiction=t.jurisdiction,this.galleryName=t.name,this.getPersonFace()},methods:{getPersonFace:function(){var t=this;this.$http.get("cm/queryGalleryCharacterPg",{page_no:this.pageNo,page_size:this.pageSize,gallery_id:this.galleryId}).then((function(e){t.charactarArr=t.charactarArr.concat(e.result.characters),t.pageSize++})).catch((function(t){return uni.showToast({title:t.data.errMsg,icon:"none"})}))},M2PerInfo:function(t){console.log(t),uni.navigateTo({url:"../searchPersonInfo/searchPersonInfo?gallery_character_id=".concat(t.gallery_character_id,"&type=person&name=").concat(this.galleryName,"&galleryId=").concat(this.galleryId,"&jurisdiction=").concat(this.jurisdiction)})}}};e.default=r}}]);
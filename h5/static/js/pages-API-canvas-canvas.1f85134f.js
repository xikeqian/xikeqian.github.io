(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-canvas-canvas"],{"0e00":function(e,t,n){"use strict";var i,a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("page-head",{attrs:{title:e.title}}),n("v-uni-view",{staticClass:"uni-common-mt"},[n("v-uni-canvas",{staticClass:"canvas-element",attrs:{"canvas-id":"canvas",id:"canvas"}}),n("v-uni-scroll-view",{staticClass:"canvas-buttons",attrs:{"scroll-y":"true"}},[e._l(e.names,(function(t,i){return[n("v-uni-button",{key:i+"_0",staticClass:"canvas-button",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.handleCanvasButton(t)}}},[e._v(e._s(t))])]})),n("v-uni-button",{staticClass:"canvas-button",attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toTempFilePath.apply(void 0,arguments)}}},[e._v("toTempFilePath")])],2)],1)],1)},o=[];n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}))},"49aa":function(e,t,n){"use strict";n.r(t);var i=n("0e00"),a=n("6e43");for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("b920");var r,s=n("f0c5"),l=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"6e778f94",null,!1,i["a"],r);t["default"]=l.exports},"51a5":function(e,t,n){"use strict";n("cb29"),n("4160"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=null,a={data:function(){return{title:"createContext",names:["rotate","scale","reset","translate","save","restore","drawImage","fillText","fill","stroke","clearRect","beginPath","closePath","moveTo","lineTo","rect","arc","quadraticCurveTo","bezierCurveTo","setFillStyle","setStrokeStyle","setGlobalAlpha","setShadow","setFontSize","setLineCap","setLineJoin","setLineWidth","setMiterLimit"]}},onReady:function(){i=uni.createCanvasContext("canvas",this)},methods:{toTempFilePath:function(){uni.canvasToTempFilePath({canvasId:"canvas",success:function(e){console.log(e.tempFilePath)},fail:function(e){console.error(JSON.stringify(e))}})},handleCanvasButton:function(e){this[e]&&this[e]()},rotate:function(){i.beginPath(),i.rotate(10*Math.PI/180),i.rect(225,75,20,10),i.fill(),i.draw()},scale:function(){i.beginPath(),i.rect(25,25,50,50),i.stroke(),i.scale(2,2),i.beginPath(),i.rect(25,25,50,50),i.stroke(),i.draw()},reset:function(){i.beginPath(),i.setFillStyle("#000000"),i.setStrokeStyle("#000000"),i.setFontSize(10),i.setGlobalAlpha(1),i.setShadow(0,0,0,"rgba(0, 0, 0, 0)"),i.setLineCap("butt"),i.setLineJoin("miter"),i.setLineWidth(1),i.setMiterLimit(10),i.draw()},translate:function(){i.beginPath(),i.rect(10,10,100,50),i.fill(),i.translate(70,70),i.beginPath(),i.fill(),i.draw()},save:function(){i.beginPath(),i.setStrokeStyle("#00ff00"),i.save(),i.scale(2,2),i.setStrokeStyle("#ff0000"),i.rect(0,0,100,100),i.stroke(),i.restore(),i.rect(0,0,50,50),i.stroke(),i.draw()},restore:function(){[3,2,1].forEach((function(e){i.beginPath(),i.save(),i.scale(e,e),i.rect(10,10,100,100),i.stroke(),i.restore()})),i.draw()},drawImage:function(){i.drawImage("../../../static/uni.png",0,0),i.draw()},fillText:function(){i.setStrokeStyle("#ff0000"),i.beginPath(),i.moveTo(0,10),i.lineTo(300,10),i.stroke(),i.setFontSize(10),i.fillText("Hello World",0,30),i.setFontSize(20),i.fillText("Hello World",100,30),i.beginPath(),i.moveTo(0,30),i.lineTo(300,30),i.stroke(),i.draw()},fill:function(){i.beginPath(),i.rect(20,20,150,100),i.setStrokeStyle("#00ff00"),i.fill(),i.draw()},stroke:function(){i.beginPath(),i.moveTo(20,20),i.lineTo(20,100),i.lineTo(70,100),i.setStrokeStyle("#00ff00"),i.stroke(),i.draw()},clearRect:function(){i.setFillStyle("#ff0000"),i.beginPath(),i.rect(0,0,300,150),i.fill(),i.clearRect(20,20,100,50),i.draw()},beginPath:function(){i.beginPath(),i.setLineWidth(5),i.setStrokeStyle("#ff0000"),i.moveTo(0,75),i.lineTo(250,75),i.stroke(),i.beginPath(),i.setStrokeStyle("#0000ff"),i.moveTo(50,0),i.lineTo(150,130),i.stroke(),i.draw()},closePath:function(){i.beginPath(),i.setLineWidth(1),i.moveTo(20,20),i.lineTo(20,100),i.lineTo(70,100),i.closePath(),i.stroke(),i.draw()},moveTo:function(){i.beginPath(),i.moveTo(0,0),i.lineTo(300,150),i.stroke(),i.draw()},lineTo:function(){i.beginPath(),i.moveTo(20,20),i.lineTo(20,100),i.lineTo(70,100),i.stroke(),i.draw()},rect:function(){i.beginPath(),i.rect(20,20,150,100),i.stroke(),i.draw()},arc:function(){i.beginPath(),i.setLineWidth(2),i.arc(75,75,50,0,2*Math.PI,!0),i.moveTo(110,75),i.arc(75,75,35,0,Math.PI,!1),i.moveTo(65,65),i.arc(60,65,5,0,2*Math.PI,!0),i.moveTo(95,65),i.arc(90,65,5,0,2*Math.PI,!0),i.stroke(),i.draw()},quadraticCurveTo:function(){i.beginPath(),i.moveTo(20,20),i.quadraticCurveTo(20,100,200,20),i.stroke(),i.draw()},bezierCurveTo:function(){i.beginPath(),i.moveTo(20,20),i.bezierCurveTo(20,100,200,100,200,20),i.stroke(),i.draw()},setFillStyle:function(){["#fef957","rgb(242,159,63)","rgb(242,117,63)","#e87e51"].forEach((function(e,t){i.setFillStyle(e),i.beginPath(),i.rect(0+75*t,0,50,50),i.fill()})),i.draw()},setStrokeStyle:function(){["#fef957","rgb(242,159,63)","rgb(242,117,63)","#e87e51"].forEach((function(e,t){i.setStrokeStyle(e),i.beginPath(),i.rect(0+75*t,0,50,50),i.stroke()})),i.draw()},setGlobalAlpha:function(){i.setFillStyle("#000000"),[1,.5,.1].forEach((function(e,t){i.setGlobalAlpha(e),i.beginPath(),i.rect(0+75*t,0,50,50),i.fill()})),i.draw(),i.setGlobalAlpha(1)},setShadow:function(){i.beginPath(),i.setShadow(10,10,10,"rgba(0, 0, 0, 199)"),i.rect(10,10,100,100),i.fill(),i.draw()},setFontSize:function(){[10,20,30,40].forEach((function(e,t){i.setFontSize(e),i.fillText("Hello, world",20,20+40*t)})),i.draw()},setLineCap:function(){i.setLineWidth(10),["butt","round","square"].forEach((function(e,t){i.beginPath(),i.setLineCap(e),i.moveTo(20,20+20*t),i.lineTo(100,20+20*t),i.stroke()})),i.draw()},setLineJoin:function(){i.setLineWidth(10),["bevel","round","miter"].forEach((function(e,t){i.beginPath(),i.setLineJoin(e),i.moveTo(20+80*t,20),i.lineTo(100+80*t,50),i.lineTo(20+80*t,100),i.stroke()})),i.draw()},setLineWidth:function(){[2,4,6,8,10].forEach((function(e,t){i.beginPath(),i.setLineWidth(e),i.moveTo(20,20+20*t),i.lineTo(100,20+20*t),i.stroke()})),i.draw()},setMiterLimit:function(){i.setLineWidth(4),[2,4,6,8,10].forEach((function(e,t){i.beginPath(),i.setMiterLimit(e),i.moveTo(20+80*t,20),i.lineTo(100+80*t,50),i.lineTo(20+80*t,100),i.stroke()})),i.draw()}}};t.default=a},"6e43":function(e,t,n){"use strict";n.r(t);var i=n("51a5"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},b920:function(e,t,n){"use strict";var i=n("e5fb"),a=n.n(i);a.a},bad3:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,".canvas-element-wrapper[data-v-6e778f94]{display:block;margin-bottom:%?100?%}.canvas-element[data-v-6e778f94]{width:100%;height:%?500?%;background-color:#fff}.canvas-buttons[data-v-6e778f94]{padding:%?30?% %?50?% %?10?%;width:100%;height:%?360?%;box-sizing:border-box}.canvas-button[data-v-6e778f94]{float:left;display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;height:40px;line-height:1;width:%?300?%;margin:%?15?% %?12?%}",""]),e.exports=t},cb29:function(e,t,n){var i=n("23e7"),a=n("81d5"),o=n("44d2");i({target:"Array",proto:!0},{fill:a}),o("fill")},e5fb:function(e,t,n){var i=n("bad3");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("47c9e3d0",i,!0,{sourceMap:!1,shadowMode:!1})}}]);
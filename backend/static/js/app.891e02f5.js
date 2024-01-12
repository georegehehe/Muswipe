(function(t){function e(e){for(var i,a,r=e[0],l=e[1],c=e[2],d=0,u=[];d<r.length;d++)a=r[d],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&u.push(s[a][0]),s[a]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);h&&h(e);while(u.length)u.shift()();return n.push.apply(n,c||[]),o()}function o(){for(var t,e=0;e<n.length;e++){for(var o=n[e],i=!0,r=1;r<o.length;r++){var l=o[r];0!==s[l]&&(i=!1)}i&&(n.splice(e--,1),t=a(a.s=o[0]))}return t}var i={},s={app:0},n=[];function a(e){if(i[e])return i[e].exports;var o=i[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=i,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(o,i,function(e){return t[e]}.bind(null,i));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var h=l;n.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},4037:function(t,e,o){},"45f9":function(t,e,o){"use strict";var i=o("47a4"),s=o.n(i);s.a},"47a4":function(t,e,o){},"536a":function(t,e,o){"use strict";var i=o("d7be"),s=o.n(i);s.a},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var i=o("2b0e"),s=o("8c4f"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.maskType?o("div",{staticClass:"mask"},[o("i")]):t._e(),t.aboutType?o("div",{staticClass:"aboutMask"},[o("div",{staticClass:"aboutMes"},[o("i",{staticClass:"closeIco",on:{click:t.closeIcoClick}}),o("p",[t._v("1. Change mode by clicking on pen/eraser icon")]),o("p",[t._v("2. Swipe across the bounded area to draw/remove notes ")]),o("p",[t._v("3. Click the mixer icon to compose")]),o("p",[t._v("4. Click the play or Download button when finished ")])])]):t._e(),o("div",{staticClass:"legendBtn"},[o("span",{on:{click:t.showLegend}},[o("i",{staticClass:"keyIcon icon"}),t._v("Legend")])]),o("div",{staticClass:"legendAdvanced"},[t.legendshow?o("span",{on:{mouseover:t.showMix,mouseout:t.closeMix}},[o("i",{staticClass:"saveIcon icon"})]):t._e(),t.legendshow?o("span",{on:{mouseover:t.showPlay,mouseout:t.closePlay}},[o("i",{staticClass:"icon",class:t.playStatus})]):t._e(),t.legendshow?o("span",{on:{mouseover:t.showDelete,mouseout:t.closeDelete}},[o("i",{staticClass:"deleteIcon icon"})]):t._e(),t.legendshow?o("span",{on:{mouseover:t.showHelp,mouseout:t.closeHelp}},[t._v("help")]):t._e(),t.legendshow?o("span",{on:{mouseover:t.showDraw,mouseout:t.closeDraw}},[o("i",{class:[t.removing?"removeIcon":"drawIcon","icon"]})]):t._e(),t.legendshow?o("span",{on:{mouseover:t.showDownload,mouseout:t.closeDownload}},[o("i",{staticClass:"downloadIcon icon"})]):t._e()]),o("div",{staticClass:"legendAdvancedText"},[t.showMixBoo?o("span",[t._v("Mix - To process the input and generate a complete music")]):t._e(),t.showPlayBoo?o("span",[t._v("Play - To play the music generated by Mix")]):t._e(),t.showDeleteBoo?o("span",[t._v("Delete - To delete all dots on the canvas")]):t._e(),t.showHelpBoo?o("span",[t._v("Help - To view the complete tutorial")]):t._e(),t.showDrawBoo?o("span",[t._v("Draw - In this mode, you can create new dots by swiping across the canvas")]):t._e(),t.showEraseBoo?o("span",[t._v("Erase - In this mode, you can delete the dots by swiping across the canvas")]):t._e(),t.showDownloadBoo?o("span",[t._v("Download - To download the music file you just created")]):t._e()]),o("div",{staticClass:"title"},[t._v("Swipe!")]),o("div",{ref:"app",staticClass:"appModule"},[o("div",{staticClass:"lineMesAdvanced"},t._l(t.lineData,(function(e,i){return o("span",{key:i},[o("a",[t._v(t._s(e))])])})),0),o("div",{attrs:{id:"app"}},[o("ClassicalMusicalNote",{attrs:{moveAnType:t.moveAnType,dotIndexList:t.dotList,modeofapp:t.removing},on:{onChange:t.getAllPosition}}),o("div",{staticClass:"positionMes"},[o("ul",t._l(t.dispalyList,(function(e,i){return o("li",{key:i},[o("span",[t._v(t._s(e.titleY))]),o("span",[t._v(t._s(e.titleX))])])})),0)]),o("div",{staticClass:"positionBtn"},[t.mixType?o("span",{on:{click:t.mixHas}},[o("i",{staticClass:"saveIcon icon"})]):o("span",{staticStyle:{opacity:"0.5",cursor:"not-allowed"}},[o("i",{staticClass:"saveIcon icon"})]),t.playType?o("span",{on:{click:t.handlerPlay}},[o("i",{staticClass:"icon",class:t.playStatus})]):o("span",{staticStyle:{opacity:"0.5",cursor:"not-allowed"}},[o("i",{staticClass:"icon",class:t.playStatus})]),t.openType?o("span",{on:{click:t.deleteData}},[o("i",{staticClass:"deleteIcon icon"})]):o("span",{staticStyle:{opacity:"0.5",cursor:"not-allowed"}},[o("i",{staticClass:"deleteIcon icon"})]),t.audioType?o("audio",{attrs:{id:"my_audio",src:t.audio_url}}):t._e(),t.openType?o("span",{on:{click:t.aboutClick}},[t._v("help")]):o("span",{staticStyle:{opacity:"0.5",cursor:"not-allowed"}},[t._v("help")]),t.openType?o("span",{on:{click:t.modeChange}},[o("i",{class:[t.removing?"removeIcon":"drawIcon","icon"]})]):o("span",{staticStyle:{opacity:"0.5",cursor:"not-allowed"}},[o("i",{staticClass:"drawIcon icon"})]),t.playType?o("span",[o("a",{attrs:{href:t.advanced_final_version_url}},[o("i",{staticClass:"downloadIcon icon"})])]):t._e()])],1)])])},a=[],r=(o("d3b7"),o("25f0"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"canvasWrap",staticClass:"canvasWrap",style:"width:"+t.width+"px"},[o("div",{staticClass:"moveLine",class:{moveAn:t.moveAnType}}),o("canvas",{ref:"musicalCanvas",style:{background:t.backgroudColor,width:"975px",height:this.canvasHeight+"px"}})])}),l=[],c=(o("cb29"),o("d81d"),o("a434"),o("a9e3"),{props:{moveAnType:{type:Boolean,default:!1},backgroudColor:{type:String,default:"#FFFFFF"},width:{type:Number,default:1e3},height:{type:Number,default:550},ylineColor:{type:String,default:"#ccc"},xlineColor:{type:String,default:"#ccc"},bottomLineColor:{type:String,default:"red"},topLineColor:{type:String,default:"#5883ea"},curveLineColor:{type:String,default:"#9999FF"},dotColor:{type:String,default:"#9999FF"},dotColorRed:{type:String,default:"#ff0004"},dotSize:{type:Number,default:4},dotSizeRed:{type:Number,default:4},dotIndexList:{type:Array,default:function(){return[]}},modeofapp:{type:Boolean,default:!1},lockView:{type:Boolean,default:!1}},data:function(){return{idlist:[],canvasWidth:975,ctx:"",xCoordinate:[],yCoordinate:[],spanX:15,spanY:32,leftTitle:[],bottomTitle:[],recordList:[],dotList:[],offsetY:4,recording:!1}},computed:{canvasHeight:function(){return this.height}},watch:{dotIndexList:function(t){this.indexListToDotList(t)},moveAnType:function(t){var e=this;if(1==t){var o=function(t){var o=e.dotList[t],i=e.dotIndexList[t];s=setTimeout((function(){return e.drawRedDot(o.x,o.y,o.type)}),600*(i.x+1)*.25),e.idlist.push(s),console.log("theid is"+s)};for(var i in this.dotList){var s;o(i)}var n=this,a=setTimeout((function(){for(var t in n.idlist.push(a),n.dotList){var e;if(1==n.moveAnType)(function(){var o=n.dotList[t],i=n.dotIndexList[t];e=setTimeout((function(){return n.drawDot(o.x,o.y,o.type)}),600*(i.x+1)*.25),n.idlist.push(e)})()}}),19200),r=setTimeout((function(){return e.redraw()}),38400);this.idlist.push(r)}else{for(var l in console.log("passed"),this.idlist)clearTimeout(this.idlist[l]);this.redraw()}}},mounted:function(){this.initCanvas(),this.indexListToDotList(this.dotIndexList)},methods:{initCanvas:function(){var t=this.$refs.musicalCanvas;this.ctx=t.getContext("2d"),t.width=this.canvasWidth,t.height=this.canvasHeight,this.addlister(t),this.redraw()},createTitle:function(){for(var t=[],e=0;e<=64;e++)t.push(e);for(var o=[],i=1;i<=16;i++)o.push(i);this.bottomTitle=t,this.leftTitle=o},redraw:function(){this.ctx.clearRect(0,0,this.canvasWidth,this.canvasHeight),this.createTitle(),this.drawCoordinateLine(),this.drawDotList()},drawTitle:function(){var t=this;this.leftTitle.map((function(e,o){t.ctx.fillStyle="#fff",t.ctx.textAlign="center",t.ctx.fillText(o,10,t.height-e*t.spanY-t.offsetY-4)})),this.bottomTitle.map((function(e,o){t.ctx.fillStyle="#333333",t.ctx.fillText(.5*e,t.spanX*(o+1)+t.spanX/2,t.height-4),t.ctx.textAlign="center"}))},drawCoordinateLine:function(){var t=this;this.leftTitle.map((function(e,o){var i=15,s=t.height-e*t.spanY-t.offsetY,n=t.canvasWidth,a=t.height-e*t.spanY-t.offsetY,r=!1;t.ctx.lineWidth=2,1==e&&(r=!0,t.ctx.strokeStyle=t.bottomLineColor),2==e&&(r=!0,t.ctx.strokeStyle=t.bottomLineColor),10==e&&(r=!0,t.ctx.strokeStyle=t.topLineColor),9==e&&(r=!0,t.ctx.strokeStyle=t.topLineColor),1==r&&(t.ctx.beginPath(),t.ctx.moveTo(i,s),t.ctx.lineTo(n,a),t.ctx.stroke(),t.ctx.closePath())})),this.ctx.strokeStyle="#000000",this.ctx.beginPath(),this.ctx.moveTo(15,4),this.ctx.lineTo(this.canvasWidth,4),this.ctx.stroke(),this.ctx.moveTo(this.canvasWidth-1,4),this.ctx.lineTo(this.canvasWidth-1,515),this.ctx.stroke(),this.ctx.moveTo(15,4),this.ctx.lineTo(15,515),this.ctx.stroke(),this.ctx.closePath()},drawDotList:function(){this.dotList.length;for(var t in this.dotList){var e=this.dotList[t];if(this.drawDot(e.x,e.y,e.type),t>0){var o=this.dotList[t-1],i=this.dotList[t],s={x:o.x,y:o.y},n={x:i.x,y:i.y},a=i.x-o.x;i.y,o.y;i.y<o.y?(s={x:o.x+a/4,y:o.y},n={x:i.x-a/4,y:i.y}):i.y>o.y&&(s={x:o.x+a/4,y:o.y},n={x:i.x-a/4,y:i.y}),this.drawCurve(o.x,o.y,s.x,s.y,n.x,n.y,i.x,i.y)}}},drawDot:function(t,e){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"solid";this.ctx.fillStyle=this.dotColor,this.ctx.strokeStyle=this.dotColor,this.ctx.beginPath(),this.ctx.arc(t,e,this.dotSize,0,2*Math.PI),"solid"===o?this.ctx.fill():"hollow"==o&&this.ctx.stroke()},drawRedDot:function(t,e){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"solid";this.ctx.fillStyle=this.dotColorRed,this.ctx.strokeStyle=this.dotColorRed,this.ctx.beginPath(),this.ctx.arc(t,e,this.dotSizeRed,0,2*Math.PI),"solid"===o?this.ctx.fill():"hollow"==o&&this.ctx.stroke()},startrecording:function(t){this.recording=!0},finishrecording:function(t){this.recording=!1},onMouseOut:function(t){this.recording=!1},addDot:function(t){if(0==this.modeofapp&&t.offsetX&&t.offsetY){var e=t.offsetX;console.log("e.offsetx"+e);var o=t.offsetY;if(e<this.spanX)return;if(o>this.canvasHeight-this.spanY)return;if(o<7)return;var i=this.correctDotPosition(e,o),s=!1,n=-1;this.dotList.map((function(t,e){t.x==i.x&&(s=!0,n=e)})),s?this.dotList[n]=i:this.dotList.push(i),this.dotList.sort((function(t,e){return t.x-e.x})),this.redraw(),this.lockView&&this.scrollToMid(i.x,i.y),this.dotListToIndexList()}},removeDot:function(t){if(t.offsetX&&t.offsetY){var e=t.offsetX,o=t.offsetY;if(e<this.spanX)return;if(o>this.canvasHeight-this.spanY)return;var i=this.correctDotPosition(e,o),s=!1,n=-1;this.dotList.map((function(t,e){Math.abs(t.x-i.x)<5&&(s=!0,n=e)})),s&&(this.dotList.splice(n,1),this.dotList.sort((function(t,e){return t.x-e.x})),this.redraw(),this.lockView&&this.scrollToMid(i.x,i.y),this.dotListToIndexList())}},correctDotPosition:function(t,e){var o=parseInt((this.canvasHeight-e)/this.spanY),i=o*this.spanY,s="solid";1==o&&(s="hollow"),e=this.canvasHeight-i-this.spanY/2-this.dotSize/2;var n=t%this.spanX;n>this.spanY/2?t-=n-this.spanX/2:t+=this.spanX/2-n,console.log("the dot position is "+t);var a={x:t,y:e,type:s};return a},drawCurve:function(t,e,o,i,s,n,a,r){this.ctx.fillStyle=this.curveLineColor,this.ctx.strokeStyle=this.curveLineColor,this.ctx.beginPath(),this.ctx.moveTo(t,e),this.ctx.bezierCurveTo(o,i,s,n,a,r),this.ctx.stroke()},addLine:function(t,e,o,i){this.ctx.fillStyle=this.curveLineColor,this.ctx.strokeStyle=this.curveLineColor,this.ctx.lineWidth=2,this.ctx.beginPath(),this.ctx.moveTo(t,e),this.drawLine(o,i)},drawLine:function(t,e){this.ctx.lineTo(t,e),this.ctx.stroke()},addlister:function(t){t.addEventListener("mousedown",this.startrecording),t.addEventListener("dblclick",this.removeDot),t.addEventListener("mousemove",this.onMouseEvent),t.addEventListener("mouseup",this.finishrecording),t.addEventListener("click",this.addDot),t.addEventListener("mouseout",this.onMouseOut)},scrollToMid:function(t,e){if(this.dotList.length){var o=this.width/2;if(t>o){var i=t-o;this.$refs.canvasWrap.scrollLeft=i}else this.$refs.canvasWrap.scrollLeft=0}},dotListToIndexList:function(){var t=this,e=this.dotList.map((function(e){var o=2*parseInt((e.x-t.spanX)/t.spanX)-1,i=parseInt((t.canvasHeight-e.y-t.spanY)/t.spanY);return{x:o,y:i}}));this.$emit("onChange",e),console.log("list==========",e)},indexListToDotList:function(t){var e=this;this.dotList=t.map((function(t){var o=0;o=t.x<0?t.x*e.spanX+2*e.spanX+e.spanX/2:parseInt(.5*t.x)*e.spanX+2*e.spanX+e.spanX/2;var i=e.canvasHeight-(t.y*e.spanY+e.spanY+e.spanY/2+e.offsetY-.5);return{x:o,y:i,type:0==t.y?"hollow":"solid"}})),this.redraw()},onMouseEvent:function(t){1==this.recording&&(1==this.modeofapp?this.removeDot(t):this.addDot(t))}}}),h=c,d=(o("7a49"),o("2877")),u=Object(d["a"])(h,r,l,!1,null,"ad338b3e",null),p=u.exports,f=(o("a4d3"),o("e01a"),o("d28b"),o("99af"),o("c975"),o("ac1f"),o("3ca3"),o("1276"),o("ddb0"),o("2b3d"),{positionListToYinList:function(t,e){var o=[],i=!0,s=!1,n=void 0;try{for(var a,r=t[Symbol.iterator]();!(i=(a=r.next()).done);i=!0){var l=a.value,c=l.x,h=l.y,d="".concat(e[h],"|").concat(c+1);o.push(d)}}catch(u){s=!0,n=u}finally{try{i||null==r.return||r.return()}finally{if(s)throw n}}return o},yinListToPosition:function(t,e){var o=[],i=!0,s=!1,n=void 0;try{for(var a,r=t[Symbol.iterator]();!(i=(a=r.next()).done);i=!0){var l=a.value,c=l.split("|"),h=e.indexOf(c[0]),d=parseInt(c[1])-1,u={x:d,y:h};o.push(u)}}catch(p){s=!0,n=p}finally{try{i||null==r.return||r.return()}finally{if(s)throw n}}return o},yinListToDisplayList:function(t,e){var o=[],i=!0,s=!1,n=void 0;try{for(var a,r=t[Symbol.iterator]();!(i=(a=r.next()).done);i=!0){var l=a.value,c=l.split("|"),h={titleX:.25*parseInt(c[1]),titleY:c[0]};o.push(h)}}catch(d){s=!0,n=d}finally{try{i||null==r.return||r.return()}finally{if(s)throw n}}return o},downloadFile:function(t,e){if(t)if(window.navigator.msSaveBlob)try{window.navigator.msSaveBlob(t,e)}catch(s){console.log(s)}else{var o=window.URL.createObjectURL(new Blob([t])),i=document.createElement("a");i.style.display="none",i.href=o,i.setAttribute("download",e),document.body.appendChild(i),i.click(),document.body.removeChild(i),window.URL.revokeObjectURL(o)}}}),v={baseURL:"",outputDir:"dist2"},y=o("bc3a"),m=o.n(y);m.a.defaults.baseURL=v.baseURL,m.a.defaults.headers.post["Content-Type"]="application/json";var w=m.a.create();w.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),w.interceptors.response.use((function(t){return t.data}),(function(t){}));var x=w,g={humming:"/humming",mix:"/mix",hummingAd:"/hummingAd",mixAd:"/mixAd"},T=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return x.post(g.humming,t)},L=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return x.post(g.mix,t)},C=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return x.post(g.mixAd,t)},b={components:{ClassicalMusicalNote:p},data:function(){return{timeDown:2400,isSafari:!1,showPlayBoo:!1,showDeleteBoo:!1,showHelpBoo:!1,showDrawBoo:!1,showEraseBoo:!1,showDownloadBoo:!1,showMixBoo:!1,legendshow:!1,initialized:!1,mixType:!1,removing:!1,timeType:0,moveAnType:!1,playType:!1,audioType:!0,aboutType:!1,maskType:!1,openType:!0,baseURL:v.baseURL,audio_url:v.baseURL+"/download",advanced_final_version_url:v.baseURL+"/download",dotList:[],lineData:["None","C-3","D-3","E-3","F-3","G-3","A-3","B-3","C-4","D-4","E-4","F-4","G-4","A-4","B-4","C-5"],params:{notes:[]},dispalyList:[],backNotes:[],num:15,playStatus:"over"}},watch:{},methods:{showPlay:function(){this.showPlayBoo=!0},closePlay:function(){this.showPlayBoo=!1},showDelete:function(){this.showDeleteBoo=!0},closeDelete:function(){this.showDeleteBoo=!1},showHelp:function(){this.showHelpBoo=!0},closeHelp:function(){this.showHelpBoo=!1},showDraw:function(){1==this.removing?this.showEraseBoo=!0:this.showDrawBoo=!0},closeDraw:function(){this.showEraseBoo=!1,this.showDrawBoo=!1},showDownload:function(){this.showDownloadBoo=!0},closeDownload:function(){this.showDownloadBoo=!1},showMix:function(){this.showMixBoo=!0},closeMix:function(){this.showMixBoo=!1},closeIcoClick:function(){this.aboutType=!1},aboutClick:function(){this.aboutType=!0},modeChange:function(){this.removing=!this.removing},showLegend:function(){this.legendshow=!this.legendshow},handlerPlay:function(){console.log("走着路--------------");var t=document.querySelector("#my_audio");t.currentTime=0,console.log("点击当前时间",t.currentTime);var e=this;if(this.playStatus=t.paused,!t.paused)return e.moveAnType=!1,e.timeType=1,e.audio_url=this.baseURL+"/download?t="+(new Date).getTime(),void(e.playStatus="over");console.log("play has been paused."),e.timeType=0,e.isSafari=/constructor/i.test(window.HTMLElement)||function(t){return"[object SafariRemoteNotification]"===t.toString()}(!window["safari"]||"undefined"!==typeof safari&&safari.pushNotification),1==e.isSafari&&(e.timeDown=2600),setTimeout((function(){console.log("timeType",e.timeType),0==e.timeType?e.moveAnType=!0:e.moveAnType=!1}),e.timeDown),t.play(),e.playStatus="doing",t.addEventListener("ended",(function(){e.playStatus="over",console.log("this.moveAnType5555555",this.moveAnType)}))},deleteData:function(){this.playType=!1,this.mixType=!1,this.dotList=[],this.dispalyList=[],this.params={notes:[]};var t=document.querySelector("#my_audio");t.pause(),this.playStatus=t.paused,this.playStatus="over",this.moveAnType=!1,t.currentTime=0},mixHas:function(){var t=this;this.initialized=!0,this.maskType=!0,this.audioType=!1,console.log("the parameter is "+this.params),L(this.params).then((function(e){t.playType=!0,t.dotList=f.yinListToPosition(e.notes,t.lineData),t.dispalyList=f.yinListToDisplayList(e.notes,t.lineData),t.maskType=!1,t.audioType=!0,t.audio_url=t.baseURL+"/download?t="+(new Date).getTime()}))},getAllPosition:function(t){0==this.initialized&&(this.playType=!1);var e=document.querySelector("#my_audio");e.pause(),this.playStatus=e.paused,this.moveAnType=!1,this.playStatus="over",this.params.notes=f.positionListToYinList(t,this.lineData),console.log("param"+this.params.notes),this.params.notes.length>0?this.mixType=!0:this.mixType=!1,this.dispalyList=f.yinListToDisplayList(this.params.notes,this.lineData)}},mounted:function(){console.log(1111111111)}},D=b,S=(o("536a"),Object(d["a"])(D,n,a,!1,null,null,null)),_=S.exports,k=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{align:"center"}},[o("div",{staticClass:"menuBtn"},[t._m(0),o("router-link",{attrs:{to:"/Classical"}},[o("span",[o("i",{staticClass:"swipeIcon icon"}),t._v("Classical")])]),o("router-link",{attrs:{to:"/Advanced"}},[o("span",[o("i",{staticClass:"clickIcon icon"}),t._v("Advanced")])])],1),o("router-view")],1)},B=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("span",[o("a",{staticClass:"aicon",attrs:{href:"https://musicwai.squarespace.com",target:"_blank"}},[t._v("Learn More")])])}],M={},I=M,A=(o("f9ed"),Object(d["a"])(I,k,B,!1,null,"45acb89e",null)),P=A.exports,Y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.maskType?o("div",{staticClass:"mask"},[o("i")]):t._e(),t.aboutType?o("div",{staticClass:"aboutMask"},[o("div",{staticClass:"aboutMes"},[o("i",{staticClass:"closeIco",on:{click:t.closeIcoClick}}),o("p",[t._v("1. Draw music notes by single-click-add and double-click-remove.")]),o("p",[t._v("2. Draw music notes by humming a part of melody.")]),o("p",[t._v("3. Click Play or Download button after all finished.")])])]):t._e(),o("div",{staticClass:"legendBtn"},[o("span",{on:{click:t.showLegend}},[o("i",{staticClass:"keyIcon icon"}),t._v("Legend")])]),o("div",{staticClass:"legendClassical"},[t.legendshow?o("span",{on:{mouseover:t.showMix,mouseout:t.closeMix}},[o("i",{staticClass:"saveIcon icon"})]):t._e(),t.legendshow?o("span",{on:{mouseover:t.showPlay,mouseout:t.closePlay}},[o("i",{staticClass:"icon",class:t.playStatus})]):t._e(),t.legendshow?o("span",{on:{mouseover:t.showDelete,mouseout:t.closeDelete}},[o("i",{staticClass:"deleteIcon icon"})]):t._e(),t.legendshow?o("span",{on:{mouseover:t.showHelp,mouseout:t.closeHelp}},[t._v("help")]):t._e(),t.legendshow?o("span",{on:{mouseover:t.showDownload,mouseout:t.closeDownload}},[o("i",{staticClass:"downloadIcon icon"})]):t._e()]),o("div",{staticClass:"legendClassicalText"},[t.showMixBoo?o("span",[t._v("Mix - To process the input and generate a complete music")]):t._e(),t.showPlayBoo?o("span",[t._v("Play - To play the music generated by Mix")]):t._e(),t.showDeleteBoo?o("span",[t._v("Delete - To delete all dots on the canvas")]):t._e(),t.showHelpBoo?o("span",[t._v("Help - To view the complete tutorial")]):t._e(),t.showDownloadBoo?o("span",[t._v("Download - To download the music file you just created")]):t._e()]),o("div",{staticClass:"title"},[t._v("Click!")]),o("div",{ref:"app",staticClass:"appModule"},[o("div",{staticClass:"lineMesClassical"},t._l(t.lineData,(function(e,i){return o("span",{key:i},[o("a",[t._v(t._s(e))])])})),0),o("div",{attrs:{id:"app"}},[o("AdvancedMusicalNote",{attrs:{moveAnType:t.moveAnType,dotIndexList:t.dotList},on:{onChange:t.getAllPosition}}),o("div",{staticClass:"positionMes"},[o("ul",t._l(t.dispalyList,(function(e,i){return o("li",{key:i},[o("span",[t._v(t._s(e.titleY))]),o("span",[t._v(t._s(e.titleX))])])})),0)]),o("div",{staticClass:"positionBtn"},[t.recorderStatus?o("span",[t._v(t._s(t.num+"s")+" ")]):o("span",{on:{click:function(e){return e.preventDefault(),t.startRecord(e)}}},[o("i",{staticClass:"recordIcon icon"})]),t.openType?o("span",{on:{click:t.mixHas}},[o("i",{staticClass:"saveIcon icon"})]):o("span",{staticStyle:{opacity:"0.5",cursor:"not-allowed"}},[o("i",{staticClass:"saveIcon icon"})]),t.playType?o("span",{on:{click:t.handlerPlay}},[o("i",{staticClass:"icon",class:t.playStatus})]):o("span",{staticStyle:{opacity:"0.5",cursor:"not-allowed"}},[o("i",{staticClass:"icon",class:t.playStatus})]),t.openType?o("span",{on:{click:t.deleteData}},[o("i",{staticClass:"deleteIcon icon"})]):o("span",{staticStyle:{opacity:"0.5",cursor:"not-allowed"}},[o("i",{staticClass:"deleteIcon icon"})]),t.audioType?o("audio",{attrs:{id:"my_audio",src:t.audio_url}}):t._e(),t.openType?o("span",{on:{click:t.aboutClick}},[t._v("help")]):o("span",{staticStyle:{opacity:"0.5",cursor:"not-allowed"}},[t._v("help")]),t.playType?o("span",[o("a",{attrs:{href:t.classical_final_version_url,download:""}},[o("i",{staticClass:"downloadIcon icon"})])]):t._e()])],1)])])},R=[],E=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"canvasWrap",staticClass:"canvasWrap",style:"width:"+t.width+"px"},[o("canvas",{ref:"musicalCanvas",style:{background:t.backgroudColor,width:"3225px",height:this.canvasHeight+"px"}})])},X=[],H={props:{moveAnType:Boolean,backgroudColor:{type:String,default:"#FFFFFF"},width:{type:Number,default:1e3},height:{type:Number,default:550},ylineColor:{type:String,default:"#ccc"},xlineColor:{type:String,default:"#ccc"},bottomLineColor:{type:String,default:"red"},topLineColor:{type:String,default:"#5883ea"},curveLineColor:{type:String,default:"#9999FF"},dotColor:{type:String,default:"#9999FF"},dotSize:{type:Number,default:4},dotIndexList:{type:Array,default:function(){return[]}},lockView:{type:Boolean,default:!1}},data:function(){return{canvasWidth:3225,ctx:"",xCoordinate:[],yCoordinate:[],spanX:3225/145,spanY:15,leftTitle:[],bottomTitle:[],dotList:[],offsetY:4}},computed:{canvasHeight:function(){return this.height}},watch:{dotIndexList:function(t){this.indexListToDotList(t)}},mounted:function(){this.initCanvas(),this.indexListToDotList(this.dotIndexList)},methods:{initCanvas:function(){var t=this.$refs.musicalCanvas;this.ctx=t.getContext("2d"),t.width=this.canvasWidth,t.height=this.canvasHeight,this.addlister(t),this.redraw()},createTitle:function(){for(var t=[],e=-16;e<=127;e++)t.push(e),console.log(e+"\n");for(var o=[],i=1;i<=35;i++)o.push(i);this.bottomTitle=t,this.leftTitle=o},redraw:function(){this.ctx.clearRect(0,0,this.canvasWidth,this.canvasHeight),this.createTitle(),this.drawTitle(),this.drawCoordinateLine(),this.drawDotList()},drawTitle:function(){var t=this;this.leftTitle.map((function(e,o){t.ctx.fillStyle="#fff",t.ctx.textAlign="center",t.ctx.fillText(o,10,t.height-e*t.spanY-t.offsetY-4)})),this.bottomTitle.map((function(e,o){t.ctx.fillStyle="#333333",t.ctx.fillText(.25*e,t.spanX*(o+1)+t.spanX/2,t.height-4),t.ctx.textAlign="center"}))},drawCoordinateLine:function(){var t=this;this.leftTitle.map((function(e,o){var i=0,s=t.height-e*t.spanY-t.offsetY,n=t.canvasWidth,a=t.height-e*t.spanY-t.offsetY;t.ctx.strokeStyle=t.xlineColor,2==e&&(t.ctx.strokeStyle=t.bottomLineColor),18==e&&(t.ctx.strokeStyle=t.topLineColor),17==e&&(t.ctx.strokeStyle=t.topLineColor),t.ctx.beginPath(),t.ctx.moveTo(i,s),t.ctx.lineTo(n,a),t.ctx.stroke(),t.ctx.closePath()})),this.bottomTitle.map((function(e,o){var i=(o+1)*t.spanX,s=0,n=(o+1)*t.spanX,a=t.canvasHeight;t.ctx.strokeStyle=t.ylineColor,16==o&&(t.ctx.strokeStyle="#000000"),t.ctx.beginPath(),t.ctx.moveTo(i,s),t.ctx.lineTo(n,a),t.ctx.stroke(),t.ctx.closePath()}))},drawDotList:function(){this.dotList.length;for(var t in this.dotList){var e=this.dotList[t];if(this.drawDot(e.x,e.y,e.type),t>0){var o=this.dotList[t-1],i=this.dotList[t],s={x:o.x,y:o.y},n={x:i.x,y:i.y},a=i.x-o.x;i.y,o.y;i.y<o.y?(s={x:o.x+a/4,y:o.y},n={x:i.x-a/4,y:i.y}):i.y>o.y&&(s={x:o.x+a/4,y:o.y},n={x:i.x-a/4,y:i.y}),this.drawCurve(o.x,o.y,s.x,s.y,n.x,n.y,i.x,i.y)}}},drawDot:function(t,e){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"solid";this.ctx.fillStyle=this.dotColor,this.ctx.strokeStyle=this.dotColor,this.ctx.beginPath(),this.ctx.arc(t,e,this.dotSize,0,2*Math.PI),"solid"===o?this.ctx.fill():"hollow"==o&&this.ctx.stroke()},addDot:function(t){if(t.offsetX&&t.offsetY){var e=t.offsetX;console.log("e.offsetx = "+e);var o=t.offsetY;if(console.log("e.offsety = "+o),e<this.spanX)return;if(o>this.canvasHeight-this.spanY)return;var i=this.correctDotPosition(e,o),s=!1,n=-1;this.dotList.map((function(t,e){t.x==i.x&&(s=!0,n=e)})),s?this.dotList[n]=i:this.dotList.push(i),this.dotList.sort((function(t,e){return t.x-e.x})),this.redraw(),this.lockView&&this.scrollToMid(i.x,i.y),this.dotListToIndexList()}},removeDot:function(t){if(t.offsetX&&t.offsetY){var e=t.offsetX,o=t.offsetY;if(e<this.spanX)return;if(o>this.canvasHeight-this.spanY)return;var i=this.correctDotPosition(e,o),s=!1,n=-1;this.dotList.map((function(t,e){Math.abs(t.x-i.x)<5&&Math.abs(t.y-i.y)<5&&(s=!0,n=e)})),s&&(this.dotList.splice(n,1),this.dotList.sort((function(t,e){return t.x-e.x})),this.redraw(),this.lockView&&this.scrollToMid(i.x,i.y),this.dotListToIndexList())}},correctDotPosition:function(t,e){var o=parseInt((this.canvasHeight-e)/this.spanY),i=o*this.spanY,s="solid";1==o&&(s="hollow"),e=this.canvasHeight-i-this.spanY/2-this.dotSize/2;var n=t%this.spanX;n>this.spanY/2?t-=n-this.spanX/2:t+=this.spanX/2-n;var a={x:t,y:e,type:s};return a},drawCurve:function(t,e,o,i,s,n,a,r){this.ctx.fillStyle=this.curveLineColor,this.ctx.strokeStyle=this.curveLineColor,this.ctx.beginPath(),this.ctx.moveTo(t,e),this.ctx.bezierCurveTo(o,i,s,n,a,r),this.ctx.stroke()},addLine:function(t,e,o,i){this.ctx.fillStyle=this.curveLineColor,this.ctx.strokeStyle=this.curveLineColor,this.ctx.lineWidth=2,this.ctx.beginPath(),this.ctx.moveTo(t,e),this.drawLine(o,i)},drawLine:function(t,e){this.ctx.lineTo(t,e),this.ctx.stroke()},addlister:function(t){t.addEventListener("click",this.addDot),t.addEventListener("dblclick",this.removeDot),t.addEventListener("mousemove",this.onMouseEvent)},scrollToMid:function(t,e){if(this.dotList.length){var o=this.width/2;if(t>o){var i=t-o;this.$refs.canvasWrap.scrollLeft=i}else this.$refs.canvasWrap.scrollLeft=0}},dotListToIndexList:function(){var t=this,e=this.dotList.map((function(e){console.log("the itemx is "+e.x),console.log("the itemy is "+e.y),console.log("the span x is "+t.spanX);var o=parseInt((t.canvasHeight-e.y-t.spanY)/t.spanY);if(e.x-19*t.spanX<=0){var i=parseInt((e.x-19*t.spanX)/t.spanX);return{x:i,y:o}}var s=parseInt((e.x-18*t.spanX)/t.spanX);return{x:s,y:o}}));this.$emit("onChange",e),console.log("list==========",e)},indexListToDotList:function(t){var e=this;this.dotList=t.map((function(t){var o=t.x*e.spanX+18*e.spanX+e.spanX/2,i=e.canvasHeight-(t.y*e.spanY+e.spanY+e.spanY/2+e.offsetY-.5);return{x:o,y:i,type:0==t.y?"hollow":"solid"}})),this.redraw()},onMouseEvent:function(t){if(t.offsetX&&t.offsetY){var e=t.offsetX,o=t.offsetY;if(e<this.spanX)return;if(o>this.canvasHeight-this.spanY)return;var i=this.correctDotPosition(e,o),s=parseInt((i.x-this.spanX)/this.spanX),n=parseInt((this.canvasHeight-i.y-this.spanY)/this.spanY),a={x:s,y:n,event:t};this.$emit("mouseEvent",a)}}}},U=H,F=(o("45f9"),Object(d["a"])(U,E,X,!1,null,"53553a4f",null)),O=F.exports;o("c19f"),o("ace4"),o("b0c0"),o("cfc3"),o("9a8c"),o("a975"),o("735e"),o("c1ac"),o("d139"),o("3a7b"),o("d5d6"),o("82f8"),o("e91f"),o("60bd"),o("5f96"),o("3280"),o("3fcc"),o("ca91"),o("25a1"),o("cd26"),o("3c5d"),o("2954"),o("649e"),o("219c"),o("170b"),o("b39a"),o("72f7");window.URL=window.URL||window.webkitURL,navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia;var W=function(t,e){e=e||{},e.sampleBits=e.sampleBits||16,e.sampleRate=e.sampleRate||16e3;var o=new(window.webkitAudioContext||window.AudioContext),i=o.createMediaStreamSource(t),s=o.createScriptProcessor||o.createJavaScriptNode,n=s.apply(o,[4096,1,1]),a={size:0,buffer:[],inputSampleRate:o.sampleRate,inputSampleBits:16,outputSampleRate:e.sampleRate,oututSampleBits:e.sampleBits,input:function(t){this.buffer.push(new Float32Array(t)),this.size+=t.length},compress:function(){for(var t=new Float32Array(this.size),e=0,o=0;o<this.buffer.length;o++)t.set(this.buffer[o],e),e+=this.buffer[o].length;var i=parseInt(this.inputSampleRate/this.outputSampleRate),s=t.length/i,n=new Float32Array(s),a=0,r=0;while(a<s)n[a]=t[r],r+=i,a++;return n},encodeWAV:function(){var t=Math.min(this.inputSampleRate,this.outputSampleRate),e=Math.min(this.inputSampleBits,this.oututSampleBits),o=this.compress(),i=o.length*(e/8),s=new ArrayBuffer(44+i),n=new DataView(s),a=1,r=0,l=function(t){for(var e=0;e<t.length;e++)n.setUint8(r+e,t.charCodeAt(e))};if(l("RIFF"),r+=4,n.setUint32(r,36+i,!0),r+=4,l("WAVE"),r+=4,l("fmt "),r+=4,n.setUint32(r,16,!0),r+=4,n.setUint16(r,1,!0),r+=2,n.setUint16(r,a,!0),r+=2,n.setUint32(r,t,!0),r+=4,n.setUint32(r,a*t*(e/8),!0),r+=4,n.setUint16(r,a*(e/8),!0),r+=2,n.setUint16(r,e,!0),r+=2,l("data"),r+=4,n.setUint32(r,i,!0),r+=4,8===e)for(var c=0;c<o.length;c++,r++){var h=Math.max(-1,Math.min(1,o[c])),d=h<0?32768*h:32767*h;d=parseInt(255/(65535/(d+32768))),n.setInt8(r,d,!0)}else for(c=0;c<o.length;c++,r+=2){h=Math.max(-1,Math.min(1,o[c]));n.setInt16(r,h<0?32768*h:32767*h,!0)}return new Blob([n],{type:"audio/wav"})}};this.start=function(){i.connect(n),n.connect(o.destination)},this.stop=function(){n.disconnect(),n.src=window.URL.createObjectURL(a.encodeWAV())},this.getBlob=function(){return this.stop(),a.encodeWAV()},this.upload=function(t,e){var o=new FormData;o.append("audioData",this.getBlob());var i=new XMLHttpRequest;e&&(i.upload.addEventListener("progress",(function(t){e("uploading",t)}),!1),i.addEventListener("load",(function(t){e("ok",t)}),!1),i.addEventListener("error",(function(t){e("error",t)}),!1),i.addEventListener("abort",(function(t){e("cancel",t)}),!1)),i.open("POST",t),i.send(o)},n.onaudioprocess=function(t){a.input(t.inputBuffer.getChannelData(0))}};W.throwError=function(t){throw alert(t),new function(){this.toString=function(){return t}}},W.canRecording=null!=navigator.getUserMedia,W.get=function(t,e){if(t){if(!navigator.getUserMedia)return void W.throwErr("当前浏览器不支持录音功能。");navigator.getUserMedia({audio:!0},(function(o){var i=new W(o,e);t(i)}),(function(t){switch(t.code||t.name){case"PERMISSION_DENIED":case"PermissionDeniedError":W.throwError("用户拒绝提供信息。");break;case"NOT_SUPPORTED_ERROR":case"NotSupportedError":W.throwError("浏览器不支持硬件设备。");break;case"MANDATORY_UNSATISFIED_ERROR":case"MandatoryUnsatisfiedError":W.throwError("无法发现指定的硬件设备。");break;default:W.throwError("无法打开麦克风。异常信息:"+(t.code||t.name));break}}))}};var N=W,j={components:{AdvancedMusicalNote:O},data:function(){return{isChrome:!1,showPlayBoo:!1,showDeleteBoo:!1,showHelpBoo:!1,showDownloadBoo:!1,showMixBoo:!1,legendshow:!1,timeType:0,moveAnType:!1,playType:!1,audioType:!0,aboutType:!1,maskType:!1,openType:!0,baseURL:v.baseURL,audio_url:v.baseURL+"/downloadAd",classical_final_version_url:v.baseURL+"/downloadAd",dotList:[],lineData:["None","B-1","C-2","D-2","E-2","F-2","G-2","A-2","B-2","C-3","D-3","E-3","F-3","G-3","A-3","B-3","C-4","D-4","E-4","F-4","G-4","A-4","B-4","C-5","D-5","E-5","F-5","G-5","A-5","B-5","C-6","D-6","E-6","F-6","G-6"],params:{notes:[]},dispalyList:[],backNotes:[],num:15,recorderStatus:!1,recorder:null,playStatus:"over"}},methods:{showLegend:function(){this.legendshow=!this.legendshow,this.isChrome=!!window.chrome&&(!!window.chrome.webstore||!!window.chrome.runtime),console.log("Is Chrome? "+this.isChrome)},showPlay:function(){this.showPlayBoo=!0},closePlay:function(){this.showPlayBoo=!1},showDelete:function(){this.showDeleteBoo=!0},closeDelete:function(){this.showDeleteBoo=!1},showHelp:function(){this.showHelpBoo=!0},closeHelp:function(){this.showHelpBoo=!1},showDownload:function(){this.showDownloadBoo=!0},closeDownload:function(){this.showDownloadBoo=!1},showMix:function(){this.showMixBoo=!0},closeMix:function(){this.showMixBoo=!1},closeIcoClick:function(){this.aboutType=!1},aboutClick:function(){this.aboutType=!0},handlerPlay:function(){console.log("走着路--------------");var t=document.querySelector("#my_audio");t.currentTime=0,console.log("点击当前时间",t.currentTime);var e=this;if(this.playStatus=t.paused,!t.paused)return e.moveAnType=!1,e.timeType=1,e.audio_url=this.baseURL+"/downloadAd?t="+(new Date).getTime(),void(e.playStatus="over");console.log("play has been paused."),e.timeType=0,t.play(),e.playStatus="doing",t.addEventListener("ended",(function(){e.playStatus="over",console.log("this.moveAnType5555555",this.moveAnType)}))},deleteData:function(){this.playType=!1,this.dotList=[],this.dispalyList=[],this.params={notes:[]};var t=document.querySelector("#my_audio");t.pause(),this.playStatus=t.paused,this.playStatus="over",this.moveAnType=!1,t.currentTime=0},startRecord:function(){if(this.isChrome=!!window.chrome&&(!!window.chrome.webstore||!!window.chrome.runtime),1==this.isChrome){this.playType=!1,this.openType=!1;var t=this;t.num=22,N.get((function(e){t.recorder=e,t.recorder.start(),t.TimeDown()}))}else alert("Your browser does not alow the recording function, please switch to Chrome .")},TimeDown:function(){var t=this;0!=t.num?(this.recorderStatus=!0,t.num--):this.recorderStatus=!1,setTimeout((function(){0!=t.num?(this.recorderStatus=!0,t.TimeDown()):t.uploadAudio()}),1e3)},uploadAudio:function(){var t=this;this.maskType=!0;var e=this;this.recorderStatus=!1;var o=new FormData;o.append("audioData",this.recorder.getBlob()),T(o).then((function(o){e.params=o,t.dotList=f.yinListToPosition(o.notes,t.lineData),t.dispalyList=f.yinListToDisplayList(o.notes,t.lineData),t.maskType=!1,t.audioType=!0,t.openType=!0}))},mixHas:function(){var t=this;this.maskType=!0,this.audioType=!1,C(this.params).then((function(e){t.playType=!0,t.dotList=f.yinListToPosition(e.notes,t.lineData),t.dispalyList=f.yinListToDisplayList(e.notes,t.lineData),t.maskType=!1,t.audioType=!0,t.audio_url=t.baseURL+"/downloadAd?t="+(new Date).getTime()}))},getAllPosition:function(t){console.log("list==========",t),this.playType=!1;var e=document.querySelector("#my_audio");e.pause(),this.playStatus=e.paused,this.moveAnType=!1,this.playStatus="over",this.params.notes=f.positionListToYinList(t,this.lineData),this.dispalyList=f.yinListToDisplayList(this.params.notes,this.lineData)}},mounted:function(){console.log(1111111111)}},z=j,$=(o("6567"),Object(d["a"])(z,Y,R,!1,null,null,null)),V=$.exports;i["a"].use(s["a"]);var G=new s["a"]({routes:[{path:"/",component:_},{path:"/Classical",component:_},{path:"/Advanced",component:V}]});i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(P)},router:G}).$mount("#app")},6567:function(t,e,o){"use strict";var i=o("76ee"),s=o.n(i);s.a},"6dbb":function(t,e,o){},"76ee":function(t,e,o){},"7a49":function(t,e,o){"use strict";var i=o("6dbb"),s=o.n(i);s.a},d7be:function(t,e,o){},f9ed:function(t,e,o){"use strict";var i=o("4037"),s=o.n(i);s.a}});
//# sourceMappingURL=app.891e02f5.js.map


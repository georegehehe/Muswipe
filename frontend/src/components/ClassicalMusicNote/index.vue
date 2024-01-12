/**
 * @name 音乐乐谱手动谱曲工具
 * example
 * 事件 mouseEvent  鼠标移动事件{x,y,event}
 * 事件 onChange 点位置或者数量改变事件
 * 属性 dotIndexList 传递坐标值[{x1,y1},{x2,y2}]
 */


/* eslint-disable*/
<template>
  <div ref="canvasWrap" :style="'width:'+width+'px'" class="canvasWrap">
<!--      注释掉还不完善的进度条-->
			<div class="moveLine" :class="{'moveAn':moveAnType}"></div>
    <canvas
      :style="{'background':backgroudColor,'width':'975px','height':this.canvasHeight+'px'}"
      ref="musicalCanvas"
    ></canvas>
  </div>
</template>

<script>
export default {
  props: {
    moveAnType:Boolean,
    backgroudColor:{
      type:String,
      default:'#FFFFFF'
    },
    /** canvas的宽度的颜色*/
    width: {
      type: Number,
      default: 1000
    },
    /** canvas的线的颜色*/

    height: {
      type: Number,
      default: 550
    },
    /** y线的颜色*/

    ylineColor: {
      type: String,
      default: "#ccc"
    },
    /** x线的颜色*/

    xlineColor: {
      type: String,
      default: "#ccc"
    },
    bottomLineColor: {
      type: String,
      default: "red"
    },
    topLineColor: {
      type: String,
      default: "#5883ea"
    },
    /** 曲线的颜色*/

    curveLineColor: {
      type: String,
      default: "#9999FF"
    },
    /** 点的颜色*/

    dotColor: {
      type: String,
      default: "#9999FF"
    },
    /** 点的大小*/

    dotSize: {
      type: Number,
      default: 4
    },
    dotIndexList: {
      type: Array,
      default: ()=>{
        return []
      }
    },
	modeofapp: {
	  type: Boolean,
	  default: false
	},
    /** 开始此属性 页面会跟随随后的点移动*/
    lockView:{
      type: Boolean,
      default: false
    }

  },
  data() {
    return {
      // moveAnType:false,
      canvasWidth: 975,
      ctx: "",
      xCoordinate: [],
      yCoordinate: [],
      spanX: 15,
      spanY: 32,
      leftTitle: [],
      bottomTitle: [],
      /** 点的位置坐标列表 */
	  recordList: [],
      dotList: [],
      offsetY: 4,
	  recording: false,
    };
  },
  computed:{
   canvasHeight(){
      return this.height
  }
  },
  watch: {
    /*
     * 监听外部传递的参数值
     */

    dotIndexList: function(list) {
      this.indexListToDotList(list);
    },

  },

  mounted() {

    this.initCanvas();
    this.indexListToDotList(this.dotIndexList);
  },

  methods: {
    initCanvas() {
      const c = this.$refs.musicalCanvas;
      this.ctx = c.getContext("2d");
      c.width = this.canvasWidth;
      c.height = this.canvasHeight;
      this.addlister(c);
      this.redraw();
    },

    /**
     * 创建标题坐标
     */

    createTitle() {
      let xList = [];
      for (let x = 0; x <= 64; x++) {
        xList.push(x);
      }

      let yList = [];
      for (let y = 1; y <= 16; y++) {
        yList.push(y);
      }
      this.bottomTitle = xList;

      this.leftTitle = yList;
    },

    /**
     *  重新绘制
     */
    redraw() {
      this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
      this.createTitle();
      //this.drawTitle();
      this.drawCoordinateLine();
      this.drawDotList();
    },

    /**
     * 绘制标题
     */

    drawTitle() {
      this.leftTitle.map((index, item) => {
        this.ctx.fillStyle = "#fff";
        this.ctx.textAlign = "center";
        this.ctx.fillText(
          item,
          10,
          this.height - index * this.spanY - this.offsetY - 4
        );
      });
      this.bottomTitle.map((item, index) => {
        this.ctx.fillStyle = "#333333";
        this.ctx.fillText(
          (item) *0.5,
          this.spanX * (index+1) + this.spanX / 2.0,
          this.height - 4
        );
        this.ctx.textAlign = "center";
      });
    },

    /**
     * 绘制表现
     */

    drawCoordinateLine() {
      // 绘制坐标横线
      this.leftTitle.map((index, item) => {
        let x1 = 15;
        let y1 = this.height - index * this.spanY - this.offsetY;
        let x2 = this.canvasWidth;
        let y2 = this.height - index * this.spanY - this.offsetY;
		let needraw = false;
		this.ctx.lineWidth = 2;
		if (index == 1) {
		  needraw = true
		  this.ctx.strokeStyle = this.bottomLineColor;
		  }
        if (index == 2) {
		  needraw = true
          this.ctx.strokeStyle = this.bottomLineColor;
        }
        if (index ==10) {
	      needraw = true
          this.ctx.strokeStyle = this.topLineColor;
        }
        if (index ==9) {
	      needraw = true
          this.ctx.strokeStyle = this.topLineColor;
        }

		if (needraw==true){
		this.ctx.beginPath();
		this.ctx.moveTo(x1, y1);
		this.ctx.lineTo(x2, y2);
		this.ctx.stroke();
		this.ctx.closePath();
		}
		});
		this.ctx.strokeStyle = "#000000";
		this.ctx.beginPath();
		this.ctx.moveTo(15,4)
	    this.ctx.lineTo(this.canvasWidth,4);
		this.ctx.stroke();
		this.ctx.moveTo(this.canvasWidth-1,4)
		this.ctx.lineTo(this.canvasWidth-1,515);
		this.ctx.stroke();
		this.ctx.moveTo(15,4)
		this.ctx.lineTo(15,515);
		this.ctx.stroke();
		this.ctx.closePath();


    },

    /**
     * 绘制点
     */
    drawDotList() {
      const length = this.dotList.length;
      for (let i in this.dotList) {
        let item = this.dotList[i];
        this.drawDot(item.x, item.y, item.type);
        if (i > 0) {
          let dot1 = this.dotList[i - 1];
          let dot2 = this.dotList[i];
          /** 动态计算二次贝塞尔曲线控制点*/
          let c1 = {
            x: dot1.x,
            y: dot1.y
          };
          let c2 = {
            x: dot2.x,
            y: dot2.y
          };
          let deltaX = dot2.x - dot1.x
          let deltaY = dot2.y - dot1.y
          // 上坡
          if (dot2.y < dot1.y) {
            c1 = {
              x: dot1.x + deltaX/4.0,
              y: dot1.y
            };
            c2 = {
              x: dot2.x - deltaX/4.0,
              y: dot2.y
            };
            // 下坡
          } else if (dot2.y > dot1.y) {
            c1 = {
              x: dot1.x +  deltaX/4.0,
              y: dot1.y
            };
            c2 = {
              x: dot2.x -  deltaX/4.0,
              y: dot2.y
            };
          }

          /** 绘制贝塞尔曲线*/
          this.drawCurve(
            dot1.x,
            dot1.y,
            c1.x,
            c1.y,
            c2.x,
            c2.y,
            dot2.x,
            dot2.y
          );
        }
      }
    },

    /**
     * 绘制一个点
     */
    drawDot(x, y, type = "solid") {
      // eslint-disable-next-line
      this.ctx.fillStyle = this.dotColor;
      this.ctx.strokeStyle = this.dotColor;
      this.ctx.beginPath();
      this.ctx.arc(x, y, this.dotSize, 0, 2 * Math.PI);
      if (type === "solid") {
        this.ctx.fill();
      } else if (type == "hollow") {
        this.ctx.stroke();
      }
    },

    /**
     * 添加一个点
     */
	startrecording(e) {
		this.recording = true
		/**this.recording = true
		while (this.recording) {
			let needreplace = false;
			if (e.offsetX && e.offsetY) {
			  let x = e.offsetX;
			  console.log("the offset = " + x);
			  let y = e.offsetY;
			  if (x < this.spanX) {
			    continue;
			  }
			  if (y > this.canvasHeight - this.spanY) {
			    continue; }
			  let t = {
			  		x,
			  		y,
			  };
			  this.recordList.map((item) => {
			    if (item.x == t.x) {
				   needreplace = true;
				}
				
				   this.recordList.push(t);
			  		  });
		      if (needreplace = true){
				   continue;
			    }
			  else{}
				  
		console.log("the while is " + this.recordList);

			}	 		
		}
       */
	},
	finishrecording(e) {
		this.recording = false
	},
	onMouseOut(e){
		this.recording = false
	},

    addDot(e) {
	 if (this.modeofapp == false) {
      if (e.offsetX && e.offsetY) {
        let x = e.offsetX;
		console.log("e.offsetx" + x)
        let y = e.offsetY;
        if (x < this.spanX) {
          return;
        }
        if (y > this.canvasHeight - this.spanY) {
          return;
        }
		if (y < 7) {
		  return;
		}
        let dot = this.correctDotPosition(x, y);
        let isResult = false;
        let replaceIndex = -1;
        this.dotList.map((item, index) => {
          if (item.x == dot.x) {
            isResult = true;
            replaceIndex = index;
          }
        });
        if (!isResult) {
          this.dotList.push(dot);
        } else {
          this.dotList[replaceIndex] = dot;
        }

        this.dotList.sort(($1, $2) => {
          return $1.x - $2.x;
        });
        this.redraw();
        if(this.lockView){
          this.scrollToMid(dot.x, dot.y);
        }
        this.dotListToIndexList();
      }
	  }
    },

    /**
     * 删除一个点
     */
    removeDot(e) {
      if (e.offsetX && e.offsetY) {
        let x = e.offsetX;
        let y = e.offsetY;
        if (x < this.spanX) {
          return;
        }
        if (y > this.canvasHeight - this.spanY) {
          return;
        }
        let dot = this.correctDotPosition(x, y);
        let isResult = false;
        let replaceIndex = -1;

        this.dotList.map((item, index) => {
          if (Math.abs(item.x - dot.x)< 5) {
            isResult = true;
            replaceIndex = index;
          }
        });

        if (isResult) {
          this.dotList.splice(replaceIndex, 1);
          this.dotList.sort(($1, $2) => {
            return $1.x - $2.x;
          });


          this.redraw();
           if(this.lockView){
            this.scrollToMid(dot.x, dot.y);
        }
          this.dotListToIndexList();
        }
      }
    },

    /**
     * 纠正点坐标位置算法
     */
    correctDotPosition(x, y) {
      let n = parseInt((this.canvasHeight - y) / this.spanY);
      let deltaY = n * this.spanY;
      let type = "solid";
      if (n == 1) {
        type = "hollow";
      }

      y = this.canvasHeight - deltaY - this.spanY / 2.0 - this.dotSize / 2.0;
      let deltaX = x % this.spanX;
      if (deltaX > this.spanY / 2.0) {
        x = x - (deltaX - this.spanX / 2.0);
      } else {
        x = x + (this.spanX / 2.0 - deltaX);
      }
      /** 增加的点坐标 */
	  console.log("the dot position is " + x);
      let dot = {
        x,
        y,
        type: type
      };
      return dot;
    },

    /**
     * 绘制曲线
     */
    drawCurve(x1, y1, c1x, c1y, c2x, c2y, x2, y2) {
      this.ctx.fillStyle = this.curveLineColor;
      this.ctx.strokeStyle = this.curveLineColor;
      this.ctx.beginPath();
      this.ctx.moveTo(x1, y1);
      this.ctx.bezierCurveTo(c1x, c1y, c2x, c2y, x2, y2);
      this.ctx.stroke();
    },

    /**
     * 添加直线
     */
    addLine(x, y, px, py) {
      this.ctx.fillStyle = this.curveLineColor;
      this.ctx.strokeStyle = this.curveLineColor;
      this.ctx.lineWidth = 2;
      this.ctx.beginPath();
      this.ctx.moveTo(x, y);
      this.drawLine(px, py);
    },

    /**
     *  绘制直线
     */
    drawLine(x, y) {
      this.ctx.lineTo(x, y);
      this.ctx.stroke();
    },

    /**
     *  增加事件监听
     */
    addlister(c) {
      c.addEventListener("mousedown", this.startrecording);
      c.addEventListener("dblclick", this.removeDot);
      c.addEventListener("mousemove",this.onMouseEvent);
	  c.addEventListener("mouseup", this.finishrecording);
	  c.addEventListener("click", this.addDot);
	  c.addEventListener("mouseout", this.onMouseOut);
    },

    /**
     *  页面随着点的位置滚动逻辑处理
     */
    scrollToMid(x, y) {
      if (this.dotList.length) {
        let origin_x = this.width / 2;
        if (x > origin_x) {
          let deltaX = x - origin_x;
          this.$refs.canvasWrap.scrollLeft = deltaX;
        } else {
          this.$refs.canvasWrap.scrollLeft = 0;
        }
      }
    },

    /**
     * 将点的位置坐标转换为索引坐标
     */
    dotListToIndexList() {
      let list = this.dotList.map(item => {
        let xIndex = (parseInt((item.x - this.spanX) / this.spanX))*2 - 1 ;
        let yIndex = parseInt(
          (this.canvasHeight - item.y - this.spanY) / this.spanY
        );
        return {
          x: xIndex,
          y: yIndex
        };
      });
      this.$emit("onChange", list);
      console.log("list==========",list)

    },

    /**
     * 将索引坐标转换为位置坐标
     * list 索引坐标的x,y
     */
    indexListToDotList(list) {
      this.dotList = list.map(item => {
		let x = 0
		if (item.x < 0) {
        x = item.x * this.spanX + 2*this.spanX + this.spanX / 2.0;
		}
		else {
		x = parseInt(item.x * 0.5) * this.spanX + 2*this.spanX + this.spanX / 2.0;
		}
        let y =
          this.canvasHeight -
          (item.y * this.spanY + this.spanY + this.spanY / 2.0 + this.offsetY - 0.5);
        return {
          x,
          y,
          type: item.y == 0 ? "hollow" : "solid"
        };
      });
      this.redraw();
    },

     /**
     * 鼠标监听事件
     *
     */

    onMouseEvent(e){
	  if (this.recording==true){
	   if (this.modeofapp == true) {
		   	 this.removeDot(e)
			 }
	   else{

			this.addDot(e)
	   }


		}

	  }






  }
};
</script>

<style scoped>
.canvasWrap {
  overflow: auto;
  position: relative;
}
    .moveLine {
        position: absolute;
        width: 16px;
        height: 530px;
        background-image: url("../../assets/moveLine.png");
        left: 19px;
        top: 0px;
        z-index: 9999;
        background-size: 100% 100%;
    }

    /* 总时长 41s*/
    .moveAn {
        animation: mymove 19.2s linear;
		animation-iteration-count: 2;
        -moz-animation: mymove 19.2s linear;
		-moz-animation-iteration-count: 2;
        -webkit-animation: mymove 19.2s linear;
		-webkit-animation-iteration-count: 2;
        -o-animation: mymove 19.2s linear;
		-o-animation-iteration-count: 2;

    }

    @keyframes mymove {
        from {
            left: 15px;
        }
        to {
            left: 975px;
        }

    }

    @-moz-keyframes mymove /* Firefox */
    {
        from {
            left: 15px;
        }
        to {
            left: 975px;
        }

    }

    @-webkit-keyframes mymove /* Safari and Chrome */
    {
        from {
            left: 15px;
        }
        to {
            left: 975px;
        }

    }

    @-o-keyframes mymove /* Opera */
    {
        from {
            left: 15px;
        }
        to {
            left: 975px;
        }
    }
</style>
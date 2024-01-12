<template>
    <div>
        <div v-if="maskType" class="mask">
            <i></i>
        </div>
        <div v-if="aboutType" class="aboutMask">
            <div class="aboutMes">
                <i class="closeIco" @click="closeIcoClick"></i>
                <p>1. Draw music notes by single-click-add and double-click-remove.</p>
                <p>2. Draw music notes by humming a part of melody.</p>
                <p>3. Click Play or Download button after all finished.</p>

            </div>
        </div>
        <div class="title">Click!</div>
        <div class="appModule" ref="app">
            <div class="lineMesClassical">
                <span v-for="(item,index) in lineData" :key="index"><a>{{item}}</a></span>
            </div>
            <div id="app">

                <AdvancedMusicalNote :moveAnType="moveAnType" :dotIndexList="dotList" @onChange="getAllPosition"/>
                <div class="positionMes">
                    <ul>
                        <li v-for="(item,index) in dispalyList" :key="index">
                            <span>{{item.titleY}}</span>
                            <span>{{item.titleX}}</span>
                        </li>
                    </ul>
                </div>
                <div class="positionBtn">
                    <!-- <span  @click.prevent="startRecord">{{recorderStatus ? num+'s' : '' }}<i v-show="!recorderStatus" class="recordIcon icon"></i></span> -->
                    <span v-if="recorderStatus">{{num+'s'}} </span>
                    <span v-else @click.prevent="startRecord"><i class="recordIcon icon"></i></span>


                    <span v-if="openType" @click="mixHas"><i class="saveIcon icon"></i></span>
                    <span v-else style="opacity: 0.5;cursor: not-allowed;"><i class="saveIcon icon"></i></span>

                    <span v-if="playType" @click="handlerPlay"><i class="icon" :class="playStatus"></i></span>
                    <span v-else style="opacity: 0.5;cursor: not-allowed;"><i class="icon"
                                                                              :class="playStatus"></i></span>

                    <span v-if="openType" @click="deleteData"><i class="deleteIcon icon"></i></span>
                    <span v-else style="opacity: 0.5;cursor: not-allowed;"><i class="deleteIcon icon"></i></span>
                    <audio v-if="audioType" id="my_audio" :src="audio_url"></audio>
                    <!-- <audio v-if="audioType" controls id="my_audio" :src="audio_url"></audio> -->
                    <span v-if="openType" @click="aboutClick">help</span>
                    <span v-else style="opacity: 0.5;cursor: not-allowed;">help</span>
                    <span v-if="playType"><a :href="classical_final_version_url" download><i
                            class="downloadIcon icon"></i></a> </span>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    // eslint-disable-next-line
    import AdvancedMusicalNote from '../AdvancedMusicalNote/index'
    import HZRecorder from '../../js/record'
    import {mixAd, humming} from '../../http/methods.js'
    import transform from '../../js/transform'
    import config from '../../config'

    export default {
        components: {
            AdvancedMusicalNote,
        },
        data() {
            return {
                timeType: 0,
                moveAnType: false,
                playType: false,
                audioType: true,
                aboutType: false,
                maskType: false,
                openType: true,
                baseURL: config.baseURL,
                audio_url: config.baseURL + '/static/finalversionAd.wav',
                classical_final_version_url: config.baseURL + '/downloadAd',
                dotList: [],
                lineData: ["None", "B-1", "C-2", "D-2", "E-2", "F-2", "G-2", "A-2", "B-2", "C-3", "D-3", "E-3", "F-3", "G-3", "A-3", "B-3", "C-4", "D-4", "E-4", "F-4", "G-4", "A-4", "B-4", "C-5", "D-5", "E-5", "F-5", "G-5", "A-5", "B-5", "C-6", "D-6", "E-6", "F-6", "G-6"],
                params: {
                    notes: []
                },
                dispalyList: [],
                backNotes: [],
                num: 15, // 按住说话时间
                recorderStatus: false,
                recorder: null,
                playStatus: 'over'
            }
        },
        methods: {
            closeIcoClick() {
                //关闭about弹框
                this.aboutType = false
            },
            aboutClick() {
                //about按钮
                this.aboutType = true
            },
            handlerPlay() {
                // 播放

                console.log("走着路--------------")
                let my_audio = document.querySelector("#my_audio");
                my_audio.currentTime = 0
                console.log("点击当前时间", my_audio.currentTime)
                let that = this;
                this.playStatus = my_audio.paused;
                if (my_audio.paused) {
                    console.log('play has been paused.')
                    that.timeType = 0
                    // 注释掉还不完善的滚动条代码,
                    // 这个moveAnType一旦被设置成 true, 就会滚动.
                    // setTimeout(function () { //混音前奏3s
                    //     console.log("timeType", that.timeType)
                    //     if (that.timeType == 0) {
                    //         // setTimeout(function(){
                    //         that.moveAnType = true
                    //         // },4000)
                    //     } else {
                    //         that.moveAnType = false
                    //     }
                    // }, 4000);

                    my_audio.play();
                    that.playStatus = 'doing';
                    my_audio.addEventListener('ended', function () {
                        that.playStatus = 'over'
                        console.log("this.moveAnType5555555", this.moveAnType)
                    })
                } else {
                    that.moveAnType = false
                    that.timeType = 1
                    // console.log("timeType222",timeType)
                    that.audio_url = this.baseURL + '/static/finalversionAd.wav?t=' + new Date().getTime();
                    // my_audio.pause();
                    that.playStatus = 'over'
                    // that.moveAnType=false
                    return
                    console.log("this.moveAnType6666", this.moveAnType)
                }

            },
            deleteData() {
                this.playType = false
                this.dotList = [];
                this.dispalyList = []
                this.params = {"notes": []}
                let my_audio = document.querySelector("#my_audio");
                my_audio.pause();
                this.playStatus = my_audio.paused;
                this.playStatus = 'over'
                this.moveAnType = false
                my_audio.currentTime = 0

            },
            // 开始录音
            startRecord() {
                // playType:false,
                this.playType = false
                this.openType = false
                let that = this;
                // 录音时间长度
                that.num = 22;
                HZRecorder.get(function (rec) {
                    that.recorder = rec;
                    that.recorder.start();
                    that.TimeDown();

                });
            },
            TimeDown() {
                let that = this;
                if (that.num != 0) {
                    this.recorderStatus = true
                    that.num--;
                } else {
                    this.recorderStatus = false
                }
                setTimeout(function () {
                    if (that.num != 0) {
                        this.recorderStatus = true
                        that.TimeDown();
                    } else {
                        that.uploadAudio();
                    }
                }, 1000)

            },
            uploadAudio() {
                this.maskType = true
                let that = this;
                this.recorderStatus = false;
                let path;
                var fd = new FormData();
                fd.append("audioData", this.recorder.getBlob());
                humming(fd).then(res => {
                    that.params = res;
                    this.dotList = transform.yinListToPosition(res.notes, this.lineData)
                    /** 服务器返回的数据转换为显示的数据*/
                    this.dispalyList = transform.yinListToDisplayList(res.notes, this.lineData)
                    this.maskType = false
                    this.audioType = true
                    this.openType = true
                })
            },

            /**
             * 数据返回服务器
             * */
            mixHas() {
                this.maskType = true;
                this.audioType = false;

                //  this.params.notes=['C-4|-17','D-5|1', 'D-5|5', 'D-5|9', 'None|16', 'None|32', 'None|48', 'B-5|50', 'None|64', 'None|80', 'G-5|81', 'None|96', 'None|112', 'A#-5|113', 'None|128']
                mixAd(this.params).then((res) => {
                    this.playType = true
                    /** 服务器返回的数据转回为显示的点*/
                    this.dotList = transform.yinListToPosition(res.notes, this.lineData)
                    /** 服务器返回的数据转换为显示的数据*/
                    this.dispalyList = transform.yinListToDisplayList(res.notes, this.lineData)
                    this.maskType = false
                    this.audioType = true
                    this.audio_url = this.baseURL + '/static/finalversionAd.wav?t=' + new Date().getTime();
                })
            },
            getAllPosition(list) {
                console.log("list==========", list)
                this.playType = false
                let my_audio = document.querySelector("#my_audio");
                my_audio.pause();
                this.playStatus = my_audio.paused;
                this.moveAnType = false
                this.playStatus = 'over'
                /** 点击的数据转为服务器要的数据*/
                this.params.notes = transform.positionListToYinList(list, this.lineData)

                /** 点击的数据转为显示的数据*/
                this.dispalyList = transform.yinListToDisplayList(this.params.notes, this.lineData)
            }
        },
        mounted() {
            console.log(1111111111)
            // let audio = new Audio();
            //     audio.src=this.baseURL+'/static/finalversionAd.wav';
            // audio.play();
            // this.mixHas()
//  var ox = document.createElement('div');
//  var oy = document.createElement('div');
//   ox.style.width = '100%';
//   ox.style.height = '1px';
//   ox.style.backgroundColor = '#ddd';
//   ox.style.position = 'fixed';
//   ox.style.left = 0;
//   document.body.appendChild(ox);
//   oy.style.height = '100%';
//   oy.style.width = '1px';
//   oy.style.backgroundColor = '#ddd';
//   oy.style.position = 'fixed';
//   oy.style.top = 0;
//   document.body.appendChild(oy);
//  document.onmousemove = function(e){
//   var e = e || event;
//   var x = e.pageX;
//   var y = e.pageY;
//   ox.style.top = y + 'px';
//   oy.style.left = x + 'px';
//  };

        }

    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin: 60px auto 0px auto;
    }

    .appModule {
        margin: 0px auto;
        width: 1000px;
        height: auto;
        position: relative;
    }

    .lineMesClassical {
        position: absolute;
        left: 0px;
        width: 25px;
        z-index: 999;
        background-color: rgba(255, 255, 255, 0.8);
        color: #333333;
        display: flex;
        flex-direction: column-reverse;
    }

    .lineMesClassical span {
        display: block;
        width: 100%;
        height: 15px;
        line-height: 26px;
        text-align: center;
        flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
    }

    .lineMesClassical span a {
        font-size: 10px;
        -webkit-transform: scale(0.78);
        transform: scale(0.78);
        display: block;
    }

    .positionMes {
        width: 1000px;
        height: 120px;
        border: 1px solid #ccc;
        margin: 0px auto;
        overflow-x: scroll;
    }

    .positionMes ul {
        width: 3225px;
        height: 70px;
    }

    .positionMes ul li {
        width: 60px;
        height: 60px;
        float: left;
        list-style: none;
    }

    .positionMes ul li span {
        display: block;
        width: 100%;
        height: 25px;
        line-height: 25px;
    }

    .positionBtn {
        width: 1000px;
        height: 60px;
        margin: 20px auto;
    }

    .positionBtn span {
        display: block;
        width: 60px;
        height: 30px;
        border-radius: 15px;
        border: 1px solid #ccc;
        float: left;
        margin-right: 20px;
        line-height: 30px;
        cursor: pointer;
    }

    i.icon {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-top: 4px;
    }

    i.recordIcon {
        background: url("../../assets/lyIco.png") no-repeat;
        background-size: 100%;
    }

    i.saveIcon {
        background: url("../../assets/mixer.png") no-repeat;
        background-size: 100%;
        margin-left: 2px;
    }

    i.deleteIcon {
        background: url("../../assets/shanchu.png") no-repeat;
        background-size: 100%;
    }

    i.over {
        background: url("../../assets/bofang_1.png") no-repeat;
        background-size: 100%;
        width: 17px;
        height: 17px;
        margin-top: 6px;
        margin-left: 4px;
    }

    i.doing {
        background: url("../../assets/shuaxin.png") no-repeat;
        background-size: 100%;
        width: 18px;
        height: 18px;
        margin-left: 1px;
        margin-top: 6px;
    }

    .title {
        width: 1000px;
        height: 40px;
        font-size: 42px;
        margin: 0px auto;
        text-align: center;
        font-weight: bold;
        line-height: 40px;
        margin-top: 20px;
    }

    .mask {
        position: fixed;
        left: 0px;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 99999;
    }

    .mask i {
        display: block;
        width: 60px;
        height: 60px;
        background-image: url("../../assets/loading.gif");
        background-size: 100% 100%;
        position: absolute;
        left: 50%;
        margin-left: -50px;
        top: 50%;
        margin-top: -50px;
    }

    .aboutMask {
        position: fixed;
        left: 0px;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 99999;
    }

    .aboutMes {
        width: 540px;
        padding: 20px 30px;
        height: 260px;
        position: fixed;
        left: 50%;
        margin-left: -300px;
        top: 50%;
        margin-top: -150px;
        z-index: 9999999;
        background-color: #fff;
        border-radius: 10px;
    }

    .closeIco {
        display: block;
        width: 30px;
        height: 30px;
        background-image: url("../../assets/closeIco.png");
        background-size: 100% 100%;
        position: absolute;
        right: 15px;
        top: 15px;
        cursor: pointer;
    }

    .aboutMes p {
        height: auto;
        overflow: hidden;
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
        animation: mymove 41s linear;
        -moz-animation: mymove 41s linear;
        -webkit-animation: mymove 41s linear;
        -o-animation: mymove 41s linear;
    }

    @keyframes mymove {
        from {
            left: 26px;
        }
        to {
            left: 3198px;
        }
    }

    @-moz-keyframes mymove /* Firefox */
    {
        from {
            left: 0px;
        }
        to {
            left: 3198px;
        }
    }

    @-webkit-keyframes mymove /* Safari and Chrome */
    {
        from {
            left: 0px;
        }
        to {
            left: 3198px;
        }
    }

    @-o-keyframes mymove /* Opera */
    {
        from {
            left: 0px;
        }
        to {
            left: 3198px;
        }
    }
</style>

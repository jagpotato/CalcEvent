import Calc from "./calc";

const MIN_INPUT = 0;
const MAX_INPUT = 9999999999;

const GET_POINT_EVENTLIVE = 320;
const GET_POINT_NORMALLIVE = 53;
const GET_ITEM = 53;
const USE_ITEM = 150;
const USE_STAMINA = 19;
const LIVE_TIME_SECOND = 180;

const MINUTE = 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const app = new Vue({
  el: "#app",
  data: {
    enabledCalcButton: true,
    displayedOption: false,
    finishPoint: "18000",
    currentPoint: "0",
    currentItem: "0",
    staminaList: [
      19, 18, 17, 16, 15, 14, 13, 12, 11, 10
    ],
    scaleList: {
      normal: [
        { text: "1倍", value: 1 },
        { text: "2倍", value: 2 }
      ],
      event: [
        { text: "1倍", value: 1 },
        { text: "2倍", value: 2 },
        { text: "4倍", value: 4 }
      ],
    },
    scoreList: [
      "S", "A", "B", "C"
    ],
    minutesList: [
      1, 2, 3, 4
    ],
    secondsList: [],
    selected: {
      normal: {
        stamina: 19,
        scale: 1,
        score: "S"
      },
      event: {
        difficulty: "MASTER",
        scale: 1,
        score: "S"
      },
      playTime: {
        minutes: 4,
        seconds: 0
      }
    },
    requireLiveNum: {
      normal: "",
      event: ""
    },
    requireEventItemNum: "",
    requireStamina: "",
    requireTime: "",
  },
  created: function() {
    for ( let i = 0; i < MINUTE; i++ ) {
      this.secondsList.push(i);
    }
  },
  watch: {
    finishPoint: function() {      
      this.enabledCalcButton = true;
    },
    currentPoint: function() {      
      this.enabledCalcButton = true;
    },
    currentItem: function() {    
      this.enabledCalcButton = true;  
    }
  },
  methods: {
    toggleOption: function() {
      this.displayedOption = !this.displayedOption;
    },
    calc: function() {
      this.enabledCalcButton = false;
      if ( this.finishPoint > MAX_INPUT || this.currentPoint > MAX_INPUT || this.currentItem > MAX_INPUT ) {
        alert("数値は" + MAX_INPUT + "以下で入力してください");
        throw new Error("数値は" + MAX_INPUT + "以上で入力してください");
      } else if ( String(this.finishPoint).search(/^[0-9]+$/) < MIN_INPUT　|| String(this.currentPoint).search(/^[0-9]+$/) < MIN_INPUT || String(this.currentItem).search(/^[0-9]+$/) < MIN_INPUT ) {
        alert("数値は" + MIN_INPUT + "以上で入力してください");
        throw new Error("数値は" + MIN_INPUT + "以上で入力してください");
      }
      let calcData = new Calc({normal: GET_POINT_NORMALLIVE, event: GET_POINT_EVENTLIVE}, {get: GET_ITEM, use: USE_ITEM});
      this.requireLiveNum = calcData.calcRequireLiveNum(this.finishPoint, this.currentPoint, this.currentItem);      
      this.requireEventItemNum = this.requireLiveNum.event * USE_ITEM;
      this.requireStamina = this.requireLiveNum.normal * USE_STAMINA;
      this.requireTime = calcData.calcRequireTime(this.requireLiveNum, LIVE_TIME_SECOND);
    
      console.log(this.selected.normal.stamina, this.selected.normal.scale, this.selected.normal.score);
      console.log(this.selected.event.difficulty, this.selected.event.scale, this.selected.event.score);
      console.log(this.selected.playTime.minutes, this.selected.playTime.seconds);
      
    },
    calcGetPoint: function() {

    }    
  }
});
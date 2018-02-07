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
    finishPoint: "18000",
    currentPoint: "0",
    currentItem: "0",
    requireLiveNum: {
      normal: "",
      event: ""
    },
    requireEventItemNum: "",
    requireStamina: "",
    requireTime: ""
  },
  watch: {
    finishPoint: function() {      
      document.getElementById("calc-button").disabled = false;
    },
    currentPoint: function() {      
      document.getElementById("calc-button").disabled = false;
    },
    currentItem: function() {      
      document.getElementById("calc-button").disabled = false;
    }
  },
  methods: {
    calc: function() {
      document.getElementById("calc-button").disabled = true;
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
    }
  }
});
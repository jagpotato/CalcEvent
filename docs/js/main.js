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
    finishPoint: 18000,
    numPoint: 0,
    numItem: 0,
    normalLiveNum: "",
    eventLiveNum: "",
    requireEventItemNum: "",
    requireStamina: "",
    requireTime: ""
  },
  methods: {
    calc: function() {
      if ( this.finishPoint > MAX_INPUT || this.numPoint > MAX_INPUT || this.numItem > MAX_INPUT ) {
        alert("数値は" + MAX_INPUT + "以下で入力してください");
        throw new Error("数値は" + MAX_INPUT + "以上で入力してください");
      } else if ( String(this.finishPoint).search(/^[0-9]+$/) < MIN_INPUT　|| String(this.numPoint).search(/^[0-9]+$/) < MIN_INPUT || String(this.numItem).search(/^[0-9]+$/) < MIN_INPUT ) {
        alert("数値は" + MIN_INPUT + "以上で入力してください");
        throw new Error("数値は" + MIN_INPUT + "以上で入力してください");
      }
    }
  }
});
import Calc from "./calc"

const MIN_INPUT = 0
const MAX_INPUT = 9999999999

const app = new Vue({
  el: "#app",
  data: {
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
    useItemList: {
      "MASTER/MASTER+": 150, "PRO": 120, "REGULAR": 90, "DEBUT": 75
    },
    selected: {
      normal: {
        stamina: 19,
        scale: 1,
        score: "S"
      },
      event: {
        difficulty: "MASTER/MASTER+",
        scale: 1,
        score: "S"
      },
      playTime: {
        minutes: 3,
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
    for ( let i = 0; i < 60; i++ ) {
      this.secondsList.push(i)
    }
  },
  methods: {
    toggleOption: function() {
      this.displayedOption = !this.displayedOption
    },
    calc: function() {
      if ( this.finishPoint > MAX_INPUT || this.currentPoint > MAX_INPUT || this.currentItem > MAX_INPUT ) {
        alert("数値は" + MAX_INPUT + "以下で入力してください")
        throw new Error("数値は" + MAX_INPUT + "以上で入力してください")
      } else if ( String(this.finishPoint).search(/^[0-9]+$/) < MIN_INPUT　|| String(this.currentPoint).search(/^[0-9]+$/) < MIN_INPUT || String(this.currentItem).search(/^[0-9]+$/) < MIN_INPUT ) {
        alert("数値は" + MIN_INPUT + "以上で入力してください")
        throw new Error("数値は" + MIN_INPUT + "以上で入力してください")
      }

      let getItem = this.calcGetItem(this.selected.normal.stamina, this.selected.normal.scale, this.selected.normal.score)
      let normalLivePoint = getItem / this.selected.normal.scale
      let eventLivePoint = this.calcGetPointEvent(this.selected.event.difficulty, this.selected.event.scale, this.selected.event.score)
      let useItem = this.useItemList[this.selected.event.difficulty] * this.selected.event.scale

      let calcData = new Calc({normal: normalLivePoint, event: eventLivePoint}, {get: getItem, use: useItem})
      this.requireLiveNum = calcData.calcRequireLiveNum(this.finishPoint, this.currentPoint, this.currentItem)      
      this.requireEventItemNum = this.requireLiveNum.event * useItem
      this.requireStamina = this.requireLiveNum.normal * this.selected.normal.stamina * this.selected.normal.scale
      this.requireTime = calcData.calcRequireTime(this.requireLiveNum, this.selected.playTime.minutes * 60 + this.selected.playTime.seconds)      
    },
    calcGetItem: function(useStamina, scale, score) {
      let itemS = Math.ceil(useStamina * 3.1 - 6.5)
      switch ( score ) {
        case "S":
        return itemS * scale
        break
        case "A":
        return Math.ceil(itemS * 0.95) * scale
        break
        case "B":
        return Math.ceil(itemS * 0.90) * scale
        break
        case "C":
        return Math.ceil(itemS * 0.85) * scale
        break
        default: break
      }
    },
    calcGetPointEvent: function(difficulty, scale, score) {
      const EVENTLIVE_POINT = {
        "MASTER/MASTER+": { "S": 320, "A": 304, "B": 288, "C": 272 },
        "PRO": { "S": 240, "A": 228, "B": 216, "C": 204 },
        "REGULAR": { "S": 170, "A": 162, "B": 153, "C": 145 },
        "DEBUT": { "S": 130, "A": 124, "B": 117, "C": 111 }
      }
      return EVENTLIVE_POINT[difficulty][score] * scale
    }    
  }
})
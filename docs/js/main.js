const app = new Vue({
  el: "#app",
  data: {
    normalLiveNum: "",
    count: 0
  },
  methods: {
    test: function() {
      this.count += 1;
      this.normalLiveNum = this.count;
    }
  }
});

// normalLiveNum
// eventLiveNum
// eventLiveNum * USE_ITEM
// normalLiveNum * USE_STAMINA
// RESULT_TIME
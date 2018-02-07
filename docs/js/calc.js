export default class {
  constructor(livePoint, item) {
    this.livePoint = livePoint;
    this.item = item;
    this.minute = 60;
    this.hour = this.minute * 60;
    this.day = this.hour * 24;
  }
  calcRequireLiveNum(finishPoint, currentPoint, currentItem) {
    finishPoint = parseInt(finishPoint, 10);
    currentPoint = parseInt(currentPoint, 10);
    currentItem = parseInt(currentItem, 10);
    let requireLiveNum = {normal: 0, event: 0};
    let getPoint = currentPoint;
    while ( getPoint < finishPoint ) {
      if ( currentItem >= this.item.use ) {
        getPoint += this.livePoint.event;
        currentItem -= this.item.use;
        requireLiveNum.event++;
      } else {
        getPoint += this.livePoint.normal;
        currentItem += this.item.get;
        requireLiveNum.normal++;
      }
    }
    return requireLiveNum;
  }
  calcRequireTime(requireLiveNum, playLiveTime) {
    let requireTime = {};
    requireTime.day = 0;
    requireTime.hour = 0;
    requireTime.minute = 0;
    requireTime.second = (requireLiveNum.normal + requireLiveNum.event) * playLiveTime;
    while ( requireTime.second >= this.day ) {
      requireTime.second -= this.day;
      requireTime.day++;
    }
    while ( requireTime.second >= this.hour ) {
      requireTime.second -= this.hour;
      requireTime.hour++;
    }
    while ( requireTime.second >= this.minute ) {
      requireTime.second -= this.minute;
      requireTime.minute++;
    }
    return requireTime.day + "日" + requireTime.hour + "時間" + requireTime.minute + "分" + requireTime.second + "秒";
    
  }
}

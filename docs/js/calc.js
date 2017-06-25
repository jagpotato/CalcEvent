function calc() {
  const GET_POINT_EVENTLIVE = 320;
  const GET_POINT_NORMALLIVE = 53;
  const GET_ITEM = 53;
  const USE_ITEM = 150;
  const USE_STAMINA = 19;
  const MAX_STAMINA = 82;
  const LIVE_TIME_SECOND = 180;
  const MINUTE = 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;

  console.log("--------------------------------");
  let finishPoint = parseInt(document.getElementById("finishPoint").value);
  let numPoint = parseInt(document.getElementById("numPoint").value);
  let numItem = parseInt(document.getElementById("numItem").value);
  console.log("目標ポイント: " + finishPoint);
  console.log("累計ポイント: " + numPoint);
  console.log("所持アイテム: " + numItem);

  console.log("------------");
  console.log("通常ライブ含む");
  let eventLiveNum = 0;
  let normalLiveNum = 0;
  var getPoint = numPoint;
  for ( let i = 0; getPoint < finishPoint; i++ ) {
    if ( numItem >= USE_ITEM ) {
      getPoint += GET_POINT_EVENTLIVE;
      numItem -= USE_ITEM;
      eventLiveNum++;
    } else {
      getPoint += GET_POINT_NORMALLIVE;
      numItem += GET_ITEM;
      normalLiveNum++;
    }
  }
  console.log("最終ポイント: " + getPoint);
  console.log("最終アイテム: " + numItem);
  console.log("イベントライブ数: " + eventLiveNum);
  console.log("通常ライブ数: " + normalLiveNum);
  console.log("必要イベントアイテム数: " + (eventLiveNum * USE_ITEM));
  console.log("必要スタミナ: " + (normalLiveNum * USE_STAMINA));

  let day = 0;
  let hour = 0;
  let minute = 0;
  let second = (eventLiveNum + normalLiveNum) * LIVE_TIME_SECOND;
  while ( second >= DAY ) {
    second -= DAY;
    day++;
  }
  while ( second >= HOUR ) {
    second -= HOUR;
    hour++;
  }
  while ( second >= MINUTE ) {
    second -= MINUTE;
    minute++;
  }
  console.log("必要時間: " + day + "日" + hour + "時間" + minute + "分" + second + "秒");

  // console.log("------------");
  // console.log("イベントライブのみ");
  // let eventLiveNumEventLiveOnly = finishPoint / GET_POINT_EVENTLIVE;
  // let needItemEventLiveOnly = eventLiveNumEventLiveOnly * USE_ITEM;
  // console.log("イベントライブ数: " + eventLiveNumEventLiveOnly);
  // console.log("必要イベントアイテム数: " + needItemEventLiveOnly);

  // let normalLiveNumEventLiveOnly = needItemEventLiveOnly / GET_ITEM;
  // console.log("通常ライブ数: " + normalLiveNumEventLiveOnly);

  // let needStaminaEventLiveOnly = normalLiveNumEventLiveOnly * USE_STAMINA;
  // console.log("必要スタミナ: " + needStaminaEventLiveOnly);
}
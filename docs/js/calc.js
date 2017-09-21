function calc() {
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

  // console.log("--------------------------------");
  let finishPoint = parseInt(document.getElementById("finishPoint").value);
  let numPoint = parseInt(document.getElementById("numPoint").value);
  let numItem = parseInt(document.getElementById("numItem").value);
  if ( finishPoint > MAX_INPUT || numPoint > MAX_INPUT || numItem > MAX_INPUT ) {
    alert("数値は" + MAX_INPUT + "以下で入力してください");
    throw new Error("数値は" + MAX_INPUT + "以上で入力してください");
  } else if ( String(finishPoint).search(/^[0-9]+$/) < MIN_INPUT　|| String(numPoint).search(/^[0-9]+$/) < MIN_INPUT || String(numItem).search(/^[0-9]+$/) < MIN_INPUT ) {
    alert("数値は" + MIN_INPUT + "以上で入力してください");
    throw new Error("数値は" + MIN_INPUT + "以上で入力してください");
  }
  // console.log("目標ポイント: " + finishPoint);
  // console.log("累計ポイント: " + numPoint);
  // console.log("所持アイテム: " + numItem);

  // console.log("------------");
  // console.log("通常ライブ含む");
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
  // console.log("最終ポイント: " + getPoint);
  // console.log("最終アイテム: " + numItem);
  // console.log("イベントライブ数: " + eventLiveNum);
  // console.log("通常ライブ数: " + normalLiveNum);
  // console.log("必要イベントアイテム数: " + (eventLiveNum * USE_ITEM));
  // console.log("必要スタミナ: " + (normalLiveNum * USE_STAMINA));

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
  // console.log("必要時間: " + day + "日" + hour + "時間" + minute + "分" + second + "秒");

  const RESULT_TIME = day + "日" + hour + "時間" + minute + "分" + second + "秒";
  const TABLE_ITEMS = ["通常ライブ数", "イベントライブ数", "必要イベントアイテム数", "必要スタミナ", "必要時間"];
  const TABLE_RESULTS = [normalLiveNum, eventLiveNum, eventLiveNum * USE_ITEM, normalLiveNum * USE_STAMINA, RESULT_TIME];
  const table = document.getElementById("result");
  while ( table.rows[0] ) {
    table.deleteRow(0);
  }
  for ( let i = 0; i < TABLE_ITEMS.length; i++ ) {
    let row = result.insertRow(-1);
    let cell = row.insertCell(-1);
    cell.appendChild(document.createTextNode(TABLE_ITEMS[i]));
    cell = row.insertCell(-1);
    cell.appendChild(document.createTextNode(TABLE_RESULTS[i]));
  }
}

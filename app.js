/*
 * TOKYO CITY GUIDE 2026｜GitHub Pages 版
 *
 * 所有行程內容都保存在下方的 days 陣列中，沒有壓縮或混淆。
 * 要修改時間、標題、說明或地圖，只需編輯對應欄位即可。
 */

function mapSearch(place) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place)}`;
}

const days = [
  {
    date: "09/13",
    weekday: "SUN",
    place: "ARRIVAL",
    title: "抵達東京，從大塚開始",
    showLodging: true,
    lodging: "OMO5 東京大塚 by 星野集團",
    lodgingMap: mapSearch("OMO5 東京大塚 by 星野集團"),
    lodgingNote: "9/13–9/19 連住",
    stops: [
      {
        time: "FLIGHT",
        eyebrow: "台中 → 成田",
        title: "JX314・抵達東京",
        summary: "09:30 台中出發，14:00 抵達成田機場。",
        detail: "搭乘星宇航空 JX314，預計 09:30 自台中國際機場起飛，14:00 抵達成田國際機場。",
        highlights: ["JX314", "RMQ 09:30 → NRT 14:00", "抵達後直接前往大塚"],
        map: mapSearch("成田國際機場"),
        tags: ["FLIGHT", "ARRIVAL"],
        status: "confirmed"
      },
      {
        time: "STAY",
        eyebrow: "大塚",
        title: "OMO5 東京大塚",
        summary: "這次東京 7 天 6 夜的固定住宿。",
        detail: "抵達大塚後先完成入住、放行李，再依體力決定要不要在大塚站周邊散步或吃晚餐。",
        highlights: ["9/13–9/19 連住"],
        map: mapSearch("OMO5 東京大塚 by 星野集團"),
        tags: ["STAY", "大塚"],
        status: "confirmed"
      },
      {
        time: "AREA",
        eyebrow: "大塚",
        title: "大塚站周邊",
        summary: "第一晚不排滿，先熟悉住宿附近。",
        detail: "晚餐、便利商店或簡單散步都留在大塚周邊，依抵達時間與體力決定。",
        highlights: ["第一晚保持彈性", "以步行範圍為主"],
        map: mapSearch("大塚站 東京"),
        tags: ["AREA", "EAT", "WALK"],
        status: "flex"
      }
    ]
  },
  {
    date: "9/14",
    weekday: "MON",
    place: "秋葉原",
    title: "丸之內到秋葉原，城市與電氣街",
    showLodging: false,
    lodging: "OMO5 東京大塚 by 星野集團",
    lodgingMap: mapSearch("OMO5 東京大塚 by 星野集團"),
    lodgingNote: "9/12–9/18 連住",
    stops: [
      {
        time: "AREA",
        eyebrow: "丸之內",
        title: "MARUNOUCHI",
        summary: "東京站與丸之內一帶先保留成自由城市散步。",
        detail: "這裡之後可以再補想逛的商場、店家、建築或咖啡。",
        highlights: ["東京站周邊", "購物與城市散步"],
        map: mapSearch("丸之內 東京"),
        tags: ["AREA", "WALK", "SHOP"],
        status: "flex"
      },
      {
        time: "SHOP",
        eyebrow: "秋葉原",
        title: "秋葉原電氣街",
        summary: "把電器、模型與動漫店留成一段完整逛街時間。",
        detail: "之後再把真正想去的店家一間一間加入，不先塞滿。",
        nearby: [
          {
            name: "ecute 秋葉原",
            note: "ecute 是日本JR東日本集團所推出的「車站站內商場」（Ekinaka）品牌，主打不用出車站剪票口，就能在站內享受購物、美食與購買伴手禮的便利性。",
            map: "https://maps.app.goo.gl/gaC2mjT1S6BqySyh7"
          },
          {
            name: "Animate 秋葉原",
            note: "Animate是日本最大的動漫、漫畫、遊戲及周邊商品銷售連鎖店。",
            map: "https://maps.app.goo.gl/LN7QGobKGg5jDwLh7"
          },
          {
            name: "Super Potato 秋葉原店",
            note: "位於日本東京秋葉原的知名二手懷舊遊戲（復古遊戲）專賣店，被許多電玩迷與老玩家視為朝聖的殿堂。",
            map: "https://maps.app.goo.gl/YbSs2N8N65kx5LaL7"
          }
        ],
        highlights: [""],
        map: mapSearch("秋葉原電氣街"),
        tags: ["SHOP", "秋葉原"],
        status: "flex"
      },
      {
        time: "11:30",
        eyebrow: "秋葉原",
        title: "露伊達酒店 LUIDA'S BAR - ルイーダの酒場",
        summary: "已完成預約，Gmail",
        detail: "",
        highlights: [""],
        map: "https://maps.app.goo.gl/bXb4HrDL6F44qJ2L7?g_st=ic",
        tags: ["EAT", "秋葉原"],
        status: "confirmed"
      }
    ]
  },
  {
    date: "川越",
    weekday: "TRIP",
    place: "",
    title: "川越一日，走進小江戶",
    showLodging: false,
    lodging: "OMO5 東京大塚 by 星野集團",
    lodgingMap: mapSearch("OMO5 東京大塚 by 星野集團"),
    lodgingNote: "9/13–9/19 連住",
    stops: [
      {
        time: "SEE",
        eyebrow: "川越",
        title: "川越冰川神社",
        summary: "川越一日遊的主要固定點。",
        detail: "川越冰川神社創建於約1500年前，是埼玉縣知名的祈求戀愛、家庭圓滿與結緣的總鎮守神社。\n* よりそい守り，一對小御守袋。\n* さくらさく守，「希望如櫻花一般，重要的緣分得以綻放。」而且每一個的顏色和花紋都不同。\n* 鯛みくじ，拿一根小釣竿，把鯛魚造型的御神籤釣起來。有代表一般運勢的紅色「一年安鯛」，也有偏向戀愛緣分的「あい鯛」。\n* 絵馬トンネル（繪馬隧道），大量參拜者多年留下來的祈願繪馬形成的一條通道。",
        highlights: ["川越一日遊主線"],
        map: "https://maps.app.goo.gl/hfQn3yuyCwY8SH1G7?g_st=ic",
        tags: ["SEE", "神社", "川越"],
        status: "confirmed"
      },
      {
        time: "WALK",
        eyebrow: "川越",
        title: "一番街・藏造老街",
        summary: "把午後留給老街、商店與小吃。",
        detail: "",
        nearby: [
          {
            name: "YOURMUSK｜ジョンズブレンド 川越店",
            note: "香包袋。\n香氛和風融合：以「香氣與和風之融合」為主題，結合當地文化與環保概念，推出大人的「綠茶」香氣及使用日本傳統和服布料進行改造的升級再造（Upcycle）香包袋。\n約15分鐘。",
            map: "https://maps.app.goo.gl/XCurnnysygsCWEJN7?g_st=ic"
          },
          {
            name: "glin coffee Youbiruten glin coffee 川越時の鐘店",
            note: "位於川越市知名地標「時之鐘」旁的特色咖啡館，以自家烘焙精品咖啡與結合川越在地元素的輕食聞名。",
            map: "https://maps.app.goo.gl/A1nmwLofmQT7R3Qh7?g_st=ic"
          },
          {
            name: "やまとごころ川越",
            note: "專營日本傳統香品與和風雜貨的特色專門店",
              map: "https://maps.app.goo.gl/948nPaZX7xfDqgzy5?g_st=ic"
          }
        ],
        highlights: ["老街散步", "甜點與伴手禮", "保留逛街彈性"],
        map: mapSearch("川越 一番街"),
        tags: ["WALK", "SHOP", "川越"],
        status: "flex"
      }
    ]
  },
  {
    date: "原宿。表參道。澀谷",
    weekday: "LOCAL",
    place: "不是9/15",
    title: "穿過表參道，慢慢逛到澀谷",
    showLodging: false,
    lodging: "OMO5 東京大塚 by 星野集團",
    lodgingMap: mapSearch("OMO5 東京大塚 by 星野集團"),
    lodgingNote: "9/13–9/19 連住",
    stops: [
      {
        time: "SHOP",
        eyebrow: "原宿",
        title: "and ST TOKYO",
        summary: "老辣妹推薦，服飾、三麗鷗",
        detail: "老辣妹推薦品牌HARE、RAGEBLUE(褲子)、女裝：LOWRYS FARM、JEANASIS、PAGEBOYS",
        highlights: [""],
        map: "https://maps.app.goo.gl/qTBwBWCu4yPLJVDWA?g_st=ic",
        tags: ["WALK", "SHOP", "原宿"],
        status: "flex"
      },
      {
        time: "SHOP",
        eyebrow: "原宿",
        title: "Harry Potter Shop Harajuku ハリー・ポッター ショップ 原宿",
        summary: "禁忌森林風格",
        detail: "",
        highlights: [""],
        map: "https://maps.app.goo.gl/FbHEkRz8AyBuHZrF9?g_st=ic",
        tags: ["WALK", "SHOP", "原宿"],
        status: "flex"
      },
      {
        time: "SHOP",
        eyebrow: "原宿",
        title: "B-SIDE LABEL 原宿店",
        summary: "貼紙宇宙",
        detail: "",
        highlights: [""],
        map: "https://maps.app.goo.gl/qEdY9Np68hJgxB5A9",
        tags: ["WALK", "SHOP", "原宿"],
        status: "flex"
      },
      {
        time: "SHOP",
        eyebrow: "表參道",
        title: "PORTER OMOTESANDO",
        summary: "",
        detail: "",
        highlights: [
          "主要購物點"
        ],
        map: mapSearch("PORTER OMOTESANDO"),
        tags: ["SHOP", "PORTER", "表參道"],
        status: "confirmed"
      },
      {
        time: "SHOP",
        eyebrow: "澀谷",
        title: "澀谷LOFT 生活雜貨專門店 渋谷ロフト",
        summary: "勇者鬥惡龍、迷你日曆",
        detail: "勇者鬥惡龍 × Loft 商品快閃活動 2026\neric 迷你日曆 Cafe Latte",
        highlights: [""],
        map: "https://maps.app.goo.gl/RP3HDiMRommfJAPVA?g_st=ic",
        tags: ["WALK", "SHOP"],
        status: "confirmed"
      },
      {
        time: "EAT。CAFE",
        eyebrow: "原宿。表參道。澀谷",
        title: "",
        summary: "",
        detail: "",
        nearby: [
          {
            name: "tonkatsu.jp表参道",
            note: "週一、二公休，炸豬排，痣作人推薦",
            map: "https://maps.app.goo.gl/mFCpW61xL7e97bZPA?g_st=ic"
          },
          {
            name: "皮耶艾曼 青山店 ピエール・エルメ・パリ 青山",
            note: "馬卡龍",
            map: "https://maps.app.goo.gl/fmC2nfWF7zLBDbUB8?g_st=ic"
          },
          {
            name: "Satella 喫茶サテラ",
            note: "喫茶店百名店",
            map: "https://maps.app.goo.gl/ZqPrKThBQFrH44ZM8?g_st=ic"
          }
        ],
        highlights: [""],
        map: "",
        tags: [""],
        status: "flex"
      }
    ]
  },
  {
    date: "高輪。台場",
    weekday: "LOCAL",
    place: "",
    title: "台場，把一天留給灣岸",
    showLodging: false,
    lodging: "OMO5 東京大塚 by 星野集團",
    lodgingMap: mapSearch("OMO5 東京大塚 by 星野集團"),
    lodgingNote: "9/13–9/19 連住",
    stops: [
      {
        time: "SHOP",
        eyebrow: "高輪",
        title: "NEWoMan高輪",
        summary: "",
        detail: "",
        nearby: [
          {
            name: "BEAMS CULTuART",
            note: "北4F，日本知名潮流選物品牌BEAMS推出的文化與藝術企劃，名稱由 CULT（狂熱）、CULTURE（文化）、ART（藝術）結合而成。\n好喝的奶茶。",
            map: ""
          },
          {
            name: "中川政七商店 NEWoMan高輪店",
            note: "南5F",
            map: ""
          },
          {
            name: "シヅカ洋菓子店 自然菓子研究所 ニュウマン高輪店",
            note: "南1F",
            map: ""
          },
          {
            name: "PORTER CLASSIC CINEMA（ポータークラシック シネマ）",
            note: "北2F",
            map: ""
          },
          {
            name: "LUFTBAUM 觀景台",
            note: "北28、29F",
            map: ""
          }
        ],
        highlights: [""],
        map: "https://maps.app.goo.gl/W4bE22zd482WaLCW9?g_st=ic",
        tags: [""],
        status: "confirmed"
      },
      {
        time: "SHOP",
        eyebrow: "台場",
        title: "THE GUNDAM BASE TOKYO",
        summary: "",
        detail: "",
        highlights: ["台場主目的地", "出發前再確認最新營業資訊"],
        map: "https://maps.app.goo.gl/dWFrH2peryE7JVtu5",
        tags: ["SHOP", "GUNDAM", "台場"],
        status: "confirmed"
      }
    ]
  },
  {
    date: "池袋。大塚",
    weekday: "LOCAL",
    place: "",
    title: "池袋與大塚，住進東京的日常",
    showLodging: false,
    lodging: "OMO5 東京大塚 by 星野集團",
    lodgingMap: mapSearch("OMO5 東京大塚 by 星野集團"),
    lodgingNote: "9/13–9/19 連住",
    stops: [
      {
        time: "SEE",
        eyebrow: "大塚",
        title: "天祖神社",
        summary: "住宿附近可以順路走訪的神社。",
        map: mapSearch("天祖神社 大塚 東京"),
        tags: ["SEE", "神社", "大塚"],
        status: "flex"
      },
      {
        time: "SWEET",
        eyebrow: "大塚",
        title: "千成最中本舗",
        summary: "住宿附近的和菓子候選。",
        map: mapSearch("千成最中本舗 大塚"),
        tags: ["SWEET", "大塚"],
        status: "flex"
      },
      {
        time: "EAT",
        eyebrow: "大塚",
        title: "GOTOO",
        summary: "先列入大塚周邊餐廳候選。",
        map: mapSearch("GOTOO 大塚 東京"),
        tags: ["EAT", "大塚"],
        status: "flex"
      },
      {
        time: "EAT",
        eyebrow: "大塚",
        title: "大塚飲食",
        summary: "先列入大塚周邊餐廳候選。",
        nearby: [
          {
              name: "Katchar Batchar カッチャルバッチャル",
                note: "印度咖哩，2026百名店",
            map: "https://maps.app.goo.gl/oXJZDhvhKQuZaJd96?g_st=ic"
          },
          {
            name: "MENSHO",
            note: "拉麵，看起來像創意拉麵？",
            map: "https://maps.app.goo.gl/QpFMM1LkMNFnJURb7?g_st=ic"
          },
          {
            name: "Yappari India やっぱりインディア 大塚本店",
            note: "印度咖哩，2026百名店，比較近",
            map: "https://maps.app.goo.gl/v9Rnb6gHw5XC16Yy8?g_st=ic"
          },
          {
            name: "麺創庵 砂田",
            note: "拉麵",
            map: "https://maps.app.goo.gl/FBhkYjygRsf4pfuC7?g_st=ic"
          },
          {
            name: "焼肉冷麺だいじゅ",
              note: "燒肉店",
            map: "https://maps.app.goo.gl/3hwqgnvmDcQryCRZA?g_st=ic"
          },
          {
            name: "Fruits Sugi フルーツ すぎ",
              note: "水果聖代，需預約",
            map: "https://maps.app.goo.gl/gTrznjiG2zdZsXcp8?g_st=ic"
          },
          {
            name: "Hokusai 酒肴 北斎 大塚のれん街",
              note: "老辣妹推薦居酒屋",
            map: "https://maps.app.goo.gl/MJwMonSvzQ9MYy4E9?g_st=ic"
          }
          ],
        map: "https://maps.app.goo.gl/MJwMonSvzQ9MYy4E9?g_st=ic",
        tags: ["EAT", "大塚"],
        status: "flex"
      },
      {
        time: "SHOPPING",
        eyebrow: "池袋",
        title: "池袋LOFT 生活雜貨專門店 池袋ロフト",
        summary: "eric 迷你日曆 Cafe Latte。位在 LINKS IKEBUKURO 9～12 樓",
        map: "https://maps.app.goo.gl/TSSJoFRWWqCf1Ljb9?g_st=ic",
        tags: [""],
        status: "flex"
      },
      {
        time: "EAT",
        eyebrow: "池袋",
        title: "池袋飲食",
        summary: "",
        nearby: [
          {
              name: "Suzumeya すずめや",
                note: "銅鑼燒、和菓子，星期四五六營業",
            map: "https://maps.app.goo.gl/fmC2nfWF7zLBDbUB8?g_st=ic"
          },
          {
            name: "麺屋 Hulu-lu",
            note: "拉麵",
            map: "https://maps.app.goo.gl/ET5cdmhDZQkAR4cSA?g_st=ic"
          },
          {
            name: "MENYA NAKAGAWA",
            note: "拉麵",
            map: "https://maps.app.goo.gl/ineK8hP9dU5EfBTK7?g_st=ic"
          },
          {
            name: "麺処 花田 池袋店",
            note: "拉麵",
            map: "https://maps.app.goo.gl/E8BhnHJCZqZRek1h7?g_st=ic"
          },
          {
            name: "COFFEE VALLEY",
              note: "咖啡店，2025百名，Google Maps評價有些微妙",
            map: "https://maps.app.goo.gl/xLrVKTwotAQHYxDS7?g_st=ic"
          },
          {
            name: "No.18 漢堡 No.18ハンバーガー",
              note: "漢堡店，2026百名店，11:00-16:00",
            map: "https://maps.app.goo.gl/o7fXNeBiMGrjS7BU8?g_st=ic"
          }
        ],
        map: mapSearch("かぶと 池袋"),
        tags: ["EAT", "池袋"],
        status: "flex"
      }
    ]
  },

  {
    date: "09.19",
    weekday: "SAT",
    place: "DEPARTURE",
    title: "最後一天，回到成田",
    showLodging: false,
    lodging: "今日返台・無住宿",
    lodgingMap: "",
    lodgingNote: "",
    stops: [
      {
        time: "CHECK-OUT",
        eyebrow: "大塚",
        title: "OMO5 東京大塚・退房",
        summary: "整理行李，準備前往成田機場。",
        map: mapSearch("OMO5 東京大塚 by 星野集團"),
        tags: ["CHECK-OUT", "大塚"],
        status: "confirmed"
      },
      {
        time: "FLIGHT",
        eyebrow: "成田 → 台中",
        title: "JX315・回程",
        summary: "16:30 成田出發，19:10 抵達台中。",
        detail: "搭乘星宇航空 JX315，預計 16:30 自成田國際機場起飛，19:10 抵達台中國際機場。",
        highlights: ["JX315", "NRT 16:30 → RMQ 19:10", "預留機場報到與退稅時間"],
        map: mapSearch("成田國際機場"),
        tags: ["FLIGHT", "DEPARTURE"],
        status: "confirmed"
      }
    ]
  }
];

// -----------------------------------------------------------------------------
// 畫面互動。以下程式負責日期切換、卡片詳細說明、地圖連結與底部導覽。
// -----------------------------------------------------------------------------

let activeDayIndex = 0;
let lastFocusedElement = null;

const dateRail = document.querySelector("#date-rail");
const dayView = document.querySelector("#day-view");
const scheduleSection = document.querySelector("#schedule-section");
const infoSection = document.querySelector("#info-section");
const scheduleNav = document.querySelector("#schedule-nav");
const infoNav = document.querySelector("#info-nav");
const hotelList = document.querySelector("#hotel-list");
const modalBackdrop = document.querySelector("#modal-backdrop");
const closeModalButton = document.querySelector("#close-modal");
const modalDoneButton = document.querySelector("#modal-done");

function mapLink(url, compact = false) {
  if (!url) return "";

  const compactClass = compact ? " compact" : "";
  const text = compact ? "" : "地圖";

  return `<a class="map-link${compactClass}" href="${url}" target="_blank" rel="noreferrer" aria-label="在 Google 地圖開啟"><span aria-hidden="true">⌖</span>${text}</a>`;
}

function renderDateRail() {
  dateRail.innerHTML = days.map((day, index) => `
    <button class="date-button ${index === activeDayIndex ? "active" : ""}" type="button" data-day-index="${index}" ${index === activeDayIndex ? 'aria-current="date"' : ""}>
      <span>${day.weekday}</span>
      <strong>${day.date}</strong>
      <small>${day.place}</small>
    </button>
  `).join("");

  const activeButton = dateRail.querySelector(".date-button.active");
  activeButton?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
}

function renderDay() {
  const day = days[activeDayIndex];
  const timeline = day.stops.map((stop, stopIndex) => {
    const isFlex = stop.status === "flex";
    return `
  <article class="stop ${isFlex ? "is-flex" : ""}">
    <div class="stop-card" role="button" tabindex="0" data-stop-index="${stopIndex}" aria-label="查看 ${stop.title} 詳細說明">
      <div class="card-topline">
  <div class="time">
  <span>${stop.time}</span>
  ${stop.eyebrow ? `<span class="eyebrow">${stop.eyebrow}</span>` : ""}
  </div>
</div>
          <div class="title-row">
            <h2>${stop.title}</h2>
            ${mapLink(stop.map, true)}
          </div>
          <p>${stop.summary}</p>
        </div>
        ${stopIndex < day.stops.length - 1 ? '<span class="timeline-thread" aria-hidden="true"></span>' : ""}
      </article>
    `;
  }).join("");

  dayView.innerHTML = `
    <header class="day-heading">
  <h1>${day.title}</h1>
  <span class="brush" aria-hidden="true"></span>
</header>
    <div class="timeline">${timeline}</div>
    ${day.showLodging === false ? "" : `
    <section class="lodging-card">
      <div>
        <p>STAY</p>
        <h2>${day.lodging}</h2>
        ${day.lodgingNote ? `<small>${day.lodgingNote}</small>` : ""}
      </div>
      ${mapLink(day.lodgingMap)}
    </section>`}
    <div class="day-controls">
      <button id="previous-day" type="button" ${activeDayIndex === 0 ? "disabled" : ""}>← 前一天</button>
      <button id="next-day" type="button" ${activeDayIndex === days.length - 1 ? "disabled" : ""}>後一天 →</button>
    </div>
  `;
}

function openStop(stopIndex, triggerElement) {
  const stop = days[activeDayIndex].stops[stopIndex];
  lastFocusedElement = triggerElement;

  document.querySelector("#detail-eyebrow").textContent =
stop.eyebrow ? `${stop.time} · ${stop.eyebrow}` : stop.time;
  document.querySelector("#detail-title").textContent = stop.title;
  document.querySelector("#detail-text").textContent =
  stop.detail || stop.summary || "";
  const detailMap = document.querySelector("#detail-map");

if (stop.map) {
  detailMap.href = stop.map;
  detailMap.hidden = false;
} else {
  detailMap.removeAttribute("href");
  detailMap.hidden = true;
}
  document.querySelector("#detail-tags").innerHTML =
  (stop.tags || []).map(tag => `<span>${tag}</span>`).join("");
  document.querySelector("#detail-highlights").innerHTML =
  (stop.highlights || []).map(item => `<li>${item}</li>`).join("");
  
const nearbyBlock = document.querySelector("#detail-nearby");
const nearbyList = document.querySelector("#nearby-list");

if (stop.nearby) {
  nearbyBlock.hidden = false;
  nearbyList.innerHTML = stop.nearby.map(item => `
    <article class="restaurant-item">
      <h4>${item.name}</h4>
<p>${item.note || ""}</p>
${
  item.image
    ? `<a href="${item.image}" target="_blank">查看圖片</a>`
    : ""
}
      ${
  item.image
    ? ""
    : item.maps
      ? item.maps.map((url, index) =>
          `<a href="${url}" target="_blank">地圖連結 ${index + 1}</a>`
        ).join("　")
      : item.map
        ? `<a href="${item.map}" target="_blank">地圖連結</a>`
        : ""
}
    </article>
  `).join("");
} else {
  nearbyBlock.hidden = true;
  nearbyList.innerHTML = "";
}

  const restaurantBlock = document.querySelector("#detail-restaurants");
const restaurantList = document.querySelector("#restaurant-list");

if (stop.restaurants) {
  restaurantBlock.hidden = false;

  restaurantList.innerHTML = stop.restaurants.map(item => `
    <article class="restaurant-item">
      <h4>${item.name}</h4>
      <p>${item.note || ""}</p>

      ${
  item.maps
    ? item.maps.map((url, index) =>
        `<a href="${url}" target="_blank">地圖連結 ${index + 1}</a>`
      ).join("　")
    : item.map
      ? `<a href="${item.map}" target="_blank">地圖連結</a>`
      : ""
}
    </article>
  `).join("");
} else {
  restaurantBlock.hidden = true;
  restaurantList.innerHTML = "";
}
  
  const note = document.querySelector("#detail-note");
  note.hidden = !stop.note;
  note.querySelector("p").textContent = stop.note || "";

  modalBackdrop.hidden = false;
  document.body.classList.add("modal-open");
  closeModalButton.focus();
}

function closeModal() {
  modalBackdrop.hidden = true;
  document.body.classList.remove("modal-open");
  lastFocusedElement?.focus();
}

function changeDay(index) {
  if (index < 0 || index >= days.length) return;
  activeDayIndex = index;
  renderDateRail();
  renderDay();
  window.scrollTo({ top: document.querySelector(".date-dock").offsetTop, behavior: "smooth" });
}

function renderHotelList() {
  const hotels = [];

  days
  .filter(day => day.lodging !== "今日返台・無住宿")
  .forEach(day => {
    const previousHotel = hotels.at(-1);
    if (previousHotel && previousHotel.name === day.lodging) {
      previousHotel.endDate = day.date;
    } else {
      hotels.push({
        startDate: day.date,
        endDate: day.date,
        name: day.lodging,
        map: day.lodgingMap,
        note: day.lodgingNote || ""
      });
    }
  });

  hotelList.innerHTML = hotels.map(hotel => {
    const dates = hotel.startDate === hotel.endDate ? hotel.startDate : `${hotel.startDate}–${hotel.endDate}`;
    return `
      <article>
        <div>
          <time>${dates}</time>
          <h3>${hotel.name}</h3>
          ${hotel.note ? `<p>${hotel.note}</p>` : ""}
        </div>
        ${mapLink(hotel.map, true)}
      </article>
    `;
  }).join("");
}

function showSection(sectionName) {
  const showSchedule = sectionName === "schedule";
  scheduleSection.hidden = !showSchedule;
  infoSection.hidden = showSchedule;
  scheduleNav.classList.toggle("active", showSchedule);
  infoNav.classList.toggle("active", !showSchedule);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

dateRail.addEventListener("click", event => {
  const button = event.target.closest("[data-day-index]");
  if (!button) return;
  changeDay(Number(button.dataset.dayIndex));
});

dayView.addEventListener("click", event => {
  const mapAnchor = event.target.closest("a.map-link");
  if (mapAnchor) return;

  const card = event.target.closest("[data-stop-index]");
  if (card) openStop(Number(card.dataset.stopIndex), card);

  if (event.target.closest("#previous-day")) changeDay(activeDayIndex - 1);
  if (event.target.closest("#next-day")) changeDay(activeDayIndex + 1);
});

dayView.addEventListener("keydown", event => {
  const card = event.target.closest("[data-stop-index]");
  if (!card || (event.key !== "Enter" && event.key !== " ")) return;
  event.preventDefault();
  openStop(Number(card.dataset.stopIndex), card);
});

modalBackdrop.addEventListener("click", event => {
  if (event.target === modalBackdrop) closeModal();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !modalBackdrop.hidden) closeModal();
});

closeModalButton.addEventListener("click", closeModal);
modalDoneButton.addEventListener("click", closeModal);
scheduleNav.addEventListener("click", () => showSection("schedule"));
infoNav.addEventListener("click", () => showSection("info"));

renderDateRail();
renderDay();
renderHotelList();

/////問題エリアの生成/////////////
const classIds = ["left", "plus", "right", "equal", "anser"];
const container1 = document.querySelector("#main-container1");
document.getElementById("count").textContent = "100てん めざして がんばろう";
/////div生成、クラス付与
classIds.forEach((classId) => {
  const a = document.createElement("div");
  a.classList.add(classId);
  container1.appendChild(a);
});
// 問題の背景色を設定
const colors = [
  "red",
  "#7f7fff",
  "yellow",
  "#c1ff84",
  "pink",
  "skyblue",
  "#cc99ff",
  "orange",
  "gold",
];

/////ランダム配列を生成して問題を表示する関数////////
const makeRandomArry = () => {
  /////ランダムの数字を生成(arry2に格納)///
  let arry1 = [];
  let arry2 = [];
  /////配列の範囲を設定
  let startNum = 0;
  let endNum = 10;
  for (let i = startNum; i < endNum; i++) {
    arry1.push(i);
  }
  const len = arry1.length;
  for (let n = len; n > 0; n--) {
    const index = Math.floor(Math.random() * n);
    arry2.push(arry1[index]);
    arry1.splice(index, 1);
  }
  document.querySelector(".plus").textContent = "-";
  document.querySelector(".equal").textContent = "=";
  document.querySelector(".left").textContent = arry2[6] + arry2[0];
  document.querySelector(".right").textContent = arry2[6];
  document.querySelector(".anser").textContent = arry2[0];
  // 問題の背景色を変化
  document.querySelector(".left").style.backgroundColor = colors[arry2[5]];
  document.querySelector(".right").style.backgroundColor = colors[arry2[5]];
  document.querySelector(".anser").style.backgroundColor = colors[arry2[5]];
  document.querySelector(".anser").style.color = colors[arry2[5]];
};
makeRandomArry();

/////問題エリアのテキスト設定
/////０～9までの配列
const numbersNums = [];
for (let i = 0; i < 10; i++) {
  numbersNums.push(i);
}
/////10～19までの配列
const numbersNums2 = [];
for (let i = 10; i < 20; i++) {
  numbersNums2.push(i);
}

/////選択エリアを取得
const numContainer = document.querySelector(".numbers");
const numContainer2 = document.querySelector(".numbers2");

/////一列目のエリア（0～9）
numbersNums.forEach((numbersNum) => {
  const b = document.createElement("div");
  b.classList.add("num" + numbersNum);
  b.textContent = numbersNum;
  numContainer.appendChild(b);
});
/////二列目のエリア（10～19）
numbersNums2.forEach((numbersNum2) => {
  const c = document.createElement("div");
  c.classList.add("num" + numbersNum2);
  c.textContent = numbersNum2;
  numContainer2.appendChild(c);
});

/////ここからクリックイベント/////
/////カウントとスコアを初期化、効果音のクラス定義
let count = 10;
let score = 0;
const addCount = -1;
const addScore = 10;
// const music = new Audio("seikai.mp3");
/////エンディングとスタート///////////////////////////////////////
const ending = () => {
  document.querySelector(".question-container").classList.add("hidden");
  document.querySelector(".numbers").classList.add("hidden");
  document.querySelector(".numbers2").classList.add("hidden");
};
const start = () => {
  document.querySelector(".question-container").classList.remove("hidden");
  document.querySelector(".numbers").classList.remove("hidden");
  document.querySelector(".numbers2").classList.remove("hidden");
  document.getElementById("count").textContent = "100てん めざして がんばろう";
  score = 0;
  count = 10;
};

/////一列目のエリア（0～9）///////////////
document.querySelector(".numbers").addEventListener("click", (e) => {
  const anserNum = document.querySelector(".anser").textContent;
  if (anserNum === e.target.textContent) {
    // music.currentTime = 0;
    // music.play();
    alert("おみごと！せいかいだよ！");
    count = count + addCount;
    score = score + addScore;
    if (count === 0) {
      ending();
      document.getElementById(
        "count"
      ).textContent = `あなたの　スコアは 【${score}】てんです！ `;
    } else {
      makeRandomArry();
      document.getElementById(
        "count"
      ).textContent = `スコア 【${score}】  のこりあと　${count}もん`;
    }
  } else {
    alert("ざんねん！");
    score = score - addScore;
    if (score < 1) {
      ending();
      document.getElementById("count").textContent = "もういちど　やってみよう";
    } else {
      document.getElementById(
        "count"
      ).textContent = `スコア 【${score}】  のこりあと　${count}もん`;
    }
  }
});

///二列目のエリア（10～19）//////////////
document.querySelector(".numbers2").addEventListener("click", (e) => {
  const anserNum = document.querySelector(".anser").textContent;
  if (anserNum === e.target.textContent) {
    // music.currentTime = 0;
    // music.play();
    alert("おみごと！せいかいだよ！");
    count = count + addCount;
    score = score + addScore;
    if (count === 0) {
      ending();
      document.getElementById(
        "count"
      ).textContent = `あなたの　スコアは 【${score}】てんです！ `;
    } else {
      makeRandomArry();
      document.getElementById(
        "count"
      ).textContent = `スコア 【${score}】  のこりあと　${count}もん`;
    }
  } else {
    alert("ざんねん！");
    score = score - addScore;
    if (score < 1) {
      ending();
      document.getElementById("count").textContent = "もういちど　やってみよう";
    } else {
      document.getElementById(
        "count"
      ).textContent = `スコア 【${score}】  のこりあと　${count}もん`;
    }
  }
});

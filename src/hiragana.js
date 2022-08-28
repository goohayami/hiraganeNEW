import {
  col1s,
  col2s,
  col3s,
  col4s,
  col5s,
  col6s,
  col7s,
  col8s,
  col9s,
  col10s,
  col11s,
  col12s,
  col13s,
  col14s,
  col15s,
  col16s,
  col17s,
  col18s,
} from "./mojule.js";

const col1sContainer = document.querySelector(".col1");
const col2sContainer = document.querySelector(".col2");
const col3sContainer = document.querySelector(".col3");
const col4sContainer = document.querySelector(".col4");
const col5sContainer = document.querySelector(".col5");
const col6sContainer = document.querySelector(".col6");
const col7sContainer = document.querySelector(".col7");
const col8sContainer = document.querySelector(".col8");
const col9sContainer = document.querySelector(".col9");
const col10sContainer = document.querySelector(".col10");
const col11sContainer = document.querySelector(".col11");
const col12sContainer = document.querySelector(".col12");
const col13sContainer = document.querySelector(".col13");
const col14sContainer = document.querySelector(".col14");
const col15sContainer = document.querySelector(".col15");
const col16sContainer = document.querySelector(".col16");
const col17sContainer = document.querySelector(".col17");
const col18sContainer = document.querySelector(".col18");

col1s.forEach((col1) => {
  const a = document.createElement("div");
  a.textContent = col1;
  a.classList.add("words");
  col1sContainer.appendChild(a);
});
4;
col2s.forEach((col2) => {
  const a = document.createElement("div");
  a.textContent = col2;
  a.classList.add("words");
  col2sContainer.appendChild(a);
});
col3s.forEach((col3) => {
  const a = document.createElement("div");
  a.textContent = col3;
  a.classList.add("words");
  col3sContainer.appendChild(a);
});
col4s.forEach((col4) => {
  const a = document.createElement("div");
  a.textContent = col4;
  a.classList.add("words");
  col4sContainer.appendChild(a);
});
col5s.forEach((col5) => {
  const a = document.createElement("div");
  a.textContent = col5;
  a.classList.add("words");
  col5sContainer.appendChild(a);
});
col6s.forEach((col6) => {
  const a = document.createElement("div");
  a.textContent = col6;
  a.classList.add("words2");
  col6sContainer.appendChild(a);
});
col7s.forEach((col7) => {
  const a = document.createElement("div");
  a.textContent = col7;
  a.classList.add("words4");
  col7sContainer.appendChild(a);
});
col8s.forEach((col8) => {
  const a = document.createElement("div");
  a.textContent = col8;
  a.classList.add("words4");
  col8sContainer.appendChild(a);
});

col9s.forEach((col9) => {
  const a = document.createElement("div");
  a.textContent = col9;
  a.classList.add("words3");
  col9sContainer.appendChild(a);
});

col10s.forEach((col10) => {
  const a = document.createElement("div");
  a.textContent = col10;
  a.classList.add("words3");
  col10sContainer.appendChild(a);
});
col11s.forEach((col11) => {
  const a = document.createElement("div");
  a.textContent = col11;
  a.classList.add("words3");
  col11sContainer.appendChild(a);
});
col12s.forEach((col12) => {
  const a = document.createElement("div");
  a.textContent = col12;
  a.classList.add("words3");
  col12sContainer.appendChild(a);
});
col13s.forEach((col13) => {
  const a = document.createElement("div");
  a.textContent = col13;
  a.classList.add("words3");
  col13sContainer.appendChild(a);
});
col14s.forEach((col14) => {
  const a = document.createElement("div");
  a.textContent = col14;
  a.classList.add("words2");
  col14sContainer.appendChild(a);
});
col15s.forEach((col15) => {
  const a = document.createElement("div");
  a.textContent = col15;
  a.classList.add("words2");
  col15sContainer.appendChild(a);
});
col16s.forEach((col16) => {
  const a = document.createElement("div");
  a.textContent = col16;
  a.classList.add("words4");
  col16sContainer.appendChild(a);
});
col17s.forEach((col17) => {
  const a = document.createElement("div");
  a.textContent = col17;
  a.classList.add("words4");
  col17sContainer.appendChild(a);
});
col18s.forEach((col18) => {
  const a = document.createElement("div");
  a.textContent = col18;
  a.classList.add("words4");
  col18sContainer.appendChild(a);
});

// クリックイベントに必要な要素を取得
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");

const bun1 = document.querySelector(".bun1");
const bun2 = document.querySelector(".bun2");
const bun3 = document.querySelector(".bun3");
const bun4 = document.querySelector(".bun4");
const bun5 = document.querySelector(".bun5");
const hiragana = document.querySelector(".hiragana");
const dakuon = document.querySelector(".dakuon");
const youon = document.querySelector(".youon");
const kigou = document.querySelector(".kigou");

// 人ますあける改行ボタン
btn1.addEventListener("click", () => {
  const a = document.createElement("div");
  a.classList.add("hidden");
  a.textContent = "_";
  if (bun1.childElementCount < 20) {
    bun1.appendChild(a);
  } else if (bun2.childElementCount < 20) {
    bun2.appendChild(a);
  } else if (bun3.childElementCount < 20) {
    bun3.appendChild(a);
  } else if (bun4.childElementCount < 20) {
    bun4.appendChild(a);
  } else if (bun5.childElementCount < 20) {
    bun5.appendChild(a);
  } else {
  }
});

// 戻るボタンで一つずつキャンセル
btn2.addEventListener("click", () => {
  if (bun1.childElementCount < 21 && bun2.childElementCount < 1) {
    const pic = document.querySelector(".pic");
    bun1.removeChild(bun1.lastElementChild);
  } else if (bun2.childElementCount < 21 && bun3.childElementCount < 1) {
    bun2.removeChild(bun2.lastElementChild);
  } else if (bun3.childElementCount < 21 && bun4.childElementCount < 1) {
    bun3.removeChild(bun3.lastElementChild);
  } else if (bun4.childElementCount < 21 && bun5.childElementCount < 1) {
    bun4.removeChild(bun4.lastElementChild);
  } else if (bun5.childElementCount > 0) {
    bun5.removeChild(bun5.lastElementChild);
  }
});

// 文字をタップしてクリックイベント
hiragana.addEventListener("click", (e) => {
  const a = document.createElement("div");
  a.classList.add("pic");
  a.textContent = e.target.textContent;
  if (bun1.childElementCount < 20) {
    bun1.appendChild(a);
  } else if (bun2.childElementCount < 20) {
    bun2.appendChild(a);
  } else if (bun3.childElementCount < 20) {
    bun3.appendChild(a);
  } else if (bun4.childElementCount < 20) {
    bun4.appendChild(a);
  } else if (bun5.childElementCount < 20) {
    bun5.appendChild(a);
  } else {
  }
});
// 濁音
dakuon.addEventListener("click", (e) => {
  const a = document.createElement("div");
  a.classList.add("pic");
  a.textContent = e.target.textContent;
  if (bun1.childElementCount < 20) {
    bun1.appendChild(a);
  } else if (bun2.childElementCount < 20) {
    bun2.appendChild(a);
  } else if (bun3.childElementCount < 20) {
    bun3.appendChild(a);
  } else if (bun4.childElementCount < 20) {
    bun4.appendChild(a);
  } else if (bun5.childElementCount < 20) {
    bun5.appendChild(a);
  } else {
  }
});
// 拗音
youon.addEventListener("click", (e) => {
  console.log(e.target);
  const a = document.createElement("div");
  a.classList.add("pic2");
  a.textContent = e.target.textContent;
  if (bun1.childElementCount < 20) {
    bun1.appendChild(a);
  } else if (bun2.childElementCount < 20) {
    bun2.appendChild(a);
  } else if (bun3.childElementCount < 20) {
    bun3.appendChild(a);
  } else if (bun4.childElementCount < 20) {
    bun4.appendChild(a);
  } else if (bun5.childElementCount < 20) {
    bun5.appendChild(a);
  } else {
  }
});

kigou.addEventListener("click", (e) => {
  const a = document.createElement("div");
  a.classList.add("pic");
  a.textContent = e.target.textContent;
  if (bun1.childElementCount < 20) {
    bun1.appendChild(a);
  } else if (bun2.childElementCount < 20) {
    bun2.appendChild(a);
  } else if (bun3.childElementCount < 20) {
    bun3.appendChild(a);
  } else if (bun4.childElementCount < 20) {
    bun4.appendChild(a);
  } else if (bun5.childElementCount < 20) {
    bun5.appendChild(a);
  } else {
  }
});

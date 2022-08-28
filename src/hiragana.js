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

// 人ますあける改行ボタン
btn1.addEventListener("click", () => {
  const a = document.createElement("br");
  a.classList.add("pic");
  if (bun1.childElementCount < 10) {
    bun1.appendChild(a);
  } else if (bun2.childElementCount < 10) {
    bun2.appendChild(a);
  } else {
    bun3.appendChild(a);
  }
});

// 戻るボタンで一つずつキャンセル
btn2.addEventListener("click", () => {
  if (bun1.childElementCount < 11 && bun2.childElementCount < 1) {
    const pic = document.querySelector(".pic");
    bun1.removeChild(bun1.lastElementChild);
  } else if (bun2.childElementCount < 11 && bun3.childElementCount < 1) {
    bun2.removeChild(bun2.lastElementChild);
  } else if (bun3.childElementCount < 11 && bun4.childElementCount < 1) {
    bun3.removeChild(bun3.lastElementChild);
  } else if (bun4.childElementCount < 11 && bun5.childElementCount < 1) {
    bun4.removeChild(bun4.lastElementChild);
  } else {
    bun5.removeChild(bun5.lastElementChild);
  }
});

// 文字をタップしてクリックイベント
hiragana.addEventListener("click", (e) => {
  const a = document.createElement("div");
  a.classList.add("pic");
  a.textContent = e.target.textContent;
  if (bun1.childElementCount < 10) {
    bun1.appendChild(a);
  } else if (bun2.childElementCount < 10) {
    bun2.appendChild(a);
  } else if (bun3.childElementCount < 10) {
    bun3.appendChild(a);
  } else if (bun4.childElementCount < 10) {
    bun4.appendChild(a);
  } else {
    bun5.appendChild(a);
  }
  console.log(bun1);
});
// 濁音
dakuon.addEventListener("click", (e) => {
  const a = document.createElement("div");
  a.classList.add("pic");
  a.textContent = e.target.textContent;
  if (bun1.childElementCount < 10) {
    bun1.appendChild(a);
  } else if (bun2.childElementCount < 10) {
    bun2.appendChild(a);
  } else {
    bun3.appendChild(a);
  }
});
// 拗音
youon.addEventListener("click", (e) => {
  const a = document.createElement("div");
  a.classList.add("pic2");
  a.textContent = e.target.textContent;
  if (bun1.childElementCount < 10) {
    bun1.appendChild(a);
  } else if (bun2.childElementCount < 10) {
    bun2.appendChild(a);
  } else {
    bun3.appendChild(a);
  }
});

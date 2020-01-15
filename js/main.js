'use strict';

let selMyHand = document.getElementById('select');
let cpuHand;
let judge;

selMyHand.onclick = function () {
  let myHand = selMyHand.selectedIndex;
  console.log(myHand);
  let cpuNum = Math.floor(Math.random() * 3);

  if (cpuNum == 0) {
    cpuHand = "グー";
  } else if (cpuNum == 1) {
    cpuHand = "チョキ";
  } else if (cpuNum == 2) {
    cpuHand = "パー";
  }

  if (myHand == 0 && cpuNum == 1) {
    judge = "あなたの勝ちです！！";
  } else if (myHand == 1 && cpuNum == 2) {
    judge = "あなたの勝ちです！！";
  } else if (myHand == 2 && cpuNum == 0) {
    judge = "あなたの勝ちです！！";
  } else if (myHand == cpuNum) {
    judge = "引き分けです";
  } else {
    judge = "あなたの負けです...";
  }

  document.getElementById('pc-result').innerHTML = "<h2>相手は、”" + cpuHand + "”を出しました</h2>";
  document.getElementById('num-result').innerHTML = judge;
};
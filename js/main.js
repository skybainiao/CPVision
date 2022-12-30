//document.getElementById('ad+').onclick = () =>plus1();
//document.getElementById('ad-').onclick = () =>minus1();
document.getElementById('button-1').onclick = () =>space();

let text = document.getElementById('text');
let text1 = document.getElementById('text1');
let text2 = document.getElementById('text2');
let text3 = document.getElementById('text3');
let text4 = document.getElementById('text4');
let text5 = document.getElementById('text5');
let text6 = document.getElementById('text6');
let text7 = document.getElementById('text7');
let text8 = document.getElementById('text8');
let star = document.getElementById('red');
let left = document.getElementById('arrow-1');
left.onclick = () =>arrows1();
let up = document.getElementById('arrow-2');
up.onclick = () =>arrows2();
let down = document.getElementById('arrow-4');
down.onclick = () =>arrows4();
let right = document.getElementById('arrow-3');
right.onclick = () =>arrows3();
let A = document.getElementById('left');
A.onclick = () =>arrows1();
let W = document.getElementById('up');
W.onclick = () =>arrows2();
let S = document.getElementById('down');
S.onclick = () =>arrows4();
let D = document.getElementById('right');
D.onclick = () =>arrows3();
let blank = document.getElementById('button-1');
let score = document.getElementById('score-1');
let levels = document.getElementById('level-1');
let speed = document.getElementById('speed-1');
let restart = document.getElementById('restart-1');
restart.onclick = () =>restart1();
let quit = document.getElementById('quit-1');
quit.onclick = () =>quit1();
let tipButton = document.getElementById('tipButton');
let tips = document.getElementById('tipText');
let bt1 = document.getElementById('tipExit');
bt1.onclick = () =>exit1();
let bt2 = document.getElementById('continue1');
bt2.onclick = () =>continue1();

let num1 = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;
let now = 0;
let numForPosition = 0;
let letter = 'W';
let letter1 = 'F';
let letter2 = 'U';
let letter3 = 'W';
let letter4 = 'F';
let letter5 = 'U';
let scores = 0;
let level = 1;
let speeds = 1;
let timeout=300;
let turnOn=false;
let countdownTimer;
let countDownStar;
let StarShow;
let timeDown;
let lock = false;


window.onload=function () {
  setText();
  starShow();
  countdown();
  keyboard();

}

function restart1() {
  clearText();
  level=1;
  timeout=300;
  scores=0;
  refreshScores();
  refreshTime();
  refreshLevel1();
  setText();
  countdown();
  keyboard();
}

function quit1() {

}

function clearText() {
  text1.style.display='none';
  text2.style.display='none';
  text3.style.display='none';
  text4.style.display='none';
  text5.style.display='none';
  text6.style.display='none';
  text7.style.display='none';
  text8.style.display='none';
}

function refreshLevel1() {
  levels.innerHTML="Level: "+level;
}


function changeSpeed() {
  clearStar();
  starShow();
  star.style.display='none';
}


function clearStar() {
  clearInterval(countDownStar);
  clearInterval(StarShow);
}

function plus1(){
  if (timeout<600){
    timeout+=60;
    refreshTime();
  }
}

function minus1(){
  if (timeout>0){
    timeout-=60;
    refreshTime()
  }
}

function refreshTime(){
  document.getElementById('time-1').innerHTML="Time: "+timeout;
}

function space() {
  if (star.style.display==='block') {
    scores += 10;
    changeSpeed();
  }
  else if (star.style.display==='none') {
    scores -= 10;
  }

  refreshScores();
}

function arrows2() {
  changePosition();
  setText678();
  if (letter==='W'){
    scores+=10;
  }
  else {
    scores-=10;
  }
  refreshScores();
  setText();
}

function arrows1() {
  changePosition();
  setText678();
  if (letter==='A'){
    scores+=10;
  }
  else {
    scores-=10;
  }
  refreshScores();
  setText();
}

function arrows4() {
  changePosition();
  setText678();
  if (letter==='S'){
    scores+=10;
  }
  else {
    scores-=10;
  }
  refreshScores();
  setText();
}

function arrows3() {
  changePosition();
  setText678();
  if (letter==='D'){
    scores+=10;
  }
  else {
    scores-=10;
  }
  refreshScores();
  setText();
}

function changePosition() {
  numForPosition=Math.floor(Math.random() * 9);
  if (level===1){
    //
  }
  else if (level===2){
    if (text.style.left==='50%'){
      text.style.left='52%';
      text1.style.left='50%';
    }
    else {
      text1.style.left='52%';
      text.style.left='50%';
    }
  }
  else if (level===3){
    if (text.style.left==='50%'){
      text.style.left='52%';
      text1.style.left='54%';
      text2.style.left='50%';
    }
    else if (text2.style.left==='50%'){
      text1.style.left='50%';
      text.style.left='54%';
      text2.style.left='52%';
    }
    else if (text1.style.left==='50%'){
      text.style.left='50%';
      text1.style.left='52%';
      text2.style.left='54%';
    }
  }
  else if (level===4){
    if (numForPosition===0){
      text.style.top='45%';
      text.style.left='50%';
      text1.style.top='45%';
      text1.style.left='52%';
      text2.style.top='45%';
      text2.style.left='54%';
      text3.style.top='40%';
      text3.style.left='50%';
      text4.style.top='40%';
      text4.style.left='52%';
      text5.style.top='40%';
      text5.style.left='54%';
      text6.style.top='35%';
      text6.style.left='50%';
      text7.style.top='35%';
      text7.style.left='52%';
      text8.style.top='35%';
      text8.style.left='54%';
    }
    else if (numForPosition===1){
      text.style.top='45%';
      text.style.left='52%';
      text1.style.top='45%';
      text1.style.left='50%';
      text2.style.top='45%';
      text2.style.left='54%';
      text3.style.top='40%';
      text3.style.left='50%';
      text4.style.top='40%';
      text4.style.left='52%';
      text5.style.top='40%';
      text5.style.left='54%';
      text6.style.top='35%';
      text6.style.left='50%';
      text7.style.top='35%';
      text7.style.left='52%';
      text8.style.top='35%';
      text8.style.left='54%';
    }
    else if (numForPosition===2){
      text.style.top='45%';
      text.style.left='54%';
      text1.style.top='45%';
      text1.style.left='52%';
      text2.style.top='45%';
      text2.style.left='50%';
      text3.style.top='40%';
      text3.style.left='50%';
      text4.style.top='40%';
      text4.style.left='52%';
      text5.style.top='40%';
      text5.style.left='54%';
      text6.style.top='35%';
      text6.style.left='50%';
      text7.style.top='35%';
      text7.style.left='52%';
      text8.style.top='35%';
      text8.style.left='54%';
    }
    else if (numForPosition===3){
      text.style.top='40%';
      text.style.left='50%';
      text1.style.top='45%';
      text1.style.left='52%';
      text2.style.top='45%';
      text2.style.left='54%';
      text3.style.top='45%';
      text3.style.left='50%';
      text4.style.top='40%';
      text4.style.left='52%';
      text5.style.top='40%';
      text5.style.left='54%';
      text6.style.top='35%';
      text6.style.left='50%';
      text7.style.top='35%';
      text7.style.left='52%';
      text8.style.top='35%';
      text8.style.left='54%';
    }
    else if (numForPosition===4){
      text.style.top='40%';
      text.style.left='52%';
      text1.style.top='45%';
      text1.style.left='52%';
      text2.style.top='45%';
      text2.style.left='54%';
      text3.style.top='40%';
      text3.style.left='50%';
      text4.style.top='45%';
      text4.style.left='50%';
      text5.style.top='40%';
      text5.style.left='54%';
      text6.style.top='35%';
      text6.style.left='50%';
      text7.style.top='35%';
      text7.style.left='52%';
      text8.style.top='35%';
      text8.style.left='54%';
    }
    else if (numForPosition===5){
      text.style.top='40%';
      text.style.left='54%';
      text1.style.top='45%';
      text1.style.left='52%';
      text2.style.top='45%';
      text2.style.left='54%';
      text3.style.top='40%';
      text3.style.left='50%';
      text4.style.top='40%';
      text4.style.left='52%';
      text5.style.top='45%';
      text5.style.left='50%';
      text6.style.top='35%';
      text6.style.left='50%';
      text7.style.top='35%';
      text7.style.left='52%';
      text8.style.top='35%';
      text8.style.left='54%';
    }
    else if (numForPosition===6){
      text.style.top='35%';
      text.style.left='50%';
      text1.style.top='45%';
      text1.style.left='52%';
      text2.style.top='45%';
      text2.style.left='54%';
      text3.style.top='40%';
      text3.style.left='50%';
      text4.style.top='40%';
      text4.style.left='52%';
      text5.style.top='40%';
      text5.style.left='54%';
      text6.style.top='45%';
      text6.style.left='50%';
      text7.style.top='35%';
      text7.style.left='52%';
      text8.style.top='35%';
      text8.style.left='54%';
    }
    else if (numForPosition===7){
      text.style.top='35%';
      text.style.left='52%';
      text1.style.top='45%';
      text1.style.left='52%';
      text2.style.top='45%';
      text2.style.left='54%';
      text3.style.top='40%';
      text3.style.left='50%';
      text4.style.top='40%';
      text4.style.left='52%';
      text5.style.top='40%';
      text5.style.left='54%';
      text6.style.top='35%';
      text6.style.left='50%';
      text7.style.top='45%';
      text7.style.left='50%';
      text8.style.top='35%';
      text8.style.left='54%';
    }
    else if (numForPosition===8){
      text.style.top='35%';
      text.style.left='54%';
      text1.style.top='45%';
      text1.style.left='52%';
      text2.style.top='45%';
      text2.style.left='54%';
      text3.style.top='40%';
      text3.style.left='50%';
      text4.style.top='40%';
      text4.style.left='52%';
      text5.style.top='40%';
      text5.style.left='54%';
      text6.style.top='35%';
      text6.style.left='50%';
      text7.style.top='35%';
      text7.style.left='52%';
      text8.style.top='45%';
      text8.style.left='50%';
    }
  }
}


function keyboard() {
  document.onkeydown=function () {

    if (lock===false) {
      let keyCode = event.keyCode;
      if (keyCode === 32) {
        if (star.style.display==='block') {
          scores += 10;
          changeSpeed();
        }
        else if (star.style.display==='none') {
          scores -= 10;
        }

        refreshScores();
      }
      if (keyCode === 87 || keyCode === 38) {
        changePosition();
        setText678();
        if (letter === 'W') {
          scores += 10;
        } else {
          scores -= 10;
        }
        refreshScores();
        setText();
      }
      if (keyCode === 65 || keyCode === 37) {
        changePosition();
        setText678();
        if (letter === 'A') {
          scores += 10;
        } else {
          scores -= 10;
        }
        refreshScores();
        setText();
      }
      if (keyCode === 83 || keyCode === 40) {
        changePosition();
        setText678();
        if (letter === 'S') {
          scores += 10;
        } else {
          scores -= 10;
        }
        refreshScores();
        setText();
      }
      if (keyCode === 68 || keyCode === 39) {
        changePosition();
        setText678();
        if (letter === 'D') {
          scores += 10;
        } else {
          scores -= 10;
        }
        refreshScores();
        setText();
      }

      if (keyCode === 70) {
        changePosition();
        setText678();
        if (letter1 === 'F') {
          scores -= 10;
        }
        refreshScores();
        setText1();
      }
      if (keyCode === 67) {
        changePosition();
        setText678();
        if (letter1 === 'C') {
          scores -= 10;
        }
        refreshScores();
        setText1();
      }
      if (keyCode === 66) {
        changePosition();
        setText678();
        if (letter1 === 'B') {
          scores -= 10;
        }
        refreshScores();
        setText1();
      }
      if (keyCode === 84) {
        changePosition();
        setText678();
        if (letter1 === 'T') {
          scores -= 10;
        }
        refreshScores();
        setText1();
      }


      if (keyCode === 85) {
        changePosition();
        setText678();
        if (letter2 === 'U') {
          scores -= 10;
        }
        refreshScores();
        setText2();
      }
      if (keyCode === 74) {
        changePosition();
        setText678();
        if (letter2 === 'J') {
          scores -= 10;
        }
        refreshScores();
        setText2();
      }
      if (keyCode === 73) {
        changePosition();
        setText678();
        if (letter2 === 'I') {
          scores -= 10;
        }
        refreshScores();
        setText2();
      }
      if (keyCode === 79) {
        changePosition();
        setText678();
        if (letter2 === 'O') {
          scores -= 10;
        }
        refreshScores();
        setText2();
      }

      ////////////////////
      if (keyCode === 69) {
        changePosition();
        setText678();
        if (letter3 === 'E') {
          scores -= 10;
        }
        refreshScores();
        setText3();
      }
      if (keyCode === 71) {
        changePosition();
        setText678();
        if (letter3 === 'G') {
          scores -= 10;
        }
        refreshScores();
        setText3();
      }
      if (keyCode === 75) {
        changePosition();
        setText678();
        if (letter3 === 'K') {
          scores -= 10;
        }
        refreshScores();
        setText3();
      }
      if (keyCode === 80) {
        changePosition();
        setText678();
        if (letter3 === 'P') {
          scores -= 10;
        }
        refreshScores();
        setText3();
      }

      ////////
      if (keyCode === 82) {
        changePosition();
        setText678();
        if (letter4 === 'R') {
          scores -= 10;
        }
        refreshScores();
        setText4();
      }
      if (keyCode === 86) {
        changePosition();
        setText678();
        if (letter4 === 'V') {
          scores -= 10;
        }
        refreshScores();
        setText4();
      }
      if (keyCode === 88) {
        changePosition();
        setText678();
        if (letter4 === 'X') {
          scores -= 10;
        }
        refreshScores();
        setText4();
      }
      if (keyCode === 90) {
        changePosition();
        setText678();
        if (letter4 === 'Z') {
          scores -= 10;
        }
        refreshScores();
        setText4();
      }

      if (keyCode === 81) {
        changePosition();
        setText678();
        if (letter5 === 'Q') {
          scores -= 10;
        }
        refreshScores();
        setText5();
      }
      if (keyCode === 89) {
        changePosition();
        setText678();
        if (letter5 === 'y') {
          scores -= 10;
        }
        refreshScores();
        setText5();
      }
      if (keyCode === 72) {
        changePosition();
        setText678();
        if (letter5 === 'H') {
          scores -= 10;
        }
        refreshScores();
        setText5();
      }
      if (keyCode === 76) {
        changePosition();
        setText678();
        if (letter5 === 'L') {
          scores -= 10;
        }
        refreshScores();
        setText5();
      }
    }
  }
}

function recursionNumber() {
  numForPosition=Math.floor(Math.random() * 9);
}

function recursion() {
  num1=Math.floor(Math.random() * 4);
  num2=Math.floor(Math.random() * 16);
  num3=Math.floor(Math.random() * 31);
  if (num3===0){
    num4=500;
  }
  else if (num3===1){
    num4=600;
  }
  else if (num3===2){
    num4=700;
  }
  else if (num3===3){
    num4=800;
  }
  else if (num3===4){
    num4=900;
  }
  else if (num3===5){
    num4=1000;
  }
  else if (num3===6){
    num4=1100;
  }
  else if (num3===7){
    num4=1200;
  }
  else if (num3===8){
    num4=1300;
  }
  else if (num3===9){
    num4=1400;
  }
  else if (num3===10){
    num4=1500;
  }
  else if (num3===11){
    num4=1600;
  }
  else if (num3===12){
    num4=1700;
  }
  else if (num3===13){
    num4=1800;
  }
  else if (num3===14){
    num4=1900;
  }
  else if (num3===15){
    num4=2000;
  }
  else if (num3===16){
    num4=2100;
  }
  else if (num3===17){
    num4=2200;
  }
  else if (num3===18){
    num4=2300;
  }
  else if (num3===19){
    num4=2400;
  }
  else if (num3===20){
    num4=2500;
  }
  else if (num3===21){
    num4=2600;
  }
  else if (num3===22){
    num4=2700;
  }
  else if (num3===23){
    num4=2800;
  }
  else if (num3===24){
    num4=2900;
  }
  else if (num3===25){
    num4=3000;
  }
  else if (num3===26){
    num4=3100;
  }
  else if (num3===27){
    num4=3200;
  }
  else if (num3===28){
    num4=3300;
  }
  else if (num3===29){
    num4=3400;
  }
  else if (num3===30){
    num4=3500;
  }
}

function changeLevel() {
  if (level===1){
    level=2;
    levels.innerHTML="Level: "+level;
  }
  else if (level===2){
    level=3;
    levels.innerHTML="Level: "+level;
  }
  else if (level===3){
    level=4;
    levels.innerHTML="Level: "+level;
  }
}

function setText() {
  recursion();
  if (num1===0){
    letter='W';
    text.innerText=letter;
  }
  else if (num1===1){
    letter='A';
    text.innerText=letter;
  }
  else if (num1===2){
    letter='S';
    text.innerText=letter;
  }
  else if (num1===3){
    letter='D';
    text.innerText=letter;
  }
}

function setText1() {
  recursion();
  if (num1===0){
    letter1="F";
    text1.innerText=letter1;
  }
  else if (num1===1){
    letter1='C';
    text1.innerText=letter1;
  }
  else if (num1===2){
    letter1='B';
    text1.innerText=letter1;
  }
  else if (num1===3){
    letter1='T';
    text1.innerText=letter1;
  }
}

function setText2() {
  recursion();
  if (num1===0){
    letter2="U";
    text2.innerText=letter2;
  }
  else if (num1===1){
    letter2='J';
    text2.innerText=letter2;
  }
  else if (num1===2){
    letter2='I';
    text2.innerText=letter2;
  }
  else if (num1===3){
    letter2='O';
    text2.innerText=letter2;
  }
}

function setText3() {
  recursion();
  if (num1===0){
    letter3="E";
    text3.innerText=letter3;
  }
  else if (num1===1){
    letter3='G';
    text3.innerText=letter3;
  }
  else if (num1===2){
    letter3='K';
    text3.innerText=letter3;
  }
  else if (num1===3){
    letter3='P';
    text3.innerText=letter3;
  }
}
function setText4() {
  recursion();
  if (num1===0){
    letter4="R";
    text4.innerText=letter4;
  }
  else if (num1===1){
    letter4='V';
    text4.innerText=letter4;
  }
  else if (num1===2){
    letter4='X';
    text4.innerText=letter4;
  }
  else if (num1===3){
    letter4='Z';
    text4.innerText=letter4;
  }
}
function setText5() {
  recursion();
  if (num1===0){
    letter5="Q";
    text5.innerText=letter5;
  }
  else if (num1===1){
    letter5='Y';
    text5.innerText=letter5;
  }
  else if (num1===2){
    letter5='H';
    text5.innerText=letter5;
  }
  else if (num1===3){
    letter5='L';
    text5.innerText=letter5;
  }
}

function setText678() {
  recursion();
  setText3();
  setText4();
  setText5();
  if (num1===0){
    text6.innerText='N';
    text7.innerText='M';
    text8.innerText='X';
  }
  else if (num1===1){
    text6.innerText='P';
    text7.innerText='O';
    text8.innerText='Z';
  }
  else if (num1===2){
    text6.innerText='Y';
    text7.innerText='Q';
    text8.innerText='E';
  }
  else if (num1===3){
    text6.innerText='T';
    text7.innerText='G';
    text8.innerText='H';
  }
}

function starShow() {
  star.style.display='block';
  countDownStar = setInterval(function () {

    recursion();
    console.log(num4);
    if (num1===0){
      if (num2===0){
        star.style.top='50%';
        star.style.left='38%';
      }
      else if (num2===1){
        star.style.top='35%';
        star.style.left='50%';
      }
      else if (num2===2){
        star.style.top='50%';
        star.style.left='65%';
      }
      else if (num2===3){
        star.style.top='65%';
        star.style.left='50%';
      }
    }
    else if (num1===1){
      if (num2===4){
        star.style.top='50%';
        star.style.left='25%';
      }
      else if (num2===5){
        star.style.top='25%';
        star.style.left='50%';
      }
      else if (num2===6){
        star.style.top='78%';
        star.style.left='50%';
      }
      else if (num2===7){
        star.style.top='50%';
        star.style.left='75%';
      }
    }
    else if (num1===2){
      if (num2===8){
        star.style.top='50%';
        star.style.left='15%';
      }
      else if (num2===9){
        star.style.top='15%';
        star.style.left='50%';
      }
      else if (num2===10){
        star.style.top='50%';
        star.style.left='85%';
      }
      else if (num2===11){
        star.style.top='85%';
        star.style.left='50%';
      }
    }
    else if (num1===3){
      if (num2===12){
        star.style.top='50%';
        star.style.left='5%';
      }
      else if (num2===13){
        star.style.top='2%';
        star.style.left='50%';
      }
      else if (num2===14){
        star.style.top='55%';
        star.style.left='92%';
      }
      else if (num2===15){
        star.style.top='92%';
        star.style.left='50%';
      }
    }
  },num4);

  StarShow = setInterval(function () {
    recursion();
    if (star.style.display==='block'){

      star.style.display='none';
    }
    else {

      star.style.display='block';
    }
  },num4);
}

function refreshTime(){
  document.getElementById('time-1').innerHTML="Daily training: "+timeout;
}

function refreshScores() {
  score.innerHTML="Score: "+scores;
}

function destroy(){
  turnOn = false;
  timeout=0;
  clearInterval(countdownTimer);
  refreshTime();
}

function showText(content,time) {
  tips.innerHTML=content;
  tips.style.display='block';
  stopTime();
  lock1();
  timeDown = setInterval(function () {
    time--;
    if (time<=0){
      unlock();
      countdown();
      tips.style.display='none';
      clearInterval(timeDown);
    }
  },1000);
}

function showButton() {
  tipButton.style.display='block';
}

function stopTime() {
  turnOn=false;
  clearInterval(countdownTimer);
}

function continue1() {
  unlock();
  timeout=100000;
  refreshTime();
  countdown();
  tips.style.display='none';
  tipButton.style.display='none';
}

function exit1() {
  exit();
  tips.style.display='none';
  tipButton.style.display='none';
}

function lock1() {
  lock=true;
}

function unlock() {
  lock=false;
}


//countDown System
function countdown(){
  if (turnOn===false){
    turnOn = true;
    countdownTimer = setInterval(function(){
      if (timeout>0){
        refreshTime();
        timeout--;
      }
      else if (timeout<=0){
        showText("You have finished daily exercise.Would you like to continue or exit the game?");
        showButton();
      }

      if (timeout===275 && scores>=100){
        showText("Great Job! Level 1 has been passed,Next level starts in: 3 seconds",4);
        changeLevel();
        text1.style.display='block';
      }
      else if (timeout===275 && scores<100){
        showText("Level not finished successfully. Try again",4);
        //showButton();
        //alert("You failed,you can restart the game");
      }


      if (timeout===225 && scores>=400){
        showText("Great Job! Level 2 has been passed,Next level starts in: 3 seconds",4);
        changeLevel();
        text2.style.display='block';
      }
      else if (timeout===225 && scores<400){
        showText("Level not finished successfully. Try again",4);
        //alert("You failed,you can restart the game");
      }


      if (timeout===150 && scores>=1000){
        showText("Great Job! Level 3 has been passed,Next level starts in: 3 seconds",4);
        changeLevel();
        text3.style.display='block';
        text4.style.display='block';
        text5.style.display='block';
        text6.style.display='block';
        text7.style.display='block';
        text8.style.display='block';
      }
      else if (timeout===150 && scores<1000){
        showText("Level not finished successfully. Try again",4);
        //alert("You failed,you can restart the game");
      }

      if (timeout===50 && scores>=1500){
        showText("You have passed all levels.Would you like to continue or exit the game?");
        showButton();
        //alert("You passed all levels!")
      }
      else if (timeout===50 && scores<1500){
        showText("Level not finished successfully. Try again",4);
        //alert("You failed,you can restart the game");
      }



    }, 1000);
  }
}

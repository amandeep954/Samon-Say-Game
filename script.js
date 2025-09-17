let gemseq = [];
let userseq = [];
let started = false;
let level = 0;
let btns = ["yellow", "red", "green", "blue"];

let btn1 = document.querySelector("#start-btn");
btn1.addEventListener("click", function () {
  if (!started) {
    started = true;
    levelUp();
    this.style.display = "none";
  }
});

function btnflash(randbtn) {
  randbtn.classList.add("flash");
  setTimeout(function () {
    randbtn.classList.remove("flash");
  }, 250);
}

let h2 = document.querySelector("h2");
function levelUp() {
  level++;
  h2.textContent = `Level ${level}`;
  let randomIndex = Math.floor(Math.random() * 4);
  let randomcolor = btns[randomIndex];
  gemseq.push(randomcolor);
  console.log(gemseq);
  let randbtn = document.querySelector(`#${randomcolor}`);
  btnflash(randbtn);
}

function checkAns(index) {
  console.log(index);
  console.log(userseq[index]);
  console.log(gemseq[index]);
  if (userseq[index] === gemseq[index]) {
    console.log("Correct!");
    if (userseq.length === gemseq.length) {
      console.log(`Level ${level}`);
      console.log("----------------------------------------");
      console.log("-----------------------------------------");
      setTimeout(function () {
        userseq = [];
        levelUp();
      }, 1000);
    }
  } else {
    console.log("Wrong!");
    h2.textContent = `Game Over at Level ${level}. Press Start to Restart`;
    started = false;
    level = 0;
    gemseq = [];
    userseq = [];
    btn1.style.display = "inline-block";
  }
}

function btnpress() {
  if (!started) return;
  let btn = this;
  btnflash(btn);
  let usercolor = btn.id;
  userseq.push(usercolor);
  console.log(userseq);
  console.log("----------------------------------------");
  console.log("-----------------------------------------");

  checkAns(userseq.length - 1);
}

let allbtns = document.querySelectorAll(".box");
for (let btn of allbtns) {
  btn.addEventListener("click", btnpress);
}





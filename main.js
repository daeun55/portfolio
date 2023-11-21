"use strict";
let target = document.querySelector("#dynamic");
let stringArr = ["Developer", "MOBILE", "FRONT-END"];
let selectString = stringArr[Math.floor(Math.random()*stringArr.length)];
let selectStringArr = selectString.split("");

function randomString(){
    let stringArr = ["Developer", "MOBILE", "FRONT-END"];
    let selectString = stringArr[Math.floor(Math.random()*stringArr.length)];
    let selectStringArr = selectString.split("");
    // 문자열을 쪼갬 

    return selectStringArr;
}

//리셋
function resetTyping(){
    target.textContent="";
    dynamic(randomString());
}

// 분해된 텍스트 출력 함수
function dynamic(randomArr){
    console.log(randomArr);
    if(randomArr.length>0){
        target.textContent+=randomArr.shift();
        setTimeout(function(){
            dynamic(randomArr);
        },80);
    }else{
        setTimeout(resetTyping, 3000);
    }
}

dynamic (randomString());


//커서 깜빡임 
function blink(){
    target.classList.toggle("active");
}
setInterval(blink, 500);


const skBtn = document.querySelector(".sk");
skBtn.addEventListener("click", () => {
  console.log("button click");
  const scrollTo = document.querySelector("#skills");
  scrollTo.scrollIntoView({ behavior: "smooth" });


});


const amBtn = document.querySelector(".am");
amBtn.addEventListener("click", () => {
  console.log("button click");
  const scrollTo = document.querySelector("#about");
  scrollTo.scrollIntoView({ behavior: "smooth" });


});


const hmBtn = document.querySelector(".hm");
hmBtn.addEventListener("click", () => {
  console.log("button click");
  const scrollTo = document.querySelector("#home");
  scrollTo.scrollIntoView({ behavior: "smooth" });


});



const mwBtn = document.querySelector(".mw");
mwBtn.addEventListener("click", () => {
  console.log("button click");
  const scrollTo = document.querySelector("#works");
  scrollTo.scrollIntoView({ behavior: "smooth" });


});



const tchBtn = document.querySelector(".tch");
tchBtn.addEventListener("click", () => {
  console.log("button click");
  const scrollTo = document.querySelector("#contact");
  scrollTo.scrollIntoView({ behavior: "smooth" });


});





  
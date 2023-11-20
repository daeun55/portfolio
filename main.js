"use strict";



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





  
let hunger = 50;
let happiness = 50;

const hungerBar = document.getElementById("hunger-bar");
const happinessBar = document.getElementById("happiness-bar");


updateBar(hunger, hungerBar);
updateBar(happiness, happinessBar);

function updateBar(val, element){
  val = Math.max(0, Math.min(100, val));
  element.style.width = val + "%";
  return val;
}

function decay(){
  hunger = updateBar(hunger - 1, hungerBar);
  happiness = updateBar(happiness - 1, happinessBar);
}

setInterval(decay, 3000);

function feed(){
  console.log("feed run")
  hunger = updateBar(hunger + 10, hungerBar);
}

function play(){
  happiness = updateBar(happiness + 10, happinessBar);
}


document.getElementById("feedBtn").addEventListener("click", feed);

document.getElementById("playBtn").addEventListener("click", play);

console.log(hunger);


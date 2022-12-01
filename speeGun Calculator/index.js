// Elements
const calculate = document.getElementById("calculate");
const user_input = document.getElementById("input_section");
const speedEl = document.getElementById("speed_section");

calculate.addEventListener("click", calculateCoins);

function calculateCoins() {
  const speed =  Number(user_input.value);
  let points = "";
  if (speed < 70) {
    points = "OK";

  } else if(speed > 70) {
    points = ((speed - 70)/ 5);
    if(points > 12) {
        points = "License suspended"
    }
  } else {
    points = "Unkown input";
  }

  
  let semesterGrade = points;
  speedEl.innerHTML = semesterGrade;

 
}
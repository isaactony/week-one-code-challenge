// Elements
const calculate = document.getElementById("calculate");
const user_input = document.getElementById("input_section");
const gradeEl = document.getElementById("grade_section");

calculate.addEventListener("click", calculateCoins);

function calculateCoins() {
  const grade =  Number(user_input.value);

  let final_grade = "A";
  if (grade > 79) {
    final_grade = "A";

  } else if(grade > 60 && grade <=79) {
    final_grade = "B";
  } else if(grade > 49 && grade <=60) {
    final_grade  = "C";
  } else if (grade > 40 && grade <=50) {
    final_grade = "D";
  } else if (grade < 40 && grade >= 0) {
    final_grade = "E"
  } else {
    final_grade = "Enter Valid Marks";
  }

  
  let semesterGrade = final_grade;
  gradeEl.innerHTML = semesterGrade;

 
}

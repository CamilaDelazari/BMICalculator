const calculate = document.getElementById("calculate");

function BMI(){
const name = document.getElementById("name").value;
const height = parseFloat(document.getElementById("height").value);
const weight = parseFloat(document.getElementById("weight").value);
const result = document.getElementById("result");
 
  if(name !== "" && height !== "" && weight !== "") {  
    const BMIvalue = (height * height);
    const BMIvalue2 = weight / BMIvalue.toFixed(1);
 if (BMIvalue2 < 18.5) {
 result.textContent = `Underweight, ${name}`;
 } else if (BMIvalue2 < 25) {
 result.textContent = `Normal, ${name}`;
 } else if (BMIvalue2 < 30) {
 result.textContent = `Overweight, ${name}`;
 } else if (BMIvalue2 < 35) {
 result.textContent = `Obese, ${name}`;
 } else {
 result.textContent = `Extremily Obese, ${name}`;
} 
  } else {
    result.textContent = "Fill in the fields correctly";
  }
}
calculate.addEventListener("click", BMI);
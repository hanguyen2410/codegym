function check() {

let cannang = document.getElementById("weight").value;
let chieucao = document.getElementById("height").value;
let bmi = cannang / (Math.pow(chieucao,2));
let result = "";

if (bmi < 18){
    document.write(result = "Underweight");
} else if (bmi < 25.0) {
    document.write(result = "Normal");
} else if (bmi < 30.0) {
    document.write(result = "Overweight")
}else {
    document.write ("obese");
} 
} 

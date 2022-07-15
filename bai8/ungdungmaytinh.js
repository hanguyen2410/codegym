function Addition() {
    let number11 = document.getElementById("number1").value;
    let number22 = document.getElementById("number2").value;
    let result = "Result Division: " + (Number(number11) + Number(number22));
    document.getElementById("Result Division").innerHTML = result;
}
function Subtraction() {
    let number11 = document.getElementById("number1").value;
    let number22 = document.getElementById("number2").value;
    let result = "Result Division: " + (number11 - number22);
    document.getElementById("Result Division").innerHTML = result;
}
function Multiplication() {
    let number11 = document.getElementById("number1").value;
    let number22 = document.getElementById("number2").value;
    let result = "Result Division: " + (number11 * number22);
    document.getElementById("Result Division").innerHTML = result;
}
function Division() {
    let number11 = document.getElementById("number1").value;
    let number22 = document.getElementById("number2").value;
    let result = "Result Division: " + (number11 / number22);
    document.getElementById("Result Division").innerHTML = result;
}

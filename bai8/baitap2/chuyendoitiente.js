function change() {
    let amount = document.getElementById("Amount").value;
    let from = document.getElementById("Fromc").value;
    let to = document.getElementById("Toc").value;
    let result;

    if (from == "VND" && to == "USD") {
        result = "Thành Tiền: " + (amount / 23000) + "  USD";
    } 
    else if (from == "USD" && to == "VND") {
        result = "Thành Tiền: " + (amount * 23000) + " VNĐ";
    }
    else if (from == to == "VND") {
        result = "Thành Tiền: " + amount + "VNĐ";
    } else {
    result = "Thành Tiền: " + amount + "USD";
}
    document.getElementById("Result").innerHTML = result;
}

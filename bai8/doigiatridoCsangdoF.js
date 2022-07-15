//inputdoc = prompt(document.getElementById("nhapdoc").value);
//let doc = parseInt(inputdoc)
//ocument.write(document.getElementById("nhapdof")).value

function additional() {
   let ketqua = document.getElementById("nhapdoc").value;
   ketqua = ketqua * 1.8 + 32;
   document.getElementById ("nhapdof").value = ketqua;
}
function reset() {
    document.getElementById("nhapdoc").value = null;
    document.getElementById("nhapdof").value = null;
}

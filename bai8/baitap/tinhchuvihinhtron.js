function additional() {
    let chuvi = document.getElementById("nhapR").value;
    chuvic = chuvi * chuvi * Math.PI;
    document.getElementById("C").value = chuvic;
 }
 function reset() {
     document.getElementById("nhapR").value = null;
     document.getElementById("C").value = null;
 }
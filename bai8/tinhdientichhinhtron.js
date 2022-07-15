function additional() {
    let dientich = document.getElementById("nhapR").value;
    dientichS = Math.Pow(dientich,2) * Math.PI;
    document.getElementById ("S").value = dientichS;
 }
 function reset() {
     document.getElementById("nhapR").value = null;
     document.getElementById("S").value = null;
 }
 
function hien(value) {
    document.getElementById("manhinh").value += value;
}
function ketqua() {
  let tong = document.getElementById("manhinh").value;
  let a = eval(tong);
  document.getElementById("manhinh").value = a;
}
function xoa() {
    document.getElementById("manhinh").value = '';
}
inputDiemVatLy = prompt("Điểm Vật Lý");
inputDiemHoa = prompt("Điểm Hóa")
inputDiemSinh = prompt("Điểm Sinh")
let vatly = parseInt(inputDiemVatLy)
let hoa = parseInt(inputDiemHoa)
let sinh = parseInt(inputDiemSinh)
let area = (vatly + hoa + sinh) / 3
document.write("Điểm Trung Bình: " + area)
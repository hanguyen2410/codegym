let loged = false;
const enterKey = 13;
var orderList = [];

//top
let menuBar = document.querySelector(".menu-bar")
menuBar.addEventListener("click", function () {
    menuBar.classList.toggle("active")
    document.querySelector(".menu-items").classList.toggle("active")
})
let total = document.querySelector(".total")
window.addEventListener("scroll", function () {
    const x = this.pageYOffset;
    if (x > 80) {
        total.classList.add("active");
    } else {
        total.classList.remove("active");
    }
})
//Menu
// let menuTitle = document.querySelector(".menu-title");
// menuTitle.addEventListener("click",function(x){
//     if(x.target.classList.contains("menu-button")){
//         let Target = x.target.getAttribute("data-title");
//         menuTitle.querySelector(".active").classList.remove("active");
//         x.target.classList.add("active");
//         let menuItem = document.querySelector(".menu");
//         menuItem.querySelector(".menu-item-content.active").classList.remove("active");
//         menuItem.querySelector(Target).classList.add("active");
//     }
// })
function morning() {
    document.querySelector(`#morning`).classList.remove('d-none');
    document.querySelector(`#lunch`).classList.add('d-none');
    document.querySelector(`#night`).classList.add('d-none');
    document.querySelector(`#drink`).classList.add('d-none');
}
function lunch() {
    document.querySelector(`#morning`).classList.add('d-none');
    document.querySelector(`#lunch`).classList.remove('d-none');
    document.querySelector(`#night`).classList.add('d-none');
    document.querySelector(`#drink`).classList.add('d-none');
}
function night() {
    document.querySelector(`#morning`).classList.add('d-none');
    document.querySelector(`#lunch`).classList.add('d-none');
    document.querySelector(`#night`).classList.remove('d-none');
    document.querySelector(`#drink`).classList.add('d-none');
}
function drink() {
    document.querySelector(`#morning`).classList.add('d-none');
    document.querySelector(`#lunch`).classList.add('d-none');
    document.querySelector(`#night`).classList.add('d-none');
    document.querySelector(`#drink`).classList.remove('d-none');
}
const foodsMorning = ['Bánh Mì Xíu Mại', 'Bún Bò Huế', 'Phở Bò', 'Xôi Gà', 'Bánh Cuốn Hà Nội', 'Bún Hến', 'Mì Tôm Hến', 'Cháo Gà']
const imagesMorning = ['ansang/ansang1.jpg', 'ansang/ansang2.jpg', 'ansang/ansang3.jpg', 'ansang/ansang4.jpg', 'ansang/ansang5.jpg', 'ansang/ansang6.jpg', 'ansang/ansang7.jpg', 'ansang/ansang8.jpg']
const pricesMorning = ['15.000 VNĐ', '25.000 VNĐ', '25.000 VNĐ', '25.000 VNĐ', '20.000 VNĐ', '10.000 VNĐ', '10.000 VNĐ', '20.000 VNĐ']
function renderMorningFoods() {
    let htmls = "";
    for (let i = 0; i < foodsMorning.length; i++) {
        htmls += `
            <div id="div-${[i]}" class="div-item">
                <div class="food-items">
                        <div class="food-item">
                        <img src="${imagesMorning[i]}">
                        <p>${foodsMorning[i]}</p>
                        </div>
                        <div class="food-price">
                            <p>${pricesMorning[i]}</p>
                        </div>
                    </div>
                    <div class="button-remove">
                    <button class="btn-menu removeMenuMorning ${loged == true ? '' : 'd-none'}" onclick="removeMorning(${i})">
                        Remove
                    </button>
                </div>
            </div>
        `;
    }
    document.querySelector('#morning').innerHTML = htmls;
}

const foodsLunch = ['Tôm Càng Xanh', 'Gà Đồi Hấp Hành', 'Cá Vược Hấp Cà', 'Sườn Chua Ngọt', 'Rau Muống Xào Tỏi', 'Canh Chua Cá', 'Canh Rau', 'Bò Xào Hành Tây']
const imagesLunch = ['anhmenu/anhmenu1.jpg', 'anhmenu/anhmenu2.jpg', 'anhmenu/anhmenu3.jpg', 'anhmenu/anhmenu4.jpg', 'anhmenu/anhmenu5.jpg', 'anhmenu/anhmenu6.jpg', 'anhmenu/anhmenu7.jpg', 'anhmenu/anhmenu8.jpg']
const pricesLunch = ['300.000 VNĐ', '350.000 VNĐ', '150.000 VNĐ', '150.000 VNĐ', '30.000 VNĐ', '150.000 VNĐ', '40.000 VNĐ', '200.000 VNĐ']

function renderLunchFoods() {
    let htmls = "";
    for (let i = 0; i < foodsLunch.length; i++) {
        htmls += `
                <div class="food-items">
                        <div class="food-item">
                        <img src="${imagesLunch[i]}">
                        <p>${foodsLunch[i]}</p>
                        </div>
                        <div class="food-price">
                            <p>${pricesLunch[i]}</p>
                        </div>
                    </div>
                    <div class="button-edit">
                    <button class="btn-menu removeMenuLunch ${loged == true ? '' : 'd-none'}" onclick="removeLunch(${i})">
                        Remove
                    </button>
                </div>
                `;
    }
    document.querySelector('#lunch').innerHTML = htmls;
}
const foodsNight = ['Sườn Chua Ngọt', 'Bò Xào Hành Tây', 'Cá Vược Hấp Cà', 'Tôm Càng Xanh', 'Canh Rau', 'Canh Chua Cá', 'Rau Muống Xào Tỏi', 'Gà Đồi Hấp Hành']
const imagesNight = ['anhmenu/anhmenu4.jpg', 'anhmenu/anhmenu8.jpg', 'anhmenu/anhmenu3.jpg', 'anhmenu/anhmenu1.jpg', 'anhmenu/anhmenu7.jpg', 'anhmenu/anhmenu6.jpg', 'anhmenu/anhmenu5.jpg', 'anhmenu/anhmenu2.jpg']
const pricesNight = ['150.000 VNĐ', '200.000 VNĐ', '150.000 VNĐ', '300.000 VNĐ', '40.000 VNĐ', '150.000 VNĐ', '30.000 VNĐ', '350.000 VNĐ']
function renderNightFoods() {
    let htmls = "";
    for (let i = 0; i < foodsNight.length; i++) {
        htmls += `
                <div class="food-items">
                        <div class="food-item">
                        <img src="${imagesNight[i]}">
                        <p>${foodsNight[i]}</p>
                        </div>
                        <div class="food-price">
                            <p>${pricesNight[i]}</p>
                        </div>
                    </div>
                    <div class="button-edit">
                    <button class="btn-menu removeMenuNight ${loged == true ? '' : 'd-none'}"  onclick="removeNight(${i})">
                        Remove
                    </button>
                </div>
                `;
    }
    document.querySelector('#night').innerHTML = htmls;
}
const drinks = ['Coca-cola', 'Pepsi', 'Mirinda', 'Redbull', 'Bia Huda', 'Bia Sài Gòn', 'Bia Heineken', 'Bia Tiger']
const imagesDrink = ['douong/douong1.jpg', 'douong/douong2.jpg', 'douong/douong3.jpg', 'douong/douong4.jpg', 'douong/douong5.jpg', 'douong/douong6.jpg', 'douong/douong7.jpg', 'douong/douong8.jpg']
const pricesDrink = ['15.000 VNĐ', '15.000 VNĐ', '15.000 VNĐ', '15.000 VNĐ', '15.000 VNĐ', '15.000 VNĐ', '25.000 VNĐ', '25.000 VNĐ']
function renderDrink() {
    let htmls = "";
    for (let i = 0; i < drinks.length; i++) {
        htmls += `
                <div class="food-items">
                        <div class="food-item">
                        <img src="${imagesDrink[i]}">
                        <p>${drinks[i]}</p>
                        </div>
                        <div class="food-price">
                            <p>${pricesDrink[i]}</p>
                        </div>
                    </div>
                    <div class="button-edit">
                    <button class="btn-menu removeMenuDrink ${loged == true ? '' : 'd-none'}"  onclick="removeDrink(${i})">
                        Remove
                    </button>
                </div>
                `;
    }
    document.querySelector('#drink').innerHTML = htmls;
}


function mainMenu() {
    renderMorningFoods();
    renderLunchFoods();
    renderNightFoods();
    renderDrink();
}
mainMenu();



function addMorning() {

}
function removeMorning(index) {
    let confirmed = window.confirm("Are you sure to remove this?");
    if (confirmed) {
        foodsMorning.splice(index, 1);
        imagesMorning.splice(index, 1);
        pricesMorning.splice(index, 1);
        renderMorningFoods();
    }
}
function removeLunch(index) {
    let confirmed = window.confirm("Are you sure to remove this?");
    if (confirmed) {
        foodsLunch.splice(index, 1);
        imagesLunch.splice(index, 1);
        pricesLunch.splice(index, 1);
        renderLunchFoods();
    }
}
function removeNight(index) {
    let confirmed = window.confirm("Are you sure to remove this?");
    if (confirmed) {
        foodsNight.splice(index, 1);
        imagesNight.splice(index, 1);
        pricesNight.splice(index, 1);
        renderNightFoods();
    }
}
function removeDrink(index) {
    let confirmed = window.confirm("Are you sure to remove this?");
    if (confirmed) {
        drinks.splice(index, 1);
        imagesDrink.splice(index, 1);
        pricesDrink.splice(index, 1);
        renderDrink();
    }
}
function addMorning(index) {
    let foodAddName = document.querySelector(`#addNameMenu`).value;
    let priceAddName = document.querySelector(`#addPricesMenu`).value;
    let imageAddName = document.querySelector(`#addImgMenu`).value
    if (foodAddName == null || priceAddName == null || imageAddName == null || foodAddName == '' || priceAddName == '' || imageAddName == '') {
        alert('Input is required?')
        return
    }
    foodsMorning.push(foodAddName);
    imagesMorning.push(priceAddName);
    pricesMorning.push(imageAddName);
    renderMorningFoods();
    document.querySelector(`#addNameMenu`).value = null;
    document.querySelector(`#addPricesMenu`).value = null;
    document.querySelector(`#addImgMenu`).value = null;
}
function addLunch(index) {
    let foodAddName = document.querySelector(`#addNameMenu`).value;
    let priceAddName = document.querySelector(`#addPricesMenu`).value;
    let imageAddName = document.querySelector(`#addImgMenu`).value
    if (foodAddName == null || priceAddName == null || imageAddName == null || foodAddName == '' || priceAddName == '' || imageAddName == '') {
        alert('Input is required?')
        return
    }
    foodsLunch.push(foodAddName);
    imagesLunch.push(priceAddName);
    pricesLunch.push(imageAddName);
    renderLunchFoods();
    document.querySelector(`#addNameMenu`).value = null;
    document.querySelector(`#addPricesMenu`).value = null;
    document.querySelector(`#addImgMenu`).value = null;
}
function addNight(index) {
    let foodAddName = document.querySelector(`#addNameMenu`).value;
    let priceAddName = document.querySelector(`#addPricesMenu`).value;
    let imageAddName = document.querySelector(`#addImgMenu`).value
    if (foodAddName == null || priceAddName == null || imageAddName == null || foodAddName == '' || priceAddName == '' || imageAddName == '') {
        alert('Input is required?')
        return
    }
    foodsNight.push(foodAddName);
    imagesNight.push(priceAddName);
    pricesNight.push(imageAddName);
    renderNightFoods();
    document.querySelector(`#addNameMenu`).value = null;
    document.querySelector(`#addPricesMenu`).value = null;
    document.querySelector(`#addImgMenu`).value = null;
}
function addDrink(index) {
    let foodAddName = document.querySelector(`#addNameMenu`).value;
    let priceAddName = document.querySelector(`#addPricesMenu`).value;
    let imageAddName = document.querySelector(`#addImgMenu`).value
    if (foodAddName == null || priceAddName == null || imageAddName == null || foodAddName == '' || priceAddName == '' || imageAddName == '') {
        alert('Input is required?')
        return
    }

    drinks.push(foodAddName);
    imagesDrink.push(priceAddName);
    pricesDrink.push(imageAddName);
    renderDrink();
    document.querySelector(`#addNameMenu`).value = null;
    document.querySelector(`#addPricesMenu`).value = null;
    document.querySelector(`#addImgMenu`).value = null;
}

function orderName(day, name, time, phone, person, email) {
    this.day = day;
    this.name = name;
    this.time = time;
    this.phone = phone;
    this.person = person;
    this.email = email;
}

function orderButton() {

    let day = document.querySelector(`#dateOrder`).value;
    let name = document.querySelector(`#nameOrder`).value;
    let time = document.querySelector(`#timeOrder`).value;
    let phone = document.querySelector(`#phoneOrder`).value;
    let person = document.querySelector(`#personOrder`).value;
    let email = document.querySelector(`#emailOrder`).value;
    if (day == '' || name == '' || time == '' || phone == '' || person == '' || email == '') {
        alert('Input is required?')
        return
    }
    let newBooking = new orderName(day, name, time, phone, person, email);
    orderList.push(newBooking);
    setData(key_order, orderList);
    document.querySelector(`#dateOrder`).value = null;
    document.querySelector(`#nameOrder`).value = null;
    document.querySelector(`#timeOrder`).value = null;
    document.querySelector(`#phoneOrder`).value = null;
    document.querySelector(`#personOrder`).value = null;
    document.querySelector(`#emailOrder`).value = null;
    renderOrderList();

}

function renderOrderList() {
    let htmls = "";
    for (let [index, booking] of orderList.entries()) {

        htmls += `<tr class="tr_${index}">
            <td>${index + 1}</td>
            <td>${booking.day}</td>
            <td>${booking.name}</td>
            <td>${booking.time}</td>
            <td>${booking.phone}</td>
            <td>${booking.person}</td>
            <td>${booking.email}</td>
            <td>
            <button class="btn-booking edit-booking${index} " onclick="editBooking(${index})">Edit</button>
            <button class="btn-booking save-booking${index} d-none" onclick="saveBooking(${index})">Save</button>
            <button class="btn-booking cancel-booking${index} d-none" onclick="cancelBooking(${index})">Cancel</button>
            <button class="btn-booking remove-booking${index} " onclick="removeBooking(${index})">Remove</button>
            </td>
        </tr>
            `
    }
    document.querySelector('.tboy-order').innerHTML = htmls;
}
function removeBooking(index) {
    let confirmed = window.confirm('Are you sure to remove this?');
    if(confirmed) {
        orderList.splice(index,1);
        setData(key_order, orderList);
        renderOrderList();
    }
}
function editBooking(index){
    let tr = document.querySelector(`.tr_${index}`);
    let oldDate = tr.children[1].innerHTML;
    let oldName = tr.children[2].innerHTML;
    let oldTime = tr.children[3].innerHTML;
    let oldPhone = tr.children[4].innerHTML;
    let oldPerson = tr.children[5].innerHTML;
    let oldEmail = tr.children[6].innerHTML;
    tr.children[1].innerHTML=`<input type="text" id="old-Date${index}" value="${oldDate}">`;
    tr.children[2].innerHTML=`<input type="text" id="old-Name${index}" value="${oldName}">`;
    tr.children[3].innerHTML=`<input type="text" id="old-Time${index}" value="${oldTime}">`;
    tr.children[4].innerHTML=`<input type="text" id="old-Phone${index}" value="${oldPhone}">`;
    tr.children[5].innerHTML=`<input type="text" id="old-Person${index}" value="${oldPerson}">`;
    tr.children[6].innerHTML=`<input type="text" id="old-Email${index}" value="${oldEmail}">`;
    setData(key_order, orderList);
    document.querySelector(`.save-booking${index}`).classList.remove("d-none");
    document.querySelector(`.cancel-booking${index}`).classList.remove("d-none");
    document.querySelector(`.edit-booking${index}`).classList.add("d-none");
}
function saveBooking(index){
    
    let tr = document.querySelector(`.tr_${index}`);
    let oldDate = document.querySelector(`#old-Date${index}`).value;
    tr.children[1].innerHTML = oldDate;
    let oldName = document.querySelector(`#old-Name${index}`).value;
    tr.children[2].innerHTML = oldName;
    let oldTime = document.querySelector(`#old-Time${index}`).value;
    tr.children[3].innerHTML = oldTime;
    let oldPhone = document.querySelector(`#old-Phone${index}`).value;
    tr.children[4].innerHTML = oldPhone;
    let oldPerson = document.querySelector(`#old-Person${index}`).value;
    tr.children[5].innerHTML = oldPerson;
    let oldEmail = document.querySelector(`#old-Email${index}`).value;
    tr.children[6].innerHTML = oldEmail;
    setData(key_order, orderList);
    document.querySelector(`.save-booking${index}`).classList.add("d-none");
    document.querySelector(`.cancel-booking${index}`).classList.add("d-none");
    document.querySelector(`.edit-booking${index}`).classList.remove("d-none");
}
function cancelBooking(index){
    let tr = document.querySelector(`.tr_${index}`);
    let oldDate = document.querySelector(`#old-Date${index}`).value;
    tr.children[1].innerHTML = oldDate;
    let oldName = document.querySelector(`#old-Name${index}`).value;
    tr.children[2].innerHTML = oldName;
    let oldTime = document.querySelector(`#old-Time${index}`).value;
    tr.children[3].innerHTML = oldTime;
    let oldPhone = document.querySelector(`#old-Phone${index}`).value;
    tr.children[4].innerHTML = oldPhone;
    let oldPerson = document.querySelector(`#old-Person${index}`).value;
    tr.children[5].innerHTML = oldPerson;
    let oldEmail = document.querySelector(`#old-Email${index}`).value;
    tr.children[6].innerHTML = oldEmail;
    document.querySelector(`.save-booking${index}`).classList.add("d-none");
    document.querySelector(`.cancel-booking${index}`).classList.add("d-none");
    document.querySelector(`.edit-booking${index}`).classList.remove("d-none");
}

// passWord-------------------------------------------
function Login(username, password) {
    this.username = username;
    this.password = password;
}
var loginList = [new Login('admin', 'admin'), new Login('123123', '123123')];

// let removeMenuMorning = [];


function checkLogin() {
    let username = document.querySelector(`#userName_2`).value;
    let password = document.querySelector(`#passWord_2`).value;
    let newLogin = new Login(username, password);
    // for (let i = 0; i <= loginList.length; i++) {
    //     for (let j = 0; j < loginList[i].length; j++) {
    //         if (username == loginList[i][j] && password == loginList[i][j + 1]) {
    //             alert('Đăng Nhập Thành Công!')
    //             break;
    //         } else {
    //             alert('Đăng Nhập Thất Bại Vui Lòng Thử Lại');
    //             continue;

    //         }
    //     }

    // }
    
    for (let login of loginList) {
        if (username == login.username && password == login.password) {
            loged = true;
            break;
        }
    }
    if (loged) {
        alert('Đăng Nhập Thành Công!')
        document.querySelector("#foodName").classList.remove('d-none');
        document.querySelector("#addNameMenu").classList.remove('d-none');
        document.querySelector("#priceName").classList.remove('d-none');
        document.querySelector("#addPricesMenu").classList.remove('d-none');
        document.querySelector("#imagesName").classList.remove('d-none');
        document.querySelector("#addImgMenu").classList.remove('d-none');
        document.querySelector("#addMorning").classList.remove('d-none');
        document.querySelector("#addLunch").classList.remove('d-none');
        document.querySelector("#addNight").classList.remove('d-none');
        document.querySelector("#addDrink").classList.remove('d-none');

        let removeMenuMorning = document.querySelectorAll(".removeMenuMorning");

        removeMenuMorning.forEach((item, index) => {
            item.classList.remove("d-none");
        });
        let removeMenuLunch = document.querySelectorAll(".removeMenuLunch");

        removeMenuLunch.forEach((item, index) => {
            item.classList.remove("d-none");
        });
        let removeMenuNight = document.querySelectorAll(".removeMenuNight");

        removeMenuNight.forEach((item, index) => {
            item.classList.remove("d-none");
        });
        let removeMenuDrink = document.querySelectorAll(".removeMenuDrink");

        removeMenuDrink.forEach((item, index) => {
            item.classList.remove("d-none");
        });

        // document.querySelector(".checkOrder").classList.remove('d-none');

        document.querySelector(`#userName_2`).value = null;
        document.querySelector(`#passWord_2`).value = null;
        document.querySelector('#btn-checklogin').classList.add('d-none');
        document.querySelector('#userName_1').classList.add('d-none');
        document.querySelector('#userName_2').classList.add('d-none');
        document.querySelector('#passWord_1').classList.add('d-none');
        document.querySelector('#passWord_2').classList.add('d-none');

        // document.querySelector("#removeMenuLunch").classList.remove('d-none');
        // document.querySelector("#removeMenuNight").classList.remove('d-none');
        // document.querySelector("#removeMenuDrink").classList.remove('d-none');
    }
    else {
        alert('Đăng Nhập Thất Bại Vui Lòng Thử Lại');
    }
}

function openLogin() {
    document.querySelector('#btn-checklogin').classList.remove('d-none');
    document.querySelector('#userName_1').classList.remove('d-none');
    document.querySelector('#userName_2').classList.remove('d-none');
    document.querySelector('#passWord_1').classList.remove('d-none');
    document.querySelector('#passWord_2').classList.remove('d-none');
}
// Nut Enter
function pressEnter(i) {
    if (i.keyCode == enterKey) {
        orderButton();

    }
}
// localStorage
let key_order = "order_data";
function init(){
    if(getData(key_order) == null){
        orderList = []
        setData(key_order, orderList);
    } else {
        orderList = getData(key_order);
    }
}
function getData(key) {
    return JSON.parse(localStorage.getItem(key))
}
function setData(key, data) {
    localStorage.setItem(key, JSON.stringify(data))
}
function mainBooking(){
    init();
    renderOrderList();
}
mainBooking();

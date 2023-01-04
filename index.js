// tao mang array dung chung 
var array = [];

/* ex1
_input: lấy mảng array được thêm từ phía người nhập

_algorithm: 
_output: in ra giá trị tổng các số dương có trong mảng

*/
addEventClick("btn-ex1", ex1);

function ex1() {
    var tong = 0;
    const outputEL = document.getElementById('output-1');
    array.forEach(function (item, index) {
        if (check(item) == 1) {
            tong += item;
            return tong;
        }
    })
    outputEL.innerHTML = "Tổng là: " + tong;
}
function check(x) {
    if (x > 0) return 1;
    else if (x = 0) return 0;
    return -1;
}
/*ex2
_input:
_algorithm:
_output:
*/


















/*-----------------------------------------------------------------------*/
// add event  
function addEventClick(dom, event) {
    const domEL = document.getElementById(dom);
    domEL.addEventListener("click", event);
}

// add event cho btn-add
addEventClick("btn-add", addItem);
// event them phan tu input
function addItem() {
    const arrayLastEL = document.getElementById('array-public');
    const inputEL = document.getElementById('input-item');
    array.push(inputEL.value * 1);
    inputEL.value = "Thêm phần tử của mảng";
    arrayLastEL.innerHTML = array.join(" ; ");
    console.log(array);
}
// event hien cac layout
const key1 = document.getElementById('key-1');
key1.addEventListener("click", click1);
const key2 = document.getElementById('key-2');
key2.addEventListener("click", click2);
const key3 = document.getElementById('key-3');
key3.addEventListener("click", click3);
const key4 = document.getElementById('key-4');
key4.addEventListener("click", click4);
const key5 = document.getElementById('key-5');
key5.addEventListener("click", click5);
const key6 = document.getElementById('key-6');
key6.addEventListener("click", click6);
const key7 = document.getElementById('key-7');
key7.addEventListener("click", click7);
const key8 = document.getElementById('key-8');
key8.addEventListener("click", click8);
const key9 = document.getElementById('key-9');
key9.addEventListener("click", click9);
const key10 = document.getElementById('key-10');
key10.addEventListener("click", click10);
function click1() {
    selectKey(key1);
}
function click2() {
    selectKey(key2);
}
function click3() {
    selectKey(key3);
}
function click4() {
    selectKey(key4);
}
function click5() {
    selectKey(key5);
}
function click6() {
    selectKey(key6);
}
function click7() {
    selectKey(key7);
}
function click8() {
    selectKey(key8);
}
function click9() {
    selectKey(key9);
}
function click10() {
    selectKey(key10);
}
function selectKey(i) {
    key1.style.border = "none";
    key2.style.border = "none";
    key3.style.border = "none";
    key4.style.border = "none";
    key5.style.border = "none";
    key6.style.border = "none";
    key7.style.border = "none";
    key8.style.border = "none";
    key9.style.border = "none";
    key10.style.border = "none";
    i.style.border = "3px solid black";
}
// add event cho btn-reset
addEventClick("btn-reset", resetArray);

function resetArray() {
    array = [];
    const arrayLastEL = document.getElementById('array-public');
    arrayLastEL.innerHTML = array.join(" ; ");
    const outputEL = document.getElementById('output-1');
    outputEL.innerHTML = "";
}

//SELECT ELEMENT
//1. By id
const dayEle = document.getElementById("date")
console.log(dayEle.innerHTML); //lay toan bo html trong tag
console.log(dayEle.innerText); //lay ra text

dayEle.innerText = "TUE";

dayEle.style.color = 'green';
dayEle.style.border = '2px solid red';

//2. by class name
const dayClass = document.getElementsByClassName('time-big');
for (const ele of dayClass) {
    console.log(ele.innerText)
}

const miniText = document.querySelectorAll('.time-mini');
console.log(miniText)

// const idSelect = document.querySelectorAll('#day > .time-mini') //lay id cu the trg nhieu class

//3. by tag name
const dayTag = document.getElementsByTagName('head');

const oneEle = document.querySelector('#day') //id

//CRUD
//1. Create
//const dayEle = document.querySelector('bracket')
const dateEle = document.createElement('div');
dateEle.innerText = 'ass'
dateEle.classList.add('siiii') //add dung ClassList

if (!dateEle.classList.contains('bracket')) {
    dateEle.classList.add('suiiii')
}

//const dayEle = document.querySelector('.bracket');
const newHtml = `<div class="time-big">20</div>`;
dayEle.innerHTML += newHtml; //add

//dayEle.appendChild(dateEle);
console.log(dateEle);

//document.body.removeChild(dayEle) //delete dua vao parent
//dayEle.style.display = 'none' xoa ve mat ng dung


const character = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN']
setInterval(() => {
    /*
    const second = new Date().getSeconds();
    console.log(second)

    const secondEle = document.getElementById('second');
    secondEle.innerText = second;
    */
    
    const timeEle = document.querySelectorAll('.time-big')
    const currentTime = new Date();

    timeEle[0].innerText = character[currentTime.getDay()];
    timeEle[1].innerText = currentTime.getHours();
    timeEle[2].innerText = currentTime.getMinutes();
    timeEle[3].innerText = currentTime.getSeconds() < 10
    ? '0' + currentTime.getSeconds() : currentTime.getSeconds();
}, 1000);

//---
//I. De quy
let array = ['a', 'b', 'c', 'd', 'b', 'c', 'd']

//1. Cach thuong: Dung Set
console.log([...(new Set(array))]);

//De quy: Ham call chinh no. Khi dung phai xac dinh diem dung + handle logic
//a, vd countdown
function countDown(num) {
    if(num > 0) {
        console.log(num);
        return countDown(num - 1);
    }
    return num;
}

countDown(5);

//b, vd array loop
function loop(start, end, cb) {
    if (start <= end) {
        cb(start);
        return loop(start + 1, end, cb)
    }
}

loop(0, array.length - 1, function(index) {
    console.log(array[index])
})

//c, vd tinh giai thua
function giaiThua(num) {
    if (num > 0) {
        return num * giaiThua(num - 1);
    }
    return 1;
}

console.log(giaiThua(5))
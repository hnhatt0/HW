let input = 10

let i = 0;
// while (i < input) {
//     console.log(`Vi tri:  ${i + 1}`);
//     i++;
// }

let index = 0;
do {
    console.log(`Vi tri thu:  ${index + 1}`)
    index++;
} while (index < input)

let myNum = 50;
let result = 1;
for (let index = 1; index <= myNum; index++) {
    if (myNum % index === 0) {
        console.log(index)
    }
}

//Array

let menu = [
    'Cafe',
    'Cacao',
    'Capuchino',
    'Juice',
    'Smoothie',
];
let teams = [
    'G2',
    'Navi',
    'Faze'
]

console.log(teams.slice(1,2))
console.log(teams.toString())
console.log(Array.isArray(teams)) //kiem tra data type
console.table(menu)
//menu.splice(2, 2, 'NiP') // Xoa element
menu.includes('asas')
menu.sort()
console.log(menu)

//CURD: Read Create Update Delete
// for (let i=0; i < 5; i++) {
//     console.log(menu[i])
// }

// let emptyArr = [];
// for (let i=0; i < 5; i++) {
//     emptyArr[i] = menu[i].toLowerCase();
// }
// console.log(emptyArr)

let fakeMenu = menu.join(" ")
let newMenu = menu.concat(teams)
console.log(newMenu)
console.log(fakeMenu)

function myF(arr) {
    let fakeArr = [1, 2, 3, 4];
    for (let a = 0; a < arr.length; a++) {
      if (a !== arr.length - 1) {
          fakeArr[a] = arr[a]
      }
    }
    return fakeArr
}
menu.pop() // xoa element cuoi + tra ve phan tu da xoa
console.log(menu)
let sum = 0;

const list = [10, 20, 30, 40, 50];
console.log('length ', list.length)
for(let i=0; i < list.length; i++) {
    sum+= list[i]
}
console.log('Sum: ', sum)

const Lead = [9, 8, 1, 2, 3, 4, 5, 6, 7];
// 1 9 8 2 3 4 5 6 7
// 1 2 9 8 3 4 5 6 7
// 1 2 3 9 8 4 5 6 7
// ...
// 1 2 3 4 5 6 7 8 9 <-- 7 steps
for (j = 0; j < Lead.length - 1; j++) {
    let Min = Lead[j];
    let index = j;
    for (k = j + 1; k < Lead.length; k++) {
        if (Min > Lead[k]) {
            Min = Lead[k];
            index = k;
        }
    }
    Lead[index] = Lead[j];
    Lead[j] = Min;
}

console.log(Lead);

//---
function writeLog() {
    let testString = '';
    for (i of arguments) {
        testString += `${i} `;
    }
    console.log(testString);
}
writeLog(1, 2, 3, 4, 5, 6)

function showMess() {
    function showMess2() {
        console.log('32r32')
    }
    showMess2(); //phai viet cai nay o trong
}
showMess()

//Loai function:
//Declaration func: Thuong dung, co the call trc khi dinh nghia
ass()
function ass() {}
//Expression func: Long func trg 1 bien, k the call trc khi dinh nghia
let ab = function() {}
setTimeout(function aa() {})
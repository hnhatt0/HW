    //Boolean
let myBool = 3 <= 4;
let myBool2 = false;
let myBool3 = 'ab' == 'AB'.toLowerCase();
let myBool4 = 1 == '1';
let myBool5 = 1 === '1'; //so sanh kieu gia tri + gia tri
let myBool6 = 1 !== '1'; //! = khac
let A = true; //|| = hoac
let B = true;
let C = false;
let myBool7 = A || B;
let myBool8 = ((A || B) && C) || (B && (A || C)); //(true va C) || (B va true) => false || true

console.log(myBool);
console.log(myBool2);
console.log(myBool3);
console.log(myBool4);
console.log(myBool5);
console.log(myBool6);
console.log(myBool7);
console.log(myBool8);

    //Falsy
let a = NaN; //false, '', 0, null, undefined, NaN
let uBool = !!a;

console.log(uBool)
if(!0){
   console.log("Sai") 
}

    //NaN
let D='123f';
console.log(typeof NaN);
console.log(+D);
console.log(typeof +D);
console.log(Number(D));

    //Condition
let E = 2;
let ab = 10;
let ba = 20;
if(E) {
    console.log("dead")
} else {
    console.log("alive")
}

if (ab > ba){
    console.log('ab > ba')
} else { //cai tren false
    if (ab === ba) {
        console.log('ab = ba')
    } else {
        console.log('ab < ba')
    }
}

if (ab > ba) {
    console.log('ab > ba')
} else if (ab === ba) {
    console.log('ab = ba cung kieu')
} else if (ab == ba) {
    console.log('ab < ba khac kieu')
} else {
    console.log ('ab < ba')
}

let yourMonth = 12;
switch (yourMonth) {
    case 1:
        console.log('January');
        break;
    case 12:
        console.log("December");

    case 12:
        console.log("Dec");
        break;
    
        default:
            console.log('Incorrect')
            break;
}

let season = 2;
switch (season) {
    case 1:
    case 2:
    case 3:
    console.log ('Spring')
    break;
}

let monthNum = 5;
let monthStr = 5; 
//gom 2 if 
if (monthStr === monthNum) {
    console.log ('= both type and value')
}
if (monthStr == monthNum) {
    console.log ('= value co the khac type')
}

let q = 5;
let w = 5; 
//e = more neu q > w
//q < w = less
//= equal neu q === w

let e = q > w ? "More" : (q == w ? "Equal" : "Less");
console.log(e)

let str = '123.123';
let num2 = 20;
let num = 10;
let result = num + num2 + str //parseFloat(str);
//parseInt: so nguyen
//parseFloat: so thuc

console.log("Kieu: ", typeof result, "\nGia tri:", result)

    //Loop
for(let i = 0; i < 100; i += 2) {
    console.log(i)
    }
//for (batdau; dk ket thuc; buoc nhay) {hanh dong}
//input
let inputStr = prompt("Nhap so:");
let inputNum = Number(inputStr);
if (isNaN(inputNum)) {
    console.log ('sai')
} else {
let prime = true;

//kiem tra
for (let i = 2; i < inputNum; i++) {
    if(inputNum % i === 0) {
        prime = false;
        console.log('Uoc so dau tien la:', i)
        break;
    }
}

// output
if (prime) {
    console.log('So nguyen to')
} else {
    console.log('Not so nguyen to')
}
}


// for/in loop
let info = {
    name: 'A',
    age: 20,
};
let lang = [
    'English',
    'Japanese',
    'Chinese',
];
let chi = 'Chinese';

for (let key in info) {
    console.log(info[key]) //type: string - object
}

for (let key2 in lang) {
    console.log(lang[key2]) //type: number - array
}

for (let key3 in chi) {
    console.log(chi[key3]) 
}

// for/of loop
for (let value of lang) {
    console.log(value)
}

for (let value2 of chi) {
    console.log(value2) 
}

for (let value3 of Object.values(info)) { //TH dac biet: object
    console.log(value3);
}

//while
let i= 0;
/*
while (i < lang.length) {
    console.log(lang[i])
    i++;
}
*/

// do/while: tu lan chay thu 2 moi ktra DK
let success = false;
do {
    i++;
    console.log('Nạp lần ' + i)
    if (true) {
        success = true;
    }
} while (!success && i <= 3);

// break (thoat loop) + continue (bo qua)
for (; i < 10; i++) {
    console.log(i);
    if (i>=5) {
        break;
    }
}

for (; i < 10; i++) {
    if (i%2 !== 0) {
        continue;
    }
    console.log(i);
}

//nested loop
let array = [
    [1, 2],
    [3, 4],
    [5, 6],
];

for (let j=0; j < array.length; j++) {
    for (var k=0; k < array[j].length; k++)
    console.log(array[j][k])
}
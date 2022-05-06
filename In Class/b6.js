let ztenToi = "suiiiiii"; //(khai bao bien)
console.log(ztenToi.length);
console.log(ztenToi.concat("jjj"));
console.log(ztenToi.toUpperCase);
// console.log(ztenToi.trim());
console.log(ztenToi.charAt(5));
console.log(ztenToi.includes("cr7"));
console.log(ztenToi.split("i"));
console.log(typeof ztenToi)

ztenToi = "Ronaldo";
console.log(ztenToi);
// alert(tenToi);
const MY_DOB = "2001" //(ko đặt tên trùng với thuộc tính js)
console.log(MY_DOB);
//String: chuoi ky tu
const babaBoi = 'asfnsd vcjvkjad awioo';
let babaCoi = 46;
babaCoi = 50;
const babaDoi = `HN-${babaCoi}`;
console.log(babaBoi + babaCoi)
//Number: so
let mySalary = 16;
console.log(mySalary / 2)
console.log(mySalary % 2)
console.log(mySalary - ((mySalary) % 2))
console.log(mySalary ** 5)
console.log(mySalary += 8)
console.log(mySalary++)
console.log(++mySalary)
//Boolean true or false
//BigInt
//null, undefine
//object
//array
//forloop
//ifelse
//operator
let bien2= 'hello world'
const bien3= 'hello' + 'world';
let student = {
    name: 'A',
    namSinh: 2000,
}
console.log(student)
let x=20;
let y=10;

let result = x++ + ++x + y-- - --y;
//            20 + 22 + 10 - 8
//x=20        21   22   22   22 
//y=10        10   10   9    8
console.log(x);
console.log(y);
console.log(result);
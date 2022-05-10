let ztenToi = "suiiiiii"; //(khai bao bien)
console.log(ztenToi.length);
console.log(ztenToi.concat("jjj"));
console.log(ztenToi.toUpperCase);
console.log(ztenToi.indexOf('i', 4)); //tim chu
console.log(ztenToi.lastIndexOf()); // tim chu (last)
console.log(ztenToi.search('su')) //tim bieu thuc chinh quy
console.log(ztenToi.slice(-1, -4)) // cut string 
console.log(ztenToi.replace('su', 'us')) // /su/g 
console.log(ztenToi.trim()); //loai bo white space
console.log(ztenToi.charAt(5)); //= ztenToi[5]
console.log(ztenToi.includes("cr7"));
console.log(ztenToi.split("i")); // cat string thanh array, tim diem chung
console.log(typeof ztenToi)

ztenToi = "Ronaldo";
console.warn(ztenToi);
// alert(tenToi);
const MY_DOB = "2001" //(ko đặt tên trùng với thuộc tính js)
console.error(MY_DOB);
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
console.log(mySalary.toString())
console.log(mySalary.toFixed(2)) //lam tron so thap phan, thanh string
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
// kiem tra NaN:
console.log(isNaN(result))

confirm('Vibe check')
prompt('insert nuke code')
// setTimeout(function() {
//     alert('Error')
// }, 1000)
setInterval(function() {
    console.log ('A' + Math.random())
}, 5000)
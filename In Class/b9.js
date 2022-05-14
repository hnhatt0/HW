let menu = [
    1,
    2,
    3,
    4,
    ['a', 'b', 'c']
]

let a = 'StringAA'
let b = a;
let c = b;

b = b + 'BB';
c = c + 'CC';

console.log(a)
console.log(b)
console.log(c)

let deepCopy = JSON.parse(JSON.stringify(menu))  //deep copy
console.log(deepCopy)

let menuA = [...menu] //spread - destructuring
let copyMenu = []
for (let index = 0; index < menu.length; index++) {
    copyMenu[index] = menu[index]
}
menu[4].push('d')
// let copyMenu = menu;
// let cloneMenu = copyMenu;

// copyMenu.push('7')
// cloneMenu.push('9')

console.log(copyMenu)
// console.log(cloneMenu)

// For+
for (index in menu) {
    console.log(index, menu[index])
}

for (value of menu) {
    console.log(value)
}

menu.forEach((value, index) => {
    console.log(value, index)
})

//Object

let info = {
    height: '1.8m',
    weight: '83kg',
    dob: 1999,
    motto: 'shine'
    //func: function () {
        //return this.motto
    //}
}

//info.func() => console.log(info.func())
console.log(info);

//CRUD Object
console.log(info.height); //=
info['height'] = '201cm'
console.log(info['height']);
console.log(info.mottoooo); //Read

info.height = '180cm';
console.log(info); //Update

delete info.dob //Delete
console.log(info)

info.newField = "suiii" // them key
// info['newField'] = 'suiii'
console.log(info);

const body = document.body;
body.style.backgroundImage =
    "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);"

//check index: console.log(array.includes(gia tri can check))

//---
//Object constructor: Thiet ke khung
function User(firstName, lastName, avatar) { // cx co the dung let khai bien
    this.firstName = firstName; // mo ta doi tuong
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function() {
        return `${this.firstName} ${this.lastName}` // this chi ten doi tuong se chon
    }
}

let author = new User('A', 'Nguyen', 'Avatar') // doi tuong
let user = new User('B', 'Hoang', 'Avatar')

author.heading = 'Jinsei';
user.comment = 'sakdnlsaklfn'

console.log(author);
console.log(author.constructor);
console.log(user);
console.log(author.getName());
console.log(user.getName());

// Object prototype: Yeu to cau tao doi tuong cua constructor
function User(firstName, lastName, avatar) { 
    this.firstName = firstName; 
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function() {
        return `${this.firstName} ${this.lastName}`
    }
}

User.prototype.className = '2'; // them thuoc tinh ngoai constructor
User.prototype.getClassName = function() {
    return this.className;
} //them method

let user0 = new User('A', 'Nguyen', 'Avatar')
let user1 = new User('B', 'Hoang', 'Avatar')

user0.heading = 'Jinsei';
user1.comment = 'sakdnlsaklfn'

console.log(user0.className);
console.log(user1.getClassName());

//Doi tuong Date
let date = new Date(); //type: object
console.log(date)

let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();

console.log(`${day}/${month}/${year}`)

//Math object
console.log(Math.PI);
console.log(Math.round(2.68));
console.log(Math.abs(-5)); //gia tri tuyet doi
console.log(Math.ceil(3.2)); //lam tron tren
console.log(Math.floor(3.9)); //lam tron duoi
console.log(Math.random()); // so ngau nhien nho hon 1 
console.log(Math.min(2, -10, 0, 56)); 
console.log(Math.max(-2, 83, 10, 54)); 

let random = Math.floor(Math.random() * 100);
if (random < 50) {
    console.log('Jackpot')
}

//function
function checkInputNumber(input = 'abc') {
    console.log(input)
    return input + '___'
}

let defaultValue = checkInputNumber();
let newValue = checkInputNumber('244')

console.log(defaultValue)
console.log(newValue)

//Check so chan + so nguyen to
function getInput(question = 'Nhap so: ') {
    let inputStr = prompt(question)
    return inputStr;
}

function convertStr2Num(str) {
    const num = Number(str);
    if (isNaN(num)) {
        return 0;
    }
    return num;
}

function checkEven() {
    const input = getInput();
    const myNum = convertStr2Num(input);

    if (myNum % 2 == 0) {
        return true;
    }
    return false;
}

function checkPrime() {
    const input = getInput();
    const myNum = convertStr2Num(input);

    for (let i = 2; i < myNum; i++) {
        if (myNum % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(checkEven());
console.log(checkPrime());

// Loop
function loopCheckPrime() {
    while (true) {
        //Check Prime
        const isPrime = checkPrime();
        if (isPrime) {
            alert('So nguyen to')
        } else {
            alert('Hop so')
        }
        //Continue
        let answer = getInput('Do you want to continue? (Y or N)');
        if (answer.trim().toLowerCase() === 'n') {
            break;
        }
    }
    alert('Now GTFO')
}

loopCheckPrime();

// Arrow Function
/** comment function
 * @param {*} question: cau hoi
 * @return : cau tra loi
 */

const askQuestion = () => {} //cach khai bao
// this cua arrow func se dung global scope (window)
// window.a => them vao global cho this cua arrow
askQuestion(); // 2 cach khai bao se khac ve this

// Anonymous function: func k ten
setTimeout(function() {
    console.log('Delay 3s')
}, 3000);

setInterval(() => { //sau 4s se thuc hien lai function 1 lan
    console.log(new Date().getSeconds());
}, 2000)


//IIEF function
(function() {
    /* */
  })()

//bind call apply
const laptop = {
    a: 0.1,
    b: 0.2,
}
const pc = {
    a: 20,
    b: 30,
    log: 'app'
}

let laptopLog = pc.log.bind(laptop) // bind: muon ham neu func k co param
pc.log.call(laptop, 'call'); //func co param, truyen param vao bthg
pc.log.apply(laptop, ['apply']); // func co param, nhan array cac param di muon
laptopLog;
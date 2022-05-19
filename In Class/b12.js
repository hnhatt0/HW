const func2 = () => {
    setInterval(() => {
        console.log("Get out");
    }, 5000);
}

function clickMe() {
    console.log("Bitch")
}

const btn = document.getElementById('button1');

//btn.onclick = clickMe;

//Add nhieu function:
btn.addEventListener("click", () => {
    func2();
});

btn.addEventListener("dbclick", () => {
    clickMe();
})

//hover trong js
btn.addEventListener("mouseover", () => {
    console.log("Hover")
    btn.classList.add("beeg")
})

btn.addEventListener("mouseout", () => {
    btn.classList.remove("beeg")
})

//onclick, ondbclick, onchange
const emailEle = document.getElementById("email");

emailEle.addEventListener("change", (event) => {
    console.log(event.target.value); //lay ra value ng dung nhap c1
    console.log(emailEle.value); //lay ra value ng dung nhap c2
})

emailEle.addEventListener("blur", (event) => {
    console.log("User blur", event.target.value)
})

emailEle.addEventListener("focus", () => {
    console.log("User focus")
})

emailEle.addEventListener("input", (event) => {
    console.log("onInput -", event.target.value)
})

emailEle.addEventListener("keypress", (event) => {
    console.log("onkeypress -", event.target.value)
})

/*
onkeydown: khi ấn
onkeyup: khi nhả
onkeypress: khi ấn và nhả => thuong dung nhat
*/

window.addEventListener("copy", () => {
    console.log('Copy') // e la clipboard, window la dung cho ca browser
    console.log(document.getSelection().anchorNode.data);
})

function login(event) {
    event.preventDefault(); //chan event default cua browser
    console.log(event); //phai log param ra neu dung tu truyen event
    console.log("login");
    // console.log(event.target.elements.email.value);

    const {email, pass} = event.target.elements; //lay value 
    console.log(email.value);
    console.log(pass.value);
}

const formELe = document.getElementById("login-form");

formELe.addEventListener("submit", (event) => {
    login(event);
});

formELe.addEventListener("submit", login); //tu truyen event vao, chay func

//Calculator
let operatorStr = '';
const listBtn = document.querySelectorAll('.btn');
const equalBtn = document.querySelector('#equal')
const clearBtn = document.querySelector('#clear')


function displayResult(text) {
    const resultEle = document.querySelector('#result')
    if(resultEle) {
        resultEle.innerText = text;
    }
}

function concatText(event) {
    operatorStr += event.target.innerText
    displayResult(operatorStr)
    //console.log(operatorStr)
}

function calculate() {
    const result = eval(operatorStr); //cai tinh toan
    operatorStr = result;
    displayResult(operatorStr)
    //console.log(result)
}

function clearText() {
    operatorStr = ""
    displayResult("")
    //resultEle.innerText= "";
}

listBtn.forEach((e) => {
    if (e.innerText !== "=" && e.target !== "AC") {
        e.addEventListener('click', concatText)
    }
});

equalBtn.addEventListener("click", calculate)
clearBtn.addEventListener("click", clearText)
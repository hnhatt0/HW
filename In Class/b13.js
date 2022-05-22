/*API
R - Read - API: Get
C - Create - API: Post
Update: Put
Delete: Delete
*/

/* Local storage
    localStorage.setItem('key', 'value') //save
    localStorage.clear() //delete all
    localStorage.removeItem('quote123', 'AB') //delete item cu the
}
Session storage: Chi save trong phien lam viec do
*/

function changeText(id, text) {
    const ele = document.getElementById(id);
    if (ele) {
        ele.innerText = text;
    }
}

function getRandomNum(num) {
    return Math.floor(Math.random() * num)
}

function changeQuote() {
    const randomNum = getRandomNum(quotes.length);

    changeText("quote", quotes[randomNum].quote)
    changeText("author", quotes[randomNum].author)
    //Save
    localStorage.setItem('last-quote', JSON.stringify(quotes[randomNum]));
    //sessionStorage.setItem('last-quote', JSON.stringify(quotes[randomNum]));
}

if (localStorage.getItem('last-quote')) {
    console.log('Last quote exists')
    const q = JSON.parse(localStorage.getItem('last-quote'));
    changeText('quote', q.quote);
    changeText('author', q.author);
} else {
    console.log("No");
    changeQuote();
}

const btn = document.getElementById('btn--change');
btn.addEventListener('click', changeQuote);

//Dung API
const QUOTE_API = ''

function changeText(id, text) {
    const ele = document.getElementById(id);
    if (ele) {
        ele.innerText = text;
    }
}

function getAPIQuote() {
    fetch(QUOTE_API)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            changeText("quote", data.content)
            changeText("author", data.author)
            localStorage.setItem('last-quote', JSON.stringify(data));
        })
        .catch((err) => {
            console.log(err);
        })
}

function changeQuote() {
    getAPIQuote();
    //Save
    //sessionStorage.setItem('last-quote', JSON.stringify(quotes[randomNum]));
}

if (localStorage.getItem('last-quote')) {
    console.log('Last quote exists')
    const q = JSON.parse(localStorage.getItem('last-quote'));
    changeText('quote', q.content);
    changeText('author', q.author);
} else {
    console.log("No");
    changeQuote();
}

const btn1 = document.getElementById('btn--change');
btn1.addEventListener('click', changeQuote);

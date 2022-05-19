const listItem = document.getElementsByClassName('item')

for(let i=0; i < listItem.length; i++) {
    let val = listItem[i];
    val.addEventListener('click', function(event) {
        const ele = event.target.parentNode;
        ele.classList.add('active')
    })
    //lam not
}
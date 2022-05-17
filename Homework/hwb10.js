//sort
const array = [9, 8, 1, 2, 3, 4, 5, 6, 7];

function selectSort(num) {
    let result = [...num];
    for (j = 0; j < array.length - 1; j++) {
        let min = array[j];
        let index = j;
        for (k = j + 1; k < array.length; k++) {
            if (min > array[k]) {
                min = array[k];
                index = k;
            }
        }
        array[index] = array[j];
        array[j] = min;
    }
    return result;
}

list = selectSort(array);
console.log(array);

//kangaroo
function kangaroo(x1, v1, x2, v2) {
    let result = 'NO';
    for(let i=1; i <= 10000; i++) {
        if (x1 + v1*i == x2 + v2*i) {
            result = 'YES'
            break;
        }
    }
    return result;
}

console.log(kangaroo(0, 3, 4, 2)); //yes
console.log(kangaroo(0, 2, 5, 3)); //no

//---
//Migratory Birds
function migratoryBirds(arr) {
    
    console.log(arr.length)
    return arr;
}

//Drawing Book
function pageCount(n, p) {
    let pages = Math.floor(n / 2); //10
    let turn = Math.floor(p / 2); //3
    return console.log(Math.min(turn, pages - turn));
}

pageCount(20,9);

/*1
//2,3
//4,5
//6,7
//8,9
*/
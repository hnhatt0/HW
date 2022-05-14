let hinh1 = 'Hinh 1';
console.log(hinh1);

let tri = '';
const col = 20;

for (let a=1; a <= col ; a++) {
    for (let b=1; b <= a; b++) {
    tri += '*'
    }
    tri += '\n';
};
console.log(tri);
//

let hinh2 = 'Hinh 2';
console.log(hinh2)

let tri2 = ''
const col2 = 15;

for (let c=1; c<=col2; c++) {
    for (let d = col2; d > c; d--) {
        tri2 += ' '
    }
    for (d=1; d <= c; d++) {
        tri2 += ' *'
    }
    tri2 += '\n';
};
console.log(tri2);
//

let hinh3 = 'Hinh 3'
console.log(hinh3)
let tri3 = ''
const row3 = 11;
const col3 = 6;
for(let e=1; e<=row3; e++) {
    for(let f=1; f<=col3; f++) {
        if(f >= col3 + 1 - e && e <= col3 || e >= col3 && f >=e + 1 - col3) {
            tri3+= '*'
        } else {
            tri3+= ' '
        }
    }
    tri3 +='\n';
}
console.log(tri3);
//

let hinh4 = 'Hinh 4'
console.log(hinh4)
let tri4 = ''
const row4 = 9;

for(let g=0; g < row4; g++) {
    for(let h=0; h < g; h++) {
       tri4 += ' '
    }
    for(let h=0; h < (row4 - g) * 2 - 1; h++) {
        tri4 += '*'
    }
    tri4 +='\n';
};
for (let g=2; g <= row4; g++) {
    for (let h=row4; h > g; h--) {
        tri4 += ' '
    }
    for (let h= 0; h < g * 2 - 1; h++) {
        tri4 += '*'
    }
    tri4 +='\n'
}
console.log(tri4)
//

let hinh5 = 'Hinh 5'
console.log(hinh5)
let tri5 = ''
const col5 = 10;

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= col5; j++) {
        if (j === col5 / 2 + 1 - i || j === col5 / 2 + i) {
          tri5 += i;
        } else {
          tri5 += ' ';
        }
    }
    tri5 += '\n';
  }
  for (let i = 4; i >= 1; i--) {
    for (let j = 1; j <= col5; j++) {
        if (j === col5 / 2 + 1 - i || j === col5 / 2 + i) {
          tri5 += i;
        } else {
          tri5 += ' ';
        }
    }
    tri5 += '\n';
  }
  console.log(tri5);

//
let hinh6 = 'Hinh 6'
console.log(hinh6)
let tri6 = ''
const col6 = 10;

for (let k=1; k <= col6; k++) {
    for (let l=0; l < k; l++) {
        if (k === col6) {
            tri6 += '*'
        } else if (l === 0 || l == k - 1) {
            tri6 += '*'
        } else {
            tri6 += ' '
        }
        }
        tri6 += '\n';
    }
console.log(tri6)

// Kiem tra so nguyen to

function check(num) {
    let flag = true;
    if(num === 0 || num === 1) {
        flag = false;
    }
    
    for(let i = 2; i < num/2; i++) {
        if(num % i === 0) {
            flag = false;
            break;
        }
    }
    //console.log('suii')
    return flag
}

console.log(check(7) || check(15))
console.log(check(7) && check(15))
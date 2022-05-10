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
    for(let h=0; h < (col4 - g) * 2 - 1; h++) {
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
const col5 = 9;

for(let g=0; g < row4; g++) {
    for(let h=0; h < g; h++) {
       tri4 += ' '
    }
}
console.log(tri5)

// 1 задача
for (let i = 1; i <= 20; i++) {
    if (i % 4 <= 0) {
        continue;
    }
    console.log(i);
}

// 2 задача

const number = +prompt('введите число')
let factorial = 1

for(let i = 1; i <= number; i++){
    factorial *= i
}

alert(`факториал числа ${number}! = ${factorial}`)

//3 задача

let board = "";

for (let i = 1; i <= 8; i++) {
    let row = "";
    for (let j = 1; j <= 8; j++) {
        (i + j) % 2 === 0 ? (row += " # ") : (row += " _ ");
    }
    row += "\n";
    board += row;
}
console.log(board);


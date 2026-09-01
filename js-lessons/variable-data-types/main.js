const firstName = "Никита";
const lastName = "Репишный";
const isStudent = true;
const age = 30;
const currentYear = 2026;
let birthYear = currentYear - age;

console.log(birthYear);
console.log(
    `Меня зовут ${firstName} ${lastName}, мне ${age} лет. Я ученик курса: ${isStudent}`,
);

let a = "123";
let b = +"456";
let c = Number("789");
let d = Boolean(0);
let e = Boolean(" ");
let result = a + b + c + d + e;

// строка + строка + строка + false + true
// 123456789falsetrue

console.log(result);
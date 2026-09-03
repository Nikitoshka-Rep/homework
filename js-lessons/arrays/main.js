//1 Task
const users = [
    { name: "Alex", age: 24, isAdmin: false },
    { name: "Bob", age: 13, isAdmin: false },
    { name: "John", age: 31, isAdmin: true },
    { name: "Jane", age: 20, isAdmin: false },
];
// Добавить в конец массива users пользователей:
users[4] = { name: "Asi", age: 23, isAdmin: true };
users[5] = { name: "Den", age: 27, isAdmin: false };

users.push(
    { name: "Ann", age: 19, isAdmin: false },
    { name: "Jack", age: 43, isAdmin: true },
);

//2 Task
function getUserAverageAge(users) {
    let sumAge = 0;
    users.forEach(user => (sumAge += user.age));
    sumAge /= users.length;
    return sumAge;
}
console.log(getUserAverageAge(users));


//3 Task
function getAllAdmins(users){
    const usersAdmins = []
    users.forEach(function(user){
        if(user.isAdmin === true){
            usersAdmins.push(user)
        }
    })
    return usersAdmins
}
console.log(getAllAdmins(users));


//4 Task
function firstElements(array, n){
    if(n > array.length){
        return console.error(`${n} не может быть больше длинны массива: ${array.length}`)
    }
    if(n == 0) return []

    if(n == undefined) return array[0]

    const arrayFisrtElements = new Array(n)
    
    for(let i = 0; i < n; i++){
        arrayFisrtElements[i] = array[i]
    }

     return arrayFisrtElements
}

console.log(firstElements(users, 2));
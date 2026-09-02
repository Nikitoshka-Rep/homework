//1 задача

const person = {
    name: "Nikita",
    lastName: "Repishny",
    age: 30,
    hobby: "Car trips",
};
console.log(person);

// 2 задача
const testObj = {};

function isEmpty(object) {
    for (const key in object) {
        if (key) return true;
    }
    return false;
}

console.log(isEmpty(testObj));

// 3 задача

const task = {
    title:'Купить пирожок',
    description:'Прогуляться до пекарни',
    isComplited: false,
}

const taskModify = {
    price: 2000,
    inStock: true,
}

function cloneAndModify(object, modifycations){
    return {...object,...modifycations}
}

const cloneObject = cloneAndModify(task, taskModify)

for(const key in cloneObject){
    console.log(cloneObject[key]);
}

//4 задача

const myObject = {
    method1() {
        console.log('Метод 1 вызван');
    },
    method2() {
        console.log('Метод 2 вызван');
    },
    property: 'Это не метод'
};

function callAllMethods(object){
    for(const key in object){
        if(typeof(object[key]) === "function"){
            object[key]()
        }
    }
}

callAllMethods(myObject)
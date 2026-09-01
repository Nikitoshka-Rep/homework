//1 задача
const isEvenNumber = prompt(
    "Задача №1. Введите любое число на проверку четно ли оно:",
    0,
);

if (isEvenNumber % 2 === 0) {
    alert(`${isEvenNumber} Чётное`);
} else {
    alert(`${isEvenNumber} Нечётное`);
}

//2 задача

const age = +prompt("Задача №2. Введите ваш возраст, для получения скидки:");
const discount = age < 18 ? 10 : age >= 18 && age <= 65 ? 20 : 30;
alert(`Ваша скидка ${discount}%`);
console.log(`Ваша скидка ${discount}%`);

let discount_2;

switch (true) {
    case age < 18:
        discount_2 = 10;
        break;
    case age >= 18 && age <= 65:
        discount_2 = 20;
        break;
    default:
        discount_2 = 30;
}

console.log(`Ваша скидка ${discount_2}%`);

//3 задача
const username = prompt("Задача №3. Введите имя пользовтеля:");
const password = +prompt("Задача №3. Введите пароль:");

if (username === "admin" || (username === "user" && password === 123456)) {
    alert("Доступ разрешен");
} else {
    alert("Доступ запрещен");
}

//4 задача

const parcelWeight = +prompt(
    "Задача №4. Введите вес посылки (в килограммах)",
    20,
);
let deliveryType;

if (parcelWeight < 0 || parcelWeight === 0) {
    alert("Некорректный вес посылки");
} else {
    deliveryType = prompt(
        "Задача №4. Выберите тип доставки",
        `Стандарт, Экспресс, Премиум`,
    );
}

let isDeliveryType;
let coefficient;

switch (deliveryType) {
    case "Стандарт":
        coefficient = 1;
        isDeliveryType = true;
        break;
    case "Экспресс":
        coefficient = 1.5;
        isDeliveryType = true;
        break;
    case "Премиум":
        coefficient = 2;
        isDeliveryType = true;
        break;
    default:
        isDeliveryType = false;
        alert("Неверный тип доставки");
}

const baseСost =
    parcelWeight < 1 ? 5 : parcelWeight >= 1 && parcelWeight <= 5 ? 10 : 15;
const totalCost = baseСost * coefficient;

if (isDeliveryType) {
    alert(`Итоговая стоимость доставки: ${totalCost}$.`);
}

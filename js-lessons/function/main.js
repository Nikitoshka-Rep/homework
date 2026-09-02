//1 Задача

//Первый вариант

// function calculateFinalPrice(basePrice, discount, taxRate) {
//     return (
//         basePrice -
//         basePrice * (discount / 100) +
//         (basePrice - basePrice * (discount / 100)) * taxRate
//     );
// }

// Второй варинт (подсмотрел формулу)
const calculateFinalPrice = (basePrice, discount, taxRate) =>
    basePrice * (1 - discount / 100) * (1 + taxRate);

console.log(calculateFinalPrice(100, 10, 0.2));

//2 Задача
const checkAccess = (userName, userPasword) =>
    userName === "admin" && userPasword === 123456
        ? "Доступ разрешен"
        : "Доступ запрещен";

console.log(checkAccess("admin", 123456));

// 3 задача
const getTimeOfDay = function (time) {
    if (isNaN(time) || time < 0 || time > 23) {
        return "Некорректное время";
    }

    switch (true) {
        case time <= 0 || time <= 5:
            return "Ночь";
        case time <= 6 || time <= 11:
            return "Утро";
        case time <= 12 || time <= 17:
            return "День";
        case time <= 18 || time <= 23:
            return "Вечер";
    }
};

console.log(getTimeOfDay(5));

//4 задача
const findFirstEven = (start, end) => {
    for (start; start <= end; start++) {
        if (start % 2 === 0) {
            return start;
        }
    }
    return "Чётных чисел нет";
};

console.log(findFirstEven(1, 10));

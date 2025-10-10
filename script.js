const log = console.log;

// Второй урок
// console.log('Привет, внешний файл!');

// console.group('Группа логов');
// console.log('1');
// console.log('2');
// console.log('3');
// console.log('4');
// console.log('5');
// console.log('6');

// Третий урок
// let info = "Work Hard";
// console.log(info);

// Четвертый урок
// const firName = 'Irina';

// Пятый урок
// let lessons = 10;

// lessons = 10 + 10; // 20
// lessons = 20 - 10; // 10
// lessons = 10 * 10; // 100
// lessons = 10 / 10; // 1
// lessons = 281 % 3; // 2 Отсаток от деления

// console.log(lessons);

// let x;
// x = 2 ** 6; //возведение в степень 64
// console.log(x);

// x = 1;
// x = x + 1; // x++
// x = x - 1; // x--
// console.log(x);

//Увеличение на 1
// let a = 16;
// let b = ++a;
// console.log(b);

// Шестой урок
//число в строку
// let value = 10;
// value = value + '';
// value = `${value}`;
// value = value.toString();
// value = String(value);

// //строку в число
// value = Number(value);
// value = +value;
// value = parseInt(value);
// console.log(value);

// Седьмой урок
// const result = Number(prompt("Введите число", 0));

// if (result > 0) {
//     console.log("Ваше число больше нуля");
// } else if (result < 0) {
//     console.log("Ваше число меньше нуля");
// } else if (result === 0) {
//     console.log("Ваше число равно нулю");
// } else {console.log("Вы ввели не число, попробуйте еще раз"); }

// const chek = result > 0 ? "Ваше число больше нуля" : result < 0 ? "Ваше число меньше нуля" : result === 0 ? "Ваше число равно нулю" : "Вы ввели не число, попробуйте еще раз";

// console.log (chek);

// Восьмой урок
// if (-1 || 0) console.log( 'один' );
//     if (-1 && 0) console.log( 'два' );
//     if (null || -1 && 1) console.log( 'три' );

// Одинадцатый урок
// let n = 250;
// n = 300;
// n = new Number(500);
// n = n.valueOf();

// console.log(n);

// let m = 320.56564564;
// m = m.toFixed(5);

// console.log(m);

// let num = 27.568555;

// num = num.toPrecision(4);
// console.log(num);

// Тринадцатый урок
// let str = "Hi \n\"Bro!\"";
// log(str);

// let str = "javascript";
// str = str[0].toUpperCase() + str.substring(1);

// str = "javascript";
// str = str[0].toUpperCase() + str.substring(1, 4) + str[4].toUpperCase() + str.substring(5);
// str = str.replace("j", "J").replace("s", "S");
// log(str);

//     const comment1 = "Hello man! Fuck you!";
//     const comment2 = "Hello man! thank you!";
//     const comment3 = "Hello man! thank you, fuck!";

//     let isBlockedComment1;
//     let isBlockedComment2;
//     let isBlockedComment3;

// if (comment1.toLowerCase().includes("fuck")) {isBlockedComment1 = true}
// else {isBlockedComment1 = false};
// if (comment2.toLowerCase().includes("fuck")) {isBlockedComment2 = true}
// else {isBlockedComment2 = false};
// if (comment3.toLowerCase().includes("fuck")) {isBlockedComment3 = true}
// else {isBlockedComment3 = false};
//метод includes() - возвращает булевое значение
// isBlockedComment1 = comment1.toLowerCase().includes("fuck");
// isBlockedComment2 = comment2.toLowerCase().includes("fuck");
// isBlockedComment3 = comment3.toLowerCase().includes("fuck");

// log(isBlockedComment1);
// log(isBlockedComment2);
// log(isBlockedComment3);

// let str = " $#$  Hello @$&#World! ";
// // str = str.replaceAll("$", "").replaceAll("#", "").replaceAll("@", "").replaceAll("&", "").trim();
// str = str.replace(/[$#@&]/g, "").trim();
// console.log(str); // "Hello World"

// Четырнадцатый урок
// const d = new Date(2028, 0, 13, 13, 23);

//     console.log(d);  //Thu Jan 13 2028 13:23:00

// const years = Math.floor(Date.now() / 1000 / 60 / 60 / 24 / 365);

// console.log(years); // 54 в 2024 году

// const d = new Date();
// const todayEN = d.toLocaleString("en-US", {
//      month: "long", day: "numeric", year: "numeric", hour: "numeric", minute: "numeric", weekday: "long"
// });
// const todayRU = d.toLocaleString("ru-RU", {
//     month: "long", day: "numeric", year: "numeric", hour: "numeric", minute: "numeric", weekday: "long"
// });

// console.log(todayEN); // Wednesday, August 14, 2024 at 8:34 PM
// console.log(todayRU); // среда, 14 августа 2024 г. в 20:34

// const now = new Date();
// const tomorrow = new Date("2025-09-06 00:00:00");
// const minutesBeforeTomorrow = Math.floor((tomorrow - now) / 1000 / 60);

// log(minutesBeforeTomorrow);

// const day = new Date(2024, 2, 0);
// const lastNumberOfMonth = day.getDate();

// log(lastNumberOfMonth);

// Пятнадцатый урок
// const number = Number(prompt('Введите число между 0 и 3', ''));
// switch(true) {
//     case number === 0: log('Вы ввели число 0'); break;
//     case number === 1: log('Вы ввели число 1'); break;
//     case number === 2 || number === 3: log('Вы ввели число 2, а может и 3'); break;
//     default: log('Вы ввели неверное число');
// }

// const newDay = new Date("2025-09-08");
// const day = newDay.getDay();

// switch(true) {
//     case day === 1: log("Понедельник"); break;
//     case day === 2: log("Вторник"); break;
//     case day === 3: log("Среда"); break;
//     case day === 4: log("Четверг"); break;
//     case day === 5: log("Пятница"); break;
//     case day === 6: log("Суббота"); break;
//     case day === 0: log("Воскресенье"); break;
//     default: log(`Некорректный ввод`);
// }

// const age = 65;

// switch(true) {
//     case (age >= 0 && age <= 12): log("'Ребёнок' (0-12 лет)"); break;
//     case (age >= 13 && age <= 17): log("'Подросток' (13-17 лет)"); break;
//     case (age >= 65): log("'Пожилой человек' (65 лет и страше)"); break;
//     default: log('Некорректный ввод');
// }

// Шестнадцатый урок
//     function getRandomValue(max, min) {
//         return Math.floor(Math.random() * (max - min) + min);
//     }

//     console.log(getRandomValue(4, 1));

//         function getMaxValue(num1, num2, num3, num4, num5) {
//             return Math.max(num1, num2, num3, num4, num5);
//         }

//     console.log(getMaxValue(2, 5, 990, 23, 101))

//         function getCurrentDayOfWeek(currentDate) {
//             const numberDay = currentDate.getDay();
//             // const stringDays = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
//             // return `Сегодня: ${stringDays[numberDay]}`;

//             switch(numberDay) {
//                 case 0: return 'Сегодня воскресенье';
//                 case 1: return 'Сегодня понедельник';
//                 case 2: return 'Сегодня вторник';
//                 case 3: return 'Сегодня среда';
//                 case 4: return 'Сегодня четверг';
//                 case 5: return 'Сегодня пятница';
//                 case 6: return 'Сегодня суббота';
//                 default: "Ошибка";
//             }

//         }

//     log(getCurrentDayOfWeek(new Date()));

//     function greet (name, greeting = "Hello") {
//         return `${greeting}, ${name}`
//     }

//     log(greet("Alice")); // Вывод: "Hello, Alice!"
//     log(greet("Bob", "Good morning")); // Вывод: "Good morning, Bob!"

//     function multiplyDeclaration(num1, num2) {
//         return num1 * num2
//     }

//     const multiplyExpression = multiplyDeclaration;

//     log(multiplyExpression(2, 3)); // Вывод: 6
//     log(multiplyDeclaration(4, 5)); // Вывод: 20

// function sayHello(name) {
//      return `Hello, ${name}`;
// }

// function sayByBy(name) {
//     return `By-by, my dear friend, ${name}`;
// }

// function greet2(name, cb) {
//     return cb(name);

// }

// log(greet2("Ekaterina", sayByBy)); // "Hello, Ekaterina!"

// function displayResult(num) {
//     return num * 2;
// }

// const double = (num, cb) => `Result is ${cb(num)}`;

// log(double(5, displayResult));

//  const car = {
//     brand: "bmw",
//     model: "e46",
//     year: 2002,
//     isNew: false
//  };

//  log(car.isNew)
//  car.isNew = true;
//  log(car.isNew)
//  car.year = 5089;
//  delete car.isNew;
//  log(car);

//  const calculator = {
//      addition: (num1, num2) =>  num1 + num2,
//      multiplication: (num1, num2) =>  num1 * num2,
//      division: (num1, num2) =>  num1 / num2,
//      subtraction: (num1, num2) =>  num1 - num2
//  };

//  log(calculator.addition(5, 5));
//  log(calculator.division(500, 5));

// const student = {};

// student.firstName = "Irina";
// student.age = 35;
// student.address = {
//     country: "RU",
//     city: "RND",
//     street: "Pacaeva"
// }
// const checkIsActive = "isActive" in student;

// log(student);
// log(checkIsActive);

// const fruits = ["Apple", "Banana", "Orange", "Grape"];
// log(fruits[0], fruits[3]);

// const colors = ["Red", "Green", "Blue"];
// colors.push("Yellow");
// colors.shift();
// log(colors);

// const statuses = [
//     {id: 1, status: "Active" },
//     {id: 2, status: "Pending" },
//     {id: 3, status: "Decline" },
// ];

// log(statuses);
// statuses[0].message = "Активен";
// statuses[1].message = "Ожидает ответа";
// statuses[2].message = "Отклонено";

// statuses.push({
//     id: 4,
//     status: "Complete",
//     message: "Завершено"
// }
// )

// const numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }
// log(sum);

// const fruits2 = ['apple', 'banana', 'cherry', 'date'];

// let i = fruits2.length - 1;

// while (i >= 0) {
//     console.log(fruits2[i]);
//     i--;
// }

// const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let count = 0;
// for (let i = 0; i < numbers2.length; i++) {
//     if (numbers2[i] % 2 === 0) {
//         count++;
//     }
// }

// log(count);

//     const products = [
//         { name: 'Laptop', price: 1500 },
//         { name: 'Mouse', price: 25 },
//         { name: 'Keyboard', price: 75 },
//         { name: 'Monitor', price: 200 },
//     ];

//     for (let i = 0; i < products.length; i++) {
//         if (products[i].price > 100) {
//             log(`Этот товар стоит больше ста рублей: ${products[i].name}`)
//         }
//     }

//     const colors2 = ['red', 'green', 'blue', 'yellow'];
//     const targetColor = 'green';

// let k = 0;
// let found = false;

// while (k < colors2.length) {
//     if (colors2[k] === targetColor) {
//         log(`Нашли цвет ${targetColor} по индексу ${k}`);
//         found = true;
//         break;
//     }

//     k++;
// }

// if (!found) {
//     console.log(`Цвет "${targetColor}" не найден`);
// }

// const numbers3 = [3, 5, 75, 2, 8, 101, 6];
// let large = 0;

// for (let j = 0; j < numbers3.length; j++) {
//     if (numbers3[j] > large) {
//         large = numbers3[j];
//     }
// }

// let indexLarge = numbers3.indexOf(large);

// log(large);
// log(indexLarge);

// 20-й урок

// const users = [
//   { id: 1, name: "Alex", age: 35, position: "manager" },
//   { id: 2, name: "Kate", age: 22, position: "qa" },
//   { id: 3, name: "Nikita", age: 29, position: "developer" },
// ];

// for (let user of users) {
//   log(
//     `ID -> ${user.id}, NAME -> ${user.name}, AGE -> ${user.age}, POSITION -> ${user.position}`
//   );
// }

// const numbers = [3, 5, 77, 81, 99, 12, 90, 119, 4];
// numbers.sort((a, b) => a - b); //изменяем массив
// const numbers2 = numbers.toSorted((a, b) => a - b).toReversed(); //создаем новый мвссив, т.к. toSorted и toReversed - не изменяют массив
// log(numbers);
// log(numbers2);

// let cars = ["audi", "ford", "mercedes", "mazda", "tesla"];
// const cars2 = cars.join(" + ");
// log(cars2);
// const transformIntoString = (separator = ", ") => cars.join(separator);
// const newCars = transformIntoString(" !!! ");
// log(newCars);

// let cars3 = ["audi", "ford", "mercedes", "mazda", "tesla"];

// const addNewCar = (auto) => {
//   if (!cars3.includes(auto)) {
//     cars3.push(auto);
//   }
// };
// addNewCar("lada");
// addNewCar("bmw");
// addNewCar("lada");
// log(cars3);

// const calcSum = (...nums) => {
//   let sum = 0;
//   for (let num of nums) {
//     sum += num;
//   }
//   return sum;
// };

// console.log(calcSum(1)); // 1
// console.log(calcSum(1, 2, 3, 4, 5)); // 15
// console.log(calcSum(1, 2, 3)); // 6
// console.log(calcSum(1, 2, 3, 100, 200, 500, 0)); // 806

// const combineArrays = (...arrs) => {
//   return arrs.flat().join();
// };

// log(combineArrays([1], [2, 3], [4, 5, 6])); // 1,2,3,4,5,6
// log(combineArrays(["Hello"], ["friends", "!"], [4, 5, 6], [99, "=)"])); // Hello,friends,!,4,5,6,99,=)

// 21-й урок

// const skills = [
//   "html",
//   "css",
//   "scss",
//   "js",
//   "git",
//   "ts",
//   "react",
//   "git",
//   "angular",
//   "js",
// ];
// let uniqSkills = [];
// skills.forEach((skill) => {
//   if (uniqSkills.includes(skill) === false) {
//     uniqSkills.push(skill);
//   }
// });

// log(uniqSkills);

// const num2 = 12345;
// let numArr = String(num2).split("").reverse().map(Number);
// log(numArr);

// const numbers = [1, -2, 3, -4, 5];
// const invertNumbers = numbers.map((num) => num * -1);
// log(invertNumbers);

// let invertNumbers2 = [];
// numbers.forEach((num) => {
//   num = num * -1;
//   invertNumbers2.push(num);
// });

// log(invertNumbers2);

// const first = "дед"; // true
// const second = "баба"; // false
// const phrase1 = "рвал дед лавр"; // true
// const phrase2 = "Леша на полке клопа нашел"; // true

// const palindrom = (value) => {
//   const newValueStr = value.toLowerCase().replace(/\s/g, "");
//   const reverseStr = newValueStr.split("").toReversed().join("");

//   return newValueStr === reverseStr;
// };

// log(palindrom(second));

// const statusesFromServer = [
//   { value: 1, status: "Full time" },
//   { value: 2, status: "Part time" },
//   { value: 3, status: "On demand" },
//   { value: 4, status: "Retired" },
// ];

// const mappedStatuses = statusesFromServer.map((obj) => {
//   return {
//     key: obj.value,
//     title: obj.status,
//   };
// });

// log(mappedStatuses);

// const books = [
//   { id: 1, title: "Гарри Поттер", price: 59, category: "fantasy" },
//   { id: 2, title: "Чистый код", price: 109, category: "science" },
//   { id: 3, title: "Темная Башня", price: 149, category: "fantasy" },
//   { id: 4, title: "Грокаем алгоритмы", price: 173, category: "science" },
//   { id: 5, title: "Многопоточный JavaScript", price: 79, category: "science" },
//   { id: 6, title: "Властелин колец", price: 120, category: "fantasy" },
//   { id: 7, title: "1984", price: 95, category: "fiction" },
//   { id: 8, title: "Анна Каренина", price: 85, category: "romance" },
//   { id: 9, title: "Игра престолов", price: 155, category: "fantasy" },
//   { id: 10, title: "Алхимик", price: 60, category: "philosophy" },
//   { id: 11, title: "Код да Винчи", price: 180, category: "thriller" },
//   { id: 12, title: "451 градус по Фаренгейту", price: 99, category: "fiction" },
//   { id: 13, title: "Мастер и Маргарита", price: 125, category: "fantasy" },
//   {
//     id: 14,
//     title: "Убийство в Восточном экспрессе",
//     price: 110,
//     category: "mystery",
//   },
//   { id: 15, title: "Три товарища", price: 75, category: "romance" },
//   { id: 16, title: "Зелёная миля", price: 130, category: "fiction" },
//   { id: 17, title: "Шерлок Холмс", price: 88, category: "mystery" },
//   { id: 18, title: "Сто лет одиночества", price: 92, category: "fiction" },
//   { id: 19, title: "Остров сокровищ", price: 115, category: "adventure" },
//   {
//     id: 20,
//     title: "Преступление и наказание",
//     price: 140,
//     category: "philosophy",
//   },
//   {
//     id: 21,
//     title: "Пикник на обочине",
//     price: 108,
//     category: "science fiction",
//   },
//   { id: 22, title: "Моби Дик", price: 85, category: "adventure" },
//   { id: 23, title: "Граф Монте-Кристо", price: 123, category: "adventure" },
//   { id: 24, title: "Великий Гэтсби", price: 90, category: "fiction" },
//   { id: 25, title: "Одиннадцать минут", price: 95, category: "romance" },
//   { id: 26, title: "Дракула", price: 115, category: "horror" },
//   { id: 27, title: "Меч королей", price: 130, category: "fantasy" },
//   { id: 28, title: "Дюна", price: 160, category: "science fiction" },
//   { id: 29, title: "Тени прошлого", price: 112, category: "thriller" },
//   { id: 30, title: "Прощай, оружие", price: 100, category: "romance" },
//   { id: 31, title: "Хроники Нарнии", price: 140, category: "fantasy" },
//   { id: 32, title: "Доктор Живаго", price: 110, category: "romance" },
//   { id: 33, title: "Старик и море", price: 93, category: "philosophy" },
//   { id: 34, title: "Тёмная башня", price: 135, category: "fantasy" },
//   { id: 35, title: "Затерянный мир", price: 105, category: "adventure" },
//   { id: 36, title: "Палата №6", price: 88, category: "philosophy" },
//   {
//     id: 37,
//     title: "Путешествие к центру Земли",
//     price: 117,
//     category: "adventure",
//   },
//   { id: 38, title: "Оливер Твист", price: 119, category: "fiction" },
//   { id: 39, title: "Иллиада", price: 150, category: "history" },
//   { id: 40, title: "Одиссея", price: 155, category: "history" },
//   { id: 41, title: "Последний легион", price: 110, category: "history" },
//   { id: 42, title: "Фауна и флора", price: 85, category: "science" },
//   { id: 43, title: "Зов Ктулху", price: 120, category: "horror" },
//   {
//     id: 44,
//     title: "Человек, который смеётся",
//     price: 98,
//     category: "philosophy",
//   },
//   { id: 45, title: "Сага о Форсайтах", price: 113, category: "romance" },
//   { id: 46, title: "Крошка Цахес", price: 108, category: "fantasy" },
//   { id: 47, title: "Ловушка", price: 102, category: "thriller" },
//   { id: 48, title: "Алхимик", price: 78, category: "philosophy" },
//   { id: 49, title: "Триумфальная арка", price: 127, category: "romance" },
//   { id: 50, title: "Код да Винчи", price: 170, category: "thriller" },
// ];

// let categoriesCount = 0;
// const categoryMap = books.reduce((res, book) => {
//   if (book.category in res) {
//     res[book.category]++;
//   } else {
//     res[book.category] = 1;
//     categoriesCount++;
//   }
//   return res;
// }, {});

// log(categoryMap);

// const totalPrice = books.reduce((sum, book) => {
//   return sum + book.price;
// }, 0);
// log(totalPrice);

// const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
// const count = fruits.reduce((sum, fruit) => {
//   if (!sum[fruit]) {
//     sum[fruit] = 1;
//   } else {
//     sum[fruit]++;
//   }
//   return sum;
// }, {});

// log(count);

// const products = [
//   { name: "iPhone", category: "electronics" },
//   { name: "MacBook", category: "electronics" },
//   { name: "Sofa", category: "furniture" },
//   { name: "Chair", category: "furniture" },
//   { name: "TV", category: "electronics" },
// ];

// const categories = products.reduce((sum, item) => {
//   if (!sum[item.category]) {
//     sum[item.category] = [];
//   }

//   sum[item.category].push(item.name);
//   return sum;
// }, {});

// log(categories);

// const students = [
//   { name: "Alice", grade: 85, subject: "Math" },
//   { name: "Bob", grade: 92, subject: "Math" },
//   { name: "Charlie", grade: 78, subject: "Science" },
//   { name: "Diana", grade: 88, subject: "Science" },
//   { name: "Eve", grade: 95, subject: "Math" },
// ];

// const studentsMaxScore = students
//   .filter((student) => student.grade >= 85)
//   .reduce((obj, student) => {
//     if (!obj[student.subject]) {
//       obj[student.subject] = [];
//     }
//     obj[student.subject].push(student.name);
//     return obj;
//   }, {});
// log(studentsMaxScore);

// const orders = [
//   { id: 1, customer: "John", amount: 100, status: "completed" },
//   { id: 2, customer: "Jane", amount: 150, status: "pending" },
//   { id: 3, customer: "John", amount: 200, status: "completed" },
//   { id: 4, customer: "Bob", amount: 50, status: "cancelled" },
//   { id: 5, customer: "Jane", amount: 120, status: "completed" },
// ];
// // Нужно:
// // 1. totalCompleted - общая сумма завершённых заказов
// // 2. customerStats - объект, где ключ - имя клиента, значение - количество его заказов
// // 3. statusCount - объект, где ключ - статус, значение - сколько заказов с таким статусом

// const totalCompleted = orders
//   .filter((order) => order.status === "completed")
//   .reduce((sum, order) => (sum += order.amount), 0);

// log(totalCompleted);

// const customerStats = orders.reduce((sum, client) => {
//   if (!sum[client.customer]) {
//     sum[client.customer] = 1;
//   } else {
//     sum[client.customer]++;
//   }
//   return sum;
// }, {});

// log(customerStats);

// const statusCount = orders.reduce((qa, client) => {
//   if (!qa[client.status]) {
//     qa[client.status] = 1;
//   } else {
//     qa[client.status]++;
//   }
//   return qa;
// }, {});

// log(statusCount);

// const data = [
//   { id: 1, tags: ["js", "web"] },
//   { id: 2, tags: ["js", "mobile"] },
//   { id: 3, tags: ["python", "data"] },
//   { id: 4, tags: ["js", "web", "frontend"] },
//   { id: 5, tags: ["python", "backend"] },
// ];
// // Нужно: создать массив uniqueTags со всеми уникальными тегами
// // Результат: ["js", "web", "mobile", "python", "data", "frontend", "backend"]

// const uniqueTags = data.reduce((qa, item) => {
//   item.tags.forEach((tag) => {
//     if (!qa.includes(tag)) {
//       qa.push(tag);
//     }
//   });
//   return qa;
// }, []);

// log(uniqueTags);

// const testUser = {
//   username: "john_doe",
//   email: "john@example.com",
//   password: "qwerty",
//   age: 30,
// };

// const removePassword = (user) => {
//   const { password, ...rest } = user;
//   return rest;
// };

// log(removePassword(testUser));

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const newArr = [0, ...arr1, ...arr2];
// log(newArr);

// function sum(...numbers) {
//   return numbers.reduce((sum, num) => (sum += num), 0);
// }

// console.log(sum(1, 2, 3, 100, 90));
// console.log(sum(10, 20));

// const colors = ["red", "green", "blue", "yellow"];
// const [firstEl, , , lastEl] = colors;
// log(firstEl);
// log(lastEl);

// const product = { name: "iPhone", price: 1000, category: "electronics" };
// const newProductPrice = { ...product };
// newProductPrice.price = 900;
// log(newProductPrice);

// const user = { name: "Anna", age: 25, email: "test@mail.com", password: "123" };

// function removeFields(obj, field1, field2) {
//   const { [field1]: rem1, [field2]: rem2, ...rest } = obj;
//   return rest;
// }

// console.log(removeFields(user, "password", "email"));

// const userBase = { name: "Anna", age: 25 };
// const userContacts = { email: "anna@mail.com", phone: "+123456789" };

// const mergeUser = (obj1, obj2) => {
//   return { ...obj1, ...obj2 };
// };

// log(mergeUser(userBase, userContacts));

// const removeEnds = (arr) => arr.slice(1, -1);

// console.log(removeEnds([1, 2, 3, 4, 5])); // [2, 3, 4]
// console.log(removeEnds(["a", "b", "c", "d"])); // ['b', 'c']

// const userSettings = {
//   theme: "dark",
//   language: "en",
//   notifications: false,
// };

// function updateSettings(oldSettings, newSettings) {
//   return { ...oldSettings, ...newSettings };
// }

// console.log(updateSettings(userSettings, { theme: "grey", language: "ru" }));
// console.log(userSettings);

// function average(...numbers) {
//   return numbers.reduce((sum, numb) => sum + numb, 0) / numbers.length;
// }

// console.log(average(1, 2, 3, 4)); // 2.5
// console.log(average(10, 20)); // 15
// console.log(average(5)); // 5

// const company = {
//   name: "Tech Corp",
//   address: {
//     city: "Moscow",
//     street: "Lenina",
//     building: 15,
//   },
//   employees: 100,
// };

// const {
//   name,
//   address: { city, street, building },
//   employees,
// } = company;

// log(street);

// const product = { name: "iPhone", price: 1000, category: "electronics" };
// // Результат: { name: 'iPhone', price: 800, category: 'electronics' }

// const productDiscount = (object) => {
//   return { ...object, price: object.price - object.price * 0.2 };
// };

// log(productDiscount(product));

// function swapEnds(arr) {
//   return [arr[arr.length - 1], ...arr.slice(1, -1), arr[0]];
// }

// console.log(swapEnds([1, 2, 3, 4, 5])); // [5, 2, 3, 4, 1]
// console.log(swapEnds(["a", "b", "c"])); // ['c', 'b', 'a']

// function mergeObjects(...objects) {
//   return objects.reduce((sum, object) => ({ ...sum, ...object }), {});
// }

// console.log(mergeObjects({ a: 1 }, { b: 2 }, { c: 3 }));
// // {a: 1, b: 2, c: 3}

// console.log(mergeObjects({ x: 10 }, { y: 20 }));
// // {x: 10, y: 20}

// const user = {
//   name: "Anna",
//   age: 25,
//   password: "123",
//   token: "secret",
//   email: "test@mail.com",
// };

// function removeSensitiveData(user, ...sensitiveFields) {
//   const res = { ...user };
//   sensitiveFields.forEach((field) => {
//     delete res[field];
//   });
//   return res;
// }

// console.log(removeSensitiveData(user, "password", "token"));
// // { name: 'Anna', age: 25, email: 'test@mail.com' }

// function getStats(numbers) {
//   return {
//     min: Math.min(...numbers),
//     max: Math.max(...numbers),
//     sum: numbers.reduce((sum, num) => sum + num, 0),
//     avg: numbers.reduce((sum, num) => sum + num, 0) / numbers.length,
//   };
// }

// console.log(getStats([1, 2, 3, 4, 5]));
// // { min: 1, max: 5, sum: 15, avg: 3 }

// function getLengths(strings) {
//   return strings.reduce((acc, fruit) => {
//     acc[fruit] = fruit.length;
//     return acc;
//   }, {});
// }

// console.log(getLengths(["apple", "banana", "kiwi", "cherry"]));

// function swapKeyValues(obj) {
//   const arrays = Object.entries(obj);
//   return arrays
//     .map((arr) => arr.reverse())
//     .reduce((acc, arr) => {
//       acc[arr[0]] = arr[1];
//       return acc;
//     }, {});
// }

// console.log(swapKeyValues({ a: 1, b: 2, c: 3 }));
// // { 1: 'a', 2: 'b', 3: 'c' }

// console.log(swapKeyValues({ name: "Anna", age: 25 }));
// // { Anna: 'name', 25: 'age' }

// const users = [
//   { name: "Anna", age: 25 },
//   { name: "Bob", age: 17 },
//   { name: "John", age: 30 },
// ];

// function getAdultNames(users, minAge) {
//   return users
//     .filter((user) => user.age >= minAge) // фильтруем совершеннолетних
//     .map((user) => user.name); // берём только имена
// }

// console.log(getAdultNames(users, 18)); // ['Anna', 'John']
// log(users);

// function reverseDigits(number) {
//   return number
//     .toString()
//     .split("")
//     .toReversed()
//     .map((num) => Number(num));
// }

// console.log(reverseDigits(12345)); // [5, 4, 3, 2, 1]
// console.log(reverseDigits(987)); // [7, 8, 9]
// console.log(reverseDigits(5)); // [5]

// function groupByLength(words) {
//   return words.reduce((acc, word) => {
//     if (!acc[word.length]) {
//       acc[word.length] = [];
//     }
//     acc[word.length].push(word);
//     return acc;
//   }, {});
// }

// log(groupByLength(["apple", "kiwi", "banana", "pear"]));
// // { 3: ['kiwi', 'pear'], 5: ['apple'], 6: ['banana'] }

// function createSmileys(numbers) {
//   return numbers.map((numb) => "😊".repeat(numb));
// }

// console.log(createSmileys([1, 2, 3, 6]));
// // ['😊', '😊😊', '😊😊😊']

// function createGreeting(name, age) {
//   return {
//     message: `Поздравляю, ${name}!`,
//     age: `${age}`,
//     stars: "⭐".repeat(5),
//   };
// }

// console.log(createGreeting("Anna", 25));
// // {
// //   message: 'Поздравляю, Anna!',
// //   age: 25,
// //   stars: '⭐⭐⭐⭐⭐'
// // }

// function countWords(words) {
//   return words.reduce((acc, word) => {
//     if (!acc[word]) {
//       acc[word] = 0;
//     }
//     acc[word]++;
//     return acc;
//   }, {});
// }

// console.log(
//   countWords(["apple", "banana", "apple", "orange", "banana", "apple"])
// );
// // { apple: 3, banana: 2, orange: 1 }

// function pairsToObject(pairs) {
//   return pairs.reduce((acc, [a, b]) => {
//     acc[a] = b;
//     return acc;
//   }, {});
// }

// console.log(
//   pairsToObject([
//     ["name", "Anna"],
//     ["age", 25],
//     ["city", "Moscow"],
//   ])
// );
// // { name: 'Anna', age: 25, city: 'Moscow' }

// function mergeObjects(...objects) {
//   return objects.reduce((acc, obj) => {
//     return { ...acc, ...obj };
//   }, {});
// }

// console.log(mergeObjects({ a: 1, b: 2 }, { b: 3, c: 4 }, { c: 5, d: 6 }));
// // {a: 1, b: 3, c: 5, d: 6}

// function findMostExpensive(products) {
//   return products.reduce((maxProduct, currentProduct) => {
//     if (currentProduct.price > maxProduct.price) {
//       return currentProduct;
//     }
//     return maxProduct;
//   });
// }

// const products = [
//   { name: "iPhone", price: 1000 },
//   { name: "MacBook", price: 2000 },
//   { name: "iPad", price: 800 },
// ];

// console.log(findMostExpensive(products));
// // { name: 'MacBook', price: 2000 }

// function createGreetings(names) {
//   return names.map((name) => `Привет, ${name}!`);
// }

// console.log(createGreetings(["Anna", "Bob", "John"]));
// // ['Привет, Anna!', 'Привет, Bob!', 'Привет, John!']

// function findLongestString(strings) {
//   return strings.reduce((lenghts, currentString) => {
//     if (currentString.length > lenghts.length) {
//       return currentString;
//     }
//     return lenghts;
//   });
// }

// console.log(findLongestString(["apple", "banana", "kiwi", "strawberry"]));
// // 'strawberry'

// function findShortestString(strings) {
//   return strings.reduce((shortString, currentString) => {
//     if (currentString.length < shortString.length) {
//       return currentString;
//     }
//     return shortString;
//   });
// }

// console.log(findShortestString(["apple", "kiwi", "banana", "pear"]));
// // 'kiwi'

// const usersFormat = [
//   { id: 1, name: "anna", age: 25 },
//   { id: 2, name: "bob", age: 30 },
// ];

// const formatUsers = (persons) => {
//   persons.map(
//     (person) =>
//       (person.name = person.name.charAt(0).toUpperCase() + person.name.slice(1))
//   );

//   return [...persons];
// };

// log(formatUsers(usersFormat));

// const products = [
//   { id: 1, name: "iPhone", category: "electronics", price: 1000 },
//   { id: 2, name: "MacBook", category: "electronics", price: 2000 },
//   { id: 3, name: "Sofa", category: "furniture", price: 500 },
// ];

// const getProductsByCategory = (arrs, cat) =>
//   arrs.filter((item) => item.category === cat);

// log(getProductsByCategory(products, "electronics"));

// const products = [
//   { name: "iPhone", price: 1000 },
//   { name: "MacBook", price: 2000 },
//   { name: "iPad", price: 800 },
// ];

// function applyDiscount(arr, discountPercent) {
//   return arr.map((obj) => {
//     const newPrice = obj.price - obj.price * (discountPercent / 100);
//     return {
//       name: obj.name,
//       price: newPrice,
//     };
//   });
// }

// console.log(applyDiscount(products, 20));

// function findExpensiveProducts(arr, minPrice) {
//   return arr.filter((obj) => obj.price >= minPrice);
// }

// console.log(findExpensiveProducts(products, 1000));

// function formatPrices(arr) {
//   return arr.map((obj) => {
//     return {
//       name: obj.name,
//       price: `$${obj.price}`,
//     };
//   });
// }

// console.log(formatPrices(products));

// const users = [
//   { id: 1, name: "Anna", isActive: false },
//   { id: 2, name: "Bob", isActive: true },
//   { id: 3, name: "John", isActive: false },
// ];

// function activateUser(users, userId) {
//   return users.map((user) => {
//     let newStatus = true;
//     if (user.id === userId && user.isActive === false) {
//       newStatus = !user.isActive;
//     } else {
//       newStatus = user.isActive;
//     }
//     return {
//       id: user.id,
//       name: user.name,
//       isActive: newStatus,
//     };
//   });
// }

// console.log(activateUser(users, 2));

// function addRating(arr, num) {
//   return arr.map((obj) => {
//     return { ...obj, rating: num };
//   });
// }

// const products = [
//   { name: "iPhone", price: 1000 },
//   { name: "MacBook", price: 2000 },
// ];

// console.log(addRating(products, 5));

// function addDiscountFlag(products, minPriceForDiscount) {
//   return products.map((product) => {
//     return {
//       ...product,
//       discounted: product.price > minPriceForDiscount,
//     };
//   });
// }

// const products = [
//   { name: "iPhone", price: 1000 },
//   { name: "MacBook", price: 2000 },
// ];

// console.log(addDiscountFlag(products, 1500));

// const products = [
//   { name: "iPhone", category: "electronics" },
//   { name: "MacBook", category: "electronics" },
//   { name: "Sofa", category: "furniture" },
// ];

// function countByCategory(products) {
//   return products.reduce((acc, prod) => {
//     if (!acc[prod.category]) {
//       acc[prod.category] = 1;
//     } else {
//       acc[prod.category]++;
//     }
//     return acc;
//   }, {});
// }

// console.log(countByCategory(products));
// // { electronics: 2, furniture: 1 }

// function getTotalValue(products) {
//   return products.reduce((acc, prod) => {
//     acc += prod.price * prod.quantity;
//     return acc;
//   }, 0);
// }

// const productsEl = [
//   { name: "iPhone", price: 1000, quantity: 2 },
//   { name: "MacBook", price: 2000, quantity: 1 },
//   { name: "iPad", price: 800, quantity: 3 },
// ];

// console.log(getTotalValue(productsEl));
// // 6400

// const productsSome = [
//   { name: "iPhone", category: "electronics", price: 1000 },
//   { name: "MacBook", category: "electronics", price: 2000 },
//   { name: "Sofa", category: "furniture", price: 500 },
//   { name: "Table", category: "furniture", price: 800 },
// ];

// function getMostExpensiveByCategory(arr) {
//   return arr.reduce((acc, item) => {
//     if (!acc[item.category]) {
//       acc[item.category] = item;
//     } else if (item.price > acc[item.category].price) {
//       acc[item.category] = item;
//     }
//     return acc;
//   }, {});
// }

// console.log(getMostExpensiveByCategory(productsSome));
// // {
// //   electronics: { name: 'MacBook', price: 2000 },
// //   furniture: { name: 'Table', price: 800 }
// // }

// const productsList = [
//   { name: "iPhone", price: 1000 },
//   { name: "MacBook", price: 2000 },
//   { name: "iPad", price: 800 },
//   { name: "AirPods", price: 1500 },
// ];

// function filterAndDiscount(arr, minPrice, discountPercent) {
//   return arr
//     .filter((item) => item.price > minPrice)
//     .map((item) => {
//       item.price *= 1 - discountPercent / 100;
//       return {
//         name: item.name,
//         price: item.price,
//       };
//     });
// }

// console.log(filterAndDiscount(productsList, 1000, 50));
// // [
// //   { name: 'MacBook', price: 1800 },   // 2000 - 10%
// //   { name: 'AirPods', price: 1350 }    // 1500 - 10%
// // ]

// function createProductList(arr) {
//   return arr
//     .map((item, index) => {
//       return `${1 + index}. ${item.name} - $${item.price}`;
//     })
//     .join("\n");
// }

// console.log(createProductList(productsList));
// // [
// //   '1. iPhone - $1000',
// //   '2. MacBook - $2000',
// //   '3. iPad - $800'
// // ]

// const newProducts = [
//   { name: "iPhone", price: 1000 },
//   { name: "MacBook", price: 2000 },
//   { name: "iPad", price: 800 },
//   { name: "AirPods", price: 1500 },
//   { name: "Apple Watch", price: 400 },
// ];

// function findProductsInRange(arr, minPrice, maxPrice) {
//   return arr
//     .filter((item) => minPrice <= item.price && item.price <= maxPrice)
//     .map((item) => {
//       return {
//         name: item.name,
//         price: item.price,
//       };
//     });
// }

// console.log(findProductsInRange(newProducts, 500, 1500));
// // [
// //   { name: 'iPhone', price: 1000 },
// //   { name: 'iPad', price: 800 },
// //   { name: 'AirPods', price: 1500 }
// // ]

// const productsNameOnly = [
//   { name: "iPhone", price: 1000 },
//   { name: "MacBook", price: 2000 },
//   { name: "iPad", price: 800 },
// ];

// function getProductNames(arr) {
//   return arr.map((item) => item.name);
// }

// console.log(getProductNames(productsNameOnly));
// // ['iPhone', 'MacBook', 'iPad']

// const productsScore = [
//   { name: "iPhone", rating: 4.5 },
//   { name: "MacBook", rating: 4.8 },
//   { name: "iPad", rating: 3.9 },
// ];

// const getHighRatedProducts = (arr, score) => {
//   return arr
//     .filter((item) => item.rating > score)
//     .map((item) => {
//       return {
//         name: item.name,
//         rating: item.rating,
//       };
//     });
// };

// log(getHighRatedProducts(productsScore, 4));
// // [{ name: 'iPhone', rating: 4.5 }, { name: 'MacBook', rating: 4.8 }]

// const productsTotal = [
//   { name: "iPhone", price: 1000, quantity: 2 },
//   { name: "MacBook", price: 2000, quantity: 1 },
// ];

// const getTotalPerProduct = (arr) => {
//   return arr.reduce((acc, item) => {
//     acc[item.name] = item.price * item.quantity;
//     return acc;
//   }, {});
// };

// log(getTotalPerProduct(productsTotal));
// // { iPhone: 2000, MacBook: 2000 }

// const products = [
//   { name: "iPhone", price: 1000 },
//   { name: "MacBook", price: 2000 },
//   { name: "iPad", price: 800 },
//   { name: "iPod", price: 2200 },
// ];

// const findCheapestProduct = (arr) => {
//   return arr.reduce((acc, item) => {
//     if (!acc || item.price < acc.price) {
//       return item;
//     }
//     return acc;
//   });
// };

// const findMostExpensiveProduct = (arr) => {
//   return arr.reduce((current, item) => {
//     if (!current || current.price > item.price) {
//       return current;
//     }
//     return item;
//   });
// };

// log(findMostExpensiveProduct(products));
// // {name: 'MacBook', price: 2000}
// log(findCheapestProduct(products));
// // { name: 'iPad', price: 800 }

// const firstPerson = {
//   name: "Petr",
//   weight: 72,
//   height: 1.88,
//   calcBMI,
// };

// const secondPerson = {
//   name: "Denis",
//   weight: 82,
//   height: 1.73,
//   calcBMI,
// };

// function calcBMI() {
//   this.resultBmi = this.weight / this.height ** 2;
//   return this.resultBmi;
// }

// firstPerson.calcBMI();
// secondPerson.calcBMI();

// log(firstPerson, secondPerson);

// const user = {
//   years: 33,
//   name: "Alex",
// };

// const { years: age, name, isDeveloper = false } = user;
// log(age);

// const employees = {
//   alex: 1000,
//   elena: 1300,
//   olga: 700,
//   nicolas: 1800,
//   anton: 3000,
//   oleg: 4000,
//   kate: 5000,
// };

// let sum = 0;

// for (names in employees) {
//   sum += employees[names];
// }

// log(sum);

// const oldCar = {
//   year: 2015,
//   name: "Ford",
//   model: "escape 3",
//   "engine capacity": 1.5,
// };

// const { year, name, model } = oldCar;

// const newCar = {
//   ...oldCar,
//   name: "escape 4",
//   year: 2023,
// };

// log(newCar);

// const products = {
//   laptop: 1200,
//   mouse: 25,
//   keyboard: 80,
//   monitor: 300,
//   headphones: 150,
// };

// for (item in products) {
//   if (products[item] > 100) {
//     log(item);
//   }
// }

// const employees = {
//   alex: 1000,
//   elena: 1300,
//   olga: 700,
//   nicolas: 1800,
//   anton: 3000,
// };

// let sum = 0;
// let iteration = 0;

// for (person in employees) {
//   sum += employees[person];
//   iteration++;
// }

// let middle = sum / iteration;

// for (person in employees) {
//   if (middle < employees[person]) {
//     log(person);
//   }
// }

// function deposit(amount, isTransfer = false) {
//   this.balance += amount;
//   if (!isTransfer) {
//     log(`Вы внесли ${amount}. Ваш баланс: ${this.balance}`);
//     this.history.push({
//       type: "deposit",
//       amount,
//       date: new Date(),
//       balance: this.balance,
//     });
//   }
// }

// function getBalance() {
//   return this.balance;
// }

// function withdraw(amount) {
//   if (this.balance >= amount) {
//     this.balance -= amount;
//     log(`Вы сняли ${amount}. Ваш баланс: ${this.balance}`);
//     this.history.push({
//       type: "withdraw",
//       amount,
//       date: new Date(),
//       balance: this.balance,
//     });
//   } else {
//     log(
//       `Недостаточно средств!!! Ваш баланс ${this.balance} меньше введенной суммы: ${amount}`
//     );
//   }
// }

// function transfer(amount, targetAccount) {
//   if (this.balance >= amount) {
//     this.withdraw(amount);
//     targetAccount.deposit(amount, true);
//     this.history.push({
//       type: "transfer",
//       amount,
//       date: new Date(),
//       balance: this.balance,
//       to: targetAccount.name,
//     });
//     targetAccount.history.push({
//       type: "transfer_in",
//       amount,
//       date: new Date(),
//       balance: targetAccount.balance,
//       from: this.name,
//     });
//   } else {
//     log(
//       `На вашем счете недостаточно средств для перевода. Ваш баланс составляет: ${this.balance}`
//     );
//   }
// }

// function clearHistory() {
//   this.history = [];
//   return this;
// }

// function getHistory() {
//   if (!(this.history.length === 0)) {
//     return this.history;
//   }
//   return "История пуста";
// }

// const account1 = {
//   name: "Ivan",
//   balance: 1000,
//   history: [],
//   deposit,
//   getBalance,
//   withdraw,
//   transfer,
//   getHistory,
//   clearHistory,
// };

// const account2 = {
//   name: "Alex",
//   balance: 500,
//   history: [],
//   deposit,
//   getBalance,
//   withdraw,
//   transfer,
//   getHistory,
//   clearHistory,
// };

// account1.deposit(1000);
// account1.withdraw(300);
// account1.transfer(200, account2);

// console.log("История account1:", account1.clearHistory().getHistory());
// console.log("История account2:", account2.getHistory());

// const car = {
//   year: new Date(2024, 3, 1),
//   brand: "audi",
//   color: "blue",
//   power: 3.2,
//   isFast: true,
// };
// const carJson = JSON.stringify(car);
// log(carJson);
// const newCar = JSON.parse(carJson, (key, value) => {
//   if (key === "year") {
//     return new Date(value);
//   }
//   return value;
// });
// log(newCar);

// const clients = [
//   { id: 1, level: 3, name: "Lucy", status: "online" },
//   { id: 2, level: 1, name: "Rick", status: "offline" },
//   { id: 3, level: 3, name: "Jack", status: "online" },
//   { id: 4, level: 2, name: "Helen", status: "online" },
//   { id: 5, level: 1, name: "Alice", status: "offline" },
//   { id: 6, level: 1, name: "Derek", status: "offline" },
//   { id: 7, level: 3, name: "Megan", status: "online" },
// ];

// const addLocalStorage = (key, value) => {
//   localStorage.setItem(key, JSON.stringify(value));
//   return `Данные по ключу "${key}" успешно сохранены`;
// };

// // const removeItemFromLocalStorage = (key) => {
// //   localStorage.removeItem(key);
// // };

// const getItemFromLocalStorage = (key) => {
//   return JSON.parse(localStorage.getItem(key));
// };

// log(addLocalStorage("клиенты", clients));
// log(getItemFromLocalStorage("клиенты"));

// const getClientsByStatus = (status) => {
//   const clients = JSON.parse(localStorage.getItem("клиенты"));
//   return clients.filter((client) => client.status === status);
// };

// const getClientsByLevel = (level) => {
//   const clients = JSON.parse(localStorage.getItem("клиенты"));
//   return clients.filter((client) => client.level === level);
// };

// const toggleClientStatus = (clientId) => {
//   const clients = JSON.parse(localStorage.getItem("клиенты"));
//   let newClients = clients
//     .filter((client) => client.id === clientId)
//     .map((client) => {
//       if (client.status === "offline") {
//         return {
//           ...client,
//           status: "online",
//         };
//       } else if (client.status === "online") {
//         return {
//           ...client,
//           status: "offline",
//         };
//       }
//       return client;
//     });
//   localStorage.setItem("клиенты", JSON.stringify(newClients));
// };

// log(getClientsByStatus("offline"));
// log(toggleClientStatus(6));

// //Задача 1
// localStorage.setItem("Мое имя", "Ирина");
// localStorage.setItem("Мой возраст", "35");
// log(localStorage.getItem("Мое имя"));
// log(localStorage.getItem("Мой возраст"));

// //Задача 2
// const пользователь = {
//   имя: "Мария",
//   возраст: 25,
//   город: "Москва",
// };

// localStorage.setItem("Key", JSON.stringify(пользователь));
// log(JSON.parse(localStorage.getItem("Key")));

// //Задача3
// let count = localStorage.getItem("Счетчик") || 0;

// function countLevel() {
//   count++;
//   localStorage.setItem("Счетчик", count);
//   console.log("Счетчик:", count);
// }

// countLevel();
// countLevel();
// countLevel();

// let countFromLocalStorage = localStorage.getItem("Счетчик");
// log(`На кнопку нажали столько раз: ${countFromLocalStorage}`);
// log(typeof count);

// const toDo = [
//   { text: "купить хлеб", completed: false },
//   { text: "позвонить маме", completed: false },
//   { text: "сделать уроки", completed: false },
// ];

// function showTasks(key) {
//   const listToDo = JSON.parse(localStorage.getItem(key));
//   return listToDo;
// }

// log(showTasks("ToDo"));

// function addTask(newToDo) {
//   if (localStorage.getItem("ToDo") === null) {
//     log(`Нет задач по такому ключу, поэтому создаем дефолтный список`);
//     localStorage.setItem("ToDo", JSON.stringify(toDo));
//   } else {
//     const currentToDo = JSON.parse(localStorage.getItem("ToDo"));
//     currentToDo.push({ text: newToDo, completed: false });
//     localStorage.setItem("ToDo", JSON.stringify(currentToDo));
//   }
// }

// function removeTask(value) {
//   const currentToDo = JSON.parse(localStorage.getItem("ToDo"));
//   const delTask = currentToDo.filter((task) => task.text !== value);
//   localStorage.setItem("ToDo", JSON.stringify(delTask));
// }

// function toggleTaskCompletion(value) {
//   const currentToDo = JSON.parse(localStorage.getItem("ToDo"));
//   const toggleToDo = currentToDo.map((task) => {
//     if (task.text === value) {
//       return { ...task, completed: !task.completed };
//     }
//     return task;
//   });
//   localStorage.setItem("ToDo", JSON.stringify(toggleToDo));
// }

// function getTasksStats() {
//   const statsToDo = JSON.parse(localStorage.getItem("ToDo"));
//   const stats = statsToDo.reduce(
//     (acc, task) => {
//       if (task.completed === true) {
//         acc.completed++;
//       } else {
//         acc.remaining++;
//       }
//       acc.total++;
//       return acc;
//     },
//     { completed: 0, remaining: 0, total: 0 }
//   );
//   return stats;
// }

// function showFilteredTasks(filterType) {
//   const currentToDo = JSON.parse(localStorage.getItem("ToDo"));
//   if (filterType === "all") {
//     return currentToDo;
//   } else if (filterType === "active") {
//     return currentToDo.filter((task) => task.completed === false);
//   } else if (filterType === "completed") {
//     return currentToDo.filter((task) => task.completed === true);
//   } else {
//     return `Такого статуса ${filterType} не существует. Попробуй снова`;
//   }
// }

// function clearCompletedTasks() {
//   const currentToDo = JSON.parse(localStorage.getItem("ToDo"));
//   const completedListforDelete = currentToDo.filter(
//     (task) => task.completed !== true
//   );
//   localStorage.setItem("ToDo", JSON.stringify(completedListforDelete));
//   log(
//     `Было выполнено ${
//       currentToDo.length - completedListforDelete.length
//     }  задач`
//   );
// }

// function editTask(oldText, newText) {
//   const currentList = JSON.parse(localStorage.getItem("ToDo"));
//   const wasEdited = currentList.find((task) => task.text === oldText);
//   if (!wasEdited) {
//     return "Задача не найдена!";
//   }

//   const editTask = currentList.map((task) => {
//     if (task.text === oldText) {
//       return {
//         ...task,
//         text: newText,
//       };
//     }
//     return task;
//   });
//   localStorage.setItem("ToDo", JSON.stringify(editTask));
// }

// log(editTask("Погулять с кошкой", "Погулять с хомяком"));
// log(showTasks("ToDo"));

// const h2 = document.body.firstElementChild;
// log(h2);

// const ol = document.body.children[1];
// log(ol);

// const elena = document.body.children[1].children[1];
// log(elena);

// const olga = document.body.children[1].children[2].textContent;
// log(olga);

// const p = document.body.children[3];
// const h3 = p.previousElementSibling.textContent;
// const span = p.nextElementSibling.textContent;
// // const greeting = h3 + " " + span;
// const greeting = `${h3} ${span}`;
// log(greeting);

// const firstLi = document.querySelector("ul li");
// firstLi.insertAdjacentHTML("afterend", `<li>2</li><li>3</li>`);

// function clear(elem) {
//   const findAllInElement = document.querySelector(elem).children;
//   log(findAllInElement);
//   Array.from(findAllInElement).forEach((element) => {
//     element.remove();
//   });
// }

// clear("#elem");

const newBlockText = document.createElement("div");
newBlockText.innerHTML = `<span class="text-aria">Text Aria</span>`;
document.body.append(newBlockText);

const btn = document.createElement("button");
btn.textContent = "Click me";
document.body.append(btn);

const list = document.createElement("ul");
document.body.append(list);
const li1 = document.createElement("li");
li1.textContent = "First Item";
list.append(li1);

const li2 = document.createElement("li");
li2.textContent = "Second Item";
list.append(li2);

const title = document.createElement("h2");
title.textContent = "Список задач";
document.body.append(title);

const container2 = document.createElement("div");
const input = document.createElement("input");
input.placeholder = "Введите новую задачу";

const btnAddTask = document.createElement("button");
btnAddTask.textContent = "Добавить задачу";
btnAddTask.style.marginLeft = "10px";

container2.append(input, btnAddTask);
document.body.append(container2);

const taskList = document.createElement("ul");
document.body.append(taskList);
taskList.classList.add("listFromTask");

function addTask() {
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Введите задачу");
    return;
  }

  const taskItem = document.createElement("li");
  taskItem.textContent = taskText;

  const delBtnTask = document.createElement("button");
  delBtnTask.textContent = "❎";
  delBtnTask.style.marginLeft = "5px";
  delBtnTask.style.backgroundColor = "transparent";
  delBtnTask.style.border = "none";
  delBtnTask.style.outlineColor = "transparent";

  delBtnTask.onclick = function () {
    taskItem.remove();
  };

  taskItem.append(delBtnTask);
  taskList.append(taskItem);

  input.value = "";

  taskItem.onclick = function () {
    this.classList.toggle("completed");
  };
}

btnAddTask.onclick = addTask;

const btnNoneTxt = document.createElement("button");
btnNoneTxt.textContent = "Hide Text";
btnNoneTxt.style.margin = "10px 5px";
btnNoneTxt.style.backgroundColor = "#34896dff";
btnNoneTxt.style.color = "#fff";

const btnBlockTxt = document.createElement("button");
btnBlockTxt.textContent = "Show Text";
btnBlockTxt.style.margin = "10px 5px";
btnBlockTxt.style.backgroundColor = "navy";
btnBlockTxt.style.color = "#fff";

const text = document.createElement("div");
text.textContent = "You seeing this text";
text.style.display = "block";

document.body.append(text, btnBlockTxt, btnNoneTxt);

btnNoneTxt.onclick = () => {
  if (text.style.display !== "none") {
    text.style.display = "none";
  } else {
    alert("Текст уже скрыт!!!");
  }
};

btnBlockTxt.onclick = () => {
  if (text.style.display === "block") {
    alert("Текст уже показан!!!");
  } else {
    text.style.display = "block";
  }
};

const arrayImage = [
  "https://imgholder.ru/300x300/CB9EC8/ffffff&text=IMAGE+HOLDER&font=kelson",
  "https://imgholder.ru/300x300/9ECACB/ffffff&text=IMAGE+HOLDER&font=kelson",
  "https://imgholder.ru/300x300/5480be/ffffff&text=IMAGE+HOLDER&font=kelson",
  "https://imgholder.ru/300x300/CE5A5A/ffffff&text=IMAGE+HOLDER&font=kelson",
  "https://imgholder.ru/300x300/F3CB3E/aaaaaa&text=IMAGE+HOLDER&font=kelson",
];

const btnPrev = document.createElement("button");
btnPrev.textContent = "Preview";

const btnNext = document.createElement("button");
btnNext.textContent = "Next";

const container = document.createElement("div");

let counter = 0;

document.body.append(container, btnPrev, btnNext);
container.innerHTML = `
  <img src="${arrayImage[counter]}">
  `;

btnNext.onclick = () => {
  if (counter >= arrayImage.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  container.innerHTML = `
  <img src="${arrayImage[counter]}">
  `;
};

btnPrev.onclick = () => {
  if (counter === 0) {
    counter = arrayImage.length - 1;
  } else {
    counter--;
  }
  container.innerHTML = `
  <img src="${arrayImage[counter]}">
  `;
};

const quotes = [
  "Учиться - это круто!",
  "JavaScript - это весело",
  "Ты молодец!",
  "Практика ведет к совершенству",
  "Не бойся ошибаться",
];

const containerQuots = document.createElement("div");
containerQuots.style.margin = "20px 0";
const btnQuots = document.createElement("button");
btnQuots.textContent = "!!!Quotes!!!";

document.body.append(containerQuots, btnQuots);

let lastQuotes = -1;

btnQuots.onclick = () => {
  let newQuotes = Math.floor(Math.random() * quotes.length);

  if (newQuotes === lastQuotes) {
    newQuotes++;

    if (newQuotes >= quotes.length) {
      newQuotes = 0;
    }
  }

  lastQuotes = newQuotes;
  containerQuots.innerHTML = `
Случайная цитата: ${quotes[newQuotes]}
 `;
};

const themeBtn = document.createElement("button");
themeBtn.textContent = "☀️/🌚 Сменить тему";
themeBtn.classList.add("theme-btn");

document.body.prepend(themeBtn);

themeBtn.onclick = () => {
  if (document.body.classList.contains("dark-theme")) {
    document.body.classList.remove("dark-theme");
    themeBtn.textContent = "☀️ Светлая тема";
  } else {
    document.body.classList.add("dark-theme");
    themeBtn.textContent = "🌚 Темная тема";
  }
};

const wrapperProgressContainer = document.createElement("div");
const progressContainer = document.createElement("div");
progressContainer.classList.add("progress-container");
const progressBar = document.createElement("div");
progressBar.classList.add("progress-bar");
const progressText = document.createElement("div");
const progressBtn = document.createElement("button");
progressBtn.textContent = "Click me for progress";
progressBtn.classList.add("progress-btn");
const resetBtn = document.createElement("button");
resetBtn.textContent = "Reset";
resetBtn.classList.add("reset-btn");

wrapperProgressContainer.append(progressContainer, progressText, progressBtn);
progressContainer.append(progressBar);
document.body.append(wrapperProgressContainer);

let progress = 0;
progressBtn.onclick = () => {
  if (progress >= 0 && progress < 90) {
    progress += 10;
    progressText.textContent = `Ваш прогресс равен ${progress}%`;
  } else {
    progress = 100;
    progressContainer.style.borderColor = "green";
    progressBar.style.backgroundColor = "green";
    progressText.textContent = `Ваш прогресс завершен и составляет ${progress}%`;
    progressBtn.style.backgroundColor = "green";
    progressBtn.style.color = "#fff";
    wrapperProgressContainer.append(resetBtn);
    if (resetBtn.style.display === "none") {
      resetBtn.style.display = "block";
    }
  }

  progressBar.style.width = `${progress}%`;
};

resetBtn.onclick = () => {
  progress = 0;
  progressBar.style.width = `${progress}%`;
  progressText.textContent = `Ваш прогресс равен ${progress}%`;
  progressContainer.style.borderColor = "#ce690a";
  progressBar.style.backgroundColor = "#ce690a";
  progressBtn.style.backgroundColor = "#ce690a";
  resetBtn.style.display = "none";
};

const items = [
  "JavaScript",
  "HTML",
  "CSS",
  "React",
  "Vue",
  "Angular",
  "Node.js",
  "TypeScript",
];

const searchInput = document.createElement("input");
const itemsList = document.createElement("ul");
document.body.append(searchInput, itemsList);

searchInput.addEventListener("input", () => {
  const textInput = searchInput.value.toLowerCase();
  const filterText = items.filter((item) =>
    item.toLowerCase().includes(textInput)
  );

  itemsList.textContent = "";

  filterText.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    itemsList.append(li);
  });

  if (textInput === "") {
    itemsList.textContent = "";
  }
  log(filterText);
});

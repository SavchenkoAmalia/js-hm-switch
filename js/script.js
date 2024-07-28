//! 1

// function greetings() {
//     let coffee = document.getElementById("coffee-input").checked;
//     let tea = document.getElementById("tea-input").checked;
//     let juice = document.getElementById("juice-input").checked;
//     let message = '';

//     if (coffee) {
//         message = 'Ви обрали каву';
//     } else if (tea) {
//         message = 'Ви обрали чай';
//     } else if (juice) {
//         message = 'Ви обрали сік';
//     }
//     if (message) {
//         alert(message);
//     } else {
//         alert('Будь ласка, виберіть напій');
//     }
// }

//! 2

// function greetings(){
//     let week = document.getElementById("week-input").value.toLowerCase();
//     let workdays = ["понеділок", "вівторок", "середа", "четвер", "п'ятниця"];
//     let weekends = ["субота", "неділя"];
//     let message = '' ;

//     if (workdays.includes(week)) {
//         message = 'Це робочий день';
//     } else if (weekends.includes(week)) {
//         message = 'Це вихідний';
//     } else {
//         message = 'Будь ласка, введіть день тижня';
//     }

//     alert(message);
// }

//! 3

// function greetings() {
//     let month = parseInt(document.getElementById("month-input").value);
//     let message = '' ;

//     if (month >= 3 && month <= 5) {
//         message = 'Це весна';
//     } else if (month >= 6 && month <= 8) {
//         message = 'Це літо';
//     } else if (month >= 9 && month <= 11) {
//         message = 'Це осінь';
//     } else if (month === 12 || month === 1 || month === 2) {
//         message = 'Це зима';
//     } else {
//         message = 'Будь ласка, введіть номер місяця від 1 до 12';
//     }

//     alert(message);
// }

//! 4

// function greetings() {
//   let month = parseInt(document.getElementById("month-input").value);
//   let message = "";

  
//   if (month >= 1 && month <= 12) {
//     let days = new Date(2024, month, 0).getDate();
//     message = `У цьому місяці ${days} днів`;
//     if (days === 31) {
//         message = 'У цьому місяці 31 день';
//     } else {
//         message = `У цьому місяці ${days} днів`;
//     }
// }
//  else {
//     message = 'Будь ласка, введіть номер місяця від 1 до 12';
// }

//   alert(message);
// }

//! 5

// function greetings() {
//     let color = document.getElementById("color-input").value.toLowerCase();
//     let message = '';

//     switch(color) {
//         case 'червоний':
//             message = 'стоп';
//             break;
//         case 'зелений':
//             message = 'йти';
//             break;
//         case 'жовтий':
//             message = 'чекати';
//             break;
//         default:
//             message = 'Будь ласка, введіть колір (червоний, зелений або жовтий)';
//     }

//     alert(message);
// }

//! 6

function calc() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operation = document.getElementById("operation").value;
    let result2 = document.getElementById("result2").value;
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = alert('Будь ласка, введіть дійсні числа.');
    } else {
        switch(operation) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 === 0) {
                    result = alert('Ділення на нуль неможливе.');
                } else {
                    result = num1 / num2;
                }
                break;
            default:
                result = alert('Будь ласка, виберіть дійсну операцію.');
        }
    }

    document.querySelector("#result2").value = result;
}
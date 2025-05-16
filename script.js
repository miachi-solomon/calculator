let display = document.querySelector('p').textContent;
let numbers = document.querySelectorAll('.numbers');

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let first;
let second;
let operator;


const operate = (operator, a, b) => operator(a, b);

Array.from(numbers).map(number => number.addEventListener('click',(value) => {
    if (document.querySelector('p').textContent == 0){
        document.querySelector('p').textContent = "";
    }
    document.querySelector('p').textContent += value.target.textContent;
}));

// console.log(operate(add, 2, 3))
let display = document.querySelector('p');
let numbers = document.querySelectorAll('.numbers');
let equalSign = document.querySelector('.equal-to');
let operatorSigns = document.querySelectorAll('.operator');
let clearBtn = document.querySelector('.clear');
let percentageBtn = document.querySelector('.percentage-button');

const myDiv = document.querySelector('.display');
let element = document.createElement('p');
element.textContent = '0';
myDiv.appendChild(element);

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    let result = a * b;
    return Math.round(result * 100) / 100;
}

function divide(a, b) {
    let result = a / b;
    return Math.round(result * 100) / 100;
}

function percentage(a) {
    return a / 100;
}

function operate(operator, a, b) {
    return operator(a, b);
}

let first;
let second;
let operator;
let numberWasClicked = false;

function clickNumber(value) {
    Array.from(operatorSigns).map(operatorSign => operatorSign.classList.remove('operator-btn-right-hand-clicked'));
    element.remove();
    display.textContent += value.target.textContent;
    numberWasClicked = true;
}

Array.from(numbers).map(number => number.addEventListener('click', clickNumber));


Array.from(operatorSigns).map(operatorSign => operatorSign.addEventListener('click', () => {
    operatorSign.classList.add('operator-btn-right-hand-clicked');
    operator = operatorSign.textContent;
    first = display.textContent.slice(0);
    console.log(first);
    numberWasClicked = false;

    if(!numberWasClicked) {
        clickNumber();
    }


    switch (operator) {
        case '+':
            operator = add;
            break;
        case '-':
            operator = subtract;
            break;
        case '×':
            operator = multiply;
            break;
        case '/':
            operator = divide;
            break;
    }
}));

equalSign.addEventListener('click', () => {

});

clearBtn.addEventListener('click', () => {
    display.textContent = '';
    element.textContent = '0';
    myDiv.appendChild(element);
});

percentageBtn.addEventListener('click', () => {
    display.textContent = percentage(display.textContent);
});
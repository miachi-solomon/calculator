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
let operatorWasClicked;
let result;

function clickNumber(value) {
    element.remove();
    display.textContent += value.target.textContent;
}

Array.from(numbers).map(number => number.addEventListener('click', clickNumber));


Array.from(operatorSigns).map(operatorSign => operatorSign.addEventListener('click', () => {
    operatorWasClicked = true;
    operatorSign.classList.add('operator-btn-right-hand-clicked');
    operator = operatorSign.textContent;
    first = Number(display.textContent.slice(0));

    if (operatorWasClicked) {
        Array.from(numbers).map(number => number.addEventListener('click', (value) => {
            if (operatorSign.classList.contains('operator-btn-right-hand-clicked')) {
                operatorSign.classList.remove('operator-btn-right-hand-clicked');
                display.textContent = value.target.textContent;
            }
            second = Number(display.textContent.slice(0));
            result = operate(operator, first, second);
        }));

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
    }
}));

equalSign.addEventListener('click', () => {
    if (result != undefined) {
    element.textContent = result;
    display.textContent = '';
    myDiv.appendChild(element);
    } 
    if (result === NaN || result === Infinity) {
        result = 'Lmao';
        element.textContent = result;
        display.textContent = '';
        myDiv.appendChild(element);
    }
});

clearBtn.addEventListener('click', () => {
    result = undefined;
    display.textContent = '';
    element.textContent = '0';
    myDiv.appendChild(element);
    Array.from(operatorSigns).map(operatorSign => operatorSign.classList.remove('operator-btn-right-hand-clicked'));
});

percentageBtn.addEventListener('click', () => {
    display.textContent = percentage(display.textContent);
});
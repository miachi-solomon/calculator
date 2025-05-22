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
    return a / b;
}

function percentage(a) {
    return a / 100;
}


let first;
let second;
let operator;
let sign;

function operate(operator, a, b) {
    return operator(a, b);
}

Array.from(numbers).map(number => number.addEventListener('click',(value) => {
    element.remove();
    display.textContent += value.target.textContent;
    clearBtn.textContent = 'C';
}));

Array.from(operatorSigns).map(operatorSign => operatorSign.addEventListener('click', (value) => {
        sign = operatorSign.textContent;
        operator = operatorSign.textContent;
        display.textContent += value.target.textContent;
        element.remove();
        
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
    let signIndex = display.textContent.indexOf(sign);
    first = Number(display.textContent.slice(0, signIndex));
    second = Number(display.textContent.slice(++signIndex));
    display.textContent = '';
    element.textContent = operate(operator, first, second);
    myDiv.appendChild(element);
});

clearBtn.addEventListener('click', () => {
    display.textContent = '';
    element.textContent = '0';
    myDiv.appendChild(element);
});

percentageBtn.addEventListener('click', () => {
    display.textContent = percentage(display.textContent);
});
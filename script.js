let display = document.querySelector('p');
let numbers = document.querySelectorAll('.numbers');
let equalSign = document.querySelector('.equal-to');
let operatorSigns = document.querySelectorAll('.operator');


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
let sign;

function operate(operator, a, b) {
    return operator(a, b);
}

Array.from(numbers).map(number => number.addEventListener('click',(value) => {
    if (display.textContent == 0){
        display.textContent = "";
    } 
    document.querySelector('p').textContent += value.target.textContent;
}));

Array.from(operatorSigns).map(operatorSign => operatorSign.addEventListener('click', (value) => {
        sign = operatorSign.textContent;
        operator = operatorSign.textContent;
        display.textContent += value.target.textContent;
        
        switch (operator) {
            case '+':
                operator = add;
                break;
            case '-':
                operator = subtract;
                break;
            case 'X':
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
    display.textContent = operate(operator, first, second);
});
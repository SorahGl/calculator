let userInput = '0';
let storedInput = '';
let result = 0;
let operator = '';
let screenResult = false;
const display = document.getElementById('input');
const buttonArr = document.querySelectorAll('button');
display.innerHTML = userInput;

clearFunc = () => {
    userInput = '';
    result = 0;
    display.innerHTML = 0;
    screenResult = false;
};

backspaceFunc = () => {
    if (display.innerHTML === userInput) {
        userInput = userInput.slice(0, -1);
        display.innerHTML = userInput;
    }
    if (display.innerHTML === '') {
        display.innerHTML = 0;
    }
};

equalFunc = () => {
    switch (operator) {
        case '+':
            result = parseInt(storedInput) + parseInt(userInput);
            break;
        case '-':
            result = parseInt(storedInput) - parseInt(userInput);
            break;
        case '*':
            result = parseInt(storedInput) * parseInt(userInput);
            break;
        case '/':
            result = parseInt(storedInput) / parseInt(userInput);
            break;
    }
    display.innerHTML = result;
    userInput = result;
    storedInput = '';
    result = 0;
    operator = '';
    screenResult = true;
};

operatorFunc = (value) => {
    operator = value.innerHTML;
    storedInput = userInput;
    userInput = '';
    screenResult = false;
    console.log(storedInput);
};

numberFunc = (value) => {
    if (screenResult) {
        console.log('srtbrsb');
        userInput = value.innerHTML;
        display.innerHTML = userInput;
        screenResult = false;
    } else {
        
        if (userInput === '0') {
            userInput = '';
        }
        userInput += value.innerHTML;
        display.innerHTML = userInput;
    }
};

   



const calc = (value) => {
    if (value.id === 'clear') {
        clearFunc();
    } else if (value.id === 'backspace') {
        backspaceFunc();
    } else if (value.id === 'equal') {
        equalFunc();
    } else if (value.className === 'operator'){
        operatorFunc(value);
    } else if (value.className === 'number') {
        numberFunc(value);
    }
};

buttonArr.forEach((button) => {
    button.addEventListener('click', calc.bind(this, button));
});
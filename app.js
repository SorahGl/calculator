let userInput = '0';
let storedInput = '0';
let result = '';
let operator = '';
const display = document.getElementById('input');
const buttonArr = document.querySelectorAll('button');
display.innerHTML = userInput;

clearFunc = () => {
    userInput = '0';
    storedInput = '0';
    result = '';
    operator = '';
    display.innerHTML = userInput;
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

calculationFunc = () => {
    let currentResult = '';
    switch (operator) {
        case '+':
            currentResult = parseFloat(storedInput) + parseFloat(userInput);
            break;
        case '-':
            currentResult = parseFloat(storedInput) - parseFloat(userInput);
            break;
        case '*':
            currentResult = parseFloat(storedInput) * parseFloat(userInput);
            break;
        case '/':
            currentResult = parseFloat(storedInput) / parseFloat(userInput);
            break;
    }
    return currentResult;
};

operatorFunc = (value) => {
   if (storedInput == '0') {
       storedInput = userInput;
   }
   else if (result) {
        storedInput = result
        result = '';
   }
   else {
        storedInput = calculationFunc();
   }
   operator = value.innerHTML;
   userInput = ''
};

equalFunc = () => {
    storedInput = calculationFunc();
    result = storedInput;
    display.innerHTML = result;
    userInput = '';
}

numberFunc = (value) => {
    if (result != '') clearFunc() // clear everything first to start the calculation anew
    if (userInput == '0') userInput = value.innerHTML; // to remove the leading zero
    else userInput += value.innerHTML;
    display.innerHTML = userInput;
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

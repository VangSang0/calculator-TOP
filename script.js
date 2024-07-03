'user strict'

function addition(num1, num2) {
    return num1 + num2;
}

function subtraction(num1, num2) {
    return num1 - num2;
}

function multiply(num1 , num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0){
        return 'undefined';
    }
    return num1 / num2;
}

function operation (num1, num2, operator) {
    if (operator === '+'){
        return addition (num1, num2);
    }
    if (operator === '-'){
        return subtraction(num1, num2);
    }
    if (operator === '*'){
        return multiply(num1, num2);
    }
    if (operator === '/'){
        return divide(num1, num2);
    }
}



console.log(operation(4 , 3, '+'));
console.log(operation(4 , 3, '-'));
console.log(operation(4 , 3, '*'));
console.log(operation(4 , 3, '/'));

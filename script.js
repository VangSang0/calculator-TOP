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



function calculatorInputs() {
    const calcBtns = document.querySelectorAll('button');
    const calcDisplay = document.querySelector('.display');

    let calcValue1 = 0;
    let calcValue2 = 0;
    let calcOperation;
    let result = 0;
    let lastInputWasNumber = false;

    calcDisplay.value = 0;

    function resetCalculator() {
        calcValue1 = 0;
        calcValue2 = 0;
        calcOperation = undefined;
        result = 0;
        lastInputWasNumber = false;
        calcDisplay.value = '0';
    }

    calcBtns.forEach(function (btn) {
        btn.addEventListener('click', () => {
            const btnText = btn.textContent;
            if (btnText === 'C') {
                resetCalculator();
            } else if (btnText === '=') {
                const calcDisplayParts = calcDisplay.value.split(' ');
                if (calcDisplayParts.length === 3) {
                    calcValue1 = Number(calcDisplayParts[0]);
                    calcValue2 = Number(calcDisplayParts[2]);
                    calcOperation = calcDisplayParts[1];

                    console.log(calcDisplay.value);
                    result = operation(calcValue1, calcValue2, calcOperation);
                    console.log(result);

                    calcDisplay.value = result;
                } else {
                    calcDisplay.value = 'ERROR';
                    alert('Please enter two numbers and one operation only!!!!');
                    resetCalculator();
                }
            } else if (!isNaN(btnText) || btnText === '.') {
                if (calcDisplay.value === '0' || calcDisplay.value === result.toString()) {
                    calcDisplay.value = '';
                }
                calcDisplay.value += btnText;
                lastInputWasNumber = true;
            }  else {
                calcDisplay.value += ' ' + btnText + ' ';
                lastInputWasNumber = false;
            }
        });
    });
}

function operation(value1, value2, operator) {
    switch (operator) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value2 !== 0 ? value1 / value2 : 'Error';
        default:
            return 'Error';
    }
}



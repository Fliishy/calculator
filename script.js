function add (num1, num2) {
    return num1 + num2;
}

function subtract (num1, num2) {
    return num1 - num2;
}

function multiply (num1, num2) {
    return num1 * num2;
}

function divide (num1, num2) {
    return num1 / num2;
}

function operate (operator, num1, num2) {
    if (operator == "+") {
        return add(num1, num2);
    }
    else if (operator == "-") {
        return subtract(num1, num2);
    }
    else if (operator == "*") {
        return multiply(num1, num2);
    }
    else if (operator == "/") {
        return divide(num1, num2);
    }
    else {
        return "ERROR";
    }
}

let historyValue = document.getElementById("history");
let displayValue = document.getElementById("display");
let firstValue = [];
let num1 = 0;
let operatedValue = 0;
let operator = 0;
let solution = 0;

function buttonClick (clicked_value) {

        if (clicked_value >= 0 || clicked_value <= 9) {
            firstValue.push(clicked_value);
            num1 = firstValue.join('');
            displayValue.innerHTML = num1;
        }

        else if (clicked_value == ".") {
            if (firstValue.includes(".")){
                displayValue.innerHTML = num1;
            }
            else {
                firstValue.push(clicked_value);
                num1 = firstValue.join('');
                displayValue.innerHTML = num1;
            }
        }

        else if (clicked_value == "clear") {
            firstValue = [];
            num1 = 0;
            operatedValue = 0;
            operator = 0;
            displayValue.innerHTML = num1;
            historyValue.innerHTML = "clear";
        }


        //https://stackoverflow.com/questions/72206902/how-to-convert-string-to-math-sign-from-array-in-js
        
        else if (clicked_value == "+") {
            operator = "+";
            firstValue = [] 
            firstValue.push(num1);
            solution = firstValue.reduce((total, operatedValue) => {
                return total + operatedValue;
            });
            console.log(solution);
            operatedValue = solution;
            solution = 0;
            num1 = 0;
            firstValue = [];
            displayValue.innerHTML = operatedValue;
            historyValue.innerHTML = "+";
        }
        

        // else if (clicked_value == "+") {
        //         operator = "+";
        //         operatedValue = parseFloat(num1) + parseFloat(operatedValue);
        //         num1 = 0;
        //         firstValue = [];
        //         displayValue.innerHTML = operatedValue;
        //         historyValue.innerHTML = "+";
        // }

        // else if (clicked_value == "=" && operator == "+") {
        //     operator = "=";
        //     operatedValue = parseFloat(num1) + parseFloat(operatedValue);
        //     num1 = 0;
        //     firstValue = [];
        //     displayValue.innerHTML = operatedValue;
        //     historyValue.innerHTML = "=";
        // }

        // else if (clicked_value == "-") {

        //     if (operatedValue == 0){
        //         operator = "-";
        //         operatedValue = parseFloat(num1);
        //         num1 = 0;
        //         firstValue = [];
        //         displayValue.innerHTML = operatedValue;
        //         historyValue.innerHTML = "-";
        //     }
        //     else {
        //         operator = "-";
        //         operatedValue = parseFloat(operatedValue) - parseFloat(num1);
        //         num1 = 0;
        //         firstValue = [];
        //         displayValue.innerHTML = operatedValue;
        //         historyValue.innerHTML = "-";
        //     }
        // }

        // else if (clicked_value == "=" && operator == "-") {
        //     operator = "=";
        //     operatedValue = parseFloat(operatedValue) - parseFloat(num1);
        //     num1 = 0;
        //     firstValue = [];
        //     displayValue.innerHTML = operatedValue;
        //     historyValue.innerHTML = "-";
        // }
    }

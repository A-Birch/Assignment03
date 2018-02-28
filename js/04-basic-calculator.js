/*eslint-env browser*/

//----------- The Basic Calculator  -----------------

//GLOBAL VARIABLES

function calculate(num1, num2, operation) {
    switch(operation) {
        case "add":
            window.document.write(num1 + " + " + num2 + " = " + (num1+num2));
            break;
        case "subtract":
            window.document.write(num1 + " - " + num2 + " = " + (num1 - num2));
            break;
        case "multiply":
            window.document.write(num1 + " * " + num2 + " = " + (num1*num2));
            break;
        case "divide":
            window.document.write(num1 + " / " + num2 + " = " + (num1/num2));
            break;
        default:
            window.alert("Invalid operation! \nYou should choose one of these: add, subtract, multiply, divide. Try again.");
    }
}

do {
    do {
        var num1 = parseFloat(window.prompt("Enter a first number"));
        var num2 = parseFloat(window.prompt("Enter a second number"));
        if (isNaN(num1) || isNaN(num2)) {
            window.alert("One or both entries are not a number!")
            }
    } while (isNaN(num1) || isNaN(num2));
    var operation = window.prompt("What kind of operation would you like perform (add, subtract, multiply, divide)?"); 
    calculate(num1, num2, operation);
} while (operation !== "add" && operation !== "subtract" && operation !== "multiply" && operation !== "divide")
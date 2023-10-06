let screen = document.getElementById('screen');
let expression = '';

function addnumber(number) {
    expression += number;
    screen.value = expression;
}

function addoperator(operator) {
    expression += operator;
    screen.value = expression;
}

function clearscreen() {
    expression = '';
    screen.value = '';
}

function calculate() {
    try {
        let result = eval(expression);
        screen.value = result;
        expression = result;
    } catch (error) {
        screen.value = 'Error';
    }
}

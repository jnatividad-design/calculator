const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');
const zero = document.getElementById('0');
const addition = document.getElementById('+');
const subtraction = document.getElementById('-');
const multiplication = document.getElementById('*');
const division = document.getElementById('/');
const gui = document.getElementById('gui');
const calcContainer = document.getElementById('calcContainer')

console.log(document.getElementById('gui') !==null)

one.addEventListener(onclick, () => {
document.querySelector('gui')
gui.textContent ="1"
})

//Arithmetic functions
function add(a,b) {
parseFloat(a);
parseFloat(b);
let sum = (a+b)
return sum
}

function subtract(a,b) {
    parseFloat(a);
    parseFloat(b);
    let sub = (a-b)
    return sub
}

function multiply(a,b) {
    parseFloat(a);
    parseFloat(b);
    let product = (a*b)
    return product
}

function divide(a,b){
    parseFloat(a);
    parseFloat(b);
    let sum = (a/b)
    return sum
}

//Operator function
function operate(a,b,operator) {
    switch (operator) {
        case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
};

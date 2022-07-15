
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

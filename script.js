const add = function(a, b) {
    return a + b
      
};
  
const subtract = function(a, b) {
    return a - b
};
  
  
const multiply = function(a, b) {
    return a * b
  
};


const divide = function(a, b) {
    return a / b
  
};



let a = 0;
let b = 0;
let operator = "+" || "-" || "*" ||  "/";



function operate(a, operator, b) {
    a = +prompt("a");
    operator = prompt("operator")
    b = +prompt("b");
    if (operator === "+") {
        console.log(add(a, b))

    }

    if (operator === "-") {
        console.log(subtract(a, b))

    }

    if (operator === "*") {
        console.log(multiply(a, b))

    }

    if (operator === "/") {
        console.log(divide(a, b))

    }
    
}
operate(a, operator, b)




  
  
  
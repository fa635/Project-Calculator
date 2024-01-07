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
    // a = +prompt("a");
    // operator = prompt("operator")
    // b = +prompt("b");
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

// const one = document.querySelector(".one");
// one.addEventListener("click", displayValue);

// const two = document.querySelector(".two");
// two.addEventListener("click", displayValue);

// const three = document.querySelector(".three");
// three.addEventListener("click", displayValue);

// const one = document.querySelector(".one");
// one.addEventListener("click", displayValue);

// const one = document.querySelector(".one");
// one.addEventListener("click", displayValue);

// const one = document.querySelector(".one");
// one.addEventListener("click", displayValue);

// const one = document.querySelector(".one");
// one.addEventListener("click", displayValue);

// const one = document.querySelector(".one");
// one.addEventListener("click", displayValue);

// const one = document.querySelector(".one");
// one.addEventListener("click", displayValue);

// const one = document.querySelector(".one");
// one.addEventListener("click", displayValue);

// const one = document.querySelector(".one");
// one.addEventListener("click", displayValue);

// const one = document.querySelector(".one");
// one.addEventListener("click", displayValue);

// const one = document.querySelector(".one");
// one.addEventListener("click", displayValue);

// const one = document.querySelector(".one");
// one.addEventListener("click", displayValue);

const buttons = document.querySelectorAll("button");

buttons.forEach(button =>{
    button.addEventListener("click", function(){
        displayValue(button.innerHTML)
    });
});


function displayValue(btn) {
    // const buttons = document.querySelectorAll(".one");

    const display = document.querySelector(".display");
    display.textContent = btn;

}

  
  
  
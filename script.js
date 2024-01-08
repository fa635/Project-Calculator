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



let a = " ";
let b = " ";
let operator = " ";



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



const buttons = document.querySelectorAll("button");

buttons.forEach(button =>{
    button.addEventListener("click", function(){
        displayValue(button.innerHTML)
    });
});

let  e = " ";
let array;

function displayValue(btn) {
    // const buttons = document.querySelectorAll(".one");

    const display = document.querySelector(".display");
    


    if (e === " ") {
        e = btn;
        display.textContent = e;
    }
    else {
        e = e + btn;
        display.textContent = e;
    }

    if (e.includes("+")) {
        array = e.split("+")
    }
    else if (e.includes("-")) {
        array = e.split("-")
    }
    else if (e.includes("*")) {
        array = e.split("*")
    }
    else if (e.includes("/")) {
        array = e.split("/")
    }

    if (array !== undefined) {
        a = array[0];
        b = array[1];
    }

    // a = array[0];
    // b = array[1];



    

    // if (a === " ") {
    //     a = btn;
    // }
    // else if (btn !== "+" && btn !== "-" && btn !== "*" && btn !== "/" && operator === " ") {
    //     a = a + btn;

    // }
    // else if (btn === "+" || btn === "-" || btn === "*" || btn === "/") {
    //     operator = btn;
    // }
    // else if (a !== " " && operator !== " " && b === " ") {
    //     b = btn;
    // }
    // else if (b !== " ") {
    //     b = b + btn;
    // }



    

    

    //if (btn === "+" || btn === "-" || btn === "*" || btn === "/")
}

//assign btn to a,b and operator ?

  
  
  
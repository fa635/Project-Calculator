const add = function(a, b) {
    total = a + b;
    return total
};
  
const subtract = function(a, b) {
    total = a - b;
    return total
};
  
  
const multiply = function(a, b) {
    total = a * b;
    return total
  
};


const divide = function(a, b) {
    total = a / b;
    return total
  
};



let a = 0;
let b = 0;
let operator = " ";

let  e = " ";
let array;

let total = 0;







function operate() {
    

    const display = document.querySelector(".display");

    if (e.slice(-1) === "+" || e.slice(-1) === "-" || e.slice(-1) === "*" || e.slice(-1) === "/") {
        e = e.slice(0, -1);


    }

   


    if (e.includes("+")) {
        console.log(add(a, b));
        display.textContent = total;
        e = total;

    }
    else if (e.includes("-")) {
        console.log(subtract(a, b));
        display.textContent = total;
        e = total;

    }
    else if (e.includes("*")) {
        console.log(multiply(a, b));
        display.textContent = total;
        e = total;

    }
    else if (e.includes("/")) {
        console.log(divide(a, b));
        display.textContent = total;
        e = total;

    }
    
}









const buttons = document.querySelectorAll(".parts");

buttons.forEach(button =>{
    button.addEventListener("click", function(){
        displayValue(button.innerHTML)
    });
});



function displayValue(btn) {


    const display = document.querySelector(".display");
    


    if (e === " ") {
        e = btn;
        display.textContent = e;
    }
    else if (e !== " ") {
        e = e + btn;
        display.textContent = e;
    }

    

    if (e.slice(-1) === "+" || e.slice(-1) === "-" || e.slice(-1) === "*" || e.slice(-1) === "/") {

        
        if (a !== 0 && b !== 0) {

            if (total === 0) {
                operate();
                e = total + btn;
                display.textContent = e;
            }
            else if (a === total) {
                operate();
                e = total + btn;
                display.textContent = e;
            }
            

  
        }
        
    }

    

    
    if (e.includes("+")) {
        array = e.split(/\+(.*)/s);
        a = +array[0];
        b = +array[1];
    }
    else if (e.includes("-")) {
        array = e.split(/-(.*)/s);
        a = +array[0];
        b = +array[1];
    }
    else if (e.includes("*")) {
        array = e.split(/\*(.*)/s);
        a = +array[0];
        b = +array[1];
    }
    else if (e.includes("/")) {
        array = e.split(/\/(.*)/s)
        a = +array[0];
        b = +array[1];
    }

    
    

    


    if (e.slice(-1) === "+" || e.slice(-1) === "-" || e.slice(-1) === "*" || e.slice(-1) === "/") {

        if (array[1].includes("+") || array[1].includes("-") || array[1].includes("*") || array[1].includes("/")) {

            b = +array[1].slice(0, -1);

            operate();

            e = total + btn;
            display.textContent = e;
    
        }
    }

    
}



  

const equal = document.querySelector(".equal");
equal.addEventListener("click", operate);


const clear = document.querySelector(".clear");
clear.addEventListener("click", wipeScreen);

function wipeScreen() {

    const display = document.querySelector(".display");

    e = " ";
    display.textContent = e;
    
}


  
  
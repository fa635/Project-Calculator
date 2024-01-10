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

//let clicked = false;





function operate() {
    // a = +prompt("a");
    // operator = prompt("operator")
    // b = +prompt("b");

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
operate(a, operator, b)








const buttons = document.querySelectorAll(".parts");

buttons.forEach(button =>{
    button.addEventListener("click", function(){
        displayValue(button.innerHTML)
    });
});



function displayValue(btn) {
    // const buttons = document.querySelectorAll(".one");

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
            // else if (array[1] !== "" && b === +array[1]) {
            //     operate();
            //     e = total + btn;
            //     display.textContent = e;
            // }




            // if  eaary 1 is not "" and b === array 1
            
            //a !== 0 && b !== 0

            //if the avant dernier of e is equal to b
            //+e.slice(-2, -1) === array[1]

            //e.split(/(+|-|/|*)/ a === e.split(/(+|-|/|*)/[0] && b === e.split(/(+|-|/|*)/[1])
            // 

            
            
        }
        // else if (clicked === true) {
        //     e = e;
        //     display.textContent = e;
        // }

    }

    //fix the equal thing where the total part gets calculated into the e. Think what s the difference between them a their respective stages and place a if statement
    
    // if (a === e.split(/[+-\/*]+/)[0]) {
    //     operate();
    //     e = total + btn;t 
    //     display.textContent = e;
    // }


    // && b === e.split(/[+-\/*]+/)[1].slice(-1)

    // if (e !== " ") {
    //     e = e + btn;
    //     display.textContent = e;
    // }

    // if (total !== 0) {
    //     if (a !== 0 && b !== 0) {
    //     operate();
    //     e = total + e.slice(-1);
    //     }
    // }

    
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



    



    // i need a way to make it execute the operation as soon as it has two values so that solution can be reassigned to a or array[0]

    // if (array !== undefined) {
    //     a = +array[0];
    //     b = +array[1];
    // }

    // if (e.includes("+") && e.includes("-")) {
    //     a = a + b
    // }

    

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

  

const equal = document.querySelector(".equal");
equal.addEventListener("click", function() {
    operate();
    // clicked = true;
});


const clear = document.querySelector(".clear");
clear.addEventListener("click", wipeScreen);

function wipeScreen() {

    const display = document.querySelector(".display");

    e = " ";
    display.textContent = e;
    
}


  
  
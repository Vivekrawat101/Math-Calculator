const display = document.querySelector("#display");


//---------------------UI-------------------------------//
let buttonArray = document.querySelectorAll(".button");
// for digit buttons UI function
for(let i = 0 ; i < buttonArray.length ; i++){
    const id = buttonArray[i].id;
    const button = document.querySelector(`#${id}`);    
    trigger(button);
}trigger(plus);trigger(minus);trigger(multiply);trigger(divide);trigger(mod);

function trigger(key){
    key.addEventListener("click" , () =>
    display.value == "0" ? display.value = key.innerText 
    : display.value += (key.innerText))}
//--------------------------UI-------------------------//

//---------------------backend-operations--------------//
 

const calculate = document.querySelector("#equals");
calculate.addEventListener("click" , () => {
     try {   
    display.value = parseInt(eval(display.value));
       }
     catch(e){ alert(`${e.message.toUpperCase()} 
 PRESS RESET BUTTON AND TRY A VALID CALCULATION`)}});

 //reset event handler  
const reset = document.querySelector("#reset");
reset.addEventListener("click" , () => display.value = 0);

//---------------Backend-operations----------------------//



























// universal function for everyButton UI display
// const add =  (previousValue , newValue) =>
//     previousValue == "0" ? display.value = newValue : 
//     display.value = (previousValue + (newValue));


// // for operation buttons UI function

// let operationArray = document.querySelectorAll(".operation");
// for(let o = 0; o < operationArray.length ; o++){
//     const opId = operationArray[o].id;
//     const opTrigger = document.querySelector(`#${opId}`);
//     opTrigger.addEventListener("click",(e)=> 
//      add((display.value) , "+"));
//     // stringify(display.value, toString(opTrigger.innerText)));
// }






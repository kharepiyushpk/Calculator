const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = ""; 
}

function calculate(input){
    try{
    display.value = eval(display.value);
    }
    catch{
        display.value = "error";
    }
}

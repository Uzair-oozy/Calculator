const display = document.getElementById("display");

function writeToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";

}

function calculate() {
    display.value = eval(display.value); //Saw this built in eval function from MDN
}


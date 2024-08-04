const Display = document.getElementById('display');
const Calculator = document.getElementById("calculator");
const ShowHideBtn = document.getElementById("showHideBtn");
const keys = document.getElementById('keys');

ShowHideBtn.addEventListener("click", function(){
    if (Calculator.style.display === "none"){
        Calculator.style.display = "block";
        ShowHideBtn.style.filter = "brightness(0) saturate(100%) invert(11%) sepia(82%) saturate(5383%) hue-rotate(359deg) brightness(101%) contrast(112%)";
        clearDisplay();
    }else{
        Calculator.style.display = "none";
        ShowHideBtn.style.filter = "brightness(0) saturate(100%) invert(41%) sepia(82%) saturate(2077%) hue-rotate(90deg) brightness(97%) contrast(107%)";
    }
})

function addToDisplay(value) {
    Display.value += value;
}

function clearDisplay() {
    Display.value = '';
}

function calculate() {
    try {
        const result = eval(Display.value);
        Display.value = result;
    } catch (error) {
        Display.value = 'Error';
    }
}

function calculatePercentage() {
    try {
        const currentValue = parseFloat(Display.value);
        const percentageValue = currentValue / 100;

        Display.value = percentageValue;
    } catch (error) {
        Display.value = 'Error';
    }
}

function clearNumber(){
    let exp = Display.value;
    if(exp[exp.length -1] === "." || isNaN(parseInt())){
        Display.value= Display.value.slice(0, -1);
    }
}

keys.querySelector('.operator[onclick="addToDisplay(\'%\')"]').addEventListener('click', calculatePercentage);

document.addEventListener('keydown', function (event) {
    const key = event.key;
    switch (key) {
        case 'Enter':
            calculate();
            break;
        case 'Enter':
            clearDisplay();
            break;
        case '+':
        case '-':
        case '*':
        case '/':
            addToDisplay(key);
            break;
        case '%':
            calculatePercentage();
            break;
        default:
            
        if (!isNaN(key) || key === '.') {
                addToDisplay(key);
            }
    }
});

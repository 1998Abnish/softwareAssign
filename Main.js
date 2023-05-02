const inputValue = document.getElementById("input-value");
const maxValue = document.getElementById("max-value");
const graphFill = document.querySelector(".graph-fill");

inputValue.addEventListener("change", updateGraph);
maxValue.addEventListener("change", updateGraph);

function updateGraph() {

    const inputVal = parseInt(inputValue.value);
    const maxVal = parseInt(maxValue.value);

    if(inputVal > maxVal){

        alert("Input value cannot be greater than Max Value!");

        return;

    }

    const fillPercent = inputVal / maxVal * 100;
    graphFill.style.height = '${fillPercent}%';
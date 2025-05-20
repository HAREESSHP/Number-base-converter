
function convertNumber() {
    const inputNumber = document.getElementById('inputNumber').value;
    const baseFrom = document.getElementById('baseFrom').value;
    const baseTo = document.getElementById('baseTo').value;

    let decimalValue;

    // Convert the input number to decimal (base 10)
    if (baseFrom === "10") {
        decimalValue = parseInt(inputNumber, 10);
    } else if (baseFrom === "2") {
        decimalValue = parseInt(inputNumber, 2);
    } else if (baseFrom === "16") {
        decimalValue = parseInt(inputNumber, 16);
    }

    // Convert the decimal value to the desired base
    let result = "";
    if (baseTo === "10") {
        result = decimalValue.toString(10);
    } else if (baseTo === "2") {
        result = decimalValue.toString(2);
    } else if (baseTo === "16") {
        result = decimalValue.toString(16).toUpperCase();
    }

    document.getElementById('result').innerText = result;
}

function calculate(operation) {
    const num1Element = document.getElementById('num1');
    const num2Element = document.getElementById('num2');
    const num1 = num1Element.value.trim();
    const num2 = num2Element.value.trim();
    const resultElement = document.getElementById('result');
    const operatorElement = document.getElementById('operator');

    if (num1 === '' || num2 === '') {
        resultElement.innerHTML = 'Result: Error - Both numbers are required';
        return;
    }

    let result;
    if (operation === "+") {
        result = parseFloat(num1) + parseFloat(num2);
        operatorElement.innerHTML = '+';
    } else if (operation === "-") {
        result = parseFloat(num1) - parseFloat(num2);
        operatorElement.innerHTML = '-';
    }

    resultElement.innerHTML = `Result: ${result}`;
}

function resetFields() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('result').innerHTML = 'Result:';
    document.getElementById('operator').innerHTML = '+';
}

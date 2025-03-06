function calculate(operation) {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

    if (num1 === '' || num2 === '') {
        alert("Please enter both numbers.");
        return;
    }

    let result;
    if (operation === "+") {
        result = parseFloat(num1) + parseFloat(num2);
        document.getElementById('operator').innerHTML = '+';
    } else if (operation === "-") {
        result = parseFloat(num1) - parseFloat(num2);
        document.getElementById('operator').innerHTML = '-';
    }

    document.getElementById('result').innerHTML = `Result: ${result}`;
}

function resetFields() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('result').innerHTML = 'Result:';
    document.getElementById('operator').innerHTML = '+';
}

function calculate(operation) {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

    if (num1 === '' || num2 === '') {
        alert("Please enter both numbers.");
        return;
    }

    let endpoint;
    if (operation === "+") {
        endpoint = "http://localhost:8080/math/add";
        document.getElementById('operator').innerHTML = '+';
    } else if (operation === "-") {
        endpoint = "http://localhost:8080/math/subtract";
        document.getElementById('operator').innerHTML = '-';
    }

    fetch(`${endpoint}?num1=${num1}&num2=${num2}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('result').innerHTML = `Result: ${data.result}`;
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Failed to fetch the result.");
        });
}

function resetFields() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('result').innerHTML = 'Result:';
    document.getElementById('operator').innerHTML = '+';
}

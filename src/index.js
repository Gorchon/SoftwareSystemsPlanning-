function calculate() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

    let result; 
    result = parseInt(num1) + parseInt(num2);

    document.getElementById('result').innerHTML = result;

    return false;


}

function resetFields() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('result').innerHTML = '';
}

    
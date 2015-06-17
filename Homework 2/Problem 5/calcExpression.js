function calculate() {
    var input = document.getElementById('input').value;
    var result = eval(input);
    document.getElementById('result').innerHTML = result;
}
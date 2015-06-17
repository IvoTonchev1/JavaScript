function calcQuad() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;
    var rootOne = (-b + ((Math.sqrt(b * b - (4 * a * c))))) / (2 * a);
    var rootTwo = (-b - ((Math.sqrt(b * b - (4 * a * c))))) / (2 * a);
    if (rootOne == rootTwo) {
        document.write("x = " + rootOne);
    }
    else if (isNaN(rootOne) || isNaN(rootTwo)) {
        document.write("No real roots")
    }
    else {
        document.write("x1 = " + rootOne + "<br>" + " x2 = " + rootTwo);
    }
}
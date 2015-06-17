function calcCircleArea(r) {
    var area = Math.PI * r * r;
    document.getElementById("area").innerHTML += "r = " + r + "; area = " + area + "<br>";
}
calcCircleArea(7);
calcCircleArea(1.5);
calcCircleArea(20);
function calcCylinderVol(arr) {
    var volume = Math.PI * Math.pow(arr[0], 2) * arr[1];
    console.log(volume.toFixed(3));
}
calcCylinderVol([2, 4]);
calcCylinderVol([5, 8]);
calcCylinderVol([12, 3]);
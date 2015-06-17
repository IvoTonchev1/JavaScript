Array.prototype.removeItem = function (value) {
    for (i = 0; i < this.length; i++) {
        if (this[i] === value) {
            this.splice(i, 1);
        }
    }
}

var arrOne = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];
arrOne.removeItem(1);
console.log(arrOne);

var arrTwo = ['hi', 'bye', 'hello'];
arrTwo.removeItem('bye');
console.log(arrTwo);

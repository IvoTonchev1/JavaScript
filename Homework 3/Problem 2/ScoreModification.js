function scoreMod(arr) {
    var result = arr.filter(function(x) {
        if (x >= 0 && x <= 400) {
            return x;
        }
    })

    function scaledown() {
        for (var i = 0; i < result.length; i++) {
            result[i] = result[i] - ((20.0 / 100) * result[i]);
        }
        result.sort(function (x, y) {
            return x > y;
        })
        console.log(result)
    }
    scaledown();
}

scoreMod([200, 120, 23, 67, 350, 420, 170, 212, 401, 615, -1]);
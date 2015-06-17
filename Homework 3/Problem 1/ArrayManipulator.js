function arrMan(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i])) {
            result.push(arr[i]);
        }
    }

    var counts = {}, max = 0, res;
    for (var v in result) {
        counts[result[v]] = (counts[result[v]] || 0) + 1;
        if (counts[result[v]] > max) {
            max = counts[result[v]];
            res = result[v];
        }
    }

    result.sort(function (a, b) {
        return a > b;
    });

    var min = result[0];
    var max = result[result.length - 1];

    console.log("Min number: " + min);
    console.log("Max number: " + max);
    console.log("Most frequent number: " + res);
    console.log(result.reverse());
}

arrMan(["Pesho", 2, "Gosho", 12, 2, "true", 9, undefined, 0, "Penka", { bunniesCount: 10 }, [10, 20, 30, 40]]);
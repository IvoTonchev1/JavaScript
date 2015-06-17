function sortLetters(str, bool) {
    var temp = [];
    for (var i = 0; i < str.length; i++) {
        temp.push(str[i]);
    }
    if (bool) {
        temp.sort(function (a, b) {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        });
    }
    else {
        temp.sort(function (a, b) {
            return b.toLowerCase().localeCompare(a.toLowerCase());
        });
    }
    console.log(temp);
}
sortLetters('HelloWorld', true);
sortLetters('HelloWorld', false);
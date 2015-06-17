function solver (input) {
    var students = JSON.parse(input);
    for (var key in students) {
        students[key].score =  Math.round( students[key].score * 1.1 * 10) / 10;
        if (students[key].score >= 100) {
            students[key].hasPassed = true;
        } else {
            students[key].hasPassed = false;
        }
    }

    students = students.filter(function(el) {
       if (el.hasPassed === true) {
           return true;
       }
    });

    students.sort(function(x ,y) {
       return x.name > y.name;
    });

    console.log(students);
}

var input = '[{"name" : "Пешо","score" : 91},{"name" : "Лилия","score" : 290},{"name" : "Алекс","score" : 343},{"name" : "Габриела","score" : 400},{"name" : "Жичка","score" : 70}]';
solver(input);
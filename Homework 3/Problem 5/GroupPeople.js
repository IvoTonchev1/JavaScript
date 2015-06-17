function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

function groupBy(criteria) {
    var people = [];
    people[0] = new Person('Scott', 'Guthrie', 38);
    people[1] = new Person('Scott', 'Johns', 36);
    people[2] = new Person('Scott', 'Hanselman', 39);
    people[3] = new Person('Jesse', 'Liberty', 57);
    people[4] = new Person('Jon', 'Skeet', 38);

    if (criteria === 'firstName') {
        var group = {};
        people.forEach(function (element) {
            var key = 'Group ' + element.firstName;
            if (!(key in group)) {
                group[key] = [];
                group[key].push('' + element.firstName + ' ' + element.lastName + '(age' + element.age + ')');
            }
            else {
                group[key].push('' + element.firstName + ' ' + element.lastName + '(age' + element.age + ')');
            }
        });
        return group;
    }
    else if (criteria === 'lastName') {
        var group = {};
        people.forEach(function (element) {
            var key = 'Group ' + element.lastName;
            if (!(key in group)) {
                group[key] = [];
                group[key].push('' + element.firstName + ' ' + element.lastName + '(age' + element.age + ')');
            }
            else {
                group[key].push('' + element.firstName + ' ' + element.lastName + '(age' + element.age + ')');
            }
        });
        return group;
    }
    if (criteria === 'age') {
        var group = {};
        people.forEach(function (element) {
            var key = 'Group ' + element.age;
            if (!(key in group)) {
                group[key] = [];
                group[key].push('' + element.firstName + ' ' + element.lastName + '(age' + element.age + ')');
            }
            else {
                group[key].push('' + element.firstName + ' ' + element.lastName + '(age' + element.age + ')');
            }
        });
        return group;
    }
}

console.log(JSON.stringify(groupBy('firstName')) + "\n");
console.log(JSON.stringify(groupBy('lastName')) + "\n");
console.log(JSON.stringify(groupBy('age')) + "\n");
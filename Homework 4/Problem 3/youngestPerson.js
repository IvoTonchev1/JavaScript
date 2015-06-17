function findYoungestPerson(arr) {
    var youngest = 1000;
    var result = "someone";
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].hasSmartphone) {
            if (arr[i].age < youngest) {
                youngest = arr[i].age;
                result = arr[i].firstname + " " + arr[i].lastname;
            }
        }
    }
    console.log("The youngest person is " + result);
}
findYoungestPerson([
    { firstname: 'George', lastname: 'Kolev', age: 32, hasSmartphone: false },
    { firstname: 'Vasil', lastname: 'Kovachev', age: 40, hasSmartphone: true },
    { firstname: 'Bay', lastname: 'Ivan', age: 81, hasSmartphone: true },
    { firstname: 'Baba', lastname: 'Ginka', age: 40, hasSmartphone: false }]
);
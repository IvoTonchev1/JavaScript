function extractObjects(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'object' && !Array.isArray(arr[i])) {
            result.push(arr[i]);
        }
    }
    console.log(result);
}
extractObjects([
    "Pesho",
    4,
    4.21,
    { name: 'Valyo', age: 16 },
    { type: 'fish', model: 'zlatna ribka' },
    [1, 2, 3],
    "Gosho",
    { name: 'Penka', height: 1.65 }
]
);
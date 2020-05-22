// Object fromentries method in ES6

var obj = {
    x: 10,
    y: 20
}

console.log(Object.entries(obj))

// Reverse...

var objArr = [
    ['x', 10],
    ['y', 20]
]

console.log(Object.fromEntries(objArr))
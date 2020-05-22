// Access object properties ...

// We can access object properties using two method.
// 1. Dot Notation.
// 2. Array Notation.

var obj = {
    x: 10,
    y: 20
}

// access object properties using dot notaion.
console.log(obj.x)

// access object properties using array notaion.
console.log(obj['x'])

var str = 'y'
console.log(obj[str])

// add new properties ('z') in obj object. 
obj['z'] = 30
console.log(obj)


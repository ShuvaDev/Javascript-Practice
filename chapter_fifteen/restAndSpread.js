// Rest and spread operator...

// When we use that's(...) operator function parameter then we call it rest 
// otherwise we call it spread operator.

// function sum(...rest){
//     // This is an array...
//     console.log(rest)
//     return rest.reduce((a, b) => a + b)
// }

// console.log(sum(1, 2, 3, 4, 5))

// Spread operator...
let arr = [1, 2, 3, 4, 5]
console.log(...arr)

var obj = {
    x: 10,
    y: 20
}

var obj2 = {
    ...obj
}
console.log(obj2)
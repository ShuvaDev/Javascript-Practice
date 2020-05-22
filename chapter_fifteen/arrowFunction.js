// Arrow Function syntax

var add = (a, b) => {
    return a + b
}
console.log(add(5,5))

// If we have one statement in body we can escape bracket and return keyword.
let add1 = (a, b, c) => a + b + c
console.log(add1(5, 5, 5))

// If we have only one argument then we can escape parethesis.
let sqr = x => x * x
console.log(sqr(5))

// Callback function implement using arrow function. 
let func = cb => cb(5)

func( x => console.log(`I am shuva ${x}`))


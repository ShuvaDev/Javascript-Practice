
var ara = [1, 2, 3, 4, 5]

console.log(ara.join(', '))

var ara2 = ara;

// It change ara[0] index value..
ara2[0] = 10
//console.log(ara)

// If we from method then it duplicate give array..
var ara3 = Array.from(ara)
ara3[0] = 1
console.log(ara3)

console.log(Array.isArray(ara))
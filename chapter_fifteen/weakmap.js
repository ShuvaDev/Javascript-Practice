let map = new Map([
    ['a', 10],
    ['b', 20]
])
a = null
console.log(map.has('a'))


let x = {a: 10}, y = {b: 20}
let weakMap = new WeakMap([
    [x, 20],
    [y, 30]
])
x = null
console.log(weakMap.has(x))
console.log(weakMap.has(y))
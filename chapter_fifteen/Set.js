// Check a object is iterable or not...
function isIterable(obj){
    return typeof obj[Symbol.iterator] === 'function'
}

// let set = new Set([1, 2, 3, 4])
// console.log(set)

// -> We can't duplicate value in set...
let s2 = new Set([1, 2, 3])

s2.add(4)
s2.add(5)
s2.add(2)
s2.add(3)

// console.log(s2)
// console.log(s2.size)

// s2.clear()
s2.delete(5)

//console.log(s2.has(4))

let iterate = s2[Symbol.iterator]()
console.log(iterate.next())
console.log(iterate.next())

for(let v of s2){
    console.log(v)
}
console.log(isIterable(iterate))
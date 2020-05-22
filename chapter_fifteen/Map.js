// Map in ES6

let map = new Map([
    ['a', 10],
    ['b', 20]
])

map.set('c', 20)
map.set('c', 40)
// console.log(map)
map.delete('c')
console.log(map)

console.log(map.has('c'))

console.log(map.get('a'))

console.log(map.size)

// -> We can set object or boolean or array as a key. It is power of map.
map.set({x: 10, y: 20}, 30)

for(let [k, v] of map){
    console.log(k, v)
}

let iterate = map[Symbol.iterator]()

console.log(iterate.next())

// let obj = {
//     start: 1,
//     end: 3,
//     [Symbol.iterator]: function* (){
//         let currentValue = this.start
//         while(currentValue <= this.end){
//             yield currentValue++
//         }
//     }
// }
// let iterate = obj[Symbol.iterator]()
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())

// function* generate(){
//     yield 1
//     yield 5
//     yield 10
// }
// let it = generate()
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

let arr = [1, 2, 3]
function* generate(collection){
    for(let i = 0; i < collection.length; i++){
        yield collection[i]
    }
}
let it = generate(arr)
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())

let arr = [1, 2, 3]

// function createIterator(collection){
//     let i = 0
//     return {
//         next(){
//             return {
//                 done: i >= collection.length,
//                 value: collection[i++]
//             }
//         }
//     }
// }

// let iterate = createIterator(arr)

// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())

// let iterate = arr[Symbol.iterator]()
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())

let str = 'TEXT'

let iterateText = str[Symbol.iterator]()

console.log(iterateText.next())
console.log(iterateText.next())
console.log(iterateText.next())
console.log(iterateText.next())

//-> If an object have Symbol.iterator object then we can iterate that object
//   and we can use for of loop.
for(let val of arr){
    console.log(val)
}

// Create custom iterable object. 
let obj = {
    start: 1,
    end: 3,
    [Symbol.iterator]: function(){
        let currentValue = this.start
        let self =  this
        return {
            next(){
                return {
                    done:  currentValue > self.end,
                    value: currentValue <= self.end ? currentValue++ : undefined
                }
            }
        }
    }
}
let iterate = obj[Symbol.iterator]()

console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())

for(let v of obj){
    console.log(v)
}
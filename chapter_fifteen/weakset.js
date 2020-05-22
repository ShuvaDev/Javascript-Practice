// let obj1 = {
//     a: 10
// }
// let obj2 = {
//     b: 20
// }

// let s1 = new Set([obj1, obj2])
// // When we use null in an object it clear all reference where we are obj1 use.
// // But it is not occur in set. For this problem we can use weakset method.
// obj1 = null

// let arr = [...s1]
// console.log(arr[0].a)

// -> In weakset we can only put object. It can able memory leak because of null initialization.
let obj1 = {
    a: 10
}
let obj2 = {
    b: 20
}
let weakSet = new WeakSet([obj1, obj2])
// console.log(weakSet)
obj1 = null
console.log(weakSet.has(obj1))
console.log(weakSet.has(obj2))
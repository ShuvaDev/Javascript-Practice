// Functionalities comes with promise

// let delay = function (s) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, s)
//     })
// }

// delay(2).then(() => console.log('2 seconds delay'))
// delay(5).then(() => console.log('5 seconds delay'))
// delay(3).then(() => console.log('3 seconds delay'))
// delay(2).then(() => console.log('2 seconds delay'))


// // -> If we want to create a promise and resolve it instantly then,
// let p1 = Promise.resolve('RESOLVED')
// // console.log(p1)

// p1.then((v) => {
//     console.log(v)
// })

// // -> If we want to create a promise and reject it instantly then,
// let p2 = Promise.reject("REJECTED")

// p2.catch((e) => {
//     console.log(e)
// })


// Promise.all

// let p1 = Promise.resolve('ONE')
// let p2 = Promise.resolve('TWO')
// let p3 = Promise.resolve('THREE')

// -> Here, after all promise resolve it create output...
// Promise.all([p1, p2, p3])
//     .then((arr) => {
//         console.log(arr)
//     })

let p1 = new Promise((resolve) => {
    setTimeout(resolve, 3000, 'ONE')
})
let p2 = new Promise((resolve) => {
    setTimeout(resolve, 2000, 'TWO')
})
let p3 = new Promise((resolve) => {
    setTimeout(resolve, 4000, 'THREE')
})

Promise.all([p1, p3, p2])
    .then((arr) => {
        console.log(arr)
    })
// Async Function with Await Keyword

// -> If we want to make a function which return a promise, then we can do-
// function myPromise() {
//     return new Promise((resolve, reject) => {

//     })
// }

// console.log(myPromise())

// -> We can do upper code easily using async function...

// async function myPromise() {
//     return 'Text'
// }
// myPromise().then((v) => {
//     console.log(v)
// })
// console.log(myPromise())

// let p1 = new Promise(resolve => {
//     setTimeout(resolve,3000,'RESOLVED')
// })

// function myAsynFunc () {
//     p1.then((v) => console.log(v))
// }

// myAsynFunc()

// async function myAsynFunc() {
//     let p = await p1
//     console.log(p)
// }

// myAsynFunc()

// async function fetchData () {
//     let p = await fetch('https://json.placeholder.typicode.com/users')
//     let data = await p.json()

//     console.log(data)
// }


let promiseArr = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]

async function promiseAll () {
    let p = await Promise.all(promiseArr)
    console.log(p)
}

promiseAll()
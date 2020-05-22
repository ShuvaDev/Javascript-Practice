// let p1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 3000,'ONE')
// })

// let p2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 4000, 'TWO')
// })

// p1.then((v) => {
//     console.log(v)
// }).catch((e) => {
//     console.log(e)
// })

// p2.then((v) => {
//     console.log(v)
// }).catch((e) => {
//     console.log(e)
// })
// // console.log(p1)
// // console.log(p2)


// Example
function getIphone(isPassed) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(isPassed){
                resolve('You got iPhone!')
            } else{
                reject('You are failed!')
            }
        },3000)
    })
}

getIphone(false)
    .then((v) => {
        console.log(v)
    })
    .catch((e) => {
        console.log(e)
    })
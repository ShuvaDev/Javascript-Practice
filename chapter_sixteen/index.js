// Hare krishna

// let a = 10

// if(a > 5){
//     throw new Error('10 is greater than 5')
// }

// let b = 20

// if(b > 10){
//     throw new RangeError('20 is greater than 10')
// }

// function createInt(n){
//     let result = Number.parseInt(n)
//     if(!result){
//         return 'Please provide a valid value which able to convert integer'
//     }
//     return result
// }

// let result = createInt('fs343')
// console.log(result)

// function createWord(text) {
//     let str = text.trim()
//     let words = str.split(' ')

//     return words
// }
// let words = createWord(12)
// console.log(words)

// function createWord(text){
//     try{
//         let str = text.trim()
//         let words = str.split()

//         return words
//     }catch(e){
//         // console.log(e)
//         console.log(e.message)
//     }
// }

// let words = createWord(12)
// console.log(words)


// try {
//     console.log('I am line 1')
//     throw new Error('I am error!')
//     console.log('I am line 2')
//     console.log('I am line 3')
// }catch(e){
//     console.log(e)
// }finally{
//     console.log('I am finally block!')
// }


// try {
//     console.log('I am line 1')
//     throw new Error('I am error!')
//     console.log('I am line 2')
//     console.log('I am line 3')
// }catch{
//     // In next generation JS we can escape catch parameter...
//     console.log('This is a custom error!')
// }finally{
//     console.log('I am finally block!')
// }

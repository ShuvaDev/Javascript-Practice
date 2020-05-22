// ES6 Feature...
// Template String

// var str = `I am 
//     template
// String.
// `
// console.log(str)


var name = 'S.R. Shuva Dev'

var age = 17

console.log('My name is ' + name + ' and my age is ' + age)
console.log(`My name is ${name} and my age is ${age}. I am ${age < 18 ?
`not ` : ''}adult`)

console.log(name.padStart(20, '*'))
console.log(name.padEnd(29,'v'))
console.log('*'.repeat(6))
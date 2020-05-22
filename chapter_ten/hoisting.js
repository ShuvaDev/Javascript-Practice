/* Hoisting means they are avialable before execution. */

// var a = 100
// newPrint(a)

// print(10)

// var newPrint = print
// newPrint(19)

// function print(a){
//     console.log(a)
// }
// print(a)

// // Creational Phase - 
// // a = undefined
// // newPrint = undefined
// // print = ref

// // Executional phase
// // a = 100
// // call newPrint function and occurs an error. 
// // call print function.
// // newPrint = ref of print function
// // call print function.

a()
var a = function(){
    console.log('I am a function!')
}
// newPrint() // It is ture. 
function newPrint(){
    console.log('I am a newPrint function!')
}
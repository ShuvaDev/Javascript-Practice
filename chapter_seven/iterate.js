
// Travese full object using for in loop

var obj = {
    x: 10,
    y: 20,
    z: 30
}
// console.log('x' in obj) // It return true because in obj object x property are avaiable
// console.log('p' in obj) // false

for(var i in obj){
    console.log(i + ': ' + obj[i])
}
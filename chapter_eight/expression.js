// Function expression..

// This function called anonymous function. Because this function has no name.
var fun = function(a,b){
    return a + b
}
console.log(fun(10,20))

var another = fun
console.log(another(100,20))

setTimeout(function(){
    console.log('I will called after 2 second.')
},2000)

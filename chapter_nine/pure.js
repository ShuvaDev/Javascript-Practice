// What is pure function?

// * It return the same result if given the same argument.
// * It does not cause any observable side effect.

function sqr(n){
    return n*n
}
// It return always same result.
console.log(sqr(3))
console.log(sqr(3))
console.log(sqr(3))


// change and fun is not pure function becuase it change the value of n. That's mean it create side effect.
var n = 10
function change()
{
    n = 100
}
change()
console.log(n)
//
var obj = {
    x: 10,
    y: 20
}
function fun(obj){
    obj.x = 100
}
fun(obj)
console.log(obj)
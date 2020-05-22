// Higher Order Function...

// 1. We can pass function as argument.
// 2. We can return function from another function.

function add(a, b)
{
    return a+b
}
function cal(a, b, func)
{
    var c = a + b
    var d = a - b
    // function multiply()
    // {
    //     console.log(c*d*func(a, b))
    // }
    // return multiply
    return function()
    {
        console.log(c*d*func(a, b))
    }
}
var multiply = cal(3, 4, add)
multiply()
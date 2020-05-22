// First look at closure.

// When a data comes one scope to another scope without argument then that's
// scope we can call it closure. 
var a = 10

function fun(){
    // This soope we can call closure. Becuase here global scope variable(a)
    // we are using function fun scope. 
    console.log(a)
}

// Run another function in browser and see scope section in console.
function another()
{
    var x = 10
    return function()
    {
        console.log(x)
    }
}
var result = another()
console.dir(result)
function fun(c, d){
    // Here this console.log print window object. 
    // If we don't want this or if we want this reffer another object
    // then we can use call, apply and bind method.
    console.log(this) 
    console.log(this.a + this.b + c +d)
}

// call and apply method instantly call function.
fun.call({a: 10, b: 20}, 10, 20)

fun.apply({a: 20, b: 30}, [5, 8])

// But bind method don't call function instalntly.

var f1 = fun.bind({a: 5, b: 8})
f1(10, 20)
// or
var f2 = fun.bind({a: 5, b: 8}, 5, 8)
f1(10, 20)

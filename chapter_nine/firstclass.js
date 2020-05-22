// First Class Function
function add(a, b){
    console.log(a + b)
}

// 1. A function can be store in a variable.
var sum = add
sum(5, 2)

// 2. A function can be store in an array.
var arr = []
arr.push(add)
console.log(arr)
arr[0](5, 5)

// 3. A function can be store in an object.
var obj = {
    sum: add
}
obj.sum()

// 4. We can create function as need.
setTimeout(function(){
    console.log('Hello World!')
},3000)

// 5. We can pass function as argument.
// 6. We can return function from another function.


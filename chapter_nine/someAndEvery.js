var arr = [1, 2, 3, 4]

var result = arr.every(function(value){
    // every element are even number then it return true..
    return value % 2 === 0
})

console.log(result)

var result = arr.some(function(value){
    // If one element are even number then it return true..
    return value % 2 === 0  
})

console.log(result)
var arr = [1, 2, 3, 4]

// var sum = arr.reduce(function(prev, cur){
//     return prev + cur
// },0)

// var max = arr.reduce(function(prev, curr){
//     return Math.max(prev, curr)
// })
// console.log(sum)
// console.log(max)

// Implement reduce function

function reduce(arr, cb, prev){
    for(var i = 0; i < arr.length; i++){
        prev = cb(prev, arr[i])
    }
    return prev
}

var sum = reduce(arr, function(prev, cur){
    return prev + cur
}, 0)

var max = arr.reduce(function(prev, curr){
    return Math.max(prev, curr)
})
console.log(sum)
console.log(max)

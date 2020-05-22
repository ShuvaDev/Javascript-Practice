// map function implement. 

// var arr = [1, 2, 3, 4, 5]

// var sqrArr = arr.map(function(value, index, arr){
//     return value * value
// })

// console.log(arr)
// console.log(sqrArr)

var arr = [1, 2, 3, 4]

function map(fun, arr){
    var sqrArr = []
    for(var i = 0; i < arr.length; i++){
        var val = fun(arr[i], i, arr)
        sqrArr.push(val)
    }
    return sqrArr
}
var sqrArr = map(function(value, index, arr){
    return value * value
},arr)

console.log(arr)
console.log(sqrArr)
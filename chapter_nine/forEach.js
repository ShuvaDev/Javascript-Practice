var arr = [1, 2, 3, 4, 5]

// arr.forEach(function(value, index, arr){
//     console.log(value, index, arr)
// })

function forEach(fnc, arr){
    for(var i = 0; i < arr.length; i++){
        fnc(arr[i], i, arr)
    }
}

forEach(function(value, index, ara){
    ara[index] = value * value
},arr)

console.log(arr) 
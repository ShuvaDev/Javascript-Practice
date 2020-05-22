var arr = [5,3,2,6,7,2,1]

// var val = arr.find(function(value){
//     return value === 6
// })

// var index = arr.findIndex(function(value){
//     return value === 6
// })

// console.log(val, index)

function find(arr, cb){
    for(var i = 0; i < arr.length; i++){
        if(cb(arr[i])){
            return arr[i]
            // return i // findIndex
        }
    }
}

var val = find(arr, function(value){
    return value === 6
})
console.log(val)
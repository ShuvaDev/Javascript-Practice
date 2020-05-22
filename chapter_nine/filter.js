// Mainly filter method take a callback function and if that's callback 
// function return true value then that's values pushed in another array.
var arr = [1, 2, 3, 4]

// var arr2 = arr.filter(function(value){
//     return value % 2 == 0
// })
// console.log(arr)
// console.log(arr2)

function filter(ara, cb){
    var newArr = []
    for(var i = 0; i < ara.length; i++){
        var result = cb(ara[i], i, arr)
        if(result){
            newArr.push(ara[i])
        }
    }
    return newArr
}
var arr2 = filter(function(value, index, arr){
    return value % 2 === 0
})
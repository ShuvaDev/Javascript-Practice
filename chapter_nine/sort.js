
var arr = [5,6,2,1,4,3,-1,-3,-2]
/* This sort function can't sort perfectly when in an array have
 negative number.*/
// arr.sort()
// console.log(arr)

arr.sort(function(a, b){
    if(a > b){
        return 1
    }else if(a < b){
        return -1
    }else{
        return 0
    }
})
console.log(arr)
// sort an object

var details = [
    {
        name: 'A',
        age: 24
    },
    {
        name: 'B',
        age: 21
    },
    {
        name: 'C',
        age: 28
    }
]

details.sort(function(a, b){
    if(a.age > b.age){
        return 1
    }else if(a.age < b.age){
        return -1
    }else{
        return 0
    }
})

console.log(details)
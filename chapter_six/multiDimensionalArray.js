// Multidimensional array

var ara = [
    [1,2,3,4,5],
    [10,20,30,40,50],
    [100,200,300,400,500],
]
// console.log(ara)
// console.log(ara[0])
// console.log(ara[1])
// console.log(ara[2])

// Traversing
for(var i = 0; i < ara.length; i++){
    for(var j = 0; j < ara[i].length; j++){
        console.log(ara[i][j])
    }
}
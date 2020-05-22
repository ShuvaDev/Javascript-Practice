
// function add(a,b)
// {
//     var sum = a + b
//     console.log(sum)
// }

// add(5,2)

// var arr1 = [1, 2, 3]
// var arr2 = [5, 7, 9]
// var arr3 = [9, 7, 1]

// function sum(arr){
//     var sum = 0
//     for(var i = 0;i < arr.length; i++){
//         sum = sum + arr[i]
//     }
//     console.log(sum)
// }

// sum(arr1)
// sum(arr2)
// sum(arr3)

function func(a, b, c){
    //console.log(arguments)
    console.log(arguments[0])
}

func(10,20,30)


function func2(){
    var sum = 0
    for(var i = 0; i < arguments.length; i++){
        sum = sum + arguments[i]
    }
    console.log(sum)
}

func2(10,20,30)
func2(10,20,30,40)

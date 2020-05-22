// function sum(n){
//     if(n == 1){
//         return 1
//     }

//     return n + sum(n-1)
// }
// console.log(sum(10))
// 1 2 3 5
function fib(n){
    if(n == 1){
        return 1
    }else if(n == 2){
        return 2
    }
    return fib(n - 1) + fib(n - 2)
}

console.log(fib(5))
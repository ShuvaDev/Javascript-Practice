// function greet(g){
//     function msg(name){
//         return g + ', ' + name
//     }
//     return msg
// }

// var gm = greet('Good Morning')
// var gn = greet('Good Night')

// console.log(gm('Shuva'))
// console.log(gn('Shuva'))

function base(b){
    function power(n){
        var result = 1
        for(var i = 1; i <= n; i++){
            result *= b
        }
        return result
    }
    return power
}

var base2 = base(2)
var base5 = base(5)

console.log(base2(3))
console.log(base5(3))
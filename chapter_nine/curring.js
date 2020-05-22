
function curring(a){
    return function(b){
        return function(c){
            return a + b + c
        }
    }
}

var result = curring(5)(3)(5)

console.log(result)
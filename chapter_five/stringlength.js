var str = 'This is string'

var length = 0
while(true){
    if(str.charAt(length) == ''){
        break
    }else{
        length++
    }
}

console.log(length)
console.log(str.length)
/* var name = result = ''

if(name == ''){
    result = 'S.R. Shuva Dev'
}else{
    result = name        
}
console.log(result)
*/

var name = ''

var result = name || 'S.R. Shuva Dev'

console.log(result)

//
/*
    var isOk = true
    if(isOk){
        console.log('Everything is OK!')
    }

*/
var isOk = true

isOk && console.log('Everything is OK!')

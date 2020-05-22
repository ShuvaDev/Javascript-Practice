// Inner Function...

function something(greet, name){
    function firstName(){
        if(name){
            return name.split(' ')[0]
        }else{
            return ''
        }
    }

    var msg = greet + ' ' + firstName()

    console.log(msg)
}

something('Hello','S.R. Shuva Dev')

something('Hello','')
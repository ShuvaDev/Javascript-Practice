var rect = {
    width: 10,
    height: 20,
    
    draw: function(){
        console.log('I am rect function!')
        console.log(this)
    },
    printProperties: function(){
        console.log('Width: '+this.width)
        console.log('Height: '+this.height)
    }
}
// rect.draw()
//rect.printProperties()

var another = {
    width: 50,
    height: 60,

    printProperties: rect.printProperties
}
another.printProperties()
// function fnc()
// {
//     console.log(this)
// }

// fnc()
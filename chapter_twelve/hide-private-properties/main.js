var Rect = function(width, height){
    this.width = width
    this.height = height

    var position = {
        x: 10,
        y: -100
    }

    var printProperties = function(){
        console.log('Width : '+ this.width)
        console.log('Width : '+ this.height)
    }.bind(this)

    this.draw = function(){
        console.log('I am rectangle!')
        printProperties()
        console.log(position.x, position.y)
    }
    
}

var r1 = new Rect(5, 8)
r1.draw()

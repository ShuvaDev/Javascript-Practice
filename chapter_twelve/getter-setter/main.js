
var Rect = function(width, height){
    this.width = width
    this.height = height

    var position = {
        x: 10,
        y: -100
    }
    // this.getPosition = function(){
    //     return position
    // }
    var printProperties = function(){
        console.log('Width : '+ this.width)
        console.log('Width : '+ this.height)
    }.bind(this)

    this.draw = function(){
        console.log('I am rectangle!')
        printProperties()
        console.log(position.x, position.y)
    }

    Object.defineProperty(this, 'position', {
        get: function(){
            return position
        },
        set: function(value){
            position = value
        }
    })
    
}

var r1 = new Rect(5, 8)
//r1.draw()

//console.log(r1.getPosition())
r1.position = {
    x: 100,
    y: 299
}
console.log(r1.position)
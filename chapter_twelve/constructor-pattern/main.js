
var Rect = function(width, height){
    this.width = width
    this.height = height

    this.draw = function(){
        console.log('I am rectangle function!')
        console.log(this)
    }
    this.printProperties = function(){
        console.log('Width: '+this.width)
        console.log('Height: '+this.height)
    }
}

var rect1 = new Rect(10, 20)
// rect1.draw()


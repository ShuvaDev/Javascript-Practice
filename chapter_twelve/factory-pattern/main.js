// Javascript don't give us class. So we can use use: 
// -> factory pattern -> Constructor pattern. 
// In factory pattern, mainly it is a function which return an object.

var createRect = function(width, height){
    return {
        width: width,
        height: height,
        
        draw: function(){
            console.log('I am rect function!')
            console.log(this)
        },
        printProperties: function(){
            console.log('Width: '+this.width)
            console.log('Height: '+this.height)
        }
    }
}

var rect1 = createRect(10, 20)

rect1.printProperties()

var rect2 = createRect(50, 60)

rect2.printProperties()
// Function is an object.

var Rect = new Function('width','height',`this.width = width
this.height = height
this.printProperties = function(){
    console.log('Width: ' + width)
    console.log('Height: ' + height)
}
`)
var r1 = new Rect(5, 2)
r1.printProperties()
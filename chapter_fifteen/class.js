// class in ES6
class Rectangle{
    constructor(width, height){
        this.width = width
        this.height = height
        this.draw = function(){
            console.log('I am drawing method..')
        }
    }
    // It is another way to declare a property. It is not support all browser.
    name = 'Rectangle'
    anotherFnc = function(){
        console.log('I am another function..')
    }
    print(){
        console.log('This is print function..')
    }
}

let r1 = new Rectangle(10, 20)
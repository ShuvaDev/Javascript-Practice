class Shape {
    draw(){
        console.log('I am drawing');
    }
}
class Rectangle extends Shape {
    constructor(width, height){
        /* If we use constructor in sub class we must be call super class
        constructor using super() */
        super()
        this.width = width
        this.height = height
    }
    rect(){
        console.log('I am rectangle method...')
    }
}

let r1 = new Rectangle(10, 20)
console.log(r1)
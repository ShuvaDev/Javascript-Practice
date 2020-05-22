function extend(Parent, Child){
    Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child
}

function Shape(color){
    this.color = color
}
Shape.prototype.common = function(){
    console.log('I am common method')
} 

function Square(width, color){
    Shape.call(this, 'Green')
    this.width = width
}

extend(Shape, Square)

Square.prototype.draw = function(){
    console.log('Drawing!')
}

// var shape = new Shape()
var sqr = new Square(5, 'Green')

// shape -> Shape -> Object
// sqr -> Square -> Object

// sqr -> Square -> Shape -> Object

// We can create object with another way...
//var shape2 = new Shape.prototype.constructor()

function Circle(radius, color){
    this.radius = radius
    Shape.call(this, color)
}

// Circle.prototype = Object.create(Shape.prototype)
// Circle.prototype.constructor = Shape 

extend(Shape, Circle)

Circle.prototype.common = function(){
    Shape.prototype.common.call(this)
    console.log('I am from circle and I am overriden method!')
}
var s = new Shape('Yellow')
var c = new Circle(4, 'Red')

// var arr = [s, c, sqr]

// for(var i of arr){
//     i.common()
// }

// console.log(c instanceof Circle)
// console.log(c instanceof Shape)
// console.log(c instanceof Square)

// Composition...
function mixin(target, ...source){
    console.log(...source)
    Object.assign(target,...source)
}

var canEat = {
    eat: function(){
        console.log('Eating...')
    }
}

var canWalk = {
    walk: function(){
        console.log('Walking...')
    }
}

var canSwim = {
    swim: function(){
        console.log('Swiming...')
    }
}

function Person(name){
    this.name = name
}

mixin(Person.prototype, canEat, canWalk)

function GoldFish(name){
    this.name = name
}

//mixin(GoldFish.prototype, canEat, canSwim)

var p1 = new Person()

var goldfish = new GoldFish()

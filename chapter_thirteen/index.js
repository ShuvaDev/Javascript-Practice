// prototype and prototypical inheritance...

// var person = {
//     name: 'S.R. Shuva Dev'
// }

// console.log(obj.toString())

// Property Descriptor...

// var descriptor = Object.getOwnPropertyDescriptor(person, 'name')
// console.log(descriptor)

// var baseObj = Object.getPrototypeOf(person)
// var descriptor = Object.getOwnPropertyDescriptor(baseObj, 'toString')
// console.log(descriptor)

// Object.defineProperty(person, 'name', {
//     enumerable: false,
//     writable: false,
//     configurable: false,
//     value: 'Shuva'
// })

//console.log(person)
//console.log(Object.keys(person))
//person.name = 'Shuva'
//delete person.name

// function Person(name){
//     this.name = name
// }

// var p1 = new Person('Shuva Dev')

// console.log(Object.getPrototypeOf(p1))

// console.log(Person.prototype)

// Person.prototype.PI = 3.1416

function Square (width){
    // Here all member are instance member. Instance member can access
    // prototype member...
    this.width = width

    this.getWidth = function(){
        // this.draw()
        console.log('Width = ' + this.width)
    }
}
Square.prototype = {
    // Here all member are prototype member. Prototype member can access
    // instance member...
    draw: function(){
        console.log('Draw!')
        this.getWidth()
    },
    toString: function(){
        console.log('Width = ' + this.width)
    }
}
var sqr1 = new Square(10)
var sqr2 = new Square(5)

// console.log(sqr1.hasOwnProperty('draw'))
// console.log(sqr1.hasOwnProperty('width'))

// It return all instance member...
// console.log(Object.keys(sqr1))

// It return all instance and prototype member...
for(var i in sqr1){
    console.log(i)
}
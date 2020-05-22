// Hide private data in class using symbol...

const _radius = Symbol()
const _name = Symbol()
const _print = Symbol()

// -> Naming convention for hide properties :- _radius
class Circle {
    constructor(radius, name){
        this[_radius] = radius
        this[_name]   = name
    }
    [_print](){
        console.log(this[_radius])
        console.log(this[_name])
    }
    circle(){
        this[_print]()
    }
}

let c1 = new Circle(2, 'circle')
// c1.circle()

let radius = Object.getOwnPropertySymbols(c1)[0]
let name   = Object.getOwnPropertySymbols(c1)[1]

console.log(c1[radius])
console.log(c1[name])

let print = Object.getOwnPropertySymbols(Circle.prototype)[0]
c1[print]()

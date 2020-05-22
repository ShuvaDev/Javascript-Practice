// // Hide private properties in class using WeakMap
// let _radius = new WeakMap()
// let _name = new WeakMap()
// let _method = new WeakMap()

// class Circle {
//     constructor(radius, name){
//         this.size = 3
//         _radius.set(this, radius)
//         _name.set(this, name)
//         _method.set(this, () =>{
//             console.log(this.size)
//         })
//     }
//     print(){
//         console.log(_radius.get(this), _name.get(this))
//         _method.get(this)()
//     }
// }

// let c1 = new Circle(2, 'circle')
// c1.print()


function Rectangle(width){
    let obj = {
        x: 10
    }
    Object.defineProperty(this, 'obj', {
        get: function(){
            return obj
        },
        set: function(value){
            obj = value
        }
    })
}

var r1 = new Rectangle(10)
r1.obj = {
    y: 20
}
console.log(r1.obj)

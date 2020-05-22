// Getter Setter in js
let _size = new WeakMap()

class Rectangle {
    constructor(size){
        _size.set(this, size)
    }
    get _size(){
        return _size.get(this)
    }
    set _size(v){
        _size.set(this, v)
    }
}

let r1 = new Rectangle(10)
r1._size = 20
console.log(r1._size)
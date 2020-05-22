// Enhance Object in ES6
let a = 10
let b = 20

let obj = {
    a: a,
    b: b
}
// obj and obj2 are same
let obj2 = {
    a,
    b
}
console.log(obj2)

// Here obj3 and obj4 are same
var obj3 = {
    a,
    b,
    print: function(){
        console.log('Print Method!')
    }
}

var obj4 = {
    a,
    b,
    print(){
        console.log('Print Method!')
    }
}
obj4.print()
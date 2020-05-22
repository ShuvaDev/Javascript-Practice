// 'use strict'
// // 'this' Property and It's Value in Class - ES6
// let obj = {
//     print: function(){
//         console.log(this)
//     }
// }

// // When we assign a method in fnc variable then this function refer global context.
// let fnc = obj.print
// fnc() // it print window object...

// //-<For this problem we can use 'use strict'. When we use this statement then
// // fnc will print undefiend.

class Person{
    print(){
        console.log(this)
    }
}
let p1 = new Person()

let fnc = p1.print
// This fnc will print undefiend because of class. By default class use 'use strict'
fnc()
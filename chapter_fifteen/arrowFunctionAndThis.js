// Arrow Function and this ...

// If we use this in arrow function, this refer parent context.
let fnc = function() {
    let obj = {
        y: 10,
        print: () => {
            console.log(this)
        }
    }
    obj.print()
}

fnc.call({x: 10})
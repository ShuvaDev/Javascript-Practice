class A {
    a = {
        data: 10
    }
    fnc() {
        console.log('fnc - '+this.a.data)
        this.test()

    }
    test = function() {
        console.log('test - '+this.a.data   )
    }
}

let a = new A()
a.fnc()
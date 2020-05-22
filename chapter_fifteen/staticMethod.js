// Static method in class...
class Person{
    constructor(name, email)
    {
        this.name = name 
        this.email = email
    }
    print(){
        console.log(this.name, this.email)
    }
    static create(str){
        let parse = JSON.parse(str)
        return new Person(parse.name, parse.email)
    }
}

let str = '{"name": "S.R. Shuva Dev", "email": "shuva@gmail.com"}'

let p1 = Person.create(str)
p1.print()

console.log(p1 instanceof Person)
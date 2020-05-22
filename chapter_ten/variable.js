// When a new scope found then mainly a new executional contex are 
// created and when a context are executing then mainly two phase are
// working. 1. Creational phase. 2. Executional phase.

// In creational phase variable(declaration) and function reference 
// are store in context object. 

// In executional phase all assignment and another process are working.

var a = 10

var b

console.log(a)

console.log(b)

b = 10

console.log(c)

var c = 20

// Creational phase
// a = undefined
// b = undefined
// c = undefined

// Executional phase
// a = 10
// b = 10
// c = 20
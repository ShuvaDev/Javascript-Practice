// Destructing of object and array in ES6

let person = {
    name: 'S.R. Shuva Dev',
    email: 's.r.shuvadeb@gmail.com',
    address: {
        city: 'Chattogram',
        country: 'Bangladesh'
    }
}

// Object destructing...
let {name, email, address: {city, country}} = person

console.log(name, email, city, country)

// Array destructing...
let arr = [1, 2, 3, 4, 5]

let [first,second, , ,last] = arr

console.log(first, second, last)
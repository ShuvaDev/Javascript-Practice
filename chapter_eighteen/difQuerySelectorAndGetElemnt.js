// Difference between query selector and getElement

let li1 = document.getElementsByTagName('li') // Element

let li2 = document.querySelectorAll('li') // Node

// console.log(li1.constructor.name)
// console.log(li2.constructor.name)

let ul1 = document.querySelector('ul')

let ul2 = document.getElementsByTagName('ul')

console.dir(ul1)
console.dir(ul2)
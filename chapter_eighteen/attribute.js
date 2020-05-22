// Deal with attribut in JS

let list = document.getElementById('list')

let firstChild = list.firstElementChild

// get attribute
// console.log(firstChild.attributes)
// console.log(firstChild.getAttributeNames())
// console.log(firstChild.getAttribute('name'))
// console.log(firstChild.getAttributeNode('name'))

let atr = document.createAttribute('id')
atr.value = 'idName'

firstChild.setAttributeNode(atr)

console.log(firstChild.id)
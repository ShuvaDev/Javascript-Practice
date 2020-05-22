// How to Clone Node Include It's Child Elements 

let list = document.getElementById('list')

// -> This cloneNode don't clone deeply.
let firstElement = list.firstElementChild.cloneNode()
firstElement.innerHTML = 'List item 4'

list.appendChild(firstElement)

// -> This cloneNode clone deeply
let lastChild = list.lastElementChild.cloneNode(true)
list.appendChild(lastChild)
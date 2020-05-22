// Create DOM Element

function createElement(tagName, className, innerHTML) {
    let tag = document.createElement(tagName)
    tag.className = className || ''
    tag.innerHTML = innerHTML || ''

    return tag
}
function append(parent, children) {
    children.forEach(child => {
        parent.appendChild(child)
    });
}

let li = createElement('li', 'list-group', 'List item 4')
li.setAttribute('title', 'I am tittle')

let list = document.getElementById('list')
list.appendChild(li)

let p1 = createElement('p', 'lead', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat et atque perspiciatis possimus, iusto excepturi vitae! Vel, vitae quos. Ullam.')

let p2 = createElement('p', 'lead', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat et atque perspiciatis possimus, iusto excepturi vitae! Vel, vitae quos. Ullam.')

let p3 = createElement('p', 'lead', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat et atque perspiciatis possimus, iusto excepturi vitae! Vel, vitae quos. Ullam.')

let div = createElement('div','','')
append(div, [p1, p2, p3])

let container = document.querySelector('.container')
container.appendChild(div)
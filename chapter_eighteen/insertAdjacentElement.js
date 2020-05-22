function createElement(tagName, className, innerHTML) {
    let tag = document.createElement(tagName)
    tag.className = className || ''
    tag.innerHTML = innerHTML || ''

    return tag
}

let div = createElement('div','cnt','')

let p1 = createElement('p', 'lead', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat et atque perspiciatis possimus, iusto excepturi vitae!')

let p2 = createElement('p', 'lead', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat et atque perspiciatis possimus, iusto excepturi vitae!')

div.appendChild(p1)
div.appendChild(p2)

let list = document.getElementById('list')

// list.insertAdjacentElement('afterend', div)
// list.insertAdjacentElement('beforeend', div)
// list.insertAdjacentElement('beforebegin', div)
list.insertAdjacentElement('afterbegin', div)
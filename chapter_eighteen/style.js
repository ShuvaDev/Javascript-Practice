let list = document.getElementById('list')

// let firstChild = list.firstElementChild

// firstChild.style.background = 'red'
// firstChild.style.fontSize = '30px'
// firstChild.style.fontStyle = 'italic'

let styleObj = {
    background: 'black',
    fontFamily: 'fira code',
    color: 'red',
    marginBottom: '5px'
};

[...list.children].forEach((list) => {
    Object.assign(list.style, styleObj)
})
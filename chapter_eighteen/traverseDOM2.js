// How to Loop Throw HTML Collections

let listItem = document.getElementsByTagName('li')

// let listItemArr = Array.from(listItem)
// let listItemArr = Array.prototype.slice.apply(listItem)
let listItemArr = [...listItem]

listItemArr.forEach((li, index) => {
    let text = li.innerHTML
    li.innerHTML = `(${index+1}) ${text}`
})
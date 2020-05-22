// 2. Query Selector in DOM

let title = document.querySelector('#title')
console.log(title)

let paragraph = document.querySelector('.lead')
console.log(paragraph)

let paragraphs = document.querySelectorAll('.lead')
console.log(paragraphs)

let lists = document.querySelectorAll('li')
console.log(lists)

let listitem = document.querySelector('[name^="list-item"]')
console.log(listitem)
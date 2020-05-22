let list = document.getElementById('list')

setTimeout(() => {
    let firstChild = list.firstElementChild
    firstChild.innerHTML = firstChild.innerHTML + ' (Modified)'
    firstChild.style.background = 'red'
    firstChild.classList.add('class1')
},3000)

setTimeout(() => {
    let lastChild = list.lastElementChild
    lastChild.remove()
}, 2000);
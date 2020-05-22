let btn = document.getElementById('btn')

// btn.onclick = function(e) {
//     alert('hi')
// }

// btn.addEventListener('click', function(e){
//     alert('I am clicked!')
// })

let list = document.getElementById('list')
btn.onclick = function(e) {
    let li = list.lastElementChild.cloneNode()
    li.innerHTML = 'List Item 4'
    list.appendChild(li)
};
// event delegation problem
// [...list.children].forEach(li => {
//     li.addEventListener('click', function(e) {
//         // console.log(e.target)
//         e.target.remove()
//     })
// })

list.addEventListener('click', function(e) {
    if(this.contains(e.target)){
        e.target.remove()
    }                                                          
})

let box = document.getElementById('box')
box.addEventListener('mousemove', function(e) {
    document.getElementById('x-value').innerHTML = e.offsetX
    document.getElementById('y-value').innerHTML = e.offsetY
})
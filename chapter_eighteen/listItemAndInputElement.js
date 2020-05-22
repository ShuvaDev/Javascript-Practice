// 213. List Item and Input Element Event Handling

let list = document.getElementById('list')

list.addEventListener('dblclick', function(event) {
    if(this.contains(event.target)){
        let value = event.target.innerText
        event.target.innerHTML = ''

        let inp = createInpBox(value)
        event.target.appendChild(inp)

        inp.addEventListener('keypress', function(e) {
            if(e.key === 'Enter'){
                event.target.innerText = e.target.value
            }
        })
    }
})

function createInpBox (value) {
    let inp = document.createElement('input')
    inp.type = 'text'
    inp.value = value

    return inp
}
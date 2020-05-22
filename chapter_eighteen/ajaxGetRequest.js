let loadBtn = document.getElementById('load')
let showList = document.getElementById('showList')

let URL = 'https://jsonplaceholder.typicode.com/posts'

loadBtn.addEventListener('click', function(e){
    fetch(URL)
    .then((response) => response.json())
    .then((posts) => {
        posts.forEach((post, index) => {
            let li = listItemGenerator(post, index)
            showList.appendChild(li)
        });
    })
    .catch(e => console.log(e.message))
})

function listItemGenerator(item, no){
    let li = document.createElement('li')
    li.className = 'list-group-item'
    li.innerHTML = `${no+1}. ${item.title}`
    
    return li
}
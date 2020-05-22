let form = document.getElementById('post-form')
let URL = 'https://jsonplaceholder.typicode.com/posts'

form.addEventListener('submit', function(e) {
    e.preventDefault()

    let title = this.title.value || undefined
    let body = this.body.value || undefined
    
    if(title && body) {
        let postObj = {
            userId: 100,
            title,
            body
        }

        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-type': 'Application/JSON'
            },
            body: JSON.stringify(postObj)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(e => console.log(e.message))

    } else {
        alert('Please provide description!')
    }
})
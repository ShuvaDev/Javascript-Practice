
// fetch('https://jsonplaceholder.typicode.com/users/1')
//     .then((v) => v.json())
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((e) => {
//         console.log(e)
//     })
let BASE_URL = 'https://jsonplaceholder.typicode.com/users/1'

function getRequest (url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest()
        xhr.open('GET', url)

        xhr.onreadystatechange = function () {
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    let response = JSON.parse(xhr.response)
                    resolve(response)
                } else{
                    reject(xhr.status)
                }
            }
        }
        xhr.send()  
        
    })
} 

getRequest(BASE_URL)
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(new Error('Error Occurred!'))
    })
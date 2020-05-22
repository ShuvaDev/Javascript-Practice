// let request = new XMLHttpRequest()

// request.open('GET', 'https://jsonplaceholder.typicode.com/posts')

// request.onreadystatechange = function(){
//     if(request.readyState === 4){
//         if(request.status === 200){
//             // console.log(request.response)
//             console.log(JSON.parse(request.response))
//         }
//     }
// }

// request.send()


function getRequest (url, callback) {
    let request = new XMLHttpRequest()
    request.open('GET', url)
    request.onreadystatechange = function(){
        if(request.readyState === 4){
            if(request.status === 200){
                let parse =JSON.parse(request.response)
                callback(null, parse)
            }else{
                callback(request.status, null)
            }
        }
    }
    request.send()
}
let url = 'https://jsonplaceholder.typicode.com/users'
getRequest(url, function(error, response){
    if(error){
        console.log(error)
    }else{
        response.forEach(obj => {
            console.log(obj.name)
        })
    }
})
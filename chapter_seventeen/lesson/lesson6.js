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

let BASE_URL = 'https://jsonplaceholder.typicode.com/users'

getRequest(`${BASE_URL}/posts/1`, function(error, response){
    if(error){
        console.log(error)
    }else{
        let { userId } = response
        
        getRequest(`${BASE_URL}/users/${userId}`, function(error, res){
            if(error){
                console.log(error)
            }else{
                getRequest(`${BASE_URL}/posts/1/comments/${res.id}`, function(error, res){
                    if(error){
                        console.log(error)
                    } else{
                        console.log(res)
                    }
                })
            }
        })
    }
})
// async generator...

async function* asyncGenerator (){
    let i = 1
    while(i < 4){
        yield i++
    }
}

let it = asyncGenerator();

(async function() {
    for await(let v of it){
        console.log(v)
    }
})()

let asyncIterable = {
    [Symbol.asyncIterator]() {
        let i = 1
        return {
            next() {
                if(i < 5){
                    return Promise.resolve({
                        done: false,
                        value: i++
                    })
                } else{
                    return Promise.resolve({
                        done: true,
                        value: undefined
                    })
                }
            }
        }
    }
}
let iterator = asyncIterable[Symbol.asyncIterator]();

// async function fnc() {
//     console.log(await iterator.next())
//     console.log(await iterator.next())
//     console.log(await iterator.next())
//     console.log(await iterator.next())
//     console.log(await iterator.next())
// }
//fnc()


(async function fn() {
    for await(let v of asyncIterable){
        console.log(v)
    }
})()

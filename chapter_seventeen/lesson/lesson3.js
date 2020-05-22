function sayMyName(name) {
    let result
    setTimeout(() => {
        result = name
    }, 3000);
    return result 
}

let output = sayMyName('shuva')
// => It print undefined because of asynchronous.
console.log(output)

// So for this situation we can do as below..
function sayMyName1(name) {
    let result
    setTimeout(() => {
        result = name
        console.log(result)
    }, 3000);
}

let output1 = sayMyName1('shuva')
// => It print undefined because of asynchronous.
console.log(output1)
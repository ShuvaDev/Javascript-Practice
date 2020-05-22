// Function composition

// When we give a function output as an another function input then
// we call it function composition....

function input(inp){
    console.log(inp)
}
function multiplyByFive(n){
    return n * 5
}
function add(a, b) {
    return a + b
}

input(multiplyByFive(add(5, 3)))
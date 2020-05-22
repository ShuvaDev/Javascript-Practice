// Compare two object...

var obj1 = {
    a: 10,
    b: 20
}

var obj2 = {
    a: 10,
    b: 20
}

//console.log(obj1 === obj2)// It returns false. Because it check memory location.

if(obj1.a == obj2.a && obj1.b == obj2.b){
    console.log(true)
}else{
    console.log(false)
}

// We can convert an object to strig and compare them...

console.log(JSON.stringify(obj1) === JSON.stringify(obj2))
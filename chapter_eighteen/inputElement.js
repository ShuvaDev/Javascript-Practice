let input = document.getElementById('input')

input.addEventListener('keypress', function(e) {
    if(e.key === 'Enter'){
        document.getElementById('showData').innerHTML = e.target.value
    }
    // if(e.keyCode === 13){
    //     console.log(e.target.value)
    // }
})
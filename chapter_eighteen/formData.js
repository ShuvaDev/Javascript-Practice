let form = document.getElementById('form')

form.addEventListener('submit', function(e) {
    e.preventDefault()
    let formData = {}
    let isValid = false;
    [...this].forEach((el) => {
        if(el.type != 'submit'){
            isValid = validator(el)
            if(isValid){
                formData[el.name] = el.value
            }else {
                el.classList.add('is-invalid')
                // alert(`${el.name} is required!`)
            }
        }
    })
    if(isValid){
        this.reset()
        console.log(formData)
    }
})

function validator (el) {
    if(!el.value){
        return false
    }
    return true
}
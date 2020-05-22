// Default parameter ...

let func = (name = 'Shuva', greet = 'Hello') => {
    console.log(name.length)
    console.log(`${greet}! ${name}`)
}

func(undefined, 'Hi')
func()
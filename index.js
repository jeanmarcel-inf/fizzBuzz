function FizzBuzz(numero){
    if(numero % 3 === 0 && numero % 5 === 0){
        return console.log('FizzBuzz')
    } 
    else if(numero % 3 === 0){
        return console.log('Fizz')
    }
    else if(numero % 5 === 0){
        return console.log('Buzz')
    } 
    
}

FizzBuzz(45)
function FizzBuzz(numero){

    /* Se, o resto da divisão do numero inserido for igual a '0', este, é divisível por '3' e '5',
    e retornará o valor FizzBuzz!  */

    if(numero % 3 === 0 && numero % 5 === 0){
        return console.log('FizzBuzz')
    } 

    /* Se, o resto da divisão do numero inserido for igual a '0', este, é divisível por '3',
    e retornará a string 'Fizz' */

    else if(numero % 3 === 0){
        return console.log('Fizz')
    }

    /* Se, o resto da divisão do numero inserido for igual a '0', este, é divisível por '5'
    e retornará a string 'Buzz' */

    else if(numero % 5 === 0){
        return console.log('Buzz')
    } 
}

FizzBuzz();  // Inserir o número que será analisado //
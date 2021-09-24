// "Fizz buzz" é um jogo com palavras.
// Você deve escrever uma função a qual recebe um inteiro positivo e retorna:
// ... se o número for divisível por 3 e por 5;
// se o número for divisível por 3;
// se o número for divisível por 5;
// como uma palavra (string) para todos os outros casos.

function fizzBuzz(valor){
    if  (typeof valor !==typeof 3){
        return ('não é um número!')
    }
    if  (valor %3==0 && valor %5==0){
        return 'FizzBuzz';

    }else if (valor % 5==0){
        return 'Buzz' ;
    } 
    else if (valor % 3=== 0) {
        return 'Fizz';
    }
    else {
        return valor;
    }
}

const valor1=fizzBuzz();
console.log(valor1)


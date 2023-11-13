// 1.02 Estutura de repetição - while

const input = require('readline-sync')

const numero_sorteado = 5;

let numero = Number(input.question('Qual numero voce escolhe?'))

while (numero !== numero_sorteado){
    console.log('Você errou o número. Tente novamente...')

    numero = Number(input.question('Qual numero voce escolhe?'))
}

console.log('Você acertou!!!')
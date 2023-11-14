// 1.02 Estutura de repetição - WHILE
// While é um laço condicional
// enquanto um valor for diferente, ele continua
// é um laço não controlado (você não sabe quantas vezes vai repetir)
// while : enquanto uma sentença for verdade, continue repetindo

const input = require('readline-sync')

const numero_sorteado = 5;

let numero = Number(input.question('Qual numero voce escolhe?'))

while (numero !== numero_sorteado){
    console.log('Você errou o número. Tente novamente...')

    numero = Number(input.question('Qual numero voce escolhe?'))
}

console.log('Você acertou!!!')
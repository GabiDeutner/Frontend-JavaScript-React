// Laços Numéricos - FOR

const input = require('readline-sync')

// Sem estrutura de repetição (o problema):

const nota1 = Number(input.question('Informe a nota 1: '))
const nota2 = Number(input.question('Informe a nota 2: '))
const nota3 = Number(input.question('Informe a nota 3: '))

let media = (nota1 + nota2 + nota3) / 3

// acumulador

let acumulador = 0;

acumulador = acumulador + 10

acumulador += 2 // acumulador recebe ele mesmo + 2

acumulador++ // sempre adiciona uma unidade no acumulador

console.log(acumulador)


// Estrutura FOR

for (let i = 0; i < 10; i++){
    console.log('Repetição', i)
}

// vai até o 9, porque é até i menor que 10

for (let i = 0; i <= 10; i++){
    console.log('Repetição', i)
}

// vai até o 10, porque é até i menor ou igual a 10

for (let i = 12; i > 8; i--){
    console.log('Repetição', i)
}

// vai até o 9, ou seja, até o último número em que i > 8

// Resolvendo o problema inicial

let nota
let soma

for (let i = 1; i <= 3; i++){
    nota = Number(input.question(`Informe a nota ${i} do aluno: `))

    soma = soma + nota
}

console.log(`A média é ${soma/3}.`)
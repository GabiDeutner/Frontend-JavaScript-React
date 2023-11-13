//Leitura de Dados no JavaScript

/* No node não existe a função de leitura de dados para o JavaScript. Para ler dados, é preciso
instalar uma biblioteca.

Para instalar uma biblioteca, é possível usar o gerenciador de bibliotecas do JavaScript (node) que
se chama npm. 

Para instalar a biblioteca com função de leitura de dados, usar o comando abaixo no Powershell do
Visual Studio Code:

npm install readline-sync

A biblioteca será instalada localmente no projeto e não no pc, então apenas esse projeto poderá
utilizar essa biblioteca.

Para instalar de forma geral essa biblioteca no computador, colocar -g (global) no comando:

npm install -g readline-sync

Depois, é necessário importar a biblioteca no JavaScript.
Como importar: */

const input = require("readline-sync")

//Pra usar a função de leitura precisa usar a palavra "question". Exemplo abaixo:

const input = require("readline-sync")

const numero = input.question('Qual número você escolhe? ')

//Ou converter diretamente o que está sendo lido para número:

const numero = Number(input.question('Qual número você escolhe? '))

console.log(numero, typeof numero)


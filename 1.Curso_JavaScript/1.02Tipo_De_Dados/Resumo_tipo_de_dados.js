// TIPOS DE DADOS



//Todos são primitivos exceto os objetos.

var nome = 'André'; // String
var idade = 28; // Number
var possuiFaculdade = true; // Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol() // Symbol
var novoObjeto = {} // Object

// Primitivos são dados imutáveis.




//VERIFICAR TIPO DE DADO

var nome = 'André';
console.log(typeof nome);
// retorna string

//typeof null retorna object




//STRING
//Você pode somar uma string e assim concatenar as palavras.

var nome = 'André';
var sobrenome = 'Rafael';
var nomeCompleto = nome + ' ' + sobrenome;
console.log(nomeCompleto);


//STRING
//Você pode somar números com strings, o resultado final é sempre uma string.

var gols = 1000;
var frase = 'Romário fez ' + gols + ' gols';
console.log(frase);



//ASPAS DUPLAS, SIMPLES E TEMPLATE STRING

'JavaScript é "super" fácil';
"JavaScript é 'super' fácil";
"JavaScript é \"super\" fácil";
`JavaScript é "super" fácil"`;
"JavaScript é "super" fácil"; // Inválido

//Não necessariamente precisamos atribuir valores a uma variável




//TEMPLATE STRING

var gols = 1000;
var frase1 = 'Romário fez ' + gols + ' gols';
var frase2 = `Romário fez ${gols} gols`; // Utilizando Template String
console.log(frase1);
console.log(frase2);

//Você deve passar expressões / variáveis dentro de ${}


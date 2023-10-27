//VARIÁVEIS

//Responsáveis por guardar dados na memória.
//Inicia com a palavra var, let ou const

var nome = 'André';
let idade = 28;
const possuiFaculdade = true;

console.log(nome,idade,possuiFaculdade)

//EVITAM REPETIÇÕES
//DRY (Don't repeat yourself)

var preco = 20;
var totalComprado = 5;
var precoTotal = preco * totalComprado;

console.log(precoTotal)

//SINTAXE
//Palavra chave var seguida do nome, sinal de igual e o valor.

var nome = 'André';
var idade = 28;
var possuiFaculdade = true;

console.log(nome,idade,possuiFaculdade)

//VÍRGULA
//Utilizei a vírgula para criar mais de uma variável, sem repetir a palavra chave var.

var nome = 'André',
    idade = 28,
    possuiFaculdade = true;

console.log(nome,idade,possuiFaculdade)


//SEM VALOR
//Pode declarar ela e não atribuir valor inicialmente.

var precoAplicativo;
// retorna undefined

/*
>>> NOME

 > Os nomes podem iniciar com $, _, ou letras.
> Podem conter números mas não iniciar com eles
> Case sensitive
> nome é diferente de Nome
> Não utilizar palavras reservadas: https://www.w3schools.com/js/js_reserved.asp
> Camel case
> É comum nomearmos assim: abrirModal
*/

// Exemplos de Nomes para Variáveis

// Exemplos de nomes Inválidos
var §nome; // caractere especial
var function; // palavra reservada
var 1possuiFaculdade; // começando com número

// Válido
var $selecionar; // pode começar com $
var _nome; // pode começar com underline
var possuiFaculdadeNoExterior; // uso de Camel Case

//DECLARAR
//Erro ao tentar utilizar uma variável que não foi declarada.
console.log(nome);
// retorna nome is not defined

//HOISTING
//São movidas para cima do código, porém o valor atribuído não é movido.
console.log(nome);
var nome = 'André';
// Retorna undefined

var profissao = 'Designer';
console.log(profissao);
// Retornar Designer

//MUDAR O VALOR ATRIBUÍDO
//É possível mudar os valores atribuídos a variáveis declaradas com var e let. 
//Porém não é possível modificar valores das declaradas com const

var idade = 28;
idade = 29;

let preco = 50;
preco = 25;

const possuiFaculdade = true;
possuiFaculdade = false;
// Retorna um erro


//EXERCÍCIO
//Dica rápida, frases (string) devem ser colocadas entre aspas (simples ou duplas) e números não levam aspas.
// Declarar uma variável com o seu nome

// Declarar uma variável com a sua idade

// Declarar uma variável com a sua comida
// favorita e não atribuir valor

// Atribuir valor a sua comida favorita

// Declarar 5 variáveis diferentes sem valores

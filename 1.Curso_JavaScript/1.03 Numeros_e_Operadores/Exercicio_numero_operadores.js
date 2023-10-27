//EXERCÍCIO

// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20; // 35
console.log(total);

// Crie duas expressões que retornem NaN
var teste = "testando" / 2;
var teste2 = "testando" - 5;
console.log(teste, teste2);

// Somar a string '200' com o número 50 e retornar 250

var number = '200';
var soma = +number + 50;
console.log(soma);

// Incremente o número 5 e retorne o seu valor incrementado

var incremento = 5;
console.log(++incremento); // 6

// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)

// Resolução

var numero = +'80'/2;
var unidade = 'kg';
var peso = numero + unidade;
console.log(peso);

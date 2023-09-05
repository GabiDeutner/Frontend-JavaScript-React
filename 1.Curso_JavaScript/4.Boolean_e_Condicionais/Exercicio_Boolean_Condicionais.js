// EXERCÍCIO

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

var minhaIdade = 29;
var idadeTia = 52;

if(minhaIdade > idadeTia){
    console.log('A minha idade é maior');
} else if(idadeTia === minhaIdade){
    console.log('As idades são iguais');
} else{
    console.log('A minha idade é menor');
}



// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2); // 3
console.log(expressao);


// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; // T
var idade = 28; // T
var possuiDoutorado = false; // F
var empregoFuturo; // F
var dinheiroNaConta = 0; // F

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);
//true true false false false



// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil > china){
    console.log('O Brasil tem mais habitantes que a China');
} else if(brasil === china){
    console.log('Brasil tem a mesma quantidade de habitantes que a China')
} else{
    console.log('A China tem mais habitantes que o Brasil')
}



// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}
// Falso



// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}
//Cão
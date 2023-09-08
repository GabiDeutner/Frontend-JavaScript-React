// EXERCÍCIO

// Crie uma função para verificar se um valor é Truthy

function verificaValor(valor){
  return !!valor
}

// Testando

valor = 5;

function verificaValor(valor){
  return !!valor
}

console.log(!!valor);





// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetro(lado){
  return lado * 4
}

// Testando

lado = 5

function perimetro(lado){
  return lado * 4
}

console.log(lado * 4);






// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

nome = 'Gabriela';
sobrenome = 'Deutner';

function nomeCompleto(nome,sobrenome){
  return nome + ' ' + sobrenome
}

//testando
console.log(nome + ' ' + sobrenome);





// Crie uma função que verifica se um número é par

num = 5

function verificaPar(num){
  if(num%2===0){
    console.log('O número é par');
  } else{
    console.log('O número não é par');
  }
}



// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

valor = 'teste';

function tipoDado(valor){
  return (typeof valor)
}

//testando
console.log(typeof valor);



// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('scroll', function() {
  console.log('Gabriela Deutner');
});




// Corrija o erro abaixo

function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);



//CORRIGIDO:
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
  precisoVisitar(20);
  jaVisitei(20);
  
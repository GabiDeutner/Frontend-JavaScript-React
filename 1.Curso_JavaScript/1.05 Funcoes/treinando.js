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
    let perim = lado * 4;
    return perim;
}

console.log(perimetro(10));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function meuNomeCompleto (nome, sobrenome){
    return `${nome} ${sobrenome}`
}

console.log(meuNomeCompleto('Gabi', 'Deutner'));



// Crie uma função que verifica se um número é par

function verificaPar(numero){
    if (typeof numero != 'number'){
        return 'Digite um número!'
    } else if (numero%2===0){
        return 'número par!'  
    } else{
        return 'número ímpar!'
    }
}

console.log(verificaPar('oi'))
console.log(verificaPar(5))
console.log(verificaPar(4))


// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function verificaPar(numero){
    let verificando = typeof numero;
    return verificando;
}

console.log(verificaPar('oi'));
console.log(verificaPar(true));
console.log(verificaPar(1));



// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('scroll', function(){
    return console.log('Gabi Deutner');
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
  

  // Correção

  var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
  console.log(precisoVisitar(20));
  console.log(jaVisitei(20));
  
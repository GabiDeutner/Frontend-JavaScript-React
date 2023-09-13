// Por qual motivo o código abaixo retorna com erros?
{
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;
  }
  console.log(var, marca, portas);
   
   // não faz sentido dar console.log no var, pois var não é uma variável e sim uma palavra chave
   // o var "vaza" o bloco, ou seja, quando temos um bloco o correto é usar const e let dentro do bloco
   // o certo é dar console.log no const e let dentro do bloco e não fora do bloco
   // o var irá vazar e funcionar fora do bloco, mas não é o recomendado
   // o certo é usar const e let com o console.log 
   // dentro do bloco em vez de utilizar o var, porque fora do bloco o var retornará "undefined"
   //A partir de agora, devemos utilizar apenas const e let para declarmos variáveis.
   
   // Correção:

   {
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;
    console.log(cor, marca, portas);
  }



   
  // Como corrigir o erro abaixo?
  function somarDois(x) {
    const dois = 2;
    return x + dois;
  }
  function dividirDois(x) {
    return x + dois;
  }
  somarDois(4);
  dividirDois(6); // o erro acontece porque o dois está dentro da função somarDois e fora da dividirDois
  // o certo é declarar o dois fora de ambas as funções, assim as duas conseguem utilizar ele


  // correção:

  const dois = 2;
  function somarDois(x) {
    return x + dois;
  }
  function dividirDois(x) {
    return x / dois;
  }
  console.log(somarDois(4));
  console.log(dividirDois(6));





  // O que fazer para total retornar 500?
  var numero = 50;
  
  for(var numero = 0; numero < 10; numero++) {
    console.log(numero);
  }
  
  const total = 10 * numero;
  console.log(total);
  

  //correção: Usar const e let

  const numero = 50;
  
  for(let numero = 0; numero < 10; numero++) {
    console.log(numero);
  }
  
  const total = 10 * numero;
  console.log(total);
  
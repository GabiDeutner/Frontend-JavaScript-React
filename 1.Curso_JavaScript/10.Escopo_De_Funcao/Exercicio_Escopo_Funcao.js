// Por qual motivo o código abaixo retorna com erros?
{
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;
  }
  console.log(var, marca, portas);
  
   // porque o var "vaza" o bloco, ou seja, quando temos um bloco o correto é usar const e let
   // em vez de utilizar o var, porque fora do bloco o var retornará "undefined"
   //A partir de agora, devemos utilizar apenas const e let para declarmos variáveis.


   
  // Como corrigir o erro abaixo?
  function somarDois(x) {
    const dois = 2;
    return x + dois;
  }
  function dividirDois(x) {
    return x + dois;
  }
  somarDois(4);
  dividirDois(6);
  
  // O que fazer para total retornar 500?
  var numero = 50;
  
  for(var numero = 0; numero < 10; numero++) {
    console.log(numero);
  }
  
  const total = 10 * numero;
  console.log(total);
  
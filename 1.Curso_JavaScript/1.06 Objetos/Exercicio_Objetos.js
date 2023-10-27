//EXERCÍCIO


// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome


var Gabi = {
    nome: 'Gabriela',
    sobrenome: 'Deutner',
    profissao: 'Desenvolvedora Web',
    idade: '29',
    possuiFaculdade: true,
}


// Crie um método no objeto anterior, que mostre o seu nome completo


  dados.nomeCompleto = function(nome,sobrenome){
    return this.nome + '' + this.sobrenome
  };

// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }

  // RESOLUÇÃO:

  var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }

    carro.preco = 3000;
  


  // Crie um objeto de um cachorro que represente um labrador,
  // preto com 10 anos, que late ao ver um homem
  
  var doguinho = {
    raca: 'labrador',
    cor: 'preto',
    idade:'10' ,
    verHomem: true,
    latir: function(verHomem){
      if (verHomem === true){
        return console.log('Au Au!');
      } else{
        return 'nada'
      }
      }
    }

  
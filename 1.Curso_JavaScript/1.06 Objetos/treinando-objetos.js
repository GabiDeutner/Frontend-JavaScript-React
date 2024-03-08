// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
// Crie um método no objeto anterior, que mostre o seu nome completo

const gabs = {
    nome: 'Gabriela',
    sobrenome: 'Deutner',
    idade: 30,
    sexo: 'feminino',
    nomeSobrenome: function(){
        return `${this.nome} ${this.sobrenome}`
    }
}

console.log(gabs.nomeSobrenome());



// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }

  carro.preco = 3000;
  console.log(carro.preco);
  
  // Crie um objeto de um cachorro que represente um labrador,
  // preto com 10 anos, que late ao ver um homem
  
  const doguinho = {
        raca: 'labrador',
        cor: 'preto',
        idade: 10,
        latir: function(ver){
            if (ver==='homem'){
                return 'latir';
            } else{
                return 'silencio';
            }
        }
  }
  
  console.log(doguinho.latir('homem'));
  console.log(doguinho.latir('teste'));
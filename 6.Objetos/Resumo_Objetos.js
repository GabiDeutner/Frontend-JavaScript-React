//OBJETOS


//Conjunto de variáveis e funções, que são chamadas de propriedades e métodos.

var pessoa = {
  nome: 'André',
  idade: 28,
  profissao: 'Designer',
  possuiFaculdade: true,
}

pessoa.nome; // 'André'
pessoa.possuiFaculdade; // true

//Propriedades e métodos consistem em nome (chave) e valor




//MÉTODOS
//É uma propriedade que possui uma função no local do seu valor.

var quadrado = {
  lados: 4,
  area: function(lado) {
    return lado * lado;
  },
  perimetro: function(lado) {
    return this.lados * lado;
  },
}

quadrado.lados; // 4
quadrado.area(5); // 25
quadrado.perimetro(5); // 20

// O uso do this: 
// Dentro do objeto existem um ou mais métodos
// A variável está fora do método, mas dentro do objeto
// Para acessar a variável sem ter que repetir a sua declaração, use o this (conforme exemplo acima)

// Para chamar uma função dentro de um objeto, escrever: objeto.função
// Para chamar um método dentro de um objeto, escrever: objeto.método
// Um exemplo é o console.log, o console é um objeto e o log é um método dentro do objeto console
// Logo, console.log é objeto.método


//MÉTODOS
//Abreviação de area: function() {} para area() {}, no ES6+

var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
}

// No exemplo acima, retiramos o function da sintaxe e ele funcionou da mesma forma
// Isso acontece porque é uma funcionalidade do ES6+




//ORGANIZAR O CÓDIGO
//Objetos servem para organizar o código em pequenas partes reutilizáveis.

Math.PI; // 3.14
Math.random(); // número aleatório

var pi = Math.PI;
console.log(pi); // 3.14

//Math é um objeto nativo de JavaScript. Já percebeu que console é um objeto e log() um método?
// Existe o console.table()
// Exemplo de como utilizar:

var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
}

console.table(quadrado); // vai aparecer no console uma tabela com as informações da var quadrado


//CRIAR UM OBJETO
//Um objeto é criado utilizando as chaves {}

var carro = {};
var pessoa = {};

console.log(typeof carro); // 'object'





//DOT NOTATION GET
//Acesse propriedades de um objeto utilizando o ponto .

var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
}

var bg = menu.backgroundColor; // '#84E'


// GET = pegar um valor
// SET = Atribuit um valor


//DOT NOTATION SET
//Substitua o valor de uma propriedade utilizando . e o = após o nome da mesma.

var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
}

menu.backgroundColor = '#000';
console.log(menu.backgroundColor); // '#000'




//ADICIONAR PROPRIEDADES E MÉTODOS
//Basta adicionar um novo nome e definir o valor.

var menu = {
  width: 800,
}

menu.height = 50;
menu.position = 'fixed';





//PALAVRA-CHAVE THIS
//this irá fazer uma referência ao próprio objeto.

var height = 120;
var menu = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2;
  }
}

menu.metadeHeight(); // 25
// sem o this, seria 60

//this irá retornar o próprio objeto






//PROTÓTIPO E HERANÇA
//O objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo.

var menu = {
  width: 800,
}

menu.hasOwnProperty('width') // true
menu.hasOwnProperty('height') // false

//hasOwnProperty é um método de Object
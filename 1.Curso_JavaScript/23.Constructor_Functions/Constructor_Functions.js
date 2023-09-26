/*Uma "constructor function" no JavaScript é uma função que é usada como um construtor 
para criar objetos. Ela permite criar múltiplas instâncias de um tipo de objeto com 
propriedades e métodos específicos. Para definir uma constructor function, 
você utiliza a palavra-chave function da seguinte forma: */

function MinhaConstructorFunction(parametro1, parametro2) {
    this.propriedade1 = parametro1;
    this.propriedade2 = parametro2;
    this.metodo = function() {
      // código do método
    };
  }

  
  /*
  Aqui está uma explicação dos elementos-chave na definição acima:

MinhaConstructorFunction: Este é o nome da constructor function que você está criando. 
Por convenção, os nomes de constructor functions começam com uma letra maiúscula.

parametro1 e parametro2: Esses são os parâmetros que você pode passar quando cria uma nova 
instância da constructor function. Eles são usados para inicializar as propriedades do objeto.

this: A palavra-chave this é usada dentro da constructor function para se referir ao objeto 
que está sendo criado. É usado para definir as propriedades e métodos do objeto.

Ao criar uma instância da constructor function, você usa a palavra-chave new da seguinte forma:
  */


var meuObjeto = new MinhaConstructorFunction(valor1, valor2);


/*Isso cria um novo objeto meuObjeto com as propriedades e métodos definidos na constructor 
function.

Exemplo de uso: */

var pessoa1 = new MinhaConstructorFunction("João", 30);
var pessoa2 = new MinhaConstructorFunction("Maria", 25);

console.log(pessoa1.propriedade1); // Saída: "João"
console.log(pessoa2.propriedade2); // Saída: 25


/* As constructor functions são uma maneira comum de criar objetos em JavaScript e são 
frequentemente usadas em conjunto com o sistema de protótipos do JavaScript para definir 
métodos compartilhados entre as instâncias. No entanto, a partir do ECMAScript 2015 (ES6), 
também é possível usar a sintaxe de classe para definir classes e criar objetos em JavaScript, 
o que é uma alternativa mais moderna e legível.
*/


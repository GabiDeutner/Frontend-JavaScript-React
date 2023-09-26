/* No JavaScript, o "prototype" (protótipo) é um conceito fundamental que está relacionado 
    à herança e ao sistema de objetos do idioma. Cada objeto em JavaScript possui uma referência 
    interna para seu protótipo (também chamado de "prototype object"). 
    Essa referência ao protótipo é usada para delegar propriedades e métodos de um objeto para 
    seu protótipo, permitindo a criação de hierarquias de objetos e a compartilhamento 
    de funcionalidades entre objetos.

    Aqui estão os principais pontos sobre protótipos em JavaScript:



    > Objeto Prototype (Protótipo de Objeto): Cada objeto em JavaScript tem uma propriedade 
    interna chamada [[Prototype]] (também acessível por meio da propriedade pública __proto__ 
    em navegadores modernos). Essa propriedade faz referência ao protótipo do objeto.

    > Constructor Functions: Quando você cria um objeto por meio de uma função construtora 
    (constructor function) ou com a sintaxe de classe, o protótipo do objeto é automaticamente 
    definido como o objeto prototype dessa função construtora.

    Exemplo com constructor function: */

    

    function Pessoa(nome) {
        this.nome = nome;
    }
  
    const pessoa1 = new Pessoa('João');
  
    //Neste caso, o protótipo de pessoa1 será o objeto Pessoa.prototype.





    /* 
    > Herança de Propriedades e Métodos: Se você acessar uma propriedade ou método em um objeto 
    e essa propriedade ou método não estiver presente no objeto em si, o JavaScript procurará no 
    protótipo desse objeto e em cadeia até encontrar a propriedade ou método desejado. 
    Isso permite a herança de funcionalidades.
  
    Exemplo: */


    Pessoa.prototype.dizerOla = function() {
        console.log(`Olá, meu nome é ${this.nome}`);
    };
  
    pessoa1.dizerOla(); // Saída: "Olá, meu nome é João"


  
  /*
    > Objetos e Protótipos Pré-definidos: Muitos objetos em JavaScript têm protótipos pré-definidos, 
    como Object.prototype, Array.prototype, String.prototype, entre outros. Isso significa que 
    todos os objetos do mesmo tipo (por exemplo, todos os objetos String) compartilham 
    funcionalidades definidas em seus protótipos.

    > Modificação de Protótipos: Você pode adicionar, modificar ou remover propriedades e métodos 
    de protótipos existentes. Isso afetará todas as instâncias que herdam do mesmo protótipo.

    Exemplo de adição de método a um protótipo:
  */



    Array.prototype.dobrar = function() {
        return this.map(item => item * 2);
      };
      
      const meuArray = [1, 2, 3];
      const resultado = meuArray.dobrar(); // Resultado: [2, 4, 6]



/*
    Em resumo, os protótipos em JavaScript desempenham um papel importante na herança e permitem 
    a reutilização de funcionalidades entre objetos. Eles são uma parte fundamental do modelo de 
    objetos do JavaScript e são usados para criar hierarquias de objetos e compartilhar 
    comportamentos comuns entre eles.
*/
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



/*
    O conceito de prototype em JavaScript é fundamental para entender a herança e o 
    compartilhamento de propriedades e métodos entre objetos. 
    Vou explicar cada parte do código passo a passo:

    Definindo uma Função Construtora:
*/

    function Pessoa(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }


    /*

    Neste trecho, você está definindo uma função construtora chamada Pessoa. 
    Esta função será usada para criar novos objetos do tipo "Pessoa" com propriedades nome e idade.

    Acessando o prototype da Função Construtora:

    */

    console.log(Pessoa.prototype); // retorna o objeto


    /*
    Aqui, você está acessando o prototype da função Pessoa. O prototype de uma função 
    construtora é um objeto especial que será usado como o protótipo de todos os objetos 
    criados por essa função. É onde você pode adicionar propriedades e métodos que serão 
    compartilhados por todas as instâncias criadas a partir dessa função.

    Criando uma Instância:
    */


    const andre = new Pessoa('André', 28);


    /*
    Neste trecho, você está criando uma nova instância da função construtora Pessoa e 
    atribuindo-a à variável andre. Esta instância terá suas próprias propriedades nome e 
    idade específicas.

    Acessando o prototype de uma Instância:
    */


    console.log(andre.prototype); // undefined


    /*
    Aqui, você está tentando acessar o prototype da instância andre. No entanto, as 
    instâncias não têm uma propriedade prototype diretamente. Em vez disso, elas herdam 
    as propriedades e métodos do prototype da função construtora que as criou.

    Adicionando Métodos ao prototype da Função Construtora:
    */


    Pessoa.prototype.andar = function() {
      return this.nome + ' andou';
    }
    Pessoa.prototype.nadar = function() {
      return this.nome + ' nadou';
    }

    
    /*
    Nesses trechos, você está adicionando métodos (andar e nadar) ao prototype da função 
    construtora Pessoa. Isso significa que todas as instâncias criadas a partir de Pessoa 
    terão acesso a esses métodos, pois eles são compartilhados por todas as instâncias.

    Acessando o prototype Atualizado da Função Construtora:
    */

    console.log(Pessoa.prototype); // retorna o objeto com os novos métodos


    /*
    Aqui, você está acessando o prototype da função construtora Pessoa após adicionar os novos 
    métodos. Agora, o prototype contém os métodos andar e nadar, que podem ser compartilhados 
    por todas as instâncias criadas a partir de Pessoa.

    Em resumo, o prototype em JavaScript permite que você compartilhe propriedades e métodos 
    entre objetos criados por uma função construtora. É uma parte fundamental da herança de 
    objetos em JavaScript e é usado para economizar memória, uma vez que os métodos compartilhados 
    não precisam ser recriados para cada instância separadamente.

    */


    //Acessando Métodos e Propriedades do Protótipo:

    andre.andar(); // Chama o método "andar" do objeto "andre"
    andre.__proto__.andar(); // Também chama o método "andar", mas diretamente no protótipo



    /*
    Neste trecho, você está chamando o método "andar" de um objeto chamado andre. 
    O primeiro chamada (andre.andar()) funciona porque o objeto andre herda esse método do 
    seu protótipo (definido anteriormente). O segundo chamada (andre.__proto__.andar()) 
    também funciona, mas não é recomendado o acesso direto ao __proto__. O acesso direto 
    ao __proto__ não é aconselhável porque pode causar problemas de desempenho e legibilidade 
    no código.
    */

    // Herança de Protótipo:

    Object.prototype; // Acessando o protótipo do objeto Object
    andre.toString(); // Chamando o método "toString" que é herdado do protótipo de Object
    andre.isPrototypeOf(); // Chamando o método "isPrototypeOf" que é herdado do protótipo de Object
    andre.valueOf(); // Chamando o método "valueOf" que é herdado do protótipo de Object

    /* Neste trecho, você está acessando propriedades e métodos que são herdados do 
    protótipo de Object, que é o protótipo padrão para todos os objetos em JavaScript. 
    Isso demonstra como todos os objetos em JavaScript têm acesso a esses métodos padrão.
    */

    // Construtores Nativos:

    const pais = 'Brasil';
    const cidade = new String('Rio');

    pais.charAt(0); // Usando um método de String em uma string literal
    cidade.charAt(0); // Usando um método de String em uma instância de String
    String.prototype; // Acessando o protótipo de String


    /*
    Neste trecho, você está mostrando que os tipos de dados nativos em JavaScript, 
    como String, têm seus próprios protótipos com métodos e propriedades que podem ser 
    acessados. Você pode usar esses métodos tanto em literais de strings quanto em instâncias 
    de strings.
    */

    //Acessando Funções do Protótipo:

    const lista = document.querySelectorAll('li');
    const listaArray = Array.prototype.slice.call(lista);


    /*
    Neste trecho, você está convertendo um NodeList (retornado por querySelectorAll) 
    em um array usando o método slice do protótipo de Array. Isso mostra como você pode 
    acessar métodos do protótipo de construtores nativos para realizar operações específicas.
    */

    //Método do Objeto vs. Protótipo:

    Array.prototype.slice.call(lista); // Usando o método do protótipo de Array
    Array.from(lista); // Usando o método estático Array.from()

    Object.getOwnPropertyNames(Array); // Obtendo as propriedades do construtor Array
    Object.getOwnPropertyNames(Array.prototype); // Obtendo as propriedades do protótipo de Array


    /*
    Neste trecho, você está comparando a chamada de métodos do protótipo de Array (slice) 
    com um método estático (Array.from()) que não depende de uma instância específica. 
    Além disso, você está obtendo as propriedades do construtor Array e do seu protótipo 
    usando Object.getOwnPropertyNames.
    */

    // Entendendo o Tipo de Dados Retornado:

    Carro // Object
    Carro.marca // String
    Carro.preco // Number
    Carro.acelerar // Function
    Carro.acelerar() // Boolean
    Carro.marca.charAt // Function
    Carro.marca.charAt(0) // String


    /*
    Neste trecho, você está demonstrando como o tipo de dado retornado por uma expressão pode 
    ser determinado usando constructor.name. Cada propriedade ou método pode retornar um tipo 
    de dado diferente.

    Em resumo, o código explora vários aspectos do uso de protótipos em JavaScript, mostrando 
    como herança e propriedades/métodos compartilhados funcionam no idioma. É importante 
    entender esses conceitos para criar código eficiente e compreender o comportamento de 
    objetos em JavaScript.
    */


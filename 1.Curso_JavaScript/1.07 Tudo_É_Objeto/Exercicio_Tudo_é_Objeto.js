// EXERCÍCIOS



// nomeie 3 propriedades ou métodos de strings

//1. length: Esta é uma propriedade que permite que você obtenha o comprimento de uma string, 
//ou seja, o número de caracteres na string. Por exemplo:

let exemplo = 'Olá, mundo!';
let comprimento = exemplo.length;
console.log(comprimento); // Isso irá exibir 12

//2. charAt(index): Este método permite acessar um caractere específico em uma string, 
//com base no índice fornecido como argumento. A indexação começa em zero. Aqui está um exemplo:

let exemplo2 = 'JavaScript';
let caractere = exemplo2.charAt(3);
console.log(caractere); // Isso irá exibir "a" (caractere na posição 3)

// substring(startIndex, endIndex): Este método extrai uma parte da string com base nos índices 
//de início e fim fornecidos como argumentos. A string resultante incluirá os caracteres 
//do índice de início até um antes do índice de fim. Veja um exemplo:

let exemplo3 = "Exemplo de substring";
let sub = exemplo3.substring(8, 16);
console.log(sub); // Isso irá exibir "substring"

//Além desses métodos, o JavaScript possui muitos outros métodos úteis para manipular strings, 
//como slice(), indexOf(), replace(), toUpperCase(), toLowerCase(), entre outros. 
//Esses métodos permitem realizar várias operações em strings de forma eficiente.









// nomeie 5 propriedades ou métodos de elementos do DOM

// 1.getElementById(id): Este método permite selecionar um elemento do DOM com base em seu atributo id. 
//Ele retorna uma referência para o elemento encontrado. Aqui está um exemplo:

let elemento = document.getElementById("meuElemento");

// 2. innerHTML: Esta propriedade permite acessar ou modificar o conteúdo HTML de um elemento. 
//Você pode obter o conteúdo HTML de um elemento usando innerHTML e também definir um novo conteúdo HTML. 
//Aqui está um exemplo de como definir o conteúdo:

let meuParagrafo = document.getElementById("paragrafo");
meuParagrafo.innerHTML = "Novo conteúdo do parágrafo";

// 3. addEventListener(event, handler): Este método permite associar um ouvinte de eventos a um elemento, 
//para que você possa responder a eventos como cliques do mouse, pressionamentos de teclas, etc. 
//O método addEventListener espera o tipo de evento a ser ouvido (por exemplo, 
//"click" para cliques de mouse) e a função de manipulador que será chamada quando o evento ocorrer. 
//Aqui está um exemplo:

let meuBotao = document.getElementById("meuBotao");
meuBotao.addEventListener("click", function() {
    alert("Botão clicado!");
});

// 4. classList: Esta propriedade permite acessar as classes de um elemento como uma lista, 
//o que facilita a adição, remoção ou verificação de classes em um elemento. 
//Por exemplo, para adicionar uma classe a um elemento:

let exemplo4 = document.getElementById("elemento");
exemplo4.classList.add("minhaClasse");


// 5. style: A propriedade style permite acessar e modificar os estilos CSS de um elemento. 
// Você pode alterar o valor de propriedades CSS diretamente por meio da propriedade style. 
// Por exemplo, para definir a cor de fundo de um elemento:

let exemplo5 = document.getElementById("elemento");
exemplo5.style.backgroundColor = "blue";


//Esses são apenas alguns exemplos de propriedades e métodos que você pode usar para interagir 
//com elementos do DOM em JavaScript. O DOM oferece muitas outras funcionalidades para manipular 
//elementos, como appendChild(), removeChild(), setAttribute(), getAttribute(), entre outros.











// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V


/*
Para interagir com a área de transferência (clipboard) em JavaScript, você pode usar o objeto 
ClipboardEvent e seus métodos relacionados. No entanto, vale observar que a interação direta 
com a área de transferência requer permissões do usuário devido a preocupações com a segurança 
e a privacidade.

Um método comumente usado para interagir com o clipboard é document.execCommand("copy"). 
Aqui está um exemplo de como você pode usá-lo para copiar o conteúdo de um elemento para a 
área de transferência:
*/

// Seleciona o elemento que deseja copiar
let elementoParaCopiar = document.getElementById("meuElemento");

// Cria uma seleção na área de transferência
let selecao = window.getSelection();
let faixa = document.createRange();
faixa.selectNode(elementoParaCopiar);
selecao.removeAllRanges();
selecao.addRange(faixa);

// Copia o conteúdo selecionado para a área de transferência
document.execCommand("copy");

// Limpa a seleção
selecao.removeAllRanges();

// O conteúdo foi copiado para a área de transferência
alert("Conteúdo copiado para a área de transferência");


/*
Este código seleciona o conteúdo de um elemento com um determinado ID, cria uma seleção para 
esse conteúdo e, em seguida, usa document.execCommand("copy") para copiá-lo para a área de 
transferência. Lembre-se de que este método está em desuso e não é recomendado para uso em 
navegadores mais modernos. Para um melhor controle e segurança, é aconselhável usar a API 
Clipboard, que oferece uma maneira mais moderna e segura de interagir com a área de transferência.
*/


// SITE: https://clipboardjs.com/
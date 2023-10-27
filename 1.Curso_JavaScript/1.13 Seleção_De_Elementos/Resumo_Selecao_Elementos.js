//DOM PARA INICIANTES
//Seleção de Elementos




//ID
//getElementById seleciona e retorna elementos do DOM

// Seleciona pelo ID
const animaisSection = document.getElementById('animais');
const contatoSection = document.getElementById('contato');

// Retorna null caso não exista
const naoExiste = document.getElementById('teste');





//CLASSE E TAG
//getElementsByClassName e getElementsByTagName selecionam e retornam uma lista de elementos do DOM. 
//A lista retornada está ao vivo, significa que se elementos forem adicionados, 
//ela será automaticamente atualizada.

// Seleciona pela classe, retorna uma HTMLCollection
const gridSection = document.getElementsByClassName('grid-section');
const contato = document.getElementsByClassName('grid-section contato');

// Seleciona todas as UL's, retorna uma HTMLCollection
const ul = document.getElementsByTagName('ul');

// Retorna o primeiro elemento
console.log(gridSection[0]);






//SELETOR GERAL ÚNICO
//querySelector retorna o primeiro elemento que combinar com o seu seletor CSS.

const animais = document.querySelector('.animais');
const contato2 = document.querySelector('#contato');
const ultimoItem = document.querySelector('.animais-lista li:last-child');
const linkCSS = document.querySelector('[href^="https://"]'); 
// seleciona o primeiro elemento href que começa com "https://"
const primeiroUl = document.querySelector('ul');

// Busca dentro do Ul apenas
const navItem = primeiroUl.querySelector('li');




//SELETOR GERAL LISTA
//querySelectorAll retorna todos os elementos compatíveis com o seletor CSS em uma NodeList

const gridSection1 = document.querySelectorAll('.grid-section');
const listas = document.querySelectorAll('ul');
const titulos = document.querySelectorAll('.titulo');
const fotosAnimais = document.querySelectorAll('.animais-lista img');

// Retorna o segundo elemento
console.log(gridSection1[1]);

//Diferente do getElementsByClassName, a lista aqui é estática





//HTMLCOLLECTION VS NODELIST
//A diferença está nos métodos e propriedades de ambas. 
//Além disso a NodeList retornada com querySelectorAll é estática.

const titulo = document.querySelector('.titulo');
const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

titulo.classList.add('grid-section');

console.log(gridSectionHTML); // 4 itens
console.log(gridSectionNode); // 3 itens






//ARRAY-LIKE
//HTMLCollection e NodeList são array-like, parecem uma array mas não são. 
//O método de Array forEach() por exemplo, existe apenas em NodeList.

const gridSection2 = document.querySelectorAll('.grid-section');

gridSection2.forEach(function(gridItem, index, array) {
  gridItem.classList.add('azul');
  console.log(index) // index do item na array
  console.log(array) // a array completa
});

//É possível transformar array-like em uma Array real, utilizando o método Array.from(gridSection)
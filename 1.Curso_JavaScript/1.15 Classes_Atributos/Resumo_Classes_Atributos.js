//Classes e Atributos

//CLASSLIST
//Retorna uma lista com as classes do elemento. 
//Permite adicionar, remover e verificar se contém.

const menu = document.querySelector('.menu');

menu.className; // string
menu.classList; // lista de classes
menu.classList.add('ativo');
menu.classList.add('ativo', 'mobile'); // duas classes
menu.classList.remove('ativo');
menu.classList.toggle('ativo'); // adiciona/remove a classe
menu.classList.contains('ativo'); // true ou false
menu.classList.replace('ativo', 'inativo');





//ATTRIBUTES
//Retorna uma array-like com os atributos do elemento.

const animais = document.querySelector('.animais');

animais.attributes; // retorna todos os atributos
animais.attributes[0]; // retorna o primeiro atributo





//GETATTRIBUTE E SETATTRIBUTE
//Métodos que retornam ou definem de acordo com o atributo selecionado

const img = document.querySelector('img');

img.getAttribute('src'); // valor do src
img.setAttribute('alt', 'Texto Alternativo'); // muda o alt
img.hasAttribute('id'); // true / false
img.removeAttribute('alt'); // remove o alt

img.hasAttributes(); // true / false se tem algum atributo

//É muito comum métodos de get e set;






//READ ONLY VS WRITABLE
//Existem propriedades que não permitem a mudança de seus valores, essas são considerados 
//Read Only, ou seja, apenas leitura.

const animais2 = document.querySelector('.animais');

animais2.className; // string com o nome das classes
animais2.className = 'azul'; // substitui completamente a string
animais2.className += ' vermelho'; // adiciona vermelho à string

animais2.attributes = 'class="ativo"'; // não funciona, read-only

//Lembre-se que podemos modificar o valor de uma propriedade objeto.propriedade = ''
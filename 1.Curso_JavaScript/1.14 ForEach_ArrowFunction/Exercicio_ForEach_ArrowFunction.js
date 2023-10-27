//forEach e Arrow Function

//EXERCÍCIO

// Mostre no console cada parágrado do site

const paragrafos = document.querySelectorAll('p');

paragrafos.forEach((item, index, array) => {
    console.log(item);
});




// Mostre o texto dos parágrafos no console

const paragrafos2 = document.querySelectorAll('p');

paragrafos2.forEach((item) => {
    console.log(item.innerText);
  });





// Como corrigir os erros abaixo:

/*const imgs = document.querySelectorAll('img');

imgs.forEach(item, index => {
  console.log(item, index);
});

let i = 0;
imgs.forEach( => {
  console.log(i++);
});

imgs.forEach(() => i++);*/

// CORREÇÃO

const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);

console.log(i);


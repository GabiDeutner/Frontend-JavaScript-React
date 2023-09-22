// EXERCÍCIO

// Duplique o menu e adicione ele em copy

const menu = document.querySelector('.menu'); // selecionei o menu
const copy = document.querySelector('.copy'); // selecioonei a copy

const cloneMenu = menu.cloneNode(true); // clonei o menu e os filhos dele
copy.appendChild(cloneMenu); // adicionei o clone do menu na copy




// Selecione o primeiro DT da dl de Faq

const faq = document.querySelector('.faq'); // selecionei a faq
const primeiroDt = faq.querySelector('dt'); // dentro da faq eu selecionei o dt 
// a querySelector por default sempre seleciona o primeiro elemento




// Selecione o DD referente ao primeiro DT

const proximoDD = primeiroDt.nextElementSibling; // Dt e DD são irmãos (estão no mesmo nível)
// então seleciona o próximo irmão de DT que será um DD
console.log(proximoDD);



// Substitua o conteúdo html de .faq pelo de .animais

const animais = document.querySelector('.animais'); // selecionei animais
faq.innerHTML = animais.innerHTML; // o HTML de faq recebe o HTML de animais

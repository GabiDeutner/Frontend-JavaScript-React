//EXERCÍCIOS

/*
<section>

  <p>Lobo-cinzento (nome científico:Canis lupus) é uma espécie de mamífero canídeo do gênero Canis. 
  É um sobrevivente da Era do Gelo, originário do Pleistoceno Superior, cerca de 300 mil anos atrás. 
  É o maior membro remanescente selvagem da família canidae.</p>
  
  <p>Os lobos-cinzentos são tipicamente predadores ápice nos ecossistemas que ocupam. 
  Embora não sejam tão adaptáveis à presença humana como geralmente ocorre com as demais.</p>
  
  <p>O peso e tamanho dos lobos variam muito em todo o mundo, tendendo a aumentar proporcionalmente 
  com a latitude.</p>
  
  <p>Os lobos são capazes de percorrer longas distâncias com uma velocidade média de 10 
  quilômetros por hora e são conhecidos por.</p>

</section>

*/

// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll('p');

const totalCaracteres = Array.prototype.reduce.call(paragrafos, (acumulador, item) => {
  return acumulador + item.innerText.length;
}, 0);

console.log(totalCaracteres);
console.log(paragrafos);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function criarElemento(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe) : null;
  conteudo ? elemento.innerHTML = conteudo : null;
  return elemento; 
}

console.log(criarElemento('li', 'azul', 'Esse é o conteudo'))


// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1Titulo = criarElemento.bind(null, 'h1', 'titulo');

const cursosJS = h1Titulo('Cursos de JavaScript')
const cursosHTML = h1Titulo('Cursos de HTML')

console.log(cursosJS, cursosHTML)
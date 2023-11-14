// Arrays Parte 2 - Métodos de Arrays

let arr1 = [30, 12, 45, 34, 29]
let arr2 = []

// Fatiamento: slice

console.log(arr1.slice(0, 2))
console.log(arr1.slice(2))

// Obs.: O número final não está incluso quando coloca dois parâmetros
// Se colocar um parâmetro só, ele pega do índice até o final

// Adicionando elementos: push | unshift

console.log('Antes de adicionar:', arr2)

arr2.push(10, 20, 30)
arr2.push(40)
// o push sempre coloca os elementos no final do array

console.log('Depois de adicionar:', arr2)

// Usando o método de adição Unshift

console.log('Antes de adicionar com Unshift:', arr2)

arr2.unshift(0)
console.log('Depois de adicionar com unshift: ', arr2)
// O unshift adiciona no começo do array

// Removendo Elementos: pop | shift

console.log('Antes de remover com o pop: ', arr2)

const elementoRemovido = arr2.pop() // por padrão ele remove o último elemento do array

console.log('Depois de remover com o pop: ', arr2)
console.log('O elemento removido foi: ', elementoRemovido)
// por padrão o pop remove o último elemento

// Removendo com o shift - ele remove o primeiro elemento

console.log('Antes de remover com o shift: ', arr2)

arr2.shift()

console.log('Depois de remover com o shift: ', arr2)

// Concatenando arrays | concat
// juntar os dois arrays e transformnar em um único array

console.log('arr1', arr1)
console.log('arr2', arr2)

console.log(arr1.concat(arr2))
console.log(arr2.concat(arr1))

// Buscando elementos: indexOf | lastIndexOf

console.log(arr1)

let indiceDoElemento = arr1.indexOf(34)
// para saber qual o indice do número 34

console.log(indiceDoElemento34)

let arr3 = [1, 2, 3, 3, 5, 3]

console.log(arr3.indexOf(3))
//para saber qual o índice do elemento 3
// vai buscar pelo primeiro elemento 3 do array

console.log(arr3.lastIndexOf(3))
// último index do elemento 3 do array
// se o array tem vários elementos 3, ele pega o último


// Descobrindo a existência de um elemento: includes
console.log(arr1)

console.log(arr1.includes(10))
// vai retornar falso porque não tem 10 no array



// Invertendo arrays: reverse
console.log('arr1 normal:', arr1)

const arr1Invertido = arr1.reverse()

console.log('arr1 invertido:', arr1Invertido)


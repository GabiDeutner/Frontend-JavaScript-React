// ARRAYS

// Como criar um array?

let arr = ['Gabi', 30, 1.56, true]

// Como acessar os elementos do array
// O primeiro elemento de um array sempre é zero, nunca é 1

console.log('Primeiro elemento: ', arr[0])
console.log('Segundo elemento: ', arr[1])
console.log('Terceiro elemento: ', arr[2])
console.log('Quarto elemento: ', arr[3])


// Como obter o tamanho do array

console.log('Tamanho do array:', arr.length)

// Percorrendo arrays

for (let i = 0; i < arr.length; i++){
    console.log(arr[i])
}

// Para percorrer os elementos do array
for (let elemento of arr){
    console.log(elemento)
}

// Para percorrer os índices do array
for (let indice in arr){
    console.log(indice, arr[indice])
}



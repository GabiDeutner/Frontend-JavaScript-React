// OBJETOS

// Como criar um objeto no JavaScript

let pessoa = {
    nome: 'Gabi',
    idade: '30',
}

console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa['nome'])
console.log(pessoa.idade)

// Como adicionar um par de chave-valor?

pessoa.altura = 1.77 // adiciona altura no objeto
delete pessoa.altura // deleta altura do objeto

// Como percorrer?

for (let chave in pessoa){
    console.log(chave)
}

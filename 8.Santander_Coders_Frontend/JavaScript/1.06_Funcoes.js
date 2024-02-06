// Funções

function saudacao(){
    console.log('Hello World!')
}

saudacao()

// Como enviar parâmetros para as funções

function saudacao(){
    console.log('Hello World!')
}

saudacao()

// Função com parâmetros

function saudacao(nome){
    console.log(nome)
    console.log('Hello World!')
}

saudacao('Gabi')



// Com dois parâmetros

function saudacao(nome, param){
    console.log(nome)
    console.log(`Hello ${param}`)
}

saudacao('Gabi', 'World!')


// Com parâmetro default

function saudacao(nome, param='World!'){
    console.log(nome)
    console.log(`Hello ${param}`)
}

saudacao('Gabi')


// Retorno da Função

function soma(numero1, numero2){
    return numero1 + numero2
}

const resultado = soma(10,20)

console.log(resultado)



// função com dois retornos

function maiorDoQue50(numero){
    if (numero > 50){
        return true
    }

    return false
}


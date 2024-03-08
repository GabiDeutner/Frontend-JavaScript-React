let soma = 0


function Somar (n1, n2){
  soma = n1 + n2
  return console.log(soma)
}

Somar(1,1)



function testeVazia (){
  return console.log('testando função')
}

testeVazia ()


function PassandoUmParametro (param){
  return console.log(param)
}

PassandoUmParametro(3)




function AreaDoQuadrado (lado){
  return lado * lado
}

console.log(AreaDoQuadrado(2))


function pi (){
  return 3.14
}

console.log(pi())

let testePi = 5 * pi()

console.log(testePi)


function CalculaIMC (peso, altura){
    imc = peso / (altura ** 2)
    return imc
  }
  
  console.log(CalculaIMC(52,1.56))


  function CorFavorita (cor){
    if (cor === 'verde'){
      return console.log('você curte verde')
    } else if  (cor === 'azul'){
      return console.log('tu curtes azul')
    } else{
      return console.log('tu precisas gostar de alguma cor!')
    }
  }
  
  CorFavorita('verde')


  addEventListener('click', function(){
    console.log('clicou')
  }
  
  );


  

  function RetornandoIdade(idade){
    if(typeof idade !== 'number'){    
        return 'informe sua idade'
    } else if (idade >= 18){
      return 'maior de idade'
    } else {    
      return 'menor de idade'  
    }
}
  
  console.log(RetornandoIdade(16))
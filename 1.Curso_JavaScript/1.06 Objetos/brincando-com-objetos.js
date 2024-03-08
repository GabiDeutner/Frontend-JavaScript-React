const pessoa = {
    nome: 'Gabi',
    sobrenome: 'Deutner',
    idade: 30,
    faculdade: true,
}

console.log(pessoa.nome);
console.log(pessoa.faculdade);




const quadrado ={
    lados: 4,
    perimetro: function(lado){
       return lado * 4;
    },
    area: function(lado){
        return lado * lado;
    },
}

console.log(quadrado.lados);
console.log(quadrado.perimetro(10));
console.log(quadrado.area(10));



const quadrado2 ={
    lados: 4,
    perimetro: function(lado){
       return lado * this.lados;
    },
    area: function(lado){
        return lado * lado;
    },
}

console.log(quadrado2.lados);
console.log(quadrado2.perimetro(10));
console.log(quadrado2.area(10));




const quadrado3 ={
    lados: 4,
    perimetro(lado){
       return lado * this.lados;
    },
    area(lado){
        return lado * lado;
    },
}

console.log(quadrado3.lados);
console.log(quadrado3.perimetro(10));
console.log(quadrado3.area(10));
console.table(quadrado3);








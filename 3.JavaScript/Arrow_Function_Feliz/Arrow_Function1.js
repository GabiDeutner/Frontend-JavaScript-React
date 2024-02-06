// Função normal no JavaScript

function soma(n1,n2){
    return n1 + n2
}

console.log(soma(8,8));


// ============================================================================================= //

// 1 . Arrow Function Padrão
// Arrow function é uma função anônima, ou seja, uma função sem nome
// Para dar um nome para a Arrow Function tem que criar uma constante 
// e essa constante vai receber a Arrow Function

const soma2 = (n1,n2) => {
    return n1 + n2;
}

console.log(soma2(8,8));



// Mas pode retirar o return que funciona também, mas precisa tirar as chaves (os bigodinhos da função)

const soma3 = (n1,n2) => n1 + n2;

console.log(soma3(8,8));


// ============================================================================================= //

// 2. Arrow Function sem Parâmetros
// Existem Arrow Functions Sem Parâmetros também:


const teste = () => {
	return 'testando'
}

console.log(teste())



// Mas é possível retirar o return (e os bigodes da função - as chaves):

const teste2 = () => 'testando';

console.log(teste2())


// ============================================================================================= //

// 3. Arrow Function que só tem um Parâmetro
// Arrow Function que só possui um parâmetro

const double = (number) => {
	return number * 2;
}

console.log(double(1))



// Arrow Function sem o return e sem os bigodes:

const double2 = (number) => number * 2;

console.log(double2(1))


// Se você só tem um parâmetro você pode retirar os parênteses (ele se torna opcional):

const double3 = number => number * 2;

console.log(double3(1))


// ============================================================================================= //

// 4. Arrow Function com Dois ou mais Parâmetros

// função normal

function soma4(n1,n2){
    return n1 + n2
}

console.log(soma4(8,8));

// arrow function

const soma5 = (n1,n2) => {
    return n1 + n2;
}

console.log(soma5(8,8));

// sem return e sem bigodes

const soma6 = (n1,n2) =>  n1 + n2;

console.log(soma6(8,8));

// não pode tirar os parênteses, pois os parênteses só são opcionais se você só está passando
// apenas um parâmetro.

// ============================================================================================= //


// 5. Arrow Function com chaves
// Quando você coloca uma chave na Arrow Function, o return se torna obrigatório

const soma7 = (n1,n2) => {
    return n1 + n2;
}

// No caso abaixo, é obrigatório usar as chaves:

const sum = (year) => {
	if (year >= 18) {
	return 'Maior idade';
	} else {
	return 'Menor idade'
	}
};

console.log(sum(20));


// ============================================================================================= //

// 6. Retornando um JSON sem return

const getPerson = () => {
	return {name: 'Henri'}
};

console.log(getPerson());

// Para tirar o return
// Retirar os bigodes da função e no lugar deles colocar parênteses:

const getPerson2 = () => ({name: 'Henri'});

console.log(getPerson2());


// ============================================================================================= //

// 7. Criar uma IIFE usando Arrow Function
// usar a function init() para não vazar o escopo do arquivo
// quando você tem uma função de mesmo nome em dois arquivos diferentes e essas funções estão fazendo
// coisas diferentes, o escopo delas é global e está "vazando" porque possuem o mesmo nome
// Abaixo como resolver criando uma function init() :

function init(){
	const getPerson = () => ({name: 'Luna', eye: 'blue'});
	console.log(getPerson());
}

init();


// IIFE é uma função que ela mesma se invoca no momento de sua criação e depois ela deixa de existir
// A função IIFE só é executada uma vez que é no momento de sua criação
// Uma forma de fazer isso é envolver a função com parênteses e no final colocar () :

(function(){
	const getPerson = () => ({name: 'Luna', eye: 'blue'});
	console.log(getPerson());
})()


// Pode ser escrita assim também, com os parênteses () sendo colocados depois das chaves:

(function(){
	const getPerson = () => ({name: 'Luna', eye: 'blue'});
	console.log(getPerson());
}())


// Para usar Arrow Function, precisa ser escrito dessa forma:

(() => {
	const getPerson = () => ({name: 'Luna', eye: 'blue'});
	console.log(getPerson());
})()



// ============================================================================================= //

//8. O this dentro da Arrow Function é bem mais simples:


// A função abaixo não vai funcionar:

(() => {
	function Person() {
		this.year = 0;

		setInterval(function(){
			this.year = this.year + 1;
			console.log('Qual this?', this)
            console.log('Qual é a idade?', this.year)
		}, 1000)
	}

	const p1 = new Person()
})()


// CORREÇÃO:

(() => {
	function Person() {
        const that = this;
		that.year = 0;

		setInterval(function(){
			that.year = that.year + 1;
			console.log('Qual this?', that)
            console.log('Qual é a idade?', that.year)
		}, 1000)
	}

	const p1 = new Person()
})()


// MAS É POSSÍVEL fazer a correção usando Arrow Function:

(() => {
	function Person() {
		this.year = 0;

		setInterval(() => {
			this.year = this.year + 1;
			console.log('Qual this?', this)
			console.log('Qual é a idade?', this.year)
		}, 1000)
	}

	const p1 = new Person()
})()

// O this não é dinâmico, ele é léxico, então ele respeita o escopo de onde ele é criado
// e não respeita o escopo de onde ele é executado




// ============================================================================================= //

// Aula Feliz do Marco Bruno: https://www.youtube.com/watch?v=3EkS9-P3cIM&ab_channel=MarcoBruno

// ============================================================================================= //
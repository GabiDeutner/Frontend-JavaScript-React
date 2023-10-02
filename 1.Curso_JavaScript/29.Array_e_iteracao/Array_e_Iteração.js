/*

forEach():

O método forEach itera sobre cada elemento de uma array e aplica uma função de callback a cada 
elemento.
O callback recebe três argumentos: o item atual, o índice desse item na array e a própria array.
Não retorna um novo array, apenas itera sobre a array original.


1.map():

O método map itera sobre cada elemento de uma array e cria uma nova array com base nos resultados 
da função de callback aplicada a cada elemento.
O callback recebe os mesmos três argumentos que forEach.
Retorna uma nova array com os resultados.


2.reduce():

O método reduce itera sobre uma array e acumula os resultados da função de callback em um único 
valor (acumulador).
Pode receber um valor inicial para o acumulador como segundo argumento.
O callback recebe dois argumentos: o acumulador e o valor atual da iteração.
Retorna o valor acumulado.
reduceRight():

Semelhante ao reduce, mas começa a iterar da direita para a esquerda.



3.some():

O método some verifica se pelo menos um elemento da array satisfaz a função de callback 
(retornando true).
Retorna true se pelo menos um elemento for verdadeiro; caso contrário, retorna false.
every():

O método every verifica se todos os elementos da array satisfazem a função de callback 
(retornando true).
Retorna true se todos os elementos forem verdadeiros; caso contrário, retorna false.



4.find() e findIndex():

find retorna o primeiro elemento que satisfaz a função de callback.
findIndex retorna o índice do primeiro elemento que satisfaz a função de callback.
filter():

O método filter cria uma nova array com todos os elementos que satisfazem a função de callback.
Retorna uma nova array com os elementos filtrados.

*/
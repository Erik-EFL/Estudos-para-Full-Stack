let numbers = [5, 3];


let menor = numbers[0] // criei essa variavel inicial para que ela armazene inicialmente o tamanho do array.

for (var i = 0; i < numbers.length; i++) { // esse loop percorre o array para descobrir quantas posições há 
    if (numbers[i] < menor) { //basicamente uma pergunta que fazemos para o computador para que ele compare os valores que há dentro do array
        menor = numbers[i]; // atribui a variavel inicial o menor valor existente dentro do array
    }
}
console.log(menor); // imprime o valor atribuido a variavel inicial



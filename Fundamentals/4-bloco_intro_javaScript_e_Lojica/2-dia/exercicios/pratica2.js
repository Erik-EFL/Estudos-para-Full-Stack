let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


// exercicio 2
//some todos os valores contidos no array e imprima o resultado;

let soma = 0 //contador da posições de dentro do array

for (let i = 0 ; i < numbers.length; i++) { // loop que vai armazenar cada posição na variavel i
    soma += numbers[i] // programa que executa a coma do item de cada posição
}

console.log(soma)//imprime o resultado 


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// descubra qual o maior valor contido no array e imprima-o
//exercicio 5
let big = 0 // ira armazenar a informação do maior numero.
for (var i = 0; i < numbers.length; i++) { //verifica todas posições do array

    if (numbers[i] > big) { //verifica qual o maior numero comparando o numero de cada posições 
        big = numbers[i]; // acrescenta o maior numero a variavel big
    }
}
console.log(big);
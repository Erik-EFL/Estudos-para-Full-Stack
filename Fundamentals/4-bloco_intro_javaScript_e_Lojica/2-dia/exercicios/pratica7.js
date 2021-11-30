let numbers = [5, 9, 3, 19, 70, 8, 100, 1, 35, 27];


let small = numbers.length // ira armazenar a informação do menos numero.
for (var i = 0; i < numbers.length; i++) { //verifica todas posições do array

    if (numbers[i] < small) { //verifica qual o menos numero comparando o numero de cada posições 
        small = numbers[i]; // acrescenta o menos numero a variavel small
    }
}
console.log(small);
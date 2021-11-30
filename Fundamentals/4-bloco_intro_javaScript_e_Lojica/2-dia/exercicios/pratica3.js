let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];



// exercicio 3
// calcule e imprima a média aritmética dos valores contidos no array;

let cont = 0; 
let result = 0;

for (let i = 0 ; i < numbers.length; i++) {
    cont += numbers[i]

    result = cont / numbers.length
        
}

console.log(result)


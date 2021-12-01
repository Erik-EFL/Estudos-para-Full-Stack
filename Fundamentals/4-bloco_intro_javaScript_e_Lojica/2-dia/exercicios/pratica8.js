let numbers = []
let arrayTamanho = 50  //escolha o numero de casa dentro do array

for (var i = 0; i < arrayTamanho +1; i++) {
    let result = i
    numbers.push(result)
    // numbers += i + " "  dessa forma imprime o numero escolhido em linha
}

console.log(numbers.join()) //esse metodo join transforma o array em string

// console.log(numbers)
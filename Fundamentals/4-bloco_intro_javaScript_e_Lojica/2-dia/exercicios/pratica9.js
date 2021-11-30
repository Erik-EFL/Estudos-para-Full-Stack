let numbers = []
let arrayTamanho = 50 //escolha o numero de casa dentro do array

for (var i = 0; i < arrayTamanho +1; i++) {
    let result = i
    numbers.push(result)
    // numbers += i + " "  dessa forma imprime o numero escolhido em linha
}


for (var j = 0; j < numbers.length; j++) { //verifica no array ja criado a quantidade de numeros la dentro
     console.log(numbers[j] / 2) // imprime o valor de cada um dividido por 2
    
}


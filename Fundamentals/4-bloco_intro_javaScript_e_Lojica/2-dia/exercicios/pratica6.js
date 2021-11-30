let numbers = [70, 8, 100, 2, 1];

let impar = [] //array que armazena os numeros impares
// let impar = 0
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 1) { //detecta por numeros impares através da divisão e resto 1
        impar.push(numbers[i])// joga o numero impar para a tabela impar
        // impar++
    }


}

if (impar.length == 0) { //verifica se o array impar possui algum valor dentro
    console.log('nenhum valor ímpar encontrado') //caso não possua
} else {
    console.log(impar); // imprime o array impar caso possua algum valor dentro
}



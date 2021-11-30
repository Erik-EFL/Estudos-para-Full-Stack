let megaSenaNumbers = []; //armazena os numeros gerados

//codigo utilizado para gerar numeros aleatorios.
let firstNumber = Math.floor(Math.random()*60)+1 
let secondNumber = Math.floor(Math.random()*60)+1 
let thirdNumber = Math.floor(Math.random()*60)+1 
let fourthNumber = Math.floor(Math.random()*60)+1 
let fifthNumber = Math.floor(Math.random()*60)+1 
let sixthNumber = Math.floor(Math.random()*60)+1 

megaSenaNumbers.push(firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber) // joga os numeros aleatórios para o array 



let firstPlay = [52, 30, 15, 11, 26, 9] //  numeros da pessoa que vai jogar


let firstHit = 0 // esta variavel é responsavel por contar o numero de numeros iguais dentro do array megaSenaNumbers

for (let i=0; i<megaSenaNumbers.length; i++) { // verifica os numeros dentro de cada array para ver se são iguais
    for (let n = 0 ; n < firstPlay.length; n++) {
        if (megaSenaNumbers[i] === firstPlay[n]) {
            firstHit ++ //adiciona mais um a variavel firstHit
        }
    }
}


//retorno dos resultados
console.log(`Numeros sorteados ${megaSenaNumbers}`)
console.log(`Nossas tentativas ${firstPlay}`)
console.log(`Quantidade de numeros acertados  ${firstHit}`)
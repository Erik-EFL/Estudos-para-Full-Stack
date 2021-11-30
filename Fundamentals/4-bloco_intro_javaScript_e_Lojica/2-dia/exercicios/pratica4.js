let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//exercicio 4
//Com o mesmo código do exercício anterior, caso o valor 
//final seja maior que 20, imprima a mensagem: 
//"valor maior que 20". Caso não seja, imprima a mensagem: 
//"valor menor ou igual a 20";

//exercicio 4

let cont = 0; 
let result = 0;

for (let i = 0 ; i < numbers.length; i++) {
    cont += numbers[i]

    result = cont / numbers.length
        
}

 let compare = ""

compare = (result > 20 ? `O valor ${result} é maior que 20` : `O valor é menor ou igual a 20`)

console.log(compare)
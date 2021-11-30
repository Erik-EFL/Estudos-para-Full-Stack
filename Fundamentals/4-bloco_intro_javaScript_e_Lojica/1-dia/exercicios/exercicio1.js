function calculadora (a, b, operador) {
    let result = ""
    result = (operador == "+" ? a + b : operador == "-" ? a - b 
             : operador == "*" ? a * b : operador == "/" ? a / b : operador == "%" ? a % b 
             : "Insira um operador");
    console.log(result);
}

calculadora(15, 20, "*")
function identificador(num) {
    let result = ""
    result = (num > 0 ? "Positivo" : num < 0 ? "Negativo" : "Zero")
    console.log(result)
}

identificador(5)
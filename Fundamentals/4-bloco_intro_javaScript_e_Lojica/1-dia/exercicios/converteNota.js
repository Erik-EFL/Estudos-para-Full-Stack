function convert (nota) {
    let result = ""
    result = (
        nota > 100 ? "Erro! Nota a nota máxima é 100, insira uma nota valida!":
        nota >= 90 ? "A":
        nota >= 80 ? "B":
        nota >= 70 ? "C":
        nota >= 60 ? "D":
        nota >= 50 ? "E":
        "F"
    )
    console.log(result)
}

convert(90)
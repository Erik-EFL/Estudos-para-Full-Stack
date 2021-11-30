function calculoTri (a, b, c) {
    let calculo = a + b + c
    calculo = (a >= 0 && b >= 0 && c >= 0 && calculo == 180 ? true : false)
    console.log(calculo)
}

calculoTri( 60, 60, 60)
function pecas (nome) {
    const peca = nome.toLowerCase();
    let result = ""
    result = ( peca == "peão" ? "Primeiro movimento pode ser 1 ou 2 casa papa frente, e para derrubar outra peça apenas para diagonal"
             : peca == "torre" ? "Se move na vertical e horizontal" 
             : peca == "cavalos" ? "Se move em L e pode pular outras peças"
             : peca == "bispos" ? "Se movimenta em diagonal, não pode pular outras peças"
             : peca == "dama" ? "Pode se mover em qualquer direção"
             : peca == "rainha" ? "Pode se mover em qualquer direção"
             : peca == "rei" ? "Pode se mover em qualquer direção apenas uma casa"
             : "Essa peça não existe! Digite uma peça valida" )

    console.log(result)
}

pecas("Peão")
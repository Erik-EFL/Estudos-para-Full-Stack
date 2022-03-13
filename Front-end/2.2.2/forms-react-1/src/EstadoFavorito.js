import React, { Component } from "react";


class EstadoFavorito extends Component {
  render() {
    /* value e handleChange são props passada através da function handleChange ára este documento */
    const { value, handleChange } = this.props;

    /* Para inserir informação sobre erro no preenchimento ou qualquer outro: */
    let error = undefined;
    if (value.length > 140) error = "O texto deve ter até 140 caracteres"

    return (
      <label>
        Diga qual é o seu Estado favorito do Brasil ou do React, você quem sabe!
        {/* O valor é passado para o form através da função handleChange no onChange
        a partir de ai o valor digitado no input é passado para o componente pai e 
        renderizado para o usuário no navegador.
        */}
        <textarea name="estadoFavorito" value={value} onChange={handleChange} />
        {/* para exibir o erro faça da seguinte forma */}
        <span> { error ? error : '' } </span>
        {/*  assim caso a condição seja atendida a msg sera exibida na tela
        informando ao user oque esta errado.
        */}
      </label>
    );
  }
}

export default EstadoFavorito;

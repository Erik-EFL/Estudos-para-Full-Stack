import React from 'react';
import './App.css';


class App extends React.Component {
/*   function do react que pode ser estendida dentro do componente
  para poder extender é necessário usar a function super() abaixo. */
  constructor() {
    /*  A função `super()` é chamada para garantir que a lógica interna do 
    React rode **antes** da sua. Se não for assim, o código não funcionará */
    super(); 
    /*  para que o this funciona é necessário o atribuir a function handleClick 
    desta forma */
    this.handleClick = this.handleClick.bind(this);

    console.log('Componente sendo construído');
  }

  handleClick() {
    /*  O this não existe dentro desta função, pois ela não nã esta recebendo 
    a logica interna do react, então o ks não permite que ela a chame, pois 
    o mesmo não entende a função da forma que o react entende */
    console.log(this);
    console.log('Clicou no botão!')
  }
  render() {
    /*  mostra o retorna da function this */
    console.log(this);
    /* No React, precisamos dizer explicitamente que queremos uma
    função da nossa classe através da sintaxe `this.minhaFuncao` 
    para usá-la num evento */
    return (
      <>
      <span>Meu componente!</span>
      <button onClick={this.handleClick}>Meu botão</button>
      </>
    )
  }
}

export default App;
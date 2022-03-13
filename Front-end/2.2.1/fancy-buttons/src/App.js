import React from 'react';
import './App.css';


class App extends React.Component {
/*   function do react que pode ser estendida dentro do componente
  para poder extender é necessário usar a function super() abaixo. */
  constructor(props) {
    /*  A função `super()` é chamada para garantir que a lógica interna do 
    React rode **antes** da sua. Se não for assim, o código não funcionará */
    super(props); 
    /*  para que o this funciona é necessário o atribuir a function handleClick através do Bind() 
    caso isso não deja feito o this que esta no botão retornara undefined.
    Isso deve ser feito para qualquer function que seja necessário o uso do this */
    this.state = {isPress: true};
    this.handleClickOne = this.handleClickOne.bind(this);
    this.handleClickTwo = this.handleClickTwo.bind(this);
    this.handleClickTree = this.handleClickTree.bind(this);

    console.log('Componente sendo construído');
  }

  handleClickOne() {
    /* O this não existe dentro desta função, pois ela não nã esta recebendo 
    a logica interna do react, então o ks não permite que ela a chame, pois 
    o mesmo não entende a função da forma que o react entende */
    console.log(this);
    console.log('Clicou no Meu botão!')
  }

  handleClickTwo() {
    /* O this não existe dentro desta função, pois ela não nã esta recebendo 
    a logica interna do react, então o ks não permite que ela a chame, pois 
    o mesmo não entende a função da forma que o react entende */
    this.setState(prevState => ({
      isPress: !prevState.isPress
    }));
    // console.log(this);
    console.log('Clicou no Seu botão!')
  }

  handleClickTree(event) {
    /* O this não existe dentro desta função, pois ela não nã esta recebendo 
    a logica interna do react, então o ks não permite que ela a chame, pois 
    o mesmo não entende a função da forma que o react entende */
    event.preventDefault();
    console.log(this);
    console.log('Clicou no Nosso botão!')
  }

  render() {
    /*  mostra o retorna da function this */
    console.log(this);
    /* No React, precisamos dizer explicitamente que queremos uma
    função da nossa classe através da sintaxe `this.minhaFuncao` 
    para usá-la num evento */
    return (
      <>
      <button className='meu' onClick={this.handleClickOne}>Meu botão</button>
      <button className='seu' onClick={this.handleClickTwo}>
        {this.state.isPress ? "Nosso btn" : "btn de ng"}
      </button>

      <form onSubmit={this.handleClickTree}>
        <button type='submit'>Nosso botão</button>
      </form>
      
      </>
    )
  }
}

export default App;
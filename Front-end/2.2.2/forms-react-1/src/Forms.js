import React, { Component } from "react";
import EstadoFavorito from "./EstadoFavorito";
import './App.css';

class Forms extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: "",
      name: "",
      email: false,
    };
  }

  handleChange({ target }) {
    //
    const { name } = target;

    const value = target.type === "checkbox" ? target.checked : target.value;
    //
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className="form-container">
        <h1>
          Estudos e React: ferramenta de desenvolvimento incrível ou reagindo a
          regionalismo?
        </h1>
        <form className="form">
          <EstadoFavorito
            /* value e handleChang são props 
            que passamos para o component EstadoFavorito através de uma função
            chamada handleChange e recebemos esse valor através do callback na 
            no componente estado favorito.
            */
            value={this.state.estadoFavorito}
            handleChange={this.handleChange}
          />
          <label>
            Nome
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>

          <label>
            E-mail
            <input
              type="checkbox"
              name="email"
              checked={this.state.email}
              onChange={this.handleChange}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default Forms;

import React from "react";
import "./App.css";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: start;
  padding-top: 50px;
`;

const CardUsuario = styled.div`
  border: 1px solid black;
  padding: 8px;
`
export default class App extends React.Component {
  state = {
    nameInput: "",
    ageInput: 0,
    emailInput: "",
    usuarios: [],
  };

  onChangeName = (event) => {
    this.setState({ nameInput: event.target.value });
  };

  onChangeAge = (event) => {
    this.setState({ ageInput: event.target.value });
  };

  onChangeEmail = (event) => {
    this.setState({ emailInput: event.target.value });
  };
  //spread operator
  onClickAdd = () => {
    const novaLista = [...this.state.usuarios];
    const novaPessoa = {
      nome: this.state.nameInput,
      idade: this.state.ageInput,
      email: this.state.emailInput,
    };
    novaLista.push(novaPessoa);
    this.setState({ usuarios: novaLista });
    
  };

  componentDidUpdate(prevProps, prevState) {
    if(prevState.nameInput === this.state.nameInput) {
      localStorage.setItem("usuarios", JSON.stringify(this.state.usuarios))
    }
  }

  // onClickAutoFill = () => {
  //   const dadosUsuario = localStorage.getItem("usuario")
  //   const dadosConvertidos = JSON.parse(dadosUsuario)
  //   this.setState({nameInput: dadosConvertidos[0].nome })
  //   this.setState({ageInput: dadosConvertidos[0].idade})
  //   this.setState({emailInput: dadosConvertidos[0].email})
  // }

  componentDidMount() {
    const usuarios = localStorage.getItem("usuarios")
    if(usuarios) {
      const dadosUsuario = localStorage.getItem("usuarios")
      const dadosConvertidos = JSON.parse(dadosUsuario)
      this.setState({nameInput: dadosConvertidos[0]?.nome })
      this.setState({ageInput: dadosConvertidos[0]?.idade})
      this.setState({emailInput: dadosConvertidos[0]?.email})
    }
    
  }

  //elvis operator
  render() {.
    return (
      <Container className="App">
        <input
          placeholder={"nome"}
          value={this.state.nameInput}
          onChange={this.onChangeName}
        />
        <input
          type={"number"}
          min={0}
          placeholder={"idade"}
          value={this.state.ageInput}
          onChange={this.onChangeAge}
        />
        <input
          placeholder={"email"}
          value={this.state.emailInput}
          onChange={this.onChangeEmail}
        />
        <button onClick={this.onClickAdd}>Adicionar pessoa</button>
        {/* <button onClick={this.onClickAutoFill}>Preencher dados automaticamente</button> */}

        <div>{this.state.usuarios.map((pessoa, index) => {
          return (
            <CardUsuario key={index}>
              <p>{pessoa.nome}</p>
              <p>{pessoa.idade}</p>
              <p>{pessoa.email}</p>
            </CardUsuario>
          )
          
        })}</div>
      </Container>
    );
  }
}

import axios from 'axios'
import React from 'react'
import styled from 'styled-components'

export const Botao = styled.div`
  display: flex;
  background-color: pink;
  flex-direction: column;
  border: 4px solid purple;
  border-radius: 50px;
  padding: 30px;
  margin: 0 auto;
  width: 400px;
  height: 400px;
  gap: 10px;
  align-items: center;
  justify-content: center;
  color: white;
  

  input {
    border: 5px solid purple;
    border-radius: 30px;
   
  }

  h2 {
    background-color: lightcoral;
    border: 4px solid purple;
    border-radius: 30px;
    width: 150px;
    height: 30px;
    cursor: pointer;
    display: flex;
     margin-top: 40px; 
    justify-content: center;
    align-items: center;
  }

  /* button{
  
    border: 5px solid red;
  } */
`
const CadastrarBotao = styled.div`
  background-color: lightcoral;
  border: 4px solid purple;
  border-radius: 30px;
  width: 100px;
  height: 30px;
  cursor: pointer;
  display: flex;
  margin-top: 40px;
  font-weight: bold;
  justify-content: center;
    align-items: center;
    color: white;
`

const IrLista = styled.div`
  :hover {
    border: 5px solid pink;
    border-radius: 30px;
}
  color: white;
  background-color: lightcoral;
  font-weight: bold;
  transform: scale(1);
  cursor: pointer;
  border: 4px solid purple;
  border-radius: 30px;
  width: 300px;
  height: 50px;
  justify-content: center;
    align-items: center;
    display: flex;
    font-size: 25px;
`

const Main = styled.div`
height: 100vh;
padding: 20px;
`

export default class TelaCadastro extends React.Component {
  state = {
    nome: '',
    email: ''
  }
  handleNome = event => {
    this.setState({ nome: event.target.value })
  }

  handleEmail = event => {
    this.setState({ email: event.target.value })
  }

  fazerCadastro = () => {
    const url =
      'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
    const body = {
      name: this.state.nome,
      email: this.state.email
    }

    axios
      .post(url, body, {
        headers: {
          Authorization: 'larissa-utermohl-ailton'
        }
      })
      .then(res => {
        console.log(res)
        alert('Usuario cadastrado com sucesso')
        this.setState({ nome: '', email: '' })
      })
      .catch(err => {
        alert(err.response.data.message)
      })
  }
  render() {
    return (

      <Main>

      <Botao>
        <IrLista onClick={this.props.irParaLista}>
          Ir para Lista de Usuários </IrLista>
        <h2>Cadastro</h2>
        <input
          placeholder={'Nome'}
          value={this.state.nome}
          onChange={this.handleNome}
        />
        <input
          placeholder={'Email'}
          value={this.state.email}
          onChange={this.handleEmail}
        />
        <CadastrarBotao onClick={this.fazerCadastro}>Cadastrar</CadastrarBotao>
      </Botao>
      </Main>
    )
  }
}

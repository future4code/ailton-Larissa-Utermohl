import React from 'react'
import axios from 'axios'
import styled from 'styled-components'


const CardUsuario = styled.div`

  align-items: center;
  padding: 10px;
  margin: 10px;
  width: 200px;
  display: flex;
  justify-content: space-between;


`
const BotaoVermelho = styled.button`
  background-color: lightcoral;
  border: 4px solid purple;
  border-radius: 30px;
  width: 200px;
  height: 50px;
  cursor: pointer;
  display: flex;
  margin-top: 40px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  color: white;

`;

const TextoLista = styled.div`
display: flex;
justify-content: center; 
flex-direction: column;
align-items: center;
color: black;



`

export const Botao2 =styled.div`
  display: flex;
  flex-direction: column;
  border: 4px solid pink;
  border-radius: 10px;
  box-shadow: 1 1 8px black;
  padding: 20px;
  margin: 15px;
  width: 300px;
  gap: 10px;
  align-items: center;
  justify-content: center;
 
  `

export default class TelaListaUsuarios extends React.Component {
  state = {
    usuarios: []
  }
  componentDidMount() {
    this.pegarUsuarios()
  }

  pegarUsuarios = () => {
    const url =
      'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
    axios
      .get(url, {
        headers: {
          Authorization: 'larissa-utermohl-ailton'
        }
      })
      .then(res => {
        this.setState({ usuarios: res.data })
      })
      .catch(err => {
        alert('Erro! Tente novamente')
      })
  }

  deletarUsuario =(id) => {
    const url=`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
  axios.delete(url, {
    headers:{
    Authorization: "larissa-utermohl-ailton"
  }
  })
  .then((res) => {
  alert ("Usuario deletado com sucesso")
  this.pegarUsuarios()
})
  .catch((err) => {
    alert ("Erro!Tente novamente")
    
})
}

  render() {
    const listaUsuarios = this.state.usuarios.map((user) => {
      return  (
      <Botao2>
      <CardUsuario key={user.id}>
        {user.name}
        <button onClick={() => this.deletarUsuario(user.id)}>X</button>
      </CardUsuario>
      </Botao2>)
    })
    return (
      <TextoLista>
        <BotaoVermelho onClick={this.props.irParaCadastro}>Ir para Cadastro</BotaoVermelho>
        <h2>Lista de Usuários</h2>
        {listaUsuarios}
      </TextoLista>
    )
  }
}

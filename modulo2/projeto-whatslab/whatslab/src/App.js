import React from 'react'
import styled from 'styled-components'
import Botao from './Components/Botao'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border:5px solid black;
  height: 100vh;
  width: 500px;
  background-color: black;
  margin: 0 auto;
`

const Header = styled.header`
  background-color: black;
  height: 40px;
  width: 100%;
  position: relative;
  text-align: center;
  color: white;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
 
  
`
const Main = styled.main`
display: flex;
  background-color: grey;
  height: 100%;
  width: 100%;
`
const Footer = styled.footer`
  background-color: light-grey;
  justify-content: space-around;
  align-items: center;
  display: flex;
  height: 80px;
  width: 100%;
`


class App extends React.Component {
  state = {
    inputUsuario: '',
    inputMensagem: '',
    historicoDeMensagem:[]
  }
  onChangeUsuario = (event) => {
    console.log(event.target.value)
    this.setState({
      inputUsuario: event.target.value
    })
  }
  onChangeMensagem = event => {
    console.log(event.target.value)
    this.setState({
      inputMensagem: event.target.value
    })
  }
  enviarMensagem = () => {
    let arrayMensagem = [...this.state.historicoDeMensagem]
    arrayMensagem.push({
      usuario: this.state.inputUsuario,
      mensagem: this.state.inputMensagem
    })
    this.setState({ historicoDeMensagem: arrayMensagem })
  }

  render() {
    const arrayCardMensagem = this.state.historicoDeMensagem.map(
      (item, index) => {
        return (
          <div key={index}>
            <p>
              {item.usuario}: {item.mensagem}
            </p>
          </div>
        )
      }
    )
    return (
      <Container>
        <Header>
          <p>Whats Lab</p>
        </Header>

        <Main>{arrayCardMensagem}</Main>

        <Footer>
          <Botao
            valorUsuario={this.state.inputUsuario}
            valorMensagem={this.state.inputMensagem}
            aoMudarUsuario={this.onChangeUsuario}
            aoMudarMensagem={this.onChangeMensagem}
            aoEnviar={this.enviarMensagem}
          ></Botao>
        </Footer>
      </Container>
    )
  }
}

export default App

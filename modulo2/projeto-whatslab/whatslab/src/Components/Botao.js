import React, { Component } from 'react'
import styled from 'styled-components'

const InputUsuario= styled.input`
width: 100px;

`

export default class Botao extends Component {
  render() {
    return (
      <div>
        <InputUsuario value={this.props.valorUsuario} onChange={this.props.aoMudarUsuario}>

        </InputUsuario>

        <input value={this.props.valorMensagem} onChange={this.props.aoMudarMensagem}>

        </input>

        <button onClick={this.props.aoEnviar}>
        Enviar
        </button>
      </div>
    )
  }
}

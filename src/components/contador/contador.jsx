import React, { Component } from 'react';
import './contador.scss'

import Display from './display'
import PassoForm from './passoForm'
import Button from './buttonPasso'


export default class Contador extends Component {

  constructor(props) {
    super(props)
        
    this.state = {
      passo: this.props.passo || 1,
      valor: this.props.valor || 0
    }
  }

  onInc = () => {
    this.setState({
      valor: this.state.valor + this.state.passo
    })
  }

  onDec = () => {
    this.setState({
      valor: this.state.valor - this.state.passo
    })
  }


  mudarPasso = (novoPasso) => {
    this.setState({
      passo: novoPasso
    })
  }


  render() {
    return(
      <div>
        <h2>Contador</h2>
        <PassoForm passo={this.state.passo}
          onPassoChange={this.mudarPasso}
        />
         
        <Display valor={this.state.valor}/>

        <Button onInc={this.onInc} onDec={this.onDec} />

      </div>
    )
  }
}
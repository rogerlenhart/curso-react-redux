import './Contador.css'
import Display from './Display'
import Botoes from './Botoes'
import PassoForm from './PassoForm'
import React, { Component } from 'react'

class Contador extends Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5,
    }

    inc = () => {
        this.setState({
            numero : this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            numero : this.state.numero - this.state.passo
        })
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }

    render() {
        return (
            <div className='Contador'>
                <Display numero={this.state.numero}></Display>
                <PassoForm passo={this.state.passo} setPasso={this.setPasso}></PassoForm>
                <Botoes setInc={this.inc} setDec={this.dec}/> 
            </div>
        )
    }
}

export default Contador
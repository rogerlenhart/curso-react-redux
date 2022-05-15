import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'

import './App.css'

export default () => 
    <div className="App">
        <h1>-=- Fundamentos React -=-</h1>

        <div className="Cards">
            <Card titulo="#04 - Desafio Aleatório" color='#FB8500'>
                <Aleatorio min={1} max={5}/>
            </Card>

            <Card titulo="#03 - Fragmento" color='#FFB703'>
                <Fragmento />
            </Card>

            <Card titulo="#02 - Com Parâmetro">
                <ComParametro
                    aluno="Flávio"
                    nota={9.3}
                />
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#00BCD4">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>

    
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'

export default _ =>
    <div id="app">
        <h1>Fundamentos React</h1>
        <Aleatorio min={1} max={100}/>
        <Fragmento />
        <ComParametro
            titulo="Fundamentos React 2"
            aluno="Róger Lenhart"
            nota={9.3}
        />
        <Primeiro></Primeiro>
    </div>
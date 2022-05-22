import React from 'react'

import Card from './components/layout/Card'

import Contador from "./components/contador/Contador"
import Input from "./components/formulario/Input"
import IndiretaPai from './components/comunicacao/IndiretaPai'
import DiretaPai from './components/comunicacao/DiretaPai'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import ParOuImpar from './components/condicional/ParOuImpar'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Aleatorio from './components/basicos/Aleatorio'
import Fragmento from './components/basicos/Fragmento'
import ComParametro from './components/basicos/ComParametro'
import Primeiro from './components/basicos/Primeiro'

import './App.css'

export default () => 
    <div className="App">
        <h1>-=- Fundamentos React -=-</h1>

        <div className="Cards">
            <Card titulo="#12 - Contador">
               <Contador numeroInicial={10}></Contador>
            </Card>

            <Card titulo="#11 - Componente Controlado" color='#00BCD4'>
                <Input></Input>
            </Card>

            <Card titulo="#10 - Comunicação Indireta" color='#CF68E4'>
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo="#09 - Comunicação Direta" color='#FB8500'>
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="#08 - Renderização Condicional" color='#FFB703'>
                <ParOuImpar numero={21}/>
                <UsuarioInfo usuario={{ nome: 'Fernando' }}/>
            </Card>

            <Card titulo="#07 - Desafio Repetição">
                <TabelaProdutos/>
            </Card>

            <Card titulo="#06 - Repetição" color='#00BCD4'>
                <ListaAlunos/>
            </Card>

            <Card titulo="#05 - Componente com Filhos" color='#CF68E4' >
                <Familia sobrenome="Lenhart">
                    <FamiliaMembro nome="Róger" />
                    <FamiliaMembro nome="Elisabete" />
                    <FamiliaMembro nome="Harry" />
                </Familia>
            </Card>

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

    
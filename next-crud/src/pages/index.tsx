import { useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
  const isTabelaVisivel = visivel === 'tabela'

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 45, '2'),
    new Cliente('Carlos', 23, '3'),
    new Cliente('Pedro', 54, '4'),
  ]

  function clienteSelecionado(cliente: Cliente){
    setCliente(cliente)
    setVisivel('form')
  }

  function clienteExcluido(cliente: Cliente){
    console.log(cliente)
  }
  
  function salvarCliente(cliente: Cliente){
    console.log(cliente)
    setVisivel('tabela')
  } 

  function novoCliente(){
    setCliente(Cliente.vazio())
    setVisivel('form')
  } 

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-slate-900 text-white
    `}>
      <Layout titulo="Cadastro Simples"
        botao={isTabelaVisivel ? (
          <Botao
            onClick={novoCliente}>
            Novo Cliente
          </Botao>
        ) : ''}
      >
        {isTabelaVisivel ? (
          <Tabela clientes={clientes}
            clienteSelecionado={clienteSelecionado}
            clienteExcluido={clienteExcluido}
          />
        ) : (
          <Formulario
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={() => setVisivel('tabela')}
          />
        )}
      </Layout>
    </div>
  )
}

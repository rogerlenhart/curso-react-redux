import Botao from "../components/Botao";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {
  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 45, '2'),
    new Cliente('Carlos', 23, '3'),
    new Cliente('Pedro', 54, '4'),
  ]

function clienteSelecionado(cliente: Cliente){
  console.log(cliente.nome)
}

function clienteExcluido(cliente: Cliente){
  console.log(cliente.nome)
}

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-slate-900 text-white
    `}>
      <Layout titulo="Cadastro Simples"
        botao={<Botao>Novo Cliente</Botao>}
      >
        <Tabela clientes={clientes}
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}
        />
      </Layout>
    </div>
  )
}

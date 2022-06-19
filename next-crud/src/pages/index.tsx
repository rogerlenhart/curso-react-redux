import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import useClientes from "../hooks/useClientes";

export default function Home() {
  const {
    cliente,
    clientes,
    excluirCliente,
    salvarCliente,
    selecionarCliente,
    novoCliente,
    tabelaVisivel,
    exibirTabela
  } = useClientes()
  
  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-slate-900 text-white
    `}>
      <Layout titulo="Cadastro Simples"
        botao={tabelaVisivel ? (
          <Botao
            onClick={novoCliente}>
            Novo Cliente
          </Botao>
        ) : ''}
      >
        {tabelaVisivel ? (
          <Tabela clientes={clientes}
            clienteSelecionado={selecionarCliente}
            clienteExcluido={excluirCliente}
          />
        ) : (
          <Formulario
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={exibirTabela}
          />
        )}
      </Layout>
    </div>
  )
}

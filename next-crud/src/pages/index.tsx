import Layout from "../components/Layout";

export default function Home() {
  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-slate-900 text-white
    `}>
      <Layout titulo="Cadastro Simples">
        <span>Conteudo</span>
      </Layout>
    </div>
  )
}

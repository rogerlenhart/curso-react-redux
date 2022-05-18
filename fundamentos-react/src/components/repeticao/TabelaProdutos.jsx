import './TabelaProdutos.css'
import React from 'react'
import produtos from '../../data/produtos'

export default props => {
    const tabelaProdutos = produtos.map((produto, i) => {
        return (
            <tr key={produto.id} className={i % 2 == 0 ? 'Par' : ''}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>R$ {produto.preco.toFixed(2).replace('.', ',')}</td>
            </tr>
        )
    })

    return (
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {tabelaProdutos}
                </tbody>
            </table>
        </div>
    )
}
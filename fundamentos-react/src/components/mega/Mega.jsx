import React, {useState} from 'react'
import './Mega.css'

export default props => {
    function gerarNumerosMegasena(qtde) {
        const numeros = new Set()
        while (numeros.size < qtde) {
            let num = parseInt(Math.random() * 60) + 1
            numeros.add(num)
        }
        
        return Array.from(numeros).sort((a, b) => a - b)
    }

    const [qtde, setQtde] = useState(props.qtde || 6) 
    const numerosIniciais = gerarNumerosMegasena(qtde)
    const [numeros, setNumeros] = useState(numerosIniciais) 

    return (
        <div className="Mega">
            <h2>Mega</h2>
            <h3>{numeros.join(' ')}</h3>
            <div>
                <label htmlFor="">Quantidade</label>
                <input
                    min="6"
                    max="15"
                    type="number"
                    value={qtde}
                    onChange={(e) => {
                        setQtde(+e.target.value)
                        setNumeros(gerarNumerosMegasena(+e.target.value))
                    }}
                />
            </div>
            <button onClick={ _ => setNumeros(gerarNumerosMegasena(qtde))}>
                Gerar Números
            </button>
        </div>
    )
}
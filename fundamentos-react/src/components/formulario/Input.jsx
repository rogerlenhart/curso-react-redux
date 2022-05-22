import React, { useState } from 'react'
import "./Input.css"

export default props => {
    const [valor, setValor] = useState('Inicial')
    
    function quandoMudar(e) {
        setValor(e.target.value)
    }

    return(
        <div className="Input">
            <p>Valor: <strong>{valor}</strong></p>
            <div>
                <div>
                    <label htmlFor="controlado">Controlado: </label>
                    <input name='controlado' value={valor} onChange={quandoMudar}/>
                </div>
                <div>
                    <label htmlFor="leitura">Somente leitura: </label>
                    <input name='leitura' value={valor} readOnly/>
                </div>
                <div>
                    <label htmlFor="nao-controlado">Não controlado: </label>
                    <input name='nao-controlado' value={undefined} />  
                </div>
            </div>
        </div>
    )
}
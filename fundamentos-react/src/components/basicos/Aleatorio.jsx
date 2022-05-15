import React from 'react'

export default props => {
    const {min, max} = props
    const aleatorio = parseInt(Math.random() * (max - min)) + min
    return (
        <div>
            <p>
                Número aleatório entre <strong>{ min }</strong> e <strong>{ max - 1 }</strong>
            </p>
            <p>
            Resultado: <strong>{ aleatorio }</strong> 
            </p>
        </div>
    )
}
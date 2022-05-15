import React from 'react'

export default function ComParametro(props){
    const status = props.nota >= 7 ? 'Aprovado' : 'Recuperação'
    return (
        <div>
            <p>
                <strong>{ props.aluno } </strong>
                tem nota
                <strong> { props.nota } </strong>
                e foi
                <strong> { status }</strong>!
            </p>
        </div>
    )
}
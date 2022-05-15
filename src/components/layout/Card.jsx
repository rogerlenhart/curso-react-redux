import './Card.css'
import React from 'react'

export default props => {
    const { titulo, children, color } = props

    const titleStyle = {
        backgroundColor: color || '#0B7DB7'
    }

    return (
        <div className='Card'>
            <div className="Title" style={titleStyle}><h2>{titulo}</h2></div>
            <div className="Content">
                {children}
            </div>
        </div>
    )
}
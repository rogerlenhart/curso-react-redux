import React, { cloneElement } from 'react'


export default props => {

    return (
        <div>
            {/**
                React.Children.map(props.children, child => {
                    return cloneElement(child, props)
                })
            */}
            {props.children.map((child, i) => {
                return cloneElement(child, { ...props, key: i})
            })}
        </div>
    )
}
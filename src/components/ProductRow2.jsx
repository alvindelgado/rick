import React from 'react'

import '../styles/ProductRow2.css'

function ProductRow2(props) {
    const name = props.name
    const type = props.type
    const dimension = props.dimension
    
    return (
        <div className='product-row2'>
            <span>{type}</span> 
            <span>{name}</span>
            <span>{dimension} </span>
        </div>
    )
}

export { ProductRow2 }
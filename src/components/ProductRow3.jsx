import React from 'react'

import '../styles/ProductRow2.css'

function ProductRow3(props) {
    const name = props.name
    const air_date = props.air_date
    const episode = props.episode
    
    return (
        <div className='product-row2'>
            <span>{episode}</span> 
            <span>{name}</span>
            <span>{air_date} </span>
        </div>
    )
}

export { ProductRow3  }
import React from 'react'
import {  ProductRow3 } from './ProductRow3'
import '../styles/CategoryProductRow.css'

function CategoryProductRow3(props) {

    const title = props.title
    const list = props.list
    return (
        <div className='category-container'>
            <div className='category-title'>
                {title}
            </div>
            <div className='category-body'>
                {list.map((epis) =>
                    <ProductRow3
                        name={epis.name}
                        air_date={epis.air_date}
                        key={epis.name}
                        episode={epis.episode}
                    />)}

            </div>
        </div>
    )
}

export { CategoryProductRow3 }
import React from 'react'
import {  ProductRow2 } from './ProductRow2'
import '../styles/CategoryProductRow.css'

function CategoryProductRow2(props) {

    const title = props.title
    const list = props.list
    return (
        <div className='category-container'>
            <div className='category-title'>
                {title}
            </div>
            <div className='category-body'>
                {list.map((location) =>
                    <ProductRow2
                        name={location.name}
                        type={location.type}
                        key={location.name}
                        dimension={location.dimension}
                    />)}

            </div>
        </div>
    )
}

export { CategoryProductRow2 }
import React, { useState, useEffect } from 'react'
import { CategoryProductRow } from './CategoryProductRow'
import { CategoryProductRow2 } from './CategoryProductRow2'
import { CategoryProductRow3 } from './CategoryProductRow3'

import '../styles/ProductTable.css'


function ProductTable() {
    const [dataCharacters, setDataCharacters] = useState([])
    const [dataLocation,setDataLocation]=useState([])
    const [dataEpisode,setDataEpisode]=useState([])
    const fetchCharacters = async () => {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const loc=await fetch('https://rickandmortyapi.com/api/location')
        const epi=await fetch('https://rickandmortyapi.com/api/episode')
        response.json().then(response => setDataCharacters(response.results))
        loc.json().then(loc=> setDataLocation(loc.results))
        epi.json().then(epi=> setDataEpisode(epi.results))
    }
    useEffect(() => {
        fetchCharacters()
    }, [])

    // console.log(dataCharacters)

    return (
        <div className='product-table'>
            <div className='product-table__header'>
                <span>'Rick & Morty'</span>

            </div>
            <div className='product-table__categories'>
                <CategoryProductRow title='Characters' list={dataCharacters} />
                <CategoryProductRow2 title='Locations' list={dataLocation} />
                <CategoryProductRow3 title='Episode' list={dataEpisode} />
            </div>
        </div>
    )
}

export { ProductTable }
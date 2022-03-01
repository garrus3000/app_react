import React from 'react'
import ItemCount from '../itemcount/ItemCount'
import "./itemList.css"

function ItemListContainer() {
    return (
        <div className='itemList'>
            <h2>¡Bienvenidos!</h2>
            <ItemCount stock={5} initial={1} onAdd/>
        </div>
    )
}

export default ItemListContainer
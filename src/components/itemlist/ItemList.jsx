import React from 'react'
import Item from '../item/Item'
import "./itemList.scss"

function ItemList({ items }) {

    return (
        <section>
            <h2 className='itemList__layout--tittle'>Productos</h2>
            <div className='itemList__layout'>
                {items.map((item) => <Item key={item.id} item={item} />)}
            </div>
        </section>
    )
}

export default ItemList
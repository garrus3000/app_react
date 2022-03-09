import React from 'react'
import Item from '../item/Item'
import "./itemList.css"

function ItemList({ items }) {

    return (
        <div>
            <h3>Productos</h3>
            <section className='itemList__layout'>
                {items.map((item) => <Item key={item.id} item={item} />)}
            </section>
        </div>
    )
}

export default ItemList
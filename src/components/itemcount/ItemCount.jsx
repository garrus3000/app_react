import React from 'react'
import { useState } from "react"
import "./itemcount.css"

function ItemCount({stock, initial}) {
    const [cantidad, setCantidad] = useState(initial)

    const handleSumar = () => {
        if(cantidad < stock){
            setCantidad(cantidad + 1)
        }
    }

    const handleRestar = () => {
        if (cantidad > initial)
        setCantidad(cantidad - 1)
    }

    function onAdd () {
        if (stock > 0) {
            console.log("agregado al carrito por " + cantidad)
        }
    }

    return (
        <div className='itemContainer'>
            <p>Producto Stock: {stock}</p>
            <div className='itemContainer__counter'>
                <button className='itemContainer__counter--btn' onClick={ handleRestar }> − </button>
                <p>{cantidad}</p>
                <button className='itemContainer__counter--btn' onClick={ handleSumar }> + </button>
            </div>
            <button className='itemContainer__counter--onAdd' onClick={ onAdd }>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount
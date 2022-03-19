import React from 'react'
import { useState } from "react"
import { Link } from 'react-router-dom'
import "./itemcount.scss"

function ItemCount({stock, initial, onAdd}) {
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

    const handleAdd = () => {
        onAdd( cantidad )
    }

    return (
        <div className='itemContainer'>
            <p>Producto Stock: {stock}</p>
            <div className='itemContainer__counter'>
                <button className='itemContainer__counter--btn' onClick={handleRestar}> − </button>
                <p>{cantidad}</p>
                <button className='itemContainer__counter--btn' onClick={handleSumar}> + </button>
            </div>
            {cantidad === 0 ? (
                <button disabled={true} className='itemContainer__counter--onAddDisable' onClick={handleAdd}>Agregar al carrito</button>
            ) : (
                <button disabled={stock === 0} className='itemContainer__counter--onAdd' onClick={handleAdd}>Agregar al carrito</button>)}
            <Link to={`/cart`} className='itemContainer__counter--goCart'>Ir al carrito</Link>
        </div>
    )
}

export default ItemCount
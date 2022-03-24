import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "./cartwidget.scss"
import {contextoCarrito} from "../../Context/CartContext"

function CartWidget() {
    const { cartCounter } = useContext(contextoCarrito)

    return (
        <div>
            {cartCounter() === 0 ? (null
            ) : (
                <div className='cartwidget__layout'>
                    <Link to={`/cart`} >
                        <span className='material-icons '>shopping_cart</span>
                    </Link>
                    <div className={cartCounter() !== 0 ? "counter" : "counterDisable"}>{cartCounter()}</div>
                </div>
            )}
        </div>
    )
}

export default CartWidget
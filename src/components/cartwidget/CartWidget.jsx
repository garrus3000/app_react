import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "./cartwidget.scss"
import {contextoCarrito} from "../../Context/CartContext"

function CartWidget() {
    const { cartCounter } = useContext(contextoCarrito)

    return (
        <Link to="cart"  className='cartwidget__layout'>
            <span className='material-icons '>shopping_cart</span>
            {cartCounter()}
        </Link>
    )
}

export default CartWidget
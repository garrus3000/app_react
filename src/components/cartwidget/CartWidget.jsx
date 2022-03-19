import React from 'react'
import { Link } from 'react-router-dom'
import "./cartwidget.scss"

function cartWidget() {
    return (
        <Link to="cart">
            <span className='material-icons cartwidget__layout'>shopping_cart</span>
        </Link>
    )
}

export default cartWidget
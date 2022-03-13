import React from "react"
import CartWidget from "../cartwidget/CartWidget"
import "./headerAndNavBar.scss"

const NavBar = () => {
    return (
        <header className="header__layout">
            <h1>AddFuel</h1>
            <nav>
                <a href="/">Inicio</a>
                <a href="/Producto">Productos</a>
                <a href="/Contacto">Contacto</a>
            </nav>
            <CartWidget/>
        </header>
    )
}

export default NavBar
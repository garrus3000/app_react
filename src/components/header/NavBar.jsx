import React from "react"
import CartWidget from "../cartwidget/CartWidget"
import "./headerAndNavBar.css"

const NavBar = () => {
    return (
        <header className="header__layout">
            <h1>🔥AddFuel</h1>
            <nav>
                <a href="#">Inicio</a>
                <a href="#">Productos</a>
                <a href="#">Nosotros</a>
                <a href="#">Contacto</a>
            </nav>
            <CartWidget/>
        </header>
    )
}

export default NavBar
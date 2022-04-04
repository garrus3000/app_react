import React from "react"
import { Link } from "react-router-dom"
import CartWidget from "../cartwidget/CartWidget"
import "./headerAndNavBar.scss"

const NavBar = () => {
    return (
        <header className="header__layout">
            <Link to="/">
                <h1 className="header__brand">AddFuel</h1>
            </Link>
            <nav>
                <Link to={`/category/procesadores`}>Procesadores</Link>
                <Link to={`/category/graficas`}>Graficas</Link>
                <Link to={`/category/perifericos`}>Perifericos</Link>
                <Link to={`/checkout`}>Seguimiento</Link>
            </nav>
            <CartWidget/>
        </header>
    )
}

export default NavBar
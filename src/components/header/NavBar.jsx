import React from "react"
import { Link, NavLink } from "react-router-dom"
import CartWidget from "../cartwidget/CartWidget"
import "./NavBar.scss"

const NavBar = () => {
    return (
        <header className="header__layout">
            <div>
                <Link to="/">
                    <h1 className="header__brand">AddFuel</h1>
                </Link>
            </div>
            <nav>
                <ul>
                    <li><NavLink to={`/category/procesadores`}>Procesadores</NavLink></li>
                    <li><NavLink to={`/category/graficas`}>Graficas</NavLink></li>
                    <li><NavLink to={`/category/perifericos`}>Perifericos</NavLink></li>
                    <li><NavLink to={`/seguimiento`}>Seguimiento</NavLink></li>
                </ul>
            </nav>
            <CartWidget />
        </header>
    )
}

export default NavBar
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
                <CartWidget/>
            </div>
            <nav>
                <NavLink to={`/category/procesadores`}>Procesadores</NavLink>
                <NavLink to={`/category/graficas`}>Graficas</NavLink>
                <NavLink to={`/category/perifericos`}>Perifericos</NavLink>
                <NavLink to={`/seguimiento`}>Seguimiento</NavLink>
            </nav>
        </header>
    )
}

export default NavBar
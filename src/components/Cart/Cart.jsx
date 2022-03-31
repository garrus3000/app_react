import React, { useContext } from "react"
import "../Cart/Cart.scss"
import { contextoCarrito } from "../../Context/CartContext"
import { Link } from "react-router-dom"
import Loader from "../Loader/Loader"
import FormPedido from "../Form/FormPedido"


const Cart = () => {
	const { cart, clear, cartCounter, removeItem, finalPrice } = useContext(contextoCarrito)

	return (
		<>
			{cartCounter() === 0 ? (
				<div className="emptyCart__layout">
					<Loader texto="Carrito vacio" />
					<Link to={`/`} className="emptyCart__layout--item link">Volver a la tienda</Link>
				</div>
			) : (
				<>
					<section className="cart__layout">
						{cart.map((producto) =>
							<article key={producto.id} className="cart__layout--item">
								<img src={producto.pictureUrl} alt={producto.title} />
								<h2>{producto.title} </h2>
								<p className="detail">Unidades x {producto.quantity}</p>
								<div>
									<p className="detail">Precio</p>
									<p>${producto.price}</p>
								</div>
								<div>
									<p className="detail">Subtotal</p>
									<p>${producto.price * producto.quantity}</p>
								</div>
								<button onClick={() => removeItem(producto.id)}>Eliminar</button>
							</article>
						)}
					</section>
					<div className="fullCart__layout">
						<p>Precio final: ${finalPrice()}</p>
						<div className="fullCart__layout--div">
							<button onClick={() => { clear() }} >Vaciar Carrito</button>
							<Link to={`/`} className="fullCart__layout--item btnLink">Volver a la tienda</Link>
						</div>
					</div>
					<FormPedido />
				</>
			)}
		</>
	)
}

export default Cart
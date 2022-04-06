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
				<div>
					<Loader texto="Carrito vacio" />
					<div className="emptyCart__layout">
						<Link to={`/`} className="btn link">Volver a la tienda</Link>
					</div>
				</div>
			) : (
				<>
					<section className="cart__layout">
						<div className="items__container">
							{cart.map((producto) =>
								<article key={producto.id} className="card__item">
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
						</div>
						<div className="checkout__container">
							<div>
								<p>Precio final: ${finalPrice()}</p>
								<div>
									<button className="btn" onClick={() => { clear() }} >Vaciar Carrito</button>
								</div>
							</div>
							<FormPedido />
						</div>
					</section>
				</>
			)}
		</>
	)
}

export default Cart
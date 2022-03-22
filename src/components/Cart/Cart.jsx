import React, {useContext} from "react"
import "../Cart/Cart.scss"
import { contextoCarrito } from "../../Context/CartContext"


const Cart = () => {
  const { cart, clear, cartCounter, removeItem, precioTotal} = useContext(contextoCarrito)

  return (
    <div>
      {cart.map((producto) =>
        <div key={producto.id} className="cart__layout--item">
          <img src={producto.pictureUrl} alt={producto.title} />
          <h3>{producto.title}</h3>
          <p>{producto.price}</p>
          <p>{producto.quantity}</p>
          <p>$ {producto.price * producto.quantity}</p>
          <button onClick={() => removeItem(producto.id)}>Eliminar</button>
        </div>
      )}
      {cartCounter() === 0 ? <p>El carrito está vacio</p> : <button onClick={() => { clear() }} >Vaciar Carrito</button>}
      {precioTotal() === 0 ? null : <p>Precio total: ${precioTotal()}</p>}
    </div>
  )
}

export default Cart
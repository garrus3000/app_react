import React, { useState, useContext } from 'react';
import "./itemDetail.scss"
import ItemCount from "../itemcount/ItemCount"
import { Link } from 'react-router-dom';
import { contextoCarrito } from '../../Context/CartContext';


function ItemDetail({ item }) {
	const { addItem } = useContext(contextoCarrito)

	const [quantity, setQuantity] = useState(0);

	const onAdd = (quantityToAdd) => {
		setQuantity(quantityToAdd)
		addItem(item, quantityToAdd)
	}

	return (
		<article className="itemDetail__container" key={item.id}>
			<div className='itemDetail__layout'>
				<img src={item.pictureUrl} alt={item.title} />
				<div className="itemDetail__layout--divDetails">
					<div>
						<h3>{item.title}</h3>
						<p className='price'>${item.price}</p>
					</div>
					<p>{item.description}</p>
				</div>
				{quantity === 0 ? (
					<ItemCount stock={item.stock} initial={0} onAdd={onAdd} />
				) : (
					<div className='itemDetail__divBtn'>
						<p>Cantidad: {quantity}</p>
						<Link to={`/cart`} className="itemDetail__divBtn--goCart" >Terminar mi compra</Link>
						<Link to={`/`} className="itemDetail__divBtn--buyMore" >Ver mas productos</Link>
					</div>
				)}
			</div>
		</article>
	)
}

export default ItemDetail
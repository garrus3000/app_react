import React from 'react'
import "./item.scss"
import { Link } from "react-router-dom"

function Item({ item }) {
	return (
		<article className='item__layout' key={item.id}>
			<p className='description'>{item.category}</p>
			<img src={item.pictureUrl} alt={item.title} />
			<p className='title'>{item.title}</p>
			<p className='price'>$ {item.price}</p>
			<Link to={`/item/${item.id}`} >
				<button className='btnDetail'>Ver detalle</button>
			</Link>
			<p className='stock'>Stock disponible: {item.stock}</p>
		</article>
	)
}

export default Item
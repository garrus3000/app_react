import React from 'react'
import "./item.css"
import { Link } from "react-router-dom"

function Item({ item }) {
  return (
    <article className='item__layout'>
      <p className='item__layout--description'>{item.category}</p>
      <p className='item__layout--title' key={item.id}>{item.title}</p>
      <img src={item.pictureUrl} alt={item.title} />
      <p className='item__layout--price'>$ {item.price}</p>
      <Link to={`/item/${item.id}`} >
        <button className='item__layout--btnDetail'>Ver detalle</button>
      </Link>
      <p className='item__layout--stock'>Stock disponible: {item.stock}</p>
    </article>
  )
}

export default Item
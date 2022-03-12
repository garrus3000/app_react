import React from 'react'
import "./item.css"

function Item({ item }) {
  return (
    <div className='item__layout'>
      <img src={item.pictureUrl} alt={item.title} />
      <p className='item__layout--title' key={item.id}>{item.title}</p>
      <p className='item__layout--description'>{item.description}</p>
      <button className='item__layout--btnDetail'>Ver Detalle</button>
      <p className='item__layout--stock'>Stock disponible: {item.stock}</p>
    </div>
  )
}

export default Item
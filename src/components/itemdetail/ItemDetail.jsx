import React from 'react'
import "./itemDetail.css"
import ItemCount from "../itemcount/ItemCount"


function itemDetail({ item }) {
  return (
    <article>
      <div className="itemDetail__container">
        <div className='itemDetail__layout'>
          <img src={item.pictureUrl} alt={item.description} />
          <div className="itemDetail__layout--divDetails">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>${item.price}</p>
          </div>
        </div>
        <ItemCount stock={item.stock} initial={1} />
      </div>
    </article>
  )
}

export default itemDetail
import React from 'react'
import "./itemDetail.scss"
import ItemCount from "../itemcount/ItemCount"


function itemDetail({ item }) {
  return (
    <section>
      {item.map((el) =>
        <article className="itemDetail__container" key={el.id}>
          <div className='itemDetail__layout'>
            <img src={el.pictureUrl} alt={el.description} />
            <div className="itemDetail__layout--divDetails">
              <h3>{el.title}</h3>
              <p>{el.description}</p>
              <p>${el.price}</p>
            </div>
          </div>
          <ItemCount stock={el.stock} initial={1} />
        </article>)}
    </section>
  )
}

export default itemDetail
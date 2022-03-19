import React, { useState } from 'react';
import "./itemDetail.scss"
import ItemCount from "../itemcount/ItemCount"
import { Link } from 'react-router-dom';


function ItemDetail({ item }) {
  const [quantity, setQuantity] = useState(0);

  const onAdd = ( quantityToAdd ) => {
    setQuantity(quantityToAdd)
  }

  return (
    <section>
      {item.map((el) =>
        <article className="itemDetail__container" key={el.id}>
          <div className='itemDetail__layout'>
            <img src={el.pictureUrl} alt={el.description} />
            <div className="itemDetail__layout--divDetails">
              <div>
                <h3>{el.title}</h3>
                <p className='price'>${el.price}</p>
              </div>
              <p>{el.description}</p>
            </div>
            {quantity === 0 ? (
              <ItemCount stock={el.stock} initial={0} onAdd={onAdd} />
            ) : (
              <div className='itemDetail__divBtn'>
                <p>Elegidos: {quantity}</p>
                <button onClick={() => setQuantity(0)} className="itemDetail__divBtn--buyMore" >Reiniciar compra</button>
                <Link to={`/cart`} className="itemDetail__divBtn--goCart" >Terminar mi compra</Link>
              </div>
            )}
          </div>
        </article>)}
    </section>
  )
}

export default ItemDetail
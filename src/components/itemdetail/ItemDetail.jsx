import React, { useState,useContext } from 'react';
import "./itemDetail.scss"
import ItemCount from "../itemcount/ItemCount"
import { Link } from 'react-router-dom';
import {contextoCarrito} from '../../Context/CartContext';


function ItemDetail( {item} ) {

  const {addItem} = useContext(contextoCarrito)

  const [quantity, setQuantity] = useState(0);

  const onAdd = ( quantityToAdd ) => {
    setQuantity(quantityToAdd)
    addItem(...item, quantityToAdd)
  }


  return (
    <section>
      {item.map((el) =>
        <article className="itemDetail__container" key={el.id}>
          <div className='itemDetail__layout'>
            <img src={el.pictureUrl} alt={el.title} />
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
                <p>Cantidad: {quantity}</p>
                <Link to={`/cart`} className="itemDetail__divBtn--goCart" >Terminar mi compra</Link>
                <Link to={`/`} className="itemDetail__divBtn--buyMore" >Seguir comprando</Link>
              </div>
            )}
          </div>
        </article>)}
    </section>
  )
}

export default ItemDetail
import React, { useState, useEffect } from 'react'
import ItemList from '../itemlist/ItemList';
import "./itemListContainer.css"


const listaProductos = [{
  "id": 1,
  "title": "Bigtax",
  "price": 46068.92,
  "description": "zero administration",
  "pictureUrl": "http://dummyimage.com/100x100.png/ff4444/ffffff",
  "stock": 23
}, {
  "id": 2,
  "title": "Bitchip",
  "price": 25523.19,
  "description": "even-keeled",
  "pictureUrl": "http://dummyimage.com/100x100.png/cc0000/ffffff",
  "stock": 25
}, {
  "id": 3,
  "title": "Zontrax",
  "price": 10079.71,
  "description": "background",
  "pictureUrl": "http://dummyimage.com/100x100.png/dddddd/000000",
  "stock": 25
}, {
  "id": 4,
  "title": "Temp",
  "price": 24613.87,
  "description": "zero administration",
  "pictureUrl": "http://dummyimage.com/100x100.png/ff4444/ffffff",
  "stock": 5
}, {
  "id": 5,
  "title": "Flowdesk",
  "price": 46455.43,
  "description": "Monitored",
  "pictureUrl": "http://dummyimage.com/100x100.png/ff4444/ffffff",
  "stock": 16
}, {
  "id": 6,
  "title": "Sonair",
  "price": 35859.95,
  "description": "Persevering",
  "pictureUrl": "http://dummyimage.com/100x100.png/dddddd/000000",
  "stock": 16
}, {
  "id": 7,
  "title": "Bamity",
  "price": 6264.7,
  "description": "projection",
  "pictureUrl": "http://dummyimage.com/100x100.png/ff4444/ffffff",
  "stock": 25
}, {
  "id": 8,
  "title": "Kanlam",
  "price": 20317.25,
  "description": "flexibility",
  "pictureUrl": "http://dummyimage.com/100x100.png/dddddd/000000",
  "stock": 16
}, {
  "id": 9,
  "title": "Tres-Zap",
  "price": 22043.56,
  "description": "Persevering",
  "pictureUrl": "http://dummyimage.com/100x100.png/ff4444/ffffff",
  "stock": 21
}, {
  "id": 10,
  "title": "Tres-Zap",
  "price": 11358.71,
  "description": "concept",
  "pictureUrl": "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
  "stock": 17
}, {
  "id": 11,
  "title": "Zontrax",
  "price": 44275.99,
  "description": "emulation",
  "pictureUrl": "http://dummyimage.com/100x100.png/ff4444/ffffff",
  "stock": 18
}, {
  "id": 12,
  "title": "Ventosanzap",
  "price": 4568.87,
  "description": "Balanced",
  "pictureUrl": "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
  "stock": 9
}, {
  "id": 13,
  "title": "Gembucket",
  "price": 42729.13,
  "description": "open architecture",
  "pictureUrl": "http://dummyimage.com/100x100.png/cc0000/ffffff",
  "stock": 15
}, {
  "id": 14,
  "title": "Vagram",
  "price": 43039.62,
  "description": "product",
  "pictureUrl": "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
  "stock": 19
}, {
  "id": 15,
  "title": "Flexidy",
  "price": 44939.21,
  "description": "Object-based",
  "pictureUrl": "http://dummyimage.com/100x100.png/dddddd/000000",
  "stock": 19
}]

function ItemListContainer() {
  const [productos, setProductos] = useState([])

  useEffect(() => {
    const getData = new Promise((res, rej) => {
      setTimeout(() => {
        res(listaProductos)
      }, 2000)
    })

    getData
    .then( (resultado)=>{
      console.log("Datos cargados con exito")
      setProductos(resultado)
    })
    .catch( (error)=>{
      console.log("Error en datos")
    })
  }, [])

  return (
    <>
      <h2 className='itemList__layout--title'>Bienvenidos</h2>
      <div className='itemList__layout'>
        <ItemList items={productos}/>
      </div>
    </>
  );
}

export default ItemListContainer
import React, { useState, useEffect } from 'react'
import ItemList from '../itemlist/ItemList';
import "./itemListContainer.scss"

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
}]

function ItemListContainer() {
  const [loading, setLoading] = useState(true)
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
      setLoading(false)
    })
    .catch( (error)=>{
      console.log("Error en datos")
    })
  }, [])

  if (loading) {
    return <h3  style={{color: "#f5593d", fontSize: "2rem", textAlign: "center"}} >Cargando listado de productos...</h3>
  } else {
    return (
      <>
        <h2 className='itemListContainer__layout--tittle'>Bienvenidos</h2>
        <div>
          <ItemList items={productos} />
        </div>
      </>
    )
  }
}

export default ItemListContainer
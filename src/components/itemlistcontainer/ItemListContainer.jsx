import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import ItemList from '../itemlist/ItemList';
import "./itemListContainer.scss"
import products from "../../data/products.json"

function ItemListContainer() {
  const [loading, setLoading] = useState(true)
  const [productos, setProductos] = useState([])
  const {categoryId} = useParams()

  useEffect(() => {
    setLoading(true)
    const getData = new Promise((res, rej) => {
      categoryId ? toast.info(`Cargando ${categoryId}...`) : toast.success("🖥️ Cargando Home", { icon: false });

      setTimeout(() => {
        res(categoryId ? products.filter(catFiltered => catFiltered.category === categoryId) : products)
        toast.dismiss()
      }, 2000)
    })

    getData
      .then((resultado) => {
        setProductos(resultado)
        setLoading(false)
      })
      .catch((error) => {
        toast.error("Error al cargar productos");
      })
      .finally(() => {
        setLoading(false)
      })
  }, [categoryId])

  if (loading) {
    return <div className='loader__margin'><div className="cssload-loader">Productos</div></div>
  } else {
    return (
      <ItemList items={productos} />
    )
  }
}

export default ItemListContainer
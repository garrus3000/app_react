import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import ItemList from '../itemlist/ItemList';
import "./itemListContainer.scss"

const listaProductos = [{
  "id": 1,
  "category": "procesadores",
  "title": "i5-10400",
  "price": 46068.92,
  "description": "Núcleos de CPU: 6. RAM soportadas: DDR4, Frecuencia máxima de reloj: 4.3 GHz",
  "pictureUrl": "https://http2.mlstatic.com/D_NQ_NP_951550-MLA43003993763_082020-O.webp",
  "stock": 23
}, {
  "id": 2,
  "category": "procesadores",
  "title": "i7-12700k",
  "price": 25523.19,
  "description": "núcleos de CPU: 12, RAM soportadas: DDR4,DDR5. Frecuencia máxima de reloj: 5 GHz",
  "pictureUrl": "https://http2.mlstatic.com/D_NQ_NP_896939-MLA48357422788_112021-O.webp",
  "stock": 25
}, {
  "id": 3,
  "category": "graficas",
  "title": "Evga RTX 2070 Super",
  "price": 170000,
  "description": "Tipo de MG: GDDR6. Memoria: 8 GB. 1* (DisplayPort) 1*(HDMI). Contectividad: PCI-Express 3.0",
  "pictureUrl": "https://http2.mlstatic.com/D_NQ_NP_803562-MLA49067526148_022022-O.webp",
  "stock": 25
}, {
  "id": 4,
  "category": "graficas",
  "title": "Asus RTX 3070 V2",
  "price": 248390,
  "description": "Tipo de MG: GDDR6. Memoria: 8 GB. 2*(DisplayPort) 2*(HDMI). Contectividad: PCI-Express 4.0",
  "pictureUrl": "https://http2.mlstatic.com/D_NQ_NP_606300-MLA44596880736_012021-O.webp",
  "stock": 5
}, {
  "id": 5,
  "category": "perifericos",
  "title": "Logitech G403",
  "price": 5090,
  "description": "Sensor óptico. Resolución de 25600dpi. 6 botones",
  "pictureUrl": "https://http2.mlstatic.com/D_NQ_NP_932658-MLA43229493907_082020-O.webp",
  "stock": 16
}]

function ItemListContainer() {
  const [loading, setLoading] = useState(true)
  const [productos, setProductos] = useState([])
  const {categoryId} = useParams()

  useEffect(() => {
    const getData = new Promise((res, rej) => {
      categoryId? toast.info(`Cargando ${categoryId}...`) : toast.success("🖥️ Cargando Home", {icon: false});

      setTimeout(() => {
        res( categoryId? listaProductos.filter(catFiltered => catFiltered.category === categoryId) : listaProductos)
        toast.dismiss()
      }, 2000)
    })

    getData
    .then( (resultado)=>{
      setProductos(resultado)
      setLoading(false)
    })
    .catch( (error)=>{
      toast.error("Error al cargar productos");
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
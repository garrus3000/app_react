import {useState, useEffect} from 'react'

import ItemDetail from '../itemdetail/ItemDetail';

const itemDetalle = {
    "id": 1,
    "title": "Bigtax",
    "price": 46068.92,
    "description": "zero administration",
    "pictureUrl": "http://dummyimage.com/100x100.png/ff4444/ffffff",
    "stock": 23
  };

export default function ItemDetailContainer() {
    const [detalle, setDetalle] = useState({})

    useEffect( ()=>{
        const getData = new Promise ((res,rej)=>{
            setTimeout(() => {
                res(itemDetalle)
            }, 2000);
        })

        getData.then((resultado)=>{
            setDetalle(resultado)
        })
    },[])

    return (
        <ItemDetail item={detalle}/>
    )
}

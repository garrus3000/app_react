import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import ItemDetail from '../itemdetail/ItemDetail';

const itemDetalle = {
    "id": 1,
    "category": "procesadores",
    "title": "i5-10400",
    "price": 46068.92,
    "description": "Núcleos de CPU: 6. RAM soportadas: DDR4, Frecuencia máxima de reloj: 4.3 GHz",
    "pictureUrl": "https://http2.mlstatic.com/D_NQ_NP_951550-MLA43003993763_082020-O.webp",
    "stock": 23
};

export default function ItemDetailContainer() {
    const [loading, setLoading] =useState(true)
    const [detalle, setDetalle] = useState({})
    const {itemId} = useParams()

    useEffect( ()=>{
        const getData = new Promise ((res,rej)=>{
            setTimeout(() => {
                res(itemDetalle)
            }, 2000);
        })

        getData
        .then((resultado)=>{
            setDetalle(resultado)
            setLoading(false)
        })
        .catch((error)=>{
            toast.error("Error al cargar productos", {
                position: "top-center"});
        })
    },[itemId])

    if (loading) {
        return <div className='loader__margin'><div className="cssload-loader">Detalle</div></div>
    } else {
        return (
            <ItemDetail item={detalle} />
        )
    }
}

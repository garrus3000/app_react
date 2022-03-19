import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import ItemDetail from '../itemdetail/ItemDetail';
import products from "../../data/products.json"


export default function ItemDetailContainer() {
    const [loading, setLoading] =useState(true)
    const [item, setItem] = useState({})
    const {itemId} = useParams()

    useEffect( ()=>{
        setLoading(true)
        const getData = new Promise ((res,rej)=>{
            setTimeout(() => {
                const idFiltrado = products.filter(el => el.id === parseInt(itemId))
                res(idFiltrado)
            }, 2000);
        })

        getData
        .then((resultado)=>{
            setItem(resultado)
            setLoading(false)
        })
        .catch((error)=>{
            toast.error("Error al cargar productos", {
                position: "top-center"});
        })
        .finally(()=>{
            setLoading(false)
        })
    },[itemId])

    if (loading) {
        return <div className='loader__margin'><div className="cssload-loader">Detalle</div></div>
    } else {
        return (
            <ItemDetail item={item} />
        )
    }
}

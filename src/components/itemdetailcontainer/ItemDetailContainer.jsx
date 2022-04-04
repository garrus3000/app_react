import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import ItemDetail from '../itemdetail/ItemDetail';
import Loader from '../Loader/Loader';
import { productsCollection } from '../../firebase/Firebase';
import { getDocs, query, where } from "firebase/firestore"


export default function ItemDetailContainer() {
    const [loading, setLoading] = useState(true)
    const [item, setItem] = useState({})
    const { itemId } = useParams()

    useEffect(() => {
        const itemFilter = query(productsCollection, where('id', '==', Number(itemId)))
		getDocs(itemFilter)
            .then(res => setItem(res.docs[0].data()))
            .catch((error) => toast.error("Error al cargar productos"))
            .finally(() => setLoading(false))
    }, [itemId])

    return (
        loading ? <Loader texto="Detalle" /> : <ItemDetail item={item} />
    )
}

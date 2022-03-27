import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import ItemDetail from '../itemdetail/ItemDetail';
import Loader from '../Loader/Loader';
import { db } from '../../firebase/Firebase';
import { getDocs, collection } from "firebase/firestore"



export default function ItemDetailContainer() {
    const [loading, setLoading] = useState(true)
    const [item, setItem] = useState({})
    const { itemId } = useParams()

    useEffect(() => {
        const productsCollection = collection(db, 'products')
		const request = getDocs(productsCollection)

        request
            .then(resultado => {
                const categoryFiltered = resultado.docs.map(doc => doc.data())
                const itemDetail = categoryFiltered.filter(item => item.id === parseInt(itemId))
                setItem(itemDetail)
                setLoading(false)
            })
            .catch((error) => {
                toast.error("Error al cargar productos");
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])

    return (
        loading ? <Loader texto="Detalle" /> : <ItemDetail item={item} />
    )
}

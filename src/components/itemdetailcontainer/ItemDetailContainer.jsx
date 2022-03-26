import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import ItemDetail from '../itemdetail/ItemDetail';
import Loader from '../Loader/Loader';
import { db } from '../../firebase/Firebase';
import { getDocs, collection, query, where } from "firebase/firestore"



export default function ItemDetailContainer() {
    const [loading, setLoading] = useState(true)
    const [item, setItem] = useState({})
    const { itemId } = useParams()

    useEffect(() => {

        const productsCollection = collection(db, 'products')
		const request = getDocs(productsCollection)

        // const queryDetail = query(collection(db, 'products'), where('id', '==', parseInt(itemId)))
        // getDocs(queryDetail)

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


        // setLoading(true)
        // const getData = new Promise ((res,rej)=>{
        //     setTimeout(() => {
        //         const idFiltrado = products.filter(el => el.id === parseInt(itemId))
        //         res(idFiltrado)
        //     }, 2000);
        // })

        // getData
        // .then((resultado)=>{
        //     setItem(resultado)
        //     setLoading(false)
        // })
        // .catch((error)=>{
        //     toast.error("Error al cargar productos", {
        //         position: "top-center"});
        // })
        // .finally(()=>{
        //     setLoading(false)
        // })
    }, [itemId])

    return (
        loading ? <Loader texto="Detalle" /> : <ItemDetail item={item} />
    )
}

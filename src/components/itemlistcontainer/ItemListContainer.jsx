import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import ItemList from '../itemlist/ItemList';
import Loader from '../Loader/Loader'
import { productsCollection } from '../../firebase/Firebase';
import { getDocs, query, where } from "firebase/firestore"


function ItemListContainer() {
	const [loading, setLoading] = useState(true)
	const [productos, setProductos] = useState([])
	const { categoryId } = useParams()

	useEffect(() => {
		!categoryId ? toast.success("🖥️ Cargando Home", { icon: false }) : toast.info(`Cargando ${categoryId}...`, { autoClose: 500 }) ;

		const requestFilter = !categoryId ? productsCollection : query(productsCollection, where('category', '==', categoryId))
		getDocs(requestFilter)
			.then(result => setProductos(result.docs.map(doc => doc.data())))
			.catch(error => toast.error("Error al cargar productos"))
			.finally(() => {
				setLoading(false)
				toast.dismiss()
			})
		setLoading(true)
	}, [categoryId])

	return (
		loading ? <Loader texto={categoryId ? categoryId : "Productos"} /> : <ItemList items={productos} />
	)
}

export default ItemListContainer
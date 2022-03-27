import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import ItemList from '../itemlist/ItemList';
import Loader from '../Loader/Loader'
import { db } from '../../firebase/Firebase';
import { getDocs, collection, query, where } from "firebase/firestore"


function ItemListContainer() {
	const [loading, setLoading] = useState(true)
	const [productos, setProductos] = useState([])
	const { categoryId } = useParams()

	useEffect(() => {
		const productsCollection = collection(db, 'products')
		const request = getDocs(productsCollection)

		categoryId ? toast.info(`Cargando ${categoryId}...`, {autoClose: 1000}) : toast.success("🖥️ Cargando Home", { icon: false });

		if (categoryId) {
			const queryCategory = query(collection(db, 'products'), where('category', '==', categoryId))
			getDocs(queryCategory)
				.then(resultado => {
					const categoryFiltered = resultado.docs.map((doc) => doc.data())
					setProductos(categoryFiltered)
					setLoading(false)
				})
				.catch((error) => {
					toast.error("Error al cargar productos");
				})
				.finally(() => {
					setLoading(false)
				})
		} 
		else {
			request
				.then((resultado) => {
					resultado.docs.forEach(doc => {
						const arrayResultado = resultado.docs.map((doc) => doc.data())
						setProductos(arrayResultado)
						setLoading(false)
						toast.dismiss()
					})
				})
				.catch((error) => {
					toast.error("Error al cargar productos");
				})
				.finally(() => {
					setLoading(false)
				})
		}  
		setLoading(true)
	}, [categoryId])


	return (
		loading ? <Loader texto={categoryId ? categoryId : "Productos"} /> : <ItemList items={productos} />
	)
}

export default ItemListContainer
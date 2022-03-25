import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import ItemList from '../itemlist/ItemList';
import "./itemListContainer.scss"
import Loader from '../Loader/Loader'
import { db } from '../ItemCollection/ItemCollection';
import { getDocs, collection } from "firebase/firestore"


function ItemListContainer() {
	const [loading, setLoading] = useState(true)
	const [productos, setProductos] = useState([])
	const { categoryId } = useParams()

	useEffect(() => {
		const productsCollection = collection(db, 'products')
		const request = getDocs(productsCollection)


		request
			.then((resultado) => {
				resultado.docs.forEach(doc => {
					// setProductos(productos => [...productos, doc.data()])
					//ver despues si sirve o no y PREGUNTAR
					const arrayResultado = resultado.docs.map((doc) => doc.data())
					setProductos(arrayResultado)
					setLoading(false)
				})
			})
			.catch((error) => {
				toast.error("Error al cargar productos");
			})
			.finally(() => {
				setLoading(false)
			})





		// setLoading(true)
		// const getData = new Promise((res, rej) => {
		// 	categoryId ? toast.info(`Cargando ${categoryId}...`) : toast.success("🖥️ Cargando Home", { icon: false });

		// 	setTimeout(() => {
		// 		res(categoryId ? products.filter(catFiltered => catFiltered.category === categoryId) : products)
		// 		toast.dismiss()
		// 	}, 2000)
		// })

		// getData
		// 	.then((resultado) => {
		// 		setProductos(resultado)
		// 		setLoading(false)
		// 	})
		// 	.catch((error) => {
		// 		toast.error("Error al cargar productos");
		// 	})
		// 	.finally(() => {
		// 		setLoading(false)
		// 	})
	// }, [categoryId])


	}, [])


	return (
		loading ? <Loader texto="Productos" /> : <ItemList items={productos} />
	)
}

export default ItemListContainer
import React from 'react'
import { Link } from 'react-router-dom'
import Loader from '../Loader/Loader'
import "./PageNotFound.scss"

const PageNotFound = () => {
	return (
		<div className='error404__layout'>
			<Loader texto="Error 404" />
			<img src='https://images.unsplash.com/photo-1633078654544-61b3455b9161?ixlib=rb-1.2.1' alt='Error 404' />
			<h2>Algo salio mal...</h2>
			<Link to={`/`} className="btn__home">Volver a la tienda</Link>
		</div>
	)
}

export default PageNotFound
import React from 'react'
import "./main.scss"
import { Routes , Route } from 'react-router-dom'
import ItemListContainer from '../itemlistcontainer/ItemListContainer'
import Cart from '../Cart/Cart'
import ItemDetailContainer from "../itemdetailcontainer/ItemDetailContainer"
import PageNotFound from '../PageNotFound/PageNotFound'
import Seguimiento from '../Form/Seguimiento'


const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
                <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/seguimiento" element={<Seguimiento/>}/>
                <Route path='*' element={<PageNotFound/>}/>
            </Routes>
        </main>
    )
}

export default Main
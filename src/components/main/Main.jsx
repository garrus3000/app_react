import React from 'react'
import "./main.scss"


import ItemDetailContainer from '../itemdetailcontainer/ItemDetailContainer'
import ItemListContainer from '../itemlistcontainer/ItemListContainer'

const Main = () => {
    return (
        <main>
            <ItemListContainer />
            <ItemDetailContainer />
        </main>
    )
}

export default Main
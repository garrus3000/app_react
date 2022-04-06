import { getDocs, collection } from 'firebase/firestore'
import React, {useState, useEffect} from 'react'
import { toast } from 'react-toastify'
import { db } from '../../firebase/Firebase'
import "./seguimiento.scss"


const Seguimiento = () => {
    const [order, setOrder] = useState([])
    const [inputValue, setInputValue] = useState("")
    const [btnSearch, setBtnSearch] = useState("")

    const filtrado = order.filter(doc => doc.id === btnSearch)
    
    const handleBtnSearch = (e) => {
        e.preventDefault()
        setBtnSearch(inputValue)
    }
    
    const handleChange_input = (e) => {
        e.preventDefault()
        setInputValue(e.target.value)  
    }

    useEffect(() => {
        const getPedido = collection(db,"orders")
        getDocs(getPedido)
            .then(res => setOrder(res.docs.map(doc => ({id: doc.id,  ...doc.data()}))))
            .catch(error => toast.error("Error al cargar pedido"))
    }, [btnSearch])


    return (
        <>
            <div className='form__container'>
                <h2>Seguimiento de pedidos</h2>
                <p>Evite espacios en blanco</p>
                <form>
                    <div>
                        <input
                            type="text"
                            name='ingresarID'
                            placeholder="Ingresar su ID de compra"
                            onChange={handleChange_input}
                        />
                    </div>
                    <div>
                        <button
                            onClick={handleBtnSearch}
                        >Buscar<span className="material-icons">local_shipping</span>
                        </button>
                    </div>
                </form>
            </div>
            {filtrado.map(order => (
                <div key={order.id}>
                    <div className="seguimiento__container">
                        <article>
                            <p>ESTADO: <span>{order.status}</span> </p>
                            <p>NOMBRE: <span>{order.buyer.name.nombre + " " + order.buyer.name.apellido}</span></p>
                            <p>TELEFONO: <span>{order.buyer.phone}</span></p>
                            <p>EMAIL: <span>{order.buyer.email}</span></p>
                            <p>Compra: <span>{order.items.map(item => (item.title +" x "+ item.quantity)).join(', ')}</span></p>
                            <p>Total compra: <span>${order.total}</span></p>
                        </article>
                    </div>
                </div>))}
        </>
    )
}


export default Seguimiento
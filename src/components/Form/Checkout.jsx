import { getDocs, collection } from 'firebase/firestore'
import React, {useState, useEffect} from 'react'
import { toast } from 'react-toastify'
import { db } from '../../firebase/Firebase'
import Loader from '../Loader/Loader';


const Checkout = () => {
    const [loading, setLoading] = useState(true)
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
            .finally(() => setLoading(false))
    }, [btnSearch])


    return (
        <>
            <form className="form__layout">
                <label
                    name="ingresarID"
                >Ingresar ID de compra sin espacios
                </label>
                <input
                    type="text"
                    name='ingresarID'
                    placeholder="Ingrese su ID de compra"
                    onChange={handleChange_input}
                />
                <button
                    onClick={handleBtnSearch}
                >Buscar
                </button>
            </form>
            {loading && <Loader texto={`Cargando`}/>}
            {filtrado.map (order => (
                <div key={order.id} className="itemDetail__container">
                    <div className='itemDetail__layout'>
                        <p>ID {order.id}</p>
                        <p>Status {order.status}</p>
                        <p>Nombre {order.buyer.name.nombre}</p>
                        <p>Apellido {order.buyer.name.apellido}</p>
                        <p>Telefono {order.buyer.phone}</p>
                        <p>email {order.buyer.email}</p>
                        <p> Items titulo {order.items.map(item => item.title)}</p>
                        <div> Imagenes {order.items.map(item => <img key={item.id} src={item.pictureUrl} alt={item.title} />)}</div>
                        <p>Total final {order.total}</p>
                    </div>
                </div>))}
        </>
    )
}


export default Checkout
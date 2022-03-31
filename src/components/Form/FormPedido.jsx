import React, { useContext,useState } from "react"
import './FormPedido.scss'
import { db } from '../../firebase/Firebase'
import { collection ,serverTimestamp , addDoc } from "firebase/firestore"
import { contextoCarrito } from "../../Context/CartContext"
import { toast } from "react-toastify"


const FormPedido = () => {
	const { cart, finalPrice, clear } = useContext(contextoCarrito)

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")


    const formSubmit = (e) => {
        e.preventDefault()
        const clientOrder = {
            buyer: {
                name: { nombre, apellido},
                phone: phone,
                email: email
            },
            items: cart,
            date: serverTimestamp(),
            total: finalPrice()
        }

        const orderCollection = collection(db,"orders")
        const orderId = addDoc(orderCollection,clientOrder)
        console.log("Promesa creada",orderId, "Documento creado", clientOrder)//Documento enviado a la base de datos

        orderId
            .then(res => {
                console.log("Promesa enviada",res, "Id del documento creado", res.id)//res.id es el id del documento creado

                toast.success(`Compra realizada con exito \n Orden de compra: ${res.id}`, 
                {
                    position: "top-center",
                    autoClose: false,
                    hideProgressBar: true,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: false,
                    progress: undefined
                })
            })
            .catch(error => toast.error("Error al hacer pedido"))
            .finally(() => clear())
    }

    const handleChange_nombre = (e) => {
        setNombre(e.target.value)
    }

    const handleChange_apellido = (e) => {
        setApellido(e.target.value)
    }

    const handleChange_phone = (e) => {
        setPhone(e.target.value)
    }

    const handleChange_email = (e) => {
        setEmail(e.target.value)
    }


    return (
        <div className='form__layout'>
            <form className='form__layout--details'>
                <input type="text" placeholder="Nombre" onChange={handleChange_nombre} value={nombre}/>
                <input type="text" placeholder="Apellido" onChange={handleChange_apellido} value={apellido}/>
                <input type="tel" placeholder="Telefono" onChange={handleChange_phone} value={phone}/>
                <input type="email" placeholder="Email" pattern=".+@globex\.com" onChange={handleChange_email} value={email}/>
                <button type="submit" onClick={formSubmit} className="btn">Confirmar compra</button>
                <button type="reset" className="btn btn-cancelar">Reset formulario</button>
            </form>
        </div>
    )
}

export default FormPedido
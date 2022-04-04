import React, { useContext, useState } from "react"
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
                name: { nombre, apellido },
                phone: phone,
                email: email
            },
            items: cart,
            date: serverTimestamp(),
            total: finalPrice(),
            status: "Pendiente",
        }
        const orderCollection = collection(db, "orders")
        const orderId = addDoc(orderCollection, clientOrder)
        orderId
            .then(res => {
                toast.success(`ORDEN DE COMPRA: ${res.id}`,
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

    const handleClick_resetForm = () => {
        setNombre("")
        setApellido("")
        setPhone("")
        setEmail("")
    }

    const handleClick_clear = () => {
        clear()
    }


    return (
        <div className='form__layout'>
            <form className='form__layout--details'>
                <input
                    type="text"
                    placeholder="Nombre"
                    onChange={handleChange_nombre}
                    value={nombre} required />
                <input
                    type="text"
                    placeholder="Apellido"
                    onChange={handleChange_apellido}
                    value={apellido} required />
                <input
                    type="tel"
                    placeholder="Telefono"
                    onChange={handleChange_phone}
                    value={phone} required />
                <input
                    type="email"
                    placeholder="Email"
                    onChange={handleChange_email}
                    value={email} required />

                {nombre === "" || apellido === "" || phone === "" || email === "" ?
                    (<button
                        disabled={true}
                        type="submit"
                        className="btn--disabled">Confirmar compra</button>
                    ) : (
                        <button
                            type="submit"
                            onClick={formSubmit}
                            className="btn">Confirmar compra</button>
                    )}

                <button
                    type="reset"
                    onClick={handleClick_resetForm}
                    className="btn btn-cancelar">Limpiar formulario</button>
                <button
                    type="reset"
                    onClick={handleClick_clear}
                    className="btn">Cancelar pedido</button>
            </form>
        </div>
    )
}

export default FormPedido
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

    const checking = email;

    const cheackValidEmail = (email) => {
        const regex = /\S+@\S+\.\S+/
        regex.test(email)
        if (regex.test(checking)) {
            return true
        }
    }

    const isItValid = nombre === "" || apellido === "" || phone === "" || email === "" || ( !cheackValidEmail(email));

    const formSubmit = (e) => {
        e.preventDefault()
        disableBtn_formSubmit()
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
                toast.success(() => (
                    <span>
                        ORDEN DE COMPRA: <b>{res.id}</b>
                        <div></div>
                        <button className=" btnToast" onClick={() => navigator.clipboard.writeText(res.id)}>
                            Copiar
                        </button>
                    </span>
                ),
                    {
                        position: "top-center",
                        autoClose: false,
                        hideProgressBar: true,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: false,
                        progress: undefined,
                    });
            })
            .catch(error => toast.error("Error al hacer pedido"))
            .finally(() => clear())
    }

    const handleClick_resetForm = () => {
        setNombre("")
        setApellido("")
        setPhone("")
        setEmail("")
    }

    const disableBtn_formSubmit = () => {
        setNombre("")
    }

    return (
        <div className='form__layout'>
            <form className='form__layout--details'>
                <input
                    type="text"
                    placeholder="Nombre"
                    onChange={(e) => setNombre(e.target.value)}
                    value={nombre} required />
                <input
                    type="text"
                    placeholder="Apellido"
                    onChange={(e) => setApellido(e.target.value)}
                    value={apellido} required />
                <input
                    type="number"
                    placeholder="Telefono"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone} required />
                <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}  required />

                {cheackValidEmail() ?
                    (<div className="email__valid">Email valido</div>
                    ) : (
                        <div className="email__invalid">Ingrese un email valido</div>)}

                { isItValid  ?
                    (<button
                        disabled={true}
                        type="submit"
                        className="btn__disabled">Confirmar compra</button>
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
            </form>
        </div>
    )
}

export default FormPedido
import React from 'react'
import './FormPedido.scss'

const FormPedido = () => {
    const formSubmit = (e) => {
        e.preventDefault()
        console.log('Formulario enviado')
    }

    return (
        <div className='form__layout'>
            <form className='form__layout--details'>
                <input type="text" placeholder="Nombre/es" />
                <input type="text" placeholder="Apellido/os" />
                <input type="email" placeholder="Ingrese email: e.g. pepe@argento.com" />
                <input type="email" placeholder="Repetir email: e.g. pepe@argento.com" />
                <button type="submit" onClick={formSubmit}>Confirmar compra</button>
                <button type="reset">Reset formulario</button>
            </form>
        </div>
    )
}

export default FormPedido
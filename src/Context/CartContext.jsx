import {createContext, useState} from 'react'

export const contextoCarrito = createContext()
const {Provider} = contextoCarrito


const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        const copyCart = [...cart]
        const itemToCart = {...item,quantity}
        
        if( ifInCart(item.id) ) {
            let index = copyCart.findIndex( (el) => el.id === item.id)
            copyCart[index].quantity += quantity;
            setCart(copyCart)
        } else {
            copyCart.push(itemToCart)
            setCart(copyCart)
        }
    }

    const ifInCart = (id) => {
        return cart.some( item => item.id === id )
    }

    const clear = () => {
        setCart([])
        cartCounter()
    }

    const removeItem = (id) => {
        const filteredCart = cart.filter((item) => item.id !== id)
        setCart(filteredCart)
    }

    const cartCounter = () => {
        const totalItems = cart.reduce((acc, item) => (acc + item.quantity), 0)
        return totalItems;
    }

    const precioTotal = () => {
        const compraTotal = cart.reduce((acc, item) => (acc + item.quantity * item.price), 0)
        return compraTotal;
    }

    const valorContextoCarrito = {
        cart,
        addItem,
        clear,
        removeItem,
        cartCounter,
        precioTotal
    }


    return (
        <Provider value={valorContextoCarrito}>
            {children}
        </Provider>
    )
}

export default CartProvider
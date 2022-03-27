import NavBar from "./components/header/NavBar";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./Context/CartContext";


const App = () => {
    return (
        <BrowserRouter>
            <CartProvider>
                <NavBar />
                <Main />
            </CartProvider>
            <Footer />
            <ToastContainer />
        </BrowserRouter>
    )
};

export default App

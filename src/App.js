import NavBar from "./components/header/NavBar";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from "react-router-dom";



const App = () => {
    return (
        <BrowserRouter>
            <NavBar/>
            <Main/>
            <Footer/>
            <ToastContainer/>
        </BrowserRouter>
    )
};

export default App

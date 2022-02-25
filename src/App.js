import NavBar from "./components/header/NavBar";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import ItemListContainer from "./components/itemlistcontainer/ItemListContainer";


const App = () => {
    return (
        <>
            <NavBar/>
            <ItemListContainer/>
            <Main/>
            <Footer/>
        </>
    )
};

export default App

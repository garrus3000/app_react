import NavBar from "./components/header/NavBar";
import Footer from "./components/footer/Footer";
import ItemListContainer from "./components/itemlistcontainer/ItemListContainer";
import ItemDetailContainer from "./components/itemdetailcontainer/ItemDetailContainer";






const App = () => {
    return (
        <>
            <NavBar/>
            <ItemDetailContainer />
            <ItemListContainer/>
            
            <Footer/>
        </>
    )
};

export default App

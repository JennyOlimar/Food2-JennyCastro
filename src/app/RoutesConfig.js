import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../app/Layout";
import ItemListContainer from "../pages/ItemListContainer";
import ItemDetailContainer from "../pages/ItemDetailContainer";
import Cart from "../pages/Cart";

const RoutesConfig = () => (

    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<ItemListContainer saludo='Bienvenido'/>}/>
                <Route path="/category/:id" element={<ItemListContainer />}/>
                <Route path="/item/:id" element={<ItemDetailContainer />}/>
                <Route path="/cart" element={<Cart />}/>
                <Route path="*" element={<div>404</div>}/>
            </Route>
        </Routes>
    </BrowserRouter>

);

export default RoutesConfig;
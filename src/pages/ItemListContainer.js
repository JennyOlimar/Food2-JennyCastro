import { useEffect, useState, useContext } from "react";
import { GetProducto } from "../data/Malabares";
import ItemList from "../components/ItemList";
import { useParams } from "react-router-dom";
import { AppContext } from "../app/CartContext";

const ItemListContainer = (props) => {
    const { id } = useParams();
    const [listItems, setListItems] = useState([]);
    const [items, addItem, removeItem, clear, isInCart] = useContext(AppContext);

    useEffect(() => {
        const getData = async () => {
            const productos = await GetProducto();
            setListItems(productos);
        }
        getData();
        clear();
    }, [id])

    return(
        <div>
            <p>{props.saludo}</p>
            <ItemList listItems={listItems}/>
        </div>
    );
}

export default ItemListContainer;
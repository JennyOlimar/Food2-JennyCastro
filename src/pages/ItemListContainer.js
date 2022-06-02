import { useEffect, useState, useContext } from "react";
import { getItems } from "../app/api";
import ItemList from "../components/ItemList";
import { useParams } from "react-router-dom";
import { AppContext } from "../app/CartContext";

const ItemListContainer = (props) => {
    const { id } = useParams();
    const [listItems, setListItems] = useState([]);
    const [items, addItem, removeItem, clear, isInCart] = useContext(AppContext);

    useEffect(() => {
        getItems().then(resp => {
            setListItems(resp);
        });
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
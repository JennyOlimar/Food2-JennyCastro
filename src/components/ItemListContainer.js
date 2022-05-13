import { useEffect, useState } from "react";
import { GetProducto } from "../data/Malabares";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {
    const [listItems, setListItems] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const productos = await GetProducto();
            setListItems(productos);
        }
        getData();
    }, [])

    return(
        <div>
            <p>{props.saludo}</p>
            <ItemCount />
            <ItemList listItems={listItems}/>
        </div>
    );
}

export default ItemListContainer;
import { useEffect, useState } from "react";
import { GetProducto } from "../data/Malabares";
import ItemList from "./ItemList";

const ItemListContainer = ({saludo}) => {
    const [listItems, setListItems] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const productos = await GetProducto();
            setListItems(productos);
        }
        getData();
    }, [])

    return(
        <div>{saludo}</div>,
        <ItemList listItems={listItems}/>
    );
}

export default ItemListContainer;
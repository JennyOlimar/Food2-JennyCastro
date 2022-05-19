import { useEffect, useState } from "react";
import { GetProducto } from "../data/Malabares";
import ItemList from "../components/ItemList";

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
            <ItemList listItems={listItems}/>
        </div>
    );
}

export default ItemListContainer;
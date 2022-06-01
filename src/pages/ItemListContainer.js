import { useEffect, useState } from "react";
import { GetProducto } from "../data/Malabares";
import ItemList from "../components/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
    const { id } = useParams();
    const [listItems, setListItems] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const productos = await GetProducto();
            setListItems(productos);
        }
        getData();
    }, [id])

    return(
        <div>
            <p>{props.saludo}</p>
            <ItemList listItems={listItems}/>
        </div>
    );
}

export default ItemListContainer;
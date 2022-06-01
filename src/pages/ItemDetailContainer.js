import { useEffect, useState } from "react";
import { GetArticulo } from "../data/Malabares";
import ItemDetail from "../components/ItemDetail";

const ItemDetailContainer = () => {
    const [Item, setItem] = useState([]);

    useEffect(() => {
        const getItem = async () => {
            const producto = await GetArticulo();
            setItem(producto);
        }
        getItem();
    }, [])

    return(
        <div>
        <ItemDetail item={Item}/>
        </div>
    );
}

export default ItemDetailContainer;
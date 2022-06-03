import { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail";
import { useParams } from "react-router-dom";
import { getItemById } from "../app/items-firebase";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [Item, setItem] = useState([]);

    useEffect(() => {
        getItemById(id).then(resp => {
            setItem(resp);
        });
    }, [id])

    return(
        <div>
        <ItemDetail item={Item}/>
        </div>
    );
}

export default ItemDetailContainer;
import { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail";
import { useParams } from "react-router-dom";
import { getItemById } from "../app/api";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [Item, setItem] = useState([]);

    useEffect(() => {
        getItemById(id).then(resp => {
            setItem(resp);
        });
    }, [])

    return(
        <div>
        <ItemDetail item={Item}/>
        </div>
    );
}

export default ItemDetailContainer;
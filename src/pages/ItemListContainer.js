import { useEffect, useState } from "react";
import { getItemByCategory, getItems } from "../app/items-firebase";
import ItemList from "../components/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
    const { id } = useParams();
    const [listItems, setListItems] = useState([]);

    useEffect(() => {
        id === undefined ? getItems().then(resp => { setListItems(resp); }) :
        getItemByCategory(id).then(resp => { setListItems(resp); })
    }, [id])

    return(
        <div>
            <p>{props.saludo}</p>
            <ItemList listItems={listItems}/>
        </div>
    );
}

export default ItemListContainer;
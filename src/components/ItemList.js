import Item from "../components/Item";


const ItemList = ({listItems}) => {
    const item = listItems.map(producto => producto);

    return(
        <Item item={item}/>
    );
}

export default ItemList;
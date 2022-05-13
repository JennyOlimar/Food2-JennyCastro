import Item from "./Item";


const ItemList = ({listItems}) => {
    const item = listItems.map(producto => producto);

    return(
        <Item item={item}/>
    );
}

export default ItemList;
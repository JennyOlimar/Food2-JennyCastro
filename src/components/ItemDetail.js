import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import ItemCount from "../components/ItemCount";
import { AppContext } from "../app/CartContext";

const ItemDetail = ({item}) => {
    const [count, setCount] = useState(0);
    const [items, addItem, removeItem, clear, isInCart] = useContext(AppContext);

    return(
    <div className="cardFlex">
        <div className="card">
            <span>Información detallada</span>
            <h1>{item.title}</h1>
            <img className="cardImg" src={item.pictureUrl} alt="" />
            <p className="cardStock">{item.description}</p>
            {
                count === 0 ?
                <ItemCount onAdd={(cant) => setCount(cant)}/>
                : <div>
                    <button className ="btn btn-outline-info buttonTerminarCompra" onClick={() => addItem(item, count)}>Comprar</button>
                    <button className ="btn btn-outline-info buttonTerminarCompra">
                        <Link to='/cart'>Terminar mi compra</Link>
                    </button>
                </div>
            }
        </div>
    </div>
    );
}

export default ItemDetail;
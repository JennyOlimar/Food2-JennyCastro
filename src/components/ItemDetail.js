import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import ItemCount from "../components/ItemCount";
import { AppContext } from "../app/CartContext";

const ItemDetail = ({item}) => {
    const [count, setCount] = useState(0);
    const [items, addItem, removeItem, clear, isInCart] = useContext(AppContext);

    return(
        <div className="cardFlex">{item && item.map(articulo => 
            <div className="card" key={articulo.id}>
                <span>Información detallada</span>
                <h1>{articulo.title}</h1>
                <img className="cardImg" src={articulo.pictureUrl} alt="" />
                <p className="cardStock">{articulo.description}</p>
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
        )}</div>
    );
}

export default ItemDetail;
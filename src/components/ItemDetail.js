import ItemCount from "../components/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({item}) => {
    const [hideItem, sethideItem] = useState(false);

    const hideItemCount = () => {
        sethideItem(true);
    }

    return(
        <div className="cardFlex">{item && item.map(articulo => 
            <div className="card" key={articulo.id}>
                <span>Información detallada</span>
                <h1>{articulo.title}</h1>
                <img className="cardImg" src={articulo.pictureUrl} alt="" />
                <p className="cardStock">{articulo.description}</p>
                <div>
                    {hideItem === false && (<ItemCount onAdd={hideItemCount}/>)}
                </div>
                <div>
                    {hideItem === true && (<button className ="btn btn-outline-info buttonTerminarCompra"><Link to='/cart'>Terminar mi compra</Link></button>)}
                </div>
                
            </div>
        )}</div>
    );
}

export default ItemDetail;
import { useState } from "react";

const ItemCount = () => {

    const [cantItem, setCantItem] = useState(1);

    const plusItem = () => {
        setCantItem(cantItem + 1);
    }

    const minusItem = () => {
        setCantItem(cantItem - 1);
        if(cantItem <= 1 ){
            setCantItem(1);
        }
    }


    return(
        <>
            <div className="buttonCount cardStock">
                <button onClick={()=> plusItem()} className="btn btn-secondary"><b>+</b></button>
                <p className="textButton">{cantItem}</p>
                <button onClick={()=> minusItem()} className="btn btn-secondary"><b>-</b></button>
            </div>,
            <button className ="btn btn-outline-info buttonAgregarCarrito">Agregar al Carrito</button>
        </>
        
    );
}

export default ItemCount;
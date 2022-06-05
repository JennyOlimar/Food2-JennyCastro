import { AppContext } from "../app/CartContext";
import { useContext } from "react";
import imagenes from "../assets/imagenes";
import { Link } from "react-router-dom";

const CarWidjet = () => {
    const [items, , , , ] = useContext(AppContext);
    const itemVarios = items.map(item => item);
    const itemUnico = itemVarios.map(item => item.cantidad);
    const totalItems = itemUnico.length > 0 ? itemUnico.reduce((result,number)=> result+number) : [];
    return<>
        {
            items.length > 0 &&
            <div className="flexAlignCenter">
                <Link className="ref" to="/cart">
                    <span className="textCar">Mi carrito</span>
                    <img className="imgCar" src={imagenes.car} alt="" />
                    <span className="badge">{totalItems}</span>
                </Link>
            </div>
        }
        
    </>
}

export default CarWidjet;
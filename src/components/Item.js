import { Link } from "react-router-dom";

const Item = ({item}) => {

    const content = item.map((card) =>
        <div className="card" key={card.id}>
            <h1>{card.title}</h1>
            <img className="cardImg" src={card.pictureUrl} alt="" />
            <p className="cardStock">{card.description}</p>
            <button className ="btn btn-outline-info cardButton">
                <Link to={{pathname: `/item/${card.id}`}}>Ver detalle del producto</Link>
            </button>
            <h1 className="cardStock fontBlue">$ {card.price}</h1>
            <p className="cardStock">Stock disponible: {card.stock}</p>
        </div>
    );

    
    return(
        <div className="cardFlex">{content}</div>
    );
}

export default Item;
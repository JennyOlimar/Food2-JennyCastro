import ItemCount from "../components/ItemCount";

const ItemDetail = ({item}) => {

    return(
        <div className="cardFlex">{item && item.map(articulo => 
            <div className="card" key={articulo.id}>
                <span>Información detallada</span>
                <h1>{articulo.title}</h1>
                <img className="cardImg" src={articulo.pictureUrl} alt="" />
                <p className="cardStock">{articulo.description}</p>
                <ItemCount />
            </div>
        )}</div>
    );
}

export default ItemDetail;
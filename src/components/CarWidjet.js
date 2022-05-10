import imagenes from "../assets/imagenes";

const CarWidjet = () => {
    return<>
        <div className="flexAlignCenter">
            <a className="ref" href="./ItemListContainer.js">
                <img className="imgCar" src={imagenes.car} alt="" />
                <span>Mi carrito</span>
            </a>
        </div>
    </>
}

export default CarWidjet;
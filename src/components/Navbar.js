import CarWidjet from "./CarWidjet";
import imagenes from "../assets/imagenes";

const Navbar = () => {
    return<>
        <div className="flexRow">
            <a href="./ItemListContainer.js">
                <img className="logo" src={imagenes.logo} alt="" />
            </a>
            <CarWidjet />
        </div>
        
        <nav className="pad navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="./ItemListContainer.js">Nosotros</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./ItemListContainer.js">Frutas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./ItemListContainer.js">Vegetales</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./ItemListContainer.js">Carnes</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./ItemListContainer.js">Contacto</a>
                    </li>
                </ul>
            </div>
        </nav>
    </>
}

export default Navbar;
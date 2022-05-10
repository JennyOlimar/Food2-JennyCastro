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
        
        <nav class="pad navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="./ItemListContainer.js">Nosotros</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./ItemListContainer.js">Frutas</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./ItemListContainer.js">Vegetales</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./ItemListContainer.js">Carnes</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./ItemListContainer.js">Contacto</a>
                    </li>
                </ul>
            </div>
        </nav>
    </>
}

export default Navbar;
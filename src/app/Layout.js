import CarWidjet from "../components/CarWidjet";
import imagenes from "../assets/imagenes";
import { Link, Outlet } from "react-router-dom";

const Layout = () => (
    <>
        <div className="flexRow">
            <img className="logo" src={imagenes.logo} alt="" />
            <CarWidjet />
        </div>
        
        <nav className="pad navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/category/1">Balls</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/category/2">Clubs</Link>
                    </li>
                </ul>
            </div>
        </nav>
        <Outlet />
    </>
);

export default Layout;
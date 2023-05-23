import CartWidget from "./CartWidget";
import NavBar from "./NavBar";
import AirJordan from "./images/air-jordan.svg";
import LogoNike from "./images/logo-nike.svg";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="container-fluid">
            <div className="row bg-body-secondary p-3">
                <div className="col-md-6">
                    <Link to={"http://www.nike.com.ar/jordan"} target={"_blank"} rel={"noreferrer"}><img src={AirJordan} alt={"Air Jordan"} width={24} /></Link>
                </div>
                <div className="col-md-6 text-end">
                    <Link to={"/"} className="text-dark text-decoration-none">Buscar Tienda</Link> | <Link to={"/"} className="text-dark text-decoration-none">Ayuda</Link>
                </div>
            </div>
            <div className="row p-3">
                <div className="col-md-4">
                    <Link to={"/"}><img src={LogoNike} alt={"Nike Argentina"} width={60} /></Link>
                </div>
                <div className="col-md-4 text-center">
                    <NavBar />
                </div>
                <div className="col-md-4 text-end">
                    <CartWidget />
                </div>
            </div>
        </div>
    )
}

export default Header;
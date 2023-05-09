import CartWidget from "./CartWidget";
import NavBar from "./NavBar";
import AirJordan from "./images/air-jordan.svg";
import LogoNike from "./images/logo-nike.svg";

const Header = () => {
    return (
        <div className="container-fluid">
            <div className="row bg-body-secondary p-3">
                <div className="col-md-6">
                    <a href="http://www.nike.com.ar/jordan" target={"_blank"} rel={"noreferrer"}><img src={AirJordan} alt={"Air Jordan"} width={24} /></a>
                </div>
                <div className="col-md-6 text-end">
                    <a href="/" className="text-dark text-decoration-none">Buscar Tienda</a> | <a href="/" className="text-dark text-decoration-none">Ayuda</a>
                </div>
            </div>
            <div className="row p-3">
                <div className="col-md-4">
                    <a href="/"><img src={LogoNike} alt={"Nike Argentina"} width={60} /></a>
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
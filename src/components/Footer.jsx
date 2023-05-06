import PreciosJustos from "./images/precios-justos.webp";
import facebook from "./images/facebook.svg";
import twitter from "./images/twitter.svg";
import instagram from "./images/instagram.svg";
import youtube from "./images/youtube.svg";

const Footer = () => {
    return (
        <div className="container-fluid text-light bg-dark py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <h6>Buscar Tienda</h6>    
                    </div>
                    <div className="col-md-2">
                        <h6>Ayuda</h6>    
                    </div>
                    <div className="col-md-2">
                        <h6>Acerca de Nike</h6>    
                    </div>
                    <div className="col-md-2">
                        <a href="https://www.nike.com.ar/143?map=productClusterIds" target={"_blank"}><img src={PreciosJustos} alt={"Precios Justos"} width={105} /></a>   
                    </div>
                    <div className="col-md-4 text-end">
                        <a href="https://twitter.com/Nike" className="text-light me-1"><img src={twitter} alt={"Twitter"} width={32} /></a>
                        <a href="https://www.facebook.com/nike" className="text-light me-1"><img src={facebook} alt={"Facebook"} width={32} /></a>
                        <a href="https://www.youtube.com/channel/UCUFgkRb0ZHc4Rpq15VRCICA" className="text-light me-1"><img src={youtube} alt={"YouTube"} width={32} /></a>
                        <a href="https://www.instagram.com/nike/" className="text-light me-1"><img src={instagram} alt={"Instagram"} width={32} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
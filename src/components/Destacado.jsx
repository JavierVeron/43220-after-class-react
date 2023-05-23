import Destacado2 from "./Destacado2";

const Destacado = () => {
    return (
        <>
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col text-center">
                    <img src={"./images/preparate-para-el-invierno.webp"} alt="Preparate para el Invierno" className="img-fluid" />
                    <h2 className="my-3">PREPARATE PARA EL INVIERNO</h2>
                    <a href="/" className="btn btn-dark">Comprar</a>
                </div>
            </div>
        </div>
        <Destacado2 />
        </>
    )
}

export default Destacado;
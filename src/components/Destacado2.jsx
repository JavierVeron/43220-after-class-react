const Destacado2 = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <p><img src={"./images/san-lorenzo.webp"} alt="San Lorenzo" className="img-fluid" /></p>
                    <h3>San Lorenzo 3era</h3>
                    <p><a href="/" className="btn btn-dark">Comprar</a></p>
                </div>
                <div className="col-md-6">
                    <p><img src={"./images/para-los-peques.webp"} alt="Para los Peques" className="img-fluid" /></p>
                    <h3>Para los más pequeños</h3>
                    <p><a href="/" className="btn btn-dark">Comprar</a></p>
                </div>
            </div>
        </div>
    )
}

export default Destacado2;
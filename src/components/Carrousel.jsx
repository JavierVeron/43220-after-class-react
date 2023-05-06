const Carrousel = () => {
    return (
        <div className="container-fluid my-5">
            <div className="row">
                <div className="col">
                    <div id="carouselExample" className="carousel slide bg-light p-3" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active text-center">
                                <p>3 cuotas sin interés</p>
                                <p><a href="#"></a>Ver opciones de pago</p>
                            </div>
                            <div className="carousel-item text-center">
                                <p>Entregas a todo el país.</p>
                                <p><a href="#">Ver información de envíos y entregas</a></p>
                            </div>
                            <div className="carousel-item text-center">
                                <p>Por fin Nike.com.ar</p>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Carrousel;
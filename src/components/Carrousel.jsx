const Carrousel = () => {
    return (
        <div className="container-fluid my-3">
            <div className="row">
                <div className="col-md-12">
                    <div id="carouselExample" className="carousel slide bg-body-secondary p-3" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item text-center">
                                <p>3 cuotas sin interés</p>
                                <p><a href="/">Ver opciones de pago</a></p>
                            </div>
                            <div className="carousel-item text-center">
                                <p>Entregas a todo el país.</p>
                                <p><a href="/">Ver información de envíos y entregas</a></p>
                            </div>
                            <div className="carousel-item text-center">
                                <p>Por fin Nike.com.ar</p>
                                <p>&nbsp;</p>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="false"></span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="false"></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Carrousel;
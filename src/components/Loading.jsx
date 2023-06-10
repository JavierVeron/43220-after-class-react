const Loading = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col p-5 text-center">
                    <div className="spinner-grow text-dark" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading;
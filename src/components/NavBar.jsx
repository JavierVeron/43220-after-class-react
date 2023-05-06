const NavBar = () => {
    return (
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <a className="nav-link active text-dark" aria-current="page" href="#">Destacados</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-dark" href="#">Hombre</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-dark" href="#">Mujer</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-dark" href="#">Niño/a</a>
            </li>
        </ul>
    )
}

export default NavBar;
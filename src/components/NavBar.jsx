import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <NavLink className="nav-link text-dark" activeclassname="text-danger" aria-current="page" to={"/destacados"}>Destacados</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-dark" activeclassname="text-danger" to={"/category/hombre"}>Hombre</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-dark" activeclassname="text-danger" to={"/category/mujer"}>Mujer</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-dark" activeclassname="text-danger" to={"/category/niños"}>Niño/a</NavLink>
            </li>
        </ul>
    )
}

export default NavBar;
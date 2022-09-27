import "../styles/Navbar.css"
import { Link } from "react-router-dom"
import logo from "../images/logo.svg"
import { FaBars, FaTimes } from "react-icons/fa"

export default function Navbar({ click = false, handleClick, isNavFooter = false }) {
    return (
        <div className={click ? "navbar active" : "navbar"}>
            <div className="navbar-container">
                <div className={isNavFooter ? "navbar-content hide" : "navbar-content"}>
                    <Link to="/" className="navbar-logo">
                        <img src={logo} alt="logo" />
                    </Link>
                    <div className="navbar-icon" onClick={handleClick}>
                        {click ? <FaTimes size={32} /> : <FaBars size={32} />}
                    </div>
                </div>
                <ul
                    className={`${click ? "nav-menu active" : "nav-menu "}${
                        isNavFooter ? "footer" : ""
                    }`.trimEnd()}
                >
                    <li className="nav-item">
                        <Link to="/" className={isNavFooter ? "nav-link footer" : "nav-link"}>
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className={isNavFooter ? "nav-link footer" : "nav-link"}>
                            Careers
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className={isNavFooter ? "nav-link footer" : "nav-link"}>
                            Events
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className={isNavFooter ? "nav-link footer" : "nav-link"}>
                            Products
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className={isNavFooter ? "nav-link footer" : "nav-link"}>
                            Support
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

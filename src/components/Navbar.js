import "../styles/Navbar.css"
import { Link } from "react-router-dom"
import logo from "../images/logo.svg"
import { FaBars, FaTimes } from "react-icons/fa"

export default function Navbar({ click = false, handleClick, isNavFooter = false }) {
    return (
        <div className={click ? "navbar active" : "navbar"}>
            <div className="navbar-container">
                <div className="navbar-content">
                    <Link to="/" className="navbar-logo">
                        <img src={logo} alt="logo" />
                    </Link>
                    <div
                        className={isNavFooter ? "navbar-icon footer" : "navbar-icon"}
                        onClick={handleClick}
                    >
                        {click ? <FaTimes size={32} /> : <FaBars size={32} />}
                    </div>
                </div>
                <ul
                    className={`${click ? "nav-menu active" : "nav-menu "}${
                        isNavFooter ? "footer" : ""
                    }`.trimEnd()}
                >
                    <li className="nav-item">
                        <Link to="/about" className={isNavFooter ? "nav-link footer" : "nav-link"}>
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/careers"
                            className={isNavFooter ? "nav-link footer" : "nav-link"}
                        >
                            Careers
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/events" className={isNavFooter ? "nav-link footer" : "nav-link"}>
                            Events
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/products"
                            className={isNavFooter ? "nav-link footer" : "nav-link"}
                        >
                            Products
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/support"
                            className={isNavFooter ? "nav-link footer" : "nav-link"}
                        >
                            Support
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

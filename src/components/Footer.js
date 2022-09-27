import React from "react"
import "../styles/Footer.css"
import { Link } from "react-router-dom"
import useWindowSize from "../hooks/useWindowSize"
import Navbar from "../components/Navbar"
//Icon Images
import fb_icon from "../images/icon-facebook.svg"
import tw_icon from "../images/icon-twitter.svg"
import pint_icon from "../images/icon-instagram.svg"
import inst_icon from "../images/icon-pinterest.svg"
import logo from "../images/logo.svg"

export default function Footer() {
    const { width } = useWindowSize()
    const windowDesktopSize = width > 960 ? true : false
    return (
        <footer className="footer-container">
            <div className={windowDesktopSize ? "navbar-desktop" : ""}>
                <Link to="/" className="navbar-logo-footer">
                    <img src={logo} alt="logo" />
                </Link>
                <Navbar isNavFooter={true} />
            </div>
            <div className="social-links-container">
                <div className="social-links">
                    <Link className="social-link">
                        <img src={fb_icon} alt="icon-fb" />
                    </Link>
                    <Link className="social-link">
                        <img src={tw_icon} alt="icon-tw" />
                    </Link>
                    <Link className="social-link">
                        <img src={pint_icon} alt="icon-pint" />
                    </Link>
                    <Link className="social-link">
                        <img src={inst_icon} alt="icon-inst" />
                    </Link>
                </div>
                <p className="footer-body">&copy; 2022 Loopstudios. All rights reserved</p>
            </div>
        </footer>
    )
}

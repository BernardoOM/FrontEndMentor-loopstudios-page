import { useState } from "react"
import { Link } from "react-router-dom"
import Navbar from "../Navbar"
import "../../styles/Home.css"
import ItemBox from "../ItemBox"
import useWindowSize from "../../hooks/useWindowSize"
//Desktop Images
import d_int from "../../images/desktop/image-interactive.jpg"
import d_deep_earth from "../../images/desktop/image-deep-earth.jpg"
import d_night_arcade from "../../images/desktop/image-night-arcade.jpg"
import d_soccer_team from "../../images/desktop/image-soccer-team.jpg"
import d_grid from "../../images/desktop/image-grid.jpg"
import d_from_above from "../../images/desktop/image-from-above.jpg"
import d_pocket_borealis from "../../images/desktop/image-pocket-borealis.jpg"
import d_fisheye from "../../images/desktop/image-fisheye.jpg"
import d_curiosity from "../../images/desktop/image-curiosity.jpg"
//Icon Images
import fb_icon from "../../images/icon-facebook.svg"
import tw_icon from "../../images/icon-twitter.svg"
import pint_icon from "../../images/icon-instagram.svg"
import inst_icon from "../../images/icon-pinterest.svg"
//Mobile Images
import m_deep_earth from "../../images/mobile/image-deep-earth.jpg"
import m_night_arcade from "../../images/mobile/image-night-arcade.jpg"
import m_soccer_team from "../../images/mobile/image-soccer-team.jpg"
import m_grid from "../../images/mobile/image-grid.jpg"
import m_from_above from "../../images/mobile/image-from-above.jpg"
import m_pocket_borealis from "../../images/mobile/image-pocket-borealis.jpg"
import m_fisheye from "../../images/mobile/image-fisheye.jpg"
import m_curiosity from "../../images/mobile/image-curiosity.jpg"
import m_int from "../../images/mobile/image-interactive.jpg"

export function Home() {
    const [clickIcon, setClickIcon] = useState(false)
    const { width } = useWindowSize()

    const intImg = width > 960 ? d_int : m_int
    const windowDesktopSize = width > 960 ? true : false
    const handleClickIcon = () => setClickIcon(!clickIcon)

    return (
        <div className="home-container">
            <header className={clickIcon ? "header-container iconActive" : "header-container"}>
                <Navbar click={clickIcon} handleClick={handleClickIcon} />
                <div className="title-container">
                    <h1>
                        Immersive <br />
                        experiences <br />
                        that deliver
                    </h1>
                </div>
            </header>
            <main className="main-container">
                <div className="content-container">
                    <img src={intImg} alt="VR-int" />
                    <div className="description-container">
                        <h2 className="content-title">The leader in interactive VR</h2>
                        <p className={windowDesktopSize ? "content-body desktop" : "content-body"}>
                            Founded in 2011, Loopstudios has been producing world-class virtual
                            reality projects for some of the best companies around the globe. Our
                            award-winning creations have transformed businesses through digital
                            experiences that bind to their brand.
                        </p>
                    </div>
                </div>
                <div
                    className={
                        windowDesktopSize ? "content-container desktop" : "content-container"
                    }
                >
                    <h2 class={windowDesktopSize ? "content-title desktop" : "content-title"}>
                        Our creations
                    </h2>
                    <Link to="/products" className="btn-see-all">
                        See all
                    </Link>
                    <div className="items-container">
                        <ItemBox
                            value="Deep Earth"
                            img_path={windowDesktopSize ? d_deep_earth : m_deep_earth}
                        />
                        <ItemBox
                            value="Night Earth"
                            img_path={windowDesktopSize ? d_night_arcade : m_night_arcade}
                        />
                        <ItemBox
                            value="Soccer Team vr"
                            img_path={windowDesktopSize ? d_soccer_team : m_soccer_team}
                        />
                        <ItemBox value="The grid" img_path={windowDesktopSize ? d_grid : m_grid} />
                        <ItemBox
                            value="From up above vr"
                            img_path={windowDesktopSize ? d_from_above : m_from_above}
                        />
                        <ItemBox
                            value="Pocket borealis"
                            img_path={windowDesktopSize ? d_pocket_borealis : m_pocket_borealis}
                        />
                        <ItemBox
                            value="The Curiosity"
                            img_path={windowDesktopSize ? d_curiosity : m_curiosity}
                        />
                        <ItemBox
                            value="Make it fisheye"
                            img_path={windowDesktopSize ? d_fisheye : m_fisheye}
                        />
                    </div>
                </div>
            </main>
            <footer className="footer-container">
                <div className={windowDesktopSize ? "navbar-desktop" : ""}>
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
        </div>
    )
}

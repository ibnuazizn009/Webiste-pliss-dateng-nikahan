import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../../containers/Home/Navbar/Navbar.css'
import animateScroll from "react-scroll/modules/mixins/animate-scroll";
import logo from '../../logo.svg'

const NavbarPortofolio = () => {

    const scrollToTop = () => {
        animateScroll.scrollToTop();
    }
    
    const [navbar, setNavbar] = useState(false)

    const changeBackground = () => {
        if(window.scrollY >= 90){
            setNavbar(true)
        }else{
            setNavbar(false)
        }
    }

    window.addEventListener("scroll", changeBackground)

    return(
        <nav className={navbar ? 'nav-card active' : 'nav-card'} id="navbar">
            <div className="nav-content">
            <img className="nav-logo" src={logo} alt="Logo" onClick={scrollToTop}/>
                <ul className="nav-items">
                    <li className="nav-item">
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/themes"}>Tema</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/price"}>Harga</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/portofolio"}>Portofolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/login"}>Login</Link>
                    </li>
                    <li className="nav-item">
                        <button>Buat Undangan</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavbarPortofolio;
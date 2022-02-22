import React, {Component} from "react";
import { Link as LinkPage } from "react-router-dom";
import { Link } from "react-scroll";
import animateScroll from "react-scroll/modules/mixins/animate-scroll";

import logo from '../../../logo.svg'
import './Navbar.css'

class Navbar extends Component {

    constructor(props){
        super(props);
        this.state = {
            navbar : false,
            setNavbar: false
        }        
    }

    scrollToBegin = () => {
        animateScroll.scrollTo(0)
    }

    scrollToTop = () => {
        animateScroll.scrollToTop();
    }

    changeBackground = () => {
        if(window.scrollY >= 80){
            this.setState({
                ...this.state,
                navbar : true,
                setNavbar: true
            })
        }else{
            this.setState({
                navbar: false,
                setNavbar: false
            })
        }
    }
    
    componentDidMount(){
        window.addEventListener('scroll', this.changeBackground)
    }
    

    render(){
        return(
            <nav className={this.state.navbar ? 'nav-card active' : 'nav-card'}>
            <div className="nav-content">
                <img className="nav-logo" src={logo} alt="Logo" onClick={this.scrollToTop}/>
                <ul className="nav-items">
                    <li className="nav-item">
                        <LinkPage to={"/"} onClick={this.scrollToTop}>Home</LinkPage>
                    </li>
                    <li className="nav-item">
                        <Link
                            activeClass="active"
                            to="section1"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Fitur
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            activeClass="active"
                            to="section2"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Tema
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            activeClass="active"
                            to="section3"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Harga
                        </Link>
                    </li>
                    <li className="nav-item">
                        <LinkPage to={"/portofolio"} onClick={this.scrollToBegin}>Portofolio</LinkPage>
                    </li>
                    <li className="nav-item">
                        <LinkPage to={"/login"}>Login</LinkPage>
                    </li>
                    <li className="nav-item">
                        <button>Buat Undangan</button>
                    </li>
                </ul>
            </div>
        </nav>
        )
    }
}
export default Navbar;
import { createContext, useContext, useState, useTransition } from "react";
import { Link } from "react-router-dom"
import "./navbar.css"
import {FaBars} from "react-icons/fa"
import {ImCross} from "react-icons/im"
import ReactSwitch from "react-switch";
import { ThemeContext } from "../App";

const Navbar = () => {
    const[Mobile, setMobile] = useState(false)
    const {theme, toggleTheme} = useContext(ThemeContext)
    console.log(theme);

    return(
        <div className="all">
        <nav className="navbar" id = {theme}>
                <h3 className="logo"
                 id = {theme}>
                    <Link to = "/">HandGesture</Link>
                 </h3>
 
                <ul className =  {Mobile ? "nav-links-mobile" : "nav-links"} onClick = {() => setMobile} id = {theme}>
                    <Link to="/">
                        <li>Home</li>
                        </Link>
                    <Link to="/about">
                        <li>About</li>
                    </Link>
                    <Link to="/contact">
                       <li>Contact</li>
                    </Link>
                    <li><b>Change theme</b></li>
                </ul>
                <div className="switch">
                <ReactSwitch onChange={toggleTheme} checked={theme==="dark"} />
                </div>
                <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
                    {Mobile? <ImCross/> : <FaBars/>}
                </button>
        </nav>
        </div>
    )
}

export default Navbar
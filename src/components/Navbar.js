import { createContext, useState } from "react";
import { Link } from "react-router-dom"
import "./navbar.css"
import {FaBars} from "react-icons/fa"
import {ImCross} from "react-icons/im"
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null)

const Navbar = () => {
    const[Mobile, setMobile] = useState(false)
    const[theme, setTheme] = useState("light") 
    const toggleTheme = () => {
        setTheme((curr) => (curr == "light" ? "dark" : "light"));
    };
    
    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
        <nav className="navbar" id = {theme}>
                <h3 className="logo" id = {theme}>HandGesture</h3>
 
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
        </ThemeContext.Provider>
    )
}

export default Navbar
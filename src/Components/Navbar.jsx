import { useState } from "react";
import logo from "../images/logo.png";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

function Navbar() {
  let [nav, setNav] = useState(false);
  let changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
  
    <nav  className={nav ? "nav active" : "nav"}>
      <Link to="main" className="logo" smooth={true} duration={1000} >
        <img src={logo} alt="" />
      </Link>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <NavLink
            className="cursor-pointer"
            to="/home" 
            duration={1000}>
            HOME
          </NavLink>
      
        </li>
        <li>
          <Link
            className="cursor-pointer"
            to="features"
            smooth={true}
            duration={1000}
          >
            FEATURES
          </Link>
        </li>
        <li>
          <Link
            className="cursor-pointer"
            to="presentaion"
            smooth={true}
            duration={1000}
          >
            OFFER
          </Link>
        </li>
        <li>
          <NavLink
            className="cursor-pointer"
            to="./pricing"
        
          >
            PRICING
          </NavLink>
        </li>
        
        <li>
          <NavLink
            className="cursor-pointer"
            to="/contact"
        
          >
            CONTACT US
          </NavLink>
        </li>
      
      </ul>
    </nav>
  );
}

export default Navbar;



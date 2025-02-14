import { NavLink } from "react-router-dom";
function Header() {
  return (
    <div id="main">
      <div className="name">
        <h2>BEGAIN YOUR JOURNEY</h2>
        <h1>
          <span>TO FITNESS</span> WITH US
        </h1>
        <div className="header-btns">
          <NavLink to="/contact" className="header-btn">
            JOIN NOW
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;

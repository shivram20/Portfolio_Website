import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Css/Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <div className="header">
      <div className="left">
        <h1>SHIVRAM</h1>
      </div>

      {/* Menu Icon */}
      <div className="menu-icon" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <div className={`right ${open ? "open" : ""}`}>
        <NavLink className="ns" to="/home" onClick={closeMenu}>
          Home
        </NavLink>

        <NavLink className="ns" to="/about" onClick={closeMenu}>
          About
        </NavLink>

        <NavLink className="ns" to="/projects" onClick={closeMenu}>
          Projects
        </NavLink>

        <NavLink className="ns" to="/contact" onClick={closeMenu}>
          Contact
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;

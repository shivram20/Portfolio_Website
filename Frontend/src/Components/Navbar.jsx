import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Css/Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        // scrolling up
        setShowNav(true);
      } else {
        // scrolling down
        setShowNav(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`header ${showNav ? "nav-show" : "nav-hide"}`}>
      <div className="left">
        <h1>SHIVRAM</h1>
      </div>

      <div className="menu-icon" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <div className={`right ${open ? "open" : ""}`}>
        <NavLink className="ns" to="/home" onClick={() => setOpen(false)}>Home</NavLink>
        <NavLink className="ns" to="/about" onClick={() => setOpen(false)}>About</NavLink>
        <NavLink className="ns" to="/projects" onClick={() => setOpen(false)}>Projects</NavLink>
        <NavLink className="ns" to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
      </div>
    </div>
  );
}

export default Navbar;

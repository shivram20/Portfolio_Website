import { useEffect, useState } from "react";
import "./Css/Footer.css";

function Footer() {
  const [showFooter, setShowFooter] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        // User scrolling UP
        setShowFooter(true);
      } else if (currentScrollY > lastScrollY) {
        // User scrolling DOWN
        setShowFooter(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <footer className={`footer ${showFooter ? "show" : "hide"}`}>
      <div className="footer-content">
        <a href="https://github.com/shivram20" target="_blank" rel="noreferrer">
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/shivram-vasava-824883363"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/shivram_20x"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
        <span>© 2026 | Built with React + Vite | v1.1.0</span>
      </div>
    </footer>
  );
}

export default Footer;

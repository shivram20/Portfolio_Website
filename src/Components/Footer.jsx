import { useEffect, useState } from "react";
import "./Css/Footer.css";

function Footer() {
  const [showFooter, setShowFooter] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        // scrolling up
        setShowFooter(true);
      } else {
        // scrolling down
        setShowFooter(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <footer className={`footer ${showFooter ? "show" : "hide"}`}>
      <div className="footer-content">
        <a href="https://github.com/shivram20">Github</a>
        <a href="https://www.linkedin.com/in/shivram-vasava-824883363?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Linkdin</a>
        <a href="https://www.instagram.com/shivram_20x?igsh=MWo5ZzJxdjd3dW5ieg==">Instagram</a>
        <span>© 2026 All Rights Reserved</span>
      </div>
    </footer>
  );
}

export default Footer;

import { useEffect, useState } from "react";
import "./Navbar.css";
import fotoLogo from "../../assets/logoTobFlix.png";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header className={isSticky ? "sticky-header" : "headerNav"}>
        <img src={fotoLogo} alt="logoPagina" className="logoPagina" />
        <button className="btnNuevoVideo">Nuevo Video</button>
      </header>
    </>
  );
};

export default Navbar;

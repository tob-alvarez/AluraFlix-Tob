import { useEffect, useState } from "react";
import "./Navbar.css";
import fotoLogo from "../../assets/logoTobFlix.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const location = useLocation();

  const nuevoVideo = () => {
    navigate("/nuevo-video");
  };
  const home = () => {
    navigate("/*");
  };
  return (
    <>
      <header className={isSticky ? "sticky-header" : "headerNav"}>
        <img
          src={fotoLogo}
          alt="logoPagina"
          className="logoPagina"
          onClick={home}
        />
        {location.pathname !== "/nuevo-video" && (
          <Link
            className="btnNuevoVideo"
            to="/nuevo-video"
            onClick={nuevoVideo}
          >
            Nuevo Video
          </Link>
        )}
      </header>
    </>
  );
};

export default Navbar;

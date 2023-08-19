import { useEffect, useState } from "react";
import "./Navbar.css";
import fotoLogo from "../../assets/logoTobFlix.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

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

  const home = () => {
    navigate("/*");
  };
  const back = () => {
    navigate(-1);
  };
  return (
    <>
      <header className={isSticky ? "sticky-header" : "headerNav"}>
        {location.pathname == "/nuevo-video" && (
          <button className="btnVolver" onClick={back}>
            <FontAwesomeIcon
              className="btnVolverIcono"
              icon={faArrowLeftLong}
            />
          </button>
        )}
        {location.pathname == "/nueva-categoria" && (
          <button className="btnVolver" onClick={back}>
            <FontAwesomeIcon
              className="btnVolverIcono"
              icon={faArrowLeftLong}
            />
          </button>
        )}
        <img
          src={fotoLogo}
          alt="logoPagina"
          className="logoPagina"
          onClick={home}
        />
        <div className="d-flex">
          {location.pathname !== "/nuevo-video" &&
            location.pathname !== "/nueva-categoria" && (
              <Link className="btnNuevoVideo" to="/nuevo-video">
                Nuevo Video
              </Link>
            )}
          <button
            className="btnBorrarCache"
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
          >
            Borrar Cache
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;

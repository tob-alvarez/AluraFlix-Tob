import "./footer.css";
import logo from "../../assets/logoTobFlix.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <ul className="enlacesFooter">
          <li>
            <Link to="https://github.com/tob-alvarez">Github</Link>
          </li>
          <li>
            <Link to="https://www.linkedin.com/in/tobias-alvarez99/">
              LinkedIn
            </Link>
          </li>
          <li>
            <Link to="#">Portfolio</Link>
          </li>
        </ul>
        <img src={logo} alt="logoPagina" />
      </div>
    </footer>
  );
};

export default Footer;

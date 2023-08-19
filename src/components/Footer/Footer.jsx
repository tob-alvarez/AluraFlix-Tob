import "./footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <ul className="enlacesFooter">
          <li>
            <a href="https://github.com/tob-alvarez" target="_blank">
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/tobias-alvarez99/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
        </ul>
        <img src="src\assets\logoTobFlix.png" alt="logoPagina" />
      </div>
    </footer>
  );
};

export default Footer;

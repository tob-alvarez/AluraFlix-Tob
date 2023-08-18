import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IyGFoto1 from "../../assets/IyG1.jpg";
import IyGFoto2 from "../../assets/IyG2.jpg";
import IyGFoto3 from "../../assets/IyG3.jpg";
import IyGFoto4 from "../../assets/IyG4.jpg";
import "./IyG.css";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";

const IyG = () => {
  return (
    <>
      <div className="IyGSection">
        <h2 className="tituloIyG">Innovación y Gestión</h2>
        <span className="spanBack">
          Formación Innovación y Gestión de Alura Latam
        </span>
      </div>
      <section className="d-flex justify-content-between frontVideos">
        <img src={IyGFoto1} alt="" className="frontColVideos " />
        <img src={IyGFoto2} alt="" className="frontColVideos " />
        <img src={IyGFoto3} alt="" className="frontColVideos " />
        <img src={IyGFoto4} alt="" className="frontColVideos " />
      </section>
      <div className="contenedorFlechas">
        <div className="d-flex justify-content-between align-items-center contFlechaIzquierda">
          <FontAwesomeIcon icon={faArrowAltCircleLeft} className="flechaIzq" />
        </div>
        <div className="d-flex justify-content-between align-items-center contenedorFlecha">
          <FontAwesomeIcon icon={faArrowAltCircleRight} className="flechaDer" />
        </div>
      </div>
    </>
  );
};

export default IyG;

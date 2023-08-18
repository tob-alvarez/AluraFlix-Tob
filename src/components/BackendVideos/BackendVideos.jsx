import "./BackendVideos.css";
import backFoto1 from "../../assets/back1.png";
import backFoto2 from "../../assets/back2.png";
import backFoto3 from "../../assets/back3.png";
import backFoto4 from "../../assets/back4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";

const BackendVideos = () => {
  return (
    <>
      <div className="BackendSection">
        <h2 className="tituloBack">Back End</h2>
        <span className="spanBack">Formación Back End de Alura Latam</span>
      </div>
      <section className="d-flex justify-content-between backVideos">
        <div>
          <img src={backFoto1} alt="" className="frontColVideos " />
        </div>
        <div>
          <img src={backFoto2} alt="" className="frontColVideos " />
        </div>
        <div>
          <img src={backFoto3} alt="" className="frontColVideos " />
        </div>
        <div>
          <img src={backFoto4} alt="" className="frontColVideos " />
        </div>
        <div>
          <img src={backFoto4} alt="" className="frontColVideos " />
        </div>
        <div>
          <img src={backFoto4} alt="" className="frontColVideos " />
        </div>
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

export default BackendVideos;

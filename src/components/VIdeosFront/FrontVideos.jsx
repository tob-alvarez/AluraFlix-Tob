import "./FrontVideos.css";
import fotoFront1 from "../../assets/front1.png";
import fotoFront2 from "../../assets/front2.png";
import fotoFront3 from "../../assets/front3.png";
import fotoFront4 from "../../assets/front4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";

const FrontVideos = () => {
  return (
    <>
      <section className="d-flex justify-content-between frontVideos">
        <div>
          <img src={fotoFront1} alt="" className="frontColVideos " />
        </div>
        <div>
          <img src={fotoFront2} alt="" className="frontColVideos " />
        </div>
        <div>
          <img src={fotoFront3} alt="" className="frontColVideos " />
        </div>
        <div>
          <img src={fotoFront4} alt="" className="frontColVideos " />
        </div>
        <div>
          <img src={fotoFront4} alt="" className="frontColVideos " />
        </div>
        <div>
          <img src={fotoFront4} alt="" className="frontColVideos " />
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

export default FrontVideos;

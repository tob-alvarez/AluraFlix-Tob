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
import { useEffect, useState } from "react";

const IyG = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const storedVideos = JSON.parse(localStorage.getItem("videos"));
  const [videos, setVideos] = useState(storedVideos);

  console.log(storedVideos);
  useEffect(() => {
    localStorage.setItem("videos", JSON.stringify(videos));
  }, [videos]);

  const scrollCarousel = (direction) => {
    const carousel = document.querySelector(".carousel");
    const scrollAmount = 200; // Adjust this value as needed

    if (direction === "left") {
      if (scrollPosition > 0) {
        setScrollPosition(scrollPosition - scrollAmount);
      }
    } else {
      if (scrollPosition < carousel.scrollWidth - carousel.clientWidth) {
        setScrollPosition(scrollPosition + scrollAmount);
      }
    }
  };
  return (
    <>
      <div className="IyGSection">
        <h2 className="tituloIyG">Innovación y Gestión</h2>
        <span className="spanBack">
          Formación Innovación y Gestión de Alura Latam
        </span>
      </div>
      <section className="d-flex justify-content-between frontVideos">
        <div className="contenedorVideos">
          <div
            className="carousel"
            style={{
              transform: `translateX(-${scrollPosition}px)`,
              transition: "transform 0.5s ease",
            }}
          >
            <div className="video">
              <img src={IyGFoto1} alt="" className="frontColVideos " />
            </div>
            <div className="video">
              <img src={IyGFoto2} alt="" className="frontColVideos " />
            </div>
            <div className="video">
              <img src={IyGFoto3} alt="" className="frontColVideos " />
            </div>
            <div className="video">
              <img src={IyGFoto4} alt="" className="frontColVideos " />
            </div>
            {storedVideos == null ? (
              <></>
            ) : (
              storedVideos
                .filter((item) => item.categoria == "Inovacion y Gestion")
                .map((item) => {
                  return (
                    // eslint-disable-next-line react/jsx-key
                    <div className="video">
                      <img
                        src={item.linkImagen}
                        alt=""
                        className="frontColVideos "
                      />
                    </div>
                  );
                })
            )}
          </div>
        </div>
      </section>
      <div className="contenedorFlechas">
        <div
          className="d-flex justify-content-between align-items-center contFlechaIzquierda"
          onClick={() => scrollCarousel("left")}
        >
          <FontAwesomeIcon icon={faArrowAltCircleLeft} className="flechaIzq" />
        </div>
        <div
          className="d-flex justify-content-between align-items-center contenedorFlecha"
          onClick={() => scrollCarousel("right")}
        >
          <FontAwesomeIcon icon={faArrowAltCircleRight} className="flechaDer" />
        </div>
      </div>
    </>
  );
};

export default IyG;

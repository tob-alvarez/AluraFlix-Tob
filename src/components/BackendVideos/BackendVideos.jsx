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
import { useEffect, useState } from "react";

const BackendVideos = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const storedVideos = JSON.parse(localStorage.getItem("videos"));

  const [videos, setVideos] = useState(storedVideos);

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
      <div className="BackendSection">
        <h2 className="tituloBack">Backend</h2>
        <span className="spanBack">Formación Backend de Alura Latam</span>
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
              <img src={backFoto1} alt="" className="frontColVideos " />
            </div>
            <div className="video">
              <img src={backFoto2} alt="" className="frontColVideos " />
            </div>
            <div className="video">
              <img src={backFoto3} alt="" className="frontColVideos " />
            </div>
            <div className="video">
              <img src={backFoto4} alt="" className="frontColVideos " />
            </div>
            {storedVideos == null ? (
              <></>
            ) : (
              storedVideos
                .filter((item) => item.categoria == "Backend")
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

export default BackendVideos;

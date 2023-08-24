import { useEffect, useState } from "react";
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
  const storedVideos = JSON.parse(localStorage.getItem("videos"));
  const [videos, setVideos] = useState(storedVideos);

  console.log(storedVideos);
  useEffect(() => {
    localStorage.setItem("videos", JSON.stringify(videos));
  }, [videos]);

  const [scrollPosition, setScrollPosition] = useState(0);

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
      <div className="FrontendSection">
        <h2 className="tituloFront">Frontend</h2>
        <span className="spanBack">Formación Frontend de Alura Latam</span>
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
              <img src={fotoFront1} alt="" className="frontColVideos " />
            </div>
            <div className="video">
              <img src={fotoFront2} alt="" className="frontColVideos " />
            </div>
            <div className="video">
              <img src={fotoFront3} alt="" className="frontColVideos " />
            </div>
            <div className="video">
              <img src={fotoFront4} alt="" className="frontColVideos " />
            </div>
            {storedVideos == null ? (
              <></>
            ) : (
              storedVideos
                .filter((item) => item.categoria == "Frontend")
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

export default FrontVideos;

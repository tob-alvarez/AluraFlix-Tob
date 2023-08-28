import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import agregarVideo from "../../assets/agregarVideo.webp";

const ContenedorVideos = () => {
  const storedVideos = JSON.parse(localStorage.getItem("videos"));
  const storedCategorias = JSON.parse(localStorage.getItem("categorias"));
  const [videos, setVideos] = useState(storedVideos);
  const [categoria, setCategoria] = useState(storedCategorias);

  console.log(categoria);
  useEffect(() => {
    localStorage.setItem("videos", JSON.stringify(videos));
  }, [videos]);

  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollCarousel = (direction) => {
    const carousel = document.querySelector(".carousel");
    const scrollAmount = window.innerWidth * 0.4;

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
      {categoria?.map((cat) => {
        return (
          <>
            <div className="FrontendSection">
              <h2
                className="tituloFront"
                style={{ backgroundColor: `${cat.color}` }}
              >
                {cat.nombre}
              </h2>
              <span className="spanBack">{cat.descripcion}</span>
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
                  {storedVideos == null ? (
                    <></>
                  ) : (
                    storedVideos
                      .filter((item) => item.categoria == cat.nombre)
                      .map((item) => {
                        return (
                          // eslint-disable-next-line react/jsx-key
                          <div className="video">
                            <img
                              src={item.linkImagen}
                              alt="Agrega un video"
                              className="frontColVideos "
                              style={{ width: "100%", height: "235px" }}
                            />
                          </div>
                        );
                      })
                  )}
                  <div className="video">
                    <img
                      src={agregarVideo}
                      alt=""
                      className="frontColVideos "
                      style={{ width: "100%", height: "200px" }}
                    />
                  </div>
                </div>
              </div>
            </section>
            <div className="contenedorFlechas">
              <div
                className="d-flex justify-content-between align-items-center contFlechaIzquierda"
                onClick={() => scrollCarousel("left")}
              >
                <FontAwesomeIcon
                  icon={faArrowAltCircleLeft}
                  className="flechaIzq"
                />
              </div>
              <div
                className="d-flex justify-content-between align-items-center contenedorFlecha"
                onClick={() => scrollCarousel("right")}
              >
                <FontAwesomeIcon
                  icon={faArrowAltCircleRight}
                  className="flechaDer"
                />
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default ContenedorVideos;

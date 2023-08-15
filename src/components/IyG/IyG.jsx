import IyGFoto1 from "../../assets/IyG1.jpg";
import IyGFoto2 from "../../assets/IyG2.jpg";
import IyGFoto3 from "../../assets/IyG3.jpg";
import IyGFoto4 from "../../assets/IyG4.jpg";
import "./IyG.css";
import Slider from "react-slick";

const IyG = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    arrows: true,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="IyGSection">
        <h2 className="tituloIyG">Innovación y Gestión</h2>
        <span className="spanBack">
          Formación Innovación y Gestión de Alura Latam
        </span>
      </div>
      <section>
        <Slider {...settings} className="IyGVideos">
          <img src={IyGFoto1} alt="" className="frontColVideos " />
          <img src={IyGFoto2} alt="" className="frontColVideos " />
          <img src={IyGFoto3} alt="" className="frontColVideos " />
          <img src={IyGFoto4} alt="" className="frontColVideos " />
        </Slider>
      </section>
    </>
  );
};

export default IyG;

import "./BackendVideos.css";
import backFoto1 from "../../assets/back1.png";
import backFoto2 from "../../assets/back2.png";
import backFoto3 from "../../assets/back3.png";
import backFoto4 from "../../assets/back4.png";
import Slider from "react-slick";

const BackendVideos = () => {
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
      <div className="BackendSection">
        <h2 className="tituloBack">Back End</h2>
        <span className="spanBack">Formación Back End de Alura Latam</span>
      </div>
      <section className="d-flex justify-content-between backVideos">
        <Slider {...settings} className="IyGVideos">
          <img src={backFoto1} alt="" className="frontColVideos " />
          <img src={backFoto2} alt="" className="frontColVideos " />
          <img src={backFoto3} alt="" className="frontColVideos " />
          <img src={backFoto4} alt="" className="frontColVideos " />
          <img src={backFoto4} alt="" className="frontColVideos " />
        </Slider>
      </section>
    </>
  );
};

export default BackendVideos;

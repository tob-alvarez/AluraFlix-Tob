import "./FrontVideos.css";
import fotoFront1 from "../../assets/front1.png";
import fotoFront2 from "../../assets/front2.png";
import fotoFront3 from "../../assets/front3.png";
import fotoFront4 from "../../assets/front4.png";
import Slider from "react-slick";

const FrontVideos = () => {
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
      <section className="d-flex justify-content-between frontVideos">
        <Slider {...settings} className="IyGVideos">
          <img src={fotoFront1} alt="" className="frontColVideos " />
          <img src={fotoFront2} alt="" className="frontColVideos " />
          <img src={fotoFront3} alt="" className="frontColVideos " />
          <img src={fotoFront4} alt="" className="frontColVideos " />
          <img src={fotoFront4} alt="" className="frontColVideos " />
        </Slider>
      </section>
    </>
  );
};

export default FrontVideos;

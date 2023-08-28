import "./Home.css";
import fotoBanner from "../../assets/fotoPreviewVideo.png";
import FrontVideos from "../VideosFront/FrontVideos";
import BackVideos from "../BackendVideos/BackendVideos";
import IyG from "../IyG/IyG";
import ContenedorVideos from "../ContenedorVideos/ContenedorVideos";

const Home = () => {
  return (
    <>
      <section className="bannerPrincipal">
        <div className="bannerIzquierda">
          <h2 className="bannerTitulo">Front End</h2>
          <h3 className="bannerSubtitulo">Challenge React</h3>
          <p className="bannerParrafo">
            Este challenge es una forma de aprendizaje. Es un mecanismo donde
            podrás comprometerte en la resolución de un problema para poder
            aplicar todos los conocimientos adquiridos en la formación Reacta.
          </p>
        </div>
        <div className="bannerDerecha">
          <img src={fotoBanner} alt="" className="previewVideoBanner" />
        </div>
      </section>
      <FrontVideos />
      <BackVideos />
      <IyG />
      <ContenedorVideos />
    </>
  );
};

export default Home;

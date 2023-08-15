import "./Home.css";
import fotoBanner from "../../assets/fotoPreviewVideo.png";

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
            aplicar todos los conocimientos adquiridos en la formación React.
          </p>
        </div>
        <div className="bannerIzquierda">
          <img src={fotoBanner} alt="" className="previewVideoBanner" />
        </div>
      </section>
    </>
  );
};

export default Home;
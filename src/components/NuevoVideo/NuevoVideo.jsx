import "./NuevoVideo.css";

const NuevoVideo = () => {
  return (
    <>
      <section className="d-flex flex-column justify-content-center w-100 align-items-center formNuevoVideo">
        <h2 className="tituloNuevoVideo">Nuevo Video</h2>
        <form className="d-flex flex-column">
          <input
            type="text"
            placeholder="Titulo"
            className="inputsFormNuevoVideo"
          />
          <input
            type="text"
            placeholder="Link del Video"
            className="inputsFormNuevoVideo"
          />
          <input
            type="text"
            placeholder="Link de la imagen del video"
            className="inputsFormNuevoVideo"
          />
          <select className="inputsFormNuevoVideo">
            <option>---Elegi una categoria---</option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>
          <textarea
            min={20}
            max={240}
            placeholder="Descripción"
            className="inputsFormNuevoVideo"
          />
          <input
            type="text"
            placeholder="Codigo de Seguridad"
            className="inputsFormNuevoVideo"
          />
        </form>
        <div className="d-flex justify-content-around w-50 mt-3">
          <div className="d-flex gap-5">
            <button className="btnAgregarVideo">Guardar</button>
            <button className="btnBorrarForm">Limpiar</button>
          </div>
          <button className="btnAgregarVideo">Nueva Categoria</button>
        </div>
      </section>
    </>
  );
};

export default NuevoVideo;

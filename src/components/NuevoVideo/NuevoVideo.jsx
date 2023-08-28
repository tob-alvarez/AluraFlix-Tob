import { useEffect, useState } from "react";
import "./NuevoVideo.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import validarFormulario from "../validaciones";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NuevoVideo = () => {
  const storedCategorias = JSON.parse(localStorage.getItem("categorias"));
  const storedVideos = JSON.parse(localStorage.getItem("videos")) || [];
  const [videos, setVideos] = useState(storedVideos);
  const [errores, setErrores] = useState({});

  useEffect(() => {
    localStorage.setItem("videos", JSON.stringify(videos));
  }, [videos]);

  const guardarVideo = () => {
    const errores = validarFormulario(values);
    if (Object.values(values).some((value) => value === "")) {
      toast.error("Todos los campos deben completarse.");
      return;
    }
    if (Object.keys(errores).length === 0) {
      setVideos([...videos, values]);
      setValues(initialValues);
      setErrores({});
    } else {
      Object.values(errores).forEach((error) => {
        toast.error(error);
      });
    }
  };

  const initialValues = {
    titulo: "",
    linkVideo: "",
    linkImagen: "",
    categoria: "",
    descripcion: "",
    codigo: "",
  };

  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const borrarCampos = () => {
    setValues(initialValues);
  };

  const handleCategoria = (e) => {
    setValues({ ...values, categoria: e.target.value });
  };
  const navigate = useNavigate();
  const location = useLocation();
  const back = () => {
    navigate(-1);
  };

  return (
    <>
      <section className="d-flex flex-column justify-content-center w-100 align-items-center formNuevoVideo">
        <h2 className="tituloNuevoVideo">Nuevo Video</h2>
        <form className="d-flex flex-column w-50">
          <div className="inputBox">
            <input
              name="titulo"
              type="text"
              required="required"
              maxLength={20}
              onChange={handleChange}
              value={values.titulo}
            />
            <span>Titulo</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input
              name="linkVideo"
              type="text"
              required="required"
              onChange={handleChange}
              value={values.linkVideo}
            />
            <span>Link del Video</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input
              name="linkImagen"
              type="text"
              required="required"
              onChange={handleChange}
              value={values.linkImagen}
            />
            <span>Link del Imagen</span>
            <i></i>
          </div>
          <select
            value={values.categoria}
            className="inputsFormNuevoVideo inputSelect"
            onChange={handleCategoria}
          >
            <option>---Elegi una categoria---</option>
            <option>Frontend</option>
            <option>Backend</option>
            <option>Inovacion y Gestion</option>
            {storedCategorias == null ? (
              <></>
            ) : (
              storedCategorias.map((item) => {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <option>{item.nombre}</option>
                );
              })
            )}
          </select>
          <i className="iSelect"></i>
          <div className="inputBox">
            <textarea
              name="descripcion"
              type="text"
              required="required"
              onChange={handleChange}
              value={values.descripcion}
            />
            <span>Descripcion</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input
              name="codigo"
              type="text"
              required="required"
              onChange={handleChange}
              value={values.codigo}
            />
            <span>Codigo de Seguridad</span>
            <i></i>
          </div>
        </form>
        <div className="d-flex justify-content-around w-50 mt-3">
          <div className="d-flex gap-3 contenedorBotones">
            <button className="btnAgregarVideo" onClick={guardarVideo}>
              Guardar
            </button>
            <button className="btnBorrarForm" onClick={borrarCampos}>
              Limpiar
            </button>
            <Link to="/nueva-categoria" className="btnAgregarVideo">
              Nueva Categoria
            </Link>
            {location.pathname == "/nuevo-video" && (
              <button className="btnVolver" onClick={back}>
                <FontAwesomeIcon
                  className="btnVolverIcono"
                  icon={faArrowLeftLong}
                />
              </button>
            )}
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default NuevoVideo;

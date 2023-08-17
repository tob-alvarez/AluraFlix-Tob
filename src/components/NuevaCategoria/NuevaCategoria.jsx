import { useState } from "react";
import "./NuevaCategoria.css";

const NuevaCategoria = () => {
  const initialValues = {
    nombre: "",
    descripcion: "",
    color: "",
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

  return (
    <>
      <section className="d-flex flex-column justify-content-center w-100 align-items-center sectionCat">
        <h2 className="tituloNuevoVideo mb-5">Nueva Categoria</h2>
        <form action="" className="SpanForms d-flex flex-column formNuevaCat">
          <div className="inputBox">
            <input
              name="nombre"
              type="text"
              required="required"
              maxLength={15}
              onChange={handleChange}
              value={values.nombre}
            />
            <span>Nombre de Categoria</span>
            <i></i>
          </div>
          <div className="inputBox">
            <textarea
              name="descripcion"
              type="text"
              required="required"
              maxLength={140}
              onChange={handleChange}
              value={values.descripcion}
            />
            <span>Descripcion de Categoria</span>
            <i></i>
          </div>
          <div>
            <input
              className="w-100 mt-4"
              name="color"
              type="color"
              required="required"
              maxLength={15}
              onChange={handleChange}
              value={values.color}
            />
            <i></i>
          </div>
          <div className="inputBox">
            <input
              name="codigo"
              type="text"
              required="required"
              maxLength={6}
              onChange={handleChange}
              value={values.codigo}
            />
            <span>Codigo de seguridad</span>
            <i></i>
          </div>
        </form>
        <div className="d-flex justify-content-around w-50 mt-3">
          <div className="d-flex gap-5">
            <button className="btnAgregarVideo">Guardar</button>
            <button className="btnBorrarForm" onClick={borrarCampos}>
              Limpiar
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default NuevaCategoria;

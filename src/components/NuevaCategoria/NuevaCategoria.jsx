import { useEffect, useState } from "react";
import "./NuevaCategoria.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

const NuevaCategoria = () => {
  const initialValues = {
    nombre: "",
    descripcion: "",
    color: "",
    codigo: "",
  };

  // Obtener las categorías del localStorage al cargar el componente
  const storedCategorias = JSON.parse(localStorage.getItem("categorias")) || [];

  const [categorias, setCategorias] = useState(storedCategorias);
  const [values, setValues] = useState(initialValues);
  const [editingIndex, setEditingIndex] = useState(-1);

  useEffect(() => {
    localStorage.setItem("categorias", JSON.stringify(categorias));
  }, [categorias]);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const borrarCampos = () => {
    setValues(initialValues);
  };

  const guardarCategoria = () => {
    if (editingIndex === -1) {
      setCategorias([...categorias, values]);
    } else {
      const updatedCategorias = [...categorias];
      updatedCategorias[editingIndex] = values;
      setCategorias(updatedCategorias);
      setEditingIndex(-1);
    }
    borrarCampos();
  };

  const editarCategoria = (index) => {
    const categoriaToEdit = categorias[index];
    setValues(categoriaToEdit);
    setEditingIndex(index);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const borrarCategoria = (index) => {
    const updatedCategorias = [...categorias];
    updatedCategorias.splice(index, 1);
    setCategorias(updatedCategorias);
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
            <button className="btnAgregarCategoria" onClick={guardarCategoria}>
              Guardar
            </button>
            <button className="btnBorrarFormCategoria" onClick={borrarCampos}>
              Limpiar
            </button>
          </div>
        </div>
      </section>
      <section className="d-flex justify-content-center align-items-center mb-5 w-100">
        <table className="table w-75">
          <thead className="">
            <tr>
              <th scope="col">#</th>
              <th scope="col" className="columnaFijaNombre">
                Nombre
              </th>
              <th scope="col">Descripcion</th>
              <th scope="col" className="text-center columnaFijaIconos">
                Color
              </th>
              <th scope="col" className="text-center columnaFijaIconos">
                Editar
              </th>
              <th scope="col" className="text-center columnaFijaIconos">
                Borrar
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="columnaFijaIndice">
                1
              </th>
              <td className="columnaFijaNombre">Backend</td>
              <td>Backend</td>
              <td className="colorFront">#6bd1ff</td>
              <td className="text-center columnaFijaIconos">
                <FontAwesomeIcon icon={faPencil} />
              </td>
              <td className="text-center columnaFijaIconos">
                <FontAwesomeIcon icon={faTrash} />
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td className="columnaFijaNombre">Frontend</td>
              <td>Frontend</td>
              <td className="colorBack">#00c86f</td>
              <td className="text-center columnaFijaIconos">
                <FontAwesomeIcon icon={faPencil} />
              </td>
              <td className="text-center columnaFijaIconos">
                <FontAwesomeIcon icon={faTrash} />
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td className="columnaFijaNombre">Inovación y Gestión</td>
              <td>Inovación y Gestión</td>
              <td className="colorIyG">#ff8c2a</td>
              <td className="text-center columnaFijaIconos">
                <FontAwesomeIcon icon={faPencil} />
              </td>
              <td className="text-center columnaFijaIconos">
                <FontAwesomeIcon icon={faTrash} />
              </td>
            </tr>
            {categorias.map((item, index) => (
              <tr key={item.id}>
                <th scope="row columnaFijaIndice">{index + 4}</th>
                <td>{item.nombre}</td>
                <td>{item.descripcion}</td>
                <td style={{ backgroundColor: item.color }}>{item.color}</td>
                <td className="text-center columnaFijaIconos">
                  <FontAwesomeIcon
                    className="editable"
                    icon={faPencil}
                    onClick={() => editarCategoria(index)}
                  />
                </td>
                <td className="text-center columnaFijaIconos">
                  <FontAwesomeIcon
                    className="editable"
                    icon={faTrash}
                    onClick={() => borrarCategoria(index)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default NuevaCategoria;

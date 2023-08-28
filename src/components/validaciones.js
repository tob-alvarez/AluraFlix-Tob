export const validarFormulario = (values) => {
    const errores = {};

    if (values.titulo.length < 6 || values.titulo.length > 30) {
        errores.titulo = "El título debe tener entre 6 y 30 caracteres.";
    }
    if (Object.values(values).some((value) => value === "")) {
        errores.vacios = "Todos los campos deben completarse.";
    }
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    if (!urlRegex.test(values.linkVideo)) {
        errores.linkVideo = "Ingresa un enlace de video válido.";
    }
    if (!urlRegex.test(values.linkImagen)) {
        errores.linkImagen = "Ingresa un enlace de imagen válido.";
    }
    if (values.categoria === "---Elegi una categoria---") {
        errores.categoria = "Selecciona una categoría.";
    }
    const descripcionRegex = /^[a-zA-Z0-9,.!?()'\s]+$/;
    if (values.descripcion.length > 140 || !descripcionRegex.test(values.descripcion)) {
        errores.descripcion = "La descripción debe tener hasta 140 caracteres y no contener signos especiales.";
    }
    if (values.codigo !== "777") {
        errores.codigo = "El código de seguridad debe ser 777.";
    }

    return errores;
};

export default validarFormulario
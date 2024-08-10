// Variables
const inputNombre = document.querySelector("#nombre");
const inputTelefono = document.querySelector("#telefono");
const inputCorreo = document.querySelector("#correo");
const inputTextArea = document.querySelector("#textarea");
const formulario = document.querySelector("#formulario");

// Eventos
inputNombre.addEventListener("input", validarCampo);
inputTelefono.addEventListener("input", validarCampo);
inputCorreo.addEventListener("input", validarCampo);
inputTextArea.addEventListener("input", validarCampo);

// Funciones
function validarCampo(e) {
    const valorInputs = e.target.value.trim();  // Obtener el valor del campo y eliminar espacios en blanco.
    const errorDiv = e.target.parentElement.querySelector('.errorMensaje');  // Buscar el mensaje de error existente en el elemento padre.


    // Eliminar mensaje de error si el campo no está vacío y ya existe un mensaje de error.
    if (valorInputs !== "" && errorDiv) {
        errorDiv.remove();
    }

    
    // Mostrar mensaje de error si el campo está vacío y no hay un mensaje de error existente.
    if (valorInputs === "" && !errorDiv) {
        creaError(e, `Error: el campo ${e.target.id} no puede estar vacío`);
    }

    if (e.target.id === "correo" && valorInputs !== "") {
        if (!validarEmail(valorInputs)) {
            // Si el email no es válido y no hay un mensaje de error existente, crea un mensaje de error.
            if (!errorDiv) {
                creaError(e, `Error: el formato del correo electrónico no es válido`);
            }
        } else if (errorDiv) {
            // Si el email es válido, eliminar el mensaje de error.
            errorDiv.remove();
        }
    }

   
}

function creaError(e, mensaje){
    // Crear mensaje de error.
    const referencia = e.target.parentElement;
    const error = document.createElement("div");
    error.textContent = mensaje;
    error.classList.add('errorMensaje');
    referencia.appendChild(error);

}


function validarEmail(email){
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}




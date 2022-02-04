//MENSAJE UNA VEZ ENVIADO EL FORMULARIO
let botonForm = document.getElementById("botonFormulario");
botonForm.addEventListener('click', msjPostFormulario);

function msjPostFormulario() {
    let usuario = document.getElementById("nombreyapellido").value;
    let nombreCliente = document.getElementById("texto");
    nombreCliente.innerHTML = `
      <h4>Gracias <b>${usuario}</b> por completar el formulario!</h4>
      <h5>Validaremos tus datos y nos contactaremos contigo a la brevedad</h5>
    `
}
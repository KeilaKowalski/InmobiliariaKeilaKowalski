//MENSAJE UNA VEZ ENVIADO EL FORMULARIO
let botonForm = document.getElementById("botonFormulario");

botonForm.addEventListener('click', () => {
  swal({
    title: "Formulario enviado",
    text: "Nos comunicaremos contigo cuanto antes.",
    icon: "success",
    button: "Cerrar",
  });

})

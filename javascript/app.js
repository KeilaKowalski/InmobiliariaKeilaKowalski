// let accion = prompt("Escriba la opción que desee realizar: comprar - vender - alquilar").toLowerCase();
// while (accion === "") {
//     alert("Porfavor ingrese su acción");
// } if (accion === "comprar" || accion === "alquilar") {
//     console.log("Usted desea " + accion);
// } else if (accion === "vender") {
//     console.log("Complete el formulario para comunicarse con nosotros");
// } else {
//     console.log("Opción ingresada no valida");
// }

//FUNCION PARA CALCULAR PRECIO TOTAL DE HA Y COMISION DE TODOS LOS INMUEBLES
function calculoDePrecios() {
    for (const inmueble of inmuebles) {
        console.log(inmueble.precioTotalDeHa());
        console.log(inmueble.sumaComision());
    }
}
// calculoDePrecios();

//Descomentar para verificar la otra opcion para calculcar precio y comision de los inmuebles:
// inmuebles.forEach((elemento) => {
//     console.log(elemento.precioTotalDeHa());
//     console.log(elemento.sumaComision());
// });

//MAPEO PARA SABER RESULTADO DE PRECIO * HA DE CADA INMUEBLE
const inmueblesPreciosDeHa = inmuebles.map((elemento) => {
    return {
        id: elemento.id,
        precio: elemento.precioTotalDeHa()
    }
})
// console.log(inmueblesPreciosDeHa);

//PARA GENERAR UN BOTON DE FILTRO ALFABETICO 
const ubicacionOrdenada = inmuebles.sort((a, b) => {
    if (a.ubicacion > b.ubicacion) {
        return 1;
    }
    if (a.ubicacion < b.ubicacion) {
        return -1;
    }
})
// console.log(ubicacionOrdenada);

//PARA FILTRAR POR TIPO DE INMUEBLE
const campos = inmuebles.filter((elemento) => elemento.tipo.includes("campo"));
// console.log(campos);
const chacras = inmuebles.filter((elemento) => elemento.tipo.includes("chacra"));
// console.log(chacras);
const fincas = inmuebles.filter((elemento) => elemento.tipo.includes("finca"));
// console.log(fincas);

//CREAR ELEMENTOS MANIPULANDO EL DOM A PARTIR DE LA INFO DE MIS OBJETOS DENTRO DEL ARRAY
//MODIFICAR ETIQUETAS EXISTENTES EN FUNCION DEL RESULTADO DE OPERACIONES

const contenedorInmuebles = document.getElementById("contenedorInmuebles");
const selectFiltro = document.getElementById("filtro");

selectFiltro.addEventListener('change', () => {
    console.log(selectFiltro.value);
    if(selectFiltro.value === "todos"){
        mostrarInmuebles(inmuebles);
    }else {
        console.log(inmuebles.filter(elemento => elemento.tipo === selectFiltro.value));
        mostrarInmuebles(inmuebles.filter(elemento => elemento.tipo === selectFiltro.value));
    }
})
mostrarInmuebles(inmuebles)

function mostrarInmuebles (array) {
      contenedorInmuebles.innerHTML = "";
    array.forEach((producto) => {
        let div = document.createElement("div");
        div.className = "producto";
        div.innerHTML += ` 
        <div class="card" style="width: 15rem;">
        <img src="${producto.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title fs-3">${producto.tipo}</h5>
          <p class="card text">${producto.ubicacion}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">(${producto.ha}ha)</li>
          <li class="list-group-item">Por ha $${producto.precio}USD</li>
        </ul>
        <div class="card-body">
          <a href="../secciones/campos.html" class="card-link">Contacto</a>
          <a href="#" class="btn btn-success">${producto.accion}</a>
        </div>
      </div>
        `;
        contenedorInmuebles.appendChild(div);
    })
}

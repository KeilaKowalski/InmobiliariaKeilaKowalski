let carritoDeCompras = [];

const contenedorInmuebles = document.getElementById("contenedorInmuebles");
const contenedorCarrito = document.getElementById('carrito-contenedor');

const contadorCarrito = document.getElementById("contadorCarrito");
const precioTotalComi = document.getElementById("precioTotalComi");
const precioTotalHa = document.getElementById("precioTotalHa");
const precioTotal = document.getElementById("precioTotal");

const selectFiltro = document.getElementById("filtro");

const buscador = document.getElementById("search");


const mostrarInmuebles = async () => {
    const responseInmuebles = await fetch("../inmuebles.json");
    const inmuebleS = await responseInmuebles.json();

    contenedorInmuebles.innerHTML = "";
    inmuebleS.forEach( (producto) => {
         //Alias desestructuracion
         const {id, img, tipo, ubicacion, ha, precio, accion} = producto;

      let div = document.createElement("div");
      div.className = "producto";
      div.innerHTML += ` 
                      <div class="card" style="width: 12rem;">
                      <img src="${img}" class="card-img-top imgCampoContenedor" alt="...">
                      <div class="card-body divUbicacion">
                          <h5 class="card-title fs-6">${tipo}</h5>
                          <p class="card text">${ubicacion}</p>
                      </div>
                      <ul class="list-group list-group-flush ulHaPrecio">
                          <li class="list-group-item">(${ha}ha)</li>
                          <li class="list-group-item">Por ha $${precio}USD</li>
                      </ul>
                      <div class="card-body">
                          <a href="../secciones/contacto.html" class="card-link">Contacto</a>
                          <a href="#" class="btn btn-secondary">${accion}</a>
                          <a id="botonAgregar${id}" class="btn-floating halfway-fab waves-effect waves-light red"><i class="fas fa-cart-plus"></i></a>
                      </div>
                      </div>
      `;
      contenedorInmuebles.appendChild(div);

      let btnAgregar = document.getElementById(`botonAgregar${id}`);
        
        btnAgregar.addEventListener('click', () => {
            //console.log(btnAgregar.id);
            agregarAlCarrito(id)
            Toastify({
                text: "Agregado al carrito",
                duration: 2000,
                style: {
                  backgroundColor: "rgb(2,0,36)",
                }
              }).showToast();
        })
    })
 };
 mostrarInmuebles();
 

 const BuscadorYFiltro = async () => {
    const responseInmuebles = await fetch("../inmuebles.json");
    const inmuebleS = await responseInmuebles.json();

    //FILTRO
    selectFiltro.addEventListener('change', () => {
        console.log(selectFiltro.value);
        if(selectFiltro.value === "todos"){
            mostrarInmuebles();
        }else {
            console.log(inmuebleS.filter(elemento => elemento.tipo === selectFiltro.value))
             mostrarInmuebles(inmuebleS.filter(elemento => elemento.tipo === selectFiltro.value));
        }
    })
    //BUSCADOR TERNARIO
    buscador.addEventListener('input', () => {
        buscador.value === "" ? mostrarInmuebles(inmuebleS) : mostrarInmuebles(inmuebleS.filter(elemento => elemento.ubicacion.toLowerCase().includes(buscador.value.toLowerCase())))
    });
 }
 BuscadorYFiltro();

 
//ECOMMERCE
//mostrarInmuebles(inmuebles)
// function mostrarInmuebles (array) {
//     contenedorInmuebles.innerHTML = "";
//   array.forEach((producto) => {

//       //Alias desestructuracion
//       const {id, img, tipo, ubicacion, ha, precio, accion} = producto;

//       let div = document.createElement("div");
//       div.className = "producto";
//       div.innerHTML += ` 
//                       <div class="card" style="width: 12rem;">
//                       <img src="${img}" class="card-img-top imgCampoContenedor" alt="...">
//                       <div class="card-body divUbicacion">
//                           <h5 class="card-title fs-6">${tipo}</h5>
//                           <p class="card text">${ubicacion}</p>
//                       </div>
//                       <ul class="list-group list-group-flush ulHaPrecio">
//                           <li class="list-group-item">(${ha}ha)</li>
//                           <li class="list-group-item">Por ha $${precio}USD</li>
//                       </ul>
//                       <div class="card-body">
//                           <a href="../secciones/contacto.html" class="card-link">Contacto</a>
//                           <a href="#" class="btn btn-secondary">${accion}</a>
//                           <a id="botonAgregar${id}" class="btn-floating halfway-fab waves-effect waves-light red"><i class="fas fa-cart-plus"></i></a>
//                       </div>
//                       </div>
//       `;
//       contenedorInmuebles.appendChild(div);

//       let btnAgregar = document.getElementById(`botonAgregar${id}`);
        
//         btnAgregar.addEventListener('click', () => {
//             //console.log(btnAgregar.id);
//             agregarAlCarrito(id)
//             Toastify({
//                 text: "Agregado al carrito",
//                 duration: 2000,
//                 style: {
//                   backgroundColor: "rgb(2,0,36)",
//                 }
//               }).showToast();
//         })
//   })
// };
// mostrarInmuebles(inmuebles);

function agregarAlCarrito(id) {

    let repetido = carritoDeCompras.some(item => item.id === id);
    if (!repetido) {
        console.log(repetido);
    
        let productoAgregar = inmuebles.find(elemento => elemento.id === id);
     //console.log(productoAgregar);
    // Lo que hay en carritoDeCompras se conserva, y se agrega este objeto
    carritoDeCompras = [...carritoDeCompras, productoAgregar];
    actualizarCarrito();
    mostrarCarrito(productoAgregar);
    } 
 localStorage.setItem('carrito', JSON.stringify(carritoDeCompras));  
}

function mostrarCarrito(productoAgregar) {

    //Alias desestructuracion
    const {id, img, tipo, ubicacion, ha, precio, accion } = productoAgregar;

    let div = document.createElement("div");
    div.className = "productoEnCarrito";
    div.innerHTML += `
                     <p>${tipo} - ${ubicacion}</p>
                     <p>Precio por ha $${precio}</p>
                     <button id=botonEliminar${id} class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
    `
    contenedorCarrito.appendChild(div);

    let btnEliminar = document.getElementById(`botonEliminar${id}`);
    btnEliminar.addEventListener("click", () => {
        if(productoAgregar) {
          console.log(id);
          btnEliminar.parentElement.remove();
          carritoDeCompras = carritoDeCompras.filter(elemento => elemento.id != id);
          actualizarCarrito();
          Toastify({
            text: "Eliminado",
            duration: 2000,
            style: {
              backgroundColor: "rgb(2,0,36)",
            }
          }).showToast();
          localStorage.setItem('carrito', JSON.stringify(carritoDeCompras));
        }
    })
}
//mostrarCarrito(productoAgregar)

function actualizarCarrito() {
    //contadorCarrito.innerText = carritoDeCompras.reduce((acc, el) => acc + el.tipo, 0); 
    let precioComision = carritoDeCompras.reduce((acc, el) => acc + ((el.ha * el.precio) * 0.03), 0);
    let precioHa = carritoDeCompras.reduce((acc, el) => acc + (el.ha * el.precio), 0); 
    precioTotalComi.innerText = precioComision;
    precioTotalHa.innerText = precioHa;
    precioTotal.innerText = precioComision + precioHa;
}

function recuperar() {
    let recuperarLS = JSON.parse(localStorage.getItem('carrito'));
    console.log(recuperarLS);

    //AND (if recuperarLS es true/ rta verdadera)
    recuperarLS &&
        recuperarLS.forEach(el=> {
            agregarAlCarrito(el.id)
        })
}
recuperar()



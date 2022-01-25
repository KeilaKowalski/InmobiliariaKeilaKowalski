
let accion = prompt("Escriba la opción que desee realizar: comprar - vender - alquilar").toLowerCase();
while (accion === "") {
    alert("Porfavor ingrese su acción");
} if (accion === "comprar" || accion === "alquilar") {
    console.log("Usted desea " + accion);
} else if (accion === "vender") {
    console.log("Complete el formulario para comunicarse con nosotros");
} else {
    console.log("Opción ingresada no valida");
}

//Creacion de objetos
class Inmueble {
    constructor (tipo, ubicacion, ha, precio) {
        this.tipo = tipo;
        this.ubicacion = ubicacion;
        this.ha = ha;
        this.precio = precio;
    }
    precioTotalDeHa(){
        let precioTotal = this.ha * this.precio;
        return precioTotal;
    }
    sumaComision() {
       let comision = this.precioTotalDeHa() * 0.03;
       return `El precio de la comisión es de ${comision}USD.`
    }
}

//Array para almacenar objetos(inmuebles)
const inmuebles = [];
inmuebles.push(new Inmueble("campo", "Alma Fuerte, Córdoba", 1200, 1500));
inmuebles.push(new Inmueble("chacra", "Ctalamochita, Córdoba", 5, 800));
inmuebles.push(new Inmueble("finca", "Punilla, Córdoba", 4, 1000));

for (const inmueble of inmuebles) {
    console.log(inmueble.tipo);
    console.log(inmueble.precioTotalDeHa());
    console.log(inmueble.sumaComision());
;}


//Descomentar esta parte para que apareza el prompt:
// let precioProducto = parseInt(prompt("Ingrese el número de producto que desea comprar: 1-Arroz / 2-Aceite / 3-Azucar"));
//     if (precioProducto === 0) {
//         console.log("Numero no valido");
//     } else if (precioProducto === 1){
//         console.log("El precio del arroz es de $100");
//     } else if (precioProducto === 2) {
//         console.log("El precio del aceite es de $150");
//     } else if (precioProducto === 3){
//         console.log("El precio del azucar es de $200");
//     } 

//Descomentar la siguiente parte para la funcion:
// let input = prompt("ingrese que producto desea llevar").toLowerCase();
//     function total() {
//         let arroz = 100;
//         let aceite = 150;
//         let azucar = 200;
//         const resultado = arroz + aceite + azucar;
//         if(input === "arroz aceite azucar") {
//             console.log(`El total de sus productos es $${resultado}`);
//         } else if (input === "arroz aceite") {
//             console.log(`El total de sus productos es $${arroz + aceite}`);
//         } else if (input === "arroz azucar") {
//             console.log(`El total de sus productos es $${arroz + azucar}`);
//         } else if (input === "aceite azucar") {
//             console.log(`El total de sus productos es $${aceite + azucar}`);
//         }   
//     }
//     total();

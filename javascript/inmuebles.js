//CLASE-MOLDE PARA CREAR OBJETOS
class Inmueble {
    constructor (id, img, tipo, ubicacion, ha, precio, accion) {
        this.id = id;
        this.img = img;
        this.tipo = tipo;
        this.ubicacion = ubicacion;
        this.ha = ha;
        this.precio = precio;
        this.accion = accion;
    }
    precioTotalDeHa(){
        let precioTotal = this.ha * this.precio;   
        return precioTotal;
    }
    sumaComision() {
       let comision = this.precioTotalDeHa() * 0.03;
       return `El precio de la comisión es de ${comision} USD.`
    }
}

//ARRAY PARA ALMACENAR OBJETOS(INMUEBLES)
const inmuebles = [];
inmuebles.push(new Inmueble(1, '../multimedia/campos/campo1_1_.webp', "Campo", "Alma Fuerte, Córdoba", 1200, 1500, "Vende"));
inmuebles.push(new Inmueble(2, "../multimedia/campos/campo2_1_.webp", "Campo", "San Luis, San Luis", 1800, 1300, "Alquila"));
inmuebles.push(new Inmueble(3, "../multimedia/campos/campo4_1_.webp", "Campo", "Rio Cuarto, Córdoba", 300, 1000, "Vende"));
inmuebles.push(new Inmueble(4, "../multimedia/campos/campo5_1_.webp", "Campo", "Villa La Punta, Santiago del Estero", 1700, 1750, "Alquila"));
inmuebles.push(new Inmueble(5, "../multimedia/campos/campo6-_1_.webp", "Campo", "La Banda, Santiago del Estero", 1200, 1300, "Alquila"));
inmuebles.push(new Inmueble(6, "../multimedia/campos/campo7-_1_.webp", "Campo", "Venado Tuerto, Santa Fe", 1900, 1400, "Vende"));
inmuebles.push(new Inmueble(7, "../multimedia/campos/campo8-_1_.webp", "Campo", "Luján, Mendoza", 1300, 900, "Vende"));
inmuebles.push(new Inmueble(8, "../multimedia/campos/chacra1-_1_.webp", "Chacra", "Ctalamochita, Córdoba", 5, 800, "Vende"));
inmuebles.push(new Inmueble(9, "../multimedia/campos/chacra2-_1_.webp", "Chacra", "San Luis, San Luis", 3, 700, "Vende"));
inmuebles.push(new Inmueble(10, "../multimedia/campos/chacra3-_1_.webp", "Chacra", "Mina Clavero, Córdoba", 1, 1200, "Vende"));
inmuebles.push(new Inmueble(11, "../multimedia/campos/chacra4-_1_.webp", "Chacra", "Santiago del Estero, Santiago del Estero", 2, 1200, "Vende"));
inmuebles.push(new Inmueble(12, "../multimedia/campos/finca1-_1_.webp", "Finca", "Punilla, Córdoba", 4, 1000, "Alquila"));
inmuebles.push(new Inmueble(13, "../multimedia/campos/finca2-_1_.webp", "Finca", "El Durazno, Córdoba", 15, 1000, "Vende"));
inmuebles.push(new Inmueble(14, "../multimedia/campos/finca3-_1_.webp", "Finca", "Avellaneda, Santa Fe", 10, 750, "Vende"));
inmuebles.push(new Inmueble(15, "../multimedia/campos/finca4.webp", "Finca", "Santa Rosa, La Pampa", 6, 900, "Vende"));
inmuebles.push(new Inmueble(16, "../multimedia/campos/finca5.webp", "Finca", "Villa Gral Belgrano, Córdoba", 5, 1250, "Vende"));

///////////////////////
//** Destructuring **//
///////////////////////

// Destructuring de objetos //

// const { nombre, precio, disponible } = producto;
// console.log(nombre);
// console.log(precio);
// console.log(disponible);


// Destructuring con 2 o más objetos (que tienen nombres de propiedades iguales)

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
};

// const cliente = {
//     nombre: 'Pedro',
//     premium : true
// }

let { nombre, precio } = producto

//producto.nombre = "Pepe";

console.log(producto);
console.log(producto);

// Se asigna un alias al nombre del cliente, para que no haya conflictos de nombres
// const { nombre: nombreCliente, premium } = cliente

// console.log(nombre)
// console.log(nombreCliente)



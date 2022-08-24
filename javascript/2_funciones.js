////////////////////
//** Funciones **//
///////////////////


// Funciones declarativas //

// Admiten hoisting
sumar(5,2);

function sumar(numero1, numero2) {
    return numero1 + numero2;
}
const resultado = sumar(6,4);


// Expresiones de funcion //
// Expresión de función - con valores por defecto //
const multiplicar = function(numero1 = 2, numero2 = 2) {
    return numero1 * numero2
}
console.log('Resultado función multiplicar', multiplicar());


// Función flecha //
// const restar = (numero1, numero2) => {
//     return numero1 - numero2
// }

//con dos o más parámetros
const restar = (numero1, numero2) =>  numero1 - numero2;
;

//con un solo parámetro
const saludar = nombre => console.log(`Hola ${nombre}`);
saludar('Florencia');






////////////////////////
//** Tipos de datos **//
////////////////////////

// Undefined
let cliente;
console.log(cliente);

// String
const cliente2= "Pedro";
const cliente3= 'Juan';

// 
const numero = 205765765765765757675676.87887887887878;
console.log(typeof numero)

const numero2 = "20";
console.log(typeof numero2)


//BigInt
const numeroGrande = BigInt(89305834095903583405934);
console.log(typeof numeroGrande);


// Null
const cosa = null;
console.log(cosa);


const numero3 = 20;
const numero4= "20";

if(numero3 == numero4) {
    console.log("Son iguales")
} else {
    console.log("No son iguales")
}


if(numero3 === numero4) {
    console.log("Son iguales")
} else {
    console.log("No son iguales")
}

//

const var1 = 0;
const var2 = [];

if(var1 == var2) {
    console.log("Son iguales")
} else {
    console.log("No son iguales")
}

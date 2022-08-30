import esClienteConDescuento, { CODIGO_CLIENTE_VIP } from './11_export.js';

const generarDescuento = (codigoCliente) => 
esClienteConDescuento(codigoCliente)
    ? `Aplica descuento (código de cliente: ${CODIGO_CLIENTE_VIP})`
    : 'No aplica descuento';


console.log(generarDescuento(29));
console.log(generarDescuento(35));
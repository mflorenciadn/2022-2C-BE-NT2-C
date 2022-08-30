/////////////////
//** Exports **//
/////////////////

const CODIGO_CLIENTE_VIP = 35;

const esClienteConDescuento = codigoCliente => codigoCliente === CODIGO_CLIENTE_VIP 

const variableExcursionista = 'Hola, no sirvo para nada';

// Puede ser 1 solo
export default esClienteConDescuento;
//o directamente: export default CODIGO_CLIENTE_VIP = 35;

export { CODIGO_CLIENTE_VIP, variableExcursionista };
export function add(x, y) {
  return x + y;
}

export function subtract(x, y) {
  return x - y;
}

export function multiply(x, y) {
  return x * y;
}

export function divide(x, y) {
  return x / y;
}

//forma de esportar tema 5, es la forma vieja de exportar
// module.exports = {
//     add,
//     subtract,
//     multiply,
//     divide
// }

//forma de exportar tema 23, forma nueva de exportar segun EmacScript
export default  { // exportando por defecto, tambien puede ser individuales
    add,
    subtract,
    multiply,
    divide
}

//tambien podemos exportar por separado por ejemplo
// export function add(x, y) {
//   return x + y;
// }
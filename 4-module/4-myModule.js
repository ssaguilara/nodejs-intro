const name = 'Sergio'
const number = 30
const array = [1,2,3]
const address = {Country:'Colombia', City:'Medellin'}

// console.log(module) // ejecutar: node 4-module/4-mymodule.js

// lo importante es la propiedad exports

//module.exports = name

// console.log(module) // se observa que dentro de la propiedad export tenemos 'Sergio', podemos poner cualquier cosas, string, numero, booleano, funcion


//todo COMO EXPORTAR VARIAS COSAS, primero definimos(name, numer, array, address) y luego guardamos en un objeto pa exportar

const group = {name,number,array,address}
module.exports = group

//exportar de forma individual, util para evitar compartir un dato en este caso address, los primeros del lado izquierdo pueden se cualquier nombre y eso se llaman por ese nombre en el otro archivo, por practicidad mehor ponerlos igual
// module.exports.name = name
// module.exports.number = number
// module.exports.array = array


//node 4-main.js

const obj = require('./4-module/4-myModule') // ruta relativa, no es necesario poner el .js
// sintaxis traer modulos, se necesita que en esa ruta este en export lo que se quiere utilizar

console.log(obj)//Trae todo el objeto

//nueva forma de traer el valor de propiedades de un objeto
const {name,number} = require('./4-module/4-myModule') 

console.log(name,number)


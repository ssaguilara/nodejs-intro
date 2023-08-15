// modulos de terceros open source
// https://www.npmjs.com/

//npm administracion de packetes de node
//verificar que si lo tenemos en nuestra consola escribimos npm --version
//tomamos de la pagina el instalador npm install colors,  npm i colors (solo la i ya sabe que es de install)
//varios modulos npm i lodash days bootstrap

//muy util el package.json por es un objeto con la lista de todos los modulos que hemos instaldo por si se borra la carpeta node_modules y queremos recuperarla ponemos: npm install

//modulos que dependen de otros modulos se ven en el package-lock-json

//quitar modulos, por ejemplo npm remove colors


//traemos el modulo descargado
const colors = require('colors')

console.log("hello word".bgGreen)
console.log("I'm Sergio".bgYellow)
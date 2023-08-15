// forma de importar estandar en node

//https://nodejs.org/api/modules.html

//crear packagejson por defecto
//npm init -y  

//agregamos para podes usar export e import de js
//"type": "module" //en packagejson

//ver el otro archivo para entender bien esto

//const math = require('./5-math/5-math')    //forma vieja
import matematicas, {add,subtract} from './5-math/5-math.js' //trayendolo a un modulo llamado matematicas, ponemos el nombre que queramos

console.log(matematicas.add(20,10))
console.log(matematicas.subtract(20,10))
console.log(matematicas.multiply(20,10))
console.log(matematicas.divide(20,10))


console.log(add(20,10))
console.log(subtract(20,10))

// import {add,subtract} from './5-math/5-math.js' //trayendolo modulos individuales
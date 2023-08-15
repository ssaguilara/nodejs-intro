/*
npm init
package name: (13-first-node-project) firstproject
version: (1.0.0) 0.0.1
description: Este es mi primer proyecto
entry point: (index.js) app.js 
test command: 
git repository:
keywords: first,project,nodejs
author: ssaguilara
license: (ISC)
*/

//lo anterior es para crear un package.JSON con esta informacion
//esto es esencial para darle informacion a otros tipos de sistemas como npm

// la seccion script es para crear nuestros propios comandos por ejemplo npm run ejecutar (script {"ejecutar": "node app.js"})
// hay nombres comunes como npm start (debe estar en nuestro scrip y por ser comun no requiere run para ejecutar)

const colors = require('colors')

console.log("hello word 4".bgWhite.green.italic)

// modulo para ejecutar automaticamnete, modulo reunica codigo llamado nodemon

//para diferenciar modulos de desarrollo, de modulos de experiencia de desarrollo ponemos -D al final
//ponemos por ejeemplo: npm i nodemon -D
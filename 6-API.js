// https://nodejs.org/api/modules.html

//por ejemplo HTTP para crear servidores, file system para creaer y leer archivos, net y os para interactuar con el sistema operativo, path para trabajar con rutas del sistema operativo

const os = require('os')

console.log(os.userInfo())//objeto con informacion del sistema
console.log(os.uptime())//tiempo que a transcurrido en segundos desde que se prendio el pc
console.log(os.platform())//sistema operativo que ejecuto node
console.log(os.totalmem())//ver memoria total
console.log(os.freemem())//ver memoria libre

console.table({
    os: os.platform(),
    version: os.release(),
    totalMemory: os.totalmem()
})
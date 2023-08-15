const path = require('path')

//console.log(path)//ver propiedades, recordar son distintas dependiendo del sistema operativo

const filePath = path.join('/public','dist','/style','main.css')//unir rutas, para importar archivos muy usado en backend

console.log(filePath) // \public\dist\style\main.css
console.log(path.basename(filePath)) // main.css
console.log(path.dirname(filePath)) // \public\dist\style
console.log(path.parse(filePath)) // ruta en formato de objeto

console.log(path.resolve(`dis`)) //alternativa join y lo trata de llenar con la ruta del sistema operativo
// C:\Users\Admin\Desktop\Node JS\dis
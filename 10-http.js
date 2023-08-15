const http = require('http')

http.createServer(function (request, response){

    //console.log(request) // el objeto http con toda la informacion del cliente

    response.write('Hello world')
    response.end()
}).listen(3000) //numero de puerto 

console.log("servidor escuchando en el puerto 3000") // verificamos luego de ejecutar localhost:3000, ctrl + c para cancelar el servidor
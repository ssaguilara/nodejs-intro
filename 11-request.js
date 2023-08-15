const http = require("http");

const server = http.createServer(function (request, response) {
  console.log(request.url); // el cliente devuelve informacion en modo de objeto
  //se hace la peticion url llegan dos, el primero es el nombre y el segundo es un icono

  if (request.url === "/") {
    response.write("Welcome to the Jungle");
    return response.end();
  }

  if (request.url === "/about") {
    response.write("acerca de");
    return response.end();
  }

  response.write(`
    <h1>Not Found</h1>
    <p>Esta pagina no se encontro</p>
    <a href="/">Volver a la pagina principal<a>
    `);
  response.end();
});

server.listen(3000); //numero de puerto

// en la practica no se utiliza porque ya hay modulos para esto

console.log("servidor escuchando en el puerto 3000"); // verificamos luego de ejecutar localhost:3000, ctrl + c para cancelar el servidor

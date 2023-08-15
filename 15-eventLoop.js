// console.log("first");

// setTimeout(() => {
//  console.log("second");    
// }, 0);

// aqui el detalle es porque node para hacer varias tareas al mismo tiempo, cuando uno se va haciendo node lo delega al sistema y mientras se ejecuta pasa al siguiente tarea

// console.log("third");

const http = require('http')


const server = http.createServer(function (req, res){
    
    if (req.url === "/") {
        res.write("Welcome to the Server");
        return res.end();
      }

    if (req.url === "/about") {

        //blocking code
        for(let i=0; i< 10000; i++){ // simular una tarea pesada mientras esta en about, observa que se queda cargando y esto bloquea el hilo de node y deja hacer otras peticiones hasta que termine
            console.log(Math.random()*i)
        }

    return res.end("About pages");
    }

    res.end("Not Found");


})

server.listen(3000) 
console.log('Server on port 3000')
const { readFile } = require("fs");

// convertir un callback a una promesa
const getText = (pathFile) => {
  return new Promise(function (resolve, reject) {
    readFile(pathFile, "utf-8", function (error, data) {
      if (error) 
      reject(error);

      resolve(data);
    });
  });
}

// getText("./8-data/first.txt") 
//     .then((result) => console.log(result))
//     .then(() => getText("./8-data/second.txt"))
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err));

async function read() { // lo mismo que lo comentado anteriormente
    try{
        const result1 = await getText("./8-data/first.txt")//no es necesario encadenar con then
        const result2 = await getText("./8-data/second.txt")
        console.log(result1,result2)
        throw new Error('Este es un error que no se esperaba')//ejecuta las primeras dos y despues lanza un error y llega al cath, esto es util si una biblioteca genera el error y lo capturamos con este cath
        //throw acaba con la ejecucion
        //error generar errores propios
        const result3 = await getText("./8-data/third.txt")
        console.log(result3)
    }
    catch(error){
        console.log(error)
    }
}

read()

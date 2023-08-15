const { readFile } = require("fs");

// convertir un callback a una promesa
function getText(pathFile) {
  return new Promise(function (resolve, reject) {
    readFile(pathFile, "utf-8", function (error, data) {
      if (error) 
      reject(error);

      resolve(data);
    });
  });
}

getText("./8-data/first.txt") //pasando el parametro
    .then((result) => console.log(result))
    .then(() => getText("./8-data/second.txt"))// ahora vamos a leer otro archivo
    .then((result) => console.log(result))
    .catch((err) => console.log(err));

    //si alguno de los then falla pueden ser depurados por un solo catch
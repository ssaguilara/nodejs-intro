const { readFile,  } = require("fs/promises"); // mismas funciones que antes pero vienen convertidas en promesas 


// convertir un callback a una promesa
// const getText = (pathFile) => {
//   return new Promise(function (resolve, reject) {
//     readFile(pathFile, "utf-8", function (error, data) {
//       if (error) 
//       reject(error);

//       resolve(data);
//     });
//   });
// }

async function read() {
    try{
        const result1 = await readFile("./8-data/first.txt","utf-8")
        const result2 = await readFile("./8-data/second.txt","utf-8")
        const result3 = await readFile("./8-data/third.txt","utf-8")
        console.log(result1,result2)
        console.log(result3)
    }
    catch(error){
        console.log(error)
    }
}

read()

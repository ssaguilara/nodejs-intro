// streams nos ayudan poder enviar un archivo grande en multiples partes


// const {writeFile}= require('fs/promises')

// const createBigFile = async () => {
//     await writeFile('./8-data/bigfile.txt', 'Big hello word'.repeat(10000))
// }

//  createBigFile()

//ver informacion de la carpeta
//ls -l ./8-data 
//dir 8-data 

//servidor no tiene que leer todo el archivo completo, puede ser por partes
const {createReadStream}= require('fs')

const stream = createReadStream('./8-data/bigfile.txt', {
    encoding: 'utf-8'
    //flags o opciones, ver documentacion

}) //un objeto con manejadores de eventos

stream.on('data', (chunk)=> { // leer un archivo pero de a poco, a medida que le se va disparando el evento (65kb lee)
    console.log(chunk)
})

stream.on('end', ()=> { 
    console.log('Ya se termino de leer')
})

stream.on('error', (error)=> { 
    console.log(error)
})


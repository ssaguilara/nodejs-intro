//fs Sync

const fs = require('fs') // sirve para crear archivos, leerlos, editarlos

//read
const first = fs.readFileSync('./8-data/first.txt','utf-8')//codificacion de caracteres
const second = fs.readFileSync('./8-data/second.txt')

console.log(first)
console.log(second.toString())

//write
const third = fs.writeFileSync('./8-data/third.txt','hello word 3') //creo otro archivo
//si se escribe sobre uno ya creado se sobreescribe

const contenido = ' Hello word 4 '
const fourth = fs.writeFileSync('./8-data/fourth.txt', contenido, {
    flag: 'a'
}) //flag con la opcion 'a' es añadir, cada vez que se ejecuta añade el contenido 


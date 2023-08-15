const http = require('http')
const {createReadStream} = require('fs')

const server = http.createServer(function (req, res) {
    
    const fileStream = createReadStream('./8-data/bigfile.txt', {
        encoding: 'utf-8'})

    fileStream.on('data', (chunk)=>{
        fileStream.pipe(res) // pasar este dato para pasarselo a otra funcion, en este caso response
    })

    fileStream.on('error', error => {
        console.log(error)
    })

})

server.listen(3000)
console.log(`server on port ${3000}`)
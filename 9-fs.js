//fs Async

const fs = require('fs') // sirve para crear archivos, leerlos, editarlos

//read
// fs.readFile('./8-data/first.txt',function(error,data){
//     if(error)
//     console.log(error)

//     console.log(data.toString())
// })


fs.readFile('./8-data/first.txt','utf-8',function(error,data){
        if(error)
        console.log(error)
    
        console.log(data)

        fs.readFile('./8-data/second.txt','utf-8',function(error,data){
            if(error)
            console.log(error)
        
            console.log(data)

            fs.writeFile('./8-data/newfile.txt','archivo creado desde fs', (error, data)=>{

                if(error)
                console.log(error)
            
                console.log(data)

            })

        })

    })

//se observa que se va para la derecha es un callback hell, esto es insostenible, pero se arregla con promesas y asyn await
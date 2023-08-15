//api moderna llamada fetch usada en el navegador, tambien la tenemos en node

//sitio que nos dan datos datos en formato json
//https://jsonplaceholder.typicode.com/


// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())//convertir en formato json
//     .then(data => console.log(data))//imprimir el formato que se convirtio anterior

//otra forma de ponerlo

async function loadData() {
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()
        console.log(data)
    }
    catch(error){
        console.log(error)
    }
}

loadData()

//nueva version se puede sin necesidad de la async function, funciona porque pusimo type module(ver 23)

try{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    console.log(data)
}
catch(error){
    console.log(error)
}
//npx ejecutar aplicaciones de consola que se puede ejecutar con node

// por ejemplo en nodemon  la carpeta .bin contiene los ejecutables
// .\node_modules\.bin\nodemon index.js //
// nodemon index.js // estaba instalado en el pc no nos importa el codigo y se llama desde consola

//esto vemos pondemos instalar con codigo o  como aplicaiones que funcionan de consola

//cowsay tambien tiene bin
// ./node_modules/.bin/cowsay hello word

// para agilizar la ejecucion recuerdo ponerlo en el script en package.json
// "scripts": {
//     "divaca": "cowsay hello word"
//   }

//problema con este tipo de ejecucion ya que sale un erro de ejeucion  script

//ejecutar sin instalarlso en nuestro paroyectos ver que no aparece en el bin
// npx cowsay Sergio Development 

//crear servidores

//http-server
//serve

//npx serve 14-public

// en el frontend con framwork
// npx create-next-app
// npx create-react-app
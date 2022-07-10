// requerimos express y path
const express = require('express')
const path= require ('path')

// guardamos en un constante app la funcionalidad de express()
const app = express()

// definimos las rutas para los archivos estáticos(públicos) y otra para las vistas
const pathView = path.resolve(__dirname, "views")
const pathPublic = path.resolve(__dirname, "public")  

// Agregamos el middleware para configurar la carpeta de archivos estáticos
app.use(express.static(pathPublic))

// definimos el puerto en el que se va a levantar el servidor
const port = 3000

// Levantamos el servidor con app.listen(port)
app.listen(port, () => console.log(`Servidor funcionando en puerto ${
  port}`))

//Ruta index// Definimos la ruta que responda a GET "/" con la vista index.html

app.get('/', (req, res) => {
    res.sendFile(path.resolve(pathView, "index.html"))})


//Ruta login

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(pathView,"login.html"))
  })
    
  
  //Ruta product cart
    app.get('/productCart', (req, res) => {
      res.sendFile(path.resolve(pathView,"productCart.html"))
    })
  
  //Ruta product detail
    app.get('/productDetail', (req, res) => {
      res.sendFile(path.resolve(pathView,"productDetail.html"))
    })
  
  //Ruta register
  
  app.get('/register', (req, res) => {
      res.sendFile(path.resolve(pathView,"register.html"))
    })
  
const express = require('express')
const path= require ('path')

const app = express()

const pathView = path.resolve(__dirname, "views")
const pathPublic = path.resolve(__dirname, "public")  

app.use(express.static(pathPublic))

const port = 3000

app.get('/', (req, res) => {
    res.sendFile(path.resolve(pathView, "index.html"))})


app.listen(port, () => console.log(`¡Servidor funcionando en puerto ${port}!`))
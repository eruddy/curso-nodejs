const express = require('express')
const app = express()
const puerto=5000;
app.get('/', function (req, res) {
  res.send('<h1>Hello World</h1>');
})
app.post('/',function(req,res){
    res.send('Solcitud Post aceptada')
})
app.listen(puerto,()=>{
    console.log(`Servidor Express escuchando en el puerto :${puerto}`)
})
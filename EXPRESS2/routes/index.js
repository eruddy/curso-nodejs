const express=require("express");
const router=express.Router();


//Definiendo rutas raiz del proyecto
router.get('/',(req,res)=>{
    res.send('<h1>Bienvenido a la pagina de inicio</h1>')
})

module.exports=router;
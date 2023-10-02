const express=require("express");
const router=express.Router();


//Definiendo rutas raiz del proyecto
router.get('/',(req,res)=>{
    res.send('Lista de Usuarios');
});

router.post('/',(req,res)=>{
    res.send(req.body);
    console.log(req.body);
})

module.exports=router;
const express=require('express');
const app=express();
const puerto=5000;

//importar rutas
const indexRouter=require('./routes/index');
const usersRouter=require('./routes/users');
//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/',indexRouter);
app.use('/users',usersRouter);
app.listen(puerto,()=>{
    console.log(`Servidor Express ejecutandose en http://localhost:${puerto}`)
})
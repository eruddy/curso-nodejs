// setTimeout(()=>{
//     console.log('Este es un mensaje asincrono que se ejecuta despues de 2 segundos')
// },2000);

//Operacion Bloqueante
// const fs=require('fs');
// //Operacion Bloqueante 
// console.log("Iniciando operacion bloqueante");
// const data=fs.readFileSync('archivo.txt','utf-8');
// console.log("Operacion bloqueante completada. El contenido del archivo es :");
// console.log(data);

//Opracion no bloqueante
// console.log('Iniciando operacion no bloqueante');
// fs.readFile('archivo.txt','utf-8',(error,data)=>{
// if(error){
//     console.error('Error al leer el archivo');
//     return
// }
// console.log('Operacion no Bloqueante completada El contenido del archivo es :');
// console.log(data)
// });

// console.log("El programa continua ejecutandose miestras se espera que que se complete la operacion se complete");

//Utilizando promesas y async y await
// async function leerArchivoConPromesas(nombreArchivo){
//     try {
//         const contenido=await fs.readFile(nombreArchivo,'utf-8');
//         console.log(nombreArchivo);
//         return contenido;
//     } catch (error) {
//         console.error(error);
//         throw error;
//     }
// }


// (async()=>{
//     try {
//         const contenido =await leerArchivoConPromesas("archivo.txt");
//         console.log('Contenido del archivo :\n',contenido);
//     } catch (error) {
//         console.error('Error al leeer el archivo',error);
//     }
// })();
const fs=require('fs/promises');

async function leerArchivoConPromesas(nombreArchivo){
    try {
        const contenido=await fs.readFile(nombreArchivo,'utf-8');
        console.log(nombreArchivo);
        return contenido;
    } catch (error) {
        console.error(error);
        throw error;
    }
}


(async()=>{
    try {
        const contenido =await leerArchivoConPromesas("archivo.txt");
        console.log('Contenido del archivo :\n',contenido);
    } catch (error) {
        console.error('Error al leeer el archivo',error);
    }
})();
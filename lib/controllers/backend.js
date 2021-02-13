const Productos = require('../models/Productos');

const {body }= require('express-validator');



exports.adminHome = (req, res)=>{
    res.render('homeAdmin',{
        nombrePagina : 'administrador'
    });
}


exports.formularioProducto = (req , res)=>{
    res.render('nuevoProducto',{
        nombrePagina : 'Nuevo Producto'
    });
}


exports.nuevoProducto =  async(req , res ) =>{

    // extrayendo los archivo
    const archivo = req.files.archivo;
       
    // validar que los campos no vengan vacios 
    const { nombre , descriptionShort , descriptionLong , cantidad , category, precio } = req.body;

    let errores = [];

    if(!nombre) {
        errores.push({'texto' : 'Agrega un Nombre al producto'});
    }else if (!descriptionShort) {
        errores.push({'texto' : 'Agrega una descripcion corta al producto'});
    } else if(!descriptionLong) {
        errores.push({'texto':'agrega una descripcion larga al producto'});
    }else  if(!cantidad){
        errores.push({'texto':'agrega una cantidad al producto'});
    }else if (!category) {
        errores.push({'texto':'agrega una categoria al proyecto'});
    }else  if (!body(cantidad).isNumeric) {
        errores.push({'texto':'agrega un numero a la cantidad'});
    }else  if (!precio) {
        errores.push({'texto':'agrega una categoria al proyecto'});
    }

    if (!req.files)
    {
        errores.push({'texto':'agrega una imagen al formulario'});
    }


    

   

    // separar el nombre y la estenxion
    let nombreCortado = archivo.name.split('.');
    extexion = nombreCortado[nombreCortado.length -1];


    // extensiones validas para las imagenes
    let extensionesValidas =['png','jpg','jpeg'];

    //validar que son extensiones validas  para las imagenes
    if(extensionesValidas.indexOf(extexion) < 0){
        errores.push({'texto':'agrega una extension valida png,jpg,jpeg'});
    }
     

    

        
    

    // si hay errores 
    if (errores.length > 0){
        res.render('nuevoProducto',{
            nombrePagina :'Nuevo producto',
            errores
        });
        
    }else{
        //cambiar nombre del archivo para evitar error de cache
        const nombreArchivo = `${ new Date().getMilliseconds()  }-${ archivo.name }`;
        //guardar la archivos en el servidor en el servidor
        archivo.mv(`uploads/${nombreArchivo}`,(err)=> {
        if(err){
            errores.push({'texto':'hubo un error no se que paso !!'});
            }
        });
    

        
        // si no hay errores 
        // procedemos a insertar en la base de datos
       const producto = await Productos.create({ nombre , descriptionShort , descriptionLong , cantidad, nombreArchivo , precio });    
       
        
        
        res.redirect('/xxx');
    }

}
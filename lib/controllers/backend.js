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


exports.nuevoProducto = (req , res) =>{


    // validar que los campos no vengan vacios 
    const { nombre , descriptionShort , descriptionLong , Cantidad , category } = req.body;

    let errores = [];

    if(!nombre) {
        errores.push({'texto' : 'Agrega un Nombre al producto'});
    }else if (!descriptionShort) {
        errores.push({'texto' : 'Agrega una descripcion corta al producto'});
    } else if(!descriptionLong) {
        errores.push({'texto':'agrega una descripcion larga al producto'});
    }else  if(!Cantidad){
        errores.push({'texto':'agrega una cantidad al producto'});
    }else if (!category) {
        errores.push({'texto':'agrega una categoria al proyecto'});
    }

    // si hay errores 
    if (errores.length > 0){
        res.render('nuevoProducto',{
            nombrePagina :'Nuevo producto',
            errores
        });
        
    }else {
        // si no hay errores 
        // procedemos a insertar en la base de datos

        
    }

}
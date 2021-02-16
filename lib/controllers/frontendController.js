const Productos = require('../models/Productos');


exports.index= async (req, res) => {
    const productos = await Productos.findAll();
    res.render('index',{
        nombrePagina : 'La Licorera',
        productos
    });
}

exports.productosUrl = async (req, res,next) => {
    const producto = await Productos.findOne({
        where:{
            url: req.params.url
        }
    });

    if (!producto) {
        return next();
    }

    res.render('productDescription', {
        nombrePagina: 'Descripcion del producto',
        producto
    })
};
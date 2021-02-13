const Sequelize =  require('sequelize');
const uuid = require('uuid')
const slug = require('slug');
const db = require('../../config/db');


 
const Productos = db.define('productos',{
    id :{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nombre :{type: Sequelize.STRING(100)},
    descriptionShort :{type: Sequelize.STRING(100)},
    descriptionLong :{type: Sequelize.STRING(100)},
    cantidad :{type: Sequelize.INTEGER},
    nombreArchivo :{ type: Sequelize.STRING(50)},
    precio:{ type: Sequelize.INTEGER},
    url :{type: Sequelize.STRING(100)}

},{
    hooks: {
        beforeCreate(proyecto){
            const url = slug(proyecto.nombre).toLowerCase();
            
            proyecto.url = `${url}-${uuid.v4()}`

            console.log('Antes de insertar en la base de datos');
        }
    }
});

module.exports = Productos;
const Sequelize =  require('sequelize');

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
    url :{type: Sequelize.STRING(100)}

});

module.exports = Productos;
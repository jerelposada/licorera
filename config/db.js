const { Sequelize } = require('sequelize');

// Option 2: Passing parameters separately (other dialects)
const BD = new Sequelize('licorera', 'root', 'jerelposadaM2254-', {
    host: '127.0.0.1',
    port: '3306',
  
    define:{
      timestamps:false
    },

    dialect: 'mysql'
  });

  module.exports = BD;
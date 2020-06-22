const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'SuzasaHehataEdifier', 
    {
        dialect: 'mysql', host: 'localhost'
    }
);

module.exports = sequelize;

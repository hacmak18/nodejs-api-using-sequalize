const Sequelize = require('sequelize');

// Option 2: Passing parameters separately (other dialects)
module.exports = new Sequelize('codegig', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});
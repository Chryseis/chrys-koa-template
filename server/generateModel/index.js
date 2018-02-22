const path = require('path');
const SequelizeAuto = require('sequelize-auto');
const db = require('../config').mysqlConfig['development'];


const auto = new SequelizeAuto(db.database, db.user, db.password, {
    host: db.host,
    dialect: db.dialect,
    directory: path.resolve(__dirname, '../models'),
    port: db.port,
    additional: {
        timestamps: false
    },
    tables: ['wish', 'login', 'prize', 'config']
});

auto.run(function (err) {
    if (err) throw err;

    console.log(auto.tables); // table list
    console.log(auto.foreignKeys); // foreign key list
});
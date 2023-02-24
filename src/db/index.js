import Sequelize from 'sequelize';

import config from './config/config.js';
import define from './models/index.js';

// create sequelize instance
const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    port: config.port,
    dialect: config.dialect,
});

const db = define(sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;

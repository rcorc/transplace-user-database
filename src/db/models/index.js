import Sequelize from 'sequelize';

import config from '../config/config.js';
import defineMember from './member.js';
import defineVerifyTicket from './verifyTicket.js';
import defineLogEntry from './logEntry.js';

// create sequelize instance
const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    port: config.port,
    dialect: config.dialect,
});

// init models with the sequelize instance
const definers = [
    defineMember,
    defineVerifyTicket,
    defineLogEntry,
];

const models = {};

definers.forEach((definer) => {
    const model = definer(sequelize);
    models[model.name] = model;
    sequelize[model.name] = model;
});

// create associations
Object.keys(models).forEach((model) => {
    if (Object.hasOwn(model, 'associate')) {
        model.associate(models);
    }
});

export default sequelize;

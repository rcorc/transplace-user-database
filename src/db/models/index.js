import defineMember from './member.js';
import defineVerifyTicket from './verifyTicket.js';
import defineLogEntry from './logEntry.js';

function define(sequelize) {
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
    });

    // create associations
    Object.keys(models).forEach((model) => {
        if (Object.hasOwn(model, 'associate')) {
            model.associate(models);
        }
    });

    return models;
}

export default define;

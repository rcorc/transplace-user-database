import { DataTypes, Model } from 'sequelize';
import { snowflakeRegex } from '../utils/validate.js';

function defineLogEntry(sequelize) {
    class LogEntry extends Model {
        static associate(models) {
            LogEntry.belongsTo(models.Member);
            LogEntry.belongsTo(models.VerifyTicket);
        }
    }

    LogEntry.init({
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        messageId: {
            type: DataTypes.STRING,
            validate: {
                is: snowflakeRegex,
            },
        },
        createdAt: { // validate this
            type: DataTypes.DATE,
            allowNull: false,
        },
        type: { // should this be an enum? verify: create, verify, kick, ban, maybe mod: ban, whatever
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        creatorId: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'Members',
                key: 'userId',
            },
        },
        targetId: {  // TODO: come up with different names
            type: DataTypes.STRING,
            references: {
                model: 'Members',
                key: 'userId',
            },
        },
        reason: DataTypes.STRING,
        verifyTicket: { // perhaps if verify logs and mod logs are reconciled then this will be able to be ticket
            type: DataTypes.STRING,
            references: {
                model: 'VerifyTickets',
                key: 'channelId', // we may need to rethink this being the pk if verifyTicket become generalized
            },
        },
    }, {
        sequelize,
        modelName: 'LogEntry',
    });

    return LogEntry;
}

export default defineLogEntry;

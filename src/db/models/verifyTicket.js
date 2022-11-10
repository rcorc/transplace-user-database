import { DataTypes, Model } from 'sequelize';
import { snowflakeRegex, isAfterGuildCreation } from '../utils/validate.js';

function defineVerifyTicket(sequelize) {
    class VerifyTicket extends Model {
        static associate(models) {
            VerifyTicket.belongsTo(models.Member);
            VerifyTicket.hasMany(models.LogEntry);
        }
    }

    VerifyTicket.init({
        channelId: {
            type: DataTypes.STRING,
            validate:
            {
                is: snowflakeRegex,
            },
            primaryKey: true,
        },
        applicantId: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'Members',
                key: 'userId',
            },
        },
        verifierId: {
            type: DataTypes.STRING,
            references: {
                model: 'Members',
                key: 'userId',
            },
        },
        status: DataTypes.INTEGER, // should this be an enum? open (created, answered), closed (verify, kick, ban, leave), hold
        createdTimestamp: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                isAfterGuildCreation,
            },
        },
        closedTimestamp: {
            type: DataTypes.DATE,
            validate: {
                isAfterGuildCreation,
            },
        },
    }, {
        sequelize,
        modelName: 'VerifyTicket',
    });

    return VerifyTicket;
}

export default defineVerifyTicket;

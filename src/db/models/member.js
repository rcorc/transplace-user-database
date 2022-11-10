import { DataTypes, Model } from 'sequelize';
import {
    avatarRegex,
    discriminatorRegex,
    snowflakeRegex,
    usernameRegex,
    isAfterGuildCreation,
} from '../utils/validate.js';

function defineMember(sequelize) {
    class Member extends Model {
        static associate(models) {
            Member.hasMany(models.LogEntry);
            Member.hasMany(models.VerifyTicket);
        }
    }

    Member.init({
        userId: {
            type: DataTypes.STRING,
            validate:
            {
                is: snowflakeRegex,
            },
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            validate: {
                is: usernameRegex,
            },
        },
        discriminator: {
            type: DataTypes.STRING,
            validate: {
                is: discriminatorRegex,
            },
        },
        nickname: { // ?
            type: DataTypes.STRING,
            validate: {
                len: [1, 32],
            },
        },
        avatar: {
            type: DataTypes.STRING,
            validate: {
                is: avatarRegex,
            },
        },
        joinedAt: {
            type: DataTypes.DATE,
            validate: {
                isAfterGuildCreation, // I am manifesting this not breaking for Cleo
            },
        },
        firstJoinedAt: {
            type: DataTypes.DATE,
            validate: {
                isAfterGuildCreation,
            },
        },
        lastLeftAt: {
            type: DataTypes.DATE,
            validate: {
                isAfterGuildCreation,
            },
        },
        verified: DataTypes.BOOLEAN, // keep true for users who leave of their own accord?
    }, {
        sequelize,
        modelName: 'Member',
        validate: {
            partialOrHasRequiredFields() {
                if ((this.username
                    || this.discriminator
                    || this.avatar
                    || this.nickname
                    || this.joinedAt
                    || this.firstJoinedAt
                    || this.lastLeftAt
                    || this.verified
                ) && !(this.username
                    && this.discriminator
                    && this.avatar
                    && this.nickname
                    && this.joinedAt
                )) {
                    throw new Error('Valid members must either be a partial (only has the userId field) or have all of the fields: username, discriminator, avatar, nickname, joinedAt!');
                }
            },
        },
    });

    return Member;
}

export default defineMember;

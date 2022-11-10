import sequelize from '../models/index.js';

await sequelize.sync({ force: true });
// await sequelize.sync();

const hecate = sequelize.Member.build({
    userId: '12345678901234567',
    username: 'HecatesRevenge',
    discriminator: 1234,
    avatar: 'asdf',
    nickname: '꧁ Hecate꧂',
    joinedAt: new Date(),
});

const elise = sequelize.Member.build({
    userId: '111222333444555666',

    username: '꧁e̶̛͆l̴̓́ 123 456',

    discriminator: '5678',
    avatar: 'a_blahblahblah',
    nickname: 'Elise | Hecate simp',
    joinedAt: new Date(),
});

const jester = sequelize.Member.build({
    userId: '8765432109876543210',
    username: 'jester hearts',
    discriminator: '5678',
    avatar: 'asa3d32f41svd',
    nickname: 'jester hearts',
    joinedAt: new Date(),
});

await hecate.save();
await elise.save();
await jester.save();

const hecateTicket = sequelize.VerifyTicket.build({
    channelId: '21345678901234567',
    applicantId: '12345678901234567',
    createdTimestamp: new Date(),
});

await hecateTicket.save();

const hecateLog = sequelize.LogEntry.build({
    createdAt: new Date(),
    type: 1,
    creatorId: '8765432109876543210',
    verifyTicket: '21345678901234567',
});

await hecateLog.save();

await sequelize.close();

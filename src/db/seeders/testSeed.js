import db from '../index.js';

const { sequelize } = db;
await sequelize.sync({ force: true });
// await sequelize.sync();

const hecate = db.Member.build({
    userId: '12345678901234567',
    username: 'HecatesRevenge',
    discriminator: 1234,
    avatar: 'asdf',
    nickname: '꧁ Hecate꧂',
    joinedAt: new Date(),
});

const elise = db.Member.build({
    userId: '111222333444555666',

    username: '꧁e̶̛͆l̴̓́ 123 456',

    discriminator: '5678',
    avatar: 'a_blahblahblah',
    nickname: 'Elise | Hecate simp',
    joinedAt: new Date(),
});

const jester = db.Member.build({
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

const hecateTicket = db.VerifyTicket.build({
    channelId: '21345678901234567',
    applicantId: '12345678901234567',
    createdTimestamp: new Date(),
});
const jesterTicket = db.VerifyTicket.build({
    channelId: '32145678901234567',
    applicantId: '8765432109876543210',
    createdTimestamp: new Date(),
});

await hecateTicket.save();
await jesterTicket.save();

const hecateLog = db.LogEntry.build({
    created: new Date(),
    type: 1,
    creatorId: '111222333444555666',
    verifyTicket: '21345678901234567',
});

const jesterLog = db.LogEntry.build({
    created: new Date(),
    type: 2,
    creatorId: '111222333444555666',
    verifyTicket: '32145678901234567',
});

await hecateLog.save();
await jesterLog.save();

await sequelize.close();

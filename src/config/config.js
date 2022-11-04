import 'dotenv/config';

const config = {
    database: {
        url: `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}`,
    },
};

export default config;

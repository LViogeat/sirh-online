const knex = require('knex');
const { attachOnExitListener } = require('./utils/dbUtils');
const dotenv = require('dotenv');
dotenv.config();


const knexConfig = {
  client: 'pg',
  connection: process.env.SUPABASE_URL,
  ssl: { rejectUnauthorized: false },
  pool: { min: 2, max: 20 },
  acquireConnectionTimeout: 10000
};

const db = knex(knexConfig);

db.raw('SELECT 1')
  .then(() => {
    console.log('Database connected successfully.');
  })
  .catch((err) => {
    console.error('Database connection failed:', err);
  });

attachOnExitListener(db);

module.exports = db;

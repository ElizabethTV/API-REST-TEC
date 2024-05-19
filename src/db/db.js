const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: '192.168.6.68',
    database: 'Universidad',
    password: 'password',
    port: 5432
});

module.exports = { pool };

const { Pool} = require('pg')

const dbCredentials = new Pool({
  user: 'haym4b',
  database: 'oncocasen',
  password: 'magicburger5_',
  port: 5432,
  host: '10.200.42.150',
})

module.exports = { dbCredentials };

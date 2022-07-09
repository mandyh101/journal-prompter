//config set up so db can access knex and query the database
const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getAllPrompts(db = connection) {
  return db('prompts').select()
}

module.exports = {
  getAllPrompts,
}

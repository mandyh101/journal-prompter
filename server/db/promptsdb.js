//config set up so db can access knex and query the database
const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getAllPrompts(db = connection) {
  return db('prompts').select()
}
function addPrompt(newPrompt, db = connection) {
  const { prompt, category} = newPrompt //deconstruct the newPrompt obj
  return db('prompts')
    .insert({prompt, category})
    .then(([id]) => {return {id, prompt, category} //not sure what thi sline is doing?
    })
}

module.exports = {
  getAllPrompts,
  addPrompt
}

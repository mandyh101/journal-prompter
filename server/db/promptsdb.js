//config set up so db can access knex and query the database
const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getAllPrompts(db = connection) {
  return db('prompts').select()
}

function addPrompt(newPrompt, db = connection) {
  const { prompt, category } = newPrompt //deconstruct the newPrompt obj
  return (
    db('prompts')
      .insert({ prompt, category })
      // .then(([id]) => {return {id, prompt, category} //shorter way
      .then((ids) => {
        return { id: ids[0], prompt, category } //with the array returned from insert , insert an object with the id property = to the id array
        //.then(ids) => {
        // return getPrompt(ids[0])}
      })
  )
}

//function delPrompt(promptId, db= dbconnection){
//   return db('prompts').where('id', promptId).delete()
// }

// return db('coffee-beans').where('id', coffeeId).delete()

module.exports = {
  getAllPrompts,
  addPrompt,
}

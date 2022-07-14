//config set up so db can access knex and query the database
const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getAllPrompts(db = connection) {
  return db('prompts').select()
}

function addPrompt(newPrompt, db = connection) {
  const { prompt, category } = newPrompt //deconstruct the newPrompt obj
  return db('prompts')
    .insert({ prompt, category }) //insert returns an array with the id number of the new item in the array
    .then(([id]) => {
      return { id, prompt, category } //then at take the id returned from insert, turn it into an index with square brackets and at that index return an object with the new data
      //alternative way to write line 15
      // .then((ids) => {
      //   return { id: ids[0], prompt, category } //with the array returned from insert , insert an object with the id property = to the id array
    })
}

function delPrompt(promptId, db = connection) {
  return db('prompts').where('id', promptId).del()
}

function updatePrompt(editedPrompt, db = connection) {
  return db('prompts')
    .where({ id: prompt.id })
    .update({ prompt: editedPrompt.prompt, category: editedPrompt.category })
}

module.exports = {
  getAllPrompts,
  addPrompt,
  delPrompt,
  updatePrompt,
}

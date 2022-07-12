const express = require('express')
const router = express.Router()
const db = require('../db/promptsdb')

//get all prompts
router.get('/', (req, res) => {
  db.getAllPrompts()
    .then((prompts) => {
      res.json(prompts)
    })
    .catch((err) => {
      res.status(500).send('Sorry, cannot access server.')
      console.error(err)
    })
})

router.post('/', (req, res) => {
  const { prompt, category} = req.body
  db.addPrompt({prompt, category})
    .then((newPrompt) => {
      console.log(newPrompt)
      res.json(newPrompt)
      return null
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('Server error')
    })
})

//router.delete('/', (req,res) => {
  // const id = req.body.id
  //call the db func that deletes(id)
  //.then(deletedPrompt)
// })
module.exports = router




// router.delete('/', (req, res) => {
//   const id = req.body.id
//   db.deleteCoffee(id)
//     .then(() => {
//       res.sendStatus(200)
//     })
//     .catch((err) => {
//       res.status(500).send(err.message)
//     })
// })

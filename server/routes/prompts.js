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
  const { prompt, category } = req.body
  db.addPrompt({ prompt, category })
    .then((newPrompt) => {
      res.json(newPrompt)
      return null
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('Server error')
    })
})

router.delete('/:id', (req, res) => {
  const promptId = req.params.id
  console.log(promptId)
  db.delPrompt(promptId) //id is sent in body from client
    .then(() => {
      res.sendStatus(200)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('Server error')
    })
})

router.patch('/:id', (req, res) => {
  let prompt = {
    id: req.body.id,
    prompt: req.body.prompt,
    category: req.body.category,
  }
  db.updatePrompt(prompt)
    .then(() => {
      return db.getPrompt(req.body.id) //TODO write db function to get a prompt
    })
    .then((updatedPrompt) => {
      res.json(updatedPrompt)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('Server error')
    })
})

module.exports = router

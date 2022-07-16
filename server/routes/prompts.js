const express = require('express')
const router = express.Router()
const db = require('../db/promptsdb')

//GET all prompts /api/v1/prompts
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

//POST /api/v1/prompts
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

//DELETE /api/v1/prompts
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

//GET a prompt /api/v1/prompts/:id
router.get('/:id', (req, res) => {
  const id = req.params.id
  db.getPrompt(id)
    .then((prompt) => {
      res.json(prompt)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('Server error')
    })
})

//PATCH a prompt /api/v1/prompts/edit/:id
router.patch('/edit/:id', (req, res) => {
  const id = req.params.id
  const prompt = req.body
  db.updatePrompt(prompt, id)
    .then((updatedPrompt) => {
      console.log(updatedPrompt)
      res.sendStatus(200)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})
// router.patch('/edit/:id', (req, res) => {
//   let prompt = {
//     prompt: req.body.prompt,
//     category: req.body.category,
//   }
//   let id = req.params.id
//   console.log(id)
//   db.updatePrompt(prompt)
//     .then(() => {
//       return db.getPrompt(req.params.id)
//     })
//     .then((updatedPrompt) => {
//       res.json(updatedPrompt)
//     })
//     .catch((err) => {
//       console.error(err.message)
//       res.status(500).send('Server error')
//     })
// })

module.exports = router

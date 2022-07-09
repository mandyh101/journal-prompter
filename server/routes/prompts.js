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

module.exports = router

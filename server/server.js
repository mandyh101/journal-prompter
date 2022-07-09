const express = require('express')
const path = require('path')

const server = express()
//filepath to the prompts route
const prompts = require('./routes/prompts')

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

//internal api
server.use('/api/v1/prompts', prompts)

module.exports = server
